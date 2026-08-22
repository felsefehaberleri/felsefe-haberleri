import { NextResponse } from "next/server";

import { jsonError, jsonOk } from "@/lib/api";
import { sendMail, subscriptionConfirmMail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import {
  clean,
  createToken,
  isHoneypotFilled,
  isValidEmail,
  normalizeEmail,
  rateLimit,
  hashIp,
} from "@/lib/security";

export const dynamic = "force-dynamic";

/**
 * POST /api/subscribe
 * Gövde: { email, name?, website? }
 *
 * Çift onaylı (double opt-in) kayıt: kayıt anında üyelik PENDING olur ve
 * e-postaya onay bağlantısı gider. Onaylanmadan bülten gönderilmez.
 * Bu, hem yasal olarak doğru hem de spam şikâyetlerine karşı koruma sağlar.
 */
export async function POST(request: Request) {
  try {
    if (!rateLimit(`subscribe:${hashIp(request) ?? "anon"}`, 5, 60 * 60 * 1000)) {
      return jsonError("RATE_LIMITED", "Çok fazla deneme yapıldı. Daha sonra tekrar deneyin.", 429);
    }

    const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!payload) return jsonError("BAD_REQUEST", "Geçersiz istek gövdesi.", 400);

    if (isHoneypotFilled(payload.website)) {
      return NextResponse.json({ success: true, data: null, meta: { skipped: true } });
    }

    const email = normalizeEmail(clean(payload.email, 254));
    const name = clean(payload.name, 80) || null;

    if (!isValidEmail(email)) {
      return jsonError("VALIDATION", "Geçerli bir e-posta adresi yazın.", 422);
    }

    const existing = await prisma.subscriber.findUnique({ where: { email } });

    // Zaten etkin üye: bilgi sızdırmadan aynı yanıtı döneriz.
    if (existing?.status === "ACTIVE") {
      return jsonOk(null, { message: "Bu adres zaten üye. Bültenimiz size ulaşıyor." });
    }

    const confirmToken = createToken();

    if (existing) {
      await prisma.subscriber.update({
        where: { email },
        data: { name: name ?? existing.name, status: "PENDING", confirmToken },
      });
    } else {
      await prisma.subscriber.create({
        data: { email, name, status: "PENDING", confirmToken, unsubscribeToken: createToken() },
      });
    }

    const mail = subscriptionConfirmMail(confirmToken);
    const sent = await sendMail({ to: email, ...mail });

    // Not: e-posta sağlayıcısı tanımlı değilse okura teknik ayrıntı gösterilmez.
    // Kayıt yine de alınır ve PENDING olarak bekler; ayrıntı sunucu günlüğünde kalır.
    if (!sent) {
      console.warn(`[subscribe] onay e-postası gönderilemedi (RESEND_API_KEY?) — ${email}`);
    }

    return jsonOk(null, {
      message: sent
        ? "Onay e-postası gönderildi. Gelen kutunuzu kontrol edin."
        : "Kaydınız alındı. Onay bağlantısı en kısa sürede adresinize iletilecek.",
      mailSent: sent,
    });
  } catch (error) {
    console.error("POST /api/subscribe", error);
    return jsonError("INTERNAL_ERROR", "Üyelik kaydı yapılamadı.", 500);
  }
}
