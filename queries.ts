import "server-only";

import { prisma } from "@/lib/prisma";
import type {
  BookSummary,
  CategoryWithCount,
  Paginated,
  PhilosopherDetail,
  PhilosopherWithCount,
  PostDetail,
  PostListItem,
  PostQueryOptions,
  TagSummary,
} from "@/types/content";

/** Varsayılan sayfa boyutu ve üst sınır (API'nin kötüye kullanılmasını engeller). */
export const DEFAULT_PAGE_SIZE = 9;
export const MAX_PAGE_SIZE = 50;

/** Yalnızca yayımlanmış haberler: publishedAt dolu ve geçmişte. */
const publishedFilter = () => ({
  publishedAt: { not: null, lte: new Date() },
});

/** Kart/liste görünümleri için ortak select — gövde (content) çekilmez. */
const listSelect = {
  id: true,
  title: true,
  slug: true,
  summary: true,
  coverImage: true,
  featured: true,
  publishedAt: true,
  author: { select: { id: true, name: true, slug: true, avatar: true, bio: true } },
  category: { select: { id: true, name: true, slug: true, description: true } },
  tags: { select: { id: true, name: true, slug: true } },
  philosophers: {
    select: { id: true, name: true, slug: true, headline: true, avatar: true, country: true, affiliation: true },
  },
} as const;

const bookSelect = {
  id: true,
  title: true,
  slug: true,
  originalTitle: true,
  publisher: true,
  translator: true,
  language: true,
  coverImage: true,
  description: true,
  year: true,
  link: true,
  philosopher: { select: { id: true, name: true, slug: true } },
} as const;

/**
 * Sayfalanmış haber listesi. Kategori, etiket, filozof, editör ve arama filtrelerini destekler.
 * Hem site sayfaları hem de `/api/posts` bu fonksiyonu kullanır.
 */
