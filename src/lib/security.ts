import "server-only";

import { createHash, randomBytes } from "node:crypto";

/**
 * Form uçları için hafif koruma katmanı.
 * Amaç kurumsal bir güvenlik duvarı değil; sıradan bot ve tekrar gönderimlerini kesmek.
 */

/** Tek kullanımlık, tahmin edilemez anahtar (onay/çıkış bağlantıları). */
export function createToken(): string {
  return randomBytes(24).toString("base64url");
}

/**
 * IP adresini ham hâlde saklamıyoruz; tuzlanmış özetini tutuyoruz.
 * Böylece kötüye kullanım incelenebilir ama kişisel veri birikmez.
 */
export function hashIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip");
  if (!ip) return null;

  const salt = process.env.IP_HASH_SALT ?? "felsefe-haberleri";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

/* ------------------------------------------------------------------ */
/* Hız sınırı                                                          */
/* ------------------------------------------------------------------ */

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

/**
 * Basit sabit pencereli hız sınırı.
 * Not: Sunucusuz ortamda her örnek kendi belleğini tuttuğu için mutlak bir
 * garanti değil, ilk savunma hattıdır. Trafik büyürse paylaşımlı bir sayaca
 * (ör. Upstash Redis) geçirmek yeterlidir.
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count += 1;
  return true;
}

/* ------------------------------------------------------------------ */
/* Doğrulama ve temizleme                                              */
/* ------------------------------------------------------------------ */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/** Görünmez kontrol karakterleri (satır sonu ve sekme dışındakiler). */
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value) && value.length <= 254;
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** Kontrol karakterlerini temizler, boşlukları kırpar, uzunluğu sınırlar. */
export function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, "").trim().slice(0, maxLength);
}

/** Kaba spam denetimi: aşırı bağlantı, tümü büyük harf, tekrarlı karakter. */
export function looksLikeSpam(body: string): boolean {
  const links = (body.match(/https?:\/\//gi) ?? []).length;
  if (links > 2) return true;

  const letters = body.replace(/[^\p{L}]/gu, "");
  if (letters.length > 25 && letters === letters.toLocaleUpperCase("tr-TR")) return true;

  if (/(.)\1{15,}/.test(body)) return true;

  return false;
}

/**
 * Botlar formdaki gizli alanı da doldurur; insan kullanıcı göremediği için dolduramaz.
 * Dolu geldiyse istek sessizce başarılı sayılır ama kayıt yapılmaz.
 */
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
