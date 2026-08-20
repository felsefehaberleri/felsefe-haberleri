import type { MetadataRoute } from "next";

import { getAllPhilosopherSlugs, getAllPostSlugs, getCategories } from "@/lib/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Dinamik site haritası — haber, bölüm ve filozof adresleri veritabanından üretilir. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, philosopherSlugs, categories] = await Promise.all([
    getAllPostSlugs(),
    getAllPhilosopherSlugs(),
    getCategories(),
  ]);

  return [
    { url: siteUrl, changeFrequency: "hourly", priority: 1 },
    { url: `${siteUrl}/filozoflar`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/kitaplar`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/hakkinda`, changeFrequency: "yearly", priority: 0.3 },
    ...categories.map((category) => ({
      url: `${siteUrl}/kategori/${category.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...philosopherSlugs.map((slug) => ({
      url: `${siteUrl}/filozof/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...postSlugs.map((slug) => ({
      url: `${siteUrl}/haber/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
