import { NextResponse } from "next/server";

import { jsonError, jsonOk } from "@/lib/api";
import { contactAutoReplyMail, contactEmail, contactNotificationMail, sendMail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import {
  clean,
  hashIp,
  isHoneypotFilled,
  isValidEmail,
  looksLikeSpam,
  normalizeEmail,
  rateLimit,
} from "@/lib/security";

export const dynamic = "force-dynamic";

/**
 * POST /api/messages — iletişim formu.
 * Gövde: { name, email, subject?, body, website? }
 *
 * Mesaj önce veritabanına yazılır, sonra e-posta olarak iletilir.
 * Böylece e-posta sağlayıcısı çalışmasa bile hiçbir mesaj kaybolmaz.
 */
export async function POST(request: Request) {
  try {
    const ipHash = hashIp(request);

    if (!rateLimit(`message:${ipHash ?? "anon"}`, 3, 30 * 60 * 1000)) {
      return jsonError("RATE_LIMITED", "Çok fazla mesaj gönderdiniz. Lütfen sonra deneyin.", 429);
    }

    const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!payload) return jsonError("BAD_REQUEST", "Geçersiz istek gövdesi.", 400);

    if (isHoneypotFilled(payload.website)) {
      return NextResponse.json({ success: true, data: null, meta: { skipped: true } });
    }

    const name = clean(payload.name, 80);
    const email = normalizeEmail(clean(payload.email, 254));
    const subject = clean(payload.subject, 140) || null;
    const body = clean(payload.body, 4000);

    if (name.length < 2) return jsonError("VALIDATION", "Adınızı yazın.", 422);
    if (!isValidEmail(email)) return jsonError("VALIDATION", "Geçerli bir e-posta adresi yazın.", 422);
    if (body.length < 10) return jsonError("VALIDATION", "Mesajınız çok kısa.", 422);
    if (looksLikeSpam(body)) return jsonError("SPAM", "Mesaj otomatik denetimden geçemedi.", 422);

    await prisma.message.create({ data: { name, email, subject, body, ipHash } });

    // Yönetime bildirim + gönderene otomatik yanıt (biri başarısız olsa da akış sürer).
    const notification = contactNotificationMail({ name, email, subject, body });
    await sendMail({ to: contactEmail, ...notification, replyTo: email });

    const autoReply = contactAutoReplyMail(name);
    await sendMail({ to: email, ...autoReply });

    return jsonOk(null, { message: "Mesajınız iletildi. En kısa sürede yanıtlayacağız." });
  } catch (error) {
    console.error("POST /api/messages", error);
    return jsonError("INTERNAL_ERROR", "Mesaj gönderilemedi.", 500);
  }
}
