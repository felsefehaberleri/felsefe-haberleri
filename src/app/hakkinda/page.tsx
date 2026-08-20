import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Hakkında",
  description: "Felsefe Haberleri nedir, nasıl çalışır ve yayın ilkeleri nelerdir?",
};

export default function AboutPage() {
  return (
    <Container size="reading" className="py-16">
      <h1 className="font-serif text-3xl font-bold sm:text-4xl">Hakkında</h1>

      <div className="prose prose-philo mt-8 max-w-none">
        <p>
          <strong>Felsefe Haberleri</strong>, çağdaş filozofların konuşmalarını, açıklamalarını,
          fikirlerini ve yeni kitaplarını izleyen bağımsız bir haber sitesidir. Amaç, felsefeyi
          akademik dergilerin arasından çıkarıp güncel bir gündem olarak takip edilebilir kılmak.
        </p>

        <h2>Yayın ilkeleri</h2>
        <ul>
          <li>Her haberin kaynağı künyesinde açıkça belirtilir.</li>
          <li>Filozoflara atfedilen sözler yalnızca kaynağa dayandırılarak aktarılır.</li>
          <li>Hata yapıldığında düzeltme, haberin kendisinde görünür biçimde yapılır.</li>
          <li>Tartışmalı konularda karşı görüşe de yer verilir.</li>
        </ul>

        <h2>Bölümler</h2>
        <p>
          Gündem, Çağdaş Filozoflar, Türkiye, Dünya, Konferanslar, Filozoflar Hakkında,
          Yeni Kitaplar, Ödüller ve Felsefe Tarihinde Bugün.
        </p>

        <h2>Düzeltme ve katkı</h2>
        <p>
          Bir hata fark ettiyseniz ya da etkinlik duyurusu göndermek istiyorsanız bize
          yazabilirsiniz. Etkinlik duyurularında başlık, tarih, yer ve kayıt bağlantısı yeterlidir.
        </p>

        <h2>Geliştiriciler için</h2>
        <p>
          Site aynı zamanda bir içerik API&apos;si olarak çalışır. Mobil uygulama ve diğer
          istemciler aşağıdaki uçları kullanabilir:
        </p>
        <ul>
          <li><code>GET /api/posts?page=1&amp;limit=10&amp;category=gundem</code></li>
          <li><code>GET /api/posts/[slug]</code></li>
          <li><code>GET /api/categories</code></li>
          <li><code>GET /api/philosophers</code> ve <code>/api/philosophers/[slug]</code></li>
          <li><code>GET /api/books</code></li>
          <li><code>GET /api/tags</code></li>
        </ul>
      </div>
    </Container>
  );
}