export async function getPosts(options: PostQueryOptions = {}): Promise<Paginated<PostListItem>> {
  const page = Math.max(1, Math.floor(options.page ?? 1));
  const limit = Math.min(MAX_PAGE_SIZE, Math.max(1, Math.floor(options.limit ?? DEFAULT_PAGE_SIZE)));

  const where = {
    ...publishedFilter(),
    ...(options.categorySlug ? { category: { slug: options.categorySlug } } : {}),
    ...(options.tagSlug ? { tags: { some: { slug: options.tagSlug } } } : {}),
    ...(options.philosopherSlug ? { philosophers: { some: { slug: options.philosopherSlug } } } : {}),
    ...(options.authorSlug ? { author: { slug: options.authorSlug } } : {}),
    ...(options.excludeSlug ? { slug: { not: options.excludeSlug } } : {}),
    ...(options.search
      ? {
          OR: [
            { title: { contains: options.search, mode: "insensitive" as const } },
            { summary: { contains: options.search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [total, items] = await Promise.all([
    prisma.post.count({ where }),
    prisma.post.findMany({
      where,
      select: listSelect,
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

/**
 * Manşet slider'ındaki haberler.
 * Öne çıkarılmış haberler yeterli değilse en yeni haberlerle tamamlanır,
 * böylece slider hiçbir zaman boş kalmaz.
 */
export async function getFeaturedPosts(take = 5): Promise<PostListItem[]> {
  const featured = await prisma.post.findMany({
    where: { ...publishedFilter(), featured: true },
    select: listSelect,
    orderBy: { publishedAt: "desc" },
    take,
  });

  if (featured.length >= take) return featured;

  const fillers = await prisma.post.findMany({
    where: { ...publishedFilter(), featured: false },
    select: listSelect,
    orderBy: { publishedAt: "desc" },
    take: take - featured.length,
  });

  return [...featured, ...fillers];
}

/** Ana sayfa manşeti. featured yoksa en yeni habere düşer. */
export async function getFeaturedPost(): Promise<PostListItem | null> {
  const featured = await prisma.post.findFirst({
    where: { ...publishedFilter(), featured: true },
    select: listSelect,
    orderBy: { publishedAt: "desc" },
  });

  if (featured) return featured;

  return prisma.post.findFirst({
    where: publishedFilter(),
    select: listSelect,
    orderBy: { publishedAt: "desc" },
  });
}

/** Tek haber (Markdown gövdesiyle). Bulunamazsa null döner. */
export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  return prisma.post.findFirst({
    where: { slug, ...publishedFilter() },
    select: {
      ...listSelect,
      content: true,
      seoTitle: true,
      metaDescription: true,
      contentType: true,
      imageCredit: true,
      sourceName: true,
      sourceUrl: true,
      updatedAt: true,
    },
  });
}

/** Aynı kategoriden, o haber hariç en yeni birkaç haber. */
export async function getRelatedPosts(slug: string, categorySlug: string, take = 3): Promise<PostListItem[]> {
  return prisma.post.findMany({
    where: { ...publishedFilter(), slug: { not: slug }, category: { slug: categorySlug } },
    select: listSelect,
    orderBy: { publishedAt: "desc" },
    take,
  });
}

/** Tüm kategoriler + yayımlanmış haber sayıları (navigasyon ve /api/categories). */
export async function getCategories(): Promise<CategoryWithCount[]> {
  const rows = await prisma.category.findMany({
    orderBy: [{ order: "asc" }, { name: "asc" }],
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      _count: { select: { posts: { where: publishedFilter() } } },
    },
  });

  return rows.map(({ _count, ...category }) => ({ ...category, postCount: _count.posts }));
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    select: { id: true, name: true, slug: true, description: true },
  });
}

/** Etiket bulutu için en çok kullanılan etiketler. */
export async function getTags(take = 24): Promise<TagSummary[]> {
  return prisma.tag.findMany({
    orderBy: { posts: { _count: "desc" } },
    select: { id: true, name: true, slug: true },
    take,
  });
}

export async function getTagBySlug(slug: string) {
  return prisma.tag.findUnique({ where: { slug }, select: { id: true, name: true, slug: true } });
}

/* ------------------------------------------------------------------ */
/* Filozoflar                                                          */
/* ------------------------------------------------------------------ */

const philosopherSelect = {
  id: true,
  name: true,
  slug: true,
  headline: true,
  avatar: true,
  country: true,
  affiliation: true,
} as const;

/** Filozof listesi; `onlyFeatured` ana sayfadaki şerit için kullanılır. */
export async function getPhilosophers(
  options: { onlyFeatured?: boolean; take?: number } = {},
): Promise<PhilosopherWithCount[]> {
  const rows = await prisma.philosopher.findMany({
    where: options.onlyFeatured ? { featured: true } : undefined,
    orderBy: { name: "asc" },
    take: options.take,
    select: {
      ...philosopherSelect,
      _count: { select: { posts: { where: publishedFilter() } } },
    },
  });

  return rows.map(({ _count, ...philosopher }) => ({ ...philosopher, postCount: _count.posts }));
}

export async function getPhilosopherBySlug(slug: string): Promise<PhilosopherDetail | null> {
  return prisma.philosopher.findUnique({
    where: { slug },
    select: { ...philosopherSelect, bio: true, birthYear: true, website: true, featured: true },
  });
}

/** Bir filozofun kitapları (profil sayfası). */
export async function getBooksByPhilosopher(slug: string): Promise<BookSummary[]> {
  return prisma.book.findMany({
    where: { philosopher: { slug } },
    orderBy: [{ year: "desc" }, { title: "asc" }],
    select: bookSelect,
  });
}

/* ------------------------------------------------------------------ */
/* Kitaplar                                                            */
/* ------------------------------------------------------------------ */

export async function getBooks(take?: number): Promise<BookSummary[]> {
  return prisma.book.findMany({
    orderBy: [{ year: "desc" }, { createdAt: "desc" }],
    take,
    select: bookSelect,
  });
}

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

/** sitemap için tüm yayımlanmış slug'lar. */
export async function getAllPostSlugs(): Promise<string[]> {
  const rows = await prisma.post.findMany({ where: publishedFilter(), select: { slug: true } });
  return rows.map((row) => row.slug);
}

export async function getAllPhilosopherSlugs(): Promise<string[]> {
  const rows = await prisma.philosopher.findMany({ select: { slug: true } });
  return rows.map((row) => row.slug);
}
