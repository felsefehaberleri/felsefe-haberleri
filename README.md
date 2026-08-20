# Felsefe Haberleri

Çağdaş filozofların konuşmalarını, açıklamalarını, fikirlerini ve yeni kitaplarını izleyen
haber sitesi. Aynı kod tabanı hem web sitesini sunar hem de mobil uygulama (Flutter) için
**headless JSON API** görevi görür.

Yayın adresi (hedef): **www.felsefehaberleri.com**

## Teknoloji

| Katman | Seçim |
| --- | --- |
| Çatı | Next.js 16 (App Router) + TypeScript |
| Stil | Tailwind CSS v4 + `@tailwindcss/typography` |
| Veri | Prisma ORM + PostgreSQL (Neon) |
| Tema | `next-themes` (açık/koyu mod, sınıf tabanlı) |
| İçerik | Markdown — `react-markdown` + `remark-gfm` + `rehype-slug` |
| Yazı tipi | Inter (arayüz) + Merriweather (metin gövdesi) |

## Kurulum

Veritabanı PostgreSQL'dir; yerelde de üretimde de aynısı kullanılır. Ücretsiz bir Neon
veritabanı açıp bağlantı adreslerini `.env` dosyasına yazın (anlatım: **[DEPLOY.md](./DEPLOY.md)**).

```env
DATABASE_URL="postgresql://...-pooler...neon.tech/neondb?sslmode=require"  # uygulama
DIRECT_URL="postgresql://...neon.tech/neondb?sslmode=require"              # migration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

```bash
npm install                          # bağımlılıklar (+ prisma generate)
npx prisma migrate dev --name init   # tabloları oluştur
npm run db:seed                      # bölümler, filozoflar, 12 haber, kitaplar
npm run dev                          # http://localhost:3000
```

Kısayol: `npm run setup` (migrate + seed).

Kurulum yapmadan tasarımı görmek için: **`onizleme.html`** dosyasına çift tıklayın.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` / `npm start` | Üretim derlemesi ve sunucu |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run db:migrate` | Yeni migration oluştur/uygula |
| `npm run db:seed` | Tohum verisini yükle (idempotent) |
| `npm run db:deploy` | Bekleyen migration'ları uygula (üretim; build sırasında otomatik) |
| `npm run db:reset` | Veritabanını sıfırla ve yeniden tohumla |
| `npm run db:studio` | Prisma Studio (görsel veri düzenleyici) |

## Dizin yapısı

```
prisma/
  schema.prisma        Post, Category, Tag, Author, Philosopher, Book modelleri
  seed-data.ts         Saf tohum verisi (9 bölüm, 9 filozof, 15 haber, 5 kitap)
  seed.ts              Upsert tabanlı tohumlama betiği
src/
  app/
    page.tsx                     Ana sayfa (kayan manşet + haber sütunu + kenar sütunu)
    haber/[slug]/page.tsx        Haber detayı (Markdown + kaynak künyesi)
    kategori/[slug]/page.tsx     Bölüm arşivi
    etiket/[slug]/page.tsx       Etiket arşivi
    filozoflar/page.tsx          Filozof dizini
    filozof/[slug]/page.tsx      Filozof profili (haberleri + kitapları)
    kitaplar/page.tsx            Kitap rafı
    hakkinda/page.tsx            Yayın ilkeleri
    iletisim/page.tsx            İletişim bilgileri + mesaj formu
    abone/onay, abone/cikis      Üyelik onay ve çıkış sayfaları
    api/                         JSON uçları (aşağıya bakın)
    sitemap.ts, robots.ts        SEO
  components/          SiteHeader (künye + bölüm çubuğu), ThinkerBanner (portre şeridi),
                       HeadlineSlider (kayan manşet), ArticleCard, PhilosopherCard,
                       BookCard, SourceNote, SectionHeading, ...
  lib/
    prisma.ts          Singleton Prisma istemcisi
    queries.ts         Tüm veri erişimi tek yerde (sayfalar ve API ortak kullanır)
    serializers.ts     Veritabanı modeli → API sözleşmesi dönüşümü
    api.ts             Ortak JSON yanıt zarfı
    mail.ts            E-posta şablonları ve gönderim (Resend)
    security.ts        Hız sınırı, honeypot, IP özeti, spam denetimi
    fonts.ts, utils.ts
  types/content.ts     Arayüz ve API tipleri
