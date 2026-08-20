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
  /** Ana sayfadaki "Takipteki Filozoflar" şeridinde gösterilsin mi? */
  featured: boolean;
  /**
   * ONAY LİSTESİ — zorunlu alan.
   *
   * `true`  → Filozof Dizini'nde ve "Takipteki Filozoflar" şeridinde görünür.
   * `false` → Hiçbir listede görünmez. Kaydı silinmez, yalnızca gizlenir;
   *           böylece eski bağlantılar ve haber künyeleri kırılmaz.
   *
   * Bu alan isteğe bağlı değildir: her isim için açık bir karar verilmesi
   * gerekir, "gelişigüzel" isim eklenmesini bu engeller.
   */
  listed: boolean;

  /* --- Filozof Dizini alanları (hepsi isteğe bağlı) ---
     Emin olunmayan alan boş bırakılır; uydurma bilgi yazılmaz. */
  fullName?: string;
  /** "1953", "MÖ 470 civarı" gibi serbest biçim. */
  birthDate?: string;
  /** Yaşayan filozoflarda yazılmaz. */
  deathDate?: string;
  /** Varsayılan true; vefat etmiş filozoflarda false. */
  alive?: boolean;
  period?: string;
  school?: string;
  /** Virgülle ayrılmış çalışma alanları. */
  areas?: string;
  /** Her satırda bir eser. */
  majorWorks?: string;
  /** Virgülle ayrılmış temel kavramlar. */
  keyConcepts?: string;
  influencedBy?: string;
  influenced?: string;
  /** Ayrıntılı biyografi (Markdown). */
  longBio?: string;
  /** Her satırda "Başlık — URL". */
  sources?: string;
};

/** Haberin dayandığı kaynaklardan biri (6. ve 26. kural). */
export type SeedSource = {
  title: string;
  publisher?: string;
  /** Serbest biçim: "12 Ağustos 2026". */
  date?: string;
  url: string;
  /** Birincil kaynak künyede önce gösterilir. */
  primary?: boolean;
};

