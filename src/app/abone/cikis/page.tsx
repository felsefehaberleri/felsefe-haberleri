import Link from "next/link";

import { Container } from "@/components/container";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = { title: "Bültenden çıkış" };

/** Tek tıkla çıkış. Kayıt silinmez, UNSUBSCRIBED olarak işaretlenir. */
export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  let done = false;

  if (token) {
    const subscriber = await prisma.subscriber.findUnique({ where: { unsubscribeToken: token } });

    if (subscriber) {
      await prisma.subscriber.update({
        where: { id: subscriber.id },
        data: { status: "UNSUBSCRIBED" },
      });
      done = true;
    }
  }

  return (
    <Container size="reading" className="py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Bülten</p>
      <h1 className="mt-4 font-serif text-3xl font-bold">
        {done ? "Çıkışınız tamamlandı" : "Bağlantı geçersiz"}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        {done
          ? "Bu adrese artık bülten göndermeyeceğiz. Fikrinizi değiştirirseniz dilediğiniz an yeniden üye olabilirsiniz."
          : "Çıkış bağlantısı hatalı görünüyor. Yardım için iletişim sayfasından bize yazabilirsiniz."}
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
      >
        Ana sayfaya dön
      </Link>
    </Container>
  );
}
