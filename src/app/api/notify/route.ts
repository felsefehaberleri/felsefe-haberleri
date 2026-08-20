import { jsonError, jsonOk } from "@/lib/api";
import { newPostsMail, sendMail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
// Toplu gönderim uzun sürebilir; sunucusuz süre sınırını yükseltiyoruz.
export const maxDuration = 60;

/**
 * POST (veya GET) /api/notify — üyelere yeni haber bildirimi.
 *
 * Zamanlanmış görevle (Vercel Cron, bkz. vercel.json) günde bir kez çağrılır.
 * Her üyeye yalnızca **kendisine en son bildirimden sonra** yayımlanan haberler
 * gönderilir; böylece aynı haber iki kez düşmez.
 *
 * Güvenlik: CRON_SECRET tanımlıysa `Authorization: Bearer <secret>` zorunludur.
 */
async function handler(request: Request) {
  const secret = process.env.CRON_SECRET;

  if (secret) {
    const header = request.headers.get("authorization");
    if (header !== `Bearer ${secret}`) {
      return jsonError("UNAUTHORIZED", "Yetkisiz istek.", 401);
    }
  }

  try {
    const subscribers = await prisma.subscriber.findMany({
      where: { status: "ACTIVE" },
      select: { id: true, email: true, unsubscribeToken: true, lastNotifiedAt: true, confirmedAt: true },
    });

    if (subscribers.length === 0) {
      return jsonOk({ notified: 0, skipped: 0 }, { message: "Etkin üye yok." });
    }

    const now = new Date();
    let notified = 0;
    let skipped = 0;

    for (const subscriber of subscribers) {
      // Referans an: son bildirim, yoksa üyeliğin onaylandığı an.
      const since = subscriber.lastNotifiedAt ?? subscriber.confirmedAt ?? subscriber.lastNotifiedAt;

      const posts = await prisma.post.findMany({
        where: {
          publishedAt: { not: null, lte: now, ...(since ? { gt: since } : {}) },
        },
        orderBy: { publishedAt: "desc" },
        take: 10,
        select: { title: true, summary: true, slug: true, category: { select: { name: true } } },
      });

      if (posts.length === 0) {
        skipped += 1;
        continue;
      }

      const mail = newPostsMail(
        posts.map((post) => ({
          title: post.title,
          summary: post.summary,
          slug: post.slug,
          categoryName: post.category.name,
        })),
        subscriber.unsubscribeToken,
      );

      const sent = await sendMail({ to: subscriber.email, ...mail });

      // Gönderim başarısızsa lastNotifiedAt'i ilerletmiyoruz; bir sonraki turda yeniden denenir.
      if (sent) {
        await prisma.subscriber.update({
          where: { id: subscriber.id },
          data: { lastNotifiedAt: now },
        });
        notified += 1;
      } else {
        skipped += 1;
      }
    }

    return jsonOk({ notified, skipped, total: subscribers.length });
  } catch (error) {
    console.error("/api/notify", error);
    return jsonError("INTERNAL_ERROR", "Bildirim gönderilemedi.", 500);
  }
}

export { handler as GET, handler as POST };
