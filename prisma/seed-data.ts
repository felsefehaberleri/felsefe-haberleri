/**
 * Tohum (seed) verisi — saf veri, Prisma'ya bağımlı değildir.
 *
 * ÖNEMLİ NOTLAR
 * 1) Haber metinleri gerçek olaylara dayanır ve her birinin `sourceUrl` alanında
 *    dayandığı kaynak vardır. Yeni haber eklerken bu alanı boş bırakmayın.
 * 2) `authors` listesindeki editör kayıtları örnektir; kendi adınızla değiştirin.
 * 3) Kapak görselleri temsilîdir (Unsplash). Telifli haber fotoğrafı kullanacaksanız
 *    `imageCredit` alanını doldurun.
 */

export type SeedCategory = { name: string; slug: string; description: string; order: number };
export type SeedTag = { name: string; slug: string };
export type SeedAuthor = { name: string; slug: string; avatar: string; bio: string };

export type SeedPhilosopher = {
  name: string;
  slug: string;
  headline: string;
  bio: string;
  avatar: string | null;
  country: string;
  birthYear: number | null;
  affiliation: string | null;
  website: string | null;
  featured: boolean;
};

export type SeedBook = {
  title: string;
  slug: string;
  originalTitle: string | null;
  publisher: string | null;
  translator: string | null;
  language: string;
  isbn: string | null;
  coverImage: string | null;
  description: string;
  year: number | null;
  link: string | null;
  philosopherSlug: string | null;
  /** Kitabı duyuran haberin slug'ı (varsa). */
  postSlug: string | null;
};

export type SeedPost = {
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  imageCredit: string | null;
  featured: boolean;
  sourceName: string | null;
  sourceUrl: string | null;
  /** ISO 8601; null verilirse taslak olarak kaydedilir. */
  publishedAt: string | null;
  authorSlug: string;
  categorySlug: string;
  tagSlugs: string[];
  philosopherSlugs: string[];
};

/* ------------------------------------------------------------------ */
/* Kategoriler                                                         */
/* ------------------------------------------------------------------ */

export const categories: SeedCategory[] = [
  { name: "Gündem", slug: "gundem", description: "Felsefe dünyasının bugün konuştuğu başlıklar.", order: 1 },
  { name: "Çağdaş Filozoflar", slug: "cagdas-filozoflar", description: "Çağdaş filozofların açıklamaları, tezleri ve tartışmaları.", order: 2 },
  { name: "Türkiye", slug: "turkiye", description: "Türkiye'deki felsefe gündemi: bölümler, dernekler, etkinlikler.", order: 3 },
  { name: "Dünya", slug: "dunya", description: "Yurt dışındaki felsefe haberleri ve akademik gelişmeler.", order: 4 },
  { name: "Konferanslar", slug: "konferanslar", description: "Kongreler, sempozyumlar, atölyeler ve çağrılar.", order: 5 },
  { name: "Filozoflar Hakkında", slug: "filozoflar-hakkinda", description: "Düşünürlerin kavramları, mirasları ve ardımızda bıraktıkları.", order: 6 },
  { name: "Yeni Kitaplar", slug: "yeni-kitaplar", description: "Yeni çıkan kitaplar, çeviriler ve kitap tanıtımları.", order: 7 },
  { name: "Ödüller", slug: "oduller", description: "Felsefe ödülleri, burslar ve akademik onurlandırmalar.", order: 8 },
  { name: "Felsefe Tarihinde Bugün", slug: "felsefe-tarihinde-bugun", description: "Bugün ne oldu? Felsefe tarihinden tarih notları.", order: 9 },
];

/* ------------------------------------------------------------------ */
/* Etiketler                                                           */
/* ------------------------------------------------------------------ */

export const tags: SeedTag[] = [
  { name: "Yapay Zekâ", slug: "yapay-zeka" },
  { name: "Etik", slug: "etik" },
  { name: "Bilinç", slug: "bilinc" },
  { name: "Akademi", slug: "akademi" },
  { name: "Ödül", slug: "odul" },
  { name: "Yeni Kitap", slug: "yeni-kitap" },
  { name: "Çeviri", slug: "ceviri" },
  { name: "Arkeoloji", slug: "arkeoloji" },
  { name: "Antik Felsefe", slug: "antik-felsefe" },
  { name: "Siyaset Felsefesi", slug: "siyaset-felsefesi" },
  { name: "Fenomenoloji", slug: "fenomenoloji" },
  { name: "Sempozyum", slug: "sempozyum" },
  { name: "Dergi", slug: "dergi" },
  { name: "Vefat", slug: "vefat" },
  { name: "Tarih", slug: "tarih" },
  { name: "Kavram", slug: "kavram" },
  { name: "Kant", slug: "kant" },
  { name: "Nietzsche", slug: "nietzsche" },
  { name: "Platon", slug: "platon" },
];

/* ------------------------------------------------------------------ */
/* Editörler (örnek kayıtlar — kendi adınızla değiştirin)              */
/* ------------------------------------------------------------------ */

export const authors: SeedAuthor[] = [
  {
    name: "Haber Merkezi",
    slug: "haber-merkezi",
    avatar: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80",
    bio: "Felsefe Haberleri yayın kurulu.",
  },
  {
    name: "Dış Haberler Servisi",
    slug: "dis-haberler",
    avatar: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=200&q=80",
    bio: "Yurt dışı felsefe gündemini izler.",
  },
  {
    name: "Kültür Servisi",
    slug: "kultur-servisi",
    avatar: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&q=80",
    bio: "Kitap, dergi ve etkinlik haberleri.",
  },
];

/* ------------------------------------------------------------------ */
/* Filozoflar                                                          */
/* ------------------------------------------------------------------ */

