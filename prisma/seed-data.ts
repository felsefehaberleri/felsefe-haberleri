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
  { name: "Eleştirel Teori", slug: "elestirel-teori" },
  { name: "Psikanaliz", slug: "psikanaliz" },
  { name: "Toplumsal Cinsiyet", slug: "toplumsal-cinsiyet" },
  { name: "Postkolonyalizm", slug: "postkolonyalizm" },
  { name: "Teknoloji Felsefesi", slug: "teknoloji-felsefesi" },
  { name: "Demokrasi", slug: "demokrasi" },
  { name: "Marksizm", slug: "marksizm" },
  { name: "Konferans", slug: "konferans" },
  { name: "Söyleşi", slug: "soylesi" },
  { name: "Zihin Felsefesi", slug: "zihin-felsefesi" },
  { name: "Din Felsefesi", slug: "din-felsefesi" },
  { name: "Mantık", slug: "mantik" },
  { name: "Bilim Felsefesi", slug: "bilim-felsefesi" },
  { name: "Rönesans", slug: "ronesans" },
  { name: "İslam Felsefesi", slug: "islam-felsefesi" },
  { name: "Postmodernizm", slug: "postmodernizm" },
  { name: "Estetik", slug: "estetik" },
  { name: "Hukuk Felsefesi", slug: "hukuk-felsefesi" },
  { name: "Aydınlanma", slug: "aydinlanma" },
  { name: "Medya", slug: "medya" },
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
  {
    name: "Slavoj Žižek",
    slug: "slavoj-zizek",
    headline: "Kültür kuramcısı ve Lacancı filozof — Ljubljana Üniversitesi",
    bio: "İdeoloji eleştirisini Lacancı psikanaliz, Hegel ve popüler kültür üzerinden kuran Slovenyalı filozof. Yüzden fazla kitabı otuzdan çok dile çevrildi.",
    avatar: null,
    country: "Slovenya",
    birthYear: 1949,
    affiliation: "Ljubljana Üniversitesi · Birkbeck, Londra Üniversitesi",
    website: null,
    featured: true,
    listed: true,
    birthDate: "1949",
    alive: true,
    period: "Çağdaş",
    school: "Lacancı psikanaliz, Hegelcilik, Marksizm",
    areas: "İdeoloji kuramı, Psikanaliz, Siyaset felsefesi, Kültür kuramı",
    majorWorks: "The Sublime Object of Ideology (1989)\nThe Ticklish Subject (1999)\nLess Than Nothing (2012)\nLiberal Fascism (2026)",
    keyConcepts: "İdeoloji, Gerçek (le Réel), Paralaks, Şiddetin biçimleri",
  },
  {
    name: "Noam Chomsky",
    slug: "noam-chomsky",
    headline: "Dilbilimci ve siyasal düşünür — MIT ve Arizona Üniversitesi",
    bio: "Üretici dilbilgisi kuramıyla dilbilimi dönüştüren, aynı zamanda medya ve dış politika eleştirisiyle tanınan düşünür. 2024'te geçirdiği beyin kanamasının ardından Brezilya'da tedavi görüyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1928,
    affiliation: "MIT (emeritus) · Arizona Üniversitesi",
    website: null,
    featured: true,
    listed: true,
    birthDate: "7 Aralık 1928",
    alive: true,
    period: "Çağdaş",
    school: "Üretici dilbilgisi, Anarko-sendikalizm",
    areas: "Dil felsefesi, Bilişsel bilim, Siyaset, Medya eleştirisi",
    majorWorks: "Syntactic Structures (1957)\nAspects of the Theory of Syntax (1965)\nManufacturing Consent (Edward S. Herman ile, 1988)\nHegemony or Survival (2003)",
    keyConcepts: "Evrensel dilbilgisi, Dönüşümsel dilbilgisi, Rıza imalatı, Kartezyen dilbilim",
  },
  {
    name: "Jürgen Habermas",
    slug: "jurgen-habermas",
    headline: "Frankfurt Okulu'nun ikinci kuşağı — Goethe Üniversitesi (1929–2026)",
    bio: "Kamusal alan ve iletişimsel eylem kuramlarıyla savaş sonrası Almanya'nın entelektüel yönünü belirleyen filozof. 14 Mart 2026'da Starnberg'de 96 yaşında hayatını kaybetti.",
    avatar: null,
    country: "Almanya",
    birthYear: 1929,
    affiliation: "Goethe Üniversitesi Frankfurt (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "18 Haziran 1929",
    deathDate: "14 Mart 2026",
    alive: false,
    period: "20. yüzyıl — 21. yüzyıl",
    school: "Frankfurt Okulu, Eleştirel teori, Pragmatizm",
    areas: "Toplum felsefesi, Siyaset felsefesi, Dil felsefesi, Hukuk felsefesi",
    majorWorks: "Kamusallığın Yapısal Dönüşümü (1962)\nİletişimsel Eylem Kuramı, 2 cilt (1981)\nOlgular ve Normlar Arasında (1992)\nÖteki Olmak, Ötekiyle Yaşamak (1996)",
    keyConcepts: "Kamusal alan, İletişimsel eylem, İdeal konuşma durumu, Müzakereci demokrasi, Anayasal yurtseverlik",
    influencedBy: "Kant, Hegel, Marx, Adorno, Horkheimer, Mead, Austin",
    sources: "Jürgen Habermas — Wikipedia — https://en.wikipedia.org/wiki/J%C3%BCrgen_Habermas",
  },
  {
    name: "Alain Badiou",
    slug: "alain-badiou",
    headline: "Ontoloji ve siyaset filozofu — École Normale Supérieure (emeritus)",
    bio: "Varlığı küme kuramı diliyle düşünen, 'olay' ve 'hakikat yordamı' kavramlarıyla siyaset felsefesini yeniden kuran Fransız filozof.",
    avatar: null,
    country: "Fransa",
    birthYear: 1937,
    affiliation: "École Normale Supérieure (emeritus) · European Graduate School",
    website: null,
    featured: false,
    listed: true,
    birthDate: "17 Ocak 1937",
    alive: true,
    period: "Çağdaş",
    school: "Postyapısalcılık sonrası, Platonculuk",
    areas: "Ontoloji, Siyaset felsefesi, Matematik felsefesi, Estetik",
    majorWorks: "Varlık ve Olay (1988)\nEtik: Kötülük Kavrayışı Üzerine Bir Deneme (1993)\nMantıklar Dünyası (2006)\nSonsuz Düşünce (1998)",
    keyConcepts: "Olay, Hakikat yordamı, Çokluk, Sadakat, Komünizm hipotezi",
    sources: "Alain Badiou — PhilPeople — https://philpeople.org/profiles/alain-badiou",
  },
  {
    name: "Cornel West",
    slug: "cornel-west",
    headline: "Pragmatist filozof ve kamusal entelektüel — Union Theological Seminary",
    bio: "Amerikan pragmatizmini ırk, din ve demokrasi tartışmalarıyla birleştiren düşünür. Union Theological Seminary'de Dietrich Bonhoeffer Felsefe ve Hıristiyan Pratiği Kürsüsü'nü yürütüyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1953,
    affiliation: "Union Theological Seminary · Princeton Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "2 Haziran 1953",
    alive: true,
    period: "Çağdaş",
    school: "Yeni-pragmatizm, Kurtuluş teolojisi",
    areas: "Siyaset felsefesi, Din felsefesi, Irk kuramı, Amerikan pragmatizmi",
    majorWorks: "Prophesy Deliverance! (1982)\nThe American Evasion of Philosophy (1989)\nRace Matters (1993)\nDemocracy Matters (2004)",
    keyConcepts: "Kehanetçi pragmatizm, Trajik umut, Irk meselesi, Demokratik kişilik",
    sources: "Cornel West — Britannica — https://www.britannica.com/biography/Cornel-West",
  },
  {
    name: "Charles Taylor",
    slug: "charles-taylor",
    headline: "Modernlik ve kimlik filozofu — McGill Üniversitesi (emeritus)",
    bio: "Benlik, sekülerlik ve çokkültürlülük üzerine çalışmalarıyla tanınan Kanadalı filozof. Templeton (2007), Kyoto (2008), Kluge (2015) ve Berggruen (2016) ödüllerinin sahibi.",
    avatar: null,
    country: "Kanada",
    birthYear: 1931,
    affiliation: "McGill Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "5 Kasım 1931",
    alive: true,
    period: "Çağdaş",
    school: "Komüniteryanizm, Hermeneutik",
    areas: "Siyaset felsefesi, Toplum bilimleri felsefesi, Din felsefesi, Felsefe tarihi",
    majorWorks: "Hegel (1975)\nBenliğin Kaynakları (1989)\nModernliğin Sıkıntıları (1991)\nSeküler Çağ (2007)",
    keyConcepts: "Güçlü değerlendirme, Tanınma siyaseti, Sosyal imgelem, Kapalı benlik",
    sources: "Charles Taylor — Britannica — https://www.britannica.com/biography/Charles-Taylor",
  },
  {
    name: "Kwame Anthony Appiah",
    slug: "kwame-anthony-appiah",
    headline: "Etik ve kimlik filozofu — New York Üniversitesi",
    bio: "Kozmopolitanizm, kimlik ve ahlaki yükümlülük üzerine yazan Gana kökenli filozof. The New York Times Magazine'de 'The Ethicist' köşesini yazıyor.",
    avatar: null,
    country: "Gana / ABD",
    birthYear: 1954,
    affiliation: "New York Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "8 Mayıs 1954",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe",
    areas: "Etik, Siyaset felsefesi, Kimlik kuramı, Afrika felsefesi",
    majorWorks: "In My Father's House (1992)\nThe Ethics of Identity (2005)\nCosmopolitanism (2006)\nThe Lies That Bind (2018)",
    keyConcepts: "Kozmopolitanizm, Kimlik, Onur kodları, Kısmi köksüzlük",
  },
  {
    name: "Thomas Nagel",
    slug: "thomas-nagel",
    headline: "Zihin ve etik filozofu — New York Üniversitesi (emeritus)",
    bio: "\"Yarasa olmak nasıl bir şeydir?\" makalesiyle bilinç tartışmasının yönünü değiştiren filozof. Öznel bakış açısının nesnel betimlemeye indirgenemeyeceğini savunuyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1937,
    affiliation: "New York Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "4 Temmuz 1937",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe",
    areas: "Zihin felsefesi, Etik, Siyaset felsefesi",
    majorWorks: "The Possibility of Altruism (1970)\n\"What Is It Like to Be a Bat?\" (1974)\nHiçbir Yerden Bakış (1986)\nMind and Cosmos (2012)",
    keyConcepts: "Öznel deneyim, Hiçbir yerden bakış, İndirgenemezlik, Nesnellik",
  },
  {
    name: "Giorgio Agamben",
    slug: "giorgio-agamben",
    headline: "Biyopolitika ve hukuk felsefecisi — İtalya",
    bio: "Egemenlik, istisna hâli ve 'çıplak hayat' kavramlarıyla siyaset felsefesini yeniden çerçeveleyen İtalyan filozof.",
    avatar: null,
    country: "İtalya",
    birthYear: 1942,
    affiliation: "IUAV Venedik Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "22 Nisan 1942",
    alive: true,
    period: "Çağdaş",
    school: "Kıta felsefesi",
    areas: "Siyaset felsefesi, Hukuk felsefesi, Estetik, Dil felsefesi",
    majorWorks: "Kutsal İnsan: Egemen İktidar ve Çıplak Hayat (1995)\nİstisna Hâli (2003)\nTanık ve Arşiv (1998)\nNesir Fikri (1985)",
    keyConcepts: "Çıplak hayat (homo sacer), İstisna hâli, Egemenlik, Kullanım, Tanıklık",
  },
  {
    name: "Jean-Luc Marion",
    slug: "jean-luc-marion",
    headline: "Fenomenolog ve din felsefecisi — Sorbonne (emeritus)",
    bio: "Fenomenolojiyi 'verilmişlik' kavramı üzerinden yeniden kuran, Descartes yorumlarıyla da tanınan Fransız filozof. Académie française üyesi.",
    avatar: null,
    country: "Fransa",
    birthYear: 1946,
    affiliation: "Paris-Sorbonne Üniversitesi (emeritus) · Chicago Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "3 Temmuz 1946",
    alive: true,
    period: "Çağdaş",
    school: "Fenomenoloji",
    areas: "Fenomenoloji, Metafizik, Din felsefesi, Descartes çalışmaları",
    majorWorks: "Varlıksız Tanrı (1982)\nİndirgeme ve Verilmişlik (1989)\nVerili Olan (1997)\nErotik Fenomen (2003)",
    keyConcepts: "Doymuş fenomen, Verilmişlik, Putlaştırma ve ikon, Onto-teoloji eleştirisi",
  },
  {
    name: "Axel Honneth",
    slug: "axel-honneth",
    headline: "Eleştirel teorinin üçüncü kuşağı — Columbia Üniversitesi",
    bio: "Toplumsal çatışmayı 'tanınma mücadelesi' olarak okuyan Alman filozof. Frankfurt Toplumsal Araştırmalar Enstitüsü'nü uzun yıllar yönetti.",
    avatar: null,
    country: "Almanya",
    birthYear: 1949,
    affiliation: "Columbia Üniversitesi · Goethe Üniversitesi Frankfurt",
    website: null,
    featured: false,
    listed: true,
    birthDate: "18 Temmuz 1949",
    alive: true,
    period: "Çağdaş",
    school: "Frankfurt Okulu, Eleştirel teori",
    areas: "Toplum felsefesi, Siyaset felsefesi, Ahlak felsefesi",
    majorWorks: "Tanınma Uğruna Mücadele (1992)\nŞeyleşme (2005)\nÖzgürlük Hakkı (2011)\nToplumsallaştırma Fikri (2015)",
    keyConcepts: "Tanınma, Aşağılanma, Şeyleşme, Toplumsal patoloji",
  },
  {
    name: "Simon Critchley",
    slug: "simon-critchley",
    headline: "Kıta felsefesi ve etik — The New School",
    bio: "Etik, mizah, trajedi ve dinsizlik üzerine yazan İngiliz filozof. The New York Times'ın felsefe köşesi 'The Stone'un kurucu editörlerinden.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1960,
    affiliation: "The New School for Social Research, New York",
    website: null,
    featured: false,
    listed: true,
    birthDate: "27 Şubat 1960",
    alive: true,
    period: "Çağdaş",
    school: "Kıta felsefesi",
    areas: "Etik, Kıta felsefesi, Din felsefesi, Estetik",
    majorWorks: "The Ethics of Deconstruction (1992)\nVery Little… Almost Nothing (1997)\nInfinitely Demanding (2007)\nTragedy, the Greeks, and Us (2019)",
    keyConcepts: "Sonsuz talep, Etik deneyim, İnançsızların inancı, Mizah",
  },
  {
    name: "Graham Harman",
    slug: "graham-harman",
    headline: "Nesne yönelimli ontolojinin kurucusu — SCI-Arc, Los Angeles",
    bio: "Nesneleri insan erişiminden bağımsız birer gerçeklik olarak ele alan nesne yönelimli ontolojinin (OOO) kurucusu.",
    avatar: null,
    country: "ABD",
    birthYear: 1968,
    affiliation: "Southern California Institute of Architecture (SCI-Arc)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "9 Mayıs 1968",
    alive: true,
    period: "Çağdaş",
    school: "Spekülatif realizm, Nesne yönelimli ontoloji",
    areas: "Metafizik, Ontoloji, Estetik, Mimarlık felsefesi",
    majorWorks: "Tool-Being (2002)\nGuerrilla Metaphysics (2005)\nThe Quadruple Object (2011)\nObject-Oriented Ontology: A New Theory of Everything (2018)",
    keyConcepts: "Nesne yönelimli ontoloji, Geri çekilme, Dörtlü nesne, Vekil nedensellik",
  },
  {
    name: "Rebecca Goldstein",
    slug: "rebecca-goldstein",
    headline: "Filozof ve romancı — ABD",
    bio: "Felsefeyi kurmacayla birleştiren, Spinoza ve Gödel üzerine kitaplarıyla tanınan Amerikalı yazar ve filozof. 2015'te Ulusal Beşerî Bilimler Madalyası'nı aldı.",
    avatar: null,
    country: "ABD",
    birthYear: 1950,
    affiliation: "New College of the Humanities · Harvard Üniversitesi (misafir)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "23 Şubat 1950",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe",
    areas: "Bilim felsefesi, Zihin felsefesi, Matematik felsefesi, Felsefe tarihi",
    majorWorks: "The Mind-Body Problem (1983)\nIncompleteness: The Proof and Paradox of Kurt Gödel (2005)\nBetraying Spinoza (2006)\nPlato at the Googleplex (2014)",
    keyConcepts: "Matter of mattering, Felsefi kurmaca, Gödel eksiklik teoremleri",
  },
  {
    name: "Patricia Churchland",
    slug: "patricia-churchland",
    headline: "Nörofelsefenin kurucusu — Kaliforniya Üniversitesi San Diego (emerita)",
    bio: "Zihin felsefesini sinirbilimle birleştiren 'nörofelsefe' alanının kurucusu. Ahlakın beyindeki toplumsal bağlanma mekanizmalarından türediğini savunuyor.",
    avatar: null,
    country: "Kanada / ABD",
    birthYear: 1943,
    affiliation: "Kaliforniya Üniversitesi San Diego (emerita)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "16 Temmuz 1943",
    alive: true,
    period: "Çağdaş",
    school: "Eleyici materyalizm, Nörofelsefe",
    areas: "Zihin felsefesi, Sinirbilim felsefesi, Ahlak felsefesi",
    majorWorks: "Neurophilosophy (1986)\nBrain-Wise (2002)\nTouching a Nerve (2013)\nConscience: The Origins of Moral Intuition (2019)",
    keyConcepts: "Nörofelsefe, Eleyici materyalizm, Vicdanın nörobiyolojisi",
  },
  {
    name: "David Chalmers",
    slug: "david-chalmers",
    headline: "Bilinç filozofu — New York Üniversitesi",
    bio: "Bilincin 'zor problemi' formülasyonuyla tanınan Avustralyalı filozof. Son yıllarda sanal gerçeklik ve büyük dil modellerinin zihinsel durumları üzerine yazıyor.",
    avatar: null,
    country: "Avustralya",
    birthYear: 1966,
    affiliation: "New York Üniversitesi · Zihin, Beyin ve Bilinç Merkezi",
    website: null,
    featured: true,
    listed: true,
    birthDate: "20 Nisan 1966",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe, Özellik ikiciliği",
    areas: "Zihin felsefesi, Bilinç çalışmaları, Dil felsefesi, Yapay zekâ felsefesi",
    majorWorks: "The Conscious Mind (1996)\nConstructing the World (2012)\nReality+: Virtual Worlds and the Problems of Philosophy (2022)",
    keyConcepts: "Bilincin zor problemi, Felsefi zombi, Genişlemiş zihin (Clark ile), Sanal gerçekçilik",
  },
  {
    name: "Andy Clark",
    slug: "andy-clark",
    headline: "Biliş ve zihin filozofu — Sussex Üniversitesi",
    bio: "Zihnin beynin sınırlarını aştığını savunan 'genişlemiş zihin' tezinin ortak yazarı. Son çalışmaları öngörücü işleme kuramı üzerine.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1957,
    affiliation: "Sussex Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1957",
    alive: true,
    period: "Çağdaş",
    school: "Bedenlenmiş biliş",
    areas: "Zihin felsefesi, Bilişsel bilim, Yapay zekâ felsefesi",
    majorWorks: "Being There (1997)\n\"The Extended Mind\" (Chalmers ile, 1998)\nSurfing Uncertainty (2016)\nThe Experience Machine (2023)",
    keyConcepts: "Genişlemiş zihin, Öngörücü işleme, Bedenlenmiş biliş, Beklenti beyni",
  },
  {
    name: "Peter Godfrey-Smith",
    slug: "peter-godfrey-smith",
    headline: "Bilim felsefecisi — Sydney Üniversitesi",
    bio: "Zihnin evrimini ahtapotlar ve diğer omurgasızlar üzerinden inceleyen Avustralyalı bilim felsefecisi.",
    avatar: null,
    country: "Avustralya",
    birthYear: 1965,
    affiliation: "Sydney Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1965",
    alive: true,
    period: "Çağdaş",
    school: "Doğalcılık",
    areas: "Bilim felsefesi, Biyoloji felsefesi, Zihin felsefesi",
    majorWorks: "Theory and Reality (2003)\nDarwinian Populations and Natural Selection (2009)\nDiğer Zihinler: Ahtapot, Deniz ve Bilincin Derin Kökenleri (2016)\nMetazoa (2020)",
    keyConcepts: "Zihnin evrimi, Darwinci popülasyonlar, Öznel deneyimin kökeni",
  },
  {
    name: "Timothy Williamson",
    slug: "timothy-williamson",
    headline: "Mantıkçı ve epistemolog — Oxford Üniversitesi",
    bio: "Bilgiyi başka zihinsel durumlara indirgenemeyen temel bir kavram olarak ele alan 'önce-bilgi' epistemolojisinin kurucusu. 2000-2023 arasında Oxford'da Wykeham Mantık Kürsüsü'nü yürüttü.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1955,
    affiliation: "Oxford Üniversitesi · New College",
    website: "https://www.philosophy.ox.ac.uk/people/timothy-williamson",
    featured: false,
    listed: true,
    birthDate: "6 Ağustos 1955",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe",
    areas: "Epistemoloji, Metafizik, Mantık felsefesi, Felsefe yöntemi",
    majorWorks: "Vagueness (1994)\nKnowledge and Its Limits (2000)\nThe Philosophy of Philosophy (2007)\nDoing Philosophy (2018)",
    keyConcepts: "Önce-bilgi epistemolojisi, Belirsizlik ve epistemik sınır, Zorunlucu metafizik",
    sources: "Oxford Üniversitesi profil sayfası — https://www.philosophy.ox.ac.uk/people/timothy-williamson",
  },
  {
    name: "Robert Brandom",
    slug: "robert-brandom",
    headline: "Dil felsefecisi — Pittsburgh Üniversitesi",
    bio: "Anlamı, konuşmacıların birbirine yüklediği taahhüt ve yetkilerden türeten 'çıkarımsal anlambilim'in kurucusu.",
    avatar: null,
    country: "ABD",
    birthYear: 1950,
    affiliation: "Pittsburgh Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "13 Mart 1950",
    alive: true,
    period: "Çağdaş",
    school: "Pittsburgh Okulu, Yeni-pragmatizm",
    areas: "Dil felsefesi, Mantık felsefesi, Alman idealizmi",
    majorWorks: "Making It Explicit (1994)\nArticulating Reasons (2000)\nBetween Saying and Doing (2008)\nA Spirit of Trust (2019)",
    keyConcepts: "Çıkarımsal anlambilim, Gerekçe verme oyunu, Normatif pragmatizm",
  },
  {
    name: "Simon Blackburn",
    slug: "simon-blackburn",
    headline: "Metaetikçi — Cambridge Üniversitesi (emeritus)",
    bio: "Ahlaki yargıların dünyayı betimlemekten çok tutum ifade ettiğini savunan 'yarı-gerçekçilik'in kurucusu. Felsefeyi geniş okura açan kitaplarıyla da tanınıyor.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1944,
    affiliation: "Cambridge Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "12 Temmuz 1944",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe, İfadecilik",
    areas: "Metaetik, Dil felsefesi, Epistemoloji",
    majorWorks: "Spreading the Word (1984)\nRuling Passions (1998)\nThink (1999)\nBeing Good (2001)",
    keyConcepts: "Yarı-gerçekçilik, İfadecilik, Ahlaki tutum",
  },
  {
    name: "Christine Korsgaard",
    slug: "christine-korsgaard",
    headline: "Kantçı ahlak felsefecisi — Harvard Üniversitesi (emerita)",
    bio: "Ahlaki yükümlülüğün kaynağını failin kendi kimliğiyle kurduğu ilişkide arayan Kant yorumcusu. Hayvanlara karşı ödevler üzerine de yazıyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1952,
    affiliation: "Harvard Üniversitesi (emerita)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "9 Nisan 1952",
    alive: true,
    period: "Çağdaş",
    school: "Kantçılık, Konstrüktivizm",
    areas: "Ahlak felsefesi, Kant çalışmaları, Hayvan etiği, Eylem kuramı",
    majorWorks: "The Sources of Normativity (1996)\nSelf-Constitution (2009)\nFellow Creatures: Our Obligations to the Other Animals (2018)",
    keyConcepts: "Pratik kimlik, Normatifliğin kaynağı, Kendini kurma, Ahlaki konstrüktivizm",
  },
  {
    name: "Will Kymlicka",
    slug: "will-kymlicka",
    headline: "Çokkültürlülük ve hayvan hakları kuramcısı — Queen's Üniversitesi",
    bio: "Azınlık haklarını liberal kuram içinde temellendiren Kanadalı siyaset felsefecisi. Sue Donaldson ile birlikte hayvanlar için yurttaşlık kuramı geliştirdi.",
    avatar: null,
    country: "Kanada",
    birthYear: 1962,
    affiliation: "Queen's Üniversitesi, Kingston",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1962",
    alive: true,
    period: "Çağdaş",
    school: "Liberalizm",
    areas: "Siyaset felsefesi, Çokkültürlülük, Hayvan hakları, Yurttaşlık kuramı",
    majorWorks: "Liberalism, Community, and Culture (1989)\nÇokkültürlü Yurttaşlık (1995)\nZoopolis (Sue Donaldson ile, 2011)",
    keyConcepts: "Çokkültürlü yurttaşlık, Azınlık hakları, Zoopolis, Hayvan yurttaşlığı",
  },
  {
    name: "Thomas Pogge",
    slug: "thomas-pogge",
    headline: "Küresel adalet kuramcısı — Yale Üniversitesi",
    bio: "Küresel yoksulluğu yardım sorunu değil, zengin devletlerin kurduğu düzenin yol açtığı bir haksızlık olarak ele alan filozof.",
    avatar: null,
    country: "Almanya / ABD",
    birthYear: 1953,
    affiliation: "Yale Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1953",
    alive: true,
    period: "Çağdaş",
    school: "Rawlsçu liberalizm (eleştirel)",
    areas: "Siyaset felsefesi, Küresel adalet, Etik, İnsan hakları",
    majorWorks: "Realizing Rawls (1989)\nWorld Poverty and Human Rights (2002)\nPolitics as Usual (2010)",
    keyConcepts: "Kurumsal haksızlık, Negatif ödevler, Küresel kaynak temettüsü, Sağlık etki fonu",
  },
  {
    name: "Philippe Van Parijs",
    slug: "philippe-van-parijs",
    headline: "Temel gelir kuramcısı — Louvain Katolik Üniversitesi (emeritus)",
    bio: "Koşulsuz temel gelirin en bilinen felsefi savunucusu. Özgürlüğü yalnızca hak olarak değil, gerçek imkân olarak tanımlıyor.",
    avatar: null,
    country: "Belçika",
    birthYear: 1951,
    affiliation: "Louvain Katolik Üniversitesi (UCLouvain, emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "23 Mayıs 1951",
    alive: true,
    period: "Çağdaş",
    school: "Analitik Marksizm, Liberal eşitlikçilik",
    areas: "Siyaset felsefesi, İktisat felsefesi, Dil adaleti",
    majorWorks: "Real Freedom for All (1995)\nLinguistic Justice for Europe and for the World (2011)\nBasic Income (Yannick Vanderborght ile, 2017)",
    keyConcepts: "Koşulsuz temel gelir, Herkes için gerçek özgürlük, Dil adaleti",
  },
  {
    name: "Elizabeth Anderson",
    slug: "elizabeth-anderson",
    headline: "Demokrasi ve eşitlik filozofu — Michigan Üniversitesi",
    bio: "Eşitliği kaynak dağıtımından çok tahakküm ilişkilerinin kaldırılması olarak tanımlayan 'ilişkisel eşitlik' yaklaşımının önde gelen ismi. İşyerindeki özel yönetim biçimlerini eleştiriyor.",
    avatar: null,
    country: "ABD",
    birthYear: 1959,
    affiliation: "Michigan Üniversitesi, Ann Arbor",
    website: null,
    featured: false,
    listed: true,
    birthDate: "5 Aralık 1959",
    alive: true,
    period: "Çağdaş",
    school: "Pragmatizm, İlişkisel eşitlikçilik",
    areas: "Siyaset felsefesi, Etik, Sosyal epistemoloji, İktisat felsefesi",
    majorWorks: "Value in Ethics and Economics (1993)\nThe Imperative of Integration (2010)\nPrivate Government (2017)\nHijacked (2023)",
    keyConcepts: "İlişkisel eşitlik, Demokratik eşitlik, Özel yönetim, Bütünleşme",
  },
  {
    name: "Miranda Fricker",
    slug: "miranda-fricker",
    headline: "Epistemik adalet kuramcısı — New York Üniversitesi",
    bio: "Bilgi alanındaki haksızlıkları kavramsallaştıran 'epistemik adaletsizlik' kavramının yaratıcısı. 2026'da Oxford'da Uehiro Konferansları'nı verdi.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1966,
    affiliation: "New York Üniversitesi",
    website: "https://www.uehiro.ox.ac.uk/people/professor-miranda-fricker",
    featured: false,
    listed: true,
    birthDate: "1966",
    alive: true,
    period: "Çağdaş",
    school: "Analitik felsefe, Feminist epistemoloji",
    areas: "Epistemoloji, Etik, Feminist felsefe, Sosyal epistemoloji",
    majorWorks: "Epistemic Injustice: Power and the Ethics of Knowing (2007)\nThe Epistemic Life of Groups (2016, derleme)",
    keyConcepts: "Epistemik adaletsizlik, Tanıklık adaletsizliği, Yorumsal adaletsizlik, Epistemik erdem",
    sources: "Uehiro Oxford Enstitüsü profil sayfası — https://www.uehiro.ox.ac.uk/people/professor-miranda-fricker",
  },
  {
    name: "Sally Haslanger",
    slug: "sally-haslanger",
    headline: "Feminist metafizikçi — MIT",
    bio: "Toplumsal cinsiyet ve ırk gibi kategorilerin toplumsal olarak kurulmuş yapılar olduğunu savunan 'iyileştirici çözümleme' yönteminin geliştiricisi.",
    avatar: null,
    country: "ABD",
    birthYear: 1955,
    affiliation: "Massachusetts Teknoloji Enstitüsü (MIT)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1955",
    alive: true,
    period: "Çağdaş",
    school: "Analitik feminizm, Sosyal ontoloji",
    areas: "Metafizik, Feminist felsefe, Sosyal ontoloji, Epistemoloji",
    majorWorks: "Resisting Reality: Social Construction and Social Critique (2012)\nCritical Theory and Practice (2017)",
    keyConcepts: "İyileştirici çözümleme, Toplumsal inşa, Yapısal açıklama, İdeoloji eleştirisi",
  },
  {
    name: "Linda Martín Alcoff",
    slug: "linda-martin-alcoff",
    headline: "Kimlik ve epistemoloji kuramcısı — CUNY Hunter College",
    bio: "Irksal ve cinsel kimliği epistemolojiyle birleştiren Panama doğumlu Amerikalı filozof. Amerikan Felsefe Derneği Doğu Şubesi başkanlığı yaptı.",
    avatar: null,
    country: "ABD",
    birthYear: 1955,
    affiliation: "Hunter College · CUNY Graduate Center",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1955",
    alive: true,
    period: "Çağdaş",
    school: "Feminist felsefe, Kıta felsefesi",
    areas: "Epistemoloji, Feminist felsefe, Irk kuramı, Kimlik siyaseti",
    majorWorks: "Real Knowing (1996)\nVisible Identities: Race, Gender, and the Self (2006)\nRape and Resistance (2018)",
    keyConcepts: "Görünür kimlikler, Konumlanmışlık, Epistemik konum, Beyaz kimliği",
  },
  {
    name: "Achille Mbembe",
    slug: "achille-mbembe",
    headline: "Postkolonyal kuramcı — Witwatersrand Üniversitesi",
    bio: "Sömürge sonrası iktidarı ve 'ölüm siyaseti' kavramını inceleyen Kamerunlu düşünür. 2024 Holberg Ödülü'nü alan ilk Afrikalı bilim insanı.",
    avatar: null,
    country: "Kamerun / Güney Afrika",
    birthYear: 1957,
    affiliation: "Witwatersrand Üniversitesi, Johannesburg",
    website: "https://holbergprize.org/laureates/holbergprize/achille-mbembe/",
    featured: false,
    listed: true,
    birthDate: "1957",
    alive: true,
    period: "Çağdaş",
    school: "Postkolonyalizm",
    areas: "Siyaset felsefesi, Postkolonyal kuram, Tarih, Afrika çalışmaları",
    majorWorks: "Postkoloni Üzerine (2000)\nNekropolitika (2003/2019)\nSiyah Aklın Eleştirisi (2013)\nOut of the Dark Night (2021)",
    keyConcepts: "Nekropolitika, Postkoloni, Siyah akıl, Dekolonyal düşünce",
    sources: "Holberg Ödülü — Achille Mbembe — https://holbergprize.org/laureates/holbergprize/achille-mbembe/",
  },
  {
    name: "Gayatri Chakravorty Spivak",
    slug: "gayatri-chakravorty-spivak",
    headline: "Postkolonyal kuramın kurucularından — Columbia Üniversitesi",
    bio: "\"Madun konuşabilir mi?\" sorusuyla postkolonyal kuramın yönünü belirleyen Hint asıllı düşünür. Derrida'nın Gramatoloji'sini İngilizceye çevirdi.",
    avatar: null,
    country: "Hindistan / ABD",
    birthYear: 1942,
    affiliation: "Columbia Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "24 Şubat 1942",
    alive: true,
    period: "Çağdaş",
    school: "Postkolonyalizm, Yapısöküm",
    areas: "Postkolonyal kuram, Feminist kuram, Karşılaştırmalı edebiyat, Yapısöküm",
    majorWorks: "\"Can the Subaltern Speak?\" (1988)\nA Critique of Postcolonial Reason (1999)\nDeath of a Discipline (2003)\nAn Aesthetic Education in the Era of Globalization (2012)",
    keyConcepts: "Madun (subaltern), Stratejik özcülük, Epistemik şiddet, Gezegensellik",
    sources: "Gayatri Chakravorty Spivak — Wikipedia — https://en.wikipedia.org/wiki/Gayatri_Chakravorty_Spivak",
  },
  {
    name: "Julia Kristeva",
    slug: "julia-kristeva",
    headline: "Dilbilimci, psikanalist ve kuramcı — Paris Cité Üniversitesi (emerita)",
    bio: "Metinlerarasılık ve iğrençlik (abjection) kavramlarıyla dil kuramını psikanalizle birleştiren Bulgar asıllı Fransız düşünür. Haziran 2026'da 85 yaşına girdi.",
    avatar: null,
    country: "Bulgaristan / Fransa",
    birthYear: 1941,
    affiliation: "Paris Cité Üniversitesi (emerita)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "24 Haziran 1941",
    alive: true,
    period: "Çağdaş",
    school: "Postyapısalcılık, Psikanaliz",
    areas: "Dil felsefesi, Psikanaliz, Feminist kuram, Edebiyat kuramı",
    majorWorks: "Semeiotike (1969)\nKorkunun Güçleri: İğrençlik Üzerine Bir Deneme (1980)\nSevginin Tarihleri (1983)\nKendine Yabancı (1988)",
    keyConcepts: "Metinlerarasılık, İğrençlik (abjection), Semiyotik ve simgesel, Yabancılık",
  },
  {
    name: "Catherine Malabou",
    slug: "catherine-malabou",
    headline: "Plastisite kuramcısı — Kingston Üniversitesi",
    bio: "Hegel'den yola çıkarak geliştirdiği 'plastisite' kavramını sinirbilim, siyaset ve feminizm tartışmalarına taşıyan Fransız filozof.",
    avatar: null,
    country: "Fransa",
    birthYear: 1959,
    affiliation: "Kingston Üniversitesi, Londra · Kaliforniya Üniversitesi Irvine",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1959",
    alive: true,
    period: "Çağdaş",
    school: "Kıta felsefesi, Yapısöküm sonrası",
    areas: "Felsefe ve sinirbilim, Hegel çalışmaları, Feminist kuram, Siyaset felsefesi",
    majorWorks: "Hegel'in Geleceği (1996)\nBeynimizle Ne Yapmalı? (2004)\nOntology of the Accident (2009)\nMorphing Intelligence (2017)",
    keyConcepts: "Plastisite, Yıkıcı plastisite, Kaza ontolojisi, Beyin ve tarih",
  },
  {
    name: "Alenka Zupančič",
    slug: "alenka-zupancic",
    headline: "Lacancı filozof — Slovenya Bilimler Akademisi",
    bio: "Lacan psikanalizini Kant etiği, komedi ve cinsellik kuramıyla birleştiren Sloven filozof. Ljubljana Okulu'nun önde gelen isimlerinden.",
    avatar: null,
    country: "Slovenya",
    birthYear: 1966,
    affiliation: "Slovenya Bilim ve Sanat Akademisi · European Graduate School",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1966",
    alive: true,
    period: "Çağdaş",
    school: "Ljubljana Okulu, Lacancı psikanaliz",
    areas: "Psikanaliz, Etik, Ontoloji, Estetik",
    majorWorks: "Ethics of the Real: Kant, Lacan (2000)\nThe Odd One In: On Comedy (2008)\nWhat Is Sex? (2017)",
    keyConcepts: "Gerçeğin etiği, Komedi ve özne, Cinsellik ve ontoloji",
  },
  {
    name: "Quentin Meillassoux",
    slug: "quentin-meillassoux",
    headline: "Spekülatif realist — Paris 1 Panthéon-Sorbonne Üniversitesi",
    bio: "Kant sonrası felsefenin 'korelasyonizm' dediği çerçeveyi eleştirerek zorunsuzluğun mutlaklığını savunan Fransız filozof.",
    avatar: null,
    country: "Fransa",
    birthYear: 1967,
    affiliation: "Paris 1 Panthéon-Sorbonne Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1967",
    alive: true,
    period: "Çağdaş",
    school: "Spekülatif realizm",
    areas: "Metafizik, Ontoloji, Matematik felsefesi",
    majorWorks: "Sonluluğun Ardından (2006)\nThe Number and the Siren (2011)",
    keyConcepts: "Korelasyonizm eleştirisi, Zorunsuzluğun zorunluluğu, Ata-fosil, Hiper-kaos",
  },
  {
    name: "Ray Brassier",
    slug: "ray-brassier",
    headline: "Nihilizm kuramcısı — Beyrut Amerikan Üniversitesi",
    bio: "Aydınlanmanın vardığı noktayı 'anlamın yok oluşu' olarak okuyan, spekülatif realizm tartışmasının kurucu adlarından İngiliz filozof.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1965,
    affiliation: "Beyrut Amerikan Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1965",
    alive: true,
    period: "Çağdaş",
    school: "Spekülatif realizm, Nihilizm",
    areas: "Metafizik, Bilim felsefesi, Kıta felsefesi",
    majorWorks: "Nihil Unbound: Enlightenment and Extinction (2007)",
    keyConcepts: "Aşkın nihilizm, Yok oluş, Anlamın tasfiyesi",
  },
  {
    name: "Nick Land",
    slug: "nick-land",
    headline: "Hızcılık akımının kurucu adı — Şanghay",
    bio: "1990'larda Warwick Üniversitesi'ndeki CCRU çevresinde teknoloji, kapitalizm ve zaman üzerine geliştirdiği düşünceyle 'hızcılık' tartışmasını başlatan İngiliz yazar.",
    avatar: null,
    country: "İngiltere",
    birthYear: 1962,
    affiliation: "Bağımsız yazar (Şanghay)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "17 Ocak 1962",
    alive: true,
    period: "Çağdaş",
    school: "Hızcılık (accelerationism)",
    areas: "Teknoloji felsefesi, Siyaset felsefesi, Kıta felsefesi",
    majorWorks: "The Thirst for Annihilation (1992)\nFanged Noumena (derleme, 2011)",
    keyConcepts: "Hızcılık, Sibernetik kültür, Zaman-sarmalı",
  },
  {
    name: "Yuk Hui",
    slug: "yuk-hui",
    headline: "Teknoloji felsefecisi — Erasmus Rotterdam Üniversitesi",
    bio: "Teknolojinin evrensel değil kültüre bağlı biçimler aldığını savunan 'kozmoteknik' kavramının geliştiricisi. 2026'da Kant ve yapay zekâyı ele alan Kant Machine kitabını yayımladı.",
    avatar: null,
    country: "Hong Kong / Hollanda",
    birthYear: 1978,
    affiliation: "Erasmus Rotterdam Üniversitesi",
    website: "https://digitalmilieu.net/about-yh/",
    featured: false,
    listed: true,
    birthDate: "1978",
    alive: true,
    period: "Çağdaş",
    school: "Teknoloji felsefesi",
    areas: "Teknoloji felsefesi, Sibernetik, Yapay zekâ felsefesi, Kozmoteknik",
    majorWorks: "Çin'de Teknoloji Sorunu (2016)\nRecursivity and Contingency (2019)\nSanat ve Kozmoteknik (2021)\nKant Machine (2026)",
    keyConcepts: "Kozmoteknik, Özyineleme ve olumsallık, Teknoçeşitlilik",
    sources: "Yuk Hui — kişisel sayfa — https://digitalmilieu.net/about-yh/",
  },
  {
    name: "Acharya Prashant",
    slug: "acharya-prashant",
    headline: "Vedanta öğretmeni ve yazar — Hindistan",
    bio: "Upanişadlar ve Advaita Vedanta metinlerini gündelik yaşam, etik ve tüketim eleştirisi bağlamında yorumlayan Hintli yazar ve konuşmacı.",
    avatar: null,
    country: "Hindistan",
    birthYear: 1978,
    affiliation: "PrashantAdvait Vakfı",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1978",
    alive: true,
    period: "Çağdaş",
    school: "Advaita Vedanta",
    areas: "Hint felsefesi, Yaşam felsefesi, Etik, Din felsefesi",
    keyConcepts: "Advaita, Upanişad yorumu, Bilinç ve arzu",
  },
  {
    name: "Yuval Noah Harari",
    slug: "yuval-noah-harari",
    headline: "Tarihçi ve kamusal düşünür — Kudüs İbrani Üniversitesi",
    bio: "Sapiens, Homo Deus ve Nexus kitaplarıyla insanlık tarihi, teknoloji ve enformasyon ağları üzerine geniş okur kitlesine ulaşan İsrailli tarihçi.",
    avatar: null,
    country: "İsrail",
    birthYear: 1976,
    affiliation: "Kudüs İbrani Üniversitesi",
    website: null,
    featured: false,
    listed: true,
    birthDate: "24 Şubat 1976",
    alive: true,
    period: "Çağdaş",
    areas: "Tarih felsefesi, Teknoloji ve toplum, Gelecek çalışmaları",
    majorWorks: "Sapiens: İnsan Türünün Kısa Bir Tarihi (2011)\nHomo Deus (2015)\n21. Yüzyıl İçin 21 Ders (2018)\nNexus (2024)",
    keyConcepts: "Kurgusal düzenler, Veri dini, Enformasyon ağları",
    sources: "Yuval Noah Harari — Wikipedia — https://en.wikipedia.org/wiki/Yuval_Noah_Harari",
  },
  {
    name: "Ken Wilber",
    slug: "ken-wilber",
    headline: "Integral kuramın kurucusu — ABD",
    bio: "Bilinç, psikoloji ve din geleneklerini tek bir çerçevede toplamayı amaçlayan 'integral kuram'ın kurucusu Amerikalı yazar.",
    avatar: null,
    country: "ABD",
    birthYear: 1949,
    affiliation: "Integral Institute",
    website: null,
    featured: false,
    listed: true,
    birthDate: "31 Ocak 1949",
    alive: true,
    period: "Çağdaş",
    school: "Integral kuram",
    areas: "Bilinç çalışmaları, Din felsefesi, Gelişim psikolojisi",
    majorWorks: "The Spectrum of Consciousness (1977)\nSex, Ecology, Spirituality (1995)\nA Theory of Everything (2000)",
    keyConcepts: "AQAL modeli, Bilinç düzeyleri, Integral yaklaşım",
  },
  {
    name: "Alasdair MacIntyre",
    slug: "alasdair-macintyre",
    headline: "Erdem etiğini yeniden kuran filozof — Notre Dame (1929–2025)",
    bio: "After Virtue ile modern ahlak dilinin parçalandığını savunan ve Aristotelesçi erdem etiğini yeniden gündeme getiren İskoç filozof. 21 Mayıs 2025'te 96 yaşında hayatını kaybetti.",
    avatar: null,
    country: "İskoçya / ABD",
    birthYear: 1929,
    affiliation: "Notre Dame Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "12 Ocak 1929",
    deathDate: "21 Mayıs 2025",
    alive: false,
    period: "20. yüzyıl — 21. yüzyıl",
    school: "Erdem etiği, Yeni-Aristotelesçilik, Thomasçılık",
    areas: "Ahlak felsefesi, Siyaset felsefesi, Felsefe tarihi",
    majorWorks: "Erdem Peşinde (1981)\nWhose Justice? Which Rationality? (1988)\nThree Rival Versions of Moral Enquiry (1990)\nDependent Rational Animals (1999)",
    keyConcepts: "Erdem, Pratik (practice), Anlatısal birlik, Gelenek, Duygusalcılık eleştirisi",
    sources: "Alasdair MacIntyre (1929-2025) — Daily Nous — https://dailynous.com/2025/05/22/alasdair-macintyre-1929-2025/",
  },
  {
    name: "Peter Sloterdijk",
    slug: "peter-sloterdijk",
    headline: "Kültür kuramcısı — Karlsruhe Sanat ve Tasarım Yüksekokulu (emeritus)",
    bio: "Küreler üçlemesi ve sinizm eleştirisiyle tanınan Alman filozof. İnsanı 'kendini terbiye eden varlık' olarak ele alan antropoloji yaklaşımıyla geniş tartışma açtı.",
    avatar: null,
    country: "Almanya",
    birthYear: 1947,
    affiliation: "Karlsruhe Sanat ve Tasarım Yüksekokulu (HfG, emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "26 Haziran 1947",
    alive: true,
    period: "Çağdaş",
    school: "Kıta felsefesi, Felsefi antropoloji",
    areas: "Kültür felsefesi, Felsefi antropoloji, Din felsefesi, Modernlik kuramı",
    majorWorks: "Sinik Aklın Eleştirisi (1983)\nKüreler üçlemesi (1998-2004)\nİnsanat Bahçesi İçin Kurallar (1999)\nSen Hayatını Değiştirmelisin (2009)",
    keyConcepts: "Küreler, Sinik akıl, Antropoteknik, Egzersiz ve terbiye",
  },
  {
    name: "Ahmet İnam",
    slug: "ahmet-inam",
    headline: "Mantık ve bilim felsefecisi — ODTÜ Felsefe Bölümü (emeritus)",
    bio: "Mantık, bilim felsefesi ve bilgi kuramı başta olmak üzere geniş bir alanda çalışan filozof, şair ve çevirmen. Nietzsche ve Feyerabend çevirileriyle Türkçedeki felsefe diline katkı yaptı; 'gönül felsefesi' adını verdiği düşünsel yolculuğunu sürdürüyor.",
    avatar: null,
    country: "Türkiye",
    birthYear: 1947,
    affiliation: "Orta Doğu Teknik Üniversitesi (emeritus)",
    website: "https://www.ahmetinam.com/",
    featured: false,
    listed: true,
    birthDate: "1947",
    alive: true,
    period: "Çağdaş",
    areas: "Mantık, Bilim felsefesi, Bilgi kuramı, Felsefe tarihi, Kültür felsefesi, Ahlak felsefesi",
    majorWorks: "Edmund Husserl'de Mantığın Yeri (doktora tezi, 1980)\nÇeviriler: Nietzsche — İyinin ve Kötünün Ötesinde\nÇeviriler: Nietzsche — Ahlakın Soykütüğü Üzerine\nÇeviriler: Paul Feyerabend — Yönteme Hayır",
    keyConcepts: "Gönül felsefesi, Felsefi metin okuma, İnsanı bilim-sanat-din-kültür içinde kavramak",
    influencedBy: "Husserl, Nietzsche, Heidegger, Kant",
    sources: "ODTÜ Felsefe Bölümü — Ahmet İnam özgeçmiş — https://phil.metu.edu.tr/tr/ahmet-inam-ozgecmis\nAhmet İnam kişisel sitesi — https://www.ahmetinam.com/",
  },
  {
    name: "Yalçın Koç",
    slug: "yalcin-koc",
    headline: "Nazariyat ve Anadolu Mayası — Boğaziçi Üniversitesi (emeritus)",
    bio: "Türkçede özgün ve sistematik bir felsefe dili kurmayı deneyen düşünür. Anadolu Mayası ile başlayan ve 'nazariyat' adını verdiği külliyatta mantık, metafizik, zihin, şuur ve tarihi kendi kavramsal çerçevesi içinde ele alıyor.",
    avatar: null,
    country: "Türkiye",
    birthYear: 1950,
    affiliation: "Boğaziçi Üniversitesi (emeritus)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "1950",
    alive: true,
    period: "Çağdaş",
    areas: "Metafizik, Mantık, Zihin felsefesi, Dil felsefesi, Türk-İslam düşüncesi",
    majorWorks: "Anadolu Mayası: Türk Kimliği Üzerine Bir İnceleme\nTheologia'nın Esasları\nNazari Mantık'ın Esasları\nZihin ve Nazariyat\nŞuur ve Nazariyat\nFenomenoloji ve Nazariyat\nTarih ve Nazariyat",
    keyConcepts: "Nazariyat, Anadolu Mayası, Maya, Gönül, Kelam (logos karşısında), Theographia",
    sources: "Anadolu Mayası — Cedit Neşriyat — http://ceditnesriyat.com.tr/index.php?product_id=69&route=product/product\nProf. Dr. Yalçın Koç yazar sayfası — https://www.kitapyurdu.com/yazar/prof-dr-yalcin-koc/54095.html",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Martha_Nussbaum_2010.jpg?width=1600",
    imageCredit: "Martha Nussbaum, 2010 · Wikimedia Commons",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Engels_portrait_(cropped).jpg?width=1600",
    imageCredit: "Friedrich Engels, 1877 · Wikimedia Commons",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-05T05:00:00.000Z",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Immanuel_Kant_(painted_portrait).jpg?width=1600",
    imageCredit: "Immanuel Kant portresi · Wikimedia Commons",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Nietzsche187a.jpg?width=1600",
    imageCredit: "Friedrich Nietzsche, 1875 dolayları · Wikimedia Commons",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_Silanion_Musei_Capitolini_MC1377.jpg?width=1600",
    imageCredit: "Platon büstü, Musei Capitolini · Wikimedia Commons",
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
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Nb_pinacoteca_stieler_friedrich_wilhelm_joseph_von_schelling.jpg?width=1600",
    imageCredit: "Schelling'in Joseph Karl Stieler tarafından yapılan portresi, 1835 · Wikimedia Commons",
    featured: false,
    sourceName: "Stanford Encyclopedia of Philosophy",
    sourceUrl: "https://plato.stanford.edu/entries/schelling/",
    publishedAt: "2026-08-20T05:00:00.000Z",
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
  {
    title: "Jürgen Habermas'ın ardından: kamusal alanın filozofu 96 yaşında öldü",
    slug: "jurgen-habermas-1929-2026",
    summary: "Savaş sonrası Almanya'nın entelektüel yönünü belirleyen filozof 14 Mart 2026'da Starnberg'de hayatını kaybetti. Frankfurt'ta düzenlenen anma töreninde Cumhurbaşkanı Steinmeier konuştu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/JuergenHabermas_crop1.jpg?width=1600",
    imageCredit: "Jürgen Habermas · Wikimedia Commons",
    featured: true,
    seoTitle: "Jürgen Habermas (1929–2026): kamusal alan ve iletişimsel eylem",
    metaDescription: "Jürgen Habermas 14 Mart 2026'da 96 yaşında öldü. Kamusal alan, iletişimsel eylem ve müzakereci demokrasi kavramlarıyla bıraktığı miras.",
    contentType: "HABER",
    sourceName: "Associated Press / PBS News",
    sourceUrl: "https://www.pbs.org/newshour/world/influential-german-philosopher-jurgen-habermas-dies-at-96",
    publishedAt: "2026-08-20T21:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["vefat", "elestirel-teori", "demokrasi", "siyaset-felsefesi"],
    philosopherSlugs: ["jurgen-habermas"],
    sources: [
      { title: "Influential German philosopher Jürgen Habermas dies at 96", publisher: "Associated Press / PBS News", date: "14 Mart 2026", url: "https://www.pbs.org/newshour/world/influential-german-philosopher-jurgen-habermas-dies-at-96", primary: true },
      { title: "Habermas, the Philosopher Who Shaped Germany's Post-War Conscience", publisher: "Reuters / U.S. News", date: "14 Mart 2026", url: "https://www.usnews.com/news/world/articles/2026-03-14/juergen-habermas-philosopher-dies-at-age-96-publisher-says" },
      { title: "Uluslararası sempozyum Habermas'ın yaşam eserini onurlandırdı", publisher: "Normative Orders, Goethe Üniversitesi", date: "19 Haziran 2026", url: "https://normativeorders.net/en/news/internationales-symposium-wuerdigt-lebenswerk-von-juergen-habermas/" },
    ],
    content: `Jürgen Habermas, 14 Mart 2026 Cumartesi günü Münih yakınlarındaki Starnberg'de 96 yaşında hayatını kaybetti. Ölümünü, uzun yıllar kitaplarını yayımlayan Suhrkamp Yayınevi duyurdu.

Habermas yalnızca bir akademisyen değildi. İletişim, akılcılık ve toplum üzerine yazdıkları onu dünyanın en etkili filozoflarından biri yaparken, Almanya'da kamusal tartışmanın da başlıca sesiydi.

## Bir kuşağın kelimeleri

18 Haziran 1929'da Düsseldorf'ta doğdu, Gummersbach'ta büyüdü. Nazi Almanyası yenildiğinde on beş yaşındaydı. Yıllar sonra o dönemi anlatırken, Nazi suçlarının ortaya çıkışını felsefeye ve toplum kuramına yönelmesinin başlangıcı olarak tarif edecekti: "Birdenbire, içinde yaşadığınız şeyin siyaseten suçlu bir sistem olduğunu görüyordunuz."

Doğuştan gelen yarık damak nedeniyle çocukluğunda tekrarlanan ameliyatlar geçirdi. Bu deneyimin dil üzerine düşüncesini beslediğini kendisi söylemişti: Konuşma dilini, "onsuz birey olarak var olamayacağımız bir ortaklık katmanı" olarak tanımlıyordu.

## İletişimsel eylem

En bilinen çalışması iki ciltlik *İletişimsel Eylem Kuramı*'dır. Habermas burada, modern toplumun aklını yalnızca araçsal hesaba indirgeyen okumalara karşı çıkar: Akıl, tek başına amaç-araç hesabı değil, insanların birbirini ikna etmeye çalıştığı konuşma ilişkisinin içinde de bulunur.

Bundan çıkan siyasal sonuç, müzakereci demokrasi anlayışıdır: Kararların meşruluğu yalnızca oy sayısından değil, o kararın önündeki gerekçelerin herkese açık biçimde tartışılabilmiş olmasından gelir.

*Kamusallığın Yapısal Dönüşümü* ise 1962'de yayımlanmıştı ve kahvehanelerden gazetelere uzanan burjuva kamusal alanının doğuşunu ve çözülüşünü izliyordu. Kavram bugün internet ve sosyal medya tartışmalarında da kullanılıyor.

## Tarihçiler Tartışması

Habermas kamusal tartışmalardan kaçınmadı. 1960'ların sonunda öğrenci hareketiyle hem temas kurdu hem de o dönemki bir konuşma üzerine "sol faşizm" uyarısı yaptı; bu ifadeyi sonradan "biraz yersiz" bulduğunu söyleyecekti. Aynı hareketin Alman toplumunda "temel bir liberalleşme" yarattığını da kabul etti.

1980'lerde, Ernst Nolte ve bazı tarihçilerin Nazi dönemini başka rejimlerin suçlarıyla karşılaştırarak yeniden değerlendirme çağrısına sert karşı çıktı. Ona göre bu karşılaştırmalar Nazi suçlarının ağırlığını hafifletiyordu. Tartışma, Almanya'da *Historikerstreit* adıyla anıldı.

Avrupa konusunda ise Alman siyasetçilerini, iş dünyasını ve medyayı "siyaseten etkili bir Avrupa'yı biçimlendirme" konusunda ilgisiz olmakla eleştirdi.

## Ardından

Almanya Başbakanı Friedrich Merz, ölümünün ardından yaptığı açıklamada "Almanya ve Avrupa, çağımızın en önemli düşünürlerinden birini kaybetti" dedi ve Habermas'ın "düşünsel gücü ile liberalliği"ni andı.

19 Haziran 2026'da Goethe Üniversitesi Frankfurt'taki Normatif Düzenler Araştırma Merkezi, Suhrkamp Yayınevi ile birlikte uluslararası bir sempozyumla Habermas'ı andı. Frankfurt'taki Paulskirche'de düzenlenen anma töreninde Federal Cumhurbaşkanı Frank-Walter Steinmeier konuştu.

Eşi Ute Habermas-Wesselhoeft geçen yıl ölmüştü. Çiftin üç çocuğu oldu: Tilmann, 2023'te ölen Rebekka ve Judith.`,
  },
  {
    title: "Alasdair MacIntyre'ın mirası: erdem etiği neden geri döndü?",
    slug: "alasdair-macintyre-mirasi-erdem-etigi",
    summary: "After Virtue'nun yazarı 2025'te 96 yaşında öldü. Modern ahlak dilinin 'anlaşılmaz kalıntılar yığını' olduğu tezi, ölümünden sonra da tartışılmayı sürdürüyor.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Alasdair MacIntyre ve erdem etiğinin dönüşü",
    metaDescription: "Alasdair MacIntyre'ın After Virtue'da ortaya koyduğu tez ve erdem etiğinin çağdaş felsefedeki yeri.",
    contentType: "ANALIZ",
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2025/05/22/alasdair-macintyre-1929-2025/",
    publishedAt: "2026-08-20T18:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["etik", "vefat", "kavram"],
    philosopherSlugs: ["alasdair-macintyre"],
    sources: [
      { title: "Alasdair MacIntyre (1929-2025)", publisher: "Daily Nous", date: "22 Mayıs 2025", url: "https://dailynous.com/2025/05/22/alasdair-macintyre-1929-2025/", primary: true },
      { title: "Alasdair MacIntyre, Professor Emeritus, 1929-2025", publisher: "Duke Üniversitesi Felsefe Bölümü", url: "https://philosophy.duke.edu/news/alasdair-macintyre-professor-emeritus-1929-2025" },
    ],
    content: `Glasgow doğumlu İskoç filozof Alasdair MacIntyre, 21 Mayıs 2025'te Indiana eyaletinin South Bend kentindeki bir bakımevinde 96 yaşında hayatını kaybetmişti. Notre Dame ve Duke üniversitelerinde felsefe profesörü emeritus olan MacIntyre, yirminci yüzyılın ikinci yarısında ahlak felsefesinin yönünü değiştiren birkaç isimden biriydi.

## "Ahlak dilimiz bir enkaz"

1981'de yayımlanan *After Virtue* (Türkçede *Erdem Peşinde*), çarpıcı bir benzetmeyle açılır. MacIntyre bir felaket sonrası dünyayı hayal eder: Bilim yıkılmış, geriye yalnızca kopuk terimler, yarım formüller ve adı kalmış kuramlar kalmıştır. İnsanlar bu parçaları kullanmayı sürdürür ama artık hangi bütünün parçası olduklarını bilmezler.

MacIntyre'a göre modern ahlak dili tam olarak böyledir. "Hak", "ödev", "iyi" gibi sözcükleri kullanmayı sürdürüyoruz; ama bu sözcükleri anlamlı kılan Aristotelesçi çerçeve — insanın bir amacı (telos) olduğu düşüncesi — çoktan terk edilmiş durumda.

## Duygusalcılık eleştirisi

Bunun sonucu, MacIntyre'ın *duygusalcılık* dediği durumdur: Ahlaki tartışmalar sonuçsuz kalır, çünkü taraflar aslında yalnızca tercihlerini dile getirmektedir. Kürtaj, savaş ya da adalet üzerine tartışmalar bitmez; çünkü ortak bir ölçüt kalmamıştır.

Çözüm olarak MacIntyre, Aristoteles'e ve ondan beslenen Thomasçı geleneğe dönmeyi önerir. 1983'te, elli beş yaşındayken Katolikliği seçmesi de bu düşünsel yolculukla bağlantılıydı.

## Üç anahtar kavram

MacIntyre'ın erdem tanımı üç katmanlıdır:

1. **Pratik (practice):** Kendi içsel iyilerine sahip, kurallı ortak etkinlikler — satranç, tıp, mimarlık, çiftçilik. Erdemler, bir pratiğin içsel iyilerine ulaşmayı sağlayan niteliklerdir.
2. **Bir yaşamın anlatısal birliği:** İnsan hayatı kopuk rollerin toplamı değil, baştan sona anlatılabilir bir bütündür. "İyi yaşam" sorusu ancak bu bütünlük içinde sorulabilir.
3. **Gelenek:** Anlatılar tek başına durmaz; tarihsel olarak süregelen ve kendi içinde tartışan geleneklere yaslanır.

## Neden hâlâ tartışılıyor?

*After Virtue* yayımlandığında ahlak felsefesinin gündemi büyük ölçüde faydacılık ile Kantçılık arasındaki karşıtlıktan ibaretti. MacIntyre üçüncü bir seçeneği — karakter ve erdem odaklı yaklaşımı — yeniden masaya koydu. Bugün erdem etiği, meslek etiğinden yapay zekâ tasarımına kadar geniş bir alanda kullanılıyor.

Eleştirmenleri, MacIntyre'ın modernlik tablosunu fazla karanlık çizdiğini ve "geleneğe dönüş" çağrısının hangi geleneğe döneceği sorusunu yanıtsız bıraktığını söylüyor. Bu itiraz, kendisinin *Whose Justice? Which Rationality?* (1988) kitabında doğrudan ele aldığı sorudur.`,
  },
  {
    title: "Žižek'ten iki kitap: 'Liberal Fascism' çıktı, 'Signs from the Future' ekimde",
    slug: "zizek-liberal-fascism-signs-from-the-future",
    summary: "Slovenyalı filozofun serbest piyasa diliyle paketlenen otoriterliği ele alan deneme derlemesi yayımlandı. İkinci kitap 29 Ekim 2026'da raflarda olacak.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Slavoj_Zizek_in_Liverpool_cropped.jpg?width=1600",
    imageCredit: "Slavoj Žižek, Liverpool · Wikimedia Commons",
    featured: true,
    seoTitle: "Slavoj Žižek'in yeni kitapları: Liberal Fascism ve Signs from the Future",
    metaDescription: "Slavoj Žižek'in 2026'da yayımlanan Liberal Fascism derlemesi ve 29 Ekim'de çıkacak Signs from the Future kitabı.",
    contentType: "HABER",
    sourceName: "LSE Review of Books · Bloomsbury",
    sourceUrl: "https://blogs.lse.ac.uk/lsereviewofbooks/2026/01/21/book-review-against-progress-zero-point-slavoj-zizek/",
    publishedAt: "2026-08-20T20:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "marksizm", "siyaset-felsefesi", "psikanaliz"],
    philosopherSlugs: ["slavoj-zizek"],
    sources: [
      { title: "Book Review: Against Progress / Zero Point — Slavoj Žižek", publisher: "LSE Review of Books", date: "21 Ocak 2026", url: "https://blogs.lse.ac.uk/lsereviewofbooks/2026/01/21/book-review-against-progress-zero-point-slavoj-zizek/", primary: true },
      { title: "Signs from the Future (Žižek's Essays)", publisher: "Bloomsbury", date: "29 Ekim 2026", url: "https://www.amazon.com/Signs-Future-%C5%BDi%C5%BEeks-Essays-Slavoj/dp/1350648442" },
    ],
    content: `Slavoj Žižek'in 2026'daki üretim temposu düşmüş değil. Yılın ilk yarısında yayımlanan *Liberal Fascism*, serbest piyasa diliyle ambalajlanmış otoriterlik biçimlerini ele alan bir deneme derlemesi.

## Başlıktaki gerilim

Kitabın adı bilinçli bir provokasyon: Žižek, "liberal" ile "faşizm" sözcüklerini yan yana getirerek, otoriter eğilimlerin her zaman liberal düzenin dışından gelmediğini savunuyor. Piyasa özgürlüğü söyleminin, siyasal özgürlüklerin daraltılmasıyla nasıl bir arada durabildiği kitabın ana izleği.

Bu, Žižek'in uzun süredir sürdürdüğü bir hattın devamı: İdeolojinin en güçlü hâli, kendini ideoloji olarak sunmayan hâlidir. Sistem, kendini "alternatifsiz" ilan ettiği anda eleştirinin dili de elinden alınmış olur.

## Ekimde ikinci kitap

Bloomsbury, filozofun *Žižek's Essays* dizisinden çıkacak *Signs from the Future* kitabını 29 Ekim 2026 için duyurdu. Dizi, Žižek'in dağınık biçimde yayımlanmış denemelerini tematik ciltlerde topluyor.

## Türkçedeki durum

Žižek, Türkçeye en çok çevrilen çağdaş filozoflardan biri. *İdeolojinin Yüce Nesnesi*, *Kırılgan Temas*, *Ahir Zamanlarda Yaşarken* ve *Hiçten Az* gibi kitapları farklı yayınevlerinden yayımlandı. Yeni iki derlemenin Türkçe çevirileri için henüz bir duyuru yapılmadı.

---

*Yeni çeviri duyurularını takip ediyoruz; yayınevlerinden gelen bilgileri Yeni Kitaplar bölümünde paylaşıyoruz.*`,
  },
  {
    title: "Chalmers'tan yeni makale: Dil modelleriyle konuşurken kiminle konuşuyoruz?",
    slug: "chalmers-dil-modelleriyle-konusurken",
    summary: "Bilincin 'zor problemi'nin kaşifi, sohbet ettiğimiz şeyin model mi yoksa modelin canlandırdığı bir 'muhatap' mı olduğunu soruyor. Yapay zekânın bilinçli olabileceği ihtimaline kapıyı kapatmıyor.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    seoTitle: "David Chalmers: dil modelleriyle konuşurken kiminle konuşuyoruz?",
    metaDescription: "David Chalmers'ın 2026 tarihli 'What We Talk to When We Talk to Language Models' makalesi ve yapay zekâ bilinci tartışması.",
    contentType: "HABER",
    sourceName: "OfficeChai · ABC News",
    sourceUrl: "https://officechai.com/ai/david-chalmers-raises-provocative-questions-about-ai-consciousness-in-new-paper/",
    publishedAt: "2026-08-20T19:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["yapay-zeka", "bilinc", "zihin-felsefesi"],
    philosopherSlugs: ["david-chalmers"],
    sources: [
      { title: "David Chalmers Raises Provocative Questions About AI Consciousness In New Paper", publisher: "OfficeChai", date: "2026", url: "https://officechai.com/ai/david-chalmers-raises-provocative-questions-about-ai-consciousness-in-new-paper/", primary: true },
      { title: "Will AI be conscious in the future? Here's what a philosopher and a neuroscientist think", publisher: "ABC News (Avustralya)", date: "30 Mayıs 2026", url: "https://www.abc.net.au/news/2026-05-30/artificial-intelligence-ai-will-it-be-conscious-in-the-future/106738770" },
      { title: "I'm Open To The Possibility Of AI Consciousness: David Chalmers", publisher: "OfficeChai", url: "https://officechai.com/ai/im-open-to-the-possibility-of-ai-consciousness-david-chalmers/" },
    ],
    content: `Bir sohbet robotuna soru sorduğunuzda tam olarak neyle konuşuyorsunuz? Modelin kendisiyle mi, yoksa modelin o an canlandırdığı bir karakterle mi?

David Chalmers, Nisan 2026'da yayımlanan *"What We Talk to When We Talk to Language Models"* başlıklı makalesinde tam bu soruyu soruyor. Chalmers'ın önerdiği ayrım basit ama sonuçları geniş: Karşımızdaki, sinir ağının bütünü değil, o ağın ürettiği ve kendisiyle özdeş olmayan bir *muhatap*tır.

## Neden önemli?

Ayrım, gündelik dilde kolayca karışan iki şeyi ayırıyor. Bir dil modeli, farklı istemlerle farklı "kişilikler" üretebilir. Bu kişiliklerden birine atfettiğimiz inanç ve niyetler, modelin kendisine ait değildir.

Chalmers bu noktada *quasi-yorumsamacılık* (quasi-interpretivism) dediği bir çerçeve öneriyor: Bir yapay zekâya "yarı-inançlar" ve "yarı-arzular" atfedebiliriz. Böylece sistemin zihinsel yaşamı üzerine konuşmak, "ruhu var mı, gerçekten hissediyor mu" tartışmasına girmeden mümkün hâle geliyor.

## Bilinç konusunda ne diyor?

Chalmers, bugünkü sistemlerin bilinçli olduğuna ikna olmuş değil. Ama kapıyı da kapatmıyor. Kendi ifadesiyle, bu sistemlerin bilinç için gerekli olan neyi eksik bıraktığı "hiç de açık değil" — çünkü bilinç için neyin zorunlu olduğunu zaten bilmiyoruz.

2023'teki sistemler için yazdığı değerlendirmede, eksik ya da belirsiz gördüğü özellikleri saymıştı: yinelemeli işleme, küresel çalışma alanı ve birleşik faillik. Ardıllarının bu engelleri aşabileceğini de eklemişti.

## Tartışmanın yönü

Konuyu takip eden bazı araştırmacılar, tartışmanın "yapay zekâ bilinçli mi?" gibi çözülemez bir soruda tıkanmaması gerektiğini savunuyor. arXiv'de yayımlanan çalışmalar, sorunun daha ele alınabilir alt sorulara — hangi işlevsel özelliklerin hangi davranışlarla ilişkili olduğu gibi — bölünmesini öneriyor.

Chalmers'ın konumu ise tanıdık: Bilincin zor problemi, yapay zekâ söz konusu olduğunda kolaylaşmıyor; yalnızca daha acil hâle geliyor.`,
  },
  {
    title: "Yuk Hui'den 'Kant Machine': yapay zekâ çağında Kant'ı yeniden okumak",
    slug: "yuk-hui-kant-machine",
    summary: "Erasmus Üniversitesi'nden teknoloji filozofu Yuk Hui'nin yeni kitabı, makinelerin ahlaki olup olamayacağını ve 'ebedi barış için bir algoritma' bulunup bulunmadığını soruyor.",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Yuk Hui'nin yeni kitabı Kant Machine",
    metaDescription: "Yuk Hui'nin Bloomsbury'den çıkan Kant Machine kitabı, Kant'ın aşkınsal idealizmini yapay zekâ ve robotik tartışmasına taşıyor.",
    contentType: "HABER",
    sourceName: "Erasmus Üniversitesi Felsefe Fakültesi",
    sourceUrl: "https://www.eur.nl/en/esphil/news/yuk-hui-publishes-new-book-kant-machine",
    publishedAt: "2026-08-20T18:30:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "yapay-zeka", "teknoloji-felsefesi", "kant"],
    philosopherSlugs: ["yuk-hui"],
    sources: [
      { title: "Yuk Hui Publishes New Book Kant Machine", publisher: "Erasmus School of Philosophy, Erasmus Üniversitesi Rotterdam", date: "2026", url: "https://www.eur.nl/en/esphil/news/yuk-hui-publishes-new-book-kant-machine", primary: true },
      { title: "Yuk Hui — kişisel sayfa", publisher: "digitalmilieu.net", url: "https://digitalmilieu.net/about-yh/" },
    ],
    content: `Erasmus Rotterdam Üniversitesi'nde felsefe profesörü ve "İnsanlık Durumları" kürsüsünün sahibi Yuk Hui'nin yeni kitabı *Kant Machine*, Bloomsbury tarafından yayımlandı.

## Kitabın sorusu

Hui, kitabında üç soruyu birbirine bağlıyor: Neye "akıllı makine" diyebiliriz? Makineler ahlaklı olabilir mi? Ebedi barış için bir algoritma var mıdır?

Üçüncü soru doğrudan Kant'a gönderme yapıyor. Kant, 1795 tarihli *Ebedi Barış Üzerine* risalesinde devletler arası kalıcı barışın koşullarını maddeler hâlinde sıralamıştı. Hui, bu tür bir kurallar dizisinin bugün algoritma diliyle yazılıp yazılamayacağını soruyor.

## Rasyonalizm ile ampirizm arasında

Kitabın ana tezi şu: Yapay zekâ üzerine bugünkü tartışmalar, felsefe tarihinin çok eski bir gerilimini yankılıyor — akılcılık ile deneycilik arasındaki gerilimi. Bir yanda kurallardan türeyen zekâ anlayışı, diğer yanda veriden öğrenen zekâ anlayışı var.

Hui'ye göre Kant'ın aşkınsal idealizmi bu ikisi arasında durduğu için, yapay zekânın etik ve siyasal sonuçlarını düşünmek üzere bugün de kullanışlı bir çerçeve sunuyor.

## Kozmoteknik hattının devamı

*Kant Machine*, Hui'nin daha önceki çalışmalarının doğal devamı sayılabilir. *Çin'de Teknoloji Sorunu* (2016) ve *Sanat ve Kozmoteknik* (2021) kitaplarında geliştirdiği **kozmoteknik** kavramı, teknolojinin evrensel ve tek bir şey olmadığını; her kültürün kendi kozmolojisiyle birlikte kendi teknik biçimini ürettiğini savunuyordu.

Bu bakış, yapay zekâ tartışmasına da bir itiraz taşıyor: Tek bir "yapay zekâ geleceği" değil, birden çok teknolojik yol mümkündür.`,
  },
  {
    title: "2026 Kyoto Ödülü Sanat ve Felsefe dalında Laurie Anderson'ın",
    slug: "kyoto-odulu-2026-laurie-anderson",
    summary: "Inamori Vakfı, elektronik müzik, performans, şiir ve sinemayı birleştiren çalışmalarıyla tanınan sanatçıyı ödüle değer gördü. Tören 10 Kasım'da Japonya'da yapılacak.",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "2026 Kyoto Ödülü Sanat ve Felsefe dalı: Laurie Anderson",
    metaDescription: "2026 Kyoto Ödülü Sanat ve Felsefe dalında Laurie Anderson'a verildi. Tören 10 Kasım'da düzenlenecek.",
    contentType: "HABER",
    sourceName: "Inamori Vakfı",
    sourceUrl: "https://www.newswise.com/articles/multimedia-artist-laurie-anderson-to-receive-2026-kyoto-prize-in-arts-and-philosophy",
    publishedAt: "2026-08-20T14:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul"],
    philosopherSlugs: [],
    sources: [
      { title: "Multimedia Artist Laurie Anderson to Receive 2026 Kyoto Prize in Arts and Philosophy", publisher: "Inamori Vakfı / Newswise", date: "2026", url: "https://www.newswise.com/articles/multimedia-artist-laurie-anderson-to-receive-2026-kyoto-prize-in-arts-and-philosophy", primary: true },
      { title: "Inamori Foundation Announces 2026 Kyoto Prize Laureates", publisher: "Newswise", url: "https://www.newswise.com/articles/inamori-foundation-announces-2026-kyoto-prize-laureates" },
      { title: "The 2026 Kyoto Prize Laureates Announced", publisher: "Foreign Press Center Japan", url: "https://fpcj.jp/en/prlisting/2026-kyoto-prize-laureates/" },
    ],
    content: `Japonya merkezli Inamori Vakfı, 2026 Kyoto Ödülü'nün Sanat ve Felsefe dalını çok ortamlı sanatçı ve müzisyen Laurie Anderson'a verdiğini duyurdu.

## Ödül hakkında

Kyoto Ödülü, üç dalda — İleri Teknoloji, Temel Bilimler, Sanat ve Felsefe — her yıl veriliyor. Sanat ve Felsefe dalı dönüşümlü olarak müzik, sanat, sinema-tiyatro ve düşünce-etik alanlarını kapsıyor.

Her ödül sahibine bir berat, 20 ayar altın madalya ve 100 milyon yen (600 bin ABD dolarının üzerinde) para ödülü veriliyor. 41. Kyoto Ödülü töreni 10 Kasım'da Japonya'da yapılacak.

## Neden Anderson?

1947 doğumlu Anderson, keman ve heykel eğitimi aldı. Elektronik müziği performans, şiir ve film yapımıyla birleştiren avangart projeleriyle tanınıyor. Vakıf, onu "anlatı sesini, bedensel varlığını ve yaratıcı elektronik araçları birleştiren, ömür boyu süren disiplinlerarası bir öncü" olarak tanımladı.

## Felsefe için anlamı

Kyoto Ödülü'nün "Sanat ve Felsefe" dalı, felsefe camiası için önemli bir referans noktası. Geçmiş yıllarda bu dalda Jürgen Habermas (2004), Charles Taylor (2008) ve Martha Nussbaum (2016) gibi filozoflar ödüllendirilmişti.`,
  },
  {
    title: "2026 Holberg Ödülü tarihçi Lyndal Roper'a verildi",
    slug: "holberg-odulu-2026-lyndal-roper",
    summary: "Oxford'da Regius Tarih Profesörü olan Roper, cadı avları, Alman Köylü Savaşı ve Luther üzerine çalışmalarıyla ödüle değer görüldü.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "2026 Holberg Ödülü: Lyndal Roper",
    metaDescription: "2026 Holberg Ödülü, Oxford Üniversitesi'nden tarihçi Lyndal Roper'a verildi.",
    contentType: "HABER",
    sourceName: "Holberg Ödülü · Oxford Üniversitesi",
    sourceUrl: "https://www.ox.ac.uk/news/2026-03-17-oxford-historian-named-2026-holberg-prize-laureate",
    publishedAt: "2026-08-20T14:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "akademi", "tarih"],
    philosopherSlugs: [],
    sources: [
      { title: "Oxford historian named 2026 Holberg Prize Laureate", publisher: "Oxford Üniversitesi", date: "17 Mart 2026", url: "https://www.ox.ac.uk/news/2026-03-17-oxford-historian-named-2026-holberg-prize-laureate", primary: true },
      { title: "Holberg Award 2026 goes to Lyndal Roper", publisher: "Collège de France", url: "https://www.college-de-france.fr/en/news/holberg-award-2026-goes-to-lyndal-roper" },
      { title: "Award Ceremony for the 2026 Holberg Prize and the Nils Klim Prize", publisher: "Holbergprize", url: "https://holbergprize.org/events-and-productions/award-ceremony-for-the-2026-holberg-prize-and-the-nils-klim-prize/" },
    ],
    content: `Beşerî bilimler, toplum bilimleri, hukuk ve teolojinin en büyük ödüllerinden biri sayılan Holberg Ödülü, 17 Mart 2026'da açıklandı. 2026 ödülünün sahibi, Oxford Üniversitesi'nde Regius Tarih Profesörü olan Lyndal Roper.

## Çalışma alanı

Roper'ın araştırmaları erken modern Avrupa üzerine yoğunlaşıyor. Cadı avları, 1524-1525 Alman Köylü Savaşı ve Martin Luther'in yaşamı ile düşüncesi üzerine yazdıkları, on altıncı yüzyılın toplumsal ve dinsel çatışmalarında toplumsal cinsiyetin, bedenin, ruhsal dünyanın ve iktidarın nasıl işlediğini gösterdi.

## Felsefeyle bağı

Holberg Ödülü yalnızca felsefeye verilmiyor; ancak felsefe tarihi açısından doğrudan ilgi çeken bir sicili var. Ödülü daha önce Jürgen Habermas (2005), Julia Kristeva (2004), Martha Nussbaum (2021) ve Achille Mbembe (2024) almıştı.

Roper'ın Reform dönemi çalışmaları, modern öznellik kavramının kökenleri üzerine yapılan felsefi tartışmalarla da kesişiyor: Luther'in vicdan anlayışı, bireyin iç dünyasının Batı düşüncesindeki yerini kavramak için başvurulan başlıklardan biri.

Ödül töreni Bergen'de düzenlenen Holberg Haftası kapsamında yapılıyor.`,
  },
  {
    title: "Miranda Fricker Oxford'da Uehiro Konferansları'nı verdi: 'Ahlaki Basınçlar'",
    slug: "miranda-fricker-uehiro-konferanslari-2026",
    summary: "Epistemik adaletsizlik kavramının yaratıcısı, 2026 Uehiro Konferansları'nda ahlaki taleplerin insanları nasıl biçimlendirdiğini ele aldı. Columbia'daki Dewey Konferansları'nı da bu yıl o verdi.",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Miranda Fricker: 2026 Uehiro Konferansları — Moral Pressures",
    metaDescription: "Miranda Fricker'ın Oxford'daki 2026 Uehiro Konferansları ve Columbia Üniversitesi Dewey Konferansları.",
    contentType: "HABER",
    sourceName: "Uehiro Oxford Enstitüsü",
    sourceUrl: "https://www.uehiro.ox.ac.uk/2026-lectures-miranda-fricker",
    publishedAt: "2026-08-20T17:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["epistemoloji", "etik", "konferans", "akademi"],
    philosopherSlugs: ["miranda-fricker"],
    sources: [
      { title: "2026 Lectures: Miranda Fricker", publisher: "Uehiro Oxford Institute", date: "2026", url: "https://www.uehiro.ox.ac.uk/2026-lectures-miranda-fricker", primary: true },
      { title: "2026 John Dewey Lectures — Miranda Fricker, New York University", publisher: "Columbia Üniversitesi Felsefe Bölümü", url: "https://philosophy.columbia.edu/events/2026-john-dewey-lectures-miranda-fricker-new-york-university" },
    ],
    content: `New York Üniversitesi'nden Miranda Fricker, Oxford'daki 2026 Yıllık Uehiro Konferansları'nı *"Moral Pressures: Bending Time, Shaping Wills"* (Ahlaki Basınçlar: Zamanı Bükmek, İradeleri Biçimlendirmek) başlığıyla verdi.

## Fricker neden önemli?

Fricker'ın adı 2007 tarihli *Epistemic Injustice* kitabıyla özdeşleşti. Kitap, o güne kadar dağınık biçimde tartışılan bir olguya isim verdi: İnsanlar yalnızca kaynaklardan ya da haklardan değil, **bilen özne olmaktan** da mahrum bırakılabilir.

Fricker bunu iki başlıkta topladı:

- **Tanıklık adaletsizliği:** Bir kişinin sözüne, kimliğine ilişkin önyargı yüzünden hak ettiğinden az güvenilmesi. Doktora derdini anlatamayan hasta, ifadesi ciddiye alınmayan tanık.
- **Yorumsal adaletsizlik:** Bir deneyimin adlandırılabileceği ortak kavramın toplumda henüz bulunmaması. "Cinsel taciz" terimi yaygınlaşmadan önce, o deneyimi yaşayanların elinde onu anlatacak sözcük yoktu.

## Yeni konferans dizisi ne üzerine?

Uehiro dizisinin başlığındaki "ahlaki basınçlar", ahlakın yalnızca kurallar ve gerekçeler yoluyla değil; beklenti, sitem, minnet gibi gündelik baskılar yoluyla da işlediği fikrine işaret ediyor. Fricker'ın önceki çalışmalarında da yer alan bir izlek bu: Ahlak, soyut ilkelerden önce insanlar arasındaki karşılıklı tutumlarda yaşıyor.

## Aynı yıl Columbia'da

Fricker 2026'da Columbia Üniversitesi'nin John Dewey Konferansları'nı da verdi. Amerikan Felsefe Derneği'nin desteklediği bu dizi, alanına damga vurmuş isimlere ayrılıyor.`,
  },
  {
    title: "Elizabeth Anderson Lund'da: 'Liberteryenlik, eşitsizlik ve otoriterliğe kayış'",
    slug: "elizabeth-anderson-pufendorf-konferanslari",
    summary: "Michigan Üniversitesi'nden filozof, 11-13 Mayıs 2026'da verdiği Pufendorf Konferansları'nda piyasa özgürlüğü söyleminin siyasal özgürlüğü nasıl aşındırdığını tartıştı.",
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Elizabeth Anderson'ın 2026 Pufendorf Konferansları",
    metaDescription: "Elizabeth Anderson, Lund Üniversitesi'ndeki Pufendorf Konferansları'nda liberteryenlik, eşitsizlik ve otoriterlik ilişkisini ele aldı.",
    contentType: "HABER",
    sourceName: "Lund Üniversitesi Pufendorf Konferansları",
    sourceUrl: "https://www.fil.lu.se/pufendorf/lectures/2026-elizabeth-anderson/",
    publishedAt: "2026-08-20T17:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["siyaset-felsefesi", "demokrasi", "konferans"],
    philosopherSlugs: ["elizabeth-anderson"],
    sources: [
      { title: "2026 Elizabeth Anderson — Pufendorf Lectures", publisher: "Lund Üniversitesi", date: "11-13 Mayıs 2026", url: "https://www.fil.lu.se/pufendorf/lectures/2026-elizabeth-anderson/", primary: true },
    ],
    content: `Michigan Üniversitesi'nden Elizabeth Anderson, 11-13 Mayıs 2026 tarihlerinde Lund Üniversitesi'nin Pufendorf Konferansları'nı verdi. Dizinin başlığı: *"Libertarianism, Inequality, and the Inexorable Slide to Authoritarianism"*.

## Anderson'ın tezi

Anderson uzun süredir şu soruyu soruyor: Piyasa özgürlüğünü savunan düşünce geleneği, sonuçta nasıl oluyor da insanların gündelik hayatta daha az özgür olduğu düzenlere varıyor?

2017 tarihli *Private Government* kitabında bu soruyu işyerine taşımıştı. Anderson'a göre çoğu çalışan, kamusal alanda yurttaş sayılırken işyerinde neredeyse mutlak bir otoritenin altında yaşıyor — kıyafetinden konuşmasına, mesai dışı davranışlarından sosyal medya paylaşımlarına kadar. Bu, devlet dışı ama fiilen yönetim gücüne sahip bir yapı: *özel yönetim*.

Konferans dizisinin başlığı bu çizgiyi siyasal düzeye taşıyor: Ekonomik eşitsizlik yoğunlaştıkça, siyasal kurumların da bu güç yoğunlaşmasına direnme kapasitesi azalıyor.

## İlişkisel eşitlik

Anderson'ın adı, eşitlik tartışmasında *ilişkisel eşitlik* yaklaşımıyla anılıyor. Bu yaklaşıma göre eşitliğin asıl konusu, kimin ne kadar kaynağa sahip olduğu değil; insanların birbirine hangi ilişki içinde durduğudur. Amaç, kimsenin kimseye tabi olmadığı bir toplumdur.

## Pufendorf Konferansları

Dizi, adını on yedinci yüzyıl doğal hukuk kuramcısı Samuel von Pufendorf'tan alıyor ve Lund Üniversitesi Felsefe Bölümü tarafından düzenleniyor.`,
  },
  {
    title: "Timothy Williamson bu yıl Yale'de; Fudan'da adına kongre düzenleniyor",
    slug: "timothy-williamson-yale-fudan-2026",
    summary: "Oxford'un emekli Wykeham Mantık Profesörü, 2026'da Yale'de misafir profesör. Kasım ayında Şanghay'da 'Williamson Çin felsefesiyle karşılaşıyor' başlıklı bir kongre yapılacak.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Timothy Williamson 2026: Yale ve Fudan",
    metaDescription: "Timothy Williamson'ın 2026'daki Yale misafir profesörlüğü ve Fudan Üniversitesi'nde düzenlenecek kongre.",
    contentType: "HABER",
    sourceName: "Oxford Üniversitesi · PhilEvents",
    sourceUrl: "https://www.philosophy.ox.ac.uk/people/timothy-williamson",
    publishedAt: "2026-08-20T16:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["epistemoloji", "akademi", "konferans"],
    philosopherSlugs: ["timothy-williamson"],
    sources: [
      { title: "Timothy Williamson — Faculty of Philosophy", publisher: "Oxford Üniversitesi", url: "https://www.philosophy.ox.ac.uk/people/timothy-williamson", primary: true },
      { title: "Timothy Williamson Encountering Chinese Philosophy", publisher: "PhilEvents", date: "6-7 Kasım 2026", url: "https://philevents.org/event/show/144458" },
      { title: "Philosophy Dept Colloquium: Timothy Williamson (Yale and Oxford)", publisher: "Yale Üniversitesi", date: "6 Nisan 2026", url: "https://philosophy.yale.edu/events/2026-04-06-philosophy-dept-colloquium-timothy-williamson-yale-and-oxford" },
    ],
    content: `Çağdaş epistemolojinin en çok tartışılan isimlerinden Timothy Williamson, 2026'da Yale Üniversitesi'nde A. Whitney Griswold Misafir Profesörü olarak bulunuyor. 6 Nisan 2026'da Yale Felsefe Bölümü kolokyumunda bir konuşma yaptı.

## "Önce bilgi"

Williamson'ın adı, epistemolojide bir dönüm noktası sayılan *Knowledge and Its Limits* (2000) kitabıyla anılıyor. Kitabın ana savı, alanın yüz yıllık alışkanlığını tersine çeviriyor.

Geleneksel yaklaşım bilgiyi parçalarına ayırmayı dener: bilgi = doğru + inanç + gerekçe (artı bir düzeltme). Williamson'a göre bu program başarısız oldu. Ona göre **bilgi, daha basit parçalara çözülemeyen temel bir zihinsel durumdur**; tersine, inanç ve gerekçe gibi kavramları bilgi üzerinden açıklamak gerekir.

Bu konum "önce-bilgi epistemolojisi" (knowledge-first epistemology) adıyla anılıyor ve son yirmi beş yılda alanın en verimli tartışma hatlarından birini açtı.

## Kasımda Şanghay

Şanghay'daki Fudan Üniversitesi, 6-7 Kasım 2026'da *"Timothy Williamson Encountering Chinese Philosophy"* başlıklı bir kongre düzenliyor. Programda Çin felsefesi araştırmacıları Williamson'ın çalışmalarını kendi gelenekleri açısından eleştirel biçimde ele alacak; Williamson da yanıt verecek.

Bu yaklaşım, analitik felsefe ile Çin felsefesi arasındaki temasın son yıllarda arttığını gösteren örneklerden biri. *Studies in Logic* dergisinin 2026 sayısında yayımlanan bir söyleşide Williamson, önce-bilgi epistemolojisinin Çin epistemolojisiyle kesişme noktalarını tartışmıştı.

## Belirsizlik üzerine

Williamson'ın diğer ünlü tezi belirsizlik (vagueness) üzerine. *Vagueness* (1994) kitabında, "kel" ya da "yığın" gibi belirsiz sözcüklerin aslında kesin sınırları olduğunu; ancak bu sınırların bizim tarafımızdan bilinemeyeceğini savunur. Belirsizlik, dünyada değil bilgimizde bir eksikliktir. Bu görüş *epistemikçilik* olarak biliniyor ve hâlâ yoğun biçimde tartışılıyor.`,
  },
  {
    title: "Cornel West: 'ABD ahlaki çöküş ve demokratik çürüme yaşıyor'",
    slug: "cornel-west-al-jazeera-soylesi-2026",
    summary: "Union Theological Seminary'den filozof, Al Jazeera'ya verdiği söyleşide her iki büyük partinin de yerleşik iktidara hizmet ettiğini savundu. Bahar aylarında ABD'de bir dizi üniversite konuşması yaptı.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Cornel_West_by_DW_Nance_5_(cropped).jpg?width=1600",
    imageCredit: "Cornel West · Fotoğraf: DW Nance · Wikimedia Commons",
    featured: false,
    seoTitle: "Cornel West'in 2026 açıklamaları ve konuşmaları",
    metaDescription: "Cornel West, Al Jazeera söyleşisinde ABD'de ahlaki çöküş ve demokratik çürümeden söz etti; bahar döneminde üniversite konuşmaları yaptı.",
    contentType: "HABER",
    sourceName: "Al Jazeera",
    sourceUrl: "https://www.aljazeera.com/video/talk-to-al-jazeera/2026/1/25/cornel-west-us-is-facing-moral-collapse-and-democratic-decay",
    publishedAt: "2026-08-20T16:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["siyaset-felsefesi", "demokrasi", "soylesi"],
    philosopherSlugs: ["cornel-west"],
    sources: [
      { title: "Cornel West: US is facing moral collapse and democratic decay", publisher: "Al Jazeera — Talk to Al Jazeera", date: "25 Ocak 2026", url: "https://www.aljazeera.com/video/talk-to-al-jazeera/2026/1/25/cornel-west-us-is-facing-moral-collapse-and-democratic-decay", primary: true },
      { title: "'We ought to be pessimistic,' Cornel West says, 'We just don't allow it to have the last word'", publisher: "Source New Mexico", date: "15 Nisan 2026", url: "https://sourcenm.com/2026/04/15/we-ought-to-be-pessimistic-cornel-west-says-we-just-dont-allow-it-to-have-the-last-word/" },
      { title: "Cornel West encourages the Santa Clara community to find their voice and use it for good", publisher: "Santa Clara Üniversitesi", date: "2026", url: "https://www.scu.edu/news-and-events/feature-stories/2026/stories/cornel-west-encourages-the-santa-clara-community-to-find-their-voice-and-use-it-for-good.html" },
    ],
    content: `Amerikalı filozof ve aktivist Cornel West, 25 Ocak 2026'da Al Jazeera'nın *Talk to Al Jazeera* programında Amerika Birleşik Devletleri'nin durumuna ilişkin sert bir değerlendirme yaptı: ahlaki çöküş, demokratik çürüme ve ruhsal iflas.

West, Siyah özgürlük mücadelesinin tarihine ve 2024'teki başkanlık adaylığı deneyimine dayanarak, iki büyük partinin de yerleşik güç odaklarına hizmet ettiğini; bu arada ülke içindeki eşitsizliğin derinleştiğini savundu.

## Karamsarlık ama teslimiyet değil

Nisan 2026'da New Mexico'daki St. John's College'da yıllık Steiner Konferansı'nı veren West'in oradaki bir cümlesi konuşmanın özeti gibiydi: "Karamsar olmalıyız — yalnızca son sözü karamsarlığa bırakmıyoruz."

Bu ifade, West'in *trajik umut* dediği tutumun kısa hâli. Ona göre umut, işlerin iyi gideceğine dair bir tahmin değildir; kötü gittiğini bile bile mücadeleyi sürdürme kararıdır. Bu düşünce, hem Amerikan pragmatizminden hem de Siyah kilise geleneğinden besleniyor.

## Bahar dönemi

Mayıs 2026'da Santa Clara Üniversitesi'nin "Compelling Conversations" dizisinde üç yüzden fazla öğrenci, akademisyen ve çalışana seslenen West, dinleyicilerini kendi amaçlarını anlamaya ve bunu ortak iyilik için kullanmaya çağırdı. Aynı dönemde Hay-on-Wye'daki HowTheLightGetsIn festivaline New York'tan çevrimiçi katıldı.

## Kürsüsü

West, Union Theological Seminary'de Dietrich Bonhoeffer Felsefe ve Hıristiyan Pratiği Kürsüsü'nü yürütüyor; Princeton Üniversitesi'nde profesör emeritus. Daha önce Harvard, Yale ve Paris'te ders verdi.`,
  },
  {
    title: "Julia Kristeva 85 yaşında: iğrençlikten metinlerarasılığa bir düşünce hattı",
    slug: "julia-kristeva-85-yasinda",
    summary: "Bulgar asıllı Fransız düşünür 24 Haziran'da 85 yaşına girdi. Mayıs ayında Bulgaristan'a giden Kristeva'nın kavramları dilbilim, psikanaliz ve feminizm arasında dolaşıyor.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Julia-Kristeva-BNF.jpg?width=1600",
    imageCredit: "Julia Kristeva · Wikimedia Commons",
    featured: false,
    seoTitle: "Julia Kristeva 85 yaşında: metinlerarasılık ve iğrençlik",
    metaDescription: "Julia Kristeva 24 Haziran 2026'da 85 yaşına girdi. Metinlerarasılık, semiyotik ve iğrençlik kavramlarına bakış.",
    contentType: "ANALIZ",
    sourceName: "Bulgar Telgraf Ajansı (BTA)",
    sourceUrl: "https://www.bta.bg/en/news/archives/1153750-june-24-2026-world-famous-french-bulgarian-philosopher-julia-kristeva-turns-85",
    publishedAt: "2026-08-20T15:30:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["psikanaliz", "toplumsal-cinsiyet", "kavram"],
    philosopherSlugs: ["julia-kristeva"],
    sources: [
      { title: "June 24, 2026: World-Famous French-Bulgarian Philosopher Julia Kristeva Turns 85", publisher: "Bulgarian Telegraph Agency (BTA)", date: "24 Haziran 2026", url: "https://www.bta.bg/en/news/archives/1153750-june-24-2026-world-famous-french-bulgarian-philosopher-julia-kristeva-turns-85", primary: true },
    ],
    content: `Julia Kristeva 24 Haziran 2026'da 85 yaşına girdi. Bulgar Telgraf Ajansı'nın haberine göre psikanalist, dilbilimci, göstergebilimci, edebiyat kuramcısı ve romancı olan Kristeva, mayıs ayında Bulgaristan'ı ziyaret etti.

## Paris'e giden yol

1941'de Bulgaristan'da doğan Kristeva, 1965'te doktora bursuyla Paris'e gitti ve bir daha dönmedi. Roland Barthes'ın öğrencisi oldu, *Tel Quel* çevresine katıldı ve kısa sürede Fransız kuramının merkezine yerleşti.

## Metinlerarasılık

Kristeva'nın erken dönemdeki en kalıcı katkısı **metinlerarasılık** kavramı. Mihail Bahtin'in "diyalojizm" fikrinden yola çıkarak, hiçbir metnin yalnız başına durmadığını; her metnin başka metinlerin dönüştürülmüş hâli olduğunu savundu. Kavram bugün edebiyat kuramının standart terimlerinden biri.

## Semiyotik ve simgesel

*Şiirsel Dilde Devrim* (1974) çalışmasında dili iki katmana ayırdı:

- **Simgesel:** Dilbilgisi, sözdizimi, toplumsal kural — dilin düzen kısmı.
- **Semiyotik:** Ritim, tonlama, kopukluk, ses yinelemeleri — anlamdan önce gelen bedensel katman.

Kristeva'ya göre şiir, semiyotiğin simgesel düzeni zorladığı yerdir. Bu ayrım, dil ile beden arasındaki ilişkiyi psikanaliz üzerinden yeniden kurar.

## İğrençlik

1980 tarihli *Korkunun Güçleri: İğrençlik Üzerine Bir Deneme*, kavramların en çok yankılananını ortaya koydu: **abjection** (iğrençlik). İğrenç olan, ne özne ne nesnedir; sınırı bozan şeydir — ceset, kusmuk, kan. Kristeva'ya göre benlik, kendini bunları dışarı atarak kurar; ama dışarı atılan şey bir daha tam olarak yok olmaz.

Kavram, edebiyat eleştirisinden korku sinemasına, milliyetçilik çözümlemelerinden beden kuramına kadar geniş bir alanda kullanıldı.

## Türkçedeki Kristeva

*Korkunun Güçleri*, *Kendine Yabancı*, *Ruhun Yeni Hastalıkları* ve *Sevginin Tarihleri* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Alain Badiou belgeseli Kopenhag Felsefe Film Festivali'nde gösterildi",
    slug: "badiou-belgeseli-kopenhag-film-festivali",
    summary: "Rohan ve Gorav Kalyan kardeşlerin çektiği 'Badiou' belgeseli, Danimarka Film Enstitüsü'nün 2026 programında yer aldı. Film, filozofun peşinde Paris'te dolaşıyor.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Alain_Badiou_2010_a.jpg?width=1600",
    imageCredit: "Alain Badiou, 2010 · Wikimedia Commons",
    featured: false,
    seoTitle: "Badiou belgeseli Kopenhag Felsefe Film Festivali'nde",
    metaDescription: "Alain Badiou hakkındaki belgesel, Danimarka Film Enstitüsü'nün 2026 Felsefe Film Festivali programında gösterildi.",
    contentType: "HABER",
    sourceName: "UCLA Karşılaştırmalı Edebiyat Bölümü",
    sourceUrl: "https://complit.ucla.edu/news/professor-reinhard-alain-badiou/",
    publishedAt: "2026-08-20T15:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["sinema", "siyaset-felsefesi"],
    philosopherSlugs: ["alain-badiou"],
    sources: [
      { title: "Professor Reinhard and Alain Badiou", publisher: "UCLA Comparative Literature", date: "2026", url: "https://complit.ucla.edu/news/professor-reinhard-alain-badiou/", primary: true },
    ],
    content: `Fransız filozof Alain Badiou hakkında çekilen *Badiou* belgeseli, Danimarka Film Enstitüsü'nün Kopenhag'da düzenlediği 2026 Felsefe Film Festivali programında gösterildi.

Filmi, yönetmen Rohan Kalyan ile kardeşi Gorav Kalyan hazırladı. Yapımcılar, Badiou'nun düşüncesinin kapsamından etkilenerek filozofun izini Paris'te sürdüklerini anlatıyor.

## Badiou'nun düşüncesi kısaca

1937 doğumlu Badiou, École Normale Supérieure'de felsefe kürsüsünün başkanlığını yaptı; Paris VIII Üniversitesi'nin felsefe bölümünü Gilles Deleuze, Michel Foucault ve Jean-François Lyotard ile birlikte kurdu.

Ana yapıtı *Varlık ve Olay*'da (1988) çarpıcı bir denklem kurar: **Ontoloji matematiktir.** Badiou'ya göre "varlık olarak varlık" üzerine söylenebilecek her şey, küme kuramının dilinde söylenir. Varlık, bir bütünlük değil saf çokluktur.

Bu tablodan çıkan asıl kavram **olay**tır. Olay, mevcut durumun kendi kuralları içinde açıklanamayan bir kopuştur: bir devrim, bir aşk, bir bilimsel buluş, bir sanat yapıtı. Olay kendiliğinden bir şey kurmaz; ona **sadakat** gösteren özneler bir hakikat yordamı başlatır.

Badiou'nun siyasal konumu da buradan türüyor: "Komünizm hipotezi" dediği şey, bir devlet modeli değil; eşitliğin bir olay olarak yeniden düşünülebileceği ısrarıdır.

## Belgeselin yeri

Felsefe belgeselleri son yıllarda festivallerde giderek daha çok yer buluyor. Badiou'nun kendi ilgisi de bu tercihe uyuyor: Sinemayı, felsefenin dört "hakikat yordamı"ndan biri saydığı sanatın kitleselleşmiş biçimi olarak ele alıyor ve üzerine yazıyor.`,
  },
  {
    title: "Bir felsefe dergisi, büyük ölçüde yapay zekâya yazdırılmış makale yayımladı",
    slug: "felsefe-dergisi-yapay-zeka-makale",
    summary: "Philosophy & Public Affairs'te çıkan makalenin metnini Claude yazdı; tezi Hong Kong Üniversitesi'nden Simon Goldstein verdi ve metni düzenledi. Karar, alanın yazarlık ölçütlerini tartışmaya açtı.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    seoTitle: "Felsefe dergisinde yapay zekâ tarafından yazılmış makale",
    metaDescription: "Philosophy & Public Affairs, büyük ölçüde bir dil modeli tarafından yazılmış bir makaleyi bilerek yayımladı. Yazarlık tartışması.",
    contentType: "HABER",
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/13/philosophy-journal-publishes-largely-ai-authored-article-on-purpose-guest-post/",
    publishedAt: "2026-08-20T20:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["yapay-zeka", "akademi", "dergi", "etik"],
    philosopherSlugs: [],
    sources: [
      { title: "Philosophy Journal Publishes Largely AI-Authored Article — On Purpose (guest post)", publisher: "Daily Nous", date: "13 Ağustos 2026", url: "https://dailynous.com/2026/08/13/philosophy-journal-publishes-largely-ai-authored-article-on-purpose-guest-post/", primary: true },
    ],
    content: `Siyaset felsefesinin en saygın dergilerinden *Philosophy & Public Affairs*, büyük bölümü bir dil modeli tarafından yazılmış bir makaleyi yayımladı — ve bunu bilerek yaptı.

## Nasıl bir iş bölümü?

Daily Nous'ta yayımlanan konuk yazıya göre metnin taslağını Anthropic'in dil modeli Claude yazdı. Makalenin tezini Hong Kong Üniversitesi'nden felsefe doçenti Simon Goldstein verdi; süreci yönetti ve metni düzenledi.

Yani ortada gizlenen bir kullanım yok; tersine, derginin kararı bir deneme niteliği taşıyor: Alan, yapay zekâ destekli üretimi nasıl ele alacak?

## Neyi tartışmaya açıyor?

Felsefede yazarlık, çoğu bilim dalından farklı bir anlam taşır. Bir makale genellikle tek kişinin adını taşır ve o kişinin akıl yürütmesini temsil ettiği varsayılır. Metnin büyük bölümü bir model tarafından üretildiğinde şu sorular doğuyor:

- **Fikir kimin?** Tez insandan geldiyse, metnin makine tarafından yazılmış olması yazarlığı değiştirir mi?
- **Hakemlik ne yapar?** Hakemler argümanı değerlendirir; argümanın kaynağını değil. Bu ayrım sürdürülebilir mi?
- **Şeffaflık ölçütü ne olmalı?** Hangi düzeyde katkının açıklanması gerekir?

## Alandaki diğer tartışma

Aynı dönemde felsefe camiasında ikinci bir tartışma daha sürüyordu: Yapay zekâ şirketlerinde çalışan filozofların konumu. Daily Nous'ta yer alan bir tartışmada bu durum, "yangını çıkaranların itfaiyecilik yapması" benzetmesiyle eleştirildi.

Sitemizde daha önce yer verdiğimiz *"Yapay zekâ şirketleri filozof işe alıyor"* haberinde de aynı eğilimin istihdam tarafını aktarmıştık. Tartışmanın iki ucu böylece birleşiyor: Felsefe yapay zekâya girerken, yapay zekâ da felsefenin üretim biçimine giriyor.`,
  },
  {
    title: "New York Times: 'Felsefe bölümünün intikamı'",
    slug: "nyt-felsefe-bolumunun-intikami",
    summary: "Gazetenin temmuz ayındaki yazısı, uzun süre 'iş bulunmayan bölüm' diye anılan felsefenin iş dünyasında yeniden değer kazanmasını ele aldı.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "NYT: Felsefe bölümünün intikamı",
    metaDescription: "The New York Times'ın felsefe mezunlarının iş piyasasındaki dönüşünü ele alan yazısı ve Daily Nous'taki yankısı.",
    contentType: "HABER",
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/07/05/nyt-the-revenge-of-the-philosophy-major/",
    publishedAt: "2026-08-20T13:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["akademi", "yapay-zeka"],
    philosopherSlugs: [],
    sources: [
      { title: "NYT: The Revenge of the Philosophy Major", publisher: "Daily Nous", date: "5 Temmuz 2026", url: "https://dailynous.com/2026/07/05/nyt-the-revenge-of-the-philosophy-major/", primary: true },
    ],
    content: `The New York Times'ın *"The Revenge of the Philosophy Major"* (Felsefe Bölümünün İntikamı) başlıklı yazısı, temmuz ayında felsefe camiasında geniş yankı buldu. Daily Nous yazıyı gündemine aldı ve tartışma sürdü.

## Yazının çerçevesi

Ana izlek tanıdık: Yıllarca beşerî bilimler öğrencilerine "istihdam için kod öğrenin" denildi. Şimdi tablo tersine dönmüş görünüyor. Yapay zekâ yazılım üretiminin bir kısmını devralırken, kıymetli hâle gelen beceriler farklılaşıyor: bir sorunu doğru tanımlamak, varsayımları sınamak, muğlak bir talebi açık ölçütlere çevirmek, sonuçların kimi nasıl etkileyeceğini görebilmek.

Bunlar felsefe eğitiminin gündelik pratikleri.

## Rakamlar

Sitemizde daha önce aktardığımız *Philosophy Now* verisine göre 2024'te ABD'de felsefe mezunlarının işsizlik oranı yüzde 5,1; bilgisayar bilimleri mezunlarınınki yüzde 7 olarak ölçülmüştü.

## İhtiyatlı okuma

Camiada bu tür haberlere temkinli yaklaşanlar da var. İki itiraz öne çıkıyor:

1. **Tekil veriler eğilim değildir.** Bir yılın istihdam rakamı, bölümlerin uzun vadeli durumunu göstermez.
2. **Manşet ile kurumsal gerçeklik ayrışıyor.** Aynı dönemde İngiltere'de Dundee Üniversitesi felsefe ana dalını kaldırma planını duyurdu; protesto dilekçesi beş binden fazla imza topladı. Bu haberi de daha önce aktarmıştık.

Yani felsefenin "değeri" yükselirken, felsefe bölümlerinin bütçesi aynı yönde hareket etmiyor.`,
  },
  {
    title: "Judith Butler New School'da: 'Çağdaş faşist tutkular'",
    slug: "judith-butler-new-school-fasist-tutkular",
    summary: "Butler, 23-25 Nisan 2026'daki GSSI Sempozyumu'nda açılış konuşmasını yaptı. Şubat ayında ise WashU'da yaklaşık 200 kişiye 'Who's Afraid of Gender?' üzerine konuştu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/JudithButler2013_(cropped).jpg?width=1600",
    imageCredit: "Judith Butler, 2013 · Wikimedia Commons",
    featured: false,
    seoTitle: "Judith Butler'ın 2026 konuşmaları: faşist tutkular ve toplumsal cinsiyet",
    metaDescription: "Judith Butler'ın The New School'daki 2026 GSSI Sempozyumu açılış konuşması ve WashU'daki söyleşisi.",
    contentType: "HABER",
    sourceName: "The New School · Student Life (WashU)",
    sourceUrl: "https://event.newschool.edu/contemporaryfascistpassions",
    publishedAt: "2026-08-20T19:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["toplumsal-cinsiyet", "siyaset-felsefesi", "konferans"],
    philosopherSlugs: ["judith-butler"],
    sources: [
      { title: "Gender Matters 2026: Contemporary Fascist Passions with Judith Butler", publisher: "The New School", date: "23-25 Nisan 2026", url: "https://event.newschool.edu/contemporaryfascistpassions", primary: true },
      { title: "Dreaming wide awake with Judith Butler", publisher: "Student Life, Washington Üniversitesi", date: "9 Şubat 2026", url: "https://www.studlife.com/news/2026/02/09/dreaming-wide-awake-with-judith-butler" },
    ],
    content: `Judith Butler, 23-25 Nisan 2026'da The New School'da düzenlenen GSSI Sempozyumu'nda — *Feminisms Against Fascism* — açılış konuşmasını yaptı. Konuşmanın başlığı: *"Gender Matters 2026: Contemporary Fascist Passions"*.

## Tartışmanın zemini

Butler'ın son kitabı *Who's Afraid of Gender?*, "toplumsal cinsiyet" kavramının dünya çapında nasıl bir siyasal hedef hâline geldiğini inceliyor. Kitabın tezine göre, birbirinden çok farklı ülkelerde ve çok farklı siyasal geleneklerde aynı anda beliren bu karşıtlık rastlantı değil: "Gender", ekonomik güvencesizlikten göçe kadar uzanan kaygıların toplandığı bir kap işlevi görüyor.

Butler bu hareketin dilini "ahlaki sadizm" olarak nitelendiriyor ve dinsel, siyasal ve kültürel kurumlara nasıl yerleştiğini izliyor.

## Şubatta WashU

3 Şubat 2026'da Washington Üniversitesi'nde yaklaşık iki yüz kişilik bir topluluğa seslenen Butler, aynı kitap ve dünya demokrasilerinin geleceği üzerine konuştu.

## Butler'ın kavramı

Butler'ın adı, 1990 tarihli *Cinsiyet Belası* ile birlikte anılıyor. Oradaki temel öneri **performatiflik**tir: Toplumsal cinsiyet, kişinin sahip olduğu bir öz değil; tekrarlanan edimler yoluyla üretilen bir şeydir. "Kadın olmak" ya da "erkek olmak", önceden var olan bir gerçekliğin dışavurumu değil, o gerçekliği kuran davranış dizisidir.

Bu tez, otuz beş yıldır hem feminist kuramın hem de eleştirmenlerinin başvurduğu referans noktası olmayı sürdürüyor.

## Türkçedeki Butler

*Cinsiyet Belası*, *Bela Bedenler*, *Kırılgan Hayat* ve *Şiddetin Eleştirisi* Türkçeye çevrilen kitapları arasında.`,
  },
  {
    title: "Harari'nin grafik Sapiens serisi kasımda dördüncü ciltle sürüyor",
    slug: "harari-sapiens-grafik-tarih-dorduncu-cilt",
    summary: "Sapiens: A Graphic History serisinin 'The Age of Revolutions' başlıklı cildi kasım ayında çıkıyor. Çocuklar için yazdığı Unstoppable Us dizisinin üçüncü kitabı şubatta yayımlanmıştı.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Yuval_Noah_Harari%2C_2013_(cropped).jpg?width=1600",
    imageCredit: "Yuval Noah Harari, 2013 · Wikimedia Commons",
    featured: false,
    seoTitle: "Yuval Noah Harari'nin 2026 kitapları",
    metaDescription: "Sapiens: A Graphic History dördüncü cilt kasım 2026'da; Unstoppable Us üçüncü kitap şubat 2026'da yayımlandı.",
    contentType: "HABER",
    sourceName: "Book Notification · NewBooksAlert",
    sourceUrl: "https://www.booknotification.com/authors/yuval-noah-harari/",
    publishedAt: "2026-08-20T13:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "tarih"],
    philosopherSlugs: ["yuval-noah-harari"],
    sources: [
      { title: "Yuval Noah Harari — List of Books", publisher: "Book Notification", date: "2026", url: "https://www.booknotification.com/authors/yuval-noah-harari/", primary: true },
      { title: "Yuval Noah Harari 2026 Book Releases", publisher: "NewBooksAlert", url: "https://newbooksalert.com/author-releases/yuval-noah-harari/" },
    ],
    content: `İsrailli tarihçi Yuval Noah Harari'nin *Sapiens: A Graphic History* serisinin dördüncü cildi — *The Age of Revolutions* — kasım 2026'da yayımlanıyor.

Seri, Harari'nin 2011 tarihli *Sapiens* kitabını çizgi roman diline aktarıyor. David Vandermeulen ve Daniel Casanave ile birlikte hazırlanan ciltler, tarih anlatısını mizah ve kurgusal sahnelerle birleştiren bir yöntem izliyor.

Harari'nin çocuklar için yazdığı *Unstoppable Us* dizisinin üçüncü kitabı *How Enemies Become Friends* ise 3 Şubat 2026'da çıkmıştı.

## Harari felsefeci mi?

Harari akademik olarak tarihçi; Kudüs İbrani Üniversitesi'nde ders veriyor. Ancak kitaplarının sorduğu sorular felsefenin klasik başlıklarına dokunuyor: İnsanı diğer türlerden ayıran nedir? Kurumlar, para ve devlet gibi "kurgusal düzenler" nasıl gerçeklik kazanır? Teknoloji karar verme yetimizi devraldığında özerklikten ne kalır?

2024 tarihli *Nexus*, bu hattı enformasyon ağları üzerinden sürdürüyordu: Harari'ye göre bilgi çoğaldıkça hakikat kendiliğinden yayılmıyor; asıl mesele hangi ağların hangi kurguları güçlendirdiği.

## Eleştiriler

Harari'ye yönelik akademik eleştiriler genellikle iki başlıkta toplanıyor: geniş genellemelerin kaynak temellendirmesinin zayıf kalması ve farklı alanların bulgularının tek anlatıya sıkıştırılması. Bu tartışma, popüler tarih yazımının sınırları üzerine daha genel bir tartışmanın parçası.

## Türkçedeki Harari

*Sapiens*, *Homo Deus*, *21. Yüzyıl İçin 21 Ders* ve *Nexus* Türkçeye çevrildi.`,
  },
  {
    title: "Ahmet İnam'ın YouTube dersleri: Türkiye'de felsefenin dijital hafızası",
    slug: "ahmet-inam-youtube-dersleri-dijital-arsiv",
    summary: "ODTÜ Felsefe Bölümü'nün emekli öğretim üyesi Ahmet İnam'ın metin okumaları, 2017'den bu yana bir YouTube kanalında kayda geçiyor. Ortaya çıkan şey bir video serisinden çok, felsefe yapma pratiğinin arşivi.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    seoTitle: "Ahmet İnam'ın YouTube dersleri ve Düşün Yolcuları arşivi",
    metaDescription: "Ahmet İnam'ın YouTube'daki felsefi metin okumaları, Düşün Yolcuları geleneği ve Türkiye'de dijital felsefe arşivinin anlamı üzerine dosya.",
    contentType: "ANALIZ",
    sourceName: "ODTÜ Felsefe Bölümü · ahmetinam.com · YouTube",
    sourceUrl: "https://www.ahmetinam.com/",
    publishedAt: "2026-08-20T23:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["akademi", "nietzsche", "fenomenoloji", "kavram"],
    philosopherSlugs: ["ahmet-inam"],
    sources: [
      { title: "Ahmet İnam — Özgeçmiş", publisher: "ODTÜ Felsefe Bölümü", url: "https://phil.metu.edu.tr/tr/ahmet-inam-ozgecmis", primary: true },
      { title: "Prof. Dr. Ahmet İnam'ın kişisel sayfası — Özgeçmiş", publisher: "ODTÜ", url: "https://users.metu.edu.tr/phil/ahmet-inam/ozgecmis.htm" },
      { title: "Ahmet İnam — kişisel web sitesi", publisher: "ahmetinam.com", url: "https://www.ahmetinam.com/" },
      { title: "Düşün Yolcuları Topluluğu", publisher: "ahmetinam.com", url: "https://www.ahmetinam.com/blog/dusun-yolculari-toplulugu" },
      { title: "Yıldız Işık — YouTube kanalı", publisher: "YouTube", url: "https://www.youtube.com/@yldzisk8501" },
    ],
    content: `Türkiye'de felsefenin üniversite koridorlarının dışına taşınması bakımından dikkat çekici bir dijital arşiv, yıllardır sessizce büyüyor.

Arşivin merkezinde ODTÜ Felsefe Bölümü'nün emekli öğretim üyesi Prof. Dr. Ahmet İnam ve onun sürdürdüğü felsefi metin okumaları var. YouTube'da **Yıldız Işık** adıyla yayın yapan ve \`@yldzisk8501\` adresinden erişilebilen kanal, 2017'den bu yana İnam'ın ders, metin okuma ve felsefi konuşmalarının önemli bir bölümünü kayıt altına alıyor.

Kanalın arkasındaki yapı yalnızca bir içerik üretimi değil. İnam'ın kişisel sitesinde yer alan "Düşün Yolcuları Topluluğu" yazısına göre bu kayıtlar, 2002'den beri sürdürülen felsefi metin okumalarının dijital uzantısı.

## Bir kanal değil, bir gelenek

Düşün Yolcuları, İnam'la birlikte 2002'den itibaren felsefi metin okumalarını sürdüren gönüllü bir topluluk. Başlangıçta yüz yüze yapılan çalışmalar 2020'den sonra çevrimiçi devam etti.

Topluluk, herhangi bir kurum ya da ticari yapı tarafından finanse edilen bir eğitim programı değil. Farklı mesleklerden ve yaş gruplarından insanların felsefi metinleri birlikte okumaya çalıştığı bir düşünce çevresi.

YouTube kayıtlarının asıl önemi burada. Amaç bir konferansı belgelemek değil; **felsefe yapma pratiğinin kendisini** belgelemek.

## "Filozof ne dedi" değil, "metin nasıl okunur"

Bugün dijital ortamdaki felsefe içeriklerinin büyük bölümü özet mantığıyla kuruluyor: "Nietzsche'yi on dakikada anlayın", "Stoacılık nedir", "Kant'ın beş fikri". Felsefi düşünce, hızla tüketilebilir bilgiye dönüştürülüyor.

İnam'ın kayıtlarındaki fark tam bu noktada. Burada felsefe, hızlı tüketilen bir bilgi değil; üzerinde uzun süre çalışılması gereken bir etkinlik.

Kanalın erken kayıtlarından biri, Nietzsche'nin *Tragedyanın Doğuşu* üzerine yapılan ve on beş bölüme yayılan metin okumasından oluşuyor. İlk bölüm Nisan 2017'de yayımlandı.

Böyle bir seri, YouTube'un olağan içerik mantığı açısından sıra dışı. Çünkü ölçüt izlenme süresi ya da viralleşme değil: **metinle kalabilmek**. Bir kavramın ne anlama geldiğini tartışmak, bir cümlenin öncesi ve sonrasıyla ilişkisini incelemek, bir terimin Türkçe karşılığının düşünsel sonuçlarını sorgulamak, bazen tek bir pasajda uzun süre durmak.

## Ahmet İnam kimdir?

1947 Sandıklı doğumlu İnam, 1971'de ODTÜ Elektrik Mühendisliği Bölümü'nü bitirdi. 1972'de İstanbul Üniversitesi Edebiyat Fakültesi Felsefe Bölümü'ne doktora öğrencisi olarak girdi; tezini verinceye kadar aynı fakültede Latince ve Eski Yunanca derslerini izledi.

1980'de, ana dalı Sistematik Felsefe ve Mantık, yardımcı dalı Eski Yunan Edebiyatı olmak üzere doktorasını tamamladı. Tezinin başlığı: **"Edmund Husserl'de Mantığın Yeri"**.

Aynı yıl ODTÜ'ye girdi; 1981'de yardımcı doçent, 1983'te doçent, Nisan 1989'da profesör oldu. 16 Mayıs 1994 – 5 Haziran 2000 arasında ve ardından 2003'ten itibaren ODTÜ Felsefe Bölümü başkanlığı yaptı. 2014'te emekli oldu ve emekliliğinden sonra da ders vermeyi sürdürdü.

İngilizcenin yanı sıra Almanca, Fransızca, Latince ve Eski Yunancadan okuma yapabiliyor.

## Çeviriler: Nietzsche ve Feyerabend

İnam'ın felsefe okumaları, Türkçedeki felsefe diline doğrudan katkı yapmış bir çevirmenin okumaları.

Nietzsche'nin *İyinin ve Kötünün Ötesinde* ve *Ahlakın Soykütüğü Üzerine* kitapları ile Paul Feyerabend'in *Yönteme Hayır* adlı çalışması onun çevirisiyle Türkçeye kazandırıldı; bu çeviriler 1980'lerin sonu ile 1990'ların başında Ara Yayıncılık tarafından yayımlandı.

Bu ayrıntı önemli. İnam'ın Nietzsche okumaları, Nietzsche hakkında konuşan bir akademisyenin yorumlarından ibaret değil; aynı metinlerle kurulmuş uzun süreli bir çeviri ve öğretim ilişkisinin devamı.

## Ödüller

Prof. Dr. Mustafa Parlar Vakfı 1995-1996 En İyi Eğitimci Ödülü, ODTÜ'nün 2000 yılı Üstün Akademik Başarı Ödülü ve Türkiye Yazarlar Birliği'nin 2003 yılı Yılın Fikiradamı ödülü İnam'ın aldığı ödüller arasında.

## Arşivin değeri: üç açıdan

**Pedagojik.** Videolar, bir felsefi metnin nasıl okunabileceğini gösteriyor. Öğrenci yalnızca sonuçtaki yorumu değil, yoruma ulaşma sürecini izliyor. Felsefe eğitiminin asıl güçlüğü çoğu zaman "filozof ne dedi" sorusu değil, "bu metin nasıl okunur" sorusudur.

**Kültürel.** Türkiye'de akademik felsefenin önemli bir bölümü kitaplar, makaleler ve tezler içinde kalıyor. Video kayıtları bu üretime farklı bir erişim biçimi sağlıyor ve yakın dönem felsefe kültürünün sözlü tarihine malzeme oluşturuyor.

**Arşivsel.** İnternette çok sayıda felsefe videosu var; ama sayı nitelikli arşiv anlamına gelmiyor. Düzenli sürdürülen, belirli bir yönteme dayanan, yıllara yayılan ve aynı topluluk tarafından üretilen arşivler nadir.

## Gönül felsefesi

İnam söz konusu olduğunda yalnızca uzmanlık alanlarından söz etmek yetmiyor. Onun düşüncesinde **gönül** kavramı merkezî bir yer tutuyor.

Buradaki "gönül", aklın karşısına yerleştirilen duygusal bir alan değil. İnam'ın çerçevesinde felsefe; akıl, insan, yaşam, kültür, sanat, dil ve anlam sorunlarının birbirinden koparılmadığı geniş bir bütünlük içinde ele alınıyor. Kendi ifadesiyle amacı, "çağımızdaki insanı bilim, sanat, din ve kültür etkinlikleri içinde kavramaya çalışmak".

Bu yüzden YouTube derslerinde de yalnızca teknik kavram çözümlemesi değil, felsefenin insanın yaşamıyla ilişkisi üzerine daha geniş bir soruşturma yürüyor.

## Devam eden bir pratik

İnam 2026 itibarıyla 79 yaşında ve yazmayı sürdürüyor. Kişisel sitesinde ağustos ayında yayımlanan yazıları arasında "Neredesin Nietzsche", "Hayat Taşır mı Hakikati" ve "Seksen Yaş Dörtlükleri" gibi başlıklar bulunuyor.

Bu, arşivi yalnızca geçmişten kalan ders kayıtları olarak görmeyi güçleştiriyor. Karşımızda tamamlanmış bir kariyerin belgesi değil, **devam eden bir düşünme pratiğinin dijital kaydı** var.

## Neden önemli?

Türkiye'de felsefenin kamusal görünürlüğü son yıllarda YouTube, podcast ve sosyal medya sayesinde belirgin biçimde arttı. Ama bu gelişmenin bir paradoksu var: Felsefeye erişim kolaylaşırken, felsefi düşünce daha kısa, daha hızlı ve daha yüzeysel biçimlere indirgeniyor.

İnam'ın kayıtları bu eğilime karşı farklı bir örnek. Yüzlerce dakikalık oturumlar tek bir filozofun tek bir metni, bazen tek bir kavramı üzerinde yoğunlaşabiliyor.

Arşivin değeri "çok sayıda felsefe videosu bulunması" değil; **felsefenin yavaş yapılabileceğini göstermesi**. Bugünün hızlı tüketim kültüründe belki de en anlamlı felsefi direnç biçimlerinden biri bu.

---

### İzleme ve kaynaklar

- Yıldız Işık — Ahmet İnam felsefe arşivi: [youtube.com/@yldzisk8501](https://www.youtube.com/@yldzisk8501)
- Ahmet İnam'ın kişisel sitesi: [ahmetinam.com](https://www.ahmetinam.com/)
- Düşün Yolcuları Topluluğu: [ahmetinam.com/blog/dusun-yolculari-toplulugu](https://www.ahmetinam.com/blog/dusun-yolculari-toplulugu)
- ODTÜ Felsefe Bölümü özgeçmiş sayfası: [phil.metu.edu.tr](https://phil.metu.edu.tr/tr/ahmet-inam-ozgecmis)

*Not: Kanalın içerik dökümü ve Düşün Yolcuları'nın çalışma biçimine ilişkin bilgiler, topluluğun kendi yayınlarına ve İnam'ın kişisel sitesine dayanmaktadır.*`,
  },
  {
    title: "Agamben'in Heidegger defterleri kitaplaştı: Le Thor seminerleri",
    slug: "agamben-le-thor-seminerleri-heidegger",
    summary: "Giorgio Agamben'in 1966 ve 1968'de Heidegger'in Provence'taki Le Thor seminerlerinde tuttuğu notlar 'The Time of Thinking' adıyla yayımlandı. Zone Books da filozofun 'Profanations' derlemesini yeniden bastı.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: true,
    seoTitle: "Agamben'in Le Thor seminer notları kitap oldu",
    metaDescription: "Giorgio Agamben'in Heidegger'le 1966 ve 1968 Le Thor seminerlerinde tuttuğu notlar The Time of Thinking adıyla yayımlandı.",
    contentType: "HABER",
    sourceName: "University of Chicago Press",
    sourceUrl: "https://press.uchicago.edu/ucp/books/book/distributed/T/bo281230666.html",
    publishedAt: "2026-08-20T23:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["yeni-kitap", "fenomenoloji", "siyaset-felsefesi"],
    philosopherSlugs: ["giorgio-agamben"],
    sources: [
      { title: "The Time of Thinking: The Le Thor Seminars with Heidegger (1966 and 1968)", publisher: "University of Chicago Press", date: "2026", url: "https://press.uchicago.edu/ucp/books/book/distributed/T/bo281230666.html", primary: true },
      { title: "Profanations", publisher: "Zone Books", date: "2026", url: "https://www.zonebooks.org/books/90-profanations" },
    ],
    content: `Giorgio Agamben'in yirmili yaşlarındayken tuttuğu defterler yayımlandı. *The Time of Thinking: The Le Thor Seminars with Heidegger (1966 and 1968)*, genç Agamben'in Martin Heidegger'in Provence'taki Le Thor köyünde düzenlediği iki seminerde aldığı notlardan oluşuyor.

## Le Thor nedir?

Heidegger, 1966, 1968 ve 1969 yıllarında Fransa'nın güneyinde, şair René Char'ın daveti üzerine küçük gruplarla seminerler yaptı. Katılımcı sayısı azdı; oturumlar bir bahçede ya da köy evinde, neredeyse özel dersler biçiminde geçiyordu.

Agamben o sırada henüz yirmi dört yaşındaydı. Sonradan bu seminerlerin kendi düşüncesinin kurucu deneyimlerinden biri olduğunu söyleyecekti.

## Neden önemli?

Agamben'in olgun dönem çalışmaları — *Kutsal İnsan*, *İstisna Hâli*, *Tanık ve Arşiv* — siyaset felsefesi ve hukuk üzerine görünür. Ancak bu metinlerin altında yatan yöntem büyük ölçüde Heidegger'den gelir: Bir kavramın tarihini kazarak onun bugünkü işleyişini görünür kılmak.

Le Thor notları, bu bağın nasıl kurulduğunu doğrudan gösteren birincil bir belge. Kitap, İtalyanca aslından İngilizceye çevrildi ve Chicago Üniversitesi Yayınları'nın dağıtımıyla çıktı.

## İkinci kitap

Zone Books da 2026 baharında Agamben'in *Profanations* derlemesini yeniden yayımladı. Kitap, filozofun fotoğraf, roman ve sinema üzerine yazdığı denemeleri bir araya getiriyor.

Başlıktaki *profanation* (kutsallıktan çıkarma), Agamben'in kendi kavram dağarcığında özel bir yer tutuyor: Bir şeyi kutsal alandan çekip yeniden ortak kullanıma açmak. Agamben'e göre çağdaş kapitalizm bunun tersini yapıyor — her şeyi tüketime açarken, hiçbir şeyi gerçekten kullanılabilir bırakmıyor.

## Türkçedeki Agamben

*Kutsal İnsan*, *İstisna Hâli*, *Tanık ve Arşiv*, *Çıplaklıklar* ve *Nesir Fikri* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Catherine Malabou'ya Leiden'den fahri doktora: 'Koşulsuzun plastisitesi'",
    slug: "catherine-malabou-leiden-fahri-doktora",
    summary: "Fransız filozof, 9 Şubat 2026'da Leiden Üniversitesi'nden fahri doktora aldı. Ertesi gün verdiği açık derste Derrida'nın 'koşulsuz üniversite' fikrinden yola çıkarak bugünün üniversitesini tartıştı.",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Catherine Malabou'ya Leiden Üniversitesi'nden fahri doktora",
    metaDescription: "Catherine Malabou 9 Şubat 2026'da Leiden'den fahri doktora aldı; 'On the Plasticity of the Unconditional' başlıklı açık dersi verdi.",
    contentType: "HABER",
    sourceName: "Leiden Üniversitesi Felsefe Enstitüsü",
    sourceUrl: "https://www.universiteitleiden.nl/en/events/2026/02/institute-for-philosophy-prof.-malabou-on-the-plasticity-of-the-unconditional",
    publishedAt: "2026-08-20T22:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["akademi", "kavram", "konferans"],
    philosopherSlugs: ["catherine-malabou"],
    sources: [
      { title: "Prof. Catherine Malabou — On the Plasticity of the Unconditional", publisher: "Leiden Üniversitesi Felsefe Enstitüsü", date: "9-10 Şubat 2026", url: "https://www.universiteitleiden.nl/en/events/2026/02/institute-for-philosophy-prof.-malabou-on-the-plasticity-of-the-unconditional", primary: true },
    ],
    content: `Fransız filozof Catherine Malabou, 9 Şubat 2026'da Leiden Üniversitesi'nden *doctor honoris causa* unvanı aldı. Ertesi gün üniversitenin Felsefe Enstitüsü'nde halka açık bir ders verdi: *"On the Plasticity of the Unconditional"*.

## Dersin çıkış noktası

Malabou konuşmasını Jacques Derrida'nın *Koşulsuz Üniversite* metninden başlatıp ona karşı geliştirdi. Derrida bu metinde üniversiteyi, hiçbir dış koşula boyun eğmeden her şeyi sorgulayabilme hakkına sahip bir kurum olarak tanımlamıştı: Üniversite, "koşulsuz direniş"in yeriydi.

Malabou'nun sorusu şu: Bugünün üniversitesi — performans ölçütleri, proje fonları, sıralamalar ve piyasa baskısı altındaki üniversite — böyle bir koşulsuzluğu hâlâ taşıyabilir mi? Yoksa koşulsuzluğun kendisi mi biçim değiştirmek zorunda?

## Plastisite

Malabou'nun otuz yıldır işlediği kavram **plastisite**. Sözcük iki yönlü: Plastik olan hem biçim alır hem biçim verir — ve plastik patlayıcıda olduğu gibi biçimi yok da edebilir.

Malabou kavramı önce Hegel okumasından çıkardı (*Hegel'in Geleceği*, 1996), sonra sinirbilimle buluşturdu (*Beynimizle Ne Yapmalı?*, 2004). Beynin plastik olması, yani deneyimle yeniden şekillenmesi, ona göre yalnızca biyolojik bir olgu değil; siyasal bir soru. Çünkü "esneklik" (flexibility) ile "plastisite" aynı şey değildir: Esneklik yalnızca dışarıdan gelen biçime uyum sağlar, plastisite biçim verme gücünü de içerir.

Neoliberal çalışma kültürünün insandan istediği şey esneklik; Malabou'nun savunduğu ise plastisite.

## Yıkıcı plastisite

Malabou'nun üçüncü katmanı *yıkıcı plastisite*: Bir kaza, travma ya da hastalık sonrasında ortaya çıkan ve eskisiyle sürekliliği olmayan yeni bir kimlik. *Ontology of the Accident* (2009) bu tabloyu işler — psikanalizin "bastırılan geri döner" şemasına karşı, geri dönmeyen, tamamen kopan bir dönüşüm fikri.

## Türkçedeki Malabou

*Beynimizle Ne Yapmalı?* ve *Kaza Ontolojisi* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Sloterdijk'ten Avrupa kitabı: 'Nitelikleri Olmayan Kıta'",
    slug: "sloterdijk-nitelikleri-olmayan-kita",
    summary: "Alman filozofun Avrupa üzerine denemeleri, Robert Hughes çevirisiyle Polity'den İngilizce olarak yayımlandı. Başlık, Musil'in ünlü romanına açık bir gönderme taşıyor.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_Sloterdijk%2C_Karlsruhe_07-2009%2C_IMGP3019.jpg?width=1600",
    imageCredit: "Peter Sloterdijk, Karlsruhe 2009 · Wikimedia Commons",
    featured: false,
    seoTitle: "Peter Sloterdijk'in yeni kitabı: The Continent Without Qualities",
    metaDescription: "Peter Sloterdijk'in Avrupa üzerine kitabı The Continent Without Qualities, Polity tarafından 2026'da yayımlandı.",
    contentType: "HABER",
    sourceName: "Polity / Progressive Geographies",
    sourceUrl: "https://progressivegeographies.com/category/people/peter-sloterdijk/",
    publishedAt: "2026-08-20T22:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["yeni-kitap", "siyaset-felsefesi", "ceviri"],
    philosopherSlugs: ["peter-sloterdijk"],
    sources: [
      { title: "Peter Sloterdijk — The Continent Without Qualities: Bookmarks in the Book of Europe", publisher: "Polity / Progressive Geographies", date: "2026", url: "https://progressivegeographies.com/category/people/peter-sloterdijk/", primary: true },
    ],
    content: `Peter Sloterdijk'in Avrupa üzerine denemeleri, *The Continent Without Qualities: Bookmarks in the Book of Europe* adıyla Polity tarafından yayımlandı. Kitabı İngilizceye Robert Hughes çevirdi.

## Başlıktaki gönderme

*Nitelikleri Olmayan Kıta* başlığı, Robert Musil'in *Niteliksiz Adam* romanına doğrudan gönderme yapıyor. Musil'in kahramanı Ulrich, hangi hayatı yaşayacağına karar veremeyen, olasılıklar arasında askıda kalmış bir figürdü.

Sloterdijk aynı askıda kalışı kıtaya taşıyor: Avrupa, kendini ne olarak tanımlayacağını bilemeyen bir siyasal özne. Kitabın alt başlığındaki "kitap ayraçları" imgesi de bu belirsizliği anlatıyor — Avrupa'nın tarihi, kapanmamış bir kitapta bırakılmış işaretler dizisi gibi okunuyor.

## Sloterdijk'in yeri

1947 doğumlu Sloterdijk, adını 1983 tarihli *Sinik Aklın Eleştirisi* ile duyurdu. Kitap, Frankfurt Okulu'nun ideoloji eleştirisine önemli bir itiraz getiriyordu: Çağdaş özne yanılmıyor, biliyor — ve yine de öyle davranmayı sürdürüyor. Bu tutuma Sloterdijk *sinizm* diyordu.

Sonraki büyük çalışması, 1998-2004 arasında yayımlanan üç ciltlik *Küreler*'dir. Sloterdijk burada insanın her zaman bir "içeride" — bir kürede, bir kabarcıkta, bir bağışıklık alanında — yaşadığını savunur. Modernlik, bu koruyucu kürelerin patlaması olarak okunur.

1999 tarihli *İnsanat Bahçesi İçin Kurallar* konuşması ise Almanya'da sert bir tartışma başlatmış; Sloterdijk ile Jürgen Habermas arasındaki mesafe bu vesileyle kamuoyuna taşınmıştı.

## Türkçedeki Sloterdijk

*Sinik Aklın Eleştirisi*, *Kapitalist Dünyanın İç-Evreninde*, *İnsanat Bahçesi İçin Kurallar* ve *Derrida, Bir Mısırlı* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Appiah'a Yale'den fahri doktora; yeni kitabı 'Captive Gods' çıktı",
    slug: "appiah-yale-fahri-doktora-captive-gods",
    summary: "New York Üniversitesi'nden filozof, Yale'in 325. mezuniyet töreninde Beşerî Bilimler Doktoru unvanı aldı. Din ile sosyal bilimlerin doğuşunu ele alan yeni kitabı Yale University Press'ten yayımlandı.",
    coverImage: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&q=80",
    imageCredit: "Temsilî görsel: Unsplash",
    featured: false,
    seoTitle: "Kwame Anthony Appiah'a Yale'den fahri doktora ve yeni kitabı Captive Gods",
    metaDescription: "Kwame Anthony Appiah, Yale'in 2026 mezuniyet töreninde fahri doktora aldı; yeni kitabı Captive Gods yayımlandı.",
    contentType: "HABER",
    sourceName: "Yale Üniversitesi",
    sourceUrl: "https://yale2026.yale.edu/hd-recipients/kwame-anthony-appiah/",
    publishedAt: "2026-08-20T21:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["odul", "yeni-kitap", "etik", "akademi"],
    philosopherSlugs: ["kwame-anthony-appiah"],
    sources: [
      { title: "Kwame Anthony Appiah, Doctor of Humanities — Yale 2026", publisher: "Yale Üniversitesi", date: "2026", url: "https://yale2026.yale.edu/hd-recipients/kwame-anthony-appiah/", primary: true },
      { title: "Captive Gods", publisher: "Yale University Press", url: "https://yalebooks.yale.edu/book/9780300233063/captive-gods/" },
      { title: "Book review: Captive Gods: Religion and the rise of social science", publisher: "Church Times", date: "6 Şubat 2026", url: "https://www.churchtimes.co.uk/articles/2026/6-february/books-arts/book-reviews/book-review-captive-gods-religion-and-the-rise-of-social-science-by-kwame-anthony-appiah" },
    ],
    content: `Kwame Anthony Appiah, Yale Üniversitesi'nin 325. mezuniyet töreninde Beşerî Bilimler Doktoru (Doctor of Humanities) fahri unvanını aldı.

Üniversite Rektörü Maurie McInnis'in okuduğu gerekçe metni, filozofun temel savını iki cümlede özetliyordu: Appiah'ın çalışmaları, "milliyet, din ve gelenek fikirlerinin bizi ayıran duvarlar değil, konuşmanın başlangıç noktaları olduğunu" göstermiştir. Metin onu "kozmopolit haritacı" olarak nitelendirdi.

## Yale'e dönüş

Bağın kendisi eski. Appiah, Cambridge'deki doktorasını tamamlarken Yale'den ortak kadro teklifi almış; Henry Louis Gates Jr.'ın teşvikiyle üniversitenin Felsefe ile Afrika ve Afrikalı Amerikalı Çalışmaları bölümlerine katılmıştı. İkili daha sonra Afrika ve Afrikalı Amerikalı kültürü üzerine kapsamlı bir başvuru kaynağı olan *Africana* projesinde birlikte çalıştı.

Appiah bugün New York Üniversitesi'nde Silver Felsefe ve Hukuk Profesörü. Cornell, Duke, Harvard ve Princeton'da da görev yaptı.

## Yeni kitap: Captive Gods

Appiah'ın yeni kitabı *Captive Gods: Religion and the Rise of Social Science*, Yale University Press'ten yayımlandı; Church Times kitabı şubat ayında değerlendirdi.

Kitap, sosyal bilimlerin doğuşu ile din arasındaki ilişkiyi ele alıyor. On dokuzuncu yüzyılda antropoloji, sosyoloji ve din bilimleri kurulurken "din" kavramının kendisi de bu disiplinler tarafından biçimlendirildi. Appiah bu karşılıklı kuruluşu izliyor.

## Kozmopolitanizm

Appiah'ın en bilinen kitabı 2006 tarihli *Cosmopolitanism*. Oradaki öneri, evrenselcilik ile kültürel görecelik arasındaki kısır tartışmadan çıkmaya çalışır: İnsanlar her yerde aynı değerlere sahip değildir; ama bu, birbirlerini anlayamayacakları anlamına gelmez. Kozmopolitanizm, tam anlaşma vaadi değil, konuşmayı sürdürme yükümlülüğüdür.

Babasının kendisine ve kardeşlerine verdiği öğüdü sık aktarır: "Dünyanın yurttaşı olduğunuzu unutmayın."

## Ödüller ve görevler

Appiah, 2007'de Arthur Ross Kitap Ödülü'nü, 2012'de Başkan Barack Obama'dan Ulusal Beşerî Bilimler Madalyası'nı, 2022'de Cambridge Üniversitesi'nden fahri doktorayı ve son olarak Kongre Kütüphanesi'nin Kluge Ödülü'nü aldı. Amerikan Felsefe Derneği Doğu Şubesi ile Modern Diller Derneği başkanlığı yaptı; hâlen Amerikan Sanat ve Edebiyat Akademisi başkanı.

*The New York Times Magazine*'de on yıldır yazdığı *The Ethicist* köşesi, felsefeyi gündelik ahlaki ikilemler üzerinden geniş bir okur kitlesine ulaştırıyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 6 Ağustos: Theodor Adorno'nun ölümü",
    slug: "felsefe-tarihinde-bugun-6-agustos-adorno",
    summary: "Frankfurt Okulu'nun en tanınan ismi Theodor W. Adorno, 6 Ağustos 1969'da İsviçre'de öldü. Aynı gün 1638'de Nicolas Malebranche doğmuştu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Theodor_W._Adorno.jpg?width=1600",
    imageCredit: "Theodor W. Adorno · Wikimedia Commons",
    featured: false,
    seoTitle: "6 Ağustos: Theodor Adorno'nun ölümü",
    metaDescription: "Theodor W. Adorno 6 Ağustos 1969'da öldü. Kültür endüstrisi, negatif diyalektik ve Aydınlanmanın Diyalektiği.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-06T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "elestirel-teori", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `Theodor W. Adorno, 6 Ağustos 1969'da İsviçre'de, tatildeyken geçirdiği kalp krizi sonucu hayatını kaybetti. Altmış beş yaşındaydı.

## Kültür endüstrisi

Adorno'nun en çok dolaşan kavramı, Max Horkheimer ile birlikte yazdıkları *Aydınlanmanın Diyalektiği*'nde (1944) geçen **kültür endüstrisi**dir.

Kavramın çıkış noktası basit ama sarsıcıdır: Kitle kültürü halktan kendiliğinden doğmaz; sanayi ürünü gibi üretilir, standartlaştırılır ve dağıtılır. Sinema, radyo ve popüler müzik farklı ürünler sunuyormuş gibi görünürken aslında aynı şemayı tekrar eder. Adorno'ya göre buradaki sorun "kalitesizlik" değil, tüketicinin kendi tercihini yaptığını sanırken seçeneklerin çoktan belirlenmiş olmasıdır.

## Aydınlanmanın kendine dönmesi

*Aydınlanmanın Diyalektiği*'nin ana tezi daha da rahatsız edicidir: Aydınlanma, insanı mitten kurtarmak için doğaya hükmetmeyi öğretti; ama bu hükmetme aklı, sonunda insanın kendisine de yöneldi. Akıl, amaçları tartışan bir yeti olmaktan çıkıp yalnızca en verimli aracı hesaplayan bir işleme dönüştü.

Kitap 1944'te, sürgünde, Nazizmin ve savaşın gölgesinde yazıldı. Yazarlarının sorusu şuydu: Avrupa'nın en "aydınlanmış" ülkelerinden biri nasıl olup da barbarlığa varabildi?

## Negatif diyalektik

Adorno'nun 1966 tarihli *Negatif Diyalektik*'i, Hegel'in diyalektiğine bir itirazdır. Hegel'de çelişkiler daha yüksek bir birlikte çözülür. Adorno bu çözülmeyi reddeder: Kavram, kavradığı şeyle asla tam olarak örtüşmez; her zaman bir artık kalır. Felsefenin görevi, bu artığı — kavrama sığmayanı — silmek değil, korumaktır.

Buradan çıkan ünlü cümle şudur: "Bütün, doğru olmayandır."

## Son yılı

Adorno'nun ölümünden aylar önce Frankfurt'ta öğrenci hareketiyle sert bir kopuş yaşanmıştı. Eleştirel teoriyi kuran isim, eylemcilik çağrılarına mesafeli durduğu için genç kuşağın hedefi hâline geldi; dersleri kesintiye uğradı. Bu gerilim, kuramsal düşünce ile siyasal eylem arasındaki ilişki üzerine bugün de süren bir tartışmanın erken sahnelerinden biriydi.

## Aynı gün: Malebranche

6 Ağustos 1638'de, Kartezyen geleneğin en özgün isimlerinden Fransız filozof **Nicolas Malebranche** doğdu. Zihin ile beden arasındaki etkileşim sorununa verdiği yanıt — *aracılık öğretisi* (occasionalism) — on yedinci yüzyıl metafiziğinin en tartışılan konumlarından biri oldu: Ona göre nedensel gücün asıl sahibi Tanrı'dır; bedenin ve zihnin hâlleri yalnızca "vesile"dir.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 7 Ağustos: Tagore'un ölümü, Goodman'ın doğumu",
    slug: "felsefe-tarihinde-bugun-7-agustos-tagore-goodman",
    summary: "Rabindranath Tagore 7 Ağustos 1941'de Kalküta'da öldü. Aynı gün 1906'da, tümevarım ve sanat felsefesini yeniden kuran Nelson Goodman doğdu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Rabindranath_Tagore.jpg?width=1600",
    imageCredit: "Rabindranath Tagore · Wikimedia Commons",
    featured: false,
    seoTitle: "7 Ağustos: Rabindranath Tagore ve Nelson Goodman",
    metaDescription: "7 Ağustos 1941'de Tagore öldü, 1906'da Nelson Goodman doğdu. İki farklı düşünce geleneği.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-07T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "epistemoloji", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `7 Ağustos, felsefe takviminde birbirinden çok uzak iki adı yan yana getiriyor.

## Rabindranath Tagore (1861 – 7 Ağustos 1941)

Bengalli şair, besteci ve düşünür Tagore, 1913'te Nobel Edebiyat Ödülü'nü kazanan ilk Avrupalı olmayan yazardı. Ama yalnızca bir şair değildi: eğitim, milliyetçilik ve insanın doğayla ilişkisi üzerine yazdıkları onu yirminci yüzyılın düşünce tartışmalarına da soktu.

Tagore'un milliyetçilik eleştirisi bugün de anılır. Ona göre ulus-devlet, insanı bir "makinenin parçası" hâline getiren örgütlenme biçimidir; oysa kültürler arası alışverişin kendisi bir değerdir. Bu görüş, bağımsızlık mücadelesinin en ateşli döneminde yazıldığı için Hindistan'da sert tartışmalara yol açtı; Gandhi ile aralarındaki nazik anlaşmazlık da bu eksende gelişti.

Kurduğu Visva-Bharati okulu, sınıf duvarları yerine açık havada, doğayla temas içinde öğrenmeyi esas alan bir eğitim anlayışının denemesiydi.

## Nelson Goodman (7 Ağustos 1906 – 1998)

Amerikalı filozof Nelson Goodman, analitik felsefede iki ayrı alanı birden dönüştürdü.

**Tümevarımın yeni bilmecesi.** *Fact, Fiction, and Forecast* (1954) kitabında ünlü "grue" örneğini kurdu. Şöyle bir yüklem düşünün: Bir nesne, *belirli bir tarihten önce incelenip yeşil bulunmuşsa* ya da *o tarihten sonra incelenip mavi bulunmuşsa* "grue"dur. Şimdiye kadar gördüğümüz bütün zümrütler hem "yeşil" hem "grue" yüklemini doğrular. Peki gelecekteki zümrütlerin yeşil olacağını neden düşünüyoruz da grue olacağını düşünmüyoruz?

Goodman'ın gösterdiği şey şuydu: Tümevarım, yalnızca gözlem sayısıyla temellendirilemez. Hangi yüklemlerin genellemeye elverişli olduğu sorusu, mantığın değil dilin ve alışkanlığın alanına aittir.

**Sanatın dilleri.** *Languages of Art* (1968) ise sanat yapıtını bir gösterge sistemi olarak ele alır. Goodman'a göre resim "benzerlik" yoluyla temsil etmez; temsil, tıpkı dil gibi, kurulmuş bir göndergesel ilişkidir. Kitabın sorduğu asıl soru da şudur: "Sanat nedir?" değil, **"Ne zaman sanattır?"**`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 8 Ağustos: Arnauld'nun ölümü, Hutcheson'ın doğumu",
    slug: "felsefe-tarihinde-bugun-8-agustos-arnauld-hutcheson",
    summary: "Port-Royal mantığının yazarı Antoine Arnauld 8 Ağustos 1694'te öldü. Aynı gün, ahlaki duyu kuramının kurucusu Francis Hutcheson doğdu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Antoine_Arnauld.jpg?width=1600",
    imageCredit: "Antoine Arnauld portresi · Wikimedia Commons",
    featured: false,
    seoTitle: "8 Ağustos: Antoine Arnauld ve Francis Hutcheson",
    metaDescription: "8 Ağustos 1694: Antoine Arnauld öldü, Francis Hutcheson doğdu. Port-Royal mantığı ve ahlaki duyu kuramı.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-08T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "mantik", "etik"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `8 Ağustos 1694, felsefe tarihinde iki olayın aynı güne düştüğü ender tarihlerden biri: Bir düşünür ölürken bir başkası doğuyor.

## Antoine Arnauld (1612 – 8 Ağustos 1694)

Fransız teolog ve filozof Arnauld, Paris yakınlarındaki Port-Royal manastırı çevresinde toplanan Jansenist hareketin en güçlü kalemiydi. Ama felsefe tarihinde adı iki ayrı katkıyla anılır.

**Port-Royal Mantığı.** Pierre Nicole ile birlikte yazdığı *La Logique ou l'art de penser* (1662), yüz elli yıl boyunca Avrupa'da mantık öğretiminin standart kitabı oldu. Kitabın yeniliği, mantığı kısır kıyas alıştırmalarından çıkarıp **doğru düşünmenin sanatı** olarak sunmasıydı. Bugün hâlâ kullanılan bir ayrımı — bir kavramın *kaplamı* ile *içlemi* arasındaki ayrımı — yaygınlaştıran da bu kitaptır.

**Descartes'a itirazlar.** Arnauld, Descartes'ın *Meditasyonlar*'ına yöneltilen itirazların dördüncüsünü yazdı. Orada dile getirdiği eleştiri bugün "Kartezyen çember" adıyla anılır: Descartes, açık ve seçik algılarımızın doğruluğunu Tanrı'nın varlığıyla temellendiriyor; ama Tanrı'nın varlığını da açık ve seçik algılarla kanıtlıyorsa, kanıt kendi kuyruğunu ısırmış olmuyor mu?

Arnauld ayrıca Leibniz ve Malebranche ile de uzun yazışmalar yürüttü. On yedinci yüzyıl felsefesi büyük ölçüde bu mektuplarda şekillendi.

## Francis Hutcheson (8 Ağustos 1694 – 1746)

Aynı gün doğan İskoç filozof Francis Hutcheson, İskoç Aydınlanması'nın kurucu adlarından sayılır. Glasgow Üniversitesi'nde ahlak felsefesi kürsüsünü yürüttü; Adam Smith onun öğrencisiydi.

Hutcheson'ın merkezi kavramı **ahlaki duyu**dur. Ona göre iyiyi kötüden ayırma yetimiz, çıkar hesabından ya da soyut akıl yürütmeden türemez. Tıpkı gözün rengi görmesi gibi, insanda erdemi doğrudan onaylayan bir duyu vardır. Bir davranışı "iyi" bulduğumuzda, önce bir çıkar hesabı yapıp sonra onaylamayız; onay kendiliğinden gelir.

Bu görüş Thomas Hobbes'un insan doğası tablosuna açık bir karşı çıkıştı. Hutcheson'ın bir cümlesi ise çok daha uzun yaşadı: **"En büyük mutluluğu en çok sayıda insana sağlayan eylem en iyisidir."** Faydacılığın klasik formülü, Jeremy Bentham'dan yarım yüzyıl önce burada dile gelmişti.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 9 Ağustos: Ernst Haeckel'in ölümü",
    slug: "felsefe-tarihinde-bugun-9-agustos-haeckel",
    summary: "Darwin'in Almanya'daki en gür sesi, 'ekoloji' terimini türeten ve monizmi bir dünya görüşüne dönüştüren Ernst Haeckel, 9 Ağustos 1919'da Jena'da öldü.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Ernst_Haeckel_1860.jpg?width=1600",
    imageCredit: "Ernst Haeckel, 1860 · Wikimedia Commons",
    featured: false,
    seoTitle: "9 Ağustos: Ernst Haeckel'in ölümü",
    metaDescription: "Ernst Haeckel 9 Ağustos 1919'da Jena'da öldü. Monizm, ekoloji kavramı ve bilim ile felsefe arasındaki sınır.",
    contentType: "TARIH",
    sourceName: "Ernst Haeckel — Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Ernst_Haeckel",
    publishedAt: "2026-08-09T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "bilim-felsefesi", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "Ernst Haeckel", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ernst_Haeckel", primary: true },
      { title: "Ernst Haeckel — German Naturalist & Evolutionary Biologist", publisher: "Britannica", url: "https://www.britannica.com/biography/Ernst-Haeckel" },
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `Alman zoolog ve düşünür Ernst Haeckel, 9 Ağustos 1919'da Jena'daki evi Villa Medusa'da öldü. Hayatının son elli sekiz yılını bu kentte geçirmişti.

## Darwin'in Almancası

Haeckel, *Türlerin Kökeni*'nin yayımlanmasından sonra evrim kuramının Almanya'daki en etkili savunucusu oldu. Ama yalnızca aktarmakla yetinmedi; kuramı kendi felsefi çerçevesine yerleştirdi.

Bugün kullandığımız birçok terim ondan geliyor: **ekoloji**, **filogeni**, **kök hücre** (Stammzelle) gibi sözcükleri bilim diline o kazandırdı.

En bilinen — ve en tartışmalı — savı ise "biyogenetik yasa"dır: *Ontogenez filogenezi tekrarlar.* Yani bireyin embriyo gelişimi, türün evrim tarihini kısaltılmış biçimde yeniden oynar. Bu formül yirminci yüzyılda büyük ölçüde terk edildi; Haeckel'in bazı embriyo çizimlerinin gerçeğe göre fazla düzenlenmiş olduğu da tespit edildi. Yine de kavram, bilim tarihinde "güçlü ama yanlış genelleme"nin ders kitabı örneklerinden biri olarak yerini korudu.

## Monizm: bilim mi, dünya görüşü mü?

Haeckel'in felsefe açısından asıl önemi, evrimi bir **dünya görüşü**ne dönüştürmesindedir. 1899'da yayımlanan *Kâinatın Bilmeceleri* (Die Welträthsel) yüz binlerce sattı ve döneminin en çok okunan popüler bilim kitaplarından biri oldu.

Kitabın tezi **monizm**dir: Ruh ile madde, doğa ile Tanrı ayrı iki gerçeklik değildir; tek bir doğa vardır ve her şey ona içkindir. Haeckel bu görüşü bir "bilimsel din" gibi örgütlemeye de çalıştı; 1906'da Monist Birlik'i kurdu.

## Bıraktığı soru

Haeckel'in mirası bugün ikili bir okumaya konu. Bir yandan doğa bilimlerinin felsefeyle kesiştiği alanı — bugün "bilim felsefesi" ve "doğallaştırılmış metafizik" başlıkları altında sürdürülen tartışmayı — geniş bir okur kitlesine taşıdı. Öte yandan, bilimsel bulgulardan doğrudan toplumsal ve siyasal sonuçlar çıkarma eğilimi, sonraki kuşaklarda tehlikeli biçimler aldı; Haeckel'in ırk ve toplum üzerine yazdıkları bu yüzden eleştirel biçimde ele alınır.

Bıraktığı asıl soru hâlâ açık: Bir bilimsel kuram, ne zaman bir dünya görüşüne dönüşmeye başlar — ve dönüştüğü anda hâlâ bilim midir?`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 10 Ağustos: Jean-François Lyotard'ın doğumu",
    slug: "felsefe-tarihinde-bugun-10-agustos-lyotard",
    summary: "'Postmodern durum'u tanımlayan ve büyük anlatıların sonunu ilan eden Fransız filozof Jean-François Lyotard, 10 Ağustos 1924'te doğdu.",
    coverImage: "/takvim/10-lyotard.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "10 Ağustos: Jean-François Lyotard'ın doğumu",
    metaDescription: "Jean-François Lyotard 10 Ağustos 1924'te doğdu. Postmodern Durum, büyük anlatılar ve uyuşmazlık kavramı.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-10T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "postmodernizm", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `Jean-François Lyotard 10 Ağustos 1924'te doğdu. Adı, yirminci yüzyılın son çeyreğine damgasını vuran tek bir tanımla anılır.

## "Büyük anlatılara karşı inançsızlık"

1979'da Québec hükümetinin isteği üzerine hazırladığı rapor, *La condition postmoderne* adıyla yayımlandığında beklenmedik bir etki yarattı. Kitabın en çok alıntılanan cümlesi şudur:

> "Postmodern'i, en yalın biçimde, büyük anlatılara karşı inançsızlık olarak tanımlıyorum."

**Büyük anlatı** (grand récit), tek tek bilgileri meşrulaştıran kapsayıcı hikâyedir: İnsanlığın özgürleşmesi, aklın ilerleyişi, tarihin bir amaca doğru yürüyüşü. Aydınlanma da Marksizm de bu tür anlatılara yaslanır. Lyotard'ın tespiti, bu anlatıların yanlış olduğu değil; **inandırıcılıklarını yitirdiği**dir.

Yerlerini ne alıyor? Lyotard'ın yanıtı Wittgenstein'dan geliyor: birbirine indirgenemeyen çok sayıda "dil oyunu". Bilim kendi kurallarına göre işler, adalet başka kurallara göre, sanat başka. Hiçbiri diğerinin ölçüsü olamaz.

## Bilgi kime ait?

Kitabın az konuşulan ama belki daha kalıcı olan bölümü bilginin statüsü üzerinedir. Lyotard, 1979'da, bilginin giderek "bilgisayarlaştırılabilir" olana indirgeneceğini; bu forma girmeyenin terk edileceğini yazar. Bilgi artık kendi başına bir amaç değil, alınıp satılan bir üründür — ve asıl soru "bu doğru mu?" değil, "buna kim sahip?" hâline gelir.

Yapay zekâ ve veri sahipliği tartışmalarının bugün geldiği nokta, bu bölümü yazıldığı günden daha güncel kılıyor.

## Uyuşmazlık

Lyotard'ın 1983 tarihli *Le Différend*'ı çoğu kez daha önemli yapıtı sayılır. *Différend* (uyuşmazlık), tarafların anlaşmazlığını çözebilecek ortak bir kuralın bulunmadığı çatışmadır. Böyle bir durumda uyuşmazlığı "adil" biçimde karara bağlamak imkânsızdır: Hangi dil seçilirse, taraflardan biri baştan haksız duruma düşer.

Lyotard'ın bundan çıkardığı sonuç karamsar değil, uyarıcıdır: Felsefenin görevi, dile getirilemeyeni dile getirilmiş saymak değil; dile getirilemediğine tanıklık etmektir.

## Türkçedeki Lyotard

*Postmodern Durum* ve *Postmodern Çocuklara Açıklamalar* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 12 Ağustos: Alessandro Achillini'nin ölümü",
    slug: "felsefe-tarihinde-bugun-12-agustos-achillini",
    summary: "Bologna'nın 'ikinci Aristoteles' diye anılan hocası Alessandro Achillini 12 Ağustos 1512'de öldü. Rönesans'ta felsefe ile tıp aynı kürsüde buluşuyordu.",
    coverImage: "/takvim/12b-achillini.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "12 Ağustos: Alessandro Achillini'nin ölümü",
    metaDescription: "Alessandro Achillini 12 Ağustos 1512'de öldü. Rönesans Aristotelesçiliği ve felsefe ile tıbbın kesişimi.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-12T03:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "ronesans", "ortacag-felsefesi"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `İtalyan filozof ve hekim Alessandro Achillini 12 Ağustos 1512'de öldü.

## Bologna'da felsefe

Achillini, Bologna Üniversitesi'nde hem felsefe hem tıp okuttu. Bu ikili görev, dönemin üniversite düzeninin tipik bir örneğiydi: On beşinci ve on altıncı yüzyıl İtalya'sında doğa felsefesi ile tıp birbirinden ayrı alanlar değildi. Bedenin işleyişini anlamak, doğanın ilkelerini anlamanın bir parçasıydı.

Çağdaşları arasında "ikinci Aristoteles" olarak anıldığı aktarılır — Rönesans üniversitelerinde bir hocaya verilebilecek en yüksek övgülerden biri.

## Aristoteles'in birden çok yorumu

Achillini'nin çalıştığı dönem, felsefe tarihinde çoğu zaman gözden kaçan bir gerilim taşır. Rönesans genellikle "Platon'un yeniden keşfi" olarak anlatılır; oysa üniversitelerde Aristoteles hâkimdi ve asıl tartışma Aristoteles'in *nasıl* okunacağı üzerineydi.

İki yorum hattı çarpışıyordu:

- **İbn Rüşdcü okuma:** İnsanlarda düşünen aklın tek ve ortak olduğunu savunur. Bu görüş, bireysel ruhun ölümsüzlüğü öğretisiyle çatıştığı için sürekli tartışma konusuydu.
- **İskenderci okuma:** Aklı bedenle birlikte sona eren bir yeti sayar.

Achillini, İbn Rüşdcü çizgiye yakın duran adlar arasında sayılır. Bu tartışma yalnızca teknik bir metafizik meselesi değildi: "Ölümsüz olan nedir?" sorusu, teolojiyle doğrudan temas ettiği için siyasi sonuçları da olan bir sorundu.

## Neden anılmalı?

Achillini'nin adı bugün Descartes ya da Bacon kadar bilinmiyor. Ama onun gibi isimlerin çalıştığı kürsüler, on yedinci yüzyıl "bilimsel devrimi"nin üzerine kurulduğu zemindi. Modern felsefe boşlukta doğmadı; skolastik tartışmanın araçlarını devraldı, sonra onlara karşı çıktı.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 13 Ağustos: Jeremy Taylor'ın ölümü",
    slug: "felsefe-tarihinde-bugun-13-agustos-jeremy-taylor",
    summary: "Vicdan üzerine yazdıklarıyla İngiliz ahlak düşüncesini etkileyen Jeremy Taylor, 13 Ağustos 1667'de öldü. Hoşgörü savunusu iç savaş yıllarında yazılmıştı.",
    coverImage: "/takvim/13b-taylor.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "13 Ağustos: Jeremy Taylor'ın ölümü",
    metaDescription: "Jeremy Taylor 13 Ağustos 1667'de öldü. Vicdan, kazuistik ve din özgürlüğü üzerine yazdıkları.",
    contentType: "TARIH",
    sourceName: "Jeremy Taylor — Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Jeremy_Taylor",
    publishedAt: "2026-08-13T03:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "etik", "din-felsefesi"],
    philosopherSlugs: [],
    sources: [
      { title: "Jeremy Taylor", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jeremy_Taylor", primary: true },
    ],
    content: `İngiliz din adamı ve yazar Jeremy Taylor, 13 Ağustos 1667'de İrlanda'nın Lisburn kentinde, elli üç yaşında öldü. 1613'te Cambridge'de vaftiz edilmişti.

## İç savaşın içinde yazmak

Taylor'ın verimli dönemi, İngiltere'nin en çalkantılı yıllarına denk düşer. İç savaş, kralın idamı, Cromwell yönetimi — dinsel farklılığın doğrudan siyasal şiddete dönüştüğü bir çağ.

Bu ortamda yazdığı *The Liberty of Prophesying* (1647), erken dönem hoşgörü metinleri arasında sayılır. Argümanı bugün de tanıdık gelen bir epistemolojik alçakgönüllülüğe dayanır: İnsan aklı, tartışmalı teolojik sorularda kesinliğe ulaşamaz. Kesin olmayan bir konuda başkasını zorlamak ise akla da vicdana da aykırıdır.

## Vicdanın kuralları

Taylor'ın felsefe açısından asıl ilginç yapıtı *Ductor Dubitantium*'dur (1660). Kitabın konusu **kazuistik**tir: Genel ahlak ilkelerinin tek tek durumlara nasıl uygulanacağı sorunu.

Kazuistik bugün çoğu zaman olumsuz bir çağrışım taşır — kuralı eğip bükme sanatı gibi. Oysa asıl işlevi başkaydı: İlkeler soyuttur, hayat ise ayrıntıyla doludur. "Yalan söyleme" kuralı açıktır; ama bir insanın canını kurtarmak için söylenen yalan? İki ödev çarpıştığında ne yapılır?

Taylor'ın yanıtı vicdanı merkeze alır. Ona göre vicdan, dışarıdan gelen bir buyruk listesi değil; failin kendi durumu hakkında verdiği pratik yargıdır. Kural bilgisi bu yargının malzemesidir, yerine geçemez.

## Bugüne uzanan hat

Bu tartışma kapanmadı, yalnızca yer değiştirdi. Tıp etiği, hukuk etiği ve yapay zekâ etiğinde bugün sorulan soru aynıdır: Genel bir ilke, karşılaştığımız somut duruma nasıl uygulanır — ve uygulamayı yapan yargı gücünün kendisi nasıl eğitilir?

Taylor'ın düzyazısı ayrıca İngiliz edebiyatının klasikleri arasında sayılır; *Holy Living* ve *Holy Dying* uzun süre yalnızca dinsel metin olarak değil, üslup örneği olarak da okundu.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 15 Ağustos: İbn Hazm'ın ölümü",
    slug: "felsefe-tarihinde-bugun-15-agustos-ibn-hazm",
    summary: "Endülüs'ün en keskin kalemi İbn Hazm, 15 Ağustos 1064'te Sevilla yakınlarında öldü. Hem bir aşk kitabının hem de sert bir mantık savunusunun yazarıydı.",
    coverImage: "/takvim/15-ibn-hazm.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "15 Ağustos: İbn Hazm'ın ölümü",
    metaDescription: "İbn Hazm 15 Ağustos 1064'te öldü. Zâhirîlik, Güvercin Gerdanlığı ve karşılaştırmalı din incelemesi.",
    contentType: "TARIH",
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/Ibn-Hazm",
    publishedAt: "2026-08-15T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "islam-felsefesi", "mantik"],
    philosopherSlugs: [],
    sources: [
      { title: "Ibn Ḥazm — Andalusian Poet, Philosopher & Jurist", publisher: "Britannica", url: "https://www.britannica.com/biography/Ibn-Hazm", primary: true },
      { title: "Ibn Hazm", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ibn_Hazm" },
    ],
    content: `Endülüslü filozof, hukukçu, tarihçi ve şair İbn Hazm, 15 Ağustos 1064'te Sevilla yakınlarındaki Manta Lisham'da öldü. 994'te Kurtuba'da doğmuştu.

## Sarayın içinden sürgüne

İbn Hazm, Emevî Kurtuba'sının çöküş yıllarında, yüksek bir devlet görevlisinin oğlu olarak büyüdü. Kendisi de vezirlik yaptı, birkaç kez hapse girdi, defalarca sürgün edildi. Siyasetten uzaklaştıktan sonra hayatının geri kalanını yazmaya ayırdı; kaynaklar dört yüze yakın eser kaleme aldığını aktarır.

## Güvercin Gerdanlığı

En çok okunan kitabı, felsefeyle değil aşkla ilgilidir. *Tavku'l-hamâme* (Güvercin Gerdanlığı), aşkın doğuşunu, belirtilerini, ayrılığı ve unutuşu sınıflandıran bir inceleme. Kitabın yöntemi dikkat çekicidir: Şiir ve anı ile örneklendirilmiş, neredeyse gözleme dayalı bir psikoloji denemesidir.

Bu metin, İbn Hazm'ın düşüncesinin merkezindeki ısrarı da gösterir: Genel iddialar somut örneklerle sınanmalıdır.

## Zâhirîlik: metnin görünen anlamı

Hukuk ve din felsefesinde İbn Hazm, **Zâhirî** okulun en güçlü savunucusudur. Zâhir "görünen, açık olan" demektir. Okulun ilkesi şudur: Bir metin, açık anlamına göre anlaşılmalıdır; yorumcunun kıyas ya da sezgiyle metne anlam eklemesi keyfîliğe kapı açar.

Bu tutum onu döneminin baskın hukuk okullarıyla karşı karşıya getirdi. Ama arkasında yalnızca bir gelenek tercihi değil, epistemolojik bir kaygı vardı: **Yorumun sınırı nerededir?** Metne dayandığını söyleyen bir akıl yürütme, hangi noktada metni aşıp kendi tercihini metne söyletmeye başlar?

## Karşılaştırmalı din incelemesi

*el-Fasl fi'l-milel*, dönemin dinsel ve felsefi öğretilerini karşılaştırmalı biçimde ele alan erken bir çalışmadır. İbn Hazm burada yalnızca kendi konumunu savunmaz; karşı görüşleri de sistematik olarak sıralar ve tartışır. Yöntem sert, üslup polemiktir — ama farklı inanç sistemlerini bir arada ve düzenli biçimde inceleme çabası, karşılaştırmalı din çalışmalarının erken örneklerinden sayılır.

İbn Hazm'ın mantığa verdiği önem de bu çerçevede anlaşılır: Aristoteles mantığını, dinsel metinleri doğru anlamanın aracı olarak savundu.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 19 Ağustos: Blaise Pascal'ın ölümü",
    slug: "felsefe-tarihinde-bugun-19-agustos-pascal",
    summary: "Matematikçi, fizikçi ve düşünür Blaise Pascal 19 Ağustos 1662'de otuz dokuz yaşında öldü. Geriye tamamlanmamış bir kitabın notları kaldı: Düşünceler.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Blaise_Pascal_Versailles.JPG?width=1600",
    imageCredit: "Blaise Pascal portresi, Versailles · Wikimedia Commons",
    featured: false,
    seoTitle: "19 Ağustos: Blaise Pascal'ın ölümü",
    metaDescription: "Blaise Pascal 19 Ağustos 1662'de öldü. Düşünceler, bahis argümanı ve 'kalbin kendine özgü nedenleri'.",
    contentType: "TARIH",
    sourceName: "Felsefe anniversary listesi",
    sourceUrl: "https://en.everybodywiki.com/List_of_philosophy_anniversaries",
    publishedAt: "2026-08-19T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "din-felsefesi", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "List of philosophy anniversaries", publisher: "Wikipedia / EverybodyWiki", url: "https://en.everybodywiki.com/List_of_philosophy_anniversaries" },
    ],
    content: `Blaise Pascal 19 Ağustos 1662'de, otuz dokuz yaşında Paris'te öldü. Kısa hayatına matematik, fizik ve felsefede birbirinden bağımsız görünen çalışmalar sığdırdı.

## Önce matematik ve makine

Pascal on altı yaşında konikler üzerine bir inceleme yazdı. Yirmili yaşlarında, vergi memuru olan babasının hesaplarını kolaylaştırmak için mekanik bir hesap makinesi tasarladı. Boşluk ve hava basıncı üzerine yaptığı deneyler, dönemin "doğa boşluktan tiksinir" ilkesini sarstı.

Pierre de Fermat ile yazışmaları ise olasılık kuramının kurucu metinleri arasında sayılır. Bir kumar sorusundan doğan bu yazışma, belirsizlik altında karar vermeyi matematiğin konusu hâline getirdi.

## Bahis

Pascal'ın felsefede en çok tartışılan argümanı, tam da bu olasılık düşüncesinden doğar. **Bahis** (le pari), Tanrı'nın varlığını kanıtlamaya çalışmaz; kanıtın mümkün olmadığını kabul ederek başlar.

Argümanın yapısı bir karar problemidir: Akıl bu soruda karar veremiyorsa, yine de yaşamak zorundayız ve yaşarken taraf tutmuş oluruz. Pascal, olası kazanç ve kayıpları karşılaştırır. Bugün karar kuramı diliyle okunduğunda, argüman beklenen fayda hesabının erken bir örneği olarak görülür — bu yüzden teologlardan çok iktisatçıların ve karar kuramcılarının ilgisini çeker.

Yaygın bir yanlış anlama şudur: Bahis, "inanmayı seçebilirsin" demez. Pascal inancın iradeyle üretilemeyeceğini bilir; önerisi, insanın kendini inanca açık kılacak bir yaşayış içine sokmasıdır.

## Kalbin nedenleri

*Düşünceler* (Pensées), Pascal'ın tamamlayamadığı bir savunma kitabı için tuttuğu notlardan derlendi. Kopuk, bazen tek cümlelik parçalardan oluşan bu metin, biçimsel dağınıklığına rağmen Fransız düzyazısının doruklarından sayılır.

En bilinen cümlesi de oradadır: **"Kalbin, aklın bilmediği kendine özgü nedenleri vardır."**

Bu cümle çoğu zaman akıl karşıtı bir slogan gibi kullanılır; oysa Pascal'ın söylediği daha incedir. Ona göre ilk ilkeler — uzay, zaman, sayı — kanıtlanarak bilinmez, doğrudan kavranır. Akıl, kanıtlarını bu doğrudan kavrayışların üzerine kurar. Yani kalp aklın düşmanı değil, temelidir.

## İki sonsuz arasında

Pascal'ın insan tablosu da buradan çıkar: İnsan, sonsuz büyük ile sonsuz küçük arasında asılı kalmış, kendi konumunu kavrayamayan bir varlıktır. Ama bu zayıflığın içinde bir ayrıcalık taşır — **"düşünen bir kamış"**tır. Evren onu ezebilir; ama evren ezdiğini bilmez, o bilir.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 21 Ağustos: Alexander of Hales'in ölümü",
    slug: "felsefe-tarihinde-bugun-21-agustos-alexander-of-hales",
    summary: "Paris Üniversitesi'nde skolastik öğretimin biçimini değiştiren Fransisken ilahiyatçı Alexander of Hales, 21 Ağustos 1245'te öldü.",
    coverImage: "/takvim/21-alexander.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "21 Ağustos: Alexander of Hales'in ölümü",
    metaDescription: "Alexander of Hales 21 Ağustos 1245'te Paris'te öldü. Skolastik yöntem ve Sententiae'nin ders kitabı hâline gelişi.",
    contentType: "TARIH",
    sourceName: "Britannica · Wikipedia",
    sourceUrl: "https://www.britannica.com/biography/Alexander-of-Hales",
    publishedAt: "2026-08-21T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "ortacag-felsefesi", "din-felsefesi"],
    philosopherSlugs: [],
    sources: [
      { title: "Alexander Of Hales — Thirteenth-Century, Scholasticism, Theology", publisher: "Britannica", url: "https://www.britannica.com/biography/Alexander-of-Hales", primary: true },
      { title: "Alexander of Hales", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alexander_of_Hales" },
    ],
    content: `İngiliz asıllı ilahiyatçı ve filozof Alexander of Hales, 21 Ağustos 1245'te Paris'te öldü. 1185 dolaylarında İngiltere'nin Halesowen bölgesinde doğduğu kabul edilir.

## Ders kitabını değiştiren adam

Alexander'ın felsefe tarihindeki yeri, yazdığı bir kitaptan çok, **nasıl ders verdiğiyle** ilgilidir.

On üçüncü yüzyılın başında Paris'te teoloji öğretimi doğrudan Kutsal Kitap üzerinden yürüyordu. Alexander, Petrus Lombardus'un *Sententiae* adlı derlemesini düzenli ders kitabı olarak okutan ilk hocalar arasındaydı. Bu, görünüşte teknik bir tercihti; sonucu ise büyük oldu.

*Sententiae* konuları başlık başlık düzenliyordu. Metni ders kitabı yapmak, öğretimi de aynı biçimde düzenledi: Her başlık bir soru, her soru için karşıt görüşler, sonra çözüm. Sonraki üç yüz yıl boyunca Avrupa üniversitelerinde teoloji ve felsefe bu kalıpla öğretildi. Thomas Aquinas'ın *Summa Theologiae*'sinin yapısı da bu geleneğin ürünüdür.

## Fransiskenlerin ilk kürsüsü

Alexander, kariyerinin zirvesinde, 1236 dolaylarında Fransisken tarikatına katıldı. O sırada Paris Üniversitesi'nde tanınmış bir teoloji hocasıydı; kürsüsünü de yanında götürdü. Böylece Fransiskenler üniversitede ilk teoloji kürsülerine kavuştu.

Bu tercihin sonuçları düşünce tarihine yayıldı. Bonaventura onun öğrencisiydi; Fransisken düşünce geleneği — Duns Scotus ve Ockham'a uzanan hat — bu kürsüden büyüdü.

## Summa meselesi

Adına bağlanan *Summa Theologica* (ya da *Summa fratris Alexandri*), tümüyle onun kaleminden çıkmadı. Öğrencileri ve sonraki Fransisken hocaların katkılarıyla oluşmuş ortak bir yapıt olduğu kabul edilir. Bu durum ortaçağ metinlerinde sık görülür ve "yazar" kavramının bugünkünden ne kadar farklı işlediğini gösterir: Bir *summa*, tek bir zihnin ürünü olmaktan çok, bir okulun birikimidir.

## Neden önemli?

Skolastik yöntem bugün çoğu zaman kılı kırk yaran bir tartışma biçimi olarak anılır. Oysa yaptığı iş şuydu: Bir soruyu ortaya koymak, ona verilebilecek en güçlü karşıt yanıtları toplamak, sonra kendi konumunu bu itirazlara cevap vererek kurmak.

Bu, bugün akademik makalelerin hâlâ izlediği yapıdır. Alexander of Hales'in yaptığı da tam olarak bu yapıyı bir öğretim düzenine dönüştürmekti.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 11 Ağustos: Weimar Anayasası imzalandı",
    slug: "felsefe-tarihinde-bugun-11-agustos-weimar-anayasasi",
    summary: "Friedrich Ebert 11 Ağustos 1919'da Weimar Anayasası'nı imzaladı. Metin, yirminci yüzyılın en derin hukuk felsefesi tartışmasının da zeminini kurdu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Deutsches_Reichsgesetzblatt_1919_152_1383.jpg?width=1600",
    imageCredit: "Weimar Anayasası'nın Reichsgesetzblatt'taki ilk sayfası, 1919 · Wikimedia Commons",
    featured: false,
    seoTitle: "11 Ağustos 1919: Weimar Anayasası ve egemenlik tartışması",
    metaDescription: "Weimar Anayasası 11 Ağustos 1919'da imzalandı. Kelsen ile Schmitt arasındaki egemenlik ve olağanüstü hâl tartışması.",
    contentType: "TARIH",
    sourceName: "German History in Documents and Images",
    sourceUrl: "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
    publishedAt: "2026-08-11T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "hukuk-felsefesi", "demokrasi", "siyaset-felsefesi"],
    philosopherSlugs: [],
    sources: [
      { title: "The Weimar Constitution (August 11, 1919)", publisher: "German History in Documents and Images", url: "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919", primary: true },
      { title: "Weimar Constitution adopted in Germany", publisher: "HISTORY", url: "https://www.history.com/this-day-in-history/august-11/weimar-constitution-adopted-in-germany" },
      { title: "Weimar Constitution", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Weimar_Constitution" },
    ],
    content: `11 Ağustos 1919'da Cumhurbaşkanı Friedrich Ebert, Weimar Anayasası'nı imzalayarak yürürlüğe soktu. Almanya'nın ilk parlamenter demokrasisi böylece kuruldu. Metin, kuvvetler ayrılığını güvence altına alıyor ve kadın-erkek eşitliği dâhil temel hakları sayıyordu.

Bu bir siyaset tarihi olayı. Ama felsefe tarihine girişi, yürürlükte kaldığı on dört yıl boyunca ürettiği tartışmadan geliyor.

## Egemen kimdir?

Weimar Anayasası'nın 48. maddesi cumhurbaşkanına, kamu düzeni tehlikeye girdiğinde olağanüstü yetkilerle yönetme imkânı veriyordu. Kâğıt üzerinde bir güvenlik supabı olan bu madde, pratikte anayasal düzenin kendi askıya alınışına kapı açtı.

Buradan iki karşıt hukuk felsefesi konumu doğdu.

**Carl Schmitt**, 1922'de yayımlanan *Politische Theologie*'ye şu cümleyle başlar: "Egemen, olağanüstü hâle karar verendir." Schmitt'e göre hukuk düzeni kendi kendini taşıyamaz; her normlar sistemi, normun askıya alınacağı anı belirleyen bir karara dayanır. Kural, kendi istisnasını kurala bağlayamaz.

**Hans Kelsen** ise bunun tam karşısında durur. *Saf Hukuk Kuramı*'nda geliştirdiği görüşe göre hukuk, siyasetten ve ahlaktan arındırılmış, kendi içinde tutarlı bir normlar hiyerarşisidir. Her norm geçerliliğini bir üst normdan alır; en tepede varsayılan bir *temel norm* (Grundnorm) bulunur. Egemenlik, hukuk dışı bir karar anı değil; hukuk düzeninin kendisidir.

## Tartışma neden bitmedi?

1933'ten sonra Schmitt'in Nazi rejimiyle kurduğu ilişki, kuramının okunuşunu kalıcı olarak gölgeledi. Kelsen ise Almanya'dan ayrılmak zorunda kaldı ve kariyerini ABD'de sürdürdü.

Ama sorunun kendisi kapanmadı. Olağanüstü hâl ilanları, terörle mücadele yasaları, salgın dönemi kararnameleri — bugün de aynı soru soruluyor: Hukuk devleti, kendi askıya alınışını hukuk içinde düzenleyebilir mi?

Giorgio Agamben'in *İstisna Hâli* (2003) kitabı doğrudan bu hatta yazılmıştır. Agamben'e göre istisna, modern siyasetin arızası değil; giderek olağan yönetim tekniği hâline gelmiş bir yapıdır.

## Anayasa metninin kendisi

Weimar Anayasası'nın hak kataloğu döneminin ilerisindeydi: ifade, toplanma ve inanç özgürlükleri, sosyal haklar, eğitim hakkı. Metnin başarısızlığı, yazımındaki eksiklerden çok, dayanacağı toplumsal uzlaşının bulunmayışıyla açıklanır.

Bu da felsefi bir soruyu geride bırakır: Bir anayasa, kendisine inanmayan bir toplumu ne kadar süre bir arada tutabilir?`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 12 Ağustos: IBM kişisel bilgisayarı tanıttı",
    slug: "felsefe-tarihinde-bugun-12-agustos-ibm-pc",
    summary: "12 Ağustos 1981'de IBM PC piyasaya çıktı. Hesaplama gücünün kurumlardan bireye geçişi, zihin felsefesinden bilgi kuramına uzanan tartışmaları da değiştirdi.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM_PC_5150.jpg?width=1600",
    imageCredit: "IBM PC 5150 · Wikimedia Commons",
    featured: false,
    seoTitle: "12 Ağustos 1981: IBM kişisel bilgisayarı ve zihin tartışması",
    metaDescription: "IBM PC 12 Ağustos 1981'de tanıtıldı. Kişisel hesaplamanın felsefi sonuçları: zihin, bilgi ve genişlemiş zihin tezi.",
    contentType: "TARIH",
    sourceName: "IBM Personal Computer — Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/IBM_Personal_Computer",
    publishedAt: "2026-08-12T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "teknoloji-felsefesi", "zihin-felsefesi", "yapay-zeka"],
    philosopherSlugs: [],
    sources: [
      { title: "IBM Personal Computer", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/IBM_Personal_Computer", primary: true },
    ],
    content: `12 Ağustos 1981'de IBM, model numarası 5150 olan kişisel bilgisayarını piyasaya sürdü. Fiyatı 1.565 dolardı; içinde 4,77 MHz hızında bir Intel 8088 işlemci ve 16 ile 256 kilobayt arasında bellek vardı.

Bugünün ölçüleriyle mütevazı bir makine. Ama olayın önemi teknik özelliklerde değil, **hesaplama gücünün nereye taşındığında**.

## Kurumdan bireye

1981'e kadar bilgisayar, üniversitelerin ve büyük şirketlerin sahip olduğu, özel odalarda duran, uzmanların işlettiği bir kurumsal araçtı. IBM PC, o gücü bir masanın üstüne indirdi.

Bu kaymanın felsefi sonuçları, teknolojinin kendisinden daha yavaş görüldü.

## Zihin bir bilgisayar mı?

Bilgisayarın yaygınlaşması, zihin felsefesinin dilini de değiştirdi. Yirminci yüzyılın ortasından itibaren **işlevselcilik** (functionalism) şu tezi savunuyordu: Zihinsel durumlar, hangi maddeden yapıldıklarıyla değil, girdileri çıktılara bağlayan işlevleriyle tanımlanır. Tıpkı bir programın hangi donanımda çalıştığından bağımsız olması gibi.

Bu benzetme, bilgisayar herkesin evine girdikçe sezgisel olarak da kavranabilir hâle geldi. Ama karşı itirazlar da aynı benzetmeden beslendi: John Searle'ün "Çin Odası" düşünce deneyi, sembolleri kurala göre işlemenin anlamayı doğurmadığını göstermeyi amaçlıyordu.

## Genişlemiş zihin

Bir başka hat, kişisel bilgisayarın gündelik hayata girmesiyle doğrudan bağlantılıdır. Andy Clark ve David Chalmers'ın 1998 tarihli *The Extended Mind* makalesi şunu sorar: Bir defterdeki not, bir telefondaki rehber, bir bilgisayardaki dosya — bunlar zihnin dışında mı, yoksa parçası mı?

Yazarların önerdiği ölçüt işlevseldir: Bir dış kayıt, biyolojik belleğin oynadığı rolü yeterince güvenilir biçimde oynuyorsa, onu zihnin dışında saymanın ilkeli bir gerekçesi yoktur.

Bu tez 1981'de yazılamazdı. Yazılabilmesi için hesaplama aracının cebe girmesi gerekti.

## Bilgi kimin?

Üçüncü sonuç, Jean-François Lyotard'ın 1979'da öngördüğü hatta düşer: Bilgi giderek "bilgisayarlaştırılabilir" olana indirgenir ve alınıp satılan bir ürüne dönüşür. Kişisel bilgisayarın ardından gelen ağ, arama motoru ve bulut, bu süreci hızlandırdı.

Bugün yapay zekâ tartışmasında sorulan soru — modelleri kim eğitiyor, veriyi kim topluyor, çıktıya kim sahip — 12 Ağustos 1981'de açılan yolun sonunda duruyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 13 Ağustos: John Logie Baird'in doğumu",
    slug: "felsefe-tarihinde-bugun-13-agustos-baird",
    summary: "Televizyonu ilk çalıştıran kişi olan İskoç mucit John Logie Baird 13 Ağustos 1888'de doğdu. Uzaktan görmenin mümkün olması, algı ve gerçeklik tartışmasını da değiştirdi.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Logie_Baird_and_Stooky_Bill.png?width=1600",
    imageCredit: "John Logie Baird ve televizyon denemelerinde kullandığı kukla 'Stooky Bill' · Wikimedia Commons",
    featured: false,
    seoTitle: "13 Ağustos 1888: John Logie Baird ve uzaktan görmenin felsefesi",
    metaDescription: "John Logie Baird 13 Ağustos 1888'de doğdu. Televizyon, medya felsefesi ve tanıklığın dönüşümü.",
    contentType: "TARIH",
    sourceName: "John Logie Baird — Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/John_Logie_Baird",
    publishedAt: "2026-08-13T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "medya", "teknoloji-felsefesi", "estetik"],
    philosopherSlugs: [],
    sources: [
      { title: "John Logie Baird", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/John_Logie_Baird", primary: true },
    ],
    content: `İskoç mucit John Logie Baird 13 Ağustos 1888'de doğdu. Dünyanın ilk çalışan mekanik televizyon sistemini kurdu; ilk mekanik renkli televizyon da onun eseriydi.

Baird bir filozof değildi. Ama yaptığı şey, felsefenin en eski sorularından birine yeni bir biçim verdi.

## "Televizyon": uzaktan görmek

Sözcüğün kendisi bir iddia taşır: Yunanca *tele* (uzak) ile Latince *visio* (görme). İnsanlık tarihinde ilk kez, olayın olduğu yerde bulunmadan onu görmek mümkün hâle geliyordu.

Bu, bilgi kuramı açısından yeni bir tanıklık biçimidir. Klasik epistemolojide tanıklık iki türdür: *kendi gözünle görmek* ve *bir başkasının anlattığına güvenmek*. Televizyon üçüncü bir kategori açtı — kendi gözünle görüyorsun, ama gördüğün şey bir aygıtın seçtiği, çerçevelediği ve ilettiği görüntü.

## Çerçevenin dışında ne var?

Buradan doğan soru medya felsefesinin merkezine yerleşti: Bir kamera her zaman bir yerden bakar. Kadraja giren kadar, kadrajın dışında bırakılan da anlam üretir.

Marshall McLuhan'ın 1964'te formüle ettiği ünlü cümle — **"Araç, mesajdır"** — tam bu noktayı hedefler. McLuhan'a göre bir iletişim aracının asıl etkisi taşıdığı içerikte değil, algı düzenimizi yeniden biçimlendirmesindedir. Yazı, insanı doğrusal ve mesafeli düşünmeye alıştırdı; elektronik araçlar ise eşzamanlı ve katılımcı bir algıya döndürdü.

## Gerçeğin kopyası

Görüntünün çoğaltılabilir hâle gelmesi, estetikte de bir kırılma yarattı. Walter Benjamin'in 1935 tarihli çalışması, sanat yapıtının teknik olarak çoğaltılabildiği çağda **aura**sını — burada ve şimdi olmaktan gelen biricikliğini — yitirdiğini savunuyordu.

Benjamin bunu yalnızca bir kayıp olarak sunmaz. Aura'nın çözülmesi, sanatı ritüelden koparıp siyasete açar; bu hem özgürleştirici hem tehlikeli bir imkândır.

Jean Baudrillard ise çok daha ileri gider: Çoğaltılan görüntü, sonunda kopyaladığı gerçeğin yerini alır. *Simülakr*, aslı olmayan kopyadır.

## Baird'in odası

Baird ilk gösterimini 1920'lerin ortasında Londra'da, dükkân üstü bir odada yaptı. Karşısında bir vantrilog kuklasının kafası vardı; ilk canlı insan görüntüsü ise binadaki bir görevliye ait oldu.

Yüz yıl sonra, dünyanın büyük bölümü olayları ekranlardan izliyor. Baird'in odasında başlayan soru hâlâ açık: **Ekranda gördüğümüz şeyin tanığı mıyız, yoksa seyircisi mi?**`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 14 Ağustos: Bertolt Brecht'in ölümü",
    slug: "felsefe-tarihinde-bugun-14-agustos-brecht",
    summary: "Epik tiyatronun kurucusu Bertolt Brecht 14 Ağustos 1956'da öldü. 'Yabancılaştırma etkisi', sanatın seyirciyi düşündürüp düşündüremeyeceği tartışmasını başlattı.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-W0409-300%2C_Bertolt_Brecht.jpg?width=1600",
    imageCredit: "Bundesarchiv, Bild 183-W0409-300 / Jörg Kolbe / CC BY-SA 3.0 DE · Wikimedia Commons",
    featured: false,
    seoTitle: "14 Ağustos 1956: Bertolt Brecht ve yabancılaştırma etkisi",
    metaDescription: "Bertolt Brecht 14 Ağustos 1956'da öldü. Epik tiyatro, yabancılaştırma etkisi ve Adorno ile Lukács tartışması.",
    contentType: "TARIH",
    sourceName: "Bertolt Brecht — Britannica",
    sourceUrl: "https://www.britannica.com/biography/Bertolt-Brecht",
    publishedAt: "2026-08-14T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "estetik", "marksizm", "elestirel-teori"],
    philosopherSlugs: [],
    sources: [
      { title: "Bertolt Brecht — Biography, Plays, Epic Theater, Poems, & Facts", publisher: "Britannica", url: "https://www.britannica.com/biography/Bertolt-Brecht", primary: true },
      { title: "Bertolt Brecht", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bertolt_Brecht" },
    ],
    content: `Alman şair, oyun yazarı ve tiyatro kuramcısı Bertolt Brecht, 14 Ağustos 1956'da elli sekiz yaşında öldü.

Brecht bir tiyatro adamıydı; ama bıraktığı asıl miras bir estetik kuramıdır — ve bu kuram doğrudan bilgi ve siyaset sorularına bağlanır.

## Aristoteles'e itiraz

Klasik tiyatro kuramı Aristoteles'in *Poetika*'sına dayanır: Seyirci sahnedeki kahramanla özdeşleşir, korku ve acıma duyar, sonunda bir arınma (*katharsis*) yaşar.

Brecht bu düzeneği tersine çevirmek ister. Ona göre özdeşleşme, seyirciyi duygusal olarak doyurur ve düşünmekten alıkoyar. Salondan çıkan kişi rahatlamıştır — ama hiçbir şey sormamıştır.

## Yabancılaştırma etkisi

Brecht'in çözümü **Verfremdungseffekt**tir: yabancılaştırma ya da yadırgatma etkisi. Amaç, tanıdık olanı yabancı kılmak; seyircinin "böyle olması doğal" dediği şeyi "neden böyle?" diye sorulabilir hâle getirmek.

Bunun için sahne kendi yapaylığını gizlemez. Oyuncu karaktere dönüşmez, onu gösterir. Şarkılar araya girer, pankartlar olayın sonucunu önceden duyurur, ışıklar açıkta bırakılır. Seyirciye sürekli hatırlatılan şey şudur: Bu bir temsildir, dolayısıyla başka türlü de olabilirdi.

Buradaki felsefi çekirdek Marx'ın bir düşüncesidir: Toplumsal ilişkiler doğal ve değişmez görünür; oysa tarihseldirler. Brecht'in tiyatrosu bu görünüşü kırmayı hedefler.

## Tartışma: Lukács ve Adorno

Brecht'in yaklaşımı Marksist estetik içinde de tartışıldı.

**György Lukács**, gerçekçi romanı savunuyor ve Brecht'in biçimsel deneylerini burjuva avangardına yakın buluyordu. Ona göre sanat, toplumsal bütünlüğü tutarlı bir anlatı içinde kavramalıydı.

**Theodor Adorno** ise tam ters yönden eleştirdi: Brecht'in tiyatrosu fazla öğreticiydi. Adorno'ya göre sanatın eleştirel gücü, mesaj taşımasından değil; kendi biçiminin uzlaşmayı reddetmesinden gelir. Doğrudan siyasal ders veren sanat, tam da karşı çıktığı araçsal aklın diline düşer.

Bu tartışma — sanat düşündürmek için ne yapmalı, ne yapmamalı — kapanmadı. Belgesel tiyatrodan siyasal sinemaya, kavramsal sanattan oyunlara kadar geniş bir alanda sürüyor.

## Türkçedeki Brecht

*Cesaret Ana ve Çocukları*, *Galilei'nin Yaşamı*, *Sezuan'ın İyi İnsanı* ve *Üç Kuruşluk Opera* Türkçeye çevrilmiş oyunları arasında. Tiyatro kuramı yazıları da derleme hâlinde yayımlandı.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 16 Ağustos: İlk transatlantik telgraf mesajı",
    slug: "felsefe-tarihinde-bugun-16-agustos-transatlantik-telgraf",
    summary: "16 Ağustos 1858'de Kraliçe Victoria, okyanus altından geçen kabloyla Başkan Buchanan'a mesaj gönderdi. Mesaj on yedi saatte ulaştı — ama iletişim ilk kez ulaşımdan koptu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlantic_cable_Map.jpg?width=1600",
    imageCredit: "Atlas Okyanusu telgraf kablosu haritası, 19. yüzyıl · Wikimedia Commons",
    featured: false,
    seoTitle: "16 Ağustos 1858: ilk transatlantik telgraf ve mesafenin sonu",
    metaDescription: "İlk resmî transatlantik telgraf mesajı 16 Ağustos 1858'de gönderildi. İletişimin ulaşımdan kopuşu ve felsefi sonuçları.",
    contentType: "TARIH",
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/today-in-history/August-16-The-First-Official-Transatlantic-Telegraph",
    publishedAt: "2026-08-16T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "teknoloji-felsefesi", "medya", "bilim-felsefesi"],
    philosopherSlugs: [],
    sources: [
      { title: "Today in History August 16 | 1858, Transatlantic Telegraph Cable", publisher: "Britannica", url: "https://www.britannica.com/today-in-history/August-16-The-First-Official-Transatlantic-Telegraph", primary: true },
      { title: "First Transatlantic Telegraph Cable Sent", publisher: "Library of Congress", url: "https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable" },
      { title: "The first transatlantic telegraph cable 1858", publisher: "The IET Archives", url: "https://www.theiet.org/membership/library-and-archives/the-iet-archives/archives-highlights/the-first-transatlantic-telegraph-cable" },
    ],
    content: `16 Ağustos 1858'de Britanya, Atlas Okyanusu'nun dibine döşenen kablo üzerinden Amerika Birleşik Devletleri'ne ilk resmî mesajı gönderdi. Kraliçe Victoria, Başkan James Buchanan'ı kablonun tamamlanması dolayısıyla kutluyordu.

Mesajın iletilmesi on yedi saat sürdü. Kablo birkaç hafta sonra bozuldu ve kalıcı hat ancak 1866'da kuruldu. Yine de o gün bir eşik aşıldı.

## İletişim ulaşımdan koptu

O tarihe kadar bir haberin bir yerden başka yere gitmesi, bir insanın ya da bir geminin oraya gitmesiyle aynı şeydi. Haber, taşıyıcısının hızıyla yol alırdı. Roma'nın posta yolları ile on dokuzuncu yüzyılın yelkenlisi arasında büyüklük sırası bakımından fark yoktu.

Telgraf bu bağı kopardı. Mesaj artık taşınmadan gidebiliyordu.

Bu, felsefe açısından mekân ve zaman kavrayışında bir kırılmadır. "Aynı anda" ifadesi, ilk kez okyanusun iki yakası için anlamlı hâle geldi. Farklı yerlerdeki iki olayın eşzamanlılığı, bir kuşak sonra Einstein'ın özel görelilik kuramında doğrudan bir fizik sorusuna dönüşecekti — ve o tartışmanın pratik zemininde telgraf hatlarıyla senkronize edilen saatler vardı.

## Standart zamanın doğuşu

Telgrafın ikinci sonucu daha gündeliktir. Her kentin kendi öğle vaktine göre saati varken, birbirine bağlı hatlar ortak bir zaman ölçüsünü zorunlu kıldı. Zaman dilimleri, demiryolu ve telgraf ağlarının pratik ihtiyacından doğdu.

Yani "saat kaç?" sorusunun tek bir yanıtı olması, doğanın değil altyapının sonucudur.

## Yakınlık gerçekten arttı mı?

Dönemin coşkulu yorumları, telgrafın uluslar arasında yanlış anlamayı bitireceğini ve savaşları imkânsız kılacağını yazıyordu. Altmış yıl sonra Birinci Dünya Savaşı çıktı; hem de telgrafla koordine edilerek.

Bu tecrübe, teknoloji felsefesinin tekrar eden bir dersini verdi: Bir iletişim aracının hızlanması, iletişimin niteliğini kendiliğinden iyileştirmiyor. Aynı tartışma telefon, radyo, televizyon ve internet için de yapıldı — her defasında aynı umutla ve aynı hayal kırıklığıyla.

Bugün sosyal medya üzerine yürüyen tartışmanın, 1858'de kurulan bu hattın devamı olduğunu görmek zor değil.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 17 Ağustos: Büyük Friedrich'in ölümü",
    slug: "felsefe-tarihinde-bugun-17-agustos-buyuk-friedrich",
    summary: "Prusya kralı II. Friedrich 17 Ağustos 1786'da Sanssouci'de öldü. Kant'ın 'Aydınlanma Nedir?' yazısı onun döneminde yazılmış, adı doğrudan anılmıştı.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Zweite_Alt.jpg?width=1600",
    imageCredit: "II. Friedrich portresi · Wikimedia Commons",
    featured: false,
    seoTitle: "17 Ağustos 1786: Büyük Friedrich ve aydınlanmış despotluk",
    metaDescription: "II. Friedrich 17 Ağustos 1786'da öldü. Kant'ın Aydınlanma yazısı, Voltaire dostluğu ve aydınlanmış despotluk tartışması.",
    contentType: "TARIH",
    sourceName: "Frederick the Great — Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Frederick_the_Great",
    publishedAt: "2026-08-17T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "aydinlanma", "siyaset-felsefesi", "kant"],
    philosopherSlugs: [],
    sources: [
      { title: "Frederick the Great", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Frederick_the_Great", primary: true },
      { title: "Frederick II — Prussia, Voltaire & Accomplishments", publisher: "HISTORY", url: "https://www.history.com/articles/frederick-ii-prussia" },
    ],
    content: `Prusya kralı II. Friedrich — Büyük Friedrich — 17 Ağustos 1786'da Potsdam yakınlarındaki Sanssouci sarayında öldü. 1740'tan beri tahttaydı.

Bir hükümdarın ölümü neden felsefe takvimine girer? Çünkü on sekizinci yüzyıl Aydınlanması'nın en tartışmalı kavramı — **aydınlanmış despotluk** — büyük ölçüde onun etrafında şekillendi.

## Kant'ın yazısı

Immanuel Kant, 1784'te *Berlinische Monatsschrift* dergisinde "Aydınlanma Nedir? Sorusuna Yanıt" başlıklı kısa yazısını yayımladı. Metnin açılışı felsefenin en çok alıntılanan cümlelerinden biridir:

> "Aydınlanma, insanın kendi suçuyla düştüğü ergin olmama durumundan kurtulmasıdır."

Kant'ın önerdiği ölçüt de meşhurdur: *Sapere aude* — "Bilmeye cesaret et! Kendi aklını kullanma cesaretini göster."

Yazının az bilinen tarafı, doğrudan Friedrich'e atıfta bulunmasıdır. Kant, kendi çağını "aydınlanmış bir çağ" değil, "aydınlanma çağı" olarak niteler ve bunu Friedrich'in yönetimiyle ilişkilendirir.

## Tuhaf formül

Kant'ın burada kurduğu ayrım incedir ve bugün de tartışılır.

Ona göre aklın **kamusal kullanımı** — bir bilginin, yazarın, yurttaşın okur kitlesine seslenmesi — hiçbir sınır tanımamalıdır. Aklın **özel kullanımı** ise, yani kişinin belirli bir görevde bulunurken yaptığı iş, düzenin sürmesi için sınırlanabilir. Subay emri tartışmadan uygular, ama aynı kişi yazar olarak askerî düzeni eleştirebilir.

Kant bunu, Friedrich'in tutumu diye özetlediği formülle bağlar: "İstediğiniz kadar ve istediğiniz her konuda düşünün, yeter ki itaat edin."

Bu cümle iki yönden okunabilir. Bir yandan, sansürün gevşetildiği bir dönemde düşünce özgürlüğüne açılan gerçek bir alanı tarif eder. Öte yandan, siyasal itaati koşul olarak koyduğu için, özgürlüğü kâğıt üstünde bırakan bir uzlaşma gibi de görünür.

## Voltaire ve saray

Friedrich, Fransızca yazan, flüt çalan, felsefe metinleri kaleme alan bir hükümdardı. Voltaire ile uzun bir yazışma yürüttü; Voltaire bir süre Potsdam'da yaşadı. İlişki sonunda tatsız biçimde bitti — iki zeki adamın karşılıklı gururu kadar, hükümdar ile filozof arasındaki eşitsizliğin de payı vardı.

Bu kopuş, Aydınlanma'nın kendi içindeki gerilimi iyi özetler: Filozof, iktidara akıl vermek ile iktidarın süsü olmak arasında nerede durur?

## Bugüne kalan soru

Aydınlanmış despotluk tartışması bitmiş değil. Reformları yukarıdan yapan, teknik olarak yetkin ama hesap vermeyen yönetimler bugün de savunuluyor ve eleştiriliyor.

Kant'ın metni bu tartışmada hâlâ ölçüt sayılıyor — çünkü hem imkânı hem sınırı aynı sayfada gösteriyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 18 Ağustos: Helyum güneşte keşfedildi",
    slug: "felsefe-tarihinde-bugun-18-agustos-helyum",
    summary: "18 Ağustos 1868'de Pierre Janssen, Hindistan'daki tam güneş tutulmasında bilinmeyen bir tayf çizgisi gördü. Yeryüzünde bulunmayan bir element, gökyüzünde keşfedilmişti.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Pierre_Janssen.jpg?width=1600",
    imageCredit: "Helyumu güneş tayfında saptayan gökbilimci Pierre Janssen · Wikimedia Commons",
    featured: false,
    seoTitle: "18 Ağustos 1868: helyumun keşfi ve gözlemin sınırları",
    metaDescription: "Helyum 18 Ağustos 1868'de güneş tayfında keşfedildi. Dolaylı gözlem, bilimsel gerçekçilik ve kuram yüklü gözlem tartışması.",
    contentType: "TARIH",
    sourceName: "American Physical Society",
    sourceUrl: "https://www.aps.org/apsnews/2014/08/discovery-of-helium-1868",
    publishedAt: "2026-08-18T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "bilim-felsefesi", "epistemoloji", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "August 18 and October 20, 1868: Discovery of Helium", publisher: "American Physical Society", url: "https://www.aps.org/apsnews/2014/08/discovery-of-helium-1868", primary: true },
      { title: "Aug. 18, 1868: Helium is discovered", publisher: "Astronomy.com", url: "https://www.astronomy.com/today-in-the-history-of-astronomy/aug-18-1868-helium-is-discovered/" },
      { title: "Pierre Janssen — Discoverer of Helium, Solar Spectroscopy", publisher: "Britannica", url: "https://www.britannica.com/biography/Pierre-Janssen" },
    ],
    content: `18 Ağustos 1868'de Hindistan'da tam güneş tutulması gözlenirken, Fransız gökbilimci Pierre Jules César Janssen güneşin tayfında o güne kadar bilinmeyen bir sarı çizgi gördü. Aynı çizgiyi İngiliz gökbilimci Norman Lockyer da bağımsız olarak saptadı ve bunun yeni bir element olduğunu öne sürerek ona güneşin Yunanca adından yola çıkarak **helyum** adını verdi.

Element yeryüzünde ancak yıllar sonra bulundu.

## Görmediğimiz bir şeyi nasıl biliriz?

Bu keşif, bilim felsefesinin merkezî sorusunu somut bir örneğe indirger.

Janssen ve Lockyer helyumu görmediler. Gördükleri şey, bir prizmadan geçen ışığın belirli bir yerinde beliren parlak bir çizgiydi. Oradan "yeni bir element var" sonucuna varmak, bir dizi kuramsal varsayımı gerektirir: Her elementin kendine özgü bir tayf imzası olduğunu, güneşteki maddenin yeryüzündeki maddeyle aynı yasalara uyduğunu, aygıtın güvenilir olduğunu varsaymak gibi.

Yani **gözlem, kuramdan bağımsız değildir**. Norwood Russell Hanson ve Thomas Kuhn'un "gözlemin kuram yüklü olduğu" tezi tam bunu söyler: Ne gördüğümüz, hangi kuramla baktığımıza bağlıdır.

## Gerçekçilik tartışması

Helyum örneği, bilimsel gerçekçilik tartışmasında da anılır.

**Gerçekçiler** için bu bir zafer hikâyesidir: Kuram, henüz kimsenin eline almadığı bir şeyin varlığını öngördü; yıllar sonra o şey bulundu. Bu, kuramın yalnızca "işe yaramadığını", gerçekten dünyayı tarif ettiğini gösterir.

**Araçsalcılar** ise daha temkinlidir: Kuramlar, gözlemleri düzenleyen ve öngörü üreten araçlardır; başarılı olmaları, betimledikleri varlıkların gerçekten var olduğunu kanıtlamaz. Bilim tarihi, başarıyla öngörü üretmiş ama sonradan terk edilmiş kavramlarla doludur — esîr (ether) bunların en bilinenidir.

Tartışmanın bugünkü hâli "kötümser tümevarım" adıyla anılır: Geçmişteki en iyi kuramların çoğu yanlış çıktıysa, bugünküler neden farklı olsun?

## Gökyüzü laboratuvar olunca

Keşfin üçüncü sonucu yöntemseldir. Tayf çözümlemesi, dokunulamayan bir nesne hakkında bilgi üretmenin yolunu açtı. Bugün ötegezegen atmosferlerinden kara delik çevresine kadar astrofiziğin neredeyse tamamı bu ilkeye dayanır.

On dokuzuncu yüzyılın başında Auguste Comte, yıldızların kimyasal bileşiminin asla bilinemeyeceğini yazmıştı — bilginin ilkesel bir sınırına örnek olarak. Helyumun keşfi, o sınırın nerede olduğunu bilmenin ne kadar zor olduğunu gösterdi.`,
  },
  {
    title: "Yalçın Koç: Türkçede yeni bir felsefe dili arayışı",
    slug: "yalcin-koc-turkcede-felsefe-dili-anadolu-mayasi",
    summary: "Boğaziçi Üniversitesi'nden emekli olan Yalçın Koç, felsefeyi Batı kavramlarını çevirerek değil, Türkçenin ve Anadolu düşünce geleneğinin imkânları içinden yeniden kurmayı deniyor. 'Nazariyat' külliyatı bu iddianın fiilî sınaması.",
    coverImage: "/kapak/yalcin-koc.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: true,
    seoTitle: "Yalçın Koç: Anadolu Mayası, nazariyat ve Türkçede felsefe",
    metaDescription: "Yalçın Koç'un Anadolu Mayası, kelam-logos ayrımı ve nazariyat külliyatı: Türkçede özgün bir felsefe dili kurulabilir mi?",
    contentType: "ANALIZ",
    sourceName: "Cedit Neşriyat · akademik çalışmalar",
    sourceUrl: "http://ceditnesriyat.com.tr/index.php?product_id=69&route=product/product",
    publishedAt: "2026-08-21T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["kavram", "islam-felsefesi", "akademi", "mantik"],
    philosopherSlugs: ["yalcin-koc"],
    sources: [
      { title: "Anadolu Mayası — Yalçın Koç", publisher: "Cedit Neşriyat", url: "http://ceditnesriyat.com.tr/index.php?product_id=69&route=product/product", primary: true },
      { title: "Anadolu Mayası: Türk Kimliği Üzerine Bir İnceleme", publisher: "Kitapyurdu", url: "https://www.kitapyurdu.com/kitap/anadolu-mayasi/99423.html" },
      { title: "Prof. Dr. Yalçın Koç — yazar sayfası", publisher: "Kitapyurdu", url: "https://www.kitapyurdu.com/yazar/prof-dr-yalcin-koc/54095.html" },
      { title: "Yeni Başlayanlar İçin Yalçın Koç", publisher: "Şenol Korkut — Academia.edu", url: "https://www.academia.edu/116108406/Yeni_Ba%C5%9Flayanlar_%C4%B0%C3%A7in_Yal%C3%A7%C4%B1n_Ko%C3%A7" },
    ],
    content: `Çağdaş Türk düşüncesinin en özgün isimlerinden Prof. Dr. Yalçın Koç, felsefe tarihinde alışılmış bir rolü reddediyor: Batı felsefesinin kavramlarını Türkçeye aktaran aracı olmayı.

Onun girişimi daha iddialı. Felsefenin kendisini Türkçenin ve Türk düşünce geleneğinin imkânları içinden yeniden kurmayı deniyor.

## Fizikten felsefeye

1950'de Tokat'ta doğan Koç, 1973'te ODTÜ Fizik Bölümü'nü bitirdi. Mezuniyetinden bir yıl sonra, lisans alanının dışına çıkarak felsefe doktorasına başladı.

1977'den itibaren Boğaziçi Üniversitesi'nde Beşerî Bilimler ve Felsefe bölümlerinde çalıştı. Felsefe Bölümü başkanlığı, Fen-Edebiyat Fakültesi dekanlığı ve Sosyal Bilimler Enstitüsü müdürlüğü yaptı. 1998'de profesör oldu ve aynı yıl, kırk sekiz yaşındayken üniversiteden emekli oldu. Bugün Antalya'da bir köyde yaşıyor ve yazmayı sürdürüyor.

Bu erken çekiliş, düşüncesinin bir parçası olarak da okunabilir: Kurumsal felsefenin gündemi ile kendi kurmak istediği gündem arasındaki mesafe.

## Batı'ya karşı değil, Batı-merkezliliğe alternatif

Koç'un felsefesini "Batı karşıtı" saymak, asıl meseleyi ıskalamak olur. Batı felsefesinin problemlerine ve kavram mirasına fazlasıyla hâkim bir düşünürdür. Arayışı başkadır: Felsefenin, Grek-Latin-Kilise geleneğinde biçimlenmiş kavram ve kategorilerle sınırlı olmadığını göstermek.

Yaptığı şey Batı felsefesini reddetmek değil; Batı merkezli felsefe okumasının karşısına **başka bir nazari imkân** koymaktır.

Bu girişimin en dikkat çekici tarafı, yeni bir felsefe dili oluşturma çabasıdır. Metinlerinde geçen *nazariyat*, *maya*, *gönül*, *kelam*, *cevher*, *şuur*, *zihin* ve *theographia* gibi kavramlar terminolojik tercih değildir. Düşüncenin farklı bir zeminde yeniden örgütlenmesinin araçlarıdır.

## "Anadolu Mayası": kimlikten daha derin bir soru

Koç'un başlangıç noktalarından biri **Anadolu Mayası**dır. Cedit Neşriyat'tan çıkan ve birçok baskı yapan *Anadolu Mayası: Türk Kimliği Üzerine Bir İnceleme*, sonraki nazariyatının kavramsal damarlarından birini kurar.

Kitap, Türk kimliğini tarihsel, sosyolojik ya da siyasi bir kimlik olarak ele almak yerine, daha derin bir ontolojik zeminde düşünmeye yönelir.

Buradaki **maya** kavramı belirleyicidir. Maya, bir şeyi yalnızca meydana getiren değil; onun ne olduğunu ve ne olarak kalacağını belirleyen kurucu bir ilke olarak düşünülür. Bu açıdan Anadolu Mayası, geçmişe nostaljik bir dönüş çağrısı değil; Türk ve Anadolu varoluşunun hangi temel üzerinden anlaşılabileceğine dair felsefi bir sorudur.

**Gönül** de bu bağlamda merkezî bir konum kazanır. Sıradan anlamıyla duygusal bir alan değildir; insanın varlıkla, anlamla ve hakikatle ilişkisini mümkün kılan daha derin bir zemin olarak ele alınır. Bu yüzden Koç'ta akıl ile gönül arasında basit bir karşıtlık kurulmaz; insanın hakikat tecrübesinin farklı boyutları yeniden düşünülür.

## Kelam ile logos arasında açılan alan

Koç'un özgün felsefe dilinin en belirgin örneği, **kelam** ile **logos** arasında kurduğu ayrımdır.

Logos, Grek düşüncesinden itibaren akıl, söz, düzen ve anlam gibi katmanları birlikte taşımıştır. Koç bunun karşısına, Anadolu ve Türk-İslam düşünce dünyasının tarihsel tecrübesinden beslenen kelam kavramını yerleştirir.

Bu, iki kelimeyi karşılaştırmak değildir. Asıl iddia şudur: **Dünyayı hangi kavramsal dille düşündüğümüz, dünyayı nasıl gördüğümüzü de belirler.**

Türkçe bu çerçevede basit bir iletişim aracı olmaktan çıkar. Taşıdığı tarihsel, kültürel ve düşünsel birikim, felsefi kavramların yeniden kurulabileceği bir imkân alanı olarak değerlendirilir.

## Klasik problemleri başka bir zeminden sormak

Koç'un katkısı yalnızca "yerli kavramlar" üretmesinde aranamaz. Daha önemlisi, felsefenin klasik problemlerini farklı bir kavramsal zeminde yeniden ele almasıdır.

Varlık nedir? İnsan nedir? Bilgi nasıl mümkündür? Şuurun kaynağı nedir? Zihin ile varlık arasındaki ilişki nasıl kurulur? Hakikat nedir? Özgürlük mümkün müdür? Dil ile varlık arasında nasıl bir bağ vardır?

Bunlar hem Batı felsefesinin hem Türk-İslam düşüncesinin yüzyıllardır üzerinde durduğu sorulardır. Koç'un farkı, bu soruları yalnızca Descartes, Kant, Hegel, Husserl ya da Heidegger'in kavram dünyasından yanıtlamaya çalışmamasıdır.

Yaklaşım şu düşünceye dayanır: Aynı probleme başka bir dilin içinden bakıldığında başka açılımlar ortaya çıkabilir.

## Nazariyat: bir külliyat

Koç'un eserlerinin önemli bölümü tek bir projenin katmanları olarak okunabilir. *Theologia'nın Esasları*, *Theographia'nın Esasları*, *Nazari Mantık'ın Esasları*, *Diyalektik ve Nazariyat*, *Zihin ve Nazariyat*, *Şuur ve Nazariyat*, *Fenomenoloji ve Nazariyat* ve *Tarih ve Nazariyat* gibi çalışmalarda mantık, metafizik, teoloji, zihin, şuur, fenomenoloji ve tarih kendi geliştirdiği kavramsal çerçeve içinde ele alınır.

Bu külliyat birlikte düşünüldüğünde ortaya çıkan tablo, Batı felsefesinin belirli problemlerine cevap veren münferit bir düşünür değil; kendi kavramlarını ve yöntemini inşa etmeye çalışan sistematik bir düşünce projesidir.

## Kolay bir okuma değil

Koç'un dili yer yer yoğun, teknik ve alışılmadıktır. Bu güçlük tesadüf değil; felsefesinin temel iddiasıyla ilgilidir: **Yeni bir düşünce kurmak, çoğu zaman yeni bir düşünme dili kurmayı gerektirir.**

Son yıllarda onun düşüncesini metafizik, zihin felsefesi, dil felsefesi, Türk-İslam düşüncesi ve eğitim felsefesi açısından inceleyen akademik çalışmaların arttığı görülüyor.

## Asıl soru

Koç'un felsefesini değerlendirirken doğru soru belki de "Batı felsefesine alternatif bir felsefe kurdu mu?" değil; **"Türkçenin felsefe yapma imkânlarını ne ölçüde genişletti?"** sorusudur.

Çünkü yaptığı, büyük problemleri terk etmek değil; onlara başka bir kavramsal ufuktan bakmaktır. Böylece varlık, insan, zihin, şuur, hakikat, bilgi ve özgürlük gibi evrensel problemler, gelenekten beslenen yeni bir Türkçe içinde yeniden açılır.

Bu teşebbüsün başarısı ya da sınırları elbette felsefe tarihçilerinin ve gelecek kuşakların değerlendirmesine açık. Fakat ortaya konan külliyat, Türkçede özgün ve sistematik bir felsefe dili kurulabileceği iddiasını yalnızca ileri sürmekle kalmıyor; eserler aracılığıyla fiilen sınıyor.

Ve tam bu nedenle Yalçın Koç, çağdaş Türk düşüncesinde yalnızca okunması gereken bir filozof değil; Türkçede felsefe yapmanın imkânlarını yeniden düşünmemizi sağlayan bir düşünce hadisesi olarak değerlendirilmeyi hak ediyor.`,
  },
  {
    title: "John Searle'ün ardından: Çin Odası bugün ne söylüyor?",
    slug: "john-searle-cin-odasi-mirasi",
    summary: "Dil ve zihin felsefesinin en tartışılan isimlerinden John Searle 17 Eylül 2025'te 93 yaşında öldü. Yapay zekâ tartışmasının merkezindeki düşünce deneyi hâlâ onun.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/John_searle2.jpg?width=1600",
    imageCredit: "John Searle · Wikimedia Commons",
    featured: true,
    seoTitle: "John Searle (1932–2025) ve Çin Odası argümanı",
    metaDescription: "John Searle 17 Eylül 2025'te öldü. Çin Odası düşünce deneyi, söz edimleri kuramı ve yapay zekâ tartışmasındaki yeri.",
    contentType: "ANALIZ",
    sourceName: "Britannica · Daily Nous",
    sourceUrl: "https://www.britannica.com/biography/John-Searle",
    publishedAt: "2026-08-21T05:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["vefat", "zihin-felsefesi", "yapay-zeka", "bilinc"],
    philosopherSlugs: [],
    sources: [
      { title: "John Searle | Biography, Philosophy, & Facts", publisher: "Britannica", url: "https://www.britannica.com/biography/John-Searle", primary: true },
      { title: "John Searle (1932-2025)", publisher: "Daily Nous", date: "28 Eylül 2025", url: "https://dailynous.com/2025/09/28/john-searle-1932-2025/" },
      { title: "Former UC Berkeley professor John Searle dies, leaves complicated legacy", publisher: "The Daily Californian", date: "16 Ağustos 2026", url: "https://www.dailycal.org/news/obituary-news/former-uc-berkeley-professor-john-searle-dies-leaves-complicated-legacy/article_6132904a-9d96-4bb7-abff-27988d169a7a.html" },
    ],
    content: `Amerikalı filozof John Searle, 17 Eylül 2025'te Florida'nın Safety Harbor kentinde 93 yaşında öldü. 1932'de Denver'da doğmuş, 1959'dan itibaren California Üniversitesi Berkeley'de ders vermişti.

Berkeley'nin öğrenci gazetesi bu ağustos ayında yayımladığı değerlendirmede mirasını "karmaşık" diye niteledi: dil ve zihin felsefesine yaptığı geniş kabul gören katkılar ile kariyerinin sonunda karşılaştığı ciddi suçlamalar aynı cümlede anılıyor.

Bir haber sitesi için bu iki tarafı da kaydetmek gerekir. Aşağıda, düşüncesinin bugün yapay zekâ tartışmasında neden hâlâ merkezde olduğunu ele alıyoruz.

## Söz edimleri

Searle'ün ilk büyük katkısı dil felsefesindedir. J. L. Austin'in başlattığı çizgiyi sistemleştirdiği *Speech Acts* (1969), dili yalnızca dünyayı betimleyen bir araç saymayı bırakır.

Temel gözlem şudur: Konuşmak bir **eylemde bulunmaktır**. "Söz veriyorum" dediğinizde bir olguyu bildirmiyorsunuz; bir yükümlülük kuruyorsunuz. "Bu toplantıyı açıyorum" cümlesi toplantının açık olduğunu anlatmaz, onu açar.

Searle bu edimleri sınıflandırdı ve her birinin geçerli sayılması için hangi koşulların sağlanması gerektiğini ayrıntılandırdı. Bu çerçeve dilbilimden hukuka, yapay zekâ tasarımından iletişim kuramına kadar geniş bir alanda kullanılıyor.

## Çin Odası

Searle'ün adını felsefe dışına taşıyan şey ise 1980 tarihli bir düşünce deneyidir.

Bir odada, Çince bilmeyen bir kişi düşünün. Dışarıdan Çince karakterler içeren kâğıtlar giriyor. Elindeki kalın kural kitabı, hangi karaktere hangi karakterle karşılık verileceğini söylüyor. Kişi kuralları uyguluyor, kâğıtları dışarı veriyor.

Dışarıdaki Çince konuşan biri için oda mükemmel Çince biliyor. Ama içerideki kişi tek kelime Çince anlamıyor.

Searle'ün çıkardığı sonuç şuydu: **Sembolleri kurala göre işlemek, anlamayı doğurmaz.** Sözdizimi tek başına anlam üretmez. Dolayısıyla bir bilgisayar, program çalıştırmakla — ne kadar iyi çalıştırırsa çalıştırsın — anlamaya ulaşmaz.

## İtirazlar

Argüman yayımlandığı andan itibaren yoğun biçimde tartışıldı. Başlıca karşı çıkışlar şunlardır:

**Sistem yanıtı.** Odadaki kişi Çince anlamıyor olabilir; ama anlayan zaten o kişi değil, kişi-kitap-oda bütünüdür. Searle bu itirazı, kişinin bütün kuralları ezberlediği bir varyantla yanıtladı: O zaman sistem de kişinin içindedir ve yine anlamıyordur.

**Robot yanıtı.** Odaya duyu organları ve bedensel eylem eklenirse, semboller dünyaya bağlanır ve anlam doğar.

**Beyin benzeşimi yanıtı.** Program, nöron nöron beynin işleyişini taklit ediyorsa, beyin de anlıyorsa o da anlar.

Searle bu yanıtların hepsine ayrıntılı karşılıklar yazdı. Tartışma bugün kapanmış değil.

## Bugünkü yeri

Büyük dil modellerinin yaygınlaşmasıyla Çin Odası yeniden gündeme geldi — hem savunanlar hem karşı çıkanlar için.

Argümanı güçlü bulanlar, modellerin devasa istatistiksel örüntü eşleştirmesi yaptığını, buradan anlamın çıkmayacağını söylüyor. Karşı görüştekiler ise "anlama"nın ne olduğunu davranıştan bağımsız tanımlamanın mümkün olmadığını, dolayısıyla argümanın soruyu baştan varsaydığını savunuyor.

Sitemizde daha önce aktardığımız gibi, David Chalmers'ın 2026'da yayımlanan çalışması bu ikilemin ortasından geçmeyi deniyor: Bir dil modeline "yarı-inanç" ve "yarı-arzu" atfederek, ruh tartışmasına girmeden zihinsel yaşamından söz edebilmeyi öneriyor.

Hangi taraf haklı olursa olsun, tartışmanın kurulduğu zemin hâlâ 1980'de Berkeley'de yazılmış bir makaleye ait.

---

*Not: Searle'e yöneltilen taciz suçlamaları ve üniversitenin buna ilişkin süreci, yukarıda anılan Berkeley kaynağında ayrıntılı biçimde yer alıyor.*`,
  },
  {
    title: "2026 Rolf Schock Mantık ve Felsefe Ödülü Bas van Fraassen'in",
    slug: "rolf-schock-odulu-2026-bas-van-fraassen",
    summary: "İsveç Kraliyet Bilimler Akademisi, bilim felsefesindeki 'yapıcı ampirizm' yaklaşımıyla tanınan Princeton'lı filozofu ödüle değer gördü. Ödül 600 bin İsveç kronu.",
    coverImage: "/kapak/van-fraassen.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "2026 Rolf Schock Ödülü: Bas van Fraassen",
    metaDescription: "Bas van Fraassen 2026 Rolf Schock Mantık ve Felsefe Ödülü'nü kazandı. Yapıcı ampirizm ve bilimsel gerçekçilik tartışması.",
    contentType: "HABER",
    sourceName: "Daily Nous · Kungl. Vetenskapsakademien",
    sourceUrl: "https://dailynous.com/2026/01/21/bas-van-fraassen-wins-schock-prize/",
    publishedAt: "2026-08-21T05:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "bilim-felsefesi", "epistemoloji", "mantik"],
    philosopherSlugs: [],
    sources: [
      { title: "Bas van Fraassen Wins Schock Prize", publisher: "Daily Nous", date: "21 Ocak 2026", url: "https://dailynous.com/2026/01/21/bas-van-fraassen-wins-schock-prize/", primary: true },
      { title: "Rolf Schock Prizes", publisher: "Kungl. Vetenskapsakademien", url: "https://www.kva.se/en/prizes/rolf-schock-prizes/" },
      { title: "The Rolf Schock Prize Symposium in Logic and Philosophy 2026", publisher: "Kungl. Vetenskapsakademien", url: "https://www.konstakademien.se/en/rolfschockprisen/" },
    ],
    content: `Mantık ve felsefe alanının en yüksek ödüllerinden biri sayılan Rolf Schock Ödülü'nün 2026 sahibi belli oldu: Princeton Üniversitesi'nden emekli felsefe profesörü **Bastiaan "Bas" van Fraassen**.

Gerekçede, van Fraassen'in "mantıksal ampirizmin ötesine kararlı biçimde geçen, çağdaş bilim felsefesini derinden etkileyen ve bilimsel gerçekçilik tartışmasını biçimlendiren ikna edici bir ampirist yaklaşım geliştirmesi" gösterildi.

Ödül 600 bin İsveç kronu (yaklaşık 66 bin ABD doları) değerinde.

## Yapıcı ampirizm nedir?

Van Fraassen'in 1980 tarihli *The Scientific Image* kitabı, bilim felsefesinde bir dönemi kapattı, bir başkasını açtı.

O tarihe kadar tartışma iki uç arasında sıkışmıştı. **Gerçekçiler**, başarılı bilimsel kuramların doğru olduğunu ve elektronlar gibi gözlenemeyen varlıkların gerçekten var olduğunu savunuyordu. **Mantıksal ampiristler** ise gözlenemeyenlerden söz eden ifadelerin anlamsız ya da kısaltma olduğunu ileri sürüyordu.

Van Fraassen üçüncü bir yol önerdi. Ona göre bilimsel kuramlar **anlamlıdır** — elektron dediğimizde gerçekten elektron kastediyoruzdur, kısaltma yapmıyoruzdur. Ama bir kuramı kabul etmek, onun doğru olduğuna inanmak zorunda değildir.

Bilimin amacı, ona göre doğruluk değil **ampirik yeterlilik**tir: Kuramın gözlenebilir olgular hakkında söyledikleri doğru olsun, yeter. Gözlenemeyenler hakkındaki iddialar konusunda ise inanç askıya alınabilir.

Bu konuma **yapıcı ampirizm** (constructive empiricism) adı verildi.

## Neden önemli?

Van Fraassen'in hamlesi, "bilime güvenmek" ile "bilimin her söylediğinin gerçek olduğuna inanmak" arasına bir ayrım koyar. Bilim insanı kuramı kullanır, geliştirir, ona dayanarak köprü kurar — ama kuramın betimlediği görünmez dünyanın aynen öyle olduğuna inanmak zorunda değildir.

Eleştirmenler bu ayrımın sürdürülemez olduğunu söyler: Gözlenebilir ile gözlenemeyen arasındaki sınır keyfîdir; çıplak gözle görülen ile mikroskopla görülen arasında ilkesel bir fark yoktur.

Tartışma sürüyor. Sitemizde daha önce aktardığımız helyum örneği — 1868'de gökyüzünde, yıllar sonra yeryüzünde bulunan element — tam da bu tartışmanın ders kitabı örneklerinden biridir.

## Rolf Schock Ödülleri

Ödüller, 1986'da ölen İsveçli filozof ve sanatçı Rolf Schock'un vasiyetiyle kuruldu. Dört dalda veriliyor: mantık ve felsefe, matematik, görsel sanatlar ve müzik. Mantık ve felsefe dalını daha önce Willard Van Orman Quine, Saul Kripke, Thomas Nagel, Derek Parfit ve Ruth Millikan gibi isimler almıştı.`,
  },
  {
    title: "Philosophy dergisi 100 yaşında: Bernard Williams için özel sayı",
    slug: "philosophy-dergisi-100-yil-bernard-williams",
    summary: "Yayın hayatının yüzüncü yılını dolduran dergi, çeyrek asır önce yayımladığı bir makaleye dönüyor: Bernard Williams'ın 'Felsefe İnsani Bir Disiplin Olarak' metni.",
    coverImage: "/kapak/philosophy-dergisi.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "Philosophy dergisi 100 yaşında — Bernard Williams özel sayısı",
    metaDescription: "Philosophy dergisi yüzüncü yılını Bernard Williams'ın 'Philosophy as a Humanistic Discipline' makalesine ayrılan özel sayıyla kutluyor.",
    contentType: "HABER",
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/18/mini-heap-724/",
    publishedAt: "2026-08-21T04:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["dergi", "akademi", "kavram"],
    philosopherSlugs: [],
    sources: [
      { title: "Mini-Heap 724", publisher: "Daily Nous", date: "18 Ağustos 2026", url: "https://dailynous.com/2026/08/18/mini-heap-724/", primary: true },
    ],
    content: `İngiltere merkezli *Philosophy* dergisi yayın hayatının yüzüncü yılını dolduruyor. Dergi, yıldönümünü çeyrek asır önce kendi sayfalarında yayımlanan bir makaleye ayırdığı özel sayıyla işaretliyor: Bernard Williams'ın **"Philosophy as a Humanistic Discipline"** metni.

## Williams'ın sorusu

Williams'ın makalesi kısa ama iddialıdır. Sorduğu şey şudur: Felsefe bir bilim midir?

Yirminci yüzyılın büyük bölümünde analitik felsefenin örtük modeli bilimdi. Felsefe de tıpkı fizik gibi ilerleyen, sorunları çözen, sonuçları birikimli olarak biriken bir disiplin olarak tasavvur ediliyordu.

Williams bu modele itiraz eder. Ona göre felsefe, bilimden çok **tarih** ve **beşerî bilimler** ile aynı ailedendir. Nedeni de şudur: Felsefi kavramlarımız — özgürlük, sorumluluk, adalet, benlik — tarihsel olarak oluşmuştur. Onları anlamak, nasıl oluştuklarını anlamayı gerektirir.

Bilimde geçmiş, çoğu zaman aşılmış bir aşamadır; kimse bugünkü fiziği anlamak için Aristoteles okumak zorunda değildir. Felsefede ise Platon hâlâ muhataptır.

## "Bilimcilik" eleştirisi

Williams'ın bu tutumu, felsefeyi bilime öykünmeye çağıran yaklaşımlara karşı bir uyarıdır. Ona göre felsefe bilimi taklit ettiğinde iki şey birden kaybeder: hem bilim kadar kesin olamaz, hem de kendi asıl işini — insanın kendini anlama çabasına katkı yapmayı — bırakmış olur.

Bu tartışma bugün de sürüyor. Deneysel felsefe, doğallaştırılmış epistemoloji ve bilişsel bilimle iç içe çalışan zihin felsefesi bir yanda; kavram tarihine, edebiyata ve fenomenolojiye yaslanan yaklaşımlar diğer yanda.

## Yüz yıllık dergi

*Philosophy*, 1925'ten beri yayımlanıyor ve İngilizce felsefe dergilerinin en eskilerinden biri. Uzmanlık dergilerinin çoğaldığı bir dönemde, genel felsefe okuruna seslenmeyi sürdüren az sayıdaki yayından.

Yüzüncü yılını, kendi geçmişindeki bir metne dönerek kutlaması da bu çizgiyle uyumlu görünüyor: Williams'ın söylediği gibi, felsefede geçmiş aşılmaz, yeniden okunur.`,
  },
  {
    title: "Sonbahar 2026 felsefe kitapları: algoritma, etik ve yeni bir Zerdüşt çevirisi",
    slug: "sonbahar-2026-felsefe-kitaplari",
    summary: "Üniversite yayınlarının eylül-ekim programı belli oldu. Philippe Huneman'ın profilleme eleştirisi, Stephen Batchelor'ın Buda-Sokrates karşılaştırması ve Stanford'un Nietzsche cildi öne çıkıyor.",
    coverImage: "/kapak/sonbahar-kitaplar.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "Sonbahar 2026'da çıkacak felsefe kitapları",
    metaDescription: "Eylül-Ekim 2026 felsefe kitapları: Profiling, Buddha Socrates and Us, Stanford Nietzsche cildi ve eleştirel eğitim felsefesi derlemesi.",
    contentType: "HABER",
    sourceName: "University Press Alert",
    sourceUrl: "https://www.unipressalert.com/index.php?category=Philosophy",
    publishedAt: "2026-08-21T04:00:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "yapay-zeka", "etik", "nietzsche"],
    philosopherSlugs: [],
    sources: [
      { title: "New Philosophy books — August 2026", publisher: "University Press Alert", url: "https://www.unipressalert.com/index.php?category=Philosophy", primary: true },
    ],
    content: `Üniversite yayınlarının sonbahar programında dikkat çeken felsefe başlıkları belli oldu. Öne çıkan dört kitap, alanın bugünkü gündemini de özetliyor.

## Profiling — Philippe Huneman

Stanford University Press'ten çıkan *Profiling: How Predictive Algorithms Shape Identity and the Social Fabric*, öngörücü algoritmaların kimliği ve toplumsal dokuyu nasıl biçimlendirdiğini ele alıyor.

Konu, sitemizin düzenli olarak izlediği bir hattın devamı: Bir algoritma sizi "şu davranışı gösterme olasılığı yüksek kişi" diye sınıflandırdığında, yalnızca bir tahmin yapmıyor. O sınıflandırma kredinizi, sigortanızı, iş başvurunuzu ve bazen özgürlüğünüzü etkiliyor. Tahmin, kendi kendini gerçekleştiren bir kategoriye dönüşebiliyor.

Felsefi soru şu: İstatistiksel bir örüntüye dayanarak bir bireye muamele etmek ne zaman meşrudur?

## Buddha, Socrates, and Us — Stephen Batchelor

Yale University Press'ten çıkan *Buddha, Socrates, and Us: Ethical Living in Uncertain Times*, iki geleneği yan yana koyuyor.

Batchelor'ın ilgi çekici tercihi, Buda ile Sokrates'i doktrin benzerlikleri üzerinden değil, **yöntem** üzerinden karşılaştırması. İkisi de kitap yazmadı, ikisi de karşısındakini sorgulayarak ilerledi, ikisi de hazır bir öğreti aktarmak yerine bir pratik önerdi.

## Thus Spoke Zarathustra — yeni Stanford çevirisi

Stanford University Press'in Nietzsche külliyatı dizisinin yedinci cildi, *Böyle Söyledi Zerdüşt*'ün Paul S. Loeb ve David F. Tinsley tarafından yapılan yeni İngilizce çevirisini içeriyor.

Nietzsche çevirisi kendi başına felsefi bir mesele: Metnin şiirsel yoğunluğu, kelime oyunları ve İncil'e yaptığı üslup göndermeleri, her çeviriyi aynı zamanda bir yorum hâline getiriyor.

## Eleştirel teori ve eğitim felsefesi

Columbia University Press'ten çıkan *Critical Theory and the Philosophy of Education: Normativity, Social Pathologies, and Educational Justice* derlemesi, Tobias Lensch ve Krassimir Stojanov editörlüğünde hazırlandı. Frankfurt Okulu geleneğini eğitim adaleti tartışmasına bağlıyor.

---

*Bu kitapların Türkçe çevirileri için henüz bir duyuru yapılmadı. Yayınevlerinden gelen bilgileri Yeni Kitaplar bölümünde paylaşıyoruz.*`,
  },
  {
    title: "XVI. Mantık Çalıştayı Kars'ta toplandı",
    slug: "xvi-mantik-calistayi-kars-2026",
    summary: "Atatürk Kültür Merkezi Başkanlığı ile Mantık Derneği iş birliğinde düzenlenen çalıştay, 21-23 Mayıs 2026'da Kafkas Üniversitesi ev sahipliğinde yapıldı.",
    coverImage: "/kapak/mantik-calistayi.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "XVI. Mantık Çalıştayı Kars'ta düzenlendi",
    metaDescription: "XVI. Mantık Çalıştayı 21-23 Mayıs 2026'da Kafkas Üniversitesi ev sahipliğinde Kars'ta yapıldı.",
    contentType: "HABER",
    sourceName: "Atatürk Kültür Merkezi Başkanlığı",
    sourceUrl: "https://akmb.gov.tr/uncategorized-tr/baskanligimiz-ve-mantik-dernegi-is-birligi-ile-xvi-mantik-calistayi-21-23-mayis-tarihlerinde-kafkas-universitesi-ev-sahipliginde-karsta-duzenlenecek/",
    publishedAt: "2026-08-21T03:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["mantik", "akademi", "konferans", "sempozyum"],
    philosopherSlugs: [],
    sources: [
      { title: "Başkanlığımız ve Mantık Derneği iş birliği ile XVI. Mantık Çalıştayı 21-23 Mayıs tarihlerinde Kafkas Üniversitesi ev sahipliğinde Kars'ta düzenlenecek", publisher: "Atatürk Kültür Merkezi Başkanlığı", date: "20 Mayıs 2026", url: "https://akmb.gov.tr/uncategorized-tr/baskanligimiz-ve-mantik-dernegi-is-birligi-ile-xvi-mantik-calistayi-21-23-mayis-tarihlerinde-kafkas-universitesi-ev-sahipliginde-karsta-duzenlenecek/", primary: true },
    ],
    content: `Türkiye'de mantık alanının en köklü buluşmalarından **Mantık Çalıştayı**, on altıncı kez toplandı. 21-23 Mayıs 2026'da Kars'ta, Kafkas Üniversitesi ev sahipliğinde düzenlenen çalıştay, Atatürk Kültür Merkezi Başkanlığı ile Mantık Derneği iş birliğinde gerçekleştirildi.

## Neden önemli?

Mantık, Türkiye'de felsefe bölümlerinin en eski ve en sürekli çalışma alanlarından biri. Osmanlı medreselerinden gelen mantık geleneği ile modern sembolik mantık arasındaki ilişki, alanın kendine özgü bir tartışma başlığı olarak sürüyor.

Çalıştay dizisi, bu iki damarı bir araya getiren az sayıdaki düzenli buluşmadan biri. Klasik mantık tarihi üzerine çalışan araştırmacılarla, matematiksel mantık ve hesaplama kuramı alanında çalışanlar aynı programda yer alıyor.

## Ankara dışına çıkmak

Çalıştayın her yıl farklı bir üniversitede toplanması da dikkat çekici bir tercih. Akademik etkinliklerin büyük ölçüde Ankara-İstanbul-İzmir hattında yoğunlaştığı bir ortamda, Kars gibi bir merkezde toplanmak, alanın taşra üniversitelerindeki bölümlerle temasını da güçlendiriyor.

---

*Türkiye'deki felsefe etkinliklerini Konferanslar bölümünde izliyoruz. Duyurusunu iletmek isteyen kurumlar iletişim sayfasından bize yazabilir.*`,
  },
  {
    title: "AKM'den e-kitap: 'Türklerde Bilim ve Düşünce / 7 Bilge 7 Bölge'",
    slug: "akm-turklerde-bilim-ve-dusunce-7-bilge",
    summary: "Atatürk Kültür Merkezi Başkanlığı, Türk düşünce ve bilim tarihinden yedi ismi ele alan çalışmayı ücretsiz e-kitap olarak yayımladı.",
    coverImage: "/kapak/yedi-bilge.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "Türklerde Bilim ve Düşünce / 7 Bilge 7 Bölge e-kitabı yayımlandı",
    metaDescription: "AKM Başkanlığı'nın 'Türklerde Bilim ve Düşünce / 7 Bilge 7 Bölge' e-kitabı ücretsiz erişime açıldı.",
    contentType: "HABER",
    sourceName: "Atatürk Kültür Merkezi Başkanlığı",
    sourceUrl: "https://akmb.gov.tr/manset/turklerde-bilim-ve-dusunce-7-bilge-7-bolge-e-kitabi-yayimlandi/",
    publishedAt: "2026-08-21T03:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["yeni-kitap", "acik-erisim", "islam-felsefesi", "tarih"],
    philosopherSlugs: [],
    sources: [
      { title: "Türklerde Bilim ve Düşünce / 7 Bilge 7 Bölge E-Kitabı Yayımlandı", publisher: "Atatürk Kültür Merkezi Başkanlığı", date: "8 Nisan 2026", url: "https://akmb.gov.tr/manset/turklerde-bilim-ve-dusunce-7-bilge-7-bolge-e-kitabi-yayimlandi/", primary: true },
    ],
    content: `Atatürk Kültür Merkezi Başkanlığı, *Türklerde Bilim ve Düşünce / 7 Bilge 7 Bölge* başlıklı çalışmayı e-kitap olarak yayımladı. Kitaba kurumun internet sitesindeki e-yayınlar bölümünden ücretsiz erişilebiliyor.

## Neden dikkate değer?

Türkçede felsefe ve bilim tarihi alanındaki temel kaynakların önemli bölümü ya baskısı tükenmiş kitaplarda ya da erişimi ücretli akademik veri tabanlarında kalıyor. Kamu kurumlarının e-yayın programları bu açığı kapatan az sayıdaki kanaldan biri.

Açık erişim, sitemizin izlediği bir başlık. Daha önce Münih'teki Matematiksel Felsefe Merkezi'nin kurduğu ve yazardan da okurdan da ücret almayan *Journal of Mathematical Philosophy* dergisini aktarmıştık. Aynı eğilimin Türkiye'deki karşılığı, kurumsal e-kitap arşivleri.

## Kurumun diğer felsefe yayınları

AKM Başkanlığı'nın yayın programında felsefe ve düşünce tarihi başlıkları düzenli olarak yer alıyor. Kurum ayrıca *Erdem* dergisini çıkarıyor ve Türkiye Felsefe Kurumu ile Mantık Derneği gibi kuruluşlarla ortak etkinlikler düzenliyor.

---

*Kurumların ücretsiz erişime açtığı felsefe yayınlarını izliyoruz; duyurularınızı iletişim sayfasından iletebilirsiniz.*`,
  },
  {
    title: "Felsefe bölümlerinde çalışma koşulları anketi başlatıldı",
    slug: "akademik-felsefe-calisma-kosullari-anketi",
    summary: "Daily Nous'ta duyurulan anket, farklı ülke ve üniversitelerdeki koşullar hakkında güvenilir bilgi bulunmadığı için lisansüstü ve iş başvurularında zorlanan akademisyenlere veri sağlamayı amaçlıyor.",
    coverImage: "/kapak/calisma-anketi.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    seoTitle: "Akademik felsefede çalışma koşulları anketi",
    metaDescription: "Daily Nous'ta duyurulan anket, felsefe bölümlerindeki yerel koşullar hakkında karşılaştırılabilir veri toplamayı amaçlıyor.",
    contentType: "HABER",
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/20/academic-philosophy-and-trans-identity-survey-guest-post/",
    publishedAt: "2026-08-21T02:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["akademi", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      { title: "Academic Philosophy and Trans Identity Survey (guest post)", publisher: "Daily Nous", date: "20 Ağustos 2026", url: "https://dailynous.com/2026/08/20/academic-philosophy-and-trans-identity-survey-guest-post/", primary: true },
    ],
    content: `Felsefe alanının en çok okunan meslek sitelerinden Daily Nous'ta 20 Ağustos'ta duyurulan bir anket, akademik felsefede çalışma koşulları üzerine veri toplamayı amaçlıyor.

## Anketin gerekçesi

Duyuruyu yapan araştırmacılara göre sorun bilgi eksikliği: Trans ve non-binary akademisyenler, hangi ülkede ya da hangi üniversitede lisansüstü eğitim veya iş başvurusu yapacaklarına karar verirken, oradaki fiilî koşullar hakkında güvenilir bilgiye ulaşamıyor. Anket, bu boşluğu karşılaştırılabilir verilerle doldurmayı hedefliyor.

## Epistemik bir mesele olarak

Haberin felsefe açısından ilgi çekici tarafı, doğrudan alanın kendi kavramlarıyla ilgili olması.

Miranda Fricker'ın *epistemik adaletsizlik* çerçevesi tam bu tür durumları tarif eder. **Yorumsal adaletsizlik**, bir grubun kendi deneyimini adlandıracak ortak kavramlardan yoksun bırakılmasıdır. Buna yakın bir başka durum da bilginin dağılımındaki eşitsizliktir: Bir karar vermek için gereken bilgi bazı gruplar için mevcutken bazıları için değildir.

Kariyer kararları bunun somut örneğidir. Bir bölümün "nasıl bir yer olduğu" çoğu zaman resmî belgelerde değil, gayriresmî ağlarda dolaşır. O ağların dışında kalan, aynı kararı daha az bilgiyle vermek zorunda kalır.

Anketin yöntemi de bu mantığa dayanıyor: Dağınık ve kişisel bilgiyi toplanabilir ve karşılaştırılabilir hâle getirmek.

## Alandaki tartışma

Felsefe camiasında bu konu uzun süredir tartışılıyor ve alan bu tartışmada bölünmüş durumda. Sitemiz, taraflardan birinin konumunu benimsemeksizin, mesleki bir ölçüm girişimi olarak haberi aktarmaktadır.

---

*Yayın ilkelerimiz gereği tartışmalı konularda farklı görüşlere yer vermeye çalışıyoruz. Görüş ve düzeltmelerinizi iletişim sayfasından iletebilirsiniz.*`,
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
  {
    title: "Kant Machine",
    slug: "kant-machine",
    originalTitle: null,
    publisher: "Bloomsbury",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Yuk Hui, Kant'ın aşkınsal idealizmini yapay zekâ ve robotik tartışmasının merkezine taşıyor: Neye akıllı makine denir, makineler ahlaklı olabilir mi, ebedi barış için bir algoritma var mıdır?",
    year: 2026,
    link: "https://www.eur.nl/en/esphil/news/yuk-hui-publishes-new-book-kant-machine",
    philosopherSlug: "yuk-hui",
    postSlug: "yuk-hui-kant-machine",
  },
  {
    title: "Signs from the Future",
    slug: "signs-from-the-future",
    originalTitle: null,
    publisher: "Bloomsbury",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Slavoj Žižek'in denemelerini tematik ciltlerde toplayan Žižek's Essays dizisinin yeni kitabı. 29 Ekim 2026'da yayımlanıyor.",
    year: 2026,
    link: "https://www.amazon.com/Signs-Future-%C5%BDi%C5%BEeks-Essays-Slavoj/dp/1350648442",
    philosopherSlug: "slavoj-zizek",
    postSlug: "zizek-liberal-fascism-signs-from-the-future",
  },
  {
    title: "Erdem Peşinde",
    slug: "erdem-pesinde",
    originalTitle: "After Virtue: A Study in Moral Theory",
    publisher: null,
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Alasdair MacIntyre'ın 1981 tarihli kitabı, modern ahlak dilinin dağıldığını savunur ve Aristotelesçi erdem etiğini yeniden gündeme getirir. Yirminci yüzyıl ahlak felsefesinin dönüm noktalarından biri sayılıyor.",
    year: 1981,
    link: null,
    philosopherSlug: "alasdair-macintyre",
    postSlug: "alasdair-macintyre-mirasi-erdem-etigi",
  },
  {
    title: "Kamusallığın Yapısal Dönüşümü",
    slug: "kamusalligin-yapisal-donusumu",
    originalTitle: "Strukturwandel der Öffentlichkeit",
    publisher: null,
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Jürgen Habermas'ın 1962 tarihli doçentlik çalışması. Kahvehanelerden gazetelere uzanan burjuva kamusal alanının doğuşunu ve çözülüşünü izler; kavram bugün dijital medya tartışmalarında da kullanılıyor.",
    year: 1962,
    link: null,
    philosopherSlug: "jurgen-habermas",
    postSlug: "jurgen-habermas-1929-2026",
  },
  {
    title: "The Time of Thinking: The Le Thor Seminars with Heidegger (1966 and 1968)",
    slug: "the-time-of-thinking-le-thor",
    originalTitle: null,
    publisher: "University of Chicago Press",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Giorgio Agamben'in, Heidegger'in Provence'taki Le Thor seminerlerinde (1966 ve 1968) tuttuğu notlar. Genç Agamben'in düşüncesinin kuruluşunu gösteren birincil bir belge.",
    year: 2026,
    link: "https://press.uchicago.edu/ucp/books/book/distributed/T/bo281230666.html",
    philosopherSlug: "giorgio-agamben",
    postSlug: "agamben-le-thor-seminerleri-heidegger",
  },
  {
    title: "The Continent Without Qualities: Bookmarks in the Book of Europe",
    slug: "the-continent-without-qualities",
    originalTitle: null,
    publisher: "Polity",
    translator: "Robert Hughes (İngilizce çeviri)",
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Peter Sloterdijk'in Avrupa üzerine denemeleri. Başlık, Robert Musil'in 'Niteliksiz Adam' romanına gönderme yapıyor: kendini ne olarak tanımlayacağını bilemeyen bir kıta.",
    year: 2026,
    link: null,
    philosopherSlug: "peter-sloterdijk",
    postSlug: "sloterdijk-nitelikleri-olmayan-kita",
  },
  {
    title: "Captive Gods: Religion and the Rise of Social Science",
    slug: "captive-gods",
    originalTitle: null,
    publisher: "Yale University Press",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Kwame Anthony Appiah, sosyal bilimlerin doğuşu ile din arasındaki karşılıklı kuruluşu inceliyor: On dokuzuncu yüzyılda disiplinler kurulurken 'din' kavramının kendisi de yeniden biçimlendi.",
    year: 2026,
    link: "https://yalebooks.yale.edu/book/9780300233063/captive-gods/",
    philosopherSlug: "kwame-anthony-appiah",
    postSlug: "appiah-yale-fahri-doktora-captive-gods",
  },
  {
    title: "Profiling: How Predictive Algorithms Shape Identity and the Social Fabric",
    slug: "profiling-huneman",
    originalTitle: null,
    publisher: "Stanford University Press",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Philippe Huneman, öngörücü algoritmaların bireyi bir olasılık sınıfına yerleştirmesinin kimlik ve toplumsal doku üzerindeki etkisini inceliyor.",
    year: 2026,
    link: "https://www.unipressalert.com/index.php?category=Philosophy",
    philosopherSlug: null,
    postSlug: "sonbahar-2026-felsefe-kitaplari",
  },
  {
    title: "Buddha, Socrates, and Us: Ethical Living in Uncertain Times",
    slug: "buddha-socrates-and-us",
    originalTitle: null,
    publisher: "Yale University Press",
    translator: null,
    language: "İngilizce",
    isbn: null,
    coverImage: null,
    description:
      "Stephen Batchelor, Buda ile Sokrates'i doktrin benzerlikleri üzerinden değil yöntem üzerinden karşılaştırıyor: ikisi de kitap yazmadı, ikisi de sorgulayarak ilerledi.",
    year: 2026,
    link: "https://www.unipressalert.com/index.php?category=Philosophy",
    philosopherSlug: null,
    postSlug: "sonbahar-2026-felsefe-kitaplari",
  },
  {
    title: "Anadolu Mayası: Türk Kimliği Üzerine Bir İnceleme",
    slug: "anadolu-mayasi",
    originalTitle: null,
    publisher: "Cedit Neşriyat",
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Yalçın Koç'un nazariyat külliyatının kavramsal damarlarından biri. Türk kimliğini sosyolojik bir kategori olarak değil, 'maya' kavramı üzerinden ontolojik bir zeminde ele alıyor.",
    year: null,
    link: "http://ceditnesriyat.com.tr/index.php?product_id=69&route=product/product",
    philosopherSlug: "yalcin-koc",
    postSlug: "yalcin-koc-turkcede-felsefe-dili-anadolu-mayasi",
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
  {
    title: "Timothy Williamson Çin Felsefesiyle Karşılaşıyor",
    slug: "williamson-fudan-kongresi-2026",
    summary:
      "Fudan Üniversitesi'nde düzenlenen kongrede Çin felsefesi araştırmacıları Williamson'ın çalışmalarını eleştirel biçimde ele alacak; Williamson yanıt verecek.",
    description: `Şanghay'daki Fudan Üniversitesi, önce-bilgi epistemolojisinin kurucusu Timothy Williamson'ın çalışmalarına ayrılmış iki günlük bir kongre düzenliyor.

Programda, Çin felsefesi alanında çalışan akademisyenler Williamson'ın epistemoloji, metafizik ve felsefe yöntemi üzerine tezlerini kendi gelenekleri açısından değerlendirecek. Williamson her oturumun ardından yanıt verecek.

Kongre, analitik felsefe ile Çin felsefesi arasındaki temasın son yıllarda artışını gösteren örneklerden biri.`,
    kind: "KONGRE",
    organizer: "Fudan Üniversitesi",
    speakers: "Timothy Williamson",
    topic: "Epistemoloji, metafizik ve Çin felsefesi",
    format: "FIZIKSEL",
    startsAt: "2026-11-06T00:00:00.000Z",
    endsAt: "2026-11-07T00:00:00.000Z",
    hasTime: false,
    city: "Şanghay",
    country: "Çin",
    website: "https://philevents.org/event/show/144458",
    sourceName: "PhilEvents",
    sourceUrl: "https://philevents.org/event/show/144458",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
    featured: false,
    publishedAt: "2026-08-20T13:00:00.000Z",
  },
  {
    title: "41. Kyoto Ödülü Töreni",
    slug: "kyoto-odulu-toreni-2026",
    summary:
      "Inamori Vakfı'nın üç dalda verdiği Kyoto Ödülü'nün 41. tören programı. Sanat ve Felsefe dalının bu yılki sahibi Laurie Anderson.",
    description: `Kyoto Ödülü her yıl İleri Teknoloji, Temel Bilimler ile Sanat ve Felsefe dallarında veriliyor.

Ödül sahiplerine bir berat, 20 ayar altın madalya ve 100 milyon yen (600 bin ABD dolarının üzerinde) para ödülü sunuluyor.

Sanat ve Felsefe dalı geçmişte Jürgen Habermas (2004), Charles Taylor (2008) ve Martha Nussbaum (2016) gibi filozofları da onurlandırmıştı.`,
    kind: "KONFERANS",
    organizer: "Inamori Vakfı",
    speakers: "Laurie Anderson",
    topic: "Sanat ve Felsefe",
    format: "FIZIKSEL",
    startsAt: "2026-11-10T00:00:00.000Z",
    hasTime: false,
    country: "Japonya",
    website: "https://www.kyotoprize.org/en/",
    sourceName: "Inamori Vakfı",
    sourceUrl: "https://www.newswise.com/articles/inamori-foundation-announces-2026-kyoto-prize-laureates",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80",
    featured: false,
    publishedAt: "2026-08-20T13:00:00.000Z",
  },
  {
    title: "XVI. Mantık Çalıştayı",
    slug: "xvi-mantik-calistayi-2026",
    summary:
      "Atatürk Kültür Merkezi Başkanlığı ile Mantık Derneği iş birliğinde, Kafkas Üniversitesi ev sahipliğinde düzenlendi.",
    description: `Türkiye'de mantık alanının en köklü buluşmalarından Mantık Çalıştayı on altıncı kez toplandı.

Çalıştay dizisi, klasik mantık tarihi üzerine çalışan araştırmacılarla matematiksel mantık ve hesaplama kuramı alanında çalışanları aynı programda buluşturuyor.

Her yıl farklı bir üniversitede toplanması, alanın taşra üniversitelerindeki bölümlerle temasını güçlendiriyor.`,
    kind: "CALISTAY",
    organizer: "Atatürk Kültür Merkezi Başkanlığı · Mantık Derneği",
    topic: "Mantık",
    format: "FIZIKSEL",
    startsAt: "2026-05-21T00:00:00.000Z",
    endsAt: "2026-05-23T00:00:00.000Z",
    hasTime: false,
    city: "Kars",
    country: "Türkiye",
    venue: "Kafkas Üniversitesi",
    sourceName: "Atatürk Kültür Merkezi Başkanlığı",
    sourceUrl: "https://akmb.gov.tr/uncategorized-tr/baskanligimiz-ve-mantik-dernegi-is-birligi-ile-xvi-mantik-calistayi-21-23-mayis-tarihlerinde-kafkas-universitesi-ev-sahipliginde-karsta-duzenlenecek/",
    coverImage: "/kapak/mantik-calistayi.jpg",
    featured: false,
    publishedAt: "2026-08-21T03:30:00.000Z",
  },
];