/** Konferans, sempozyum, seminer, webinar, çalıştay ya da bildiri çağrısı. */
export type SeedEvent = {
  title: string;
  slug: string;
  summary?: string;
  /** Markdown. */
  description?: string;
  /** KONFERANS | KONGRE | SEMPOZYUM | CALISTAY | SEMINER | WEBINAR | PANEL | DERS | KOLOKYUM | YAZ_OKULU | KIS_OKULU | CFP */
  kind?: string;
  speakers?: string;
  organizer?: string;
  topic?: string;
  /** ONLINE | FIZIKSEL | HIBRIT */
  format?: string;
  /** ISO 8601. Saat bilgisi yoksa gün başlangıcı yazılır ve hasTime false bırakılır. */
  startsAt: string;
  endsAt?: string;
  timezone?: string;
  hasTime?: boolean;
  city?: string;
  country?: string;
  venue?: string;
  registrationUrl?: string;
  fee?: string;
  deadline?: string;
  cfpDeadline?: string;
  website?: string;
  sourceName?: string;
  sourceUrl?: string;
  coverImage?: string;
  featured?: boolean;
  publishedAt?: string | null;
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
  /** SEO başlığı — boş bırakılırsa `title` kullanılır. */
  seoTitle?: string;
  /** Arama sonucu açıklaması — boş bırakılırsa `summary` kullanılır. */
  metaDescription?: string;
  /** HABER | ANALIZ | PORTRE | KITAP | ROPORTAJ | ETKINLIK | TARIH | KAVRAM */
  contentType?: string;
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
  /** Ek kaynaklar. `sourceName`/`sourceUrl` ana kaynaktır; burada tümü listelenir. */
  sources?: SeedSource[];
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
  { name: "Sinema", slug: "sinema" },
  { name: "Epistemoloji", slug: "epistemoloji" },
  { name: "Alman İdealizmi", slug: "alman-idealizmi" },
  { name: "Açık Erişim", slug: "acik-erisim" },
  { name: "Risk", slug: "risk" },
  { name: "Ortaçağ Felsefesi", slug: "ortacag-felsefesi" },
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

/**
 * FİLOZOF ONAY LİSTESİ
 *
 * Buradaki hiçbir isim "gelişigüzel" eklenmez. Bir filozofun Filozof Dizini'nde
 * ya da ana sayfadaki "Takipteki Filozoflar" şeridinde görünmesi için
 * `listed: true` olması gerekir; bu karar yayın sahibine aittir.
 *
 * Bir ismi listeden çıkarmak için kaydı SİLİNMEZ, `listed: false` yapılır.
 * Böylece o filozofa verilmiş eski bağlantılar kırılmaz, haber künyeleri bozulmaz;
 * isim yalnızca dizinden, şeritten ve site haritasından kalkar.
 */
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
    listed: true,
    birthDate: "1953",
    alive: true,
    period: "Çağdaş",
    school: "Komüniteryanizm",
    areas: "Siyaset felsefesi, Ahlak felsefesi, Hukuk felsefesi",
    majorWorks: "Liberalism and the Limits of Justice (1982)\nJustice: What's the Right Thing to Do? (2009)\nWhat Money Can't Buy (2012)\nThe Tyranny of Merit (2020)",
    keyConcepts: "Adalet, Liyakat tiranlığı, Piyasaların ahlaki sınırları, Ortak iyi",
    influencedBy: "Aristoteles, Hegel, John Rawls (eleştirel)",
    sources: "Harvard Üniversitesi profil sayfası — https://scholar.harvard.edu/sandel",
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
    listed: true,
    birthDate: "1947",
    alive: true,
    period: "Çağdaş",
    areas: "Etik, Siyaset felsefesi, Antik Yunan felsefesi, Hukuk felsefesi, Duygular kuramı",
    majorWorks: "The Fragility of Goodness (1986)\nUpheavals of Thought (2001)\nCreating Capabilities (2011)\nThe Republic of Love: Opera and Political Freedom (2026)",
    keyConcepts: "Yetenekler yaklaşımı, Duyguların bilişsel kuramı, İnsani gelişme",
    influencedBy: "Aristoteles, Stoacılar, John Stuart Mill, Amartya Sen",
    sources: "Chicago Üniversitesi profil sayfası — https://www.law.uchicago.edu/faculty/nussbaum",
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
    listed: true,
    birthDate: "1959",
    alive: true,
    period: "Çağdaş",
    areas: "Kültür kuramı, Medya felsefesi, Toplum felsefesi",
    majorWorks: "Yorgunluk Toplumu (2010)\nŞeffaflık Toplumu (2012)\nPsikopolitika (2014)\nAnlatının Krizi (2023)",
    keyConcepts: "Performans toplumu, Şeffaflık toplumu, Psikopolitika, Anlatı kaybı",
    influencedBy: "Martin Heidegger, Michel Foucault, Walter Benjamin",
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
    listed: true,
    birthDate: "1964",
    alive: true,
    period: "Çağdaş",
    areas: "Bilgi felsefesi, Dijital etik, Yapay zekâ etiği, Teknoloji felsefesi",
    majorWorks: "The Philosophy of Information (2011)\nThe Ethics of Information (2013)\nThe Fourth Revolution (2014)",
    keyConcepts: "İnfosfer, Bilgi felsefesi, Dijital etik, Dördüncü devrim",
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
    listed: true,
    alive: true,
    period: "Çağdaş",
    areas: "Zihin felsefesi, Bilinç araştırmaları, Ahlak psikolojisi",
    majorWorks: "Perplexities of Consciousness (2011)\nA Theory of Jerks and Other Philosophical Misadventures (2019)",
    keyConcepts: "Zemin esnekliği, İçgözlemin güvenilmezliği",
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
    listed: true,
    alive: true,
    period: "Çağdaş",
    areas: "Zihin felsefesi, Bilinç araştırmaları",
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
    listed: true,
    birthDate: "1946",
    alive: true,
    period: "Çağdaş",
    school: "Faydacılık",
    areas: "Uygulamalı etik, Hayvan etiği, Biyoetik, Küresel yoksulluk",
    majorWorks: "Animal Liberation (1975)\nPractical Ethics (1979)\nThe Life You Can Save (2009)",
    keyConcepts: "Türcülük, Etkili özgecilik, Çıkarların eşit değerlendirilmesi",
    influencedBy: "Jeremy Bentham, John Stuart Mill, R. M. Hare",
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
    listed: true,
    birthDate: "1956",
    alive: true,
    period: "Çağdaş",
    school: "Kıta felsefesi, Post-yapısalcılık",
    areas: "Siyaset felsefesi, Dil felsefesi, Toplumsal cinsiyet kuramı, Etik",
    majorWorks: "Gender Trouble (1990)\nBodies That Matter (1993)\nPrecarious Life (2004)\nWho's Afraid of Gender (2024)",
    keyConcepts: "Performatiflik, Kırılganlık, Tanınma, Yas",
    influencedBy: "G. W. F. Hegel, Michel Foucault, Jacques Derrida, J. L. Austin",
  },
  {
    name: "Anthony Kenny",
    slug: "anthony-kenny",
    headline: "Felsefe tarihçisi ve zihin felsefecisi — Oxford Üniversitesi",
    bio: "Ortaçağ felsefesi, Aquinas ve Wittgenstein üzerine çalışmalarıyla tanınan İngiliz filozof. Dört ciltlik 'A New History of Western Philosophy' onun en kapsamlı eseridir. 1978-1989 arasında Balliol College'ın başkanlığını yaptı.",
    avatar: null,
    country: "Birleşik Krallık",
    birthYear: 1931,
    affiliation: "Balliol College, Oxford",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1931",
    deathDate: "3 Ağustos 2026",
    alive: false,
    period: "20.-21. yüzyıl",
    school: "Analitik felsefe",
    areas: "Zihin felsefesi, Felsefe tarihi, Ortaçağ felsefesi, Din felsefesi",
    majorWorks: "A New History of Western Philosophy (4 cilt)\nAquinas üzerine incelemeler\nWittgenstein üzerine incelemeler",
    keyConcepts: "Felsefe tarihi yazımı, Eylem felsefesi",
    sources: "Sir Anthony Kenny 1931-2026 — https://www.balliol.ox.ac.uk/news/2026/august/sir-anthony-kenny-1931-2026",
  },
  {
    name: "Friedrich Wilhelm Joseph Schelling",
    slug: "schelling",
    headline: "Alman idealizminin üç büyük isminden biri",
    bio: "Fichte ve Hegel'le birlikte Alman idealizminin en etkili üç düşünüründen biri. Doğa felsefesi, özdeşlik felsefesi ve geç dönem 'olumlu felsefe' çalışmalarıyla tanınır.",
    avatar: null,
    country: "Almanya",
    birthYear: 1775,
    affiliation: null,
    website: null,
    featured: false,
    listed: true,
    fullName: "Friedrich Wilhelm Joseph von Schelling",
    birthDate: "1775",
    deathDate: "20 Ağustos 1854",
    alive: false,
    period: "Alman idealizmi (18.-19. yüzyıl)",
    school: "Alman idealizmi",
    areas: "Doğa felsefesi, Metafizik, Sanat felsefesi, Din felsefesi",
    keyConcepts: "Doğa felsefesi, Özdeşlik felsefesi, Olumlu felsefe, Özgürlük ve kötülük",
    influencedBy: "Immanuel Kant, J. G. Fichte, Spinoza",
    influenced: "G. W. F. Hegel, Søren Kierkegaard, Martin Heidegger",
    sources: "Stanford Encyclopedia of Philosophy — https://plato.stanford.edu/entries/schelling/",
  },
  {
    name: "Duncan Pritchard",
    slug: "duncan-pritchard",
    headline: "Bilgi felsefecisi — California Üniversitesi, Irvine",
    bio: "Epistemoloji, şüphecilik ve epistemik şans üzerine çalışıyor. 2026'da Princeton University Press'ten çıkan kitabında riski olasılık yerine kırılganlık üzerinden açıklayan bir kuram öneriyor.",
    avatar: null,
    country: "Birleşik Krallık / ABD",
    birthYear: null,
    affiliation: "California Üniversitesi, Irvine",
    website: "https://www.duncanpritchard.org/",
    featured: false,
    listed: true,
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe",
    areas: "Epistemoloji, Erdem epistemolojisi, Şüphecilik, Risk kuramı",
    majorWorks: "Epistemic Luck (2005)\nEpistemological Disjunctivism (2012)\nTempting Fate: A Philosophical Guide to Risk, Luck, and a Meaningful Life (2026)",
    keyConcepts: "Epistemik şans, Kırılganlık kuramı, Epistemolojik ayrıklık",
    sources: "Kişisel sayfa — https://www.duncanpritchard.org/",
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
    // Onay listesine alınmadı: dizinde ve "Takipteki Filozoflar" şeridinde
    // görünmez. Kaydı, Assos sempozyumu haberiyle olan bağı korunsun diye
    // silinmedi; yalnızca gizlendi.
    featured: false,
    listed: false,
    alive: true,
    period: "Çağdaş",
    areas: "Felsefe etkinlikleri, Aydınlanma felsefesi",
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
    // Düzenleyicinin adı haber metninde ve etkinlik künyesinde geçiyor; ancak
    // onay listesinde olmadığı için filozof etiketi olarak bağlanmıyor.
    philosopherSlugs: [],
    sources: [
      {
        title: "26 yıllık gelenek: \"Assos'ta Felsefe\" sempozyumu kapılarını açıyor",
        publisher: "Cumhuriyet",
        url: "https://www.cumhuriyet.com.tr/kultur-sanat/26-yillik-gelenek-assos-ta-felsefe-sempozyumu-kapilarini-aciyor-2471919",
        primary: true,
      },
      {
        title: "\"Assos'ta Felsefe\" sempozyumu kapılarını açıyor",
        publisher: "Serbestiyet",
        url: "https://serbestiyet.com/haberler/kultur-sanat/assosta-felsefe-sempozyumu-kapilarini-aciyor-231138/",
      },
    ],
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
  {
    title: "Anthony Kenny (1931-2026): Batı felsefesinin tarihini yeniden yazan filozof",
    slug: "anthony-kenny-1931-2026",
    summary:
      "Ortaçağ felsefesi, Aquinas ve Wittgenstein üzerine çalışmalarıyla tanınan İngiliz filozof Sir Anthony Kenny 3 Ağustos'ta 95 yaşında öldü. Balliol College başkanlığı da yapan Kenny, dört ciltlik felsefe tarihiyle tanınıyordu.",
    seoTitle: "Anthony Kenny kimdir? (1931-2026) — Oxford'lu filozofun mirası",
    metaDescription:
      "Sir Anthony Kenny 3 Ağustos 2026'da 95 yaşında öldü. Aquinas ve Wittgenstein çalışmaları, dört ciltlik Batı felsefesi tarihi ve Balliol College yılları.",
    contentType: "PORTRE",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "Balliol College, Oxford",
    sourceUrl: "https://www.balliol.ox.ac.uk/news/2026/august/sir-anthony-kenny-1931-2026",
    publishedAt: "2026-08-20T07:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["vefat", "akademi", "ortacag-felsefesi"],
    philosopherSlugs: ["anthony-kenny"],
    sources: [
      {
        title: "Sir Anthony Kenny 1931-2026",
        publisher: "Balliol College, Oxford",
        url: "https://www.balliol.ox.ac.uk/news/2026/august/sir-anthony-kenny-1931-2026",
        primary: true,
      },
      {
        title: "Anthony Kenny (1931-2026)",
        publisher: "Daily Nous",
        date: "6 Ağustos 2026",
        url: "https://dailynous.com/2026/08/06/anthony-kenny-1931-2026/",
      },
      {
        title: "In Memoriam: Anthony Kenny (1931-2026)",
        publisher: "Leiter Reports",
        date: "6 Ağustos 2026",
        url: "https://leiterreports.com/2026/08/06/in-memoriam-anthony-kenny-1931-2026/",
      },
    ],
    content: `Britanya felsefesinin son yarım yüzyıldaki en üretken isimlerinden biri olan **Sir Anthony Kenny**, 3 Ağustos 2026'da 95 yaşında hayatını kaybetti.

## Balliol yılları

Kenny, 1964-1978 arasında Oxford'daki Balliol College'da felsefe öğretim üyesiydi; 1978'den 1989'a kadar da aynı kolejin başkanlığını (Master) yürüttü. Akademik kariyerinin tamamını Oxford'da geçirdi ve üniversitenin yönetiminde uzun yıllar görev aldı.

## Neyle tanınıyordu?

Kenny'nin ilgi alanı alışılmadık ölçüde genişti: felsefe, teoloji, klasik düşünce ve fikirler tarihi. Özellikle iki isim üzerine yaptığı çalışmalar alanın standart referansları arasına girdi:

- **Thomas Aquinas** — ortaçağ felsefesini analitik felsefenin araçlarıyla okuyan yorumları
- **Ludwig Wittgenstein** — dil ve zihin üzerine geç dönem düşüncesinin açıklamaları

Zihin felsefesi ve eylem kuramı üzerine yazdıkları da uzun süre tartışıldı.

## Dört ciltlik tarih

En iddialı işi **A New History of Western Philosophy** oldu. Dört cilt hâlinde yayımlanan ve sonradan tek ciltte toplanan bu çalışma, Batı felsefesini antik Yunan'dan ortaçağa, oradan erken modern ve modern döneme kadar izliyordu.

Felsefe tarihini tek bir yazarın kaleminden, tutarlı bir üslupla anlatma girişimi bugün nadir görülen bir iş; Kenny'nin metni bu yüzden hem giriş düzeyindeki okur hem de uzman için başvuru kaynağı olarak kullanılmaya devam ediyor.

## Ardında bıraktığı

Balliol College'ın duyurusu, Kenny'nin "uzun kariyerinin felsefeyi, teolojiyi, klasik düşünceyi ve fikirler tarihini kapsadığını" belirtiyor. Ölüm haberi Daily Nous ve Leiter Reports gibi alanın önde gelen yayınlarında da duyuruldu.`,
  },
  {
    title: "Paul Schrader'ın yeni filminin kahramanı bir felsefe profesörü",
    slug: "paul-schrader-the-basics-of-philosophy-venedik",
    summary:
      "Taxi Driver'ın senaristi Paul Schrader'ın yönettiği 'The Basics of Philosophy', 4 Eylül'de Venedik Film Festivali'nde yarışma dışı gösterilecek. Filmin merkezinde geçmişteki bir kararın suçluluğuyla yaşayan bir felsefe profesörü var.",
    seoTitle: "Paul Schrader'ın felsefe filmi Venedik'te: The Basics of Philosophy",
    metaDescription:
      "Paul Schrader'ın yeni filmi 'The Basics of Philosophy' 4 Eylül 2026'da Venedik'te prömiyer yapıyor. Jack Huston bir felsefe profesörünü canlandırıyor.",
    contentType: "HABER",
    coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    sourceName: "La Biennale di Venezia",
    sourceUrl: "https://www.labiennale.org/en/cinema/2026/venice-open-out-competition/basics-philosophy",
    publishedAt: "2026-08-20T09:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "gundem",
    tagSlugs: ["sinema", "etik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "The Basics of Philosophy — Venice Open, yarışma dışı",
        publisher: "La Biennale di Venezia",
        url: "https://www.labiennale.org/en/cinema/2026/venice-open-out-competition/basics-philosophy",
        primary: true,
      },
      {
        title: "Venice Film Festival Lineup",
        publisher: "Variety",
        url: "https://variety.com/2026/film/global/venice-film-festival-2026-lineup-1236818922/",
      },
      {
        title: "Venice Film Festival 2026 Movies — Full Lineup",
        publisher: "Deadline",
        url: "https://deadline.com/2026/07/venice-film-festival-lineup-2026-1237001062/",
      },
    ],
    content: `Paul Schrader'ın yeni filmi **The Basics of Philosophy**, 83. Venedik Uluslararası Film Festivali'nde 4 Eylül 2026'da dünya prömiyerini yapacak. Film yarışma dışı bölümde gösterilecek.

## Konu

Merkezde bir felsefe profesörü var. Jack Huston'ın canlandırdığı karakter, geçmişte verdiği bir kararın suçluluğuyla yaşarken, o kararın mağduru aniden hayatına geri döner.

Oyuncu kadrosunda Sofia Boutella, Daniel Zovatto, Bill Pullman ve Dana Delany de yer alıyor.

## Schrader'ın "odadaki adam" hattı

Filmin, Schrader'ın kariyerinin başından beri sürdürdüğü bir anlatı çizgisini devam ettirdiği belirtiliyor: Martin Scorsese'nin *Taxi Driver* filmi için yazdığı senaryoyla başlayan, *First Reformed*, *The Card Counter* ve *Master Gardener* ile süren "odadaki adam" hikâyeleri.

Bu filmlerin ortak yapısı tanıdıktır: kendi ahlaki hesabıyla yalnız kalmış bir adam, günlük tutar, disiplinli bir hayat kurar ve geçmişin bir borcu kapıya dayandığında bu düzen çöker.

## Neden felsefe sayfalarında?

Schrader'ın sinemasının uzun süredir suçluluk, kefaret ve ahlaki sorumluluk üzerine kurulu olduğu biliniyor. Bu kez ana karakterin doğrudan bir felsefe hocası olması, filmi etik tartışmalarının sinemadaki temsili açısından ilgi çekici kılıyor.

Filmin felsefi içeriğine dair değerlendirme, gösterim sonrasında yapılabilir; şimdilik elimizde festival programı ve künye bilgileri var.`,
  },
  {
    title: "Matematiksel felsefeye ilk açık erişimli dergi kuruldu",
    slug: "journal-of-mathematical-philosophy-kuruldu",
    summary:
      "Münih LMU bünyesindeki Matematiksel Felsefe Merkezi'nin çıkardığı Journal of Mathematical Philosophy, yazardan da okurdan da ücret almayan 'elmas' açık erişim modeliyle yayına başladı.",
    seoTitle: "Journal of Mathematical Philosophy: ücretsiz açık erişimli yeni dergi",
    metaDescription:
      "LMU Münih'in yeni dergisi Journal of Mathematical Philosophy, yazar ve okur ücreti almayan elmas açık erişim modeliyle makale kabulüne başladı.",
    contentType: "HABER",
    coverImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/03/new-journal-of-mathematical-philosophy/",
    publishedAt: "2026-08-20T10:15:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["akademi", "acik-erisim", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "New: Journal of Mathematical Philosophy",
        publisher: "Daily Nous",
        date: "3 Ağustos 2026",
        url: "https://dailynous.com/2026/08/03/new-journal-of-mathematical-philosophy/",
        primary: true,
      },
      {
        title: "Journal of Mathematical Philosophy — derginin resmî sayfası",
        publisher: "LMU München",
        url: "https://mathematicalphilosophy.org/mathphil",
      },
    ],
    content: `Ludwig-Maximilians-Universität München bünyesindeki **Matematiksel Felsefe Merkezi** (MCMP), matematiksel felsefeye ayrılmış ilk açık erişimli dergiyi kurdu. *Journal of Mathematical Philosophy* makale kabulüne başladı.

## "Elmas" açık erişim

Derginin ayırt edici yanı finansman modeli: ne yazardan makale işlem ücreti alınıyor ne de okurdan abonelik. Bu model literatürde *elmas açık erişim* olarak anılıyor.

Kuruluş gerekçesi de buradan geliyor: açık erişimli yayıncılık pek çok yazar ve kurum için yüksek makale işlem ücretleri nedeniyle hâlâ zor. Dergi bu engeli aşmayı hedefliyor.

## Kapsam

Yayın alanları oldukça geniş:

- Biçimsel epistemoloji
- Felsefi mantık
- Bilim felsefesi
- Karar kuramı
- Matematik felsefesi
- Biçimsel metafizik
- Dil felsefesi
- Biçimsel etik
- Yapay zekâ felsefesi

Değerlendirme çift kör hakemlikle yapılıyor. Derginin genel yayın yönetmenliğini LMU Münih'ten Jürgen Landes ve Lennart Ackermans birlikte yürütüyor.

## Neden önemli?

Felsefede açık erişim tartışması uzun süredir sürüyor: yüksek işlem ücretleri, bütçesi sınırlı kurumlardaki araştırmacıları dezavantajlı duruma sokuyor. Ne yazardan ne okurdan ücret alan bir derginin, üstelik biçimsel yöntemlerin yoğun kullanıldığı bir alanda kurulması, bu tartışmada somut bir örnek oluşturuyor.`,
  },
  {
    title: "Duncan Pritchard'dan risk felsefesi: 'Olasılık değil, kırılganlık'",
    slug: "duncan-pritchard-tempting-fate-risk-felsefesi",
    summary:
      "Princeton University Press'ten çıkan 'Tempting Fate', riski olasılık üzerinden değil kırılganlık üzerinden açıklayan bir kuram öneriyor. Pritchard'ın örneği, Alex Honnold'un ipsiz El Capitan tırmanışı.",
    seoTitle: "Tempting Fate: Duncan Pritchard'ın risk ve şans felsefesi",
    metaDescription:
      "Duncan Pritchard'ın yeni kitabı Tempting Fate, riski kırılganlıkla açıklıyor ve şansın anlamlı bir hayattaki yerini tartışıyor. Princeton UP, 2026.",
    contentType: "KITAP",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Princeton University Press",
    sourceUrl: "https://press.princeton.edu/books/hardcover/9780691259512/tempting-fate",
    publishedAt: "2026-08-20T11:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "risk", "epistemoloji"],
    philosopherSlugs: ["duncan-pritchard"],
    sources: [
      {
        title: "Tempting Fate: A Philosophical Guide to Risk, Luck, and a Meaningful Life",
        publisher: "Princeton University Press",
        url: "https://press.princeton.edu/books/hardcover/9780691259512/tempting-fate",
        primary: true,
      },
      {
        title: "Books — Duncan Pritchard",
        publisher: "duncanpritchard.org",
        url: "https://www.duncanpritchard.org/books",
      },
    ],
    content: `Epistemoloji alanının tanınmış isimlerinden **Duncan Pritchard**'ın yeni kitabı *Tempting Fate: A Philosophical Guide to Risk, Luck, and a Meaningful Life*, Princeton University Press tarafından yayımlandı. 216 sayfalık kitap ABD'de 25 Ağustos 2026'da, Birleşik Krallık'ta 20 Ekim 2026'da raflarda.

## Tez: risk bir olasılık meselesi değil

Pritchard'ın önerdiği kuram, riski **olasılıkla değil kırılganlıkla** açıklıyor. Bir eylemin riskli olması, kötü sonucun ne kadar olası olduğuyla değil, iyi sonucun ne kadar kolay bozulabileceğiyle ilgilidir.

Bu ayrım pratikte fark yaratıyor: kırılganlık çerçevesi, kaçınılmaz biçimde yüksek riskli bir etkinlikte bile beceri ve hazırlığın neden belirleyici olduğunu açıklayabiliyor.

## Örnek: El Capitan

Kitabın merkezî örneği, dağcı Alex Honnold'un ipsiz (free solo) El Capitan tırmanışı. Pritchard bunu "hayranlık uyandıran risk alma"nın örnek vakası olarak ele alıyor: yıllara yayılan hazırlık, tekrar ve ustalık, riski ortadan kaldırmıyor ama onu anlamlı kılıyor.

## Şans ve anlam

Kitabın ikinci hattı şans kavramı. Pritchard'a göre risk almak, şansına güvenmeyi de içerir; risk ve şans, otantik ve anlamlı bir hayatın kurucu unsurlarıdır. Yazar bu çerçevenin hukuk, sanat ve spor gibi alanlardaki karşılıklarını da tartışıyor.

## Karşı okuma

Riski olasılıktan koparan her yaklaşımın karşılaşacağı itiraz açık: karar kuramı ve risk yönetimi pratiğinde olasılık hesabı vazgeçilmez bir araç. Kırılganlık çerçevesinin bu araçların yerini mi aldığı yoksa onları tamamlayan farklı bir soruya mı yanıt verdiği, kitabın tartışılacak yanlarından biri olacak.`,
  },
  {
    title: "FLSF dergisinden yapay zekâ ve felsefe temalı makale yarışması",
    slug: "flsf-yapay-zeka-felsefe-makale-yarismasi",
    summary:
      "Felsefe ve Sosyal Bilimler Dergisi (FLSF), ağustos ayı boyunca yalnızca 'Yapay Zekânın Gölgesinde ve Işığında Felsefe' başlıklı yarışma için gönderilen makaleleri kabul ediyor. Son gün 31 Ağustos.",
    seoTitle: "FLSF yapay zekâ ve felsefe makale yarışması — son gün 31 Ağustos",
    metaDescription:
      "FLSF Felsefe ve Sosyal Bilimler Dergisi'nin 'Yapay Zekânın Gölgesinde ve Işığında Felsefe' makale yarışması için başvurular 31 Ağustos 2026'da kapanıyor.",
    contentType: "HABER",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "FLSF Felsefe ve Sosyal Bilimler Dergisi",
    sourceUrl: "https://dergipark.org.tr/tr/pub/flsf",
    publishedAt: "2026-08-20T12:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["yapay-zeka", "akademi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "FLSF Felsefe ve Sosyal Bilimler Dergisi — duyurular",
        publisher: "DergiPark",
        url: "https://dergipark.org.tr/tr/pub/flsf",
        primary: true,
      },
    ],
    content: `**FLSF Felsefe ve Sosyal Bilimler Dergisi**, ağustos ayı boyunca olağan makale kabulünü askıya alarak yalnızca bir yarışma için gönderilen çalışmaları değerlendiriyor: **"Yapay Zekânın Gölgesinde ve Işığında Felsefe."**

Derginin duyurusuna göre 1-31 Ağustos 2026 tarihleri arasında yalnızca bu yarışma kapsamındaki makaleler kabul ediliyor.

## Neden dikkate değer?

Türkiye'deki akademik felsefe dergilerinin çoğu tematik dosyalarını yıl içine yayar; bir dergiye ait tüm kabul penceresinin tek bir konuya ayrılması sık rastlanan bir uygulama değil.

Başlığın kuruluşu da ilgi çekici: "gölgesinde ve ışığında" ifadesi, yapay zekâyı yalnızca tehdit ya da yalnızca fırsat olarak kuran iki kolaycı çerçeveyi de dışarıda bırakıyor.

## Felsefi arka plan

Yapay zekâ tartışması felsefede birden çok alanı aynı anda ilgilendiriyor:

- **Zihin felsefesi** — makine bilinci ve zihin-beden sorunu
- **Etik** — sorumluluk, hesap verebilirlik, algoritmik adalet
- **Epistemoloji** — makine üretimi bilginin güvenilirliği
- **Siyaset felsefesi** — otomasyonun emek ve iktidar üzerindeki etkisi

Başvuru koşulları ve biçimsel kurallar için derginin DergiPark sayfasındaki duyuru bölümüne bakılabilir.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 20 Ağustos: Schelling'in ölümü",
    slug: "felsefe-tarihinde-bugun-20-agustos-schelling",
    summary:
      "Alman idealizminin üç büyük isminden biri olan Friedrich Wilhelm Joseph Schelling, 20 Ağustos 1854'te İsviçre'nin Bad Ragaz kentinde öldü. Berlin'de Hegel'in kürsüsünü devralmıştı.",
    seoTitle: "20 Ağustos 1854: Schelling'in ölümü — Alman idealizminin üçüncü ismi",
    metaDescription:
      "Friedrich Schelling 20 Ağustos 1854'te Bad Ragaz'da öldü. Doğa felsefesi, Hegel'in kürsüsü ve Kierkegaard'ın dinlediği Berlin dersleri.",
    contentType: "TARIH",
    coverImage: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    sourceName: "Stanford Encyclopedia of Philosophy",
    sourceUrl: "https://plato.stanford.edu/entries/schelling/",
    publishedAt: "2026-08-20T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "alman-idealizmi"],
    philosopherSlugs: ["schelling"],
    sources: [
      {
        title: "Friedrich Wilhelm Joseph von Schelling",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/schelling/",
        primary: true,
      },
    ],
    content: `**20 Ağustos 1854** — Friedrich Wilhelm Joseph Schelling, İsviçre'nin Bad Ragaz kentinde öldü.