```

## Veri modeli

- **Post (haber)** — başlık, özet, Markdown gövde, kapak görseli ve görsel telifi,
  **`sourceName` / `sourceUrl`** (kaynak künyesi), manşet bayrağı, yayım tarihi.
  `publishedAt` boşsa haber **taslaktır** ve hiçbir genel uçta görünmez.
- **Philosopher (filozof)** — sitenin ana izleme birimi. Ad, tanıtım, biyografi, ülke,
  doğum yılı, kurum, resmî site. Haberlerle çoka-çok ilişkilidir; okur bir filozofun
  tüm haberlerini tek sayfada görür.
- **Book (kitap)** — başlık, orijinal ad, yayınevi, çevirmen, ISBN, yıl, yayıncı bağlantısı.
  Bir filozofa ve isteğe bağlı olarak kitabı duyuran habere bağlanır.
- **Category (bölüm)** — Gündem, Çağdaş Filozoflar, Türkiye, Dünya, Konferanslar,
  Filozoflar Hakkında, Yeni Kitaplar, Ödüller, Felsefe Tarihinde Bugün.
- **Tag** ve **Author (editör)**.
- **Comment (yorum)** — üyelik gerekmez; ad ve e-posta boş bırakılabilir, yorum "Anonim"
  yayımlanır. E-posta hiçbir uçta dışarı verilmez. Yanıt zinciri, moderasyon durumu ve
  kötüye kullanım incelemesi için tuzlanmış IP özeti tutulur.
- **Subscriber (üye)** — çift onaylı (double opt-in) bülten üyeliği; onay ve çıkış
  anahtarları, son bildirim zamanı.
- **Message (mesaj)** — iletişim formundan gelen mesajlar; e-posta gönderimi başarısız
  olsa bile veritabanında durur.

> Tohum verisindeki haberler gerçek olaylara dayanır ve her birinin kaynağı `sourceUrl`
> alanında bulunur. Editör adları (`Haber Merkezi`, `Dış Haberler Servisi`, `Kültür Servisi`)
> örnektir; kendi adınızla değiştirin.

## API

Tüm yanıtlar aynı zarfı kullanır:

```jsonc
{ "success": true, "data": ..., "meta": { ... } }
{ "success": false, "error": { "code": "NOT_FOUND", "message": "..." } }
```

CORS `next.config.ts` içinde `/api/*` için açıktır.

### `GET /api/posts`

| Parametre | Varsayılan | Açıklama |
| --- | --- | --- |
| `page` | `1` | Sayfa numarası |
| `limit` | `9` | Sayfa boyutu (en fazla 50) |
| `category` | — | Bölüm slug'ı, ör. `gundem` |
| `tag` | — | Etiket slug'ı, ör. `yapay-zeka` |
| `philosopher` | — | Filozof slug'ı, ör. `michael-sandel` |
| `author` | — | Editör slug'ı |
| `q` | — | Başlık/özet araması |

```bash
curl "https://www.felsefehaberleri.com/api/posts?philosopher=michael-sandel&limit=10"
```

Yanıttaki her haber; yazar, bölüm, etiketler ve **ilgili filozoflar** dizisini içerir.
`meta.pagination` alanında `page`, `limit`, `total`, `totalPages`, `hasNextPage`,
`hasPreviousPage` bulunur.

### Diğer uçlar

| Uç | Döndürdüğü |
| --- | --- |
| `GET /api/posts/[slug]` | Haberin tamamı: Markdown gövde, okuma süresi, `source` künyesi; `meta.related` içinde aynı bölümden 3 haber. Bulunamazsa 404. |
| `GET /api/categories` | Bölümler, menü sırasına göre, `postCount` ile |
| `GET /api/philosophers` | Filozoflar + haber sayıları. `?featured=true` yalnızca öne çıkanlar |
| `GET /api/philosophers/[slug]` | Filozof profili; `meta.posts` ve `meta.books` |
| `GET /api/books` | Kitaplar (filozof bilgisiyle) |
| `GET /api/tags` | Kullanım sıklığına göre etiketler |
| `GET /api/posts/[slug]/comments` | Habere ait onaylı yorumlar (e-posta alanı asla dönülmez) |
| `POST /api/posts/[slug]/comments` | Yorum ekler. Gövde: `{ body, authorName?, email?, parentId? }` — ad boşsa "Anonim" |
| `POST /api/subscribe` | Bülten üyeliği başlatır, onay e-postası gönderir |
| `POST /api/messages` | İletişim formu mesajı: kaydeder + e-posta iletir |
| `GET/POST /api/notify` | Üyelere yeni haber bildirimi (zamanlanmış görev; `CRON_SECRET` ile korunur) |

## Okur etkileşimi

### Yorumlar
Her haberin altında yorum bölümü vardır. **Üyelik gerekmez**: ad ve e-posta boş
bırakılabilir, yorum *Anonim* olarak yayımlanır. Verilen e-posta yayımlanmaz, yalnızca
veritabanında tutulur.

Korumalar: gizli tuzak alan (honeypot), IP başına hız sınırı (10 dakikada 5 yorum),
uzunluk sınırları, aşırı bağlantı/büyük harf denetimi. Moderasyon isterseniz
`.env` içinde `COMMENT_AUTO_APPROVE="false"` yapın; yorumlar `PENDING` olarak beklerken
`npm run db:studio` ile onaylanır.

### Üyelik ve otomatik bildirim
Üyelik, **çift onaylı** bülten aboneliğidir:

1. Ziyaretçi e-postasını yazar → kayıt `PENDING` olur, adrese onay bağlantısı gider.
2. Bağlantıya tıklanınca üyelik `ACTIVE` olur ve hoş geldiniz e-postası gönderilir.
3. `/api/notify` ucu her gün çalışır (Vercel Cron, `vercel.json`) ve her üyeye
   **yalnızca kendisine son bildirimden sonra** yayımlanan haberleri gönderir.
4. Her e-postanın altındaki bağlantıyla tek tıkla çıkılır.

E-posta sağlayıcısı **Resend**'dir. `RESEND_API_KEY` tanımlı değilse hiçbir şey kırılmaz:
e-postalar sunucu günlüğüne yazılır, akışlar çalışmaya devam eder.

### İletişim
`/iletisim` sayfasında doğrudan adres (`info@felsefehaberleri.com`) ve mesaj formu vardır.
Gelen mesaj önce veritabanına yazılır, sonra yönetime iletilir; gönderene otomatik yanıt gider.

## Yayına alma

Vercel + Neon adım adım anlatım: **[DEPLOY.md](./DEPLOY.md)**.
Hiç web sitesi yapmadıysanız önce **[BASLA.md](./BASLA.md)**.

## Tasarım notları

- **Gazete düzeni:** en üstte klasik filozofların portre şeridi, altında künye
  (masthead), onun altında yapışkan bölüm çubuğu. Ana sayfa kayan manşetle açılır.
- **Portre şeridi** `src/lib/thinkers.ts` dosyasından beslenir; görseller Wikimedia
  Commons üzerindeki kamuya açık eserlerdir. Listeye isim ekleyip çıkarabilirsiniz;
  bir görsel yüklenemezse şerit baş harflere düşer, tasarım bozulmaz.
- **Üst şerit** tek parça bir bant olarak durur: portreler aralıksız yan yana dizilir,
  ortak sepya işlemi ve degrade ile tek görsel etkisi verilir. Üzerinde yazı yoktur.
  Dizilim `src/lib/thinkers.ts` içindedir: sol grup — merkez — sağ grup. Merkezdeki
  portre (Nietzsche) her ekran genişliğinde tam ortada kalır; hemen solunda Spinoza,
  hemen sağında Kant durur. Bir portre yüklenmezse önce yedeği denenir, o da olmazsa
  kutu sessizce koyu bir doku olarak kalır — şerit bozulmaz. Kendi hazırladığınız tek
  JPEG'i kullanmak isterseniz dosyayı `public/` içine koyup `.env` içinde
  `NEXT_PUBLIC_BANNER_IMAGE="/banner.jpg"` yazmanız yeterli.
- **Manşet slider'ı** CSS `scroll-snap` ile çalışır: parmakla sürükleme, ok tuşları ve
  fare tekeri JavaScript olmadan da çalışır. `featured: true` işaretli haberler manşete
  çıkar; yetmezse en yeni haberlerle tamamlanır.

- Renkler CSS değişkenleriyle tanımlıdır (`globals.css`); tema değişimi `<html class="dark">`
  üzerinden tüm paleti çevirir, bileşenlerde `dark:` sınıfı biriktirmeye gerek kalmaz.
- Açık mod sıcak kâğıt beyazı (`#faf7f2`), koyu mod derin kömür grisi (`#121212`).
- Gövde metni serif (Merriweather), arayüz sans-serif (Inter).
- Sayfalar `force-dynamic`: haber sitesi davranışı, içerik her istekte tazedir.
