# Yayına Alma Rehberi

Bilgisayarına hiçbir program kurmadan, sadece tarayıcıyla yayına alabilirsin.
Toplam süre: **yaklaşık 30 dakika**. Üç ücretsiz hesap açacaksın:

| Hesap | Ne işe yarıyor | Ücret |
| --- | --- | --- |
| **GitHub** | Site dosyalarının durduğu yer | Ücretsiz |
| **Vercel** | Sitenin çalıştığı sunucu | Ücretsiz |
| **Neon** | Veritabanı (haberler, yorumlar, üyeler) | Ücretsiz |

Alan adı (`felsefehaberleri.com`) ayrı bir konu; onu en sona bıraktık.

---

## 1. Veritabanını oluştur (5 dk)

1. <https://neon.tech> → **Sign up** (GitHub ile giriş yapmak en pratiği; GitHub hesabın
   yoksa önce 2. adımdaki gibi aç, sonra buraya dön).
2. **Create project** → Ad: `felsefe-haberleri`, bölge: **Europe (Frankfurt)**.
3. Proje açılınca **Connection string** kutusunu göreceksin. Buradan **iki** adres kopyala
   ve bir yere not et:

   | Neon'daki seçenek | Sonra nereye yazacaksın | Nasıl ayırt edilir |
   | --- | --- | --- |
   | **Pooled connection** | `DATABASE_URL` | adreste `-pooler` geçer |
   | **Direct connection** | `DIRECT_URL` | `-pooler` **yok** |

   İkisi de `?sslmode=require` ile bitmeli.

> Parola adresin içinde ve yalnızca bir kez gösteriliyor. Kopyalayıp kaydet.

---

## 2. Dosyaları GitHub'a yükle (10 dk)

1. <https://github.com> → **Sign up** → e-posta ve parola ile hesap aç.
2. Sağ üstteki **+** → **New repository**.
   - Repository name: `felsefe-haberleri`
   - **Private** seçebilirsin (kimse göremez, Vercel yine erişir).
   - **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
4. `FH` klasörünün **içindeki** dosya ve klasörleri (`src`, `prisma`, `public`,
   `package.json`, `next.config.ts`, `tsconfig.json`, `vercel.json` …) sürükleyip bırak.
   Yükleme bitince **Commit changes**.

**Yüklememen gerekenler:**

- `.env` — parolalarını içerir, GitHub'a gitmemeli. (Windows gizli dosyaları
  saklar, muhtemelen zaten görünmüyor.)
- `node_modules` ve `.next` klasörleri — varsa atla, Vercel bunları kendi üretir.
- `onizleme.html` — sadece senin için hazırlanmış önizleme; yüklesen de zararı yok.

---

## 3. Vercel'e bağla ve yayına al (10 dk)

1. <https://vercel.com> → **Sign up with GitHub**.
2. **Add New… → Project** → `felsefe-haberleri` deposunu **Import** et.
3. Framework otomatik **Next.js** algılanır; ayarlara dokunma.
4. **Environment Variables** bölümünü aç ve şunları tek tek ekle:

   | Ad | Değer |
   | --- | --- |
   | `DATABASE_URL` | Neon **pooled** adresi |
   | `DIRECT_URL` | Neon **direct** adresi |
   | `NEXT_PUBLIC_SITE_URL` | `https://felsefe-haberleri.vercel.app` |
   | `CONTACT_EMAIL` | `info@felsefehaberleri.com` |
   | `IP_HASH_SALT` | Rastgele bir metin (ör. `kdj38fkslq02`) |
   | `CRON_SECRET` | Rastgele uzun bir metin |

   E-posta göndermek istediğinde `RESEND_API_KEY` ve `MAIL_FROM` da eklenecek (adım 5).

5. **Deploy**.

Yayın sırasında şunlar **kendiliğinden** olur:

- Veritabanı tabloları oluşturulur.
- Veritabanı boşsa örnek içerik (9 bölüm, 9 filozof, 15 haber, 5 kitap) yüklenir.
  Sonraki yayınlarda bu adım atlanır; yazdığın haberler ve gelen yorumlar silinmez.

Birkaç dakika içinde adresin hazır: `https://felsefe-haberleri.vercel.app`

> Vercel sana farklı bir adres verirse `NEXT_PUBLIC_SITE_URL` değişkenini
> **Settings → Environment Variables**'tan güncelleyip **Redeploy** et.

---

## 4. Kontrol listesi

Adresini açıp şunlara bak:

```
/                        → manşet kayıyor, haberler görünüyor
/iletisim                → form açılıyor
bir haberin altı         → yorum yazılabiliyor
/api/posts               → {"success":true, ...}
/api/categories          → 9 bölüm
```