export const philosophers: SeedPhilosopher[] = [
  {
    name: "Michael Sandel",
    slug: "michael-sandel",
    headline: "Siyaset felsefecisi — Harvard Üniversitesi",
    bio: "Adalet, piyasaların ahlaki sınırları ve liyakat tartışmalarıyla tanınıyor. Harvard'daki 'Justice' dersi milyonlarca kişi tarafından izlendi. 2025 Berggruen Felsefe ve Kültür Ödülü'nün sahibi.",
    avatar: null,
    country: "ABD",
    birthYear: 1953,
    affiliation: "Harvard Üniversitesi",
    website: "https://scholar.harvard.edu/sandel",
    featured: true,
  },
  {
    name: "Martha Nussbaum",
    slug: "martha-nussbaum",
    headline: "Hukuk ve etik felsefecisi — Chicago Üniversitesi",
    bio: "Yetenekler yaklaşımı, duygular kuramı ve klasik felsefe üzerine çalışıyor. 2026'da Oxford University Press'ten çıkan yeni kitabında operayı siyasal özgürlük kavramı üzerinden okuyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1947,
    affiliation: "Chicago Üniversitesi Hukuk Fakültesi",
    website: "https://www.law.uchicago.edu/faculty/nussbaum",
    featured: true,
  },
  {
    name: "Byung-Chul Han",
    slug: "byung-chul-han",
    headline: "Kültür kuramcısı — Berlin Sanat Üniversitesi",
    bio: "Yorgunluk toplumu, şeffaflık toplumu ve dijital kültür eleştirisiyle tanınan Güney Kore doğumlu Alman filozof. Kitapları Türkçeye düzenli olarak çevriliyor.",
    avatar: null,
    country: "Almanya",
    birthYear: 1959,
    affiliation: "Berlin Sanat Üniversitesi (UdK)",
    website: null,
    featured: true,
  },
  {
    name: "Luciano Floridi",
    slug: "luciano-floridi",
    headline: "Bilgi felsefesi ve dijital etik — Yale Üniversitesi",
    bio: "Bilgi felsefesi ve yapay zekâ etiği alanının kurucu isimlerinden. Felsefe bölümlerinden teknoloji şirketlerine geçişi 'kanama' sözcüğüyle tanımladı.",
    avatar: null,
    country: "İtalya / ABD",
    birthYear: 1964,
    affiliation: "Yale Üniversitesi",
    website: null,
    featured: true,
  },
  {
    name: "Eric Schwitzgebel",
    slug: "eric-schwitzgebel",
    headline: "Zihin felsefecisi — California Üniversitesi, Riverside",
    bio: "Bilinç, ahlak psikolojisi ve felsefi sezgilerin güvenilirliği üzerine çalışıyor. Bilincin 'zemin esnek' olabileceği tezini savunuyor.",
    avatar: null,
    country: "ABD",
    birthYear: null,
    affiliation: "California Üniversitesi, Riverside",
    website: null,
    featured: false,
  },
  {
    name: "Jeremy Pober",
    slug: "jeremy-pober",
    headline: "Zihin felsefesi araştırmacısı — Lizbon Üniversitesi",
    bio: "Bilincin biyolojik zeminine ilişkin varsayımları sorgulayan çalışmalarıyla tanınıyor.",
    avatar: null,
    country: "Portekiz",
    birthYear: null,
    affiliation: "Lizbon Üniversitesi",
    website: null,
    featured: false,
  },
  {
    name: "Peter Singer",
    slug: "peter-singer",
    headline: "Ahlak felsefecisi — Princeton Üniversitesi (emeritus)",
    bio: "Uygulamalı etiğin en çok tartışılan isimlerinden; hayvan etiği ve etkili özgecilik alanlarındaki çalışmalarıyla tanınıyor. Berggruen Ödülü'nün önceki sahiplerinden.",
    avatar: null,
    country: "Avustralya / ABD",
    birthYear: 1946,
    affiliation: "Princeton Üniversitesi",
    website: null,
    featured: false,
  },
  {
    name: "Judith Butler",
    slug: "judith-butler",
    headline: "Siyaset ve dil felsefecisi — California Üniversitesi, Berkeley",
    bio: "Performatiflik kuramı ve şiddet, yas, tanınma üzerine çalışmalarıyla çağdaş siyaset felsefesinin en çok atıf alan isimlerinden.",
    avatar: null,
    country: "ABD",
    birthYear: 1956,
    affiliation: "California Üniversitesi, Berkeley",
    website: null,
    featured: false,
  },
  {
    name: "Örsan K. Öymen",
    slug: "orsan-k-oymen",
    headline: "Felsefeci — 'Assos'ta Felsefe' sempozyumunun düzenleyicisi",
    bio: "Felsefe Sanat Bilim Derneği bünyesinde 26 yıldır süren 'Assos'ta Felsefe' sempozyumunun öncülüğünü yapıyor.",
    avatar: null,
    country: "Türkiye",
    birthYear: null,
    affiliation: "Felsefe Sanat Bilim Derneği",
    website: null,
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/* Haberler                                                            */
/* ------------------------------------------------------------------ */

export const posts: SeedPost[] = [
  {
    title: "Yapay zekâ şirketleri filozof işe alıyor",
    slug: "yapay-zeka-sirketleri-filozof-ise-aliyor",
    summary:
      "Etik, akıl yürütme ve güvenlik ekiplerinde felsefe eğitimli isimlere talep artıyor. Luciano Floridi, bölümlerden teknoloji şirketlerine geçişi 'kanama' olarak tanımlıyor.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "Philosophy Now, Sayı 175",
    sourceUrl: "https://philosophynow.org/issues/175/News_August_September_2026",
    publishedAt: "2026-08-14T08:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["yapay-zeka", "etik", "akademi"],
    philosopherSlugs: ["luciano-floridi"],
    content: `Yapay zekâ yatırımlarının beklenmedik kazananlarından biri felsefe oldu. Teknoloji şirketleri etik, akıl yürütme ve yapay zekâ güvenliği alanlarında uzmanlık ararken, felsefe mezunlarına ve akademisyenlerine olan talep hızla artıyor.

## Rakamlar ne söylüyor?

New York Federal Rezerv Bankası'nın verilerine göre 2024'te ABD'de felsefe mezunlarının işsizlik oranı **yüzde 5,1**, bilgisayar bilimleri mezunlarınınki ise **yüzde 7** olarak ölçüldü. On yıl önce beşerî bilimler öğrencilerine "iş bulmak için kod öğrenin" denirken tablo tersine dönmüş görünüyor.

## "Kanama"

Yale Üniversitesi'nden felsefe profesörü Luciano Floridi, akademisyenlerin felsefe bölümlerinden teknoloji sektörüne geçişini *kanama* sözcüğüyle tanımlıyor. Anthropic, Google DeepMind, IBM ve OpenAI gibi şirketler bugün ya doğrudan filozof istihdam ediyor ya da modellerinin tasarımına felsefi ilkeler yerleştiriyor.

## Felsefe modelin neresinde?

Şirketlerin başvurduğu kaynaklar şaşırtıcı derecede klasik: Sokratik sorgulama, Kant ve Locke'un değer kuramları. Bu yaklaşımlar modellerin akıl yürütmesini iyileştirmek, varsayımları sınamak, "halüsinasyon" denen uydurma yanıtları azaltmak ve zararlı davranışlara karşı koruma kurmak için kullanılıyor.

Tartışmanın merkezinde eski bir ahlak felsefesi ayrımı var: yapay zekâ sabit ilkelere mi uymalı, yoksa her durumda sonuçları tartıp mı karar vermeli? *Anayasal yapay zekâ* (constitutional AI) gibi çerçeveler birinci yolu, fayda hesabına dayalı yaklaşımlar ikinciyi temsil ediyor.

## Neden şimdi?

Yapay zekâ sağlık, ulaşım, hukuk ve savunma alanlarına yerleştikçe adalet, sorumluluk ve hesap verebilirlik soruları teknik kararların içine giriyor. Bu da felsefeyi, uzun süredir "iş bulmayan bölüm" diye anılmasına rağmen, doğrudan uygulamalı bir alan hâline getiriyor.`,
  },
  {
    title: "Yanmış Herculaneum papirüsleri yapay zekâyla okundu: Philodemus'un kayıp metinleri gün yüzüne çıktı",
    slug: "herculaneum-papirusleri-yapay-zeka-ile-okundu",
    summary:
      "Vezüv'ün MS 79'daki patlamasında kömürleşen tomarlar, açılmadan, X-ışını görüntüleme ve yapay zekâ ile okundu. Epikürcü filozof Philodemus'un 'Kötülükler Üzerine' adlı eserinden yaklaşık 70 sütun deşifre edildi.",
    coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "Philosophy Now, Sayı 175",
    sourceUrl: "https://philosophynow.org/issues/175/News_August_September_2026",
    publishedAt: "2026-08-13T10:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["arkeoloji", "antik-felsefe", "yapay-zeka"],
    philosopherSlugs: [],
    content: `Yaklaşık iki bin yıldır okunamayan tomarlar açıldı — hem de hiç açılmadan. Gelişmiş X-ışını görüntüleme ve yapay zekâ, Vezüv Yanardağı'nın MS 79'daki patlamasında kömürleşen papirüslerin dijital olarak "sarımının çözülmesini" sağladı.

## Vesuvius Challenge

2023'te başlatılan uluslararası proje, Herculaneum'daki *Papirüsler Villası*'nda bulunan yüzlerce karbonlaşmış tomarı okuyabilecek yapay zekâ araçları geliştirmeyi hedefliyordu. Kırılganlıkları nedeniyle fiziksel olarak açılmaya çalışılan tomarlar çoğu zaman onarılamaz biçimde zarar görüyordu.

## Ne bulundu?

Deşifre edilen metinler arasında Epikürcü filozof **Philodemus**'un *Kötülükler Üzerine* (On Vices) adlı eserinin 1. kitabından yaklaşık 70 sütun ve *Tanrılar Üzerine* (On Gods) 8. kitabından bölümler yer alıyor. Ayrıca MÖ 200–300 arasına tarihlenen başka bir tomardan yaklaşık 1,5 metrelik metin kurtarıldı; bu, bugüne dek okunabilen en eski Herculaneum el yazması ve ahlak, sanat ve insan doğası üzerine düşünceler içeriyor.

## "Dönüm noktası"

Projenin kurucularından, Kentucky Üniversitesi bilgisayar bilimleri profesörü Brent Seales gelişmeyi bir dönüm noktası olarak niteliyor ve koleksiyondaki her tomarın okunabileceğine inandıklarını söylüyor. Baş papirolog Federica Nicolardi ise sanal açımın alanı dönüştürdüğünü, artık el yazmalarının aynı anda hem korunup hem incelenebildiğini belirtiyor.

Proje, görüntüleme verilerini, yazılımını ve modellerini açık kaynak olarak paylaşıyor; ilk tam tomarı okuyan ekibe 1 milyon dolarlık ödül konmuştu. Hâlâ açılmamış yüzlerce tomar sırasını bekliyor.`,
  },
  {
    title: "İngiltere'de felsefe bölümleri kapanıyor: Dundee ve Hertfordshire",
    slug: "ingilterede-felsefe-bolumleri-kapaniyor",
    summary:
      "Dundee Üniversitesi felsefeyi 2027'den itibaren müstakil lisans programı olmaktan çıkarmayı öneriyor; Hertfordshire ise programını tamamen kapatıyor. Öğrenci ve akademisyenler imza kampanyası başlattı.",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Philosophy Now, Sayı 175",
    sourceUrl: "https://philosophynow.org/issues/175/News_August_September_2026",
    publishedAt: "2026-08-11T09:15:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["akademi"],
    philosopherSlugs: [],
    content: `Birleşik Krallık'ta iki üniversitenin felsefe programlarını kapatma ya da aşamalı olarak sonlandırma kararı, alanın üniversitelerdeki geleceğine dair endişeleri yeniden alevlendirdi.

## Dundee: 2027'den itibaren

Dundee Üniversitesi, ciddi bir bütçe açığını kapatmayı amaçlayan tasarruf planı kapsamında felsefeyi 2027'den itibaren müstakil bir lisans derecesi olmaktan çıkarmayı öneriyor. Üniversite gönüllü emeklilikle kadrosunu daralttı; felsefe, matematik ve dil programlarının askıya alınması da masada.

## İtiraz: "İskoçya'da tek"

Öneri, öğrenciler, akademisyenler ve destekçiler tarafından başlatılan bir imza kampanyasına yol açtı. İtirazın merkezinde bölümün özgüllüğü var: Dundee, uluslararası ölçekte tanınan **İskoç Kıta Felsefesi Merkezi**'ne ev sahipliği yapıyor ve İskoçya'da ağırlıklı olarak Anglo-Amerikan değil Avrupa felsefesinde uzmanlaşan tek program. Destekçiler ayrıca bölümün öğrenci memnuniyetine ve yerel okullarla yürüttüğü yaygınlaştırma çalışmalarına dikkat çekiyor.

## Hertfordshire de kapatıyor

Hertfordshire Üniversitesi ise felsefe lisans programını tamamen kapatıyor. İki karar birlikte, felsefenin İngiltere yükseköğretiminde artan mali baskı altında ne kadar kırılgan bir konumda olduğunu gösteriyor.

Tabloyu ilginç kılan da bu: bir yanda teknoloji şirketleri felsefe eğitimli isimleri işe alıyor, öte yanda üniversiteler felsefe bölümlerini kapatıyor.`,
  },
  {
    title: "Schwitzgebel ve Pober: Bilinç yalnızca karbona özgü olmayabilir",
    slug: "schwitzgebel-pober-bilinc-karbona-ozgu-degil",
    summary:
      "Philosophers' Imprint'te yayımlanan çalışma, bilincin 'zemin esnek' olduğunu savunuyor: yeterli karmaşıklığı taşıyan silikon ya da kükürt temelli yapılarda da bilinç ortaya çıkabilir.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Philosophy Now, Sayı 175",
    sourceUrl: "https://philosophynow.org/issues/175/News_August_September_2026",
    publishedAt: "2026-08-10T07:45:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["bilinc", "yapay-zeka", "etik"],
    philosopherSlugs: ["eric-schwitzgebel", "jeremy-pober"],
    content: `California Üniversitesi Riverside'dan Prof. Eric Schwitzgebel ile Lizbon Üniversitesi'nden Dr. Jeremy Pober'ın *Philosophers' Imprint*'te yayımlanan çalışması, bilinç tartışmasına uzaydan bir soru sokuyor: çevresine karmaşık tepkiler veren dünya dışı varlıklarla karşılaşsak, onlara bilinç atfetmek makul olur muydu?

## "Zemin esnekliği"

Yazarların yanıtı evet. Bilincin Dünya'daki karbon temelli biyolojiye bağlı olduğu varsayımına karşı çıkarak bilincin **zemin esnek** (substrate flexible) olduğunu savunuyorlar: yeterli karmaşıklığı destekleyen çok farklı fiziksel biçimlerde — örneğin silikon ya da kükürt bileşiklerine dayalı kimyasal sistemlerde — ortaya çıkabilir.

## Kopernik ilkesi, bilince uygulanırsa

Çalışmanın dayandığı sav, yazarların *Bilincin Kopernik İlkesi* dediği şey: Dünya'nın evrende ayrıcalıklı bir konumu olmadığını kabul ettiğimiz gibi, karmaşık davranış sergileyen tüm varlıklar arasında yalnızca insanların bilinçli deneyime sahip olduğunu varsaymak da makul değildir. Bilinci insana benzer biyokimyaya sahip organizmalarla sınırlamak, gerekçesiz bir **"yerküre-merkezcilik"** olur.

## Robotlar neden farklı?

Çalışmanın ilginç ayrımı burada: yazarlara göre bilinçli görünen bir robota karşı tutumumuz, karmaşık davranış sergileyen bir uzaylı varlığa karşı tutumumuzdan farklı olmalı. Bir robotun *bilinci taklit etmek amacıyla* tasarlandığını biliyorsak, onu gerçekten bilinçli saymakta çekimser kalmak daha makuldür. Uzaylı varlık ise karmaşıklığını taklit niyeti olmadan geliştirmiştir.

Bu ayrım, yapay zekâ sistemlerine bilinç atfetme tartışmasında da doğrudan karşılık buluyor.`,
  },
  {
    title: "Berggruen Felsefe ve Kültür Ödülü Michael Sandel'in",
    slug: "berggruen-odulu-michael-sandel",
    summary:
      "1 milyon dolarlık ödülün dokuzuncu sahibi, adalet, piyasaların ahlaki sınırları ve demokrasi üzerine çalışmalarıyla tanınan Harvard'lı siyaset felsefecisi oldu. Tören 2026 baharında Cambridge'de yapılıyor.",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "Berggruen Institute",
    sourceUrl: "https://berggruen.org/news/usd1-million-berggruen-philosophy-prize-awarded-to-michael-sandel",
    publishedAt: "2026-08-08T11:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "siyaset-felsefesi", "etik"],
    philosopherSlugs: ["michael-sandel", "peter-singer", "martha-nussbaum"],
    content: `Harvard Üniversitesi'nden siyaset felsefecisi **Michael Sandel**, 1 milyon dolarlık Berggruen Felsefe ve Kültür Ödülü'nün sahibi oldu. Ödül, fikirleriyle insanın kendini anlama biçimini derinden etkileyen isimlere veriliyor.

## Gerekçe

Sandel'in ödülü; adalet, etik, piyasalar ve demokrasi üzerine, kamusal tartışmayı dünya ölçeğinde etkileyen çalışmalarıyla gerekçelendirildi. Harvard'da verdiği *Justice* dersi, çevrimiçi yayımlandığından beri milyonlarca izleyiciye ulaştı; "her şeyin satın alınabilir olduğu bir toplum" eleştirisi ise piyasa mantığının ahlaki sınırlarını tartışmaya açtı.

## Ödülün dokuzuncu sahibi

Sandel, ödülün dokuzuncu sahibi olarak Ruth Bader Ginsburg, Martha Nussbaum ve Peter Singer'ın da aralarında bulunduğu bir listeye katıldı. Tören 2026 baharında Massachusetts, Cambridge'de düzenleniyor.

## Neden önemli?

Berggruen Ödülü, felsefeyi akademik bir uzmanlık alanı olmaktan çıkarıp kamusal tartışmanın merkezine yerleştiren isimleri öne çıkarmasıyla biliniyor. Sandel'in seçilmesi, siyaset felsefesinin güncel eşitsizlik ve liyakat tartışmalarındaki ağırlığını da teyit ediyor.`,
  },
  {
    title: "Nussbaum'un yeni kitabı: Opera ve siyasal özgürlük",
    slug: "nussbaum-yeni-kitap-republic-of-love",
    summary:
      "Oxford University Press, Martha Nussbaum'un 'The Republic of Love: Opera and Political Freedom' kitabını 16 Nisan 2026'da yayımladı. Nussbaum, Mozart'tan Verdi'ye operayı siyasal düşüncenin bir alanı olarak okuyor.",
    coverImage: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "Oxford University Press",
    sourceUrl: "https://global.oup.com/academic/product/the-republic-of-love-9780197812556",
    publishedAt: "2026-08-06T09:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "siyaset-felsefesi"],
    philosopherSlugs: ["martha-nussbaum"],
    content: `Martha Nussbaum'un yeni kitabı **The Republic of Love: Opera and Political Freedom**, Oxford University Press tarafından 16 Nisan 2026'da yayımlandı. 312 sayfalık çalışma, operayı bir sanat türü olmanın ötesinde siyasal düşüncenin içindeki bir güç olarak ele alıyor.

## Mozart'tan başlayan hat

Kitabın ilk yarısı Mozart'a ayrılmış. Nussbaum'a göre Mozart, yalnızca müzikal değil, yeni bir duygusal ve siyasal manzara öneriyor: onur, özgürlük ve ortak yaşamın ahlaki talepleri.

İkinci yarıda bu etkinin izi sürülüyor:

- Beethoven'ın hümanizmi
- Verdi'nin toplumsal duyarlılığı
- Britten'ın ahlaki sorgulaması
- John Adams'ın güncel siyasal angajmanı
- Jake Heggie'nin empati araştırmaları

Wagner ise bu hattın karşısında, Mozart'ın ideallerine karşı çıkan başlıca ses olarak konumlandırılıyor.

## Nefes almak

Kitap boyunca yinelenen bir eğretileme var: özgürlük dürtüsünün operadaki karşılığı olarak **nefes almak**. Nussbaum, sesin bedenden çıkışını siyasal bir edimin ölçüsü hâline getiriyor.

Yetenekler yaklaşımı ve duygular kuramıyla tanınan Nussbaum'un bu kitabı, felsefe ile sanat kuramı arasındaki geçişkenliği sürdüren çalışmalarının son halkası.`,
  },
  {
    title: "Byung-Chul Han'ın 'Anlatının Krizi' Türkçede",
    slug: "byung-chul-han-anlatinin-krizi-turkcede",
    summary:
      "Ketebe Yayınları'ndan Murat Erşen çevirisiyle çıkan kitapta Han, anlatının hikâye anlatıcılığından 'hikâye satıcılığına' dönüşümünü tartışıyor.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Ketebe Yayınları",
    sourceUrl: "https://www.ketebe.com/anlatinin-krizi-byung-chul-han",
    publishedAt: "2026-08-04T13:20:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "ceviri"],
    philosopherSlugs: ["byung-chul-han"],
    content: `Byung-Chul Han'ın *Anlatının Krizi* adlı kitabı, Murat Erşen çevirisiyle Ketebe Yayınları tarafından Türkçede yayımlandı.

## Tez

Han, kökleri moderniteye uzanan ve dijitalleşmeyle doruğa çıkan bir "anlatı kaybı"nı ele alıyor. Anlatının etimolojik kökündeki *anlama* ile *bellek* arasındaki bağın koptuğunu; yerini bağlamsız, anlık ve hızla tüketilen enformasyonun aldığını savunuyor.

## "Storytelling"den "storyselling"e

Kitabın en çok tartışılan savı şu: neoliberal kültürde hikâye anlatıcılığı, toplulukları birleştiren bir eylem olmaktan çıkıp **hikâye satıcılığına** (storyselling) dönüştü. Her şeyin keyfîleştiği enformasyon toplumunda anlatılar bağlayıcı gücünü yitiriyor.

## Han'ın Türkçedeki yeri

*Yorgunluk Toplumu*, *Şeffaflık Toplumu* ve *Psikopolitika* gibi kitaplarıyla Türkiye'de geniş bir okur kitlesine ulaşan Han'ın metinleri kısa ve yoğun olmasıyla biliniyor. *Anlatının Krizi* de bu çizgiyi sürdürüyor: seksen sayfayı biraz aşan hacmine karşın, dijital kültür eleştirisinin merkezindeki bir savı taşıyor.

Kitabın künye bilgileri ve baskı ayrıntıları için yayınevinin sayfasına bakılabilir.`,
  },
  {
    title: "'Assos'ta Felsefe' 26. kez toplandı",
    slug: "assosta-felsefe-26-kez-toplandi",
    summary:
      "Felsefe Sanat Bilim Derneği'nin Örsan K. Öymen öncülüğünde düzenlediği sempozyum, 6-7 Şubat 2026'da 'Felsefe, Sanat, Bilim ve Siyaset' başlığıyla yapıldı. Katılım ücretsizdi.",
    coverImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Cumhuriyet",
    sourceUrl: "https://www.cumhuriyet.com.tr/kultur-sanat/26-yillik-gelenek-assos-ta-felsefe-sempozyumu-kapilarini-aciyor-2471919",
    publishedAt: "2026-08-02T10:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "konferanslar",
    tagSlugs: ["sempozyum", "akademi"],
    philosopherSlugs: ["orsan-k-oymen"],
    content: `Aristoteles'in bir dönem ders verdiği Assos'ta 26 yıldır sürdürülen "Assos'ta Felsefe" sempozyumu, 6-7 Şubat 2026 tarihlerinde toplandı.

## Bu yılın başlığı

Felsefe Sanat Bilim Derneği tarafından, Prof. Dr. Örsan K. Öymen'in öncülüğünde düzenlenen etkinliğin bu yılki ana başlığı **"Felsefe, Sanat, Bilim ve Siyaset"** oldu.

İki gün süren programda sunumlar geniş bir yelpazeye yayıldı:

- Aydınlanma felsefesi
- Küresel göç
- Post-doğruluk (post-truth) çağı
- Adorno ve Hegel'in sanat kuramları

## Katılım

Assos-Behramkale liman mevkiindeki Nazlıhan Otel'de yapılan toplantılar felsefeye ilgi duyan herkese açık ve ücretsizdi; katılım için organizasyonun resmî sitesinden kayıt isteniyordu.

Sempozyumun 26 yıldır kesintisiz sürmesi, Türkiye'de akademi dışına da açık felsefe etkinliklerinin sürdürülebilirliği açısından dikkat çekici bir örnek oluşturuyor.`,
  },
  {
    title: "Türkiye'de felsefe takvimi yoğunlaşıyor: PhilFest'26 ve kadın felsefeciler kongresi",
    slug: "turkiyede-felsefe-takvimi-philfest-kadin-felsefeciler",
    summary:
      "Bilkent Üniversitesi'nin felsefe şenliği PhilFest'26, söyleşiler, sergi ve yarışmalarla düzenleniyor. 'Savaş ve Felsefe' başlıklı VIII. Türkiye Kadın Felsefeciler Kongresi de gerçekleştirildi.",
    coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "PhilFest'26 — Bilkent Üniversitesi",
    sourceUrl: "https://philfest.bilkent.edu.tr/",
    publishedAt: "2026-07-30T08:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["akademi", "sempozyum"],
    philosopherSlugs: [],
    content: `Türkiye'de felsefe etkinlikleri üniversite kampüslerinin dışına taşan bir çeşitlilik kazanıyor.

## PhilFest'26

Bilkent Üniversitesi'nin düzenlediği felsefe şenliği **PhilFest'26**, Türkiye felsefe dünyasından isimlerin söyleşilerini, interaktif posterlerin ve felsefi görsellerin yer aldığı bir sergi alanını ve ödüllü yarışmaları bir araya getiriyor. Şenlik formatı, felsefeyi lisans ve lise öğrencileri için erişilebilir kılmayı hedefliyor.

## "Savaş ve Felsefe"

**VIII. Türkiye Kadın Felsefeciler Kongresi**, "Savaş ve Felsefe" başlığıyla toplandı. Kongre dizisi, Türkiye'deki kadın felsefecilerin çalışmalarını görünür kılmayı ve ortak bir tartışma zemini kurmayı amaçlıyor.

## Bölümlerdeki program yoğunluğu

Üniversite felsefe bölümlerinin etkinlik takvimleri de dolu görünüyor. İstanbul 29 Mayıs Üniversitesi Felsefe Bölümü'nün programında kıta felsefesi ve metafizik, felsefe-din ilişkisinde kurban kavramı ve İslam felsefesinde nefs teorisi gibi başlıklar ile III. Türkiye Fenomenoloji Topluluğu Konferansı yer aldı.

Lise düzeyinde ise **Genç Felsefeci Ödülleri** kapsamında blog yazısı, makale ve video formatlarında projeler hazırlanıyor.

> Etkinlik duyurusu göndermek isteyen kurumlar için: iletişim sayfasındaki adrese başlık, tarih, yer ve kayıt bağlantısını içeren kısa bir metin yeterli.`,
  },
  {
    title: "Philosophy Now'ın Ağustos/Eylül sayısı çıktı",
    slug: "philosophy-now-175-sayi",
    summary:
      "Derginin 175. sayısındaki haber bölümü, yapay zekâ şirketlerinin filozof istihdamını ve Herculaneum tomarlarının okunmasını öne çıkardı.",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Philosophy Now",
    sourceUrl: "https://philosophynow.org/issues/175",
    publishedAt: "2026-07-28T12:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "gundem",
    tagSlugs: ["dergi", "yapay-zeka"],
    philosopherSlugs: [],
    content: `Popüler felsefe dergisi *Philosophy Now*, Ağustos/Eylül 2026 tarihli **175. sayısını** yayımladı.

## Haber bölümünde ne var?

Anja Steinbauer'in hazırladığı haber bölümünde dört başlık öne çıkıyor:

1. Yapay zekâ şirketlerinin filozof istihdamındaki artış
2. Herculaneum'daki kömürleşmiş tomarların yapay zekâyla okunması
3. Bilincin karbon temelli biyolojiye bağlı olup olmadığı tartışması
4. Birleşik Krallık'ta felsefe bölümlerinin kapanması

## Türkiye'den takip

Dergi, felsefeyi akademi dışındaki okura açmayı hedefleyen yayınların başında geliyor. Dijital aboneliğin yanı sıra sitesinde her ay sınırlı sayıda makaleye ücretsiz erişim sunuluyor.

Türkiye'de benzer işlevi gören yayınların başında ise Yapı Kredi Yayınları'nın 1994'ten bu yana çıkardığı üç aylık **Cogito** geliyor. Her sayısını tematik bir kavrama ayıran dergi, telif ve çeviri yazıları bir arada sunuyor.`,
  },
  {
    title: "2026'da kaybettiğimiz filozoflar",
    slug: "2026da-kaybettigimiz-filozoflar",
    summary:
      "Charles E. Scott, William L. McBride ve Sergio Landucci bu yıl aramızdan ayrıldı. Üçü de kendi geleneklerinde kuşaklar yetiştirmiş isimlerdi.",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Daily Nous · Leiter Reports · Vanderbilt ve Purdue duyuruları",
    sourceUrl: "https://dailynous.com/2026/04/03/charles-e-scott-1935-2026/",
    publishedAt: "2026-07-25T09:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["vefat", "akademi"],
    philosopherSlugs: [],
    content: `2026, kıta felsefesi ve siyaset felsefesi alanlarında iz bırakmış birkaç ismin kaybına sahne oldu.

## Charles E. Scott (1935 – 30 Mart 2026)

Vanderbilt Üniversitesi'nde felsefe profesörü emeritus olan Scott, daha önce Pennsylvania State Üniversitesi'nde Edwin Erle Sparks Felsefe Profesörlüğü yapmıştı. On yediyi aşkın kitap ve derlemeye imza attı; bunlar arasında *Living with Indifference*, *The Lives of Things*, *The Question of Ethics* ve *Telling Silence* yer alıyor. 2020'de Nancy Tuana ile birlikte *Beyond Philosophy: Nietzsche, Foucault, Anzaldúa* kitabını yayımladı.

Foucault, Heidegger, Kierkegaard ve Nietzsche üzerine; ayrıca psikanaliz, etik, ölüm ve sevgi konularında iki yüzden fazla makale ve kitap bölümü kaleme aldı.

## William L. McBride (19 Ocak 1938 – 10 Nisan 2026)

Purdue Üniversitesi'nde Arthur G. Hansen Seçkin Felsefe Profesörü olan McBride, siyaset felsefesi ve hukuk felsefesi üzerine çalışmalarıyla tanınıyordu. Purdue'daki görevi yarım yüzyılı aştı.

Uluslararası Felsefe Kurumları Federasyonu'nda (FISP) önce Genel Sekreter, ardından Başkan olarak görev yapan ilk Amerikalıydı.

## Sergio Landucci (1938 – 17 Nisan 2026)

İtalyan felsefeci ve felsefe tarihçisi Landucci, 88 yaşında hayatını kaybetti. Aydınlanma düşüncesi ve modern felsefe tarihi üzerine çalışmalarıyla tanınıyordu.

---

*Anma bölümümüze eklenmesini istediğiniz isimler için iletişim sayfasından bize yazabilirsiniz.*`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 5 Ağustos: Friedrich Engels'in ölümü",
    slug: "felsefe-tarihinde-bugun-5-agustos-engels",
    summary:
      "Friedrich Engels 5 Ağustos 1895'te Londra'da öldü. Marx'ın yakın çalışma arkadaşı, tarihsel materyalizmin yaygınlaşmasında belirleyici bir rol oynadı.",
    coverImage: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-05T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "siyaset-felsefesi"],
    philosopherSlugs: [],
    content: `**5 Ağustos 1895** — Friedrich Engels Londra'da, 74 yaşında öldü.

## Neden önemli?

Engels, Karl Marx'la ortak çalışmalarının yanı sıra, Marx'ın ölümünden sonra *Kapital*'in ikinci ve üçüncü ciltlerini onun notlarından derleyip yayıma hazırladı. Bu emek olmasaydı, bugün bildiğimiz metnin büyük bölümü yayımlanmamış müsvedde olarak kalacaktı.

## Tartışmalı miras

Engels'in *Doğanın Diyalektiği* ve *Anti-Dühring* gibi metinlerde geliştirdiği, diyalektiği doğa yasalarına da genişleten yorum, 20. yüzyıl boyunca tartışıldı. Kimi yorumcular bunu Marx'ın düşüncesinin sistemleştirilmiş bir biçimi sayarken, kimileri özgün düşünceden bir sapma olarak okudu. Tartışma, "Marx'ın Marksizmi" ile "Engels'in Marksizmi" ayrımı üzerinden hâlâ sürüyor.

## Ağustos ayının diğer tarihleri

- **25 Ağustos 1776** — David Hume, Edinburgh'da öldü.
- **25 Ağustos 1900** — Friedrich Nietzsche, Weimar'da öldü.
- **27 Ağustos 1770** — G. W. F. Hegel, Stuttgart'ta doğdu.`,
  },
  {
    title: "Kant'ın kesin buyruğu: ahlakın tek bir ilkesi olabilir mi?",
    slug: "kantin-kesin-buyrugu-nedir",
    summary:
      "Immanuel Kant, ahlaki doğruluğun ölçüsünü sonuçlarda değil, eylemin ilkesinde arar. Kesin buyruğun üç formülü ve bugün neden hâlâ tartışıldığı.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-12T07:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["kavram", "kant", "etik"],
    philosopherSlugs: [],
    content: `Ahlak felsefesinin en çok alıntılanan cümlelerinden biri Kant'a ait: "Yalnızca, aynı zamanda genel bir yasa olmasını isteyebileceğin ilkeye göre eyle."

## Buyruk neden "kesin"?

Kant, iki tür buyruk ayırır. **Koşullu buyruk** bir amaca bağlıdır: "Sağlıklı olmak istiyorsan düzenli uyu." Amacı bırakırsanız buyruk da düşer. **Kesin buyruk** ise hiçbir koşula bağlı değildir; ahlaki olarak bağlayıcılığı, istediğiniz sonuçtan bağımsızdır.

## Üç formül

1. **Evrensel yasa formülü** — Eylem ilkeni, herkesin izlediği bir yasa hâline getirebilir misin? Yalan söz vermeyi genelleştirirseniz, söz verme kurumunun kendisi çöker; ilke kendi kendini ortadan kaldırır.
2. **İnsanlık formülü** — İnsanı hiçbir zaman yalnızca araç olarak değil, aynı zamanda amaç olarak gör.
3. **Amaçlar krallığı formülü** — Kendini, herkesin hem yasa koyucu hem de yasaya tabi olduğu bir topluluğun üyesi olarak düşün.

## Klasik itiraz

En bilinen eleştiri, Kant'ın kendi verdiği örnekten doğar: kapınıza gelen katile, saklanan kişinin yerini söylemek zorunda mısınız? Kant'ın katı yorumu "yalan söylenemez" derken, sonuççu gelenek bunu ilkeye körü körüne bağlılığın bedeli olarak gösterir.

Kantçı savunma ise şudur: kesin buyruk bir eylem listesi değil, bir sınama yöntemidir; sorulacak soru, gerçekte hangi ilkeye göre davrandığınızdır.

## Bugünkü karşılığı

Kant'ın ölçütü, yapay zekâ etiğinde beklenmedik bir güncellik kazandı: sistemlerin "sabit ilkelere mi uyacağı yoksa her durumda sonuçları mı tartacağı" tartışması, deontoloji ile faydacılık arasındaki bu eski hattın mühendislik diline çevrilmiş hâlidir.`,
  },
  {
    title: "Nietzsche'nin soykütüğü: değerlerin değerini sormak",
    slug: "nietzschenin-soykutugu-degerlerin-degeri",
    summary:
      "Soykütük yöntemi ahlakı çürütmeye çalışmaz; onun bir tarihi olduğunu hatırlatır. Efendi-köle ahlakı ayrımı ve ressentiment kavramı.",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-09T07:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["kavram", "nietzsche", "etik"],
    philosopherSlugs: [],
    content: `Nietzsche'nin *Ahlakın Soykütüğü*'nde sorduğu soru, "hangi değerler doğrudur?" değildir. Daha rahatsız edici olanıdır: **bu değerlerin kendisi ne kadar değerlidir?**

## Soykütük nedir?

Soykütük, bir kavramın kökenini araştırarak bugünkü doğallığını sarsar. "İyi" sözcüğünün anlamının tarih içinde nasıl değiştiğini izlemek, ahlakın zamansız bir tablo değil, tarihsel bir oluşum olduğunu gösterir.

Önemli bir uyarı: köken göstermek, çürütmek değildir. Bir inancın nasıl doğduğunu bilmek onu otomatik olarak yanlışlamaz — buna *soykütüksel yanılgı* denir. Nietzsche'nin amacı da çürütmekten çok, başka türlüsünün düşünülebilir olduğunu göstermektir.

## Efendi ve köle ahlakı

- **Efendi ahlakı** değeri kendinden başlatır: "iyi" olan, güçlü ve doludur.
- **Köle ahlakı** değeri tepkisel kurar: önce dışarıdakini "kötü" ilan eder, kendini bunun karşıtı olarak tanımlar.

Bu ayrım sosyolojik bir sınıf haritası değil, psikolojik bir yönelim tipolojisidir. *Ressentiment* — birikmiş tepkinin değere dönüşmesi — bugünkü kamusal tartışmanın da tanıdık bir dinamiğidir.

## "Tanrı öldü" ne demek?

Bir zafer ilanı değil, bir teşhis: değerlerimizin dayandığı zemin çöktüğünde, değerler bir süre daha kendi ataletiyle yürür. Nietzsche'ye göre asıl tehlike inançsızlık değil, **anlam kaybının fark edilmemesidir**.

## Karşı görüş

Nietzsche'ye yöneltilen güçlü itiraz şudur: değer yaratma çağrısı, bir ölçüt sunmadığında keyfîliğe açılır. Kantçı bir okur, "kendi yasanı koy" ilkesinin ancak genelleştirilebilirlik kısıtıyla birlikte anlam kazandığını söyleyecektir.`,
  },
  {
    title: "Platon'un mağarası: iki bin yıldır anlatılan alegori ne söylüyor?",
    slug: "platonun-magarasi-alegorisi",
    summary:
      "Devlet'in yedinci kitabındaki mağara alegorisi, bilgi ile görünüş arasındaki farkı anlatır. Bugün ekran, algoritma ve enformasyon tartışmalarında sıkça anılmasının nedeni.",
    coverImage: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-07T07:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["kavram", "platon"],
    philosopherSlugs: [],
    content: `Platon'un *Devlet* diyaloğunun yedinci kitabında anlatılan mağara alegorisi, Batı felsefesinin en çok yeniden anlatılan sahnesidir.

## Sahne

Bir mağarada, doğdukları günden beri zincirli insanlar oturur. Yalnızca önlerindeki duvarı görebilirler. Arkalarında bir ateş, ateşle onlar arasında bir yol vardır; yoldan geçenlerin taşıdığı nesnelerin gölgeleri duvara düşer. Zincirliler için gerçeklik, bu gölgelerden ibarettir.

Biri çözülüp dışarı çıkarıldığında önce gözleri kamaşır, sonra nesneleri, en sonunda güneşi görür. Geri dönüp ötekilere anlattığında ise inanılmaz; hatta alay konusu olur.

## Ne anlatıyor?

Alegori en az üç katmanda okunur:

1. **Bilgi kuramı** — Duyularla algılanan dünya ile akılla kavranan idealar arasındaki fark.
2. **Eğitim** — Öğrenmek, boş bir zihne bilgi doldurmak değil, bakışı çevirmektir. Platon'un ifadesiyle ruhun yönünü döndürme sanatı.
3. **Siyaset** — Dışarıyı görmüş olanın geri dönme yükümlülüğü. Alegori, filozofun kamusal sorumluluğuyla biter.

## Neden hâlâ anlatılıyor?

Ekran, algoritma ve enformasyon tartışmalarında mağara benzetmesine sık başvurulur. Bu benzetmenin cazibesi kadar riski de var: "gölge" ile "gerçek" arasında keskin bir ayrım varsaymak, kimin dışarı çıktığına kimin karar vereceği sorusunu görünmez kılabilir.

Alegorinin kendi içindeki en ilginç ayrıntı da burada: dışarı çıkan kişi geri döndüğünde ikna edemez. Platon, hakikate ulaşmanın onu paylaşmayı kolaylaştırmadığını baştan söyler.`,
  },
];

/* ------------------------------------------------------------------ */
/* Kitaplar                                                            */
/* ------------------------------------------------------------------ */

export const books: SeedBook[] = [
  {
    title: "The Republic of Love: Opera and Political Freedom",
    slug: "the-republic-of-love",
    originalTitle: null,
    publisher: "Oxford University Press",
    translator: null,
    language: "İngilizce",
    isbn: "9780197812556",
    coverImage: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&q=80",
    description:
      "Nussbaum, Mozart'tan Verdi ve Britten'a uzanan hatta operayı siyasal özgürlüğün bir alanı olarak okuyor. 312 sayfa.",
    year: 2026,
    link: "https://global.oup.com/academic/product/the-republic-of-love-9780197812556",
    philosopherSlug: "martha-nussbaum",
    postSlug: "nussbaum-yeni-kitap-republic-of-love",
  },
  {
    title: "Anlatının Krizi",
    slug: "anlatinin-krizi",
    originalTitle: "Die Krise der Narration",
    publisher: "Ketebe Yayınları",
    translator: "Murat Erşen",
    language: "Türkçe",
    isbn: null,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    description:
      "Han, anlatının hikâye anlatıcılığından 'hikâye satıcılığına' dönüşümünü ve dijitalleşmeyle derinleşen anlatı kaybını tartışıyor.",
    year: null,
    link: "https://www.ketebe.com/anlatinin-krizi-byung-chul-han",
    philosopherSlug: "byung-chul-han",
    postSlug: "byung-chul-han-anlatinin-krizi-turkcede",
  },
  {
    title: "Yorgunluk Toplumu",
    slug: "yorgunluk-toplumu",
    originalTitle: "Müdigkeitsgesellschaft",
    publisher: null,
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    description:
      "Han'ın performans toplumu eleştirisinin çıkış metni: disiplin toplumundan başarı toplumuna geçiş ve tükenmişlik.",
    year: null,
    link: null,
    philosopherSlug: "byung-chul-han",
    postSlug: null,
  },
  {
    title: "Adalet: Yapılması Gereken Doğru Şey Nedir?",
    slug: "adalet-sandel",
    originalTitle: "Justice: What's the Right Thing to Do?",
    publisher: null,
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    description:
      "Sandel'in Harvard'daki ünlü dersinden doğan kitap; faydacılık, özgürlükçülük ve erdem etiği tartışmalarını güncel vakalarla ele alıyor.",
    year: null,
    link: null,
    philosopherSlug: "michael-sandel",
    postSlug: null,
  },
  {
    title: "Hayvan Özgürleşmesi",
    slug: "hayvan-ozgurlesmesi",
    originalTitle: "Animal Liberation",
    publisher: null,
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
    description:
      "Uygulamalı etiğin en çok tartışılan kitaplarından; türcülük kavramını felsefi gündeme sokan metin.",
    year: null,
    link: null,
    philosopherSlug: "peter-singer",
    postSlug: null,
  },
];