## Üç isimden biri

Schelling; J. G. Fichte ve G. W. F. Hegel'le birlikte **Alman idealizmi** geleneğinin en etkili üç düşünüründen biri sayılır. Doğa felsefesi, özdeşlik felsefesi ve geç dönemindeki "olumlu felsefe" arayışı, birbirinden hayli farklı üç evre oluşturur — bu yüzden "tek bir Schelling" yerine "Schelling'ler"den söz edilir.

## Berlin: Hegel'in kürsüsü

1841'de Berlin'e giderek Hegel'in boşalan felsefe kürsüsünü devraldı. İlk dersleri dönemin dikkat çekici isimlerini çekti: dinleyiciler arasında **Kierkegaard, Engels, Bakunin, Ranke, Burckhardt** ve **Alexander von Humboldt** vardı.

Ancak Stanford Felsefe Ansiklopedisi'nin aktardığına göre Schelling, kısa süre sonra dönemin önde gelen düşünürlerinin büyük bölümü tarafından göz ardı edilmeye başlandı.

## Neden bugün yeniden okunuyor?

Doğa felsefesi, çevre felsefesi ve yeni materyalizm tartışmalarıyla; özgürlük ve kötülük üzerine 1809 tarihli incelemesi ise varoluşçu geleneğe uzanan hattıyla gündemde kalmayı sürdürüyor.

