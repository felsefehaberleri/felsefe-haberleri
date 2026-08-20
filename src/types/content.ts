/**
 * Uygulama genelinde kullanılan içerik tipleri.
 *
 * Bu tipler bilinçli olarak Prisma'nın ürettiği tiplerden ayrı tutulur:
 * veritabanı şeması değiştiğinde arayüz ve mobil API sözleşmesi kırılmasın diye
 * araya açık bir katman koyuyoruz.
 */

export interface AuthorSummary {
  id: string;
  name: string;
  slug: string;
  avatar: string | null;
  bio: string | null;
}

export interface CategorySummary {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface CategoryWithCount extends CategorySummary {
  /** Yayımlanmış haber sayısı. */
  postCount: number;
}

export interface TagSummary {
  id: string;
  name: string;
  slug: string;
}

/** Haber kartlarında ve filozof şeridinde kullanılan kısa filozof kaydı. */
export interface PhilosopherSummary {
  id: string;
  name: string;
  slug: string;
  headline: string | null;
  avatar: string | null;
  country: string | null;
  affiliation: string | null;
}

/** Filozof profil sayfası için tüm alanlar. */
export interface PhilosopherDetail extends PhilosopherSummary {
  bio: string | null;
  birthYear: number | null;
  website: string | null;
  featured: boolean;
}

export interface PhilosopherWithCount extends PhilosopherSummary {
  postCount: number;
}

export interface BookSummary {
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

/** Kart/liste görünümleri için gövdesiz haber. */
export interface PostListItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string | null;
  featured: boolean;
  publishedAt: Date | null;
  author: AuthorSummary;
  category: CategorySummary;
  tags: TagSummary[];
  philosophers: PhilosopherSummary[];
}

/** Detay sayfası için Markdown gövdesini de içeren haber. */
export interface PostDetail extends PostListItem {
  content: string;
  imageCredit: string | null;
  sourceName: string | null;
  sourceUrl: string | null;
  updatedAt: Date;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Paginated<T> {
  items: T[];
  pagination: PaginationMeta;
}

export interface PostQueryOptions {
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  authorSlug?: string;
  /** Belirli bir filozofa ait haberler. */
  philosopherSlug?: string;
  /** Başlık/özet içinde basit metin araması. */
  search?: string;
  /** Manşetteki haberi listeden çıkarmak için. */
  excludeSlug?: string;
}