Bir haberin altına yorum yaz ve sayfayı yenile: yorumun durmalı. Duruyorsa
veritabanı bağlantısı doğru demektir.

---

## 5. E-posta gönderimini aç (isteğe bağlı, 10 dk)

Üyelik onayı, hoş geldiniz mesajı, günlük bülten ve iletişim formu bildirimleri e-posta
ile gider. Bu adımı atlarsan site çalışır, sadece e-posta gönderilmez.

1. <https://resend.com> → ücretsiz hesap aç.
2. **Domains → Add domain** → `felsefehaberleri.com` (alan adını aldıktan sonra).
3. Resend'in verdiği DNS kayıtlarını alan adı panelinde ekle.
4. **API Keys → Create** → anahtarı kopyala.
5. Vercel → **Settings → Environment Variables** → ekle:
   - `RESEND_API_KEY` = kopyaladığın anahtar
   - `MAIL_FROM` = `Felsefe Haberleri <info@felsefehaberleri.com>`
6. **Redeploy**.

`info@felsefehaberleri.com` adresine gelen postayı okumak için alan adı sağlayıcının
e-posta yönlendirme özelliğini kullanabilirsin (çoğu firma ücretsiz sunar).

**Günlük bülten** `vercel.json` içinde tanımlı: her sabah 07:00'de `/api/notify` çalışır
ve üyelere o güne kadar yayımlanan yeni haberleri gönderir.

---

## 6. Alan adını bağla (en son)

Site `.vercel.app` adresinde çalışır hâle geldikten sonra:

1. Alan adını al (bkz. **[BASLA.md](./BASLA.md)**, 2. bölüm).
2. Vercel → proje → **Settings → Domains → Add** → `felsefehaberleri.com`.
3. Vercel'in verdiği DNS kayıtlarını alan adı firmanın panelinde **DNS Yönetimi**'ne ekle.
4. 10 dakika – 2 saat içinde `https://felsefehaberleri.com` açılır; HTTPS otomatik gelir.
5. `NEXT_PUBLIC_SITE_URL` değişkenini yeni adresle güncelle ve **Redeploy** et.

---

## Sonrası

**Kod güncellemek.** GitHub'daki dosyayı düzenleyip kaydettiğinde Vercel otomatik yeniden
yayınlar. Ben bir değişiklik yaptığımda güncellenen dosyaları GitHub'a yükleyebilirsin.

**Yeni haber eklemek.** İki yol var: `prisma/seed-data.ts` dosyasına ekleyip GitHub'a
yüklemek, ya da Neon panelinden **Tables** bölümünde `posts` tablosuna satır eklemek.
Kalıcı çözüm bir yönetim paneli — hazır olduğunda ekleyebiliriz.

**Yorum moderasyonu.** Yorumlar şu an anında yayımlanıyor. Önce onaya düşsün istersen
Vercel'de `COMMENT_AUTO_APPROVE` değişkenini `false` yap.

**Ücretsiz katman sınırları.** Neon'un ücretsiz veritabanı bir süre trafik almazsa uykuya
geçer; ilk istek birkaç saniye gecikebilir. Vercel'in hobi planı ticari kullanıma kapalıdır;
site gelir getirmeye başlarsa ücretli plana geçmen gerekir.

---

## Sık karşılaşılan hatalar

| Belirti | Sebep / çözüm |
| --- | --- |
| Build: `Environment variable not found: DATABASE_URL` | Değişken eklenmemiş ya da yalnızca Preview ortamına eklenmiş. Production kutusunun işaretli olduğundan emin ol. |
| Build: `P1001 Can't reach database server` | Adres yanlış kopyalanmış veya `?sslmode=require` eksik. |
| Site açılıyor ama haber yok | Veritabanı bağlantısı doğru ama tohumlama çalışmamış olabilir. Vercel → **Deployments → Build Logs**'ta `🌱` satırını ara. |
| Çok fazla bağlantı hatası | `DATABASE_URL` havuzlanmış (`-pooler`) adres değil. |
| Onay e-postası gelmiyor | `RESEND_API_KEY` yok ya da alan adı Resend'de doğrulanmamış. Spam kutusunu da kontrol et. |
| Yorumlar görünmüyor | `COMMENT_AUTO_APPROVE` `false` olabilir; yorumlar onay bekliyordur. |
| `/api/notify` 401 dönüyor | İstek `Authorization: Bearer <CRON_SECRET>` başlığı olmadan yapılmış. |

---

## Terminal kullanmayı tercih edersen

Bilgisayarında geliştirme yapmak istersen: [Node.js](https://nodejs.org) kur, sonra proje
klasöründe:

```bash
npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev            # http://localhost:3000
```

`.env` dosyasına Neon adreslerini yazmayı unutma.