> Schelling'in kaderi felsefe tarihinde ilginç bir örnek: hem çok erken tanınmış (yirmili yaşlarında profesör olmuştu) hem de kendi sağlığında unutulmuş bir düşünür.`,
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
    title: "Tempting Fate: A Philosophical Guide to Risk, Luck, and a Meaningful Life",
    slug: "tempting-fate",
    originalTitle: null,
    publisher: "Princeton University Press",
    translator: null,
    language: "İngilizce",
    isbn: "9780691259512",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    description:
      "Pritchard riski olasılık yerine kırılganlık üzerinden açıklıyor; Alex Honnold'un ipsiz El Capitan tırmanışı üzerinden şansın ve riskin anlamlı bir hayattaki yerini tartışıyor. 216 sayfa.",
    year: 2026,
    link: "https://press.princeton.edu/books/hardcover/9780691259512/tempting-fate",
    philosopherSlug: "duncan-pritchard",
    postSlug: "duncan-pritchard-tempting-fate-risk-felsefesi",
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

/* ------------------------------------------------------------------ */
/* Etkinlikler (Konferanslar bölümü)                                   */
/* ------------------------------------------------------------------ */
/*
 * Buraya yalnızca doğrulanmış etkinlikler girilir: kaynağı olmayan,
 * tarihi belirsiz ya da resmî olarak duyurulmamış etkinlik eklenmez (45. kural).
 * Tarihi geçmiş etkinlikler silinmez; arayüz onları "geçmiş" olarak listeler.
 */
