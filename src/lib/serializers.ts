import { readingTime } from "@/lib/utils";
import type {
  BookSummary,
  CategoryWithCount,
  PhilosopherDetail,
  PhilosopherSummary,
  PhilosopherWithCount,
  PostDetail,
  PostListItem,
} from "@/types/content";

/**
 * API (mobil uygulama) sözleşmesi.
 * Tarihler ISO 8601 string'e çevrilir; JSON'da Date tipi yoktur.
 */
export interface ApiPhilosopherSummary {
  id: string;
  name: string;
  slug: string;
  headline: string | null;
  avatar: string | null;
  country: string | null;
  affiliation: string | null;
}

export interface ApiPhilosopherDetail extends ApiPhilosopherSummary {
  bio: string | null;
  birthYear: number | null;
  website: string | null;
  featured: boolean;
  postCount?: number;
}

export interface ApiBook {
  id: string;
  title: string;
  slug: string;
  originalTitle: string | null;
  publisher: string | null;
  translator: string | null;
  language: string | null;
  coverImage: string | null;
  description: string | null;
  year: number | null;
  link: string | null;
  philosopher: { id: string; name: string; slug: string } | null;
}

export interface ApiPostSummary {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string | null;
  featured: boolean;
  publishedAt: string | null;
  author: { id: string; name: string; slug: string; avatar: string | null };
  category: { id: string; name: string; slug: string };
  tags: Array<{ id: string; name: string; slug: string }>;
  philosophers: ApiPhilosopherSummary[];
}

export interface ApiPostDetail extends ApiPostSummary {
  /** Markdown gövde — istemci tarafında render edilir. */
  content: string;
  /** Tahmini okuma süresi (dakika). */
  readingMinutes: number;
  imageCredit: string | null;
  source: { name: string; url: string | null } | null;
  updatedAt: string;
  authorBio: string | null;
}

export interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  postCount: number;
}

export function toApiPhilosopher(philosopher: PhilosopherSummary): ApiPhilosopherSummary {
  return {
    id: philosopher.id,
    name: philosopher.name,
    slug: philosopher.slug,
    headline: philosopher.headline,
    avatar: philosopher.avatar,
    country: philosopher.country,
    affiliation: philosopher.affiliation,
  };
}

export function toApiPhilosopherDetail(
  philosopher: PhilosopherDetail,
  postCount?: number,
): ApiPhilosopherDetail {
  return {
    ...toApiPhilosopher(philosopher),
    bio: philosopher.bio,
    birthYear: philosopher.birthYear,
    website: philosopher.website,
    featured: philosopher.featured,
    ...(postCount === undefined ? {} : { postCount }),
  };
}

export function toApiPhilosopherWithCount(philosopher: PhilosopherWithCount): ApiPhilosopherSummary & {
  postCount: number;
} {
  return { ...toApiPhilosopher(philosopher), postCount: philosopher.postCount };
}

export function toApiBook(book: BookSummary): ApiBook {
  return {
    id: book.id,
    title: book.title,
    slug: book.slug,
    originalTitle: book.originalTitle,
    publisher: book.publisher,
    translator: book.translator,
    language: book.language,
    coverImage: book.coverImage,
    description: book.description,
    year: book.year,
    link: book.link,
    philosopher: book.philosopher,
  };
}

export function toApiPostSummary(post: PostListItem): ApiPostSummary {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    summary: post.summary,
    coverImage: post.coverImage,
    featured: post.featured,
    publishedAt: post.publishedAt ? post.publishedAt.toISOString() : null,
    author: {
      id: post.author.id,
      name: post.author.name,
      slug: post.author.slug,
      avatar: post.author.avatar,
    },
    category: { id: post.category.id, name: post.category.name, slug: post.category.slug },
    tags: post.tags.map((tag) => ({ id: tag.id, name: tag.name, slug: tag.slug })),
    philosophers: post.philosophers.map(toApiPhilosopher),
  };
}

export function toApiPostDetail(post: PostDetail): ApiPostDetail {
  return {
    ...toApiPostSummary(post),
    content: post.content,
    readingMinutes: readingTime(post.content),
    imageCredit: post.imageCredit,
    source: post.sourceName ? { name: post.sourceName, url: post.sourceUrl } : null,
    updatedAt: post.updatedAt.toISOString(),
    authorBio: post.author.bio,
  };
}

export function toApiCategory(category: CategoryWithCount): ApiCategory {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    postCount: category.postCount,
  };
}
