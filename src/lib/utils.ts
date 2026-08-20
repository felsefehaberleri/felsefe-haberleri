/** Koşullu sınıf adlarını birleştiren küçük yardımcı (clsx'in minimal hâli). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const TR_DATE = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** 12 Ağustos 2026 biçiminde Türkçe tarih. */
export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "Taslak";
  return TR_DATE.format(typeof date === "string" ? new Date(date) : date);
}

/** Markdown gövdesinden kaba okuma süresi (dakika). Türkçe için ~180 kelime/dk. */
export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}

/** Türkçe karakterleri de destekleyen slug üretici (yeni içerik eklerken kullanılır). */
export function slugify(input: string): string {
  const map: Record<string, string> = {
    ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u",
    Ç: "c", Ğ: "g", İ: "i", Ö: "o", Ş: "s", Ü: "u",
  };
  return input
    .replace(/[çğıöşüÇĞİÖŞÜ]/g, (ch) => map[ch] ?? ch)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