export const events: SeedEvent[] = [
  {
    title: "Assos'ta Felsefe — 26. Sempozyum",
    slug: "assosta-felsefe-2026",
    summary:
      "Felsefe Sanat Bilim Derneği'nin 26 yıldır sürdürdüğü sempozyum, 'Felsefe, Sanat, Bilim ve Siyaset' başlığıyla toplandı. Katılım ücretsizdi.",
    description: `Aristoteles'in bir dönem ders verdiği Assos'ta düzenlenen sempozyum, Prof. Dr. Örsan K. Öymen'in öncülüğünde 26. kez toplandı.

İki gün süren programda Aydınlanma felsefesinden küresel göçe, post-doğruluk çağından Adorno ve Hegel'in sanat kuramlarına uzanan sunumlar yer aldı.

Toplantılar felsefeye ilgi duyan herkese açık ve ücretsizdi; katılım için organizasyonun resmî sitesinden kayıt isteniyordu.`,
    kind: "SEMPOZYUM",
    organizer: "Felsefe Sanat Bilim Derneği",
    speakers: "Örsan K. Öymen",
    topic: "Felsefe, Sanat, Bilim ve Siyaset",
    format: "FIZIKSEL",
    startsAt: "2026-02-06T00:00:00.000Z",
    endsAt: "2026-02-07T00:00:00.000Z",
    hasTime: false,
    city: "Çanakkale",
    country: "Türkiye",
    venue: "Nazlıhan Otel, Assos-Behramkale",
    fee: "Ücretsiz",
    sourceName: "Cumhuriyet",
    sourceUrl:
      "https://www.cumhuriyet.com.tr/kultur-sanat/26-yillik-gelenek-assos-ta-felsefe-sempozyumu-kapilarini-aciyor-2471919",
    coverImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80",
    featured: false,
    publishedAt: "2026-08-02T10:30:00.000Z",
  },
  {
    title: "Dünya Felsefe Günü 2026",
    slug: "dunya-felsefe-gunu-2026",
    summary:
      "UNESCO'nun her yıl kasım ayının üçüncü perşembesi kutladığı Dünya Felsefe Günü, 2026'da 19 Kasım'a denk geliyor. Dünya genelinde söyleşi, panel, atölye ve tartışma etkinlikleri düzenleniyor.",
    description: `UNESCO, 2002'den bu yana her yıl kasım ayının üçüncü perşembesini **Dünya Felsefe Günü** olarak anıyor. 2026'da bu tarih **19 Kasım Perşembe**.

Gün kapsamında UNESCO ortakları ve üye devletler; felsefi diyaloglar, tartışmalar, konferanslar, atölyeler, kültürel etkinlikler ve sunumlar düzenlemeye çağrılıyor.

Türkiye'de üniversitelerin felsefe bölümleri, felsefe dernekleri ve kültür merkezleri genellikle bu tarihe kendi programlarını yerleştirir. Etkinlik duyurunuzu iletişim sayfasından gönderirseniz takvime ekleyebiliriz.`,
    kind: "PANEL",
    organizer: "UNESCO",
    topic: "Felsefi diyalog ve kamusal tartışma",
    format: "HIBRIT",
    startsAt: "2026-11-19T00:00:00.000Z",
    hasTime: false,
    country: "Dünya geneli",
    fee: "Etkinliğe göre değişir",
    website: "https://www.unesco.org/en/days/philosophy",
    sourceName: "UNESCO",
    sourceUrl: "https://www.unesco.org/en/days/philosophy",
    coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
    featured: true,
    publishedAt: "2026-08-20T08:00:00.000Z",
  },
  {
    title: "FLSF Makale Yarışması: Yapay Zekânın Gölgesinde ve Işığında Felsefe",
    slug: "flsf-makale-yarismasi-2026",
    summary:
      "FLSF Felsefe ve Sosyal Bilimler Dergisi, ağustos ayı boyunca yalnızca bu yarışma için gönderilen makaleleri kabul ediyor. Son başvuru: 31 Ağustos 2026.",
    description: `FLSF Felsefe ve Sosyal Bilimler Dergisi, 1-31 Ağustos 2026 tarihleri arasında olağan makale kabulünü askıya alarak yalnızca **"Yapay Zekânın Gölgesinde ve Işığında Felsefe"** başlıklı yarışma kapsamındaki çalışmaları değerlendiriyor.

Başvuru koşulları, biçimsel kurallar ve değerlendirme süreci için derginin DergiPark sayfasındaki duyuru bölümüne bakılabilir.`,
    kind: "CFP",
    organizer: "FLSF Felsefe ve Sosyal Bilimler Dergisi",
    topic: "Yapay zekâ ve felsefe",
    format: "ONLINE",
    startsAt: "2026-08-01T00:00:00.000Z",
    endsAt: "2026-08-31T00:00:00.000Z",
    hasTime: false,
    country: "Türkiye",
    cfpDeadline: "2026-08-31T00:00:00.000Z",
    fee: "Ücretsiz",
    website: "https://dergipark.org.tr/tr/pub/flsf",
    sourceName: "DergiPark — FLSF",
    sourceUrl: "https://dergipark.org.tr/tr/pub/flsf",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    featured: false,
    publishedAt: "2026-08-20T12:00:00.000Z",
  },
];
