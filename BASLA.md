# Buradan Başla

Hiç web sitesi yapmamış biri için, sıfırdan yayına kadar. Üç bölüm var:

1. **Siteyi şimdi gör** (2 dakika, hiçbir kurulum yok)
2. **Alan adını al** — felsefehaberleri.com (15 dakika)
3. **Siteyi internete koy** (30 dakika)

---

## 1. Siteyi şimdi gör

Bu klasördeki **`onizleme.html`** dosyasına çift tıkla. Tarayıcında açılır.

İçinde ne var:

- **Ana Sayfa / Haber Sayfası / Filozof Profili / İletişim** düğmeleri (üstte) — dört farklı sayfa arasında geçiş yapar
- En üstte **filozofların tek şerit banner'ı**, altında gazete künyesi ve kayan manşet
- Haber sayfasının altında **yorumlar** (üyelik gerekmeden, anonim de yazılabilir)
- Sağ sütunda ve iletişim sayfasında **üyelik formu**
- **🌙 düğmesi** (sağ üstte) — koyu ve açık mod arasında geçiş yapar
- Kartların üzerine gelince görsellerin hafifçe büyüdüğünü görürsün

Bu dosya gerçek sitenin **birebir görünümü**, ama tek başına duran bir kopya: içerik dosyanın
içine yazılmış durumda. Gerçek sitede aynı sayfalar veritabanından beslenir — yeni haber
eklediğinde ana sayfa kendiliğinden güncellenir.

> Neden gerçek siteyi doğrudan açamıyorsun? Çünkü o bir *uygulama*, dosya değil. Çalışması için
> Node.js ve bir veritabanı gerekiyor. En kolay yolu bilgisayarına kurmak değil, doğrudan
> internete koymak — 3. bölüm.

---

## 2. Alan adını al: felsefehaberleri.com

### Önce iki kavramı ayıralım

| | Nedir | Nereden |
| --- | --- | --- |
| **Alan adı (domain)** | Sitenin adresi: `felsefehaberleri.com` | Kayıt firmasından, yıllık ücret |
| **Barındırma (hosting)** | Sitenin çalıştığı sunucu | **Vercel — ücretsiz**, ayrıca almana gerek yok |

Türkiye'deki firmalar bu ikisini paket hâlinde satmaya çalışır. **Sana sadece alan adı lazım.**
"Hosting", "web sitesi kurucu", "kurumsal e-posta", "SSL sertifikası" gibi ek ürünleri alma —
SSL zaten Vercel'de ücretsiz geliyor.

### Müsait mi?

Bunu ben kontrol edemiyorum; bir firmanın arama kutusuna yazman gerekiyor. `felsefehaberleri.com`
kısa ve akılda kalıcı, dolayısıyla alınmış olma ihtimali var. Yedek fikirler hazır tut:
`felsefehaberleri.net`, `felsefehaber.com`, `felsefegundem.com` gibi. `.com` bulunamazsa `.net` ikinci
en iyisidir; `.com.tr` için şirket/marka belgesi istenir, uğraştırır.

### Nereden alınır

| Firma | Yıllık .com | Notlar |
| --- | --- | --- |
| **Cloudflare Registrar** | ~10,5 $ (maliyetine) | En ucuzu, gizlilik ücretsiz, satış baskısı yok. Arayüz İngilizce. |
| **Namecheap** | ~12–15 $ | Kolay arayüz, gizlilik ömür boyu ücretsiz. |
| **İsimtescil / Natro / Turhost** | ~400–500 TL | Türkçe destek, TL ödeme. Sepette ek ürünlere dikkat. |

Kredi kartıyla dolar ödemek sorun değilse **Cloudflare** en temizi; Türkçe arayüz ve TL fatura
istiyorsan **İsimtescil** gibi yerli bir firma iyi olur. İkisi de aynı işi görür.

### Satın alırken dikkat

- **Yenileme fiyatına bak.** "İlk yıl 89 TL" diyip ikinci yıl 600 TL isteyen firmalar var.
- **Whois gizliliği açık olsun** (ücretsiz olmalı) — yoksa ad, adres ve telefonun herkese açık listelenir.
- **Otomatik yenilemeyi aç.** Alan adının süresi dolarsa site kapanır, adı başkası kapabilir.
- **E-posta doğrulamasını yap.** Kayıttan sonra gelen doğrulama e-postasına tıklamazsan alan adı 15 gün sonra askıya alınır.
- Ek ürünleri sepetten çıkar.

Satın alma bittiğinde elinde bir kullanıcı paneli olur. Oradaki **DNS ayarları** bölümünü
3. bölümün sonunda kullanacağız. Şimdilik başka bir şey yapmana gerek yok.

---

## 3. Siteyi internete koy

İhtiyacın olan: bir **GitHub** hesabı (ücretsiz) ve bir **Vercel** hesabı (ücretsiz).
Vercel'e GitHub ile giriş yapabildiğin için pratikte tek kayıt.

Adım adım anlatım **[DEPLOY.md](./DEPLOY.md)** dosyasında. Özet akış:

1. **Neon**'da (ya da Vercel panelinden *Storage → Neon*) ücretsiz bir veritabanı oluştur.
2. Bağlantı adreslerini `.env` dosyasına yapıştır.
3. Projeyi GitHub'a yükle.
4. Vercel'de depoyu içe aktar, üç ortam değişkenini gir, **Deploy**.
5. Site birkaç dakikada `felsefe-haberleri.vercel.app` gibi bir adreste yayında olur.

### Alan adını bağlama (bu adım en sona kalır)

Site `.vercel.app` adresinde çalışır hâle geldikten sonra:

1. Vercel → proje → **Settings → Domains → Add** → `felsefehaberleri.com` yaz.
2. Vercel sana iki satır DNS kaydı verir (bir `A`, bir `CNAME`).
3. Alan adını aldığın firmanın panelinde **DNS Yönetimi**'ne git, o iki kaydı ekle.
4. 10 dakika – 2 saat içinde `https://felsefehaberleri.com` açılır. HTTPS kilidi otomatik gelir.

---

## Sırada ne var

Bu üç bölümü bitirdiğinde ortada gerçek, ziyaret edilebilir bir site olur. Sonrasında
mantıklı adımlar:

- **Haber ekleme paneli** — şu an haberler `prisma/seed-data.ts` dosyasından ya da Prisma Studio'dan giriliyor. Tarayıcıdan haber yazıp yayımlayabileceğin bir yönetim ekranı eklenebilir.
- **Yorum moderasyonu** — yorumlar şu an anında yayımlanıyor. `.env` içinde `COMMENT_AUTO_APPROVE="false"` yaparsan önce onayına düşer.
- **E-posta** — üyelik ve iletişim e-postaları için Resend hesabı açman gerekiyor (DEPLOY.md, adım 5b). Anahtarı girmezsen site yine çalışır, sadece e-posta gitmez.
- **Ziyaretçi istatistikleri** — Vercel Analytics tek tıkla açılıyor.
- **Mobil uygulama** — API zaten hazır (`/api/posts`, `/api/philosophers`, `/api/books`).

Takıldığın adımda ekran görüntüsünü ya da hata mesajını bana yolla; oradan devam ederiz.
