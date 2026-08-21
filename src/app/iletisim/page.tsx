import type { Metadata } from "next";
import { Mail, MessageSquare, Newspaper } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SubscribeForm } from "@/components/subscribe-form";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Felsefe Haberleri ile iletişime geçin: haber önerisi, etkinlik duyurusu, düzeltme talebi ve iş birliği.",
};

const contactEmail = process.env.CONTACT_EMAIL ?? "info@felsefehaberleri.com";

export default function ContactPage() {
  return (
    <Container size="wide" className="py-12">
      <header className="border-b-2 border-ink pb-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">İletişim</p>
        <h1 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Bize yazın</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted metin-yasli">
          Haber önerisi, etkinlik duyurusu, düzeltme talebi ya da iş birliği için aşağıdaki
          formu kullanabilir, dilerseniz doğrudan e-posta gönderebilirsiniz.
        </p>
      </header>

      <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <ContactForm />

        <aside className="space-y-6">
          <div className="rounded-xl border border-line bg-surface p-6">
            <Mail className="h-5 w-5 text-accent" aria-hidden />
            <h2 className="mt-3 font-serif text-base font-bold">E-posta</h2>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-1 block text-sm break-all text-accent hover:underline"
            >
              {contactEmail}
            </a>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Genellikle iki iş günü içinde yanıtlıyoruz.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <Newspaper className="h-5 w-5 text-accent" aria-hidden />
            <h2 className="mt-3 font-serif text-base font-bold">Etkinlik duyurusu</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Konferans, sempozyum ya da seminer duyurusu gönderirken başlık, tarih, yer ve
              kayıt bağlantısını eklemeniz yeterli.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <MessageSquare className="h-5 w-5 text-accent" aria-hidden />
            <h2 className="mt-3 font-serif text-base font-bold">Düzeltme talebi</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Bir haberde hata gördüyseniz haberin adresini ve doğru bilgiyi yazın; düzeltmeyi
              haberin içinde görünür biçimde yaparız.
            </p>
          </div>
        </aside>
      </div>

      <div className="border-t border-line pt-10">
        <SubscribeForm />
      </div>
    </Container>
  );
}
