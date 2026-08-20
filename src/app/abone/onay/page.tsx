import Link from "next/link";

import { Container } from "@/components/container";
import { sendMail, welcomeMail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = { title: "Üyelik onayı" };

/**
 * Onay bağlantısının açtığı sayfa.
 * Token doğruysa üyelik ACTIVE olur, token tüketilir ve hoş geldiniz e-postası gider.
 */
export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  let state: "ok" | "already" | "invalid" = "invalid";

  if (token) {
    const subscriber = await prisma.subscriber.findUnique({ where: { confirmToken: token } });

    if (subscriber) {
      if (subscriber.status === "ACTIVE") {
        state = "already";
      } else {
        const updated = await prisma.subscriber.update({
          where: { id: subscriber.id },
          data: { status: "ACTIVE", confirmedAt: new Date(), confirmToken: null },
        });

        await sendMail({ to: updated.email, ...welcomeMail(updated.unsubscribeToken) });
        state = "ok";
      }
    }
  }

  const content = {
    ok: {
      title: "Üyeliğiniz onaylandı",
      text: "Bundan sonra yeni haberler yayımlandığında kısa bir bülten alacaksınız. Dilediğiniz an tek tıkla çıkabilirsiniz.",
    },
    already: {
      title: "Üyeliğiniz zaten etkin",
      text: "Bu adres için onay daha önce yapılmış. Bültenimiz size ulaşıyor.",
    },
    invalid: {
      title: "Bağlantı geçersiz",
      text: "Onay bağlantısı hatalı ya da daha önce kullanılmış olabilir. Formu yeniden doldurup yeni bir bağlantı isteyebilirsiniz.",
    },
  }[state];

  return (
    <Container size="reading" className="py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Bülten</p>
      <h1 className="mt-4 font-serif text-3xl font-bold">{content.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{content.text}</p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
      >
        Ana sayfaya dön
      </Link>
    </Container>
  );
}
