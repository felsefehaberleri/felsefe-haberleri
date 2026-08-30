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
  {
    name: "Friedrich Nietzsche",
    slug: "friedrich-nietzsche",
    headline: "Değerlerin soykütükçüsü — Basel Üniversitesi (1844–1900)",
    bio: "Ahlakı bir doğa gerçeği değil, tarihi olan bir kurum olarak ele alan filozof. Soykütük yöntemi, ressentiment ve güç istenci kavramlarıyla yirminci yüzyıl düşüncesinin yönünü belirledi.",
    avatar: null,
    country: "Almanya",
    birthYear: 1844,
    affiliation: "Basel Üniversitesi (1869-1879)",
    website: null,
    featured: false,
    listed: true,
    birthDate: "15 Ekim 1844",
    deathDate: "25 Ağustos 1900",
    alive: false,
    period: "19. yüzyıl",
    school: "Yaşam felsefesi, Perspektivizm",
    areas: "Ahlak felsefesi, Kültür eleştirisi, Estetik, Din felsefesi, Filoloji",
    majorWorks: "Tragedyanın Doğuşu (1872)\nBöyle Söyledi Zerdüşt (1883-1885)\nİyinin ve Kötünün Ötesinde (1886)\nAhlakın Soykütüğü Üstüne (1887)\nPutların Alacakaranlığı (1889)",
    keyConcepts: "Soykütük, Ressentiment, Efendi ve köle ahlakı, Güç istenci, Bengi dönüş, Nihilizm, Perspektivizm",
    influencedBy: "Schopenhauer, Heraklitos, Wagner (sonra kopuş), Antik Yunan trajedisi",
    influenced: "Heidegger, Foucault, Deleuze, Adorno, Derrida, Bernard Williams",
  },
  {
    name: "İoanna Kuçuradi",
    slug: "ioanna-kucuradi",
    headline: "Değer felsefesi ve insan hakları — Maltepe Üniversitesi",
    bio: "Hacettepe Üniversitesi Felsefe Bölümü'nün kurucusu. İnsan haklarını sözleşmelere ya da kültüre değil, insanın kendi olanaklarına dayandıran değer felsefesiyle tanınıyor. FISP'in ilk kadın başkanı; 1998'den beri UNESCO Felsefe ve İnsan Hakları Kürsüsü'nü yürütüyor.",
    avatar: null,
    country: "Türkiye",
    birthYear: 1936,
    affiliation: "Maltepe Üniversitesi · UNESCO Felsefe ve İnsan Hakları Kürsüsü",
    website: null,
    featured: true,
    listed: true,
    birthDate: "4 Ekim 1936",
    alive: true,
    period: "Çağdaş",
    school: "Değer felsefesi",
    areas: "Etik, İnsan hakları felsefesi, Felsefi antropoloji, Değer kuramı, Eğitim felsefesi",
    majorWorks: "İnsan Hakları: Kavramları ve Sorunları\nEtik\nUludağ Konuşmaları\nSanata Felsefeyle Bakmak\nNietzsche ve İnsan",
    keyConcepts: "Değerler ve değer yargıları ayrımı, İnsanın değeri, Etik ile ahlak ayrımı, Doğru değerlendirme",
    influencedBy: "Nicolai Hartmann, Max Scheler, Kant, Nietzsche",
    sources: "Prof. Dr. İoanna Kuçuradi — UNESCO Türkiye Millî Komisyonu — https://www.unesco.org.tr/Pages/1835/160/Prof.%20Dr.%20%C4%B0oanna%20KU%C3%87URAD%C4%B0\n28. Aydın Doğan Ödülü — https://aydindoganvakfi.org.tr/aydin-dogan-odulu/prof-dr-ioanna-kucuradi/",
  },
  {
    name: "Scott J. Shapiro",
    slug: "scott-shapiro",
    headline: "Hukuk felsefecisi — Yale Hukuk Fakültesi",
    bio: "Hukuku bir planlar sistemi olarak ele alan 'planlama kuramı'nın geliştiricisi. Son yıllarda siber güvenlik ve yapay zekânın hukuk üzerindeki etkisi üzerine çalışıyor.",
    avatar: null,
    country: "ABD",
    birthYear: null,
    affiliation: "Yale Hukuk Fakültesi — Charles F. Southmayd Hukuk ve Felsefe Profesörü",
    website: "https://law.yale.edu/scott-j-shapiro",
    featured: false,
    listed: true,
    alive: true,
    period: "Çağdaş",
    school: "Hukuki pozitivizm",
    areas: "Hukuk felsefesi, Uluslararası hukuk, Ceza hukuku, Siber güvenlik, Yapay zekâ felsefesi",
    majorWorks: "Legality (2011)\nThe Internationalists (Oona Hathaway ile, 2017)\nFancy Bear Goes Phishing (2023)",
    keyConcepts: "Hukukun planlama kuramı, Hukuk bir toplumsal teknoloji olarak, Meşruiyet ve açıklanabilirlik",
    sources: "Scott J. Shapiro — Yale Law School — https://law.yale.edu/scott-j-shapiro",
  },
];


/* ------------------------------------------------------------------ */
/* Haberler                                                            */
/* ------------------------------------------------------------------ */

export const posts: SeedPost[] = [
  {
    title: "Türkiye'nin felsefe dergileri: düşüncenin sessiz arşivi genişliyor",
    slug: "turkiye-felsefe-dergileri-haritasi",
    summary:
      "Türkiye'de felsefi üretimi kitaplardan değil dergilerden okumak gerekiyor. İstanbul'dan Mersin'e, Bursa'dan Erzurum'a uzanan yirmiyi aşkın hakemli yayın, klasik felsefe tarihinden yapay zekâ etiğine genişleyen bir alanı kayda geçiriyor. Ama bu arşivin kendi sorunları da var.",
    seoTitle: "Türkiye'de akademik felsefe dergileri haritası",
    metaDescription:
      "Felsefe Arkivi'nden Beytulhikme'ye, Kaygı'dan Nazariyat'a: Türkiye'de yayımlanan akademik felsefe dergileri, dizin sorunu ve açık erişim.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Orhan_Kemal_Public_Library%2C_Beyaz%C4%B1t%2C_%C4%B0stanbul_%2813080139193%29.jpg?width=1600",
    imageCredit: "Orhan Kemal Halk Kütüphanesi, Beyazıt, İstanbul · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri derlemesi",
    sourceUrl: null,
    publishedAt: "2026-08-30T04:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["akademi", "dergi", "acik-erisim", "islam-felsefesi", "mantik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Felsefe Arkivi",
        publisher: "İstanbul Üniversitesi Yayınevi",
        url: "https://iupress.istanbul.edu.tr/tr/journal/felsefearkivi/information/about",
      },
      {
        title: "Felsefe Arkivi — DergiPark",
        publisher: "DergiPark",
        url: "https://dergipark.org.tr/tr/pub/iufad",
      },
      {
        title: "Felsefe Dünyası",
        publisher: "DergiPark",
        url: "https://dergipark.org.tr/tr/pub/felsefedunyasi",
      },
      {
        title: "Kaygı — Bursa Uludağ Üniversitesi Felsefe Dergisi",
        publisher: "DergiPark",
        url: "https://dergipark.org.tr/tr/pub/kaygi",
      },
      {
        title: "Nazariyat — Kitap değerlendirmesi için notlar",
        publisher: "Nazariyat",
        url: "https://nazariyat.org/kvn/kdn",
      },
    ],
    content: `Kitaplar düşüncenin **sonuçlarını** gösterir. Dergiler düşüncenin **nasıl üretildiğini** gösterir.

Türkiye'de felsefenin gerçek durumunu görmek isteyen biri bu yüzden kitapçı rafına değil, hakemli dergilerin içindekiler sayfalarına bakmalı.

Dışarıdan bakıldığında akademik felsefe dar bir çevrenin uğraşı gibi görünebilir. Süreli yayınlara bakıldığında ise başka bir manzara çıkıyor: İstanbul'dan Mersin'e, Bursa'dan Erzurum'a, Ankara'dan Kayseri'ye uzanan, yirmiyi aşkın düzenli yayın.

Sitemizde bu hafta [akademik felsefenin dijital arşivini](/haber/turkiyede-akademik-felsefenin-dijital-arsivi) ele almıştık. Dergiler o arşivin daha eski ve daha kalıcı yarısı.

## Birinci halka: doğrudan felsefe dergileri

### Felsefe Arkivi — 1945'ten beri

Haritanın en eski ve sembolik durağı **Felsefe Arkivi**.

İstanbul Üniversitesi Felsefe Bölümü tarafından **1945'ten** bu yana çıkarılıyor; haziran ve aralık aylarında yılda iki sayı yayımlanıyor. Türkçe, İngilizce, Almanca ve Fransızca metin kabul ediyor. Bugün TR Dizin ve DOAJ'da taranıyor.

Derginin değeri yalnızca uzun ömründen gelmiyor. Arşivi, Cumhuriyet döneminden itibaren Türkiye'de hangi düşünürlerin, hangi problemlerin ve hangi yöntemlerin tartışıldığını izlemeye imkân veren bir **birincil kaynak**.

Türkiye'de akademik felsefenin kurumsal tarihini yazacak biri, Felsefe Arkivi'nin sayılarını makale koleksiyonu olarak değil, belge olarak okumak zorunda.

### Felsefe Dünyası — ortak kürsü

**Türk Felsefe Derneği**'nin yayın organı olan dergi, akademik çevreleri bir araya getiren en geniş kapsamlı yayınlardan.

Ayırt edici yanı, kapsamını uzmanlık makaleleriyle sınırlamaması: çeviriler, yorumlar, kitap tanıtımları, eleştiriler ve felsefe eğitimi üzerine çalışmalar da yayın alanında.

Bu, dergiyi akademik felsefe ile daha geniş felsefe kamuoyu arasında bir geçiş alanı hâline getiriyor. TR Dizin'in yanı sıra Philosopher's Index, PhilPapers, DOAJ ve ERIH PLUS'ta da taranıyor.

### Anadolu'nun dergileri

Türkiye'de felsefe araştırmasının İstanbul-Ankara ekseninde olmadığını gösteren yayınlar bu halkanın en dikkat çekici kısmı.

**Kaygı** (Bursa Uludağ Üniversitesi), TR Dizin ve Philosopher's Index'te taranıyor. **Kilikya Felsefe Dergisi** (Mersin Üniversitesi) bilgi felsefesi, mantık tarihi, etik, metafizik ve hukuk felsefesi alanlarında yayın yapıyor; TR Dizin, Philosopher's Index ve ERIH PLUS'ta yer alıyor. **Temaşa** (Erciyes Üniversitesi) 2014'te başladı ve hızla görünürlük kazandı.

Temaşa'nın yayın çizgisi, alanın genişlemesini iyi gösteriyor: Jean-Luc Nancy'nin politik ontolojisinden Platon'un *Euthyphron*'una, görelilik kuramında zaman-mekân sorunundan üretken yapay zekânın yükseköğretimdeki etik sınırlarına kadar uzanan bir yelpaze.

Son başlık özellikle dikkat çekici. Yapay zekâ artık bilgisayar bilimlerinin konusu olmaktan çıkıp bilgi, sorumluluk, özgürlük ve özne gibi felsefi kategorilerin sınav alanı hâline geldi.

**FLSF** (Felsefe ve Sosyal Bilimler Dergisi), 2006'da başladı ve felsefenin disiplinlerarası yönünü en açık ortaya koyan yayınlardan. Kant, Peirce, Hegel ve Augustinus'un yanında Žižek, Badiou ve Deleuze; popülizm, emek-değer ilişkisi ve dijital çağ gibi problemlerle birlikte ele alınıyor.

### Uluslararasılaşma arayışı

**Beytulhikme – An International Journal of Philosophy**, İngilizce literatürle Türkiye'deki araştırmacılar arasında köprü kurmayı hedefliyor; ESCI ve EBSCO'da taranıyor.

**Sofist: Uluslararası Felsefe Dergisi** Türkçe ve İngilizce makaleye açık; 2026'da on ikinci sayısına ulaştı. **POSSEIBLE**, çağdaş kıta felsefesi ve siyaset felsefesi ekseninde yayın yapıyor.

**Arkhe-Logos**, antik felsefe, Aristoteles araştırmaları, kıta felsefesi ve feminist felsefeyi aynı çatı altında topluyor — adının işaret ettiği *arkhē* ile *logos* arasındaki ilişkiyi çağdaş tartışmalarla buluşturan bir çizgi.

**ViraVerita E-Dergi** ve **ETHOS: Felsefe ve Toplumsal Bilimlerde Diyaloglar**, üniversite dergileri ağının dışında da akademik felsefe yayıncılığının sürdürülebileceğini gösteriyor. **Dört Öge** ise felsefe ile bilim tarihinin kesişiminde duruyor.

Listeye 2025'te başlayan **Anadolu Felsefe Dergisi** (Erzurum Teknik Üniversitesi) de eklendi; çift-kör hakemlik ve açık erişim ilkeleriyle çalışıyor.

## İkinci halka: felsefe-bilim ve düşünce tarihi

**Kutadgubilig: Felsefe Bilim Araştırmaları**, 2002'den beri TR Dizin'de. Dergâh Yayınları tarafından çıkarılması, üniversite dışında **yayınevi merkezli** akademik felsefe yayıncılığının da mümkün olduğunu gösteriyor.

**Mavi Atlas** (Gümüşhane Üniversitesi) disiplinlerarası; tarih, sosyoloji ve edebiyatın yanında felsefe ve bilim tarihine de yer veriyor.

**Nazariyat – İslam Felsefe ve Bilim Tarihi Araştırmaları Dergisi**, bu halkanın en güçlü ismi. İslam felsefesi, kelâm, nazarî tasavvuf ve bilim tarihini kapsıyor; TR Dizin, DOAJ ve ESCI'de taranıyor.

## Üçüncü halka: din felsefesi, mantık, ilahiyat

Türkiye'de akademik felsefeyi yalnızca felsefe bölümlerinin yayınları üzerinden değerlendirmek ciddi bir eksiklik yaratır. Çünkü Felsefe ve Din Bilimleri alanında çalışan akademisyenlerin önemli bir bölümü ilahiyat fakültelerinde.

**Din ve Felsefe Araştırmaları** (Din Felsefesi Derneği), Tanrı, akıl, inanç, kötülük problemi, özgür irade ve dinsel epistemoloji gibi — çağdaş felsefenin de merkezindeki — sorunları işliyor.

**Tabula Rasa: Felsefe ve Teoloji** iki alanın kesişimine odaklanıyor. **Mantık Araştırmaları Dergisi**, felsefenin en eski disiplinlerinden birine ayrı bir yayın alanı açıyor — mantık matematiksel formüllerden ibaret değil; geçerli çıkarım ve argüman kurma kuralları felsefenin kurucu problemlerinden. **Dergiabant** da İslam felsefesi ve Felsefe-Din Bilimleri alanında yayın yapıyor.

## Yeni bir arayış: Anadolu Nazariyatı

2025'te yayın hayatına başlayan **Anadolu Nazariyatı Dergisi** ayrı bir yerde duruyor.

Kendisini yalnızca felsefe dergisi olarak değil, Anadolu düşünce dünyasının temel kavramlarını yeniden ele almaya çalışan dijital ve hakemli bir düşünce dergisi olarak tanımlıyor. Yayın alanı felsefeden irfana, teolojiden metafiziğe, tasavvuftan dile uzanıyor.

İlk sayısı Haziran 2025'te çıktı; Nicolaus Cusanus, [Yalçın Koç](/haber/yalcin-koc-turkcede-felsefe-dili-anadolu-mayasi) ve "Anadolu Mayası" ekseninde çalışmalar içeriyor.

Dergi, Türkiye'de son dönemde belirginleşen bir tartışmaya doğrudan müdahil oluyor: **Kendi kavramlarımızdan hareketle özgün bir felsefi dil kurulabilir mi?**

## Kaç dergi var? Yanlış soru

"Türkiye'de kaç felsefe dergisi var?" sorusuna tek bir rakam vermek yanıltıcı olur. Çünkü "felsefe dergisi" kavramının sınırları tartışmalı.

Adı ve temel yayın politikası doğrudan felsefe olan dergiler ile felsefe alanında yayın yapan dergilerin tamamı aynı şey değil. Bir akademik envanter hazırlarken bu ayrım belirleyici.

## İki sorun

### Dizin, felsefi değerin ölçüsü müdür?

TR Dizin, Philosopher's Index, PhilPapers, ERIH PLUS, DOAJ, EBSCO ve ESCI bugün akademik görünürlüğü belirleyen mekanizmalar. Bir derginin bu indekslerde bulunması kuşkusuz önemli.

Ama burada felsefe açısından hassas bir problem var: **Felsefi değerin ölçüsü indeks değildir.**

İyi bir felsefe makalesinin değerini kaç atıf aldığı ya da akademik puan sisteminde kaç puan getirdiği belirleyemez. Felsefenin doğası gereği bazı metinlerin etkisi yıllar sonra ortaya çıkar. Spinoza'nın *Etika*'sı ölümünden sonra yayımlandı ve yüz yıl boyunca neredeyse yalnızca reddedilmek için okundu.

Türkiye'de akademik felsefe yayıncılığının önündeki temel sorunlardan biri, **akademik ölçüm ile entelektüel değer arasındaki dengeyi** kurabilmek.

### Yapay zekâ kapıyı çaldı

2026 itibarıyla ikinci sorun daha yeni. Üretken yapay zekâ artık yalnızca felsefenin konusu değil; makale yazımı, kaynak taraması, çeviri, özetleme ve hatta hakemlik süreçleri üzerinde etkili.

Sitemizde bu ay aktardığımız gibi, *Philosophy & Public Affairs* dergisi bilerek yapay zekâ tarafından yazılmış bir makale yayımladı ve iki hafta sonra [yapay zekâ yazarlığını yasakladı](/haber/philosophy-public-affairs-yapay-zeka-yasagi).

Türkiye'deki dergiler de aynı sorularla karşılaşacak: Bir metnin yazarı kimdir? Yapay zekâ yardımıyla yazılan makale hangi ölçüde özgündür? Yanlış bir kaynaktan araştırmacı mı sorumludur?

Bu sorular teknik değil; akademik yazarlık kavramının kendisine dair.

## Açık erişim ne değiştirdi?

Türkiye'deki felsefe dergilerinin büyük bölümünün **DergiPark** altyapısına geçmesi önemli bir kazanım.

Bugün Türkiye'de yayımlanan çok sayıda felsefe makalesine dünyanın herhangi bir yerinden ücretsiz erişilebiliyor. Bir öğrenci, bağımsız araştırmacı ya da meraklı bir okur, önceden ulaşılması güç metinlere dakikalar içinde ulaşabiliyor.

Bu, akademik felsefenin üniversite kütüphanesi raflarında kalan bir bilgi alanı olmaktan çıkmasına yardım ediyor.

## Asıl soru

Bugünkü manzara iki eğilimi aynı anda gösteriyor.

Bir tarafta Platon, Aristoteles, Kant, Hegel, Nietzsche, Husserl, Heidegger, Wittgenstein ve Marx üzerine güçlü bir felsefe tarihi geleneği sürüyor. Diğer tarafta Žižek, Badiou, Deleuze, Nancy, Kripke ve Putnam üzerinden çağdaş tartışmalar Türkiye akademisine taşınıyor. Buna yapay zekâ, teknoloji, toplumsal cinsiyet, hukuk ve çevre gibi yeni problem alanları ekleniyor.

Ama bütün bu hareketliliğin karşısında daha temel bir soru duruyor:

**Türkiye'deki akademik felsefe ne kadar kendi sorularını üretiyor?**

Batı literatürünü Türkçeye kazandırmak ve yorumlamak vazgeçilmez bir görev. Bundan sonraki aşama, Türkiye'de üretilen özgün düşüncenin uluslararası literatüre taşınması.

Yani mesele artık yalnızca "Dünyada felsefe alanında ne konuşuluyor?" olmamalı. Bir de şu sorulmalı: **Türkiye'nin filozofları dünya felsefesine ne söylüyor?**

---

### Türkiye'de felsefe alanında yayın yapan dergiler

**Doğrudan felsefe dergileri**

Felsefe Arkivi · Felsefe Dünyası · FLSF · Kaygı · Kilikya Felsefe Dergisi · Temaşa · Beytulhikme · Sofist · POSSEIBLE · Arkhe-Logos · ViraVerita · ETHOS · Dört Öge · Anadolu Felsefe Dergisi

**Felsefe-bilim ve düşünce tarihi**

Kutadgubilig · Mavi Atlas · Nazariyat · Anadolu Nazariyatı

**Din felsefesi, İslam felsefesi ve mantık**

Din ve Felsefe Araştırmaları · Tabula Rasa · Mantık Araştırmaları Dergisi · Dergiabant

*Liste kapsayıcı değildir. Eksik gördüğünüz yayınları iletişim sayfamızdan bildirebilirsiniz.*`,
  },
  {
    title: "Bir bilanço denemesi: 'Cumhuriyetin 100. Yılında Türkiye'de Felsefe'",
    slug: "cumhuriyetin-100-yilinda-turkiyede-felsefe",
    summary:
      "Betül Çotuksöken ve İoanna Kuçuradi'nin editörlüğünde hazırlanan iki ciltlik çalışma, yüz yıllık bir dönemin felsefi bilançosunu çıkarmayı deniyor. Türkiye Felsefe Kurumu Yayınları'ndan çıkan ikinci cilt 400 sayfa.",
    seoTitle: "Cumhuriyetin 100. Yılında Türkiye'de Felsefe — iki ciltlik bilanço",
    metaDescription:
      "Betül Çotuksöken ve İoanna Kuçuradi editörlüğünde hazırlanan iki ciltlik çalışma, Cumhuriyet döneminde Türkiye'de felsefenin gelişimini ele alıyor.",
    contentType: "KITAP",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Atat%C3%BCrk_K%C3%BClt%C3%BCr_Merkezi%2C_%C4%B0stanbul_%2812964525324%29.jpg?width=1600",
    imageCredit: "Atatürk Kültür Merkezi, İstanbul · Wikimedia Commons",
    featured: false,
    sourceName: "Türkiye Felsefe Kurumu Yayınları",
    sourceUrl: "https://www.kitapyurdu.com/kitap/cumhuriyetin-100-yilinda-turkiyede-felsefe-2-cilt/719881.html",
    publishedAt: "2026-08-30T03:40:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "akademi", "tarih", "etik", "kavram"],
    philosopherSlugs: ["ioanna-kucuradi"],
    sources: [
      {
        title: "Cumhuriyetin 100. Yılında Türkiye'de Felsefe, 2. Cilt",
        publisher: "Türkiye Felsefe Kurumu Yayınları",
        date: "15 Mayıs 2025 · 400 sayfa",
        url: "https://www.kitapyurdu.com/kitap/cumhuriyetin-100-yilinda-turkiyede-felsefe-2-cilt/719881.html",
        primary: true,
      },
      {
        title: "Türkiye Felsefe Kurumu Yayınları",
        publisher: "Kitapyurdu",
        url: "https://www.kitapyurdu.com/yayinevi/turkiye-felsefe-kurumu-yayinlari/375.html",
      },
    ],
    content: `Bir ülkenin felsefe tarihini yazmak, o ülkenin kendisi hakkındaki en zor kararlarından biridir. Neyi dahil edeceğine karar vermek, ne saydığına karar vermektir.

**Cumhuriyetin 100. Yılında Türkiye'de Felsefe**, bu kararı vermeyi deneyen iki ciltlik bir çalışma. Türkiye Felsefe Kurumu Yayınları'ndan çıkan ikinci cilt 400 sayfa; editörlüğünü **Betül Çotuksöken** ve **İoanna Kuçuradi** üstlenmiş.

İki ismin bir arada olması kendi başına anlamlı. Kuçuradi Hacettepe'de felsefe bölümünü kuran, FISP'in ilk kadın başkanı olan ve UNESCO Felsefe ve İnsan Hakları Kürsüsü'nü yürüten isim; Çotuksöken ise Türkiye'de felsefe eğitimi ve ortaçağ felsefesi çalışmalarının başlıca temsilcilerinden. İkisi de anlattıkları dönemin bir parçası.

## Neden bir bilanço gerekli?

Cumhuriyet'in ilk yüzyılı, felsefe açısından sıradan bir yüzyıl değildi.

Bir imparatorluğun medrese geleneğinden modern üniversiteye geçildi. 1933 Üniversite Reformu'yla Almanya'dan kaçan felsefeciler İstanbul'a geldi ve Türkiye'de akademik felsefenin yönünü belirledi — Ernst von Aster, Hans Reichenbach, Joachim Ritter. Yeni bir felsefe terminolojisi kuruldu; bu köşede dün andığımız [Bedia Akarsu'nun](/haber/bedia-akarsu-felsefenin-dili) *Felsefe Terimleri Sözlüğü* o çabanın belgesi.

Yüz yıl sonra sorulması gereken soru şu: Bu kurumsallaşmadan ne çıktı?

## Çalışmanın konumu

Bu tür derleme ciltlerinin iki riski vardır. Birincisi kutlama metnine dönüşmek; ikincisi katalog olmak — isimler, tarihler, kürsüler.

Çalışmanın anlamlı olması, üçüncü bir şeyi yapabilmesine bağlı: **Değerlendirme.** Hangi alanlarda gerçek birikim oluştu, hangilerinde oluşmadı? Türkiye'de hangi felsefi problemler kendi sorularımız hâline geldi, hangileri aktarma olarak kaldı?

Bu soru, sitemizde bu hafta ele aldığımız iki dosyayla doğrudan bağlantılı: [Hilmi Ziya Ülken'in](/haber/hilmi-ziya-ulken-sorulari) "Türkiye neden süreklilik taşıyan bir düşünce geleneği kuramadı?" sorusu ve bugün yayımladığımız [dergi haritası](/haber/turkiye-felsefe-dergileri-haritasi). Üçü aynı meseleyi farklı yerlerden kuşatıyor.

## Yayınevi hakkında bir not

Türkiye Felsefe Kurumu Yayınları'nın kataloğu kendi başına okunmaya değer.

Kant'ın *Pratik Aklın Eleştirisi* ve *Prolegomena*'sı, Kuçuradi'nin *Etik*, *Nietzsche ve İnsan* ve *Schopenhauer ve İnsan* kitapları, Harun Tepe'nin *Etik ve Metaetik*'i, Gülriz Uygur'un *Hukukta Adaletsizliği Görmek*'i, Adnan Güriz'in *Adalet Kavramı*, ve "Anadolu'da Felsefeye Yolculuk" dizisinden Miletli filozoflar, Sinoplu Diogenes, Urlalı Anaksagoras ve Hierapolisli Epiktetos üzerine ciltler.

Bu son dizi özellikle dikkat çekici. Antik felsefenin coğrafi olarak büyük bölümünün bugünkü Türkiye topraklarında geçtiğini hatırlatan bir program — ve bunu turistik bir vurgu olarak değil, felsefe tarihi araştırması olarak yapıyor.

## Künye

- **Editörler:** Betül Çotuksöken, İoanna Kuçuradi
- **Yayınevi:** Türkiye Felsefe Kurumu Yayınları
- **2. Cilt:** 15 Mayıs 2025 · 400 sayfa
- **Dil:** Türkçe

---

*Not: Türkiye'de 2026'da yayımlanmış iddialı bir akademik felsefe telif eseri arayışımız sürüyor. Yayınevleri ve yazarlar, yeni çıkan çalışmaları iletişim sayfamızdan bize iletebilir; düzenli olarak tanıtacağız.*`,
  },
  {
    title: "Michel Onfray ve felsefenin kavgacı hâli: kürsüden meydana",
    slug: "michel-onfray-kamusal-felsefe",
    summary:
      "Hedonizmden ateizme, Nietzsche okumalarından siyaset polemiğine uzanan yüzü aşkın kitap. Onfray, Batı düşüncesinin tarihini yeniden yazmayı hedefleyen dört ciltlik yeni bir diziye başladı. Onu tartışmalı kılan görüşleri kadar, felsefeyi nerede yaptığı da.",
    seoTitle: "Michel Onfray: hedonizm, ateoloji ve felsefenin karşı-tarihi",
    metaDescription:
      "Michel Onfray'nin hedonizmi, Traité d'athéologie, Felsefenin Karşı-Tarihi dizisi, Caen Halk Üniversitesi ve yeni dört ciltlik Batı düşüncesi projesi.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Michel_Onfray.jpg?width=1600",
    imageCredit: "Michel Onfray · Wikimedia Commons",
    featured: true,
    sourceName: "Éditions Albin Michel",
    sourceUrl: "https://www.albin-michel.fr/deambulation-dans-les-ruines-9782226496997",
    publishedAt: "2026-08-30T03:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["etik", "din-felsefesi", "siyaset-felsefesi", "medya", "nietzsche"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Déambulation dans les ruines — Une histoire philosophique de l'Occident",
        publisher: "Éditions Albin Michel",
        url: "https://www.albin-michel.fr/deambulation-dans-les-ruines-9782226496997",
        primary: true,
      },
      {
        title: "Michel Onfray — Histoire philosophique de l'Occident",
        publisher: "Librairie Mollat",
        url: "https://www.mollat.com/videos/michel-onfray-histoire-philosophique-de-l-occident-deambulation-dans-les-ruines",
      },
    ],
    content: `Michel Onfray'yi tek bir etiketle tanımlamak mümkün değil — ve bu, kırk yıllık bir tercihin sonucu.

"Ateist filozof", "hedonist düşünür", "Nietzscheci", "sol eleştirmeni". Her biri doğru, hiçbiri yeterli.

Onu ayıran şey görüşlerinden çok **nerede** felsefe yaptığı. Onfray, felsefeyi üniversite kürsülerinin, hakemli dergilerin ve uzmanlar arası tartışmanın konusu olmaktan çıkarmaya çalışıyor. Bu yüzden onu anlamak için yalnızca kitaplarına değil, kurduğu kurumlara ve medya girişimlerine de bakmak gerekiyor.

Yayınevi kayıtlarına göre yüzün üzerinde kitabın yazarı; eserleri çok sayıda dile çevrildi.

## Caen: diplomasız üniversite

2002'de **Caen Halk Üniversitesi**'ni kurdu.

Fikir basitti ve doğrudan bir itiraz taşıyordu: Akademik diploma gerektirmeyen, seçme sınavı olmayan, ücretsiz bir felsefe ve beşerî bilimler programı. Kimin girip kimin giremeyeceğine üniversite değil, ilgi karar veriyor.

Bu, sitemizde dün ele aldığımız [Alain de Botton'ın The School of Life](/haber/alain-de-botton-gundelik-felsefe) girişimiyle aynı soruya verilmiş farklı bir yanıt: Felsefe kime aittir?

De Botton'ın yanıtı terapötik; Onfray'ninki militan.

## Hedonizm: hazcılıktan fazlası

Onfray'nin erken dönem çalışmalarındaki hedonizm, sıradan anlamıyla "hazcılık"tan daha geniş bir iddia taşıyor.

Mesele yalnızca haz almak değil; insanın bedenini, arzularını, ilişkilerini ve ölüm gerçeğini inkâr etmeyen bir **yaşam etiği** kurabilmesi.

1993 tarihli *La Sculpture de soi* — "Kendini Yontmak" — bu projenin merkezî metni. Onfray burada insanın hazır ahlaki ve toplumsal kalıplara teslim olmak yerine kendini bir sanat eseri gibi biçimlendirebileceğini savunuyor.

Arkasında Nietzsche'nin güçlü etkisi var. Ama Onfray'nin Nietzsche okuması akademik yorum üretmeye değil, felsefeyi doğrudan yaşama pratiğine çevirmeye yöneliyor.

Sorusu basit ama ağır: **İnsan kendi hayatının yazarı olabilir mi?**

## Ateoloji

Uluslararası ölçekte en çok ses getiren kitabı 2005 tarihli *Traité d'athéologie* oldu.

Onfray burada ateizmi "Tanrı'ya inanmamak" biçiminde olumsuz bir konum olarak değil, dinlerin insan, ahlak, beden ve siyaset üzerindeki etkilerini sorgulayan kapsamlı bir proje olarak ele aldı.

Temelinde şu düşünce var: İnsan yaşamını aşkın bir otoriteye teslim etmeden anlamlandırabilir.

Ama yönteminin tartışmalı yanı da burada. Din eleştirisindeki polemik üslup, akademik tarafsızlıktan çok entelektüel mücadeleyi andırıyor. Onfray bir yandan laik ve ateist düşüncenin popülerleşmesine katkı sağlarken, öte yandan tarihsel ve felsefi yorumları akademisyenlerce sert biçimde eleştirildi.

Bu, bütün kariyerinde görülen bir özelliğin örneği: **Onfray felsefeyi yorumlamak istemez, onunla kavga etmek ister.**

## Karşı-tarih

En büyük projelerinden biri *Contre-histoire de la philosophie* — Felsefenin Karşı-Tarihi — dizisi.

Çalışma klasik felsefe tarihinin kanonunu sorguluyor. Geleneksel anlatı Platon, Aristoteles, Descartes, Kant ve Hegel'i merkeze alırken Onfray materyalist, ateist, hedonist ve özgürlükçü düşünürleri görünür kılmaya çalışıyor: Epikuros, Lucretius, Gassendi, La Mettrie, Kirenaikliler.

Temel iddia şu: **Felsefe tarihi, kazananların ve kurumsallaşmış düşüncelerin tarihi değildir.**

Bu iddianın kendisi tartışmalı ama sorduğu soru meşru: Bir kanon nasıl oluşur ve kim dışarıda kalır?

## Freud tartışması

Kariyerindeki en büyük polemiklerden biri *Le Crépuscule d'une idole* — "Bir Putun Alacakaranlığı" — ile yaşandı.

Onfray, Freud'un biyografisini, psikanalitik kuramını ve bilimsel iddialarını sert biçimde eleştirdi. Fransa'da büyük tartışma yarattı.

Freud savunucuları onu tarihsel bağlamı dikkate almamakla ve psikanalizi indirgemeci biçimde değerlendirmekle suçladı. Onfray ise psikanalizin entelektüel bir dogmaya dönüştüğünü savundu.

Tartışma yalnızca Freud hakkında değildi. Asıl mesele, bir düşünürün kültürel otoritesi karşısında felsefenin ne kadar eleştirel olabileceğiydi.

## Sol ile hesaplaşma

Onfray uzun süre kendisini sol gelenek içinde konumlandırdı. Zamanla 1968 sonrası sola, Marksizme, Avrupa Birliği projesine ve Fransız siyasetinin çeşitli unsurlarına yönelik eleştirileri sertleşti.

Bu dönüşüm siyasi konumlandırılmasını zorlaştırdı. Kendisini sağ ya da aşırı sağ kategorileriyle tanımlamayı reddederken; göç, İslam, Avrupa Birliği ve ulusal egemenlik başlıklarındaki görüşleri nedeniyle Fransa'da sağa yaklaşmakla suçlandı.

Onu "sağa kayan eski solcu" diye tanımlamak da, tamamen geleneksel sol içinde değerlendirmek de yetersiz kalıyor. Asıl özelliği, yerleşik siyasi kategorileri sürekli tartışmaya açması.

2020'de kurduğu ve yayın yönetmenliğini üstlendiği *Front populaire* dergisi de bu konumun kurumsal ifadesi.

## Kendi kamusal alanını kurmak

Son dönemin en önemli gelişmesi, Onfray'nin kendi medya ekosistemini kurması.

Kendi internet sitesi ve web televizyonu üzerinden konferanslar, güncel değerlendirmeler ve arşiv içerikleri yayımlıyor; platform düzenli olarak güncelleniyor. Europe 1'de *Face à Michel Onfray* programıyla dinleyici karşısına çıkıyor.

Bu, çağdaş entelektüelin dönüşümü açısından kayda değer.

Yirminci yüzyılın filozofu üniversite, yayınevi, gazete ve televizyon gibi kurumsal aracılara bağımlıydı. Onfray, yirmi birinci yüzyılın filozofunun **kendi aracını kurabileceğini** gösteren örneklerden biri.

Kazanç açık: aracısızlık. Bedeli de açık: dış denetimin ortadan kalkması.

## Yeni proje: dört ciltte Batı düşüncesi

Onfray'nin bugün yürüttüğü en iddialı çalışma, Batı'nın felsefi tarihini yeniden yazma girişimi.

**Déambulation dans les ruines** — "Harabelerde Gezinti" — Albin Michel tarafından yayımlanan **Histoire philosophique de l'Occident** dizisinin ilk cildi. Dizi dört bağımsız ciltten oluşacak.

Projenin çerçevesi Onfray'nin yönteminin özeti gibi: Batı uygarlığının tarihini **fikirler savaşı** üzerinden okumak.

Antikçağdan itibaren dünya görüşleri radikal karşıtlıklarla yapılanmış: Platoncu idealizme karşı Demokritos'un materyalizmi, Pythagorasçı evliliğe karşı Kinik özgürlük, Sokrates'in felsefi yaşamına karşı sofistlerin paralı retoriği, Stoacı erdeme karşı Aristippos'un hazcılığı.

İlk cilt "Anticilerin bilgeliği" alt başlığını taşıyor ve felsefi bir yaşamın ne olabileceğini ilk kez tanımlamaya çalışan düşünürler arasında bir gezinti sunuyor.

Hedef artık tek tek filozoflar değil: **Batı'nın kendisini nasıl düşündüğünü yeniden anlatmak.**

## Filozof mu, polemikçi mi?

Onfray hakkında verilecek en kolay hüküm "çok tartışmalı" olduğudur. Ama bu hüküm meselenin özünü ıskalar.

Onfray'nin felsefesi zaten tartışma üretmek üzerine kurulu. Nietzsche'den aldığı soykütüksel bakışı, ateizm savunusunu, hedonizmi, kurum eleştirisini ve siyasi polemiği bir araya getirerek felsefeyi sakin bir uzmanlık alanı olmaktan çıkarmaya çalışıyor.

Sevenler için felsefeyi halka geri veren özgürlükçü bir düşünür. Eleştirenler için aşırı genelleme yapan, tarihsel ve bilimsel meseleleri polemik uğruna basitleştiren bir entelektüel.

Muhtemelen ikisinde de gerçeklik payı var.

Ama felsefe tarihinin öğrettiği daha önemli bir şey var: **Bir düşünürün etkisi yalnızca ne kadar doğru bulunduğuyla değil, hangi soruları gündeme soktuğuyla da ölçülür.**

Onfray'nin kalıcı mirası belki de burada. Fransız felsefesinin en eski sorularından birini yeniden açtı:

Felsefe yalnızca üniversitede öğretilen bir disiplin mi, yoksa insanın kendi hayatını kurma sanatı mı?

Kırk yıllık bütün serüveni, ikinci cevabı savunma girişimi olarak okunabilir.

## Türkçede

*Bir Hedonist Manifesto*, *Ateoloji Üzerine Bir İnceleme*, *Yaratmaya Var mısınız?* ve *Filozofun Damak Tadı* Türkçeye çevrildi.`,
  },
  {
    title: "Camus'nün arşivi Fransa'ya geçti: 9 milyon euroluk bir edebiyat kararı",
    slug: "camus-arsivi-bnf-2026",
    summary:
      "Fransa Millî Kütüphanesi, Camus arşivini 9 milyon euroya satın aldı — devletin edebî miras alanındaki en büyük edinimi. Koleksiyonda Yabancı'nın bilinen tek çalışma nüshası ve ölüm kazasındaki arabada bulunan İlk Adam müsveddesi var.",
    seoTitle: "Camus arşivi BnF'ye geçti: 9 milyon euro",
    metaDescription:
      "Albert Camus arşivi Fransa Millî Kütüphanesi'ne geçti. Yabancı'nın el yazması, İlk Adam müsveddesi, günlükler ve Direniş dönemi sahte kimlik belgesi.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Camus.jpg?width=1600",
    imageCredit: "Albert Camus · Wikimedia Commons",
    featured: true,
    sourceName: "Bibliothèque nationale de France",
    sourceUrl: "https://www.bnf.fr/fr/actualites/entree-du-fonds-albert-camus-dans-les-collections-de-la-bibliotheque-nationale-de-france",
    publishedAt: "2026-08-30T03:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["arkeoloji", "tarih", "etik", "siyaset-felsefesi", "postkolonyalizm"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Entrée du fonds Albert Camus dans les collections de la Bibliothèque nationale de France",
        publisher: "BnF",
        url: "https://www.bnf.fr/fr/actualites/entree-du-fonds-albert-camus-dans-les-collections-de-la-bibliotheque-nationale-de-france",
        primary: true,
      },
      {
        title: "Que contient le Fonds Albert Camus, acquis par la BnF ?",
        publisher: "ActuaLitté",
        url: "https://actualitte.com/article/132459/archives/que-contient-le-fonds-albert-camus-acquis-par-la-bnf",
      },
      {
        title: "Le manuscrit de 'L'Étranger' d'Albert Camus entre à la Bibliothèque nationale de France",
        publisher: "franceinfo",
        url: "https://www.franceinfo.fr/culture/livres/le-manuscrit-de-l-etranger-d-albert-camus-entre-a-la-bibliotheque-nationale-de-france_8090057.html",
      },
    ],
    content: `Bir yazarın arşivi, yayımlanmış eserlerinin söylemediğini söyler: metnin nasıl kurulduğunu.

Temmuz başında Fransa, **Albert Camus arşivini** 9 milyon euro karşılığında satın aldı ve Fransa Millî Kütüphanesi'nin (BnF) koleksiyonlarına kattı. Bu, Fransız devletinin **edebî miras alanında bugüne kadar yaptığı en büyük ediniyor**.

Rakamdan daha çarpıcı olan koleksiyonun içeriği.

## Ne var arşivde?

Yaklaşık **250 arşiv kutusu**, elli metreye yakın raf uzunluğu. İçinde el yazmaları, defterler, ajandalar, mektuplar, tiyatro çalışmaları ve fotoğraflar.

İki parça özellikle öne çıkıyor.

**Yabancı**'nın el yazması — 1942'de yayımlanan romanın bilinen **tek çalışma nüshası**. Camus'nün cümleyi nasıl kurduğunu, neyi sildiğini ve edebî bir sezgiyi nasıl düşünsel bir yapıya çevirdiğini gösterecek olan belge bu.

**İlk Adam**'ın tamamlanmamış müsveddesi — Camus'nün Ocak 1960'ta hayatını kaybettiği otomobilde bulunan metin.

Arşivde ayrıca Camus'nün Fransız Direnişi döneminde kullandığı **sahte kimlik belgesi** ve 1950'lere ait günlükler bulunuyor.

Edinim Hermès ve CIC'in destekleriyle gerçekleşti. BnF, koleksiyonun **Mart 2027**'de, Camus'nün Nobel Edebiyat Ödülü'nü alışının yetmişinci yıldönümünde büyük bir sergiyle sunulmasını planlıyor.

## Neden felsefe haberi?

Camus'yü yalnızca romancı sayan alışkanlık, onun asıl meselesini gözden kaçırır.

Camus'nün metinleri ile hayatı arasındaki ilişki, düşüncesini anlamanın anahtarıdır. BnF'nin kendi açıklaması da bunu vurguluyor: Arşiv, edebî çalışmaların yanı sıra dönemin entelektüel ve siyasal hayatındaki angajmanlarına ışık tutuyor.

Yani bu bir edebiyat dosyası kadar bir **siyasal düşünce dosyası**.

## Absürd: son değil, başlangıç

Camus hakkında en yaygın yanlış, absürdü "hayat anlamsızdır, öyleyse hiçbir şeyin önemi yoktur" biçiminde okumaktır.

*Sisifos Söyleni*'nin (1942) mantığı bunun tam tersi.

İnsan anlam arar. Dünya nihai bir anlam sunmaz. Absürd, bu ikisi arasındaki **çatışmadan** doğar — dünyada değil, insanla dünya arasındaki ilişkidedir.

Camus'nün yanıtı ne intihar ne nihilizm. Yanıtı yaşamaya devam etmek ve başkaldırmaktır.

Sisifos figürünün önemi burada. Taşı sonsuza kadar yukarı taşımak zorunda olan insan kaderini değiştiremez; ama kendi durumunun bilincine varabilir. Anlamı bulamayan insan yine de yaşamı seçebilir.

## Meursault neden hâlâ rahatsız edici?

*Yabancı*'da Meursault'nun toplumun beklediği duyguları göstermemesi, romanı psikolojik bir hikâye olmaktan çıkarır.

Camus daha rahatsız edici bir soru sorar: **Toplum insanı yaptığı şey nedeniyle mi yargılar, yoksa olması gerektiğine inandığı insan tipine uymadığı için de cezalandırır mı?**

Meursault'nun mahkeme süreci bir cinayet davası olduğu kadar, toplumun "normal insan" tanımının mahkemesidir. Camus hukuk, ahlak ve toplumsal norm arasındaki ilişkiyi çok erken bir tarihte edebiyatın içine yerleştirmiştir.

## Veba: kötülüğün sıradanlığı

1947 tarihli *Veba*, pandemi sonrasında olağanüstü bir ilgi gördü. Ama romanın gücü salgını anlatmasında değil.

Camus, Oran'daki veba karşısında farklı insan tiplerini karşılaştırır: Doktor Rieux görevini yapar, Tarrou dayanışmanın ahlaki boyutunu düşünür, Rambert kaçmak ister, Cottard krizden kendi çıkarını üretir.

Asıl mesele hastalık değil, **insanın kötülük karşısındaki davranışı**. Nazizm ve totalitarizm bağlamında okunduğunda romanın kapsamı ortaya çıkar.

Camus'nün dünyasında kötülük çoğu zaman olağanüstü canavarların işi değildir. Sıradan insanların suskunluğu, alışkanlığı ve kayıtsızlığıyla büyür.

## Başkaldıran İnsan: kopuş

Asıl kırılma 1951 tarihli *Başkaldıran İnsan* ile geldi. Kitap, Camus ile Sartre çevresi arasındaki büyük ayrışmanın merkezindeydi.

Camus burada devrimci şiddetin meşrulaştırılmasına karşı çıkar. Korktuğu şey nettir: İnsanları gelecekte kurulacak kusursuz toplum adına bugün öldürmeye başladığınızda, geleceğin ideali bugünün cinayetlerini haklı çıkarmanın aracına dönüşür.

İtirazı devrime değil, **insanın bir amaç uğruna araç hâline getirilmesine** yöneliktir. Bu yüzden onu basitçe "anti-komünist" saymak yetersiz kalır.

Tez tek cümlede: **Hiçbir tarihsel ideal, insan hayatını sınırsız harcama yetkisi vermez.**

Sartre'la ayrılığı kişisel bir kavga değildi. Sartre özgürlük ve tarih sorununa güçlü bir siyasal boyut kazandırırken Camus ölçü, sınır ve dayanışma üzerinde ısrar etti.

## Cezayir: en zor miras

Camus'yü bugün okurken en fazla dikkat gerektiren konu Cezayir.

1913'te Fransız Cezayiri'nde, yoksul bir ailede doğdu. Düşüncesinin merkezinde Akdeniz, yoksulluk, sömürgecilik ve Cezayir deneyimi birlikte bulunur.

Bağımsızlık savaşı sırasındaki konumu tartışmalı hâle geldi. Sömürge düzeninin adaletsizliklerini görüyordu; ama Cezayir'in Fransa'dan tamamen kopmasını savunan çizgiyle de özdeşleşmedi. Bu tutum onu her iki tarafla karşı karşıya getirdi.

Camus'nün buradaki ahlaki sıkışması, felsefesinin soyut bir etik sistem olmadığını gösterir. Gerçek hayat filozofun önüne iki "haklı" seçenek değil, **birbiriyle çatışan adalet talepleri** koyar.

Trajedisi biraz da budur.

## Gazeteci Camus

Camus'yü yalnızca romancı ya da filozof olarak okumak, kişiliğinin önemli bir bölümünü kaçırır. O aynı zamanda gazeteciydi.

Savaş yıllarında *Combat* gazetesinde çalıştı ve gazeteciliği haber aktarma faaliyeti olarak değil, **ahlaki bir sorumluluk** olarak gördü.

Sorusu şuydu: Gerçeği söylemek, siyasal sonuçlarından bağımsız bir yükümlülük olabilir mi? Yanıtı büyük ölçüde evetti. Bu nedenle propaganda ile gazetecilik arasındaki ayrım onun için teknik değil ahlaki bir ayrımdı.

Arşivdeki Direniş dönemi sahte kimlik belgesi, bu tercihin bedelini de hatırlatıyor.

## Arşiv ne getirebilir?

Camus'nün düşüncesi bundan sonra yalnızca yayımlanmış metinlerinden değil, **yazma sürecinden** de okunabilecek.

Taslaklar, düzeltmeler, günlükler ve tiyatro notları düşüncenin nasıl biçimlendiğini gösterecek. Büyük yazarların arşivleri açıldığında, bildiğimiz yazar ile belgelerden çıkan yazar arasında bazen önemli farklar bulunur.

2027 sergisinin nostaljik bir anma olması beklenmemeli.

## Bugün ne söylüyor?

Camus'nün bırakabileceği miras karmaşık sistemler değil, birkaç ilkenin ısrarla savunulması:

İnsan hayatının değeri vardır. Özgürlük vazgeçilmezdir. Hiçbir ideoloji cinayeti sınırsız meşrulaştıramaz. Adalet adına adaletsizlik üretilemez. Ve başkaldırı, başkasının insanlığını yok etmek anlamına gelmemelidir.

Absürd başlangıçtır; başkaldırı, dayanışma ve ölçü devamıdır.

Camus 1960'ta, kırk altı yaşındayken bir otomobil kazasında öldü. Geriye tamamlanmış bir sistem değil, sorular bıraktı.

Sisifos taşı hâlâ yukarı itiyor. Ama Camus'nün düşüncesinde mesele artık taşın tepeye ulaşması değil — **insanın taşı iterken insan kalabilmesi.**`,
  },
  {
    title: "Spinoza: aforoz edilen adamın sakin intikamı",
    slug: "spinoza-etika-tanri-doga",
    summary:
      "Yirmi üç yaşında cemaatinden en ağır lanetle atıldı, hayatını mercek yontarak kazandı, başyapıtını sağlığında yayımlamadı. Ama Spinoza'nın asıl radikalliği ateizminde değil: Tanrı'yı reddetmedi, kişi olmaktan çıkardı. Sonuçları hâlâ hesaplanıyor.",
    seoTitle: "Spinoza: Etika, Deus sive Natura ve conatus",
    metaDescription:
      "Spinoza'nın töz anlayışı, Deus sive Natura, conatus, duygular kuramı ve Teolojik-Politik İnceleme. Aforozdan bugünkü Spinoza dönüşüne.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Spinoza.jpg?width=1600",
    imageCredit: "Baruch Spinoza, yaklaşık 1665 · Herzog August Bibliothek · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-30T02:40:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["kavram", "din-felsefesi", "etik", "siyaset-felsefesi", "aydinlanma"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Baruch Spinoza",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/spinoza/",
      },
    ],
    content: `27 Temmuz 1656'da Amsterdam'daki Portekiz Yahudi cemaati, yirmi üç yaşındaki bir üyesini cemaatten atan bir *herem* — aforoz — metni okudu.

Metnin dili olağandışı sertlikteydi: Gündüz de gece de lanetlenecek, yatarken ve kalkarken lanetlenecek; kimse onunla dört arşından yakın durmayacak, kimse onunla konuşmayacak, kimse yazdığı hiçbir şeyi okumayacaktı.

Aforoz kararlarında bu ağırlıkta bir dil nadirdi. Ve dikkat çekici olan şu: **Bento de Espinosa o tarihte henüz tek satır yayımlamamıştı.**

Cemaat, kitaplarından değil, konuşmalarından korkuyordu.

## Yayımlanmayan başyapıt

Spinoza aforozdan sonra adını Latinceleştirdi — Benedictus de Spinoza — ve bir daha hiçbir cemaate girmedi. Hiçbir kiliseye de.

Hayatını **mercek yontarak** kazandı. Bu ayrıntı romantik bir detay değil, felsefi bir tercih: Heidelberg Üniversitesi'nden gelen profesörlük teklifini, düşünce özgürlüğünü kısıtlayacağı gerekçesiyle reddetti. Mercek yontmak kimseye hesap vermeyi gerektirmiyordu.

Sağlığında yalnızca iki kitap yayımladı; biri Descartes üzerine, öteki adı olmadan çıkan *Teolojik-Politik İnceleme*.

Başyapıtı **Etika**, ölümünden sonra, 1677'de, arkadaşları tarafından basıldı. Kırk dört yaşında ölmüştü — muhtemelen mercek tozunun akciğerlerinde biriktirdiği hastalıktan.

## Neden geometrik düzen?

*Etika*'yı ilk kez açan herkes aynı şaşkınlığı yaşar. Kitap felsefe metni gibi değil, **geometri kitabı** gibi görünür: tanımlar, aksiyomlar, önermeler, kanıtlar, sonuçlar. Euclid'in *Elemanlar*'ının biçimi.

Bu bir üslup gösterisi değil.

Spinoza'nın iddiası şu: Ahlak ve duygular üzerine düşünürken de, üçgenlerin özellikleri üzerine düşünürken kullandığımız kesinlikle çalışabiliriz. İnsan davranışını "çizgiler, düzlemler ve cisimler söz konusuymuş gibi" incelemek — kendi ifadesi bu.

Bunun ardında bir kabul reddi var: İnsan doğanın içinde bir istisna değildir. Kıskançlık ve nefret, doğanın kusurları değil; anlaşılabilir nedenleri olan doğal olaylardır. Spinoza'nın büyük itirazı, insanı "doğa içinde bir devlet içinde devlet" sayan anlayışa yöneliktir.

## Tek töz

Etika'nın ilk kitabı en zor ve en sonuçlu bölüm.

Descartes iki töz kabul ediyordu: düşünen töz (zihin) ve yer kaplayan töz (madde). İkisinin nasıl etkileştiği ise çözemediği problemdi.

Spinoza sorunu kökünden kesti: **Töz tektir.** Çünkü töz, tanımı gereği kendi başına var olan ve kendisi aracılığıyla kavranan şeydir; iki tözden söz etmek, birinin ötekini sınırlaması demektir — o zaman ikisi de sonsuz olamaz.

Öyleyse var olan tek bir töz vardır ve o sonsuzdur. Adı: **Deus sive Natura** — Tanrı ya da Doğa.

Bu "ya da" felsefe tarihinin en yüklü bağlacıdır. İki adı birbirinin yerine koyar.

## Radikallik nerede?

Spinoza'ya çağında "ateist" dendi, sonraki yüzyıllarda "Tanrı sarhoşu adam" (Novalis). İkisi de yanlış — ve ikisi birden doğru.

Spinoza Tanrı'yı reddetmedi. **Tanrı'yı kişi olmaktan çıkardı.**

Onun Tanrısı yaratmaz, çünkü yaratma bir anda başlamayı gerektirir. Amaç gütmez, çünkü amaç eksiklik varsayar — istediğine sahip olmayan bir varlık amaç güder. Dua duymaz, ödül vermez, ceza kesmez. İnsanı sevmez; Spinoza bunu açıkça yazar: "Tanrı'yı seven kimse, Tanrı'nın onu karşılık olarak sevmesini isteyemez."

Zorunlulukla vardır ve her şey ondan zorunlulukla çıkar. Dünya olabileceğinden başka türlü olamaz.

Bu, on yedinci yüzyılda söylenebilecek en tehlikeli şeydi. *Teolojik-Politik İnceleme* yayımlandığında hem Hollanda hem Katolik dünyada yasaklandı; Spinoza'nın adı yüz yıl boyunca bir hakaret olarak kullanıldı.

## Erek nedenin sonu

Spinoza'nın *Etika*'nın birinci kitabına eklediği ek, kitabın en okunası bölümüdür ve saf polemiktir.

Orada, insanların neden her şeyde bir amaç aradığını açıklar. İnsanlar kendi eylemlerinin amaçlı olduğunu bilir; buradan hareketle doğaya da amaç yükler. Güneş aydınlatmak için, otlar hayvanlar için, hayvanlar insan için vardır sanır.

Sonra bir deprem olur ve iyi insanlar ölür. Şema bozulur. Bunu açıklamak için "Tanrı'nın yolları anlaşılmaz" derler.

Spinoza'nın cümlesi keskindir: Bu, **"bilgisizliğin sığınağıdır"** (*asylum ignorantiae*).

Bilimsel devrimin felsefi ifadesi büyük ölçüde bu paragraftadır: Doğayı "ne için" diye değil, "nasıl" diye sormak.

## Conatus: her şey kendinde direnir

Spinoza'nın en verimli kavramı **conatus**.

Her şey, elinden geldiğince kendi varlığında sürüp gitmeye çabalar. Taş da, bitki de, insan da. Bu çaba dışarıdan verilmiş bir amaç değil, şeyin **fiilî özüdür**.

İnsanda conatus'a *arzu* denir. Ve buradan Spinoza'nın ahlak anlayışının tümü çıkar.

İyi ve kötü, evrende bulunan nitelikler değildir. **İyi**, conatus'umuzu artıran, etkinlik gücümüzü büyüten şeydir; **kötü** azaltandır. Bu yüzden Spinoza'da ahlak buyruk değil, **güç** meselesidir.

Ünlü cümlesi bunu özetler: "Bir şeyi iyi bulduğumuz için istemeyiz; istediğimiz için iyi buluruz."

## Duygular geometrisi

Etika'nın üçüncü kitabı duyguları inceler ve bunu vaaz vermeden yapar.

Temel duygular üçtür: **arzu**, **sevinç** (etkinlik gücünün artışı) ve **keder** (azalışı). Diğer bütün duygular bunların bileşimleridir; Spinoza kırk kadarını tek tek tanımlar.

Buradaki asıl ayrım **edilgin** ile **etkin** duygular arasındadır. Bir duygu, nedenini bilmediğimizde bizi edilgen kılar — sürüklenir, çarparız. Aynı duygunun nedenini kavradığımızda edilgenliği azalır.

Beşinci kitabın tezi budur: **Bir tutkuyu, ona dair açık ve seçik bir fikir oluşturduğumuz anda tutku olmaktan çıkarırız.**

Özgürlük, Spinoza'da nedenlerden kurtulmak değildir — bu imkânsızdır. Özgürlük, kendi nedenlerini anlamaktır. İnsan, taşın havada uçarken kendini özgür sanmasına benzer bir yanılgı içindedir: Arzularını bilir, arzularının nedenlerini bilmez.

## Siyaset: korkuyu azaltmak

*Teolojik-Politik İnceleme*'nin alt başlığı programını verir: Felsefe yapma özgürlüğünün, dindarlığa ve devletin barışına zarar vermeden tanınabileceğini göstermek.

Spinoza kutsal metin eleştirisinin kurucularındandır. Tevrat'ı tarihsel bir belge olarak okur, yazarlık sorunlarını inceler, mucize anlatılarını dönemin anlama biçimine bağlar. Modern filoloji büyük ölçüde buradan doğar.

Siyasal tezi de conatus'tan çıkar. Devletin amacı insanları köle gibi yönetmek değil, **korkudan kurtarmaktır**: "Devletin amacı özgürlüktür."

Demokrasiyi rejimlerin en doğalı sayar, çünkü insanların doğal güçlerini en az bastıran düzendir.

## Neden bugün dönüldü?

Spinoza yüz elli yıl boyunca ismi anılmayan bir düşünürdü. On sekizinci yüzyıl sonunda Alman edebiyat dünyasında patlayan *Pantheismusstreit* — panteizm tartışması — onu geri getirdi; Goethe, Herder, Schelling ve Hegel için Spinoza kaçınılmaz bir muhatap oldu.

Yirminci yüzyıl sonundaki dönüş ise başka nedenlerle geldi.

**Deleuze**, Spinoza'yı "filozofların İsa'sı" diye andı ve conatus'u arzu felsefesinin merkezine yerleştirdi. **Antonio Negri**, *Yaban Kuraldışılık*'ta Spinoza'yı demokratik çokluk kuramının kaynağı olarak okudu.

Sinirbilim tarafında **Antonio Damasio**, *Spinoza'yı Ararken* kitabında duygu kuramının çağdaş bulgularla örtüştüğünü savundu: Beden ile zihnin ayrı iki şey olmadığı, duyguların bilişin engeli değil bileşeni olduğu tezleri.

Ekoloji tartışmasında da adı geçiyor: İnsanı doğanın içinde, ayrıcalıksız bir parça olarak konumlandıran bir metafizik, çevre felsefesi için kullanışlı bir zemin sunuyor.

## Sakin intikam

Spinoza'nın hayatına dair anlatılar hep aynı sıfatı taşır: sakin.

Kırk dört yıl yaşadı. Zenginlik reddetti, miras davasını kazanıp mirası bağışladı, kürsü teklifini geri çevirdi, adını kitaplarından sildi. Öldüğünde eşyası bir masa, bir yatak ve mercek aletlerinden ibaretti.

Ama bu sakinlik teslimiyet değildi. Aforoz metni "kimse yazdığı hiçbir şeyi okumayacak" diyordu.

Üç yüz elli yıl sonra Spinoza, felsefe bölümlerinde en çok okunan on yedinci yüzyıl düşünürlerinden biri.

Aforozun kaldırılıp kaldırılmaması Amsterdam Portekiz Yahudi cemaatinde zaman zaman gündeme geliyor; bugüne kadar kaldırılmadı.

## Türkçede

*Etika*, *Teolojik-Politik İnceleme*, *Kısa İnceleme* ve *Politik İnceleme* Türkçeye çevrildi. Mektupları da Türkçede bulunuyor.`,
  },
  {
    title: "Nolan'ın Odysseus'u neden vicdan azabı çekiyor? Bir filozoftan sert itiraz",
    slug: "nolan-odysseia-lawson-vicdan-elestirisi",
    summary:
      "Etik felsefecisi Kathryn Lawson, Nolan'ın Odysseia uyarlamasına yönelttiği eleştiride Arendt, Levinas ve Weil'i tanık gösteriyor: Homeros'un Odysseus'u şiddetinden dolayı suçluluk duymaz ve bu bir kusur değil, bir uyarıdır. Kahramana vicdan takmak, hikâyenin etik derinliğini kesiyor.",
    seoTitle: "Nolan'ın Odysseia'sına felsefi itiraz: Kathryn Lawson",
    metaDescription:
      "Kathryn Lawson, Nolan'ın Odysseia uyarlamasını Arendt, Levinas ve Simone Weil üzerinden eleştiriyor: Suçluluk duyan kahraman, iktidar eleştirisini zayıflatıyor.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Odysseus_Sirens_BM_E440.jpg?width=1600",
    imageCredit: "Odysseus ve Sirenler — Attika kırmızı figürlü stamnos, MÖ 480-470 dolayları, British Museum · Wikimedia Commons",
    featured: true,
    sourceName: "IAI — Institute of Art and Ideas",
    sourceUrl: "https://iai.tv/articles/nolans-odyssey-is-naive-about-the-nature-of-guilt-and-power-auid-3665",
    publishedAt: "2026-08-30T02:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["etik", "antik-felsefe", "sinema", "siyaset-felsefesi", "estetik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Nolan's Odyssey is naive about the nature of guilt and power",
        publisher: "IAI TV",
        url: "https://iai.tv/articles/nolans-odyssey-is-naive-about-the-nature-of-guilt-and-power-auid-3665",
        primary: true,
      },
      {
        title: "An Uncomplicated Man",
        publisher: "London Review of Books",
        url: "https://www.lrb.co.uk/the-paper/v48/n14/emily-wilson/an-uncomplicated-man",
      },
      {
        title: "Kathryn Lawson",
        publisher: "IAI TV",
        url: "https://iai.tv/home/speakers-and-authors/kathryn-lawson",
      },
    ],
    content: `Bir destanı uyarlarken kahramana çağdaş bir vicdan vermek, iyi niyetli bir tercih gibi görünür. Etik felsefecisi **Kathryn Lawson**'a göre bu, Nolan'ın Odysseia'sındaki **en tehlikeli hata**.

Halifax'taki University of King's College'da beşerî bilimler alanında öğretim üyesi olan Lawson, Simone Weil ve Hannah Arendt üzerine iki kitabın yazarı: *Ecological Ethics and the Philosophy of Simone Weil* ve *Hannah Arendt and Simone Weil: Unprecedented Conversations*.

IAI'de yayımlanan yazısında filme yönelttiği itiraz, sinema eleştirisinden çok bir siyaset felsefesi tartışması.

## Önce filmin tezi

Christopher Nolan'ın uyarlaması, yaz gişe filmi olmasına rağmen büyük ölçüde **yabancının etik talebi** üzerine bir düşünme.

Filmin ana teması, konukseverlik yasasını Altın Kural'la birleştiriyor: yabancıya kapıyı kapatma, çünkü kim olduğunu bilemezsin; ve başkalarına sana davranılmasını istediğin gibi davran. Nolan bu ikisini birleştirip "Zeus'un Yasası" adını veriyor.

Klasikçi **Emily Wilson** — *Odysseia*'nın çok tartışılan İngilizce çevirisinin sahibi — London Review of Books'taki yazısında filmi yazımı bakımından sert biçimde eleştirdi; başlığı "Karmaşık Olmayan Bir Adam"dı. **Slavoj Žižek** ise beklediği devasa gişe filmini bulamadığını, karşısına mütevazı bir oda dramı çıktığını yazdı.

Lawson'ın itirazı ise başka bir yerden geliyor.

## Homeros'a dönen üç düşünür

Lawson'ın tanıkları rastgele seçilmemiş. **Hannah Arendt**, **Emmanuel Levinas** ve **Simone Weil** — üçü de dünya savaşlarından sonra, yaşananları anlamlandırmak için Homeros'a döndü.

Weil'in 1940 tarihli *İlyada, ya da Kuvvetin Şiiri* denemesi bu okumanın en bilinen örneği. Sitemizde daha önce [andığımız gibi](/haber/felsefe-tarihinde-bugun-24-agustos-simone-weil), Weil'in tezi şuydu: *İlyada*'nın büyüklüğü, kuvveti ne yüceltmesi ne de gizlemesindedir. Kuvveti tarafsız biçimde, **hem uygulayanı hem uğrayanı şeye dönüştüren** bir mekanizma olarak gösterir.

Arendt ve Weil için Homeros destanları olağanüstüdür çünkü savaşı hem galiplerin hem mağlupların gözünden anlatır. Ozan, yıkılan şehirdeki "düşmanların" insanlığını tanıyabilmektedir. Şiir, kendi işlediği suçları görmenin açtığı uçuruma düşmeden sorumluluk üzerine düşünebilmektedir.

## Kritik nokta: Odysseus suçluluk duymaz

Lawson'ın çözümlemesinin merkezinde tek bir gözlem var.

Homeros'un Odysseus'u işlediği şiddetten dolayı **vicdan azabı çekmez**. Taliplerin katli, hizmetçilerin asılması, yol boyunca dökülen kan — hiçbiri onda bir iç hesaplaşma başlatmaz.

Modern okur bunu destanın ahlaki ilkelliği sayma eğilimindedir. Lawson tersini savunuyor: Bu bir **eksiklik değil, uyarıdır**.

Destanın söylediği şudur: **İktidar kendi zalimliğini nadiren fark eder.** Gücü elinde tutanın kendi kendine dönüp "yanlış yaptım" demesi beklenemez. Şiddeti durduran şey failin vicdanı değil, dışarıdan gelen bir sınırdır — tanrılar, gelenek, konukseverlik yasası, ya da karşı güç.

Weil'in kuvvet çözümlemesi tam olarak bunu söyler. Kuvvet, uygulayanı da bozar; kendini sınırlama kapasitesini de yok eder.

## Nolan'ın hatası

Nolan, Odysseus'a çağdaş bir vicdan taktığında Lawson'a göre hikâyenin etik derinliğini kesiyor.

Ortaya çıkan şey rahatlatıcı bir fantezi: **Güçlü olanlar, ne yaptıklarını anladıklarında kendiliğinden değişecekler.**

Lawson'ın karşı çıktığı tam bu. Gerçeklik başka bir şey gösteriyor. İktidarın kendini sınırladığı örnekler, kavrayışın değil, **dışarıdan gelen bir direncin** sonucudur.

Suçluluk duyan kahraman, seyirciye iyi hissettirir. Ama aynı zamanda dışarıdan sınır koyma ihtiyacını gereksiz kılar. Vicdan yeterliyse, kurumlara, yasalara ve karşı güce ne gerek var?

## Levinas'ın yeri

Lawson'ın üçüncü tanığı Levinas, tartışmaya farklı bir kavram getiriyor: **yüz**.

Levinas'ta etik, ötekinin yüzüyle karşılaşmadan doğar. Yüz, hesaba katılamayan, kategoriye indirgenemeyen bir talep taşır: "Öldürmeyeceksin."

Bu, Odysseus okumasını keskinleştiriyor. Etik talep failin içinden değil, **dışarıdan** gelir. Ötekinin varlığından. İçselleştirilmiş bir vicdan, o dışarıdanlığı ortadan kaldırır — ve etiği failin kendi psikolojisine hapseder.

Nolan'ın Odysseus'u kendisiyle hesaplaşır. Homeros'un Odysseus'u ise başkalarıyla, tanrılarla ve yasayla hesaplaşmak zorundadır.

İkincisi daha az konforlu, ama Lawson'a göre daha gerçekçi.

## Karşı görüş

Lawson'ın tezine yöneltilebilecek itirazlar da var ve onları da kaydetmek gerekir.

Birincisi biçimsel: Bir uyarlama, kaynağın etik yapısını korumakla yükümlü müdür? Sinema kendi araçlarıyla başka bir soru sorabilir.

İkincisi kuramsal: Suçluluğun siyasal olarak işlevsiz olduğu iddiası fazla kesin olabilir. Savaş sonrası Almanya'daki hesaplaşma tartışmaları — Karl Jaspers'ın *Suçluluk Sorunu* kitabı dahil — kolektif suçluluğun kurumsal sonuçlar üretebildiğini gösteriyor.

Üçüncüsü tarihsel: Homeros'un Odysseus'unun vicdan taşımaması, o dönemin ahlaki söz dağarcığının farklılığından da kaynaklanabilir. Antik Yunan'da "suçluluk" kategorisi bizim anladığımız biçimde mevcut değildi; utanç kültürü ile suçluluk kültürü ayrımı klasik filolojinin eski tartışmalarından.

Lawson'ın gücü bu itirazları çürütmesinde değil, soruyu doğru yere koymasında: **Bir anlatının etik değeri, seyirciyi rahatlatmasında mı, yoksa rahatsız etmesinde mi?**

## Eylül'de Londra'da

Emily Wilson, eylül ayında Londra'da düzenlenecek **HowTheLightGetsIn** festivalinde "Ego ve Destan" başlıklı bir tartışmaya katılacak. Kendisini felsefe ve müzik alanındaki en büyük festival olarak tanımlayan etkinlikte Louis Theroux, Roger Penrose ve Mariana Mazzucato gibi isimler de konuşacak.

Homeros tartışmasının bu yıl içinde birden fazla mecrada sürmesi tesadüf değil. Yabancı, konukseverlik ve şiddetin sınırı — üçü de bugünün gündeminde.

---

*Not: Bu yazı filmin bir eleştirisi değil, filmin açtığı felsefi tartışmanın aktarımıdır.*`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 30 Ağustos: Mary Shelley'nin doğumu",
    slug: "felsefe-tarihinde-bugun-30-agustos-mary-shelley",
    summary:
      "Mary Wollstonecraft Shelley 30 Ağustos 1797'de Londra'da doğdu. On sekiz yaşında yazdığı Frankenstein, iki yüz yıl sonra yapay zekâ etiğinin en çok atıf alan edebî metni oldu. Aynı gün, 1871'de atom çekirdeğini keşfedecek olan Ernest Rutherford doğdu.",
    seoTitle: "30 Ağustos 1797: Mary Shelley'nin doğumu",
    metaDescription:
      "Mary Shelley 30 Ağustos 1797'de doğdu. Frankenstein, yaratıcının sorumluluğu ve yapay zekâ etiğindeki yeri. Ayrıca 30 Ağustos 1871: Ernest Rutherford.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Mary_Shelley.jpeg?width=1600",
    imageCredit: "Mary Wollstonecraft Shelley, Richard Rothwell'in portresi · National Portrait Gallery · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/Mary-Wollstonecraft-Shelley",
    publishedAt: "2026-08-30T02:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "teknoloji-felsefesi", "etik", "toplumsal-cinsiyet", "risk"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Mary Wollstonecraft Shelley",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/Mary-Wollstonecraft-Shelley",
        primary: true,
      },
      {
        title: "Ernest Rutherford",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/Ernest-Rutherford",
      },
    ],
    content: `**Mary Wollstonecraft Godwin**, 30 Ağustos 1797'de Londra'da doğdu. Annesi doğumdan on gün sonra öldü.

Bu iki cümle, bir hayatın çerçevesini kuruyor.

## Ana babası

Annesi **Mary Wollstonecraft**, *Kadın Haklarının Gerekçelendirilmesi*'nin (1792) yazarı — modern feminist siyaset felsefesinin kurucu metni. Babası **William Godwin**, *Siyasal Adalet Üzerine Bir Soruşturma*'nın (1793) yazarı ve anarşist siyaset düşüncesinin ilk sistematik temsilcisi.

Mary Shelley, on sekizinci yüzyıl sonunun en radikal iki siyaset filozofunun çocuğu olarak doğdu. Annesinin mezarı başında okumayı öğrendiği anlatılır.

Bu miras, *Frankenstein*'ı bir korku hikâyesi olarak okumayı güçleştiriyor.

## 1816: Cenevre Gölü

Kitabın doğuş hikâyesi çok anlatıldı ama bir ayrıntısı genellikle atlanır.

1816, "yazsız yıl" olarak bilinir. Endonezya'daki Tambora yanardağının bir yıl önceki patlaması küresel iklimi bozmuş, Avrupa'da yaz gelmemiştir. Byron'ın Cenevre Gölü kıyısındaki villasında sıkışıp kalan grup — Byron, Percy Shelley, Mary Godwin, John Polidori — vakit geçirmek için hayalet hikâyesi yazmaya karar verir.

On sekiz yaşındaki Mary'nin yazdığı metin, iki yıl sonra adı olmadan yayımlanacaktı: *Frankenstein, ya da Modern Prometheus*.

O dönem çevrede konuşulan şey doğaüstü değil, bilimdi: Galvani'nin ölü kurbağa bacaklarını elektrikle kasılmaya zorlayan deneyleri, **galvanizm** ve canlılığın maddi bir açıklamasının mümkün olup olmadığı tartışması.

## Kitabın asıl sorusu

*Frankenstein* yaygın olarak "bilim insanının kibri" hikâyesi diye özetlenir: İnsan Tanrı'yı oynadı, cezasını buldu.

Metnin kendisi bunu söylemez.

Victor Frankenstein'ın hatası yaratmak değildir. Hatası, **yarattığı şeyi terk etmesidir**. Yaratık gözlerini açtığı anda Victor odadan kaçar. Bir daha da sorumluluğunu üstlenmez.

Yaratık canavar doğmaz; **canavarlaştırılır**. Kitabın ortasındaki uzun anlatı bölümü — yaratığın kendi ağzından hikâyesi — bir eğitim romanıdır: Dili öğrenir, Plutarkhos ve Milton okur, bir aileyi gizlice izleyerek şefkati tanır. Ve her karşılaşmada görünüşü nedeniyle reddedilir.

Şiddete başvurması, bu reddedilmelerin sonucudur.

Buradaki tez, annesinin ve babasının siyaset felsefesinden geliyor: **Karakter, doğuştan gelen bir öz değil, koşulların ürünüdür.** Godwin'in bütün siyasal iyimserliği bu ilkeye dayanıyordu.

Mary Shelley aynı ilkeyi alıp karanlık tarafını gösterdi.

## Bugün neden okunuyor?

*Frankenstein* son on yılda yapay zekâ etiği literatüründe en çok atıf alan edebî metin hâline geldi. Nedeni açık.

Tartışmanın merkezindeki sorular kitabın kurduğu sorularla aynı: **Yarattığımız şeye karşı sorumluluğumuz nedir? Sorumluluk yaratma anında biter mi, sürer mi?**

Victor'ın hatası teknik bir hata değildi. Yaratma kararını verirken hiçbir toplumsal denetim aramamış, sonuçlarını düşünmemiş ve ortaya çıkan varlığı öngörülemez bulunca ondan kaçmıştı.

Sitemizde bu ay aktardığımız [yapay zekânın ahlaki statüsü tartışması](/haber/yapay-zeka-ahlaki-statu-tartismasi) ve [MatrAIx simülasyon projesi](/haber/matraix-persona-simulasyonu) da benzer sorular etrafında dönüyor: Ürettiğimiz şeyin bize benzemesi, ona karşı yükümlülük doğurur mu?

Kitabın alt başlığı da bir uyarı taşıyor: *Modern Prometheus*. Prometheus ateşi çaldığı için değil, sonuçlarını üstlendiği için trajik bir figürdür.

## Yalnızca Frankenstein değil

Mary Shelley'yi tek kitaba indirgemek yaygın bir haksızlık.

1826 tarihli **Son İnsan**, bir salgının insanlığı yok edişini anlatan ilk modern kıyamet romanlarından. Kitap uzun süre unutuldu; yirminci yüzyıl sonunda yeniden keşfedildi ve pandemi yıllarında yeniden okundu.

Percy Shelley'nin 1822'deki ölümünden sonra, kocasının şiirlerini derleyip yayına hazırlayan da oydu. Percy Shelley'nin bugünkü edebî konumu büyük ölçüde bu editöryel emeğin ürünü.

## 1871: Ernest Rutherford

Aynı gün, 1871'de Yeni Zelanda'da **Ernest Rutherford** doğdu.

Atom çekirdeğini keşfeden, radyoaktif bozunmayı açıklayan ve ilk yapay element dönüşümünü gerçekleştiren fizikçi. 1908'de Nobel Kimya Ödülü'nü aldı.

Felsefe için önemi iki yönlü.

Birincisi bilgi kuramsal: Rutherford'un 1911'deki altın folyo deneyi, doğrudan gözlenemeyen bir yapının — atom çekirdeğinin — dolaylı kanıtla nasıl kurulabileceğinin ders kitabı örneğidir. Bilim felsefesindeki **gözlenemeyenlerin gerçekliği** tartışması bu tür örnekler üzerinden yürür.

İkincisi ahlaki. Rutherford, atom çekirdeğinden enerji elde etmenin pratik olarak mümkün olduğunu düşünmüyordu; bunu savunanlar için "aymazlık" anlamına gelen bir sözcük kullandığı aktarılır. Öldüğü 1937'den sekiz yıl sonra Hiroşima'ya bomba atıldı.

Bir bilim insanının kendi keşfinin sonuçlarını öngörememesi — Mary Shelley'nin aynı gün doğmuş olması, takvimin ürettiği anlamlı rastlantılardan biri.

## Türkçede

*Frankenstein* Türkçeye defalarca çevrildi; *Son İnsan* da Türkçede bulunuyor. Annesi Mary Wollstonecraft'ın *Kadın Haklarının Gerekçelendirilmesi* ve babası Godwin'in metinleri de Türkçeye kazandırıldı.`,
  },
  {
    title: "Bedia Akarsu: Türkçeyi felsefenin dili yapan Cumhuriyet aydını",
    slug: "bedia-akarsu-felsefenin-dili",
    summary:
      "Dil, kültür, ahlak ve insan sorununu tek bir düşünsel çizgide buluşturan Akarsu, Türkiye'nin önde gelen felsefe profesörlerinden biri olmakla kalmadı; Türkçenin bir felsefe dili olarak kurulmasına da katkıda bulundu. Felsefe Terimleri Sözlüğü bugün hâlâ başvuru kaynağı.",
    seoTitle: "Bedia Akarsu: dil, ahlak ve insan sorunu",
    metaDescription:
      "Bedia Akarsu'nun Felsefe Terimleri Sözlüğü, Humboldt ve Scheler çalışmaları, Kant okuması ve Türkçenin felsefe dili olarak kurulmasındaki rolü.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0stanbul_%C3%9Cniversitesi_Edebiyat_Fak%C3%BCltesi_binas%C4%B1.jpg?width=1600",
    imageCredit: "İstanbul Üniversitesi Edebiyat Fakültesi — Bedia Akarsu kırk yılı aşkın süre bu binada ders verdi · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-29T03:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["etik", "kavram", "akademi", "ceviri", "toplumsal-cinsiyet"],
    philosopherSlugs: [],
    sources: [
      {
        title: "İstanbul Üniversitesi Edebiyat Fakültesi",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/Category:Istanbul_University_Faculty_of_Letters",
      },
    ],
    content: `Türkiye'de felsefenin yalnızca üniversite kürsülerinde değil, dilin kendisinde de kurulduğunu söylemek gerekirse, bu sürecin en önemli isimlerinden biri **Bedia Akarsu**'dur.

27 Ocak 1921'de İstanbul'da doğdu, 26 Şubat 2016'da yine İstanbul'da öldü. Geride yalnızca kitaplar ve makaleler değil, **Türkiye'de felsefe yapmanın dilsel imkânlarına** ilişkin bir düşünce mirası bıraktı.

## Bir kuşağın içinden

Akarsu'nun hayatı, Cumhuriyet'in üniversite ve kültür kurumlarının yeniden şekillendiği dönemin felsefe tarihiyle iç içe.

İstanbul Üniversitesi Felsefe Bölümü'nü 1943'te bitirdi; 1944'te üniversitede seminer kütüphanecisi olarak çalışmaya başladı. Doktorasına Ernst von Aster'in yanında başladı; hocasının ölümünün ardından Joachim Ritter'in danışmanlığında tamamladı.

Tezinin başlığı sonraki kırk yılını haber veriyordu: **"Wilhelm von Humboldt'ta Dil-Kültür Bağlantısı."**

Humboldt'un tezi şuydu: Dil, düşüncelerin aktarıldığı bir araç değil; bir halkın dünyayı görme biçiminin kendisidir. Her dil bir dünya görüşü taşır. Akarsu bu fikri bir felsefe tarihi konusu olarak değil, **Türkiye'nin kendi meselesi** olarak aldı.

## Alman felsefesiyle kurulan bağ

1933 Üniversite Reformu'ndan sonra İstanbul Üniversitesi'ne gelen Alman felsefe geleneği, Akarsu'nun oluşumunda belirleyici oldu. Ernst von Aster, Joachim Ritter ve Takiyettin Mengüşoğlu ile çalıştı.

Arnold Gehlen ve Hans Freyer'in İstanbul'daki konferanslarını, Ritter'in derslerini Türkçeye çevirdi. 1956-1958 arasında Heidelberg Üniversitesi'nde **Hans-Georg Gadamer**'in fenomenoloji seminerlerine katıldı ve orada Max Scheler üzerine çalıştı.

1955'te Felsefe Tarihi Kürsüsü'nde asistan oldu; 1960'ta *Max Scheler'de Kişilik Problemi* çalışmasıyla doçent, 1968'de profesör oldu. Sonraki yıllarda İstanbul Üniversitesi Felsefe Bölümü başkanlığı yaptı.

## "Felsefe Terimleri Sözlüğü": bir terminoloji çalışmasından fazlası

Akarsu'nun adı bugün en geniş biçimde **Felsefe Terimleri Sözlüğü** ile anılıyor.

Eser ilk kez 1975'te Türk Dil Kurumu tarafından yayımlandı; sonraki yıllarda gözden geçirilmiş baskılarla çıkmaya devam etti.

Ama sözlüğün önemi içerdiği terim sayısında değil. Akarsu'nun iddiası daha derindi:

**Bir toplum kendi dilinde felsefe yapabilmelidir.**

Bu iddiaya göre felsefe terminolojisi teknik bir sözlük hazırlama işi değil, doğrudan **düşüncenin özgürleşmesi** meselesidir. Felsefi bir kavramın Türkçede karşılığını bulmak, düşünceyi başka bir dilin kalıplarından kurtarmaktır.

Akarsu'ya göre sorun Türkçenin felsefeye elverişli olup olmaması değildi. Sorun, Türkçenin düşünme kapasitesini kullanıp kullanmadığımızdı.

## Macit Gökberk'le birlikte

Akarsu'nun dil çalışmalarını Türk Dil Kurumu'ndan ayrı düşünmek mümkün değil.

1963-1983 arasında TDK yönetim kurulunda görev yaptı; özellikle **Macit Gökberk** ile birlikte felsefe terimlerinin Türkçeleştirilmesinde etkin rol oynadı.

Bu, Cumhuriyet'in felsefe alanındaki kurumsallaşmasının gözden kaçan yarısıdır. Kürsü açmak yetmiyordu; yeni bir felsefe dili de gerekiyordu.

"Varlık", "öz", "değer", "özgürlük", "bilinç", "erek", "yargı", "zorunluluk", "olumsallık" gibi kavramların Türkçe felsefi terminolojiye yerleşmesi, uzun bir kültür dönüşümünün parçasıydı.

Bugün bir felsefe öğrencisi bu sözcükleri kullanırken, ardındaki tercih tartışmalarını çoğu zaman bilmez. Sözlük, o tartışmaların tortusudur.

## Kant ve Scheler: saygı ile sevgi

Akarsu'nun ikinci ekseni ahlaktı; burada iki isim belirleyici oldu.

Kendi ifadesiyle **Kant** ona "insana saygıyı", **Scheler** ise "sevgiyi" öğretiyordu. İkisi de yalnızca ahlak felsefesinin kavramları değil, insan olmanın nitelikleriydi.

Kant'ın ahlakında insan hiçbir zaman yalnızca araç olarak görülemez; kendi başına amaç olan bir varlıktır. Scheler ise insanın değer dünyasını, duygularını ve kişilik yapısını felsefenin temel sorunlarından biri hâline getirir.

Akarsu'nun iki filozof arasında kurduğu köprü kendi yönelimini de belirledi: **İnsan yalnızca bilen değil; değer veren, seçen, sorumluluk taşıyan ve kendini gerçekleştiren bir varlıktır.**

## Ahlak öğretileri: iki cilt, iki yaklaşım

*Ahlak Öğretileri I: Mutluluk Ahlakı*, ilkçağdan başlayarak farklı filozofların mutluluk, erdem ve iyi yaşam anlayışlarını inceler.

*Ahlak Öğretileri II: Immanuel Kant'ın Ahlak Felsefesi* ise ödev ahlakına odaklanır.

Akarsu'nun Kant yorumunda dikkat çeken nokta şu: Kant ahlakını bir **kendini sınırlama** ahlakı olarak okur. Klasik ilkçağ ahlakında ise insanın kendini geliştirmesi ve gerçekleştirmesi daha belirgindir.

Bu ayrım, onun insan felsefesine açılan kapıdır: İnsan yalnızca kurallara uyan değil, **kendini oluşturan** bir varlıktır.

## "İnsan-olma" sorunu

Scheler, Akarsu'nun akademik hayatında özel bir yer tutuyordu. İlk çalışmalarından biri olan *Max Scheler'de Kişilik Problemi*'ni sonraki yıllarda genişleterek *Max Scheler Felsefesinde Kişi Kavramı ve İnsan-Olma Sorunu* başlığıyla yayımladı.

Burada "insan" biyolojik bir türün adı olmaktan çıkar ve felsefi bir probleme dönüşür: **İnsan olmak ne demektir?**

Akarsu için kişilik, psikolojik özelliklerin toplamı değildir. İnsan, değerlerle ilişki kuran ve kendini bu değerler dünyası içinde gerçekleştiren bir varlıktır.

Bu yüzden Scheler okumaları dil ve ahlak çalışmalarından kopuk değil. Zincir şudur: **Dil kültürü kurar; kültür değerleri taşır; değerler insanın kendini gerçekleştirme biçimini belirler.** Akarsu'nun farklı konuları tek bir merkezde birleşir: insan.

## "Modern Toplumda Kadın"

1963 tarihli *Modern Toplumda Kadın*, kadın meselesini yalnızca toplumsal ya da hukuki bir problem olarak değil, **insanın kendini gerçekleştirmesi** açısından ele alan erken çalışmalardan biri.

Akarsu burada kadının yalnızca "kadın olarak" değil, insan olarak kendini kabul ettirme mücadelesine dikkat çekiyordu.

Dönemin Türkiyesi açısından bu, dikkat çekici bir konumdur. Çünkü Akarsu'nun eşitlik anlayışı toplumsal roller üzerinden değil, **insanın evrensel değeri** üzerinden kuruluyor.

Bu bakımdan kadın sorunu, onun ahlak felsefesinin doğal uzantısıdır: İnsan bir araç değil, kendi başına değeri olan bir varlıktır.

## Cumhuriyet ve Aydınlanma

Akarsu'yu yalnızca Kant ve Scheler üzerinden okumak yetersiz kalır. Düşüncesinin arkasında güçlü bir Aydınlanma ve Cumhuriyet fikri var.

*Atatürk Devrimi ve Yorumları* ile *Atatürk Devrimi ve Temelleri* gibi çalışmaları, Cumhuriyet'i siyasal bir rejim değişikliği olarak değil, **kültürel ve düşünsel bir dönüşüm** olarak değerlendirdiğini gösteriyor.

Modernleşme konusundaki yaklaşımı da buradan geliyor: Batı'dan yalnızca teknik unsurları almak yetmez; modern bilimin, laikliğin ve Aydınlanma düşüncesinin arkasındaki kültürel temellerin anlaşılması gerekir.

Tanzimat ile Cumhuriyet arasındaki farkı da siyasi değişiklikler üzerinden değil, **düşünme biçimindeki dönüşüm** üzerinden değerlendirir.

## Üniversitenin dışında

Akarsu'nun etkisi akademiyle sınırlı kalmadı. *Felsefe Arkivi*, *Türk Dili*, *Arayış*, *Gösteri*, *Çağdaş Eleştiri* ve *Cogito* gibi yayınlarda makaleleri çıktı; Cumhuriyet gazetesinde de yazdı.

Bu yönüyle "filozof-akademisyen" ile "kamusal aydın" kimliklerini birleştiren kuşağın temsilcilerindendi.

Onun için felsefe, uzmanların kendi aralarında konuştuğu kapalı bir disiplin değildi. Dil, ahlak, kadın, kültür, Cumhuriyet ve modernleşme felsefenin konusu olabilirdi.

1988-1989'da Çukurova Üniversitesi Eğitim Fakültesi'nde Felsefe Grubu Öğretmenliği Bölümü'nün kuruluşunda görev alması da aynı tutumun parçası: Felsefe yalnızca araştırılmaz, öğretilir de.

Yaşam çizgisinde dikkat çekici bir süreklilik var: **Felsefe yapmak, felsefeyi Türkçeleştirmek ve felsefeyi öğretmek.** Üçü de aynı projenin parçası.

## Değişen dünya, değişen değerler

2006'da yayımlanan *Değişen Dünya Değişen Değerler*, Akarsu'nun düşüncesinin yalnızca geçmişe dönük olmadığını gösteriyor.

Sorusu şu: **Dünya değişirken insanın değerleri nasıl değişiyor?**

Teknolojik gelişme ve toplumsal dönüşüm özgürlük, sorumluluk ve değer anlayışını dönüştürürken felsefenin görevi bu değişimi betimlemek değil, **değerlendirmektir**.

## Bugün neden okunmalı?

Vefatının üzerinden on yıl geçmişken Akarsu'nun düşüncesi üç tartışmada güncelleşiyor.

**Dil.** Yapay zekâ, dijital iletişim ve küresel akademik yayıncılık çağında "Türkçede felsefe yapılabilir mi?" sorusu başka bir biçimde geri geliyor. Akarsu'nun yanıtı açıktı: Sorun Türkçenin yetersizliği değil, kavramlaştırma yeteneğimiz. Sitemizde dün aktardığımız [Hilmi Ziya Ülken'in tercüme tezi](/haber/hilmi-ziya-ulken-sorulari) de aynı hattan geliyor.

**Ahlak.** Kant'ın insanı amaç olarak gören ahlakı ile Scheler'in değer dünyasına yaptığı vurgu, insanın teknolojik sistemler karşısındaki konumunun tartışıldığı bir dönemde güncelliğini koruyor.

**İnsan.** Yapay zekâdan biyoteknolojiye, algoritmik yönetimden dijital kültüre kadar bugünün tartışmalarının merkezinde yeniden "insan nedir?" sorusu var. Akarsu'nun Scheler üzerinden geliştirdiği "insan-olma" problemi bu yüzden yalnızca felsefe tarihi açısından değil, çağdaş dünya açısından da okunabilir.

## Miras

Akarsu'nun ağırlığı tek bir kitapla açıklanamaz. Mirası katmanlı:

Humboldt'tan hareketle dil ve kültür ilişkisini araştırdı. Scheler üzerinden kişi ve insan-olma sorununu inceledi. Kant üzerinden ahlakın ve insan onurunun temellerini tartıştı. Kadın sorununu felsefi bir problem olarak ele aldı. Cumhuriyet ve Aydınlanma üzerine düşündü. Ve Türk Dil Kurumu'nda felsefe terminolojisinin Türkçeleşmesine katkıda bulundu.

Bu nedenle onu "Türkiye'nin önemli kadın filozoflarından biri" diye tanımlamak yetersiz kalır. O, Cumhuriyet döneminde **felsefenin dilini kuran** bir aydındı.

Mirasını anlamanın en iyi yolu belki de kendi felsefe anlayışını hatırlamak: Felsefe bilgi biriktirmek değildir. Bilgiyi değerlendirmek, insanın nasıl yaşaması gerektiğini sorgulamaktır.

Kant'tan aldığı **saygı**, Scheler'den aldığı **sevgi** ve kendi çizgisinde birleştirdiği **insan olma** fikri — bugün de düşüncesini canlı tutan üç kavram.`,
  },
  {
    title: "8,3 milyar yapay persona: MatrAIx insanlığı simüle edebilir mi?",
    slug: "matraix-persona-simulasyonu",
    summary:
      "Harvard ve MIT öncülüğünde 93 araştırmacının hazırladığı çalışma, dünyanın her sakini için bir profil oluşturduğunu ve yapay zekâ sistemlerinin bu simüle edilmiş nüfus üzerinde test edilebileceğini bildiriyor. Teknik iddia güçlü; felsefi soru daha da büyük.",
    seoTitle: "MatrAIx: 8,3 milyar persona ajanıyla dünya simülasyonu",
    metaDescription:
      "MatrAIx araştırması 8,3 milyar persona ile yapay zekâ sistemlerini test etmeyi öneriyor. Simülasyonun felsefi ve epistemolojik sınırları.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Cern_datacenter.jpg?width=1600",
    imageCredit: "CERN veri merkezi · Wikimedia Commons",
    featured: true,
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org/abs/2608.04205",
    publishedAt: "2026-08-29T02:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["yapay-zeka", "teknoloji-felsefesi", "etik", "epistemoloji", "bilim-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "MatrAIx: Simulating the World with 8.3 Billion Persona Agents",
        publisher: "arXiv:2608.04205",
        date: "4 Ağustos 2026",
        url: "https://arxiv.org/abs/2608.04205",
        primary: true,
      },
      {
        title: "MatrAIx-Persona-8B",
        publisher: "GitHub",
        url: "https://github.com/MatrAIx-ai/MatrAIx-Persona-8B",
      },
      {
        title: "MatrAIx: Simulating the World with 8.3 Billion Persona Agents",
        publisher: "Hugging Face Papers",
        url: "https://huggingface.co/papers/2608.04205",
      },
    ],
    content: `Yapay zekâ alanında uzun süredir sorulan soru, makinelerin insan gibi düşünüp düşünemeyeceğiydi.

4 Ağustos'ta arXiv'de yayımlanan bir çalışma soruyu tersine çeviriyor: **Makineler insanları yeterince iyi simüle edebilir mi?**

**MatrAIx: Simulating the World with 8.3 Billion Persona Agents** başlıklı teknik rapor, Harvard ve MIT öncülüğünde doksan üç araştırmacı tarafından hazırlandı. Proje kendisini bir dil modeli olarak değil, **simüle edilmiş kullanıcılarla değerlendirme altyapısı** olarak tanımlıyor.

## Rakamlar

Sistemin merkezinde **Persona 8B** var.

Çalışmanın iddiası çarpıcı: 8,3 milyar profil — gezegenin her sakini için bir tane. Her profil yaştan mesleğe, gelirden risk toleransına uzanan **1.290 nitelikle** tanımlanıyor.

Burada bir ayrımı baştan koymak gerekiyor: Bu, 8,3 milyar gerçek insanın dijital kopyası değil. Nitelik kombinasyonlarından üretilebilen bir **persona uzayı**. Araştırmacılar bağıntıları koruyan bir bağımlılık grafiğinden örnekleme yaptıklarını belirtiyor.

Kamuya açılan kısım çok daha küçük: kalite filtresinden geçmiş yaklaşık **bir milyonluk bir çekirdek**. Bunun 599.847'si insan kaynaklı verilere dayanıyor, 400 bini sentetik.

Persona ajanları dört ortamda çalıştırılabiliyor: **anket, yapay zekâ sohbet botu, web ve uygulama** (masaüstü ve mobil dahil). Sistem yirmi beşten fazla alana yayılan 1.010 yeniden kullanılabilir görev içeriyor.

## Fikir: önce simüle et, sonra doğrula

MatrAIx'in önerdiği şey gerçek kullanıcı araştırmalarını ortadan kaldırmak değil.

Araştırmacılar simülasyonu, gerçek kullanıcı araştırmasından **önce** çalışan bir stres testi olarak konumlandırıyor. Bir şirket yeni bir uygulama geliştirdiğinde binlerce kullanıcıyla test yapmak zaman ve para gerektiriyor; aynı durum bir müşteri hizmetleri botu, finans uygulaması ya da sağlık yazılımı için de geçerli.

Yazılım mühendisliği açısından bunun kayda değer bir sonucu var. Geleneksel test şunu sorar: **Sistem doğru çalışıyor mu?**

MatrAIx buna ikinci bir soru ekliyor: **Sistem farklı insanlar karşısında nasıl çalışıyor?**

Araştırmacılar 18.189 değerlendirme deneyi gerçekleştirdiklerini bildiriyor. Persona ajanları farklı büyük dil modelleriyle çalıştırıldı.

Bu nokta önemli: MatrAIx kendi başına bir insan simülatörü değil. Persona bilgisi bir davranış çerçevesi sağlıyor; davranışı üreten mekanizma dil modelinin kendisi.

Denklem şöyle: **persona + ortam + görev + dil modeli = simüle edilmiş kullanıcı davranışı.**

## %91,5: persona davranışa dönüşüyor mu?

Çalışmanın en dikkat çekici ölçümlerinden biri persona uyumu.

On davranışsal özellik üzerinden 400 kontrollü deneme yapıldı; 366'sında personaya tanımlanan davranış ortaya çıktı ya da gerektiğinde doğru biçimde bastırıldı. Bu **yüzde 91,5**'lik bir uyum demek.

Rakam yüksek görünüyor. Ama burada metodolojik olarak dikkat edilmesi gereken bir şey var:

**Persona uyumu, insan gerçekliğiyle aynı şey değildir.**

Bir modelin "şüpheci kullanıcı" olarak tanımlanması ve deneyde şüpheci davranması, gerçek hayattaki şüpheci insanların da öyle davranacağını kanıtlamaz. Ölçülen şey, modelin kendisine verilen talimatı ne kadar iyi izlediği.

Aradaki fark, önümüzdeki yılların en önemli araştırma sorularından biri olabilir.

## Felsefenin eski sorusu: insan nedir?

MatrAIx'in teknik mimarisinin arkasında çok eski bir problem duruyor.

Bir insanı yaş, gelir, eğitim, meslek, kişilik özellikleri, tercihler ve davranış kalıpları üzerinden tanımlayabiliriz. Peki bütün bunları bir araya getirdiğimizde elimizde gerçekten "insan" mı olur, yoksa insan hakkında oluşturulmuş bir **veri modeli** mi?

Bu soru bizi Aristoteles'ten Kant'a, fenomenolojiden çağdaş zihin felsefesine uzanan bir tartışmanın içine sokuyor.

Çünkü insan yalnızca sahip olduğu niteliklerin toplamı değil. İnsan aynı zamanda **birinci şahıs deneyimine** sahip bir varlık olarak düşünülür.

Açlık "açlık = 0/1" değişkeni değildir. Kaygı bir davranış parametresi değildir. Bir ürüne duyulan güven kategorik bir özellik değildir. Bir insanın kararını belirleyen şey bazen hiçbir veri tabanının temsil edemeyeceği tekil bir deneyimdir.

Sitemizde bu ay aktardığımız [Don Ihde'nin postfenomenolojisi](/haber/don-ihde-postfenomenoloji-yapay-zeka) tam da bu farkı çözümlemek için kurulmuştu: Deneyim, niteliklerin toplamına indirgenemez.

## Döngüsellik problemi

Sistemin daha derin bir sorunu var: **Yapay zekâ, yapay zekâyı değerlendiriyor.**

MatrAIx'te persona ajanları büyük dil modelleri tarafından çalıştırılıyor ve değerlendirilen sistemler de yapay zekâ ürünleri. Buradan çıkan soru şu:

Bir yapay zekâ, başka bir yapay zekânın insanlar üzerindeki etkisini ölçerken gerçekten insan davranışını mı ölçüyor — yoksa modelin insan davranışı hakkındaki **varsayımlarını** mı?

Bu itiraz literatürde "döngüsellik problemi" adıyla gündeme getirildi. Küçümsenecek bir itiraz değil. Eğer yapay zekâ hem kullanıcı hem değerlendirici olarak kullanılırsa, sistem kendi varsayımlarını kendi içinde doğrulayan **kapalı bir epistemik çevrim** oluşturabilir.

Bu, bilim felsefesinde tanıdık bir tuzak: Ölçme aracının, ölçtüğü şeyle aynı varsayımları paylaşması.

## Asıl katkı: "ortalama kullanıcı" fikrinin sonu

MatrAIx'in hakkını teslim etmek gerekiyor. Proje, "ortalama insan" fikrinin yetersizliğini açık biçimde ortaya koyuyor.

Gerçek dünyada insanlar aynı değildir. Aynı ürünü farklı insanlar farklı kullanır. Aynı hata bir kullanıcı için önemsizken diğeri için sistemi tamamen terk etme nedeni olabilir. Aynı fiyat artışı bir tüketiciyi etkilemezken başkasının satın alma davranışını değiştirebilir.

Araştırmacılar farklı persona özelliklerinin fiyat artışına tepki, yapay zekâ asistanı başarısız olduğunda sistemi terk etme eğilimi ve gecikmeye tolerans gibi davranışlarda fark yarattığını gösteriyor.

Bugüne kadarki ölçütler çoğunlukla tek bir "ortalama kullanıcı" varsayıyordu. MatrAIx **kullanıcı çeşitliliğini** değerlendirmenin merkezine koyuyor.

Katkısı belki de tek cümlede: **"Model ne kadar iyi?" sorusunu "model kimin için ne kadar iyi?" sorusuna dönüştürmek.**

## Nerede durmalı?

Uzun vadeli sonuçlar ürün testiyle sınırlı kalmayabilir. Pazar araştırması, politika denemesi, eğitim sistemi tasarımı, reklam optimizasyonu — hepsi aynı altyapıyla yapılabilir.

Tam burada etik sınır belirginleşiyor.

Bir şirket "8,3 milyar sanal kullanıcıda test ettik" diyerek gerçek kullanıcı araştırmasını gereksiz görmeye başlarsa ne olur? Bir hükümet politikayı gerçek yurttaşlar yerine yapay yurttaşlar üzerinde denerse? Bir reklam şirketi hangi mesajın hangi personayı etkileyeceğini milyarlarca simülasyonla önceden hesaplayabilirse?

Teknoloji burada insanı **anlamaya çalışan** bir araç olmaktan çıkıp insan davranışını **öngören ve şekillendiren** bir araca dönüşebilir.

Araştırmacıların kendi ihtiyatı bu açıdan kayda değer: Simüle edilmiş kullanıcıların gerçek kullanıcıların yerine geçmediğini, sorunları daha erken keşfetmek için kullanılabileceğini, önemli sonuçların farklı modellerle kontrol edilip gerçek insanlarla doğrulanması gerektiğini belirtiyorlar.

Simülasyon ile gerçeklik arasındaki farkı kabul etmek, simülasyonun bilimsel olarak güvenilir kalabilmesinin ön koşulu.

## Yarışın konusu değişiyor

MatrAIx bir yön değişikliğine işaret ediyor.

İlk dönemin sorusu "kim daha büyük model yapacak?"tı. Sonra "kim daha güçlü ajan geliştirecek?" oldu. Şimdi giderek şu soru öne çıkıyor: **Kim insan davranışını daha iyi modelleyebilecek?**

Bu, yapay zekânın "zekâ üretme" teknolojisi olmaktan çıkıp **insan davranışını modelleme** teknolojisine dönüşmekte olduğunu gösteriyor.

Ve son soru belki de teknik değil: Yapay zekâ insanı ne kadar iyi taklit edebilir sorusundan çok, **insanı taklit ettiğini düşündüğümüz bir yapay zekâya ne zaman güvenmeye başlayacağız?**`,
  },
  {
    title: "Alain de Botton: felsefeyi üniversiteden çıkarıp gündelik hayata taşımak",
    slug: "alain-de-botton-gundelik-felsefe",
    summary:
      "Aşk, yalnızlık, statü kaygısı ve anlam arayışı. İngiliz-İsviçreli düşünür, felsefeyi akademik uzmanlığın sınırlarından çıkarıp gündelik meselelerin üzerine uygulayan en tanınan isim. Sorusu Sokrates'inki kadar eski: Nasıl yaşamalıyız?",
    seoTitle: "Alain de Botton: kamusal felsefe, statü kaygısı ve The School of Life",
    metaDescription:
      "Alain de Botton'ın felsefe anlayışı, The School of Life, statü kaygısı, aşk ve mimarlık üzerine düşünceleri; akademik felsefeyle ilişkisi.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Alain_de_Botton.jpg?width=1600",
    imageCredit: "Alain de Botton · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-29T02:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["etik", "estetik", "kavram", "medya", "soylesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Alain de Botton",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/Category:Alain_de_Botton",
      },
    ],
    content: `Felsefe tarihinin büyük bölümünde filozofun görevi yalnızca dünyayı açıklamak değildi.

Sokrates insanın nasıl yaşaması gerektiğini soruyordu. Epikuros mutluluğun koşullarını araştırıyordu. Seneca öfkeyi tartışıyordu. Montaigne kendini anlamaya çalışıyordu. Nietzsche insanın kendi değerlerini yaratma kapasitesini sorguluyordu.

**Alain de Botton**, bu eski felsefe anlayışını çağdaş dünyada canlandırmaya çalışan en görünür isim.

20 Aralık 1969'da Zürih'te doğdu. Felsefe eğitimi aldı; akademik kariyer yerine geniş okura seslenen kitapları tercih etti. 2008'de kurduğu **The School of Life** ile felsefe, psikoloji, edebiyat ve sanatın gündelik hayatta kullanılabileceği bir alan oluşturdu.

Sorusu her kitapta aynı: **Bir filozofun düşüncesi bugün benim hayatımda ne işe yarar?**

## Felsefe yalnızca üniversitede mi yapılmalı?

De Botton'ın akademik felsefeye itirazı, disiplinin giderek teknik ve uzmanlaşmış hâle gelmesine yönelik. Ona göre üniversite felsefesi çoğu zaman insanların gerçekten ilgilendiği hayat sorunlarından uzaklaşıyor; Cambridge'deki kendi eğitim deneyimini de bu açıdan eleştiriyor.

Bu tavrın kökleri *The Consolations of Philosophy*'ye — Türkçede *Felsefenin Tesellisi* — uzanıyor.

Kitapta altı filozof, modern insanın altı sorunuyla karşılaştırılıyor:

| Filozof | Sorun |
|---|---|
| Sokrates | Toplumun onayını kaybetmek |
| Epikuros | Para ve mutluluk |
| Seneca | Öfke ve hayal kırıklığı |
| Montaigne | Yetersizlik duygusu |
| Schopenhauer | Aşkta reddedilme |
| Nietzsche | Acı ve zorluk |

Buradaki iddia açık: **Felsefe, hayatı açıklamak kadar hayatı yaşamayı da öğretmelidir.**

## "Kişisel gelişim" itirazı

De Botton'ın en tartışmalı yanı da burada.

Savunucuları, onun felsefeyi elit akademik çevrelerden çıkarıp milyonlarca insanın hayatına soktuğunu söylüyor. Eleştirenler ise yaptığı şeyin felsefeyi bir tür entelektüel kişisel gelişim ürününe dönüştürmek olduğunu.

De Botton bu eleştiriyi büyük ölçüde reddediyor. Ona göre sorun "kendine yardım" fikrinin kendisi değil; bu alanın yüzeysel ve ticari biçimlere indirgenmesi. Antik Yunan ve Roma düşünürleri de insanlara nasıl yaşayacakları konusunda rehberlik ediyordu — Epikuros, Cicero, Seneca ve Marcus Aurelius bu anlamda okunabilir.

Farkı ise şu iddiada: **İyi yaşamak için motivasyona değil, düşünmeye ihtiyacımız var.**

## The School of Life: felsefe kurumsallaşırsa

2008'de kurulan The School of Life bugün dünyanın farklı yerlerinde ve çevrimiçi ortamda psikoloji, felsefe, ilişkiler ve duygusal zekâ üzerine içerik, video ve eğitim sunuyor.

Girişimin felsefi açıdan ilginç yanı, de Botton'ın felsefeyi yeniden bir **yaşam pratiği** olarak kurmaya çalışması.

Antik felsefe okullarını bu açıdan örnek alıyor. Sokrates'in Atina'daki tartışmaları, Aristoteles'in Lykeion'u ya da Epikuros'un Bahçesi yalnızca kuramsal bilgi üreten kurumlar değildi; nasıl yaşanacağına ilişkin pratik topluluklardı.

Bu okumanın arkasında **Pierre Hadot**'nun antik felsefeyi bir "ruhsal alıştırma" olarak inceleyen çalışmaları var. Hadot'nun tezi şuydu: Antik felsefe bir söylem değil, bir yaşam biçimiydi; kuramsal metinler o yaşam biçiminin yalnızca kalıntısıdır.

De Botton'ın projesi bu tezin çağdaş bir uygulaması: **Felsefe bir meslek olmadan önce bir yaşama biçimidir.**

## Aşk: beklentinin ağırlığı

De Botton'ın çağdaş okur üzerindeki etkisinin en büyük nedeni, felsefeyi aşk ve ilişkiler üzerinden anlatması.

*The Course of Love*'da romantik ilişkinin yalnızca tutku ve mutluluk değil; yanlış anlama, beklenti, hayal kırıklığı ve psikolojik aktarım alanı olduğunu tartışıyor.

Temel teşhisi şu: Modern insan romantik ilişkinin üzerine aşırı beklenti yüklüyor.

Artık partnerden yalnızca sevgi beklenmiyor. Aynı kişiden arkadaşlık, cinsellik, güven, entelektüel uyum, psikolojik destek, ekonomik ortaklık ve kişisel gelişim bekleniyor. Bu kadar çok talebin tek bir insana yüklenmesi ilişkiyi kırılganlaştırıyor.

### Özgürleşme neden işleri kolaylaştırmadı?

Geçmişte evlilikler büyük ölçüde aile, sınıf, din ve ekonomik zorunluluklar tarafından belirleniyordu. Modern insan partnerini kendi seçebileceğine inanıyor.

Ama seçimin özgürleşmesi beklentiyi de büyüttü. "İyi bir evlilik" yetmiyor; insanlar **"doğru kişiyi"** bulmak istiyor.

De Botton'ın eleştirisi burada: Romantik mutluluğun önündeki en büyük engel yanlış insanla birlikte olmak değil, **doğru insan fikrine fazla inanmak** olabilir.

Çünkü kusursuz partner yok. Herkesin kendi psikolojik sorunları, geçmişi ve yanlış anlamaları var. Her ilişki, iki kusurlu insanın birlikte yaşamayı öğrenme çabası.

## Yalnızlık: özgürlüğün bedeli

Modern toplum bireye büyük bir özgürlük sağlıyor. İnsan nerede yaşayacağına, kiminle olacağına ve hangi mesleği seçeceğine geçmişe kıyasla çok daha fazla kendisi karar veriyor.

Ama özgürlüğün bedeli **seçim sorumluluğu**.

Başarısız bir ilişkiyi artık topluma, aileye ya da kadere bağlamak mümkün değil. Modern birey kendi hayatının mimarı sayılıyor.

De Botton'a göre bu, psikolojik baskıyı artırıyor. Çünkü insan kendisini sürekli başkalarıyla karşılaştırıyor: daha başarılı olmalı, daha iyi bir partner bulmalı, daha anlamlı bir iş yapmalı, daha mutlu olmalı.

Böylece özgürlük, paradoksal biçimde yeni bir kaygı üretim mekanizmasına dönüşebiliyor.

## Statü kaygısı

De Botton'ın en kalıcı kavramı **statü kaygısı**.

Modern toplum insanlara kuramsal olarak sınırsız yükselme imkânı sunuyor. Paradoksal sonuç şu: Eğer herkes başarılı olabilecekse, başarısızlık artık kader değil **kişisel yetersizlik** olarak algılanıyor.

Bu nedenle modern insan yalnızca yoksulluktan korkmuyor; başkalarının kendisinden daha başarılı olmasından korkuyor.

Çözümlemenin bugün yeniden okunmasının nedeni açık. Sosyal medya platformları insanların başkalarının başarılarını sürekli görmesini sağlıyor. Eskiden insan birkaç komşusuyla kıyaslanırken bugün aynı anda binlerce hayatla kendini karşılaştırabiliyor.

Statü kaygısı küreselleşiyor.

## Güzellik etik bir mesele

*The Architecture of Happiness*'ta mimarlığı teknik bir yapı üretme faaliyeti olarak değil, insan psikolojisini etkileyen bir alan olarak ele alıyor.

İyi tasarlanmış bir okul, hastane, ev ya da tren istasyonu yalnızca estetik açıdan güzel değildir. İnsana bir mesaj da verir: **"Senin yaşamın önemlidir."**

Bu nedenle mimarlık de Botton açısından etik bir meseleye dönüşür. Çirkin ve bakımsız çevreler insanlara değersiz oldukları duygusunu verebilir; özenle tasarlanmış mekânlar gündelik hayatın değerli olduğu hissini güçlendirebilir.

## Merkezdeki kavram: kendini yanlış anlamak

De Botton'ın farklı alanlarını birleştiren kavram **kendini tanıma**.

Aşk, iş, mimarlık, sanat, seyahat, para, başarı — hepsi sonunda tek soruya bağlanıyor: **Kendimiz hakkında ne kadar yanılıyoruz?**

Bir insan çok para kazanmak isteyebilir; aslında istediği saygı olabilir. Ünlü olmak isteyebilir; aslında istediği sevilmek olabilir. Sürekli seyahat etmek isteyebilir; aslında yaşadığı hayattan kaçıyor olabilir. Romantik bir ilişki arayabilir; aslında çocuklukta alamadığı güveni arıyor olabilir.

De Botton'ın felsefesi tam olarak bu yanlış anlamaları görünür kılmaya çalışıyor.

*A Therapeutic Journey* ise bu ilgiyi psikoterapiye yaklaştırıyor. Burada bir ayrım gerekli: De Botton psikiyatrist değil ve felsefe klinik ruh sağlığı hizmeti değil. Yaptığı şey, felsefi ve psikolojik düşünceleri gündelik hayatın anlaşılması için kullanmak.

## Akademinin dışında filozof olunur mu?

Geleneksel akademik ölçütler açısından de Botton'ın konumu tartışmalı: Hakemli dergilerde yayımlamıyor, teknik tartışmalara katkı vermiyor.

Ama felsefe tarihine bakıldığında tablo başka. Sokrates kitap yazmadı. Montaigne akademik bir filozof değildi. Epiktetos'un felsefesi dersler ve yaşam pratiği üzerinden yayıldı. Nietzsche üniversite kariyerinden giderek uzaklaştı.

"Filozof" kavramını yalnızca akademik meslek kategorisi olarak görmek de tarihsel olarak sorunlu.

De Botton'ın tercihi net: **akademik filozof değil, kamusal filozof.**

## Popülerleşme mi, basitleştirme mi?

Popülerleşmenin bir bedeli olabilir.

Nietzsche'nin karmaşık düşüncesi "zor zamanlarda güçlü ol" tavsiyesine indirgenebilir. Epikuros yalnızca "zevk al" diyen bir filozofa dönüştürülebilir. Stoacılık "duygularını bastır" biçiminde yanlış anlaşılabilir.

Bu yüzden felsefenin **popülerleştirilmesi** ile **basitleştirilmesi** arasındaki sınır belirleyicidir. De Botton'ın çalışması bu sınırı sürekli tartışmaya açıyor.

Sitemizde bu ay aktardığımız [akademik felsefenin dijital arşivi](/haber/turkiyede-akademik-felsefenin-dijital-arsivi) tartışması da benzer bir gerilimi taşıyor: Erişim genişlerken derinlik korunabiliyor mu?

## Neden hâlâ okunuyor?

De Botton'ın önemi yeni bir metafizik sistem kurmasında değil. Modern insanın gündelik problemlerini felsefi sorulara dönüştürmesinde.

"Sevgilim neden beni anlamıyor?" sorusunu aşk felsefesine. "İşim neden beni mutsuz ediyor?" sorusunu anlam problemine. "Neden başkalarının başarısını kıskanıyorum?" sorusunu değer problemine. "Evimde neden kendimi kötü hissediyorum?" sorusunu estetik problemine.

Bu nedenle onun felsefesi akademik felsefenin rakibi değil, **kamusal uzantısı** olarak da okunabilir.

Ve asıl sorusu hâlâ eski: **Nasıl yaşamalıyız?**

Modern dünyanın bütün teknolojik ve ekonomik değişimine rağmen bu sorunun cevaplanmamış olması, belki de neden hâlâ okunduğunu açıklıyor.

## Türkçede

*Felsefenin Tesellisi*, *Statü Endişesi*, *Mutluluğun Mimarisi*, *Seyahat Sanatı*, *Aşkın Seyri* ve *Haberler: Kullanım Kılavuzu* Türkçeye çevrildi.`,
  },
  {
    title: "Lawlor'dan 'makul olma' savunusu: mantıklı olmak neden yetmiyor?",
    slug: "krista-lawlor-being-reasonable",
    summary:
      "Stanford'lu filozofun Harvard University Press'ten çıkan kitabı, akılcılık ile makullük arasındaki farkı tartışmaya açıyor. Lawlor'a göre makul kişi yalnızca doğru çıkarım yapan değil, neyin değerli olduğunu görebilen kişidir. New Yorker kitabı yılın öne çıkanları arasında saydı.",
    seoTitle: "Krista Lawlor — Being Reasonable: The Case for a Misunderstood Virtue",
    metaDescription:
      "Krista Lawlor'ın Being Reasonable kitabı: rasyonellik ile makullük farkı, hukukta makul kişi standardı, değer haritaları ve kutuplaşma.",
    contentType: "KITAP",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanford_University_Main_Quad_-_7_June_2009.jpg?width=1600",
    imageCredit: "Stanford Üniversitesi — Krista Lawlor burada felsefe profesörü · Wikimedia Commons",
    featured: false,
    sourceName: "Harvard University Press",
    sourceUrl: "https://www.hup.harvard.edu/file/feeds/PDF/9780674297470_sample.pdf",
    publishedAt: "2026-08-29T04:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "etik", "hukuk-felsefesi", "demokrasi", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Krista Lawlor's new book explores 'What does it mean to be reasonable?'",
        publisher: "Stanford University, Department of Philosophy",
        url: "https://philosophy.stanford.edu/news/krista-lawlors-new-book-explores-what-does-it-mean-be-reasonable",
        primary: true,
      },
      {
        title: "What does it mean to be reasonable?",
        publisher: "Stanford Report",
        date: "Mart 2026",
        url: "https://news.stanford.edu/stories/2026/03/krista-lawlor-being-reasonable-book-constructive-dialogue",
      },
      {
        title: "Being Reasonable: The Case for a Misunderstood Virtue",
        publisher: "Harvard University Press",
        url: "https://www.hup.harvard.edu/file/feeds/PDF/9780674297470_sample.pdf",
      },
    ],
    content: `Bir insan ne zaman "makul"dür?

Sesini yükseltmediğinde mi? Karşısındakinin görüşünü kabul ettiğinde mi? Mantıklı argümanlar kurduğunda mı? Yoksa kendi çıkarının ötesine geçip başkalarının neye değer verdiğini anlamaya çalıştığında mı?

Stanford Üniversitesi felsefe profesörü **Krista Lawlor**, Harvard University Press'ten çıkan **Being Reasonable: The Case for a Misunderstood Virtue** ile bu soruları felsefenin merkezine taşıyor.

Kitap, New Yorker'ın "2026'nın şimdiye kadarki en iyi kitapları" listesine girdi.

## Temel ayrım

Lawlor'ın iddiası ilk bakışta basit, sonuçları geniş:

**Makul olmak, rasyonel olmakla aynı şey değildir.**

Kitapta aktarılan bir gözlem bu farkı somutlaştırıyor. İnsanlar "rasyonel" kişiyi tarif ederken en sık şu sıfatları kullanıyor: sistemli, duygusuz, çözümleyici. "Makul" kişiyi tarif ederken ise: empatik, saygılı, dinleyen.

Lawlor'a göre makul kişi, **neyin önemli olduğunu güvenilir biçimde görebilen** kişidir. Bunun için yeterince rasyonel olmalı, aynı zamanda başkalarının değer verdiği şeyleri hesaba katmalıdır. Ama rasyonellik ve düşüncelilik tek başına yetmez.

## Rasyonel olmak neden yeterli değil?

Bir iddia ortaya atılır, kanıtlar değerlendirilir, mantıksal çıkarım yapılır, sonuca varılır.

Lawlor'ın sorusu tam burada: Bütün bunları doğru yapan biri yine de makul olmayabilir mi?

Yanıt evet. Çünkü insanın yalnızca "neye inanması gerektiğini" değil, **"neyin önemli olduğunu"** da anlaması gerekir.

Bir yönetici çalışanının sözleşmesindeki bütün maddeleri hukuken doğru yorumlayabilir. Ama çalışanın ailesiyle, sağlığıyla ya da başka sorumluluklarıyla ilgili koşulları tamamen görmezden geliyorsa, hukuken doğru davranması makul olduğu anlamına gelmez.

Benzer biçimde, bir tartışmada karşı tarafın mantık hatasını başarıyla göstermek, onun neye değer verdiğini anlamaya yetmeyebilir.

**Rasyonellik doğru çıkarıma ulaşır; makullük hangi şeylerin hesaba katılması gerektiğini sorar.**

## Yanlış anlaşılan erdem

Başlıktaki "misunderstood virtue" ifadesi önemli.

Gündelik dilde "makul" çoğu zaman ılımlı, uyumlu, fazla talepkâr olmayan kişi anlamında kullanılıyor. Lawlor bu anlayışı reddediyor.

Makul olmak her durumda orta yolu bulmak değildir. Bir haksızlık karşısında "iki tarafın da biraz haklı olduğu" sonucuna varmak makullük değildir. İlkeli olmaktan vazgeçmek hiç değildir.

Tersine, Lawlor'da makullük **yargı gücü gerektiren** bir erdemdir: Hangi değerlerin gerçekten önemli olduğunu anlamak, farklı bakış açılarını değerlendirmek ve buna göre davranmak.

Yani pasif hoşgörü değil, **etkin bir anlama çabası**.

## Hukukta "makul insan" kimdir?

Kitap kavramın hukuktaki kullanımına özel bölüm ayırıyor.

Anglo-Amerikan hukukunda **makul kişi standardı**, sözleşmelerin uygulanmasından meşru müdafaaya kadar geniş bir alanda ölçüt olarak kullanılıyor.

Ama felsefi sorun hemen ortaya çıkıyor: Makul insan kimdir? Ortalama insan mı? Hâkimin makul bulduğu insan mı? Toplumun çoğunluğunun davranışı mı? Yoksa belirli bir durumda sahip olunması gereken ideal muhakeme kapasitesi mi?

"Makul insan" dediğimiz anda, hangi değerlerin makul sayıldığına ilişkin örtük bir kuram da ortaya koymuş oluyoruz. Sitemizde daha önce aktardığımız [Scott Shapiro'nun hukuk felsefesi çalışmaları](/haber/scott-shapiro-hukuk-kod-yapay-zeka) da benzer bir noktaya değiniyordu: Hukuki ölçütler hiçbir zaman tarafsız teknik araçlar değildir.

## Değer haritaları

Kitabın en verimli kavramsal aracı, "Anlaşmazlık ve Değer Haritalarını Paylaşmak" bölümünde geliştiriliyor.

Her insanın dünyada neyin önemli olduğuna dair bir **değer haritası** vardır. Aile, özgürlük, para, adalet, güven, onur, başarı — hepsi bu haritada bir yerde durur.

Ama haritalar birbirinin aynısı değildir. Bir kişi için ekonomik özgürlük temelken başkası için sosyal güvenlik önceliklidir. Biri ifade özgürlüğünü önde tutarken diğeri toplumsal düzeni daha önemli görebilir.

Bu farklılıklar yalnızca bilgi eksikliğinden kaynaklanmaz. İnsanlar gerçekten farklı şeylere değer verebilir.

Makullük bu noktada "karşı tarafı yenmek" değil, **karşı tarafın değer haritasını okuyabilmek** anlamına geliyor.

## Duygular makul düşünmenin düşmanı mı?

Kitabın "Makul Duygu" bölümü klasik bir karşıtlığı sorguluyor: akıl doğru, duygu yanlış.

Lawlor'ın yaklaşımı daha karmaşık. İnsan neyin değerli olduğunu yalnızca soyut akıl yürütmeyle keşfetmez; duygular da dünyada neyin önemli olduğunu gösterebilir.

Öfke bir haksızlığa işaret edebilir. Korku bir tehlikeyi. Üzüntü bir kaybın ağırlığını. Sevgi bir ilişkinin değerini.

Ama duyguların kendiliğinden doğru olması da gerekmez. Mesele duyguları bastırmak değil, **anlamayı ve yönetmeyi öğrenmek**.

Bu tez, geçen hafta bu köşede andığımız [Bernard Williams'ın](/haber/bernard-williams-ahlak-sistem-elestirisi) sistem eleştirisiyle aynı hattan geliyor: Ahlaki hayat, duygulanımdan arındırılmış bir hesap değildir.

## Demokrasi ve kutuplaşma

Kitabın güncelliğini artıran nokta, makullüğü siyasal hayatla ilişkilendirmesi.

Demokratik toplumlar insanların her konuda aynı düşünmesini gerektirmez; tersine, demokrasinin temelinde anlaşmazlık vardır. Sorun farklı düşünmek değil, **farklı düşünen insanlarla birlikte yaşayabilmek**.

Lawlor'ın çerçevesinde makullük burada siyasal bir erdeme dönüşüyor. Bir devlet, ancak yurttaşları makulse liberal demokrasi olarak sürebilir.

Tartışma **John Rawls** ile de kesişiyor. Rawls'ta "makul" yurttaş, kendi kapsamlı dünya görüşünü topluma zorla kabul ettirmeye çalışmayan; farklı makul dünya görüşleriyle birlikte yaşayabilecek bir düzenin gereklerini kabul eden yurttaştır.

Lawlor bu kavramı daha geniş bir zemine taşıyor: Mesele yalnızca siyasal uzlaşma değil, insanların başkalarının değerlerini anlamayı öğrenmesi.

## Dijital kamusal alanda makullük

Kitap sosyal medya üzerine yazılmış değil. Ama kuramı bugünkü dijital kamusal alanı anlamak için elverişli.

İnsanlar çoğunlukla kendi görüşlerini destekleyen içeriklerle karşılaşıyor; algoritmalar farklı görüşlerle karşılaşmayı azaltabiliyor. Sonuçta insanlar yalnızca farklı düşünmüyor — **karşı tarafın neden öyle düşündüğünü anlamakta da zorlanıyor.**

Değer haritası yaklaşımı burada işe yarıyor: Bir insanın yanlış olduğunu düşünmek başka şey, neden öyle düşündüğünü anlayabilmek başka şey.

Ve ikincisi, kişinin kendi görüşünden vazgeçmesini gerektirmiyor.

## Erdem etiğiyle bağ

Lawlor makullüğün yalnızca faydalı bir davranış değil, **başlı başına bir erdem** olduğunu savunuyor. Bu, kitabı klasik erdem etiğine bağlıyor.

Aristoteles'te erdem, insanın iyi yaşamını mümkün kılan karakter özelliğidir; belirli davranışlar sergilemekten çok belirli bir karakter geliştirmeyi gerektirir.

Lawlor'ın makul insanı da böyle: başkalarını dinler, kendi değerlerini sorgulayabilir, duygularını bastırmaz, kanıtları dikkate alır, anlaşmazlıktan kaçmaz, gerektiğinde fikrini değiştirir — ama her durumda uzlaşmayı amaçlamaz.

## Yapay zekâ çağında makullük

Kitap yapay zekâ üzerine değil. Ama sorusu bu tartışmada yeni bir anlam kazanıyor.

Büyük dil modelleri son derece rasyonel görünen cevaplar üretebiliyor: bilgi topluyor, argüman kuruyor, karşılaştırma yapıyor.

Bir sistem bir tartışmadaki iki tarafın argümanlarını kusursuz özetleyebilir. Ama **hangi değerin o insanlar için gerçekten önemli olduğunu** anlayabilir mi?

Bu soru, Lawlor'ın felsefesini bu ay boyunca izlediğimiz [yapay zekâ tartışmalarıyla](/haber/matraix-persona-simulasyonu) buluşturuyor. Akıl yürütme ile iyi muhakeme arasındaki fark, giderek daha pratik bir mesele hâline geliyor.

## Kitabın yapısı

Harvard University Press, kitabı makullük kavramının ilk kapsamlı felsefi incelemesi olarak sunuyor. 224 sayfa, on bir bölüm:

Makul olmak ve rasyonel olmak · Hukukta makullük · Değer alanının haritası · Anlaşmazlık ve değer haritalarını paylaşmak · Makul duygu · Makul inanç · Siyasal hayatta makullük · Ahlakta makullüğün rolü · Kutuplaşmış inanç · Makullüğün geçmişi ve geleceği.

Bu yapı, Lawlor'ın makullüğü tek bir disiplinin kavramı olarak değil; bilgi, değer, hukuk, siyaset ve ahlakla ilişkiyi bir arada düzenleyen bir erdem olarak ele aldığını gösteriyor.

## Künye

- **Yazar:** Krista Lawlor (Stanford Üniversitesi, Henry Waldgrave Stuart Felsefe Profesörü)
- **Özgün adı:** *Being Reasonable: The Case for a Misunderstood Virtue*
- **Yayınevi:** Harvard University Press, 2026
- **ISBN:** 9780674297470 · 224 sayfa

Lawlor'ın önceki kitapları *New Thoughts about Old Things* ve *Assurance: An Austinian Account of Knowledge and Knowledge Claims*; ikisi de bilgi ve bilgi iddiaları üzerine. Türkçe çeviri duyurusu henüz yapılmadı.

---

*Kitabın bıraktığı soru bugünün en pratik sorularından biri: Birbirimizle aynı fikirde olmadığımız bir dünyada, birlikte yaşamamızı sağlayacak kadar makul olabilir miyiz?*`,
  },
  {
    title: "Schelling: doğayı uyuyan tin sayan filozof neden geri döndü?",
    slug: "schelling-doga-felsefesi-yeniden",
    summary:
      "Yirmi üç yaşında profesör oldu, Hegel'in gölgesinde kaldı, sonra unutuldu. Ama son otuz yılda Schelling'in doğa felsefesi ve özgürlük incelemesi yeniden okunuyor. Nedeni basit: İnsanı doğanın dışına koymadan düşünmenin yolunu arayan ilk büyük deneme onunkiydi.",
    seoTitle: "Schelling: doğa felsefesi, özgürlük ve olumlu felsefe",
    metaDescription:
      "F. W. J. Schelling'in doğa felsefesi, 1809 Özgürlük İncelemesi, olumsuz ve olumlu felsefe ayrımı; ekoloji ve çağdaş metafizikteki dönüşü.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Wilhelm_Joseph_Schelling%2C_1848_daguerreotype_-_cropped.jpg?width=1600",
    imageCredit: "F. W. J. Schelling, 1848 tarihli dagerreyotipi · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-29T04:20:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["alman-idealizmi", "kavram", "estetik", "din-felsefesi", "bilim-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Friedrich Wilhelm Joseph von Schelling",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/schelling/",
      },
    ],
    content: `Felsefe tarihinde bazı isimler, hak ettiklerinden daha az anıldıkları için değil, **yanlış nedenle** anıldıkları için gölgede kalır.

**Friedrich Wilhelm Joseph Schelling** (1775-1854) bunun en iyi örneği. Uzun süre "Fichte ile Hegel arasındaki ara durak" olarak öğretildi. Ders kitaplarında Alman idealizminin üç isimli zincirinin ortasında duran, kendi başına pek de gerekli olmayan bir halka.

Son otuz yılda bu tablo değişti. Schelling bugün yalnızca felsefe tarihi konusu değil; ekoloji, çağdaş metafizik ve din felsefesi tartışmalarında adı geçen bir düşünür.

Nedenini anlamak için başa dönmek gerekiyor.

## Erken olgunluk

Schelling, Tübingen'deki ilahiyat okulunda iki oda arkadaşıyla birlikteydi: **Hegel** ve **Hölderlin**. Üçü de Fransız Devrimi'nin coşkusunu paylaşıyordu. Bu köşede iki gün önce [Hegel'in doğumunu](/haber/felsefe-tarihinde-bugun-27-agustos-hegel) anmıştık; aynı odadan çıkan üç isimden ikisi felsefe tarihinin yönünü belirledi.

Ama sıralamada bir tuhaflık var. Schelling üçünün en gencidir — Hegel'den beş yaş küçük — ve en erken olgunlaşanıdır.

Yirmi bir yaşında ilk önemli metinlerini yayımladı. **Yirmi üç yaşında** Jena'da profesör oldu. Hegel o sıralarda hâlâ özel öğretmenlik yapıyordu ve Jena'ya Schelling'in yardımıyla geldi; ilk yıllarda birlikte bir dergi çıkardılar.

Bu erken parlaklık sonradan aleyhine işledi. Hegel 1807'de *Tinin Görüngübilimi*'nin önsözünde, adını vermeden Schelling'in mutlak anlayışını "bütün ineklerin siyah olduğu gece" diye küçümsedi. Dostluk bitti; felsefe tarihi yazımı da uzun süre Hegel'in tarafını tuttu.

## Doğa felsefesi: unutulmuş yarım

Schelling'in ilk büyük katkısı **Naturphilosophie** — doğa felsefesi.

Sorunu şuydu. Kant ve Fichte, özneyi felsefenin merkezine koymuştu. Bilgi, öznenin dünyayı kurma biçimiyle açıklanıyordu. Ama bu, doğayı yalnızca **bilincin karşısındaki nesne** hâline getiriyordu: ölü, edilgen, kendinde anlamsız bir malzeme.

Schelling bu tabloyu kabul etmedi. Ona göre eğer bilinç doğadan çıkmışsa — ki çıkmıştır — doğanın kendisinde bilincin imkânını hazırlayan bir şey olmalıdır.

Formülü ünlüdür: **"Doğa görünür tindir; tin görünmez doğadır."**

Buradaki iddia mistik değil, yapısal. Schelling'e göre doğa, yalnızca yasalara uyan bir mekanizma değil; kademeli olarak kendi üzerine katlanan, karmaşıklaşan ve sonunda kendinin bilincine varan bir süreçtir. Cansız maddeden organizmaya, organizmadan bilince uzanan hat, dışarıdan eklenmiş bir sıçrama dizisi değildir.

O yüzden Schelling'de doğa "ürün" değil, **üretkenliktir** (*natura naturans*). Gördüğümüz nesneler, sürmekte olan bir etkinliğin geçici durakları.

Bu, dönemin bilimiyle canlı bir alışveriş içinde geliştirildi. Schelling elektrik, manyetizma ve kimyasal süreçler üzerine yeni bulguları yakından izledi; kutupluluk — her etkinliğin karşıt bir kuvvetle birlikte iş görmesi — onun temel açıklama şemasıydı.

## Özdeşlik ve sanat

Schelling'in ikinci dönemi **özdeşlik felsefesi**.

Soru şu: Düşünce ile doğa, özne ile nesne birbirine nasıl uyuyor? Bir denklemin dünyayı açıklaması neden mümkün?

Yanıtı radikal: İkisi de aynı temel gerçekliğin iki görünümüdür. Mutlak, özne ile nesnenin henüz ayrılmadığı **kayıtsızlık noktasıdır**.

Ama böyle bir şey nasıl bilinir? Kavramla değil — çünkü kavram zaten ayırır.

Schelling'in yanıtı, felsefe tarihinde ender bir hamledir: **sanat.**

*Aşkın İdealizm Sistemi*'nin (1800) son bölümüne göre sanat yapıtı, bilinçli ve bilinçsiz etkinliğin aynı anda iş gördüğü tek yerdir. Sanatçı ne yaptığını bilir; ama yapıtta bilmediği bir şey de görünür hâle gelir. Bu yüzden sanat, felsefenin **organonudur** — kanıtlama aracıdır.

Alman romantizminin sanata verdiği ağırlık büyük ölçüde buradan gelir.

## 1809: özgürlük ve kötülük

Schelling'in bugün en çok okunan metni, 1809 tarihli **İnsan Özgürlüğünün Özü Üzerine Felsefi İncelemeler**.

Sorusu klasiktir ama ele alışı değil: Eğer her şey mutlak bir temelden çıkıyorsa, **kötülük** nereden geliyor?

Alışıldık yanıt kötülüğü eksiklik sayar: iyiliğin yokluğu, bir tür kusur. Schelling bunu reddeder. Ona göre kötülük olumlu bir güçtür; insanın kendi tikelliğini bütünün yerine geçirme kapasitesidir. Ve bu kapasite, özgürlüğün bedelidir: İyiyi seçebilen bir varlık, kötüyü de seçebilmelidir.

Metnin asıl radikalliği daha derinde. Schelling, temelin kendisinde **karanlık bir yan** olduğunu söyler: akla direnen, kavramsallaştırılamayan bir zemin. Akıl bu zeminden doğar ama onu tüketemez.

Bu, Alman idealizminin kendi içinden gelen en ciddi öz-eleştiridir. Çünkü söylediği şudur: **Gerçeklik, düşünceye bakiyesiz biçimde çevrilemez.**

Heidegger 1936'da bu metin üzerine bir ders verdi ve onu Alman felsefesinin doruk noktalarından biri saydı.

## Geç dönem: olumsuz ve olumlu felsefe

Schelling'in son dönemi uzun süre karanlıkta kaldı; ders notları ancak sonradan yayımlandı.

Buradaki ayrım şu: **Olumsuz felsefe**, bir şeyin ne olduğunu — özünü — düşünceyle kavrar. Mantık ve kavram çözümlemesi bunu yapar. Ama bir şeyin **var olduğu** olgusunu üretemez.

Schelling'e göre varlığın olgusallığı, kavramdan çıkarsanamayan bir şeydir. Onu ancak **olumlu felsefe** ele alabilir: tarihten, mitolojiden, dinsel deneyimden ve olup bitmiş olandan yola çıkan bir düşünme.

Bu, Hegel'e doğrudan bir itirazdır. Hegel'de gerçeklik kavramın açılımıdır; Schelling'de kavram, gerçekliği daima geriden takip eder.

Berlin'de 1841'de verdiği bu derslerin dinleyicileri arasında genç **Kierkegaard**, **Bakunin** ve **Engels** vardı. Kierkegaard başlangıçta coşkuluydu, sonra hayal kırıklığına uğradı — ama "olgusallığın kavramdan çıkarsanamayacağı" fikri onda kaldı ve varoluşçuluğun çekirdeğine yerleşti.

## Neden geri döndü?

Schelling'in son otuz yıldaki dönüşünün üç nedeni var.

**Ekoloji.** Doğayı edilgen bir kaynak olarak gören anlayış eleştiriye uğradıkça, doğayı üretken ve kendi içinde değerli sayan bir düşünür ilgi çekici hâle geldi. Schelling'in "doğa ürün değil üretkenliktir" tezi, çevre felsefesinde doğrudan kullanılıyor.

**Yeni metafizik.** Bu ay bu köşede andığımız [spekülatif realizm](/haber/meillassoux-varlik-ve-hiclik-erken-metin) tartışmasında, Iain Hamilton Grant'in çalışması doğrudan Schelling'e dayanıyor. Grant'in adlandırmasıyla "aşkın materyalizm", Schelling'in doğa felsefesini çağdaş bir programa çeviriyor.

**Akla direnen zemin.** Aklın kendini bütünüyle temellendiremeyeceği fikri — Schelling'in 1809'da "karanlık zemin" dediği şey — yirminci yüzyılda Heidegger'den Adorno'ya, psikanalizden Deleuze'e uzanan geniş bir hatta yankılandı. Slavoj Žižek'in Schelling üzerine iki kitap yazması da bu ilgiyi gösteriyor.

## Bir kadraj sorusu

Schelling'i "Hegel'e giden yol" olarak okumak, bu üç damarın hiçbirini görünür kılmıyor.

Onu kendi başına okumak ise başka bir soruyu öne çıkarıyor: **İnsanı doğanın dışına koymadan, ama onu doğaya indirgemeden de düşünmek mümkün mü?**

Bu soru bugün yalnızca bir felsefe tarihi sorusu değil. Sinirbilimden ekolojiye, yapay zekâdan biyoetiğe uzanan tartışmaların ortak zemininde duruyor.

Schelling'in yanıtı eksikti, tutarsızdı ve sistemini üç kez baştan kurmak zorunda kaldı. Ama soruyu ilk kuran oydu.

## Bir not: kapaktaki fotoğraf

Kapaktaki görsel bir tablo değil, **fotoğraf**. 1848 tarihli bir dagerreyotip.

Alman idealizminin büyük isimleri arasında fotoğrafın icadını görecek kadar yaşayan tek kişi Schelling'dir. Kant 1804'te, Fichte 1814'te, Hegel 1831'de öldü. Schelling 1854'e kadar yaşadı.

Fotoğraftaki yaşlı adam, Hegel'in ölümünden yirmi üç yıl sonra hâlâ ders vermeye devam ediyordu.

## Türkçede

Schelling'in *Sanat Felsefesi*, *İnsan Özgürlüğünün Özü Üzerine* ve *Aşkın İdealizm Sistemi* Türkçeye çevrildi. Geç dönem ders notları henüz Türkçede bulunmuyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 29 Ağustos: John Locke'un doğumu",
    slug: "felsefe-tarihinde-bugun-29-agustos-locke",
    summary:
      "John Locke 29 Ağustos 1632'de Wrington'da doğdu. Zihni boş bir levha sayan bilgi kuramı, mülkiyeti emeğe bağlayan siyaset felsefesi ve hoşgörü savunusu, modern dünyanın kurucu metinleri arasında.",
    seoTitle: "29 Ağustos 1632: John Locke'un doğumu",
    metaDescription:
      "John Locke 29 Ağustos 1632'de doğdu. Tabula rasa, birincil ve ikincil nitelikler, emek-mülkiyet kuramı, rıza ve hoşgörü.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Godfrey_Kneller_-_Portrait_of_John_Locke_%28Hermitage%29.jpg?width=1600",
    imageCredit: "John Locke, Godfrey Kneller'in 1697 tarihli portresi · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/John-Locke",
    publishedAt: "2026-08-29T04:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "aydinlanma", "siyaset-felsefesi", "epistemoloji", "din-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "John Locke | Biography, Treatises, Works, & Facts",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/John-Locke",
        primary: true,
      },
      {
        title: "John Locke",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/locke/",
      },
    ],
    content: `**John Locke**, 29 Ağustos 1632'de İngiltere'nin Somerset bölgesindeki Wrington'da doğdu. 28 Ekim 1704'te Essex'te öldü.

Doğduğu yıl İngiltere iç savaşın eşiğindeydi; babası Parlamento saflarında savaştı. Locke'un bütün siyaset felsefesi, iktidarın hangi koşullarda meşru olduğu sorusunun kanlı biçimde sorulduğu bir ülkede yazıldı.

## Hekim, sonra filozof

Locke Oxford'da okudu ama skolastik müfredattan hoşlanmadı. İlgisi deneysel bilime ve tıbba kaydı; Robert Boyle'la çalıştı, Kraliyet Cemiyeti üyesi oldu.

Hayatının dönüm noktası 1666'da geldi: Sonradan Shaftesbury Kontu olacak Anthony Ashley Cooper'la tanıştı ve onun hekimi, danışmanı ve sekreteri oldu. 1668'de Shaftesbury'ye yaptığı karaciğer ameliyatı hastanın hayatını kurtardı.

Bu bağ Locke'un düşüncesini siyasetin içine soktu — ve 1683'te Hollanda'ya kaçmasına yol açtı. Başlıca eserleri, 1688 Şanlı Devrimi'nin ardından İngiltere'ye döndükten sonra, 1689-1690'da art arda yayımlandı.

## Boş levha

**İnsanın Anlama Yetisi Üzerine Bir Deneme** (1689), modern bilgi kuramının kurucu metinlerinden.

Locke'un hedefi **doğuştan fikirler** öğretisiydi. Zihinde doğuştan bulunan ilkeler olduğu iddiasına karşı basit bir itiraz getirdi: Eğer öyle olsaydı, çocuklarda ve farklı kültürlerde aynı ilkeleri bulmamız gerekirdi. Bulmuyoruz.

Onun yerine geçen imge ünlüdür: Zihin başlangıçta **boş bir levhadır** (*tabula rasa*). Bütün malzemesi deneyimden gelir — dış dünyanın duyumundan ve zihnin kendi işleyişine dönük içgözlemden.

Sonuçları geniş. Eğer bilgi deneyimden geliyorsa, insanlar arasındaki farklar doğuştan değil **eğitim ve çevre** kaynaklıdır. Locke'un eğitim üzerine yazıları ve Aydınlanma'nın bütün eğitim iyimserliği bu tezden beslenir.

## Birincil ve ikincil nitelikler

Denemenin en tartışılan ayrımı budur.

**Birincil nitelikler** — uzam, biçim, hareket, sayı, katılık — nesnenin kendisinde bulunur. **İkincil nitelikler** — renk, ses, tat, koku, sıcaklık — nesnede öyle bulunmaz; nesnenin bizde bu duyumları üretme gücüdür.

Yani bir elma "kırmızı" değildir; belirli bir yüzey yapısı vardır ve bu yapı, belirli koşullarda bizde kırmızı duyumunu üretir.

Ayrım, dönemin mekanik doğa felsefesiyle uyumluydu. Ama içinde bir sorun taşıyordu: Eğer bildiğimiz şey nesnenin kendisi değil, zihnimizdeki ideyse, ideyle nesne arasındaki uygunluğu nasıl denetleyeceğiz?

Bu soruyu Berkeley ve Hume sonuna kadar götürdü. Bu köşede geçen hafta andığımız [Hume'un](/haber/felsefe-tarihinde-bugun-25-agustos-hume-nietzsche) kuşkuculuğu, Locke'un açtığı yolun ucudur.

## Emek ve mülkiyet

**Yönetim Üzerine İkinci İnceleme** (1689), modern siyaset felsefesinin en etkili metinlerinden.

Locke doğa durumunu Hobbes'tan farklı kurar. Hobbes'ta doğa durumu herkesin herkese karşı savaşıdır; Locke'ta ise bir doğa yasası zaten geçerlidir: Kimse başkasının hayatına, sağlığına, özgürlüğüne ve mülkiyetine zarar vermemelidir. Sorun bu yasanın **tarafsız biçimde uygulanamamasıdır** — herkes kendi davasında yargıç olduğu için.

Devlet bu sorunu çözmek üzere, **rıza** ile kurulur. Ve bu, iktidarın sınırını da belirler: Yönetim, kurulma amacına aykırı davrandığında meşruiyetini yitirir. Direnme hakkı buradan doğar.

Mülkiyet kuramı ise özgündür. Locke'a göre doğa başlangıçta ortaktır; ama insan kendi bedeninin sahibidir, dolayısıyla **emeğinin de** sahibidir. Emeğini bir şeye kattığında onu ortak olandan çıkarıp kendine mal eder.

Buna iki sınır koyar: İsraf etmeyecek kadar ve başkalarına yeterince bırakacak kadar. Para icat edildiğinde bu sınırların nasıl aşıldığı — ve Locke'un bunu neden meşru gördüğü — üç yüz yıldır tartışılıyor.

Sitemizde bu ay ele aldığımız [Axel Honneth'in](/haber/axel-honneth-taninma-ve-calisma) emek ve tanınma çözümlemesi, aynı hattın çağdaş bir uzantısı: Emek yalnızca mülkiyet değil, kişilik kurar.

## Hoşgörü

**Hoşgörü Üzerine Bir Mektup** (1689), din savaşlarının ardından yazılmış bir argüman.

Locke'un gerekçesi ilginç biçimde pratiktir: Devlet inancı zorla değiştiremez, çünkü inanç iradeyle üretilmez. Zorlama en fazla dışsal uyum sağlar; içsel kanaati değiştirmez. Öyleyse zor kullanmak, dinin kendi amacı açısından da işe yaramaz.

Buradan din ile devletin ayrı işlevleri olduğu sonucu çıkar: Devlet dünyevi çıkarlarla ilgilenir, kilise ruhun kurtuluşuyla.

Locke'un hoşgörüsünün sınırları da vardı: Ateistleri ve — dönemin siyasi kaygılarıyla — Katolikleri kapsam dışında tuttu. Bu sınırlar bugün haklı olarak eleştiriliyor. Ama ilkenin kendisi, modern laiklik tartışmalarının başlangıç noktası oldu.

## Çelişki: köle ticareti

Locke okumasının kaçınılmaz bir zorluğu var.

Özgürlüğü ve mülkiyeti savunan filozof, Kraliyet Afrika Şirketi'ne yatırım yaptı ve Carolina Anayasası taslağının hazırlanmasında rol aldı — bu belge köle sahiplerine mutlak yetki tanıyordu.

Bu çelişki çağdaş Locke araştırmalarının en canlı tartışma alanlarından biri. Bazı yorumcular bunu kuramın kendisindeki bir kusura bağlıyor; bazıları kuram ile pratiği ayırıyor. Tartışma sürüyor ve kolay bir yanıtı yok.

## Etkisi

Locke'un *İkinci İnceleme*'si Amerikan Bağımsızlık Bildirgesi'nin diline doğrudan yansıdı: hayat, özgürlük ve mutluluk arayışı. Fransız Aydınlanması'nda Voltaire ve Montesquieu onu okudu.

Kant'ın "dogmatik uykusundan uyanması" Hume üzerinden gerçekleşti; ama Hume'un yolunu açan Locke'tu.

## Türkçede

*İnsanın Anlama Yetisi Üzerine Bir Deneme*, *Yönetim Üzerine İkinci İnceleme*, *Hoşgörü Üzerine Bir Mektup* ve *Eğitim Üzerine Düşünceler* Türkçeye çevrildi.

---

*Not: Locke fotoğrafın icadından yüz otuz yıl önce öldü. Kapaktaki görsel Godfrey Kneller'in 1697 tarihli portresidir; bugün Ermitaj Müzesi'nde bulunuyor.*`,
  },
  {
    title: "Berggruen deneme yarışması kapandı: 'Yeni bir Eksen Çağı mı?'",
    slug: "berggruen-deneme-yarismasi-2026",
    summary:
      "Berggruen Enstitüsü'nün 100 bin dolarlık deneme yarışmasında başvurular 17 Ağustos'ta sona erdi. Bu yılın konusu Karl Jaspers'ın 'Eksen Çağı' kavramı: İnsanlık yeniden tarihin menteşesinde mi? Yarışma bu yıl ilk kez kurgu metinleri de kabul etti.",
    seoTitle: "2026 Berggruen Deneme Yarışması: Yeni bir Eksen Çağı mı?",
    metaDescription:
      "Berggruen Prize Essay Competition 2026 teması 'A New Axial Age?'. 100 bin dolar ödül, İngilizce ve Çince başvuru, kurgu metinler de kabul edildi.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Jaspers_1946.jpg?width=1600",
    imageCredit: "Karl Jaspers, 1946 — 'Eksen Çağı' kavramının kaynağı · Wikimedia Commons",
    featured: false,
    sourceName: "Berggruen Institute · NOEMA",
    sourceUrl: "https://berggruen.org/essay-competition-open",
    publishedAt: "2026-08-29T03:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "tarih", "din-felsefesi", "kavram", "antik-felsefe"],
    philosopherSlugs: [],
    sources: [
      {
        title: "The 2026 Berggruen Prize Essay Competition Topic: 'A New Axial Age?'",
        publisher: "NOEMA Magazine",
        url: "https://www.noemamag.com/the-2026-berggruen-prize-essay-competition-topic-a-new-axial-age/",
        primary: true,
      },
      {
        title: "Berggruen Prize Essay Competition",
        publisher: "Berggruen Institute",
        url: "https://berggruen.org/essay-competition-open",
      },
      {
        title: "CFP: 2026 Berggruen Prize Essay Competition",
        publisher: "PhilEvents",
        url: "https://philevents.org/event/show/150833",
      },
    ],
    content: `Berggruen Enstitüsü'nün deneme yarışmasında başvurular **17 Ağustos**'ta sona erdi. Sonuçlar bekleniyor.

Yarışma, felsefe alanındaki en yüksek ödüllü yazı yarışmalarından biri: toplam **100 bin dolar**. Başvurular İngilizce ve Çince kabul ediliyor; İngilizce metinler 10 bin kelimeyi, Çince metinler 15 bin karakteri aşamıyor.

Bu yılın bir yeniliği var: Yarışma ilk kez **kurgu** metinleri de kabul etti.

## Bu yılın konusu: "Yeni bir Eksen Çağı mı?"

Soru, felsefe tarihinden bir kavrama dayanıyor.

**Karl Jaspers**, 1949 tarihli *Tarihin Kökeni ve Hedefi* adlı kitabında, MÖ 800-200 arasındaki döneme **Eksen Çağı** (*Achsenzeit*) adını verdi.

Jaspers'ın dikkat çektiği şey bir rastlantıydı — ya da rastlantı olmayan bir eşzamanlılık.

Bu birkaç yüzyıl içinde, birbirinden habersiz coğrafyalarda benzer bir kırılma yaşandı:

- **Çin**'de Konfüçyüs ve Lao Tzu
- **Hindistan**'da Upanişadlar ve Buddha
- **İran**'da Zerdüşt
- **Filistin**'de İbrani peygamberler
- **Yunanistan**'da Sokrates öncesi düşünürler, Sokrates ve Platon

Jaspers'a göre bu dönemde ortak bir şey oldu: İnsan ilk kez kendi varoluşunu bir bütün olarak sorunsallaştırdı. Mit ve gelenek yerini eleştirel düşünceye bıraktı; birey, içinde doğduğu düzenin dışına çıkıp ona soru sorabilecek bir konum kazandı.

Jaspers'ın iddiası şuydu: Bugün kullandığımız temel kategoriler — birey, aşkınlık, evrensel ahlak, hakikat arayışı — o dönemde kuruldu. O tarihten sonra insanlık, Eksen Çağı'nda açılan ufkun içinde yaşadı.

## Yarışmanın sorusu

Berggruen'in bu yılki konusu, Jaspers'ın kavramını bugüne çeviriyor.

Yarışma metni soruyu şöyle koyuyor: Uygarlık yeniden **tarihin menteşesinde** mi? Bu belirli anda olup bitenler, geleceğin yönünü kalıcı biçimde belirleyecek mi?

Soru boş bir spekülasyon değil. Arkasında somut gerekçeler var: yapay zekânın insan bilişini ve emeğini yeniden tanımlaması, iklim krizinin insanı jeolojik bir fail hâline getirmesi, biyoteknolojinin türün kendisini müdahale edilebilir kılması, ve küresel siyasal düzenin çözülmesi.

Bunların her biri tek başına büyük bir dönüşüm. Sorulan şu: Bir arada, Eksen Çağı ölçeğinde bir kırılma anlamına geliyorlar mı?

## Kavramın kendisi tartışmalı

Yarışmanın felsefi ilgi çekiciliği, kavramın kendisinin tartışmalı olmasından da geliyor.

Eksen Çağı tezine yöneltilen itirazlar üç başlıkta toplanabilir.

**Kronoloji.** MÖ 800-200 aralığı fazla geniş ve keyfî; sıralanan düşünürler arasında yüzyıllar var. Aynı "an"dan söz etmek anakronizm olabilir.

**Kapsam.** Liste neden bu beş bölgeyi içeriyor? Mısır, Mezopotamya ve Amerika kıtası dışarıda kalıyor. Seçim, sonradan Avrasya merkezli olduğu gerekçesiyle eleştirildi.

**Ortaklık.** Konfüçyüs'ün toplumsal düzen anlayışı ile Buddha'nın kurtuluş öğretisi arasında gerçekten ortak bir "eksen" var mı, yoksa benzerlik bizim geriye dönük yorumumuz mu?

Bu itirazlara rağmen kavram terk edilmedi. Robert Bellah ve Charles Taylor gibi isimler, tartışmayı yeniden açan çalışmalar yayımladı. Kavramın gücü belki de tam olarak buradan geliyor: Yanıtı belirsiz ama sorusu kaçınılmaz.

## Berggruen Enstitüsü

Kaliforniya merkezli enstitü, felsefe ve siyaset kuramı alanında çalışan bir düşünce kuruluşu. Ayrıca yılda bir kez verilen ve bir milyon dolar değerindeki **Berggruen Ödülü** ile tanınıyor; geçmiş sahipleri arasında Charles Taylor, Onora O'Neill, Martha Nussbaum ve Peter Singer bulunuyor.

Deneme yarışması ise daha genç bir program ve farklı bir amaç taşıyor: Yerleşik akademik kariyeri olmayan yazarlara da açık olması, felsefi düşüncenin dolaşım alanını genişletmeyi hedefliyor.

Kurgu metinlerin bu yıl kabul edilmesi de aynı yönde bir tercih. Bir uygarlık kırılmasını çözümlemek ile onu anlatmak arasındaki farkın, felsefi olarak verimli olabileceği varsayımına dayanıyor.

## Sonuçlar

Başvurular kapandı; kazananların açıklanma takvimi henüz duyurulmadı. Felsefe Haberleri olarak sonuçları duyurulduğunda aktaracağız.`,
  },
  {
    title: "Philosophy & Public Affairs deneyini bitirdi: yapay zekâ yazarlığı yasaklandı",
    slug: "philosophy-public-affairs-yapay-zeka-yasagi",
    summary:
      "Ağustos başında bilerek yapay zekâ tarafından yazılmış bir makale yayımlayan dergi, iki hafta içinde kararını değiştirdi ve yapay zekâ yazarlığını yasakladı. Tartışma şimdi daha zor bir soruya kaydı: Bir metnin yapay zekâ ürünü olduğu nasıl kanıtlanır?",
    seoTitle: "Philosophy & Public Affairs yapay zekâ yazarlığını yasakladı",
    metaDescription:
      "Philosophy & Public Affairs'in yapay zekâ deneyi ve ardından gelen yasak. Tespit araçları, asılsız suçlama riski ve akademik yazarlığın geleceği.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/HBLL_periodicals.JPG?width=1600",
    imageCredit: "Akademik süreli yayınlar rafı · Wikimedia Commons",
    featured: true,
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/24/after-experiment-journal-decides-to-prohibit-ai-authored-content/",
    publishedAt: "2026-08-28T06:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["yapay-zeka", "akademi", "dergi", "etik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "After Experiment, Journal Decides to Prohibit AI-Authored Content",
        publisher: "Daily Nous",
        date: "24 Ağustos 2026",
        url: "https://dailynous.com/2026/08/24/after-experiment-journal-decides-to-prohibit-ai-authored-content/",
        primary: true,
      },
      {
        title: "Philosophy Journal Publishes Largely AI-Authored Article — On Purpose",
        publisher: "Daily Nous",
        date: "13 Ağustos 2026",
        url: "https://dailynous.com/2026/08/13/philosophy-journal-publishes-largely-ai-authored-article-on-purpose-guest-post/",
      },
      {
        title: "Careful with those Accusations",
        publisher: "Daily Nous",
        date: "27 Ağustos 2026",
        url: "https://dailynous.com/2026/08/27/careful-with-those-accusations/",
      },
    ],
    content: `Bir deney iki haftada tamamlandı ve sonucu, deneyi yapanların beklediğinden daha net çıktı.

**Philosophy & Public Affairs**, siyaset felsefesinin en saygın dergilerinden biri. 13 Ağustos'ta, büyük bölümü bir dil modeli tarafından yazılmış bir makaleyi **bilerek** yayımladığı ortaya çıktı. Makalenin tezini Hong Kong Üniversitesi'nden Simon Goldstein sağlamış, metni yönlendirmiş, bazı argümanları geliştirmiş ve hataları düzeltmişti; yazının kendisi ise Claude'a aitti.

Karar tartışma yaratmak için alınmıştı ve amacına fazlasıyla ulaştı: Daily Nous'taki duyuru üç yüzü aşkın yorum aldı.

24 Ağustos'ta dergi kararını açıkladı. **Yapay zekâ tarafından yazılmış içerik bundan böyle yayımlanmayacak.**

## Deney neyi gösterdi?

Derginin gerekçesi teknik bir kalite meselesi değildi.

Makale hakem sürecinden geçmişti; okunabilir, tutarlı ve savunulabilir bir metindi. Sorun buradaydı: Eğer ölçüt yalnızca metnin kalitesiyse, yapay zekâ yazarlığını dışlayacak bir dayanak kalmıyordu.

Dergiyi karara götüren şey, ölçütün kalite olmadığının fark edilmesi oldu. Akademik yayıncılık, bir metnin arkasında **sorumluluk taşıyan bir yazar** bulunduğu varsayımı üzerine kurulu. Hakem değerlendirmesi, atıf sistemi, düzeltme ve geri çekme usulleri — hepsi bu varsayıma dayanıyor.

Yazarlık paylaşıldığında değil, **devredildiğinde** bu yapı çalışmıyor.

## Tartışma nereye kaydı?

Yasak kararı meseleyi kapatmadı; başka bir yere taşıdı.

27 Ağustos'ta Daily Nous'ta yayımlanan ve otuzu aşkın yorum alan bir yazı, akademinin asıl güçlüğünü ortaya koydu: **Kural koymak kolay, uygulamak değil.**

Bugün dergilere, üniversitelere ve bölümlere gelen metinlerin ne kadarının kısmen ya da tamamen yapay zekâ ürünü olduğu bilinmiyor. Politikalar oluşuyor ama sürekli değişiyor; teknoloji ilerledikçe yeni yazılmış kurallar bile muğlaklaşıyor ya da beklenmedik boşluklar üretiyor.

Bu belirsizlik yeni bir riski doğurdu: **asılsız suçlama.**

Tartışmada öne çıkan itirazlardan biri, akademik kötüye kullanımı işaret eden meslektaşların "kanun kaçağı avcısı" gibi görülmesine karşıydı. Karşı taraf ise tespit araçlarının güvenilirliğini sorguladı.

Somut bir örnek verildi: Bir felsefeci, geçen yıl bir dil modeline yaptırdığı Platon'un *Sokrates'in Savunması* çevirisini bugünün tespit araçlarından geçirdiğini ve sonuçların çelişkili çıktığını anlattı. Araçlar hem yanlış pozitif hem yanlış negatif üretiyor.

Buradan çıkan uyarı açık: Bir kural, ancak adil biçimde uygulanabildiği ölçüde kuraldır. Yanlış suçlanan bir akademisyenin kariyerine verilecek zarar geri alınamaz.

## "Silah yarışı"

Tartışmada dile getirilen bir öngörü, sorunun teknik çözümünün neden zor olduğunu iyi özetliyor: Tespit araçları geliştikçe, metinleri o araçlardan geçirip yeniden yazdıran bir döngü kurulacak. Yapay zekâlar birbirine karşı yarışacak.

Bu tabloda insan denetiminin nereye oturacağı belirsiz.

## Karşı görüş: bu bir eşik mi, bir aşama mı?

Tartışmanın en dikkat çekici müdahalelerinden biri, spekülatif realizmin kurucu isimlerinden **Graham Harman**'dan geldi. Harman, isteyenlerin her şeyi sıfırdan yazmayı sürdürebileceğini, tıpkı daktilo ve kelime işlemciyi reddedebilecekleri gibi, belirtti.

Fizikçi ve felsefeci **David Wallace** ise benzer bir tarihsel karşılaştırma yaptı: Uzun sembolik hesapları hatasız yapabilme becerisi yakın zamana kadar "çekirdek fizik" sayılıyordu; bugün sayılmıyor.

Karşı taraf ise bu benzetmeye itiraz ediyor. Hesap makinesi bir sonucu üretir; felsefi bir metin ise sonuçtan ibaret değildir. Bu itiraz, sitemizde geçen hafta aktardığımız [Daniel Kaufman tartışmasının](/haber/yapay-zeka-felsefe-arastirmasi-tartismasi) merkezindeki noktayla aynı: Felsefede yöntem, sonuçtan ayrılabilir mi?

## Ne değişti?

Ağustos ayı bu tartışma açısından bir eşik oldu.

Ayın başında bir dergi, yapay zekâ yazarlığının mümkün olup olmadığını sınadı. Ayın sonunda aynı dergi, mümkün olmasının onu meşru kılmadığına karar verdi.

Geriye kalan soru daha zor: Yasak konulduktan sonra, bir metnin kime ait olduğu nasıl bilinecek?

Bu sorunun yanıtı henüz yok. Ama sorunun kendisi, akademik yayıncılığın önümüzdeki yıllardaki gündemini belirleyecek gibi görünüyor.`,
  },
  {
    title: "Ağustosta beş kayıp: felsefe dünyası yoğun bir ay geçirdi",
    slug: "agustos-2026-felsefe-vefatlari",
    summary:
      "Anthony Kenny, Cain Todd, David Charles, Tom Rockmore ve Gabriele Taylor tek bir ay içinde hayatını kaybetti. Aristoteles yorumculuğundan Alman idealizmi araştırmalarına, ahlak psikolojisinden estetiğe uzanan farklı hatların temsilcileriydiler.",
    seoTitle: "Ağustos 2026: felsefe dünyasının kayıpları",
    metaDescription:
      "Anthony Kenny, Cain Todd, David Charles, Tom Rockmore ve Gabriele Taylor'ın ardından. Ağustos 2026'da hayatını kaybeden felsefeciler.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Balliol_College_Feb_2005.jpg?width=1600",
    imageCredit: "Balliol College, Oxford — Anthony Kenny 1978-1989 arasında bu kolejin başkanlığını yaptı · Wikimedia Commons",
    featured: false,
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/26/gabriele-taylor-1927-2026/",
    publishedAt: "2026-08-28T05:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["vefat", "akademi", "antik-felsefe", "estetik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Gabriele Taylor (1927-2026)",
        publisher: "Daily Nous",
        date: "26 Ağustos 2026",
        url: "https://dailynous.com/2026/08/26/gabriele-taylor-1927-2026/",
        primary: true,
      },
      {
        title: "Tom Rockmore (1942-2026)",
        publisher: "Daily Nous",
        date: "21 Ağustos 2026",
        url: "https://dailynous.com/2026/08/21/tom-rockmore-1942-2026/",
      },
      {
        title: "David Charles (1947-2026)",
        publisher: "Daily Nous",
        date: "14 Ağustos 2026",
        url: "https://dailynous.com/2026/08/14/david-charles-1947-2026/",
      },
      {
        title: "Cain Todd (1976-2026)",
        publisher: "Daily Nous",
        date: "11 Ağustos 2026",
        url: "https://dailynous.com/2026/08/11/cain-todd-1976-2026/",
      },
      {
        title: "Sir Anthony Kenny 1931-2026",
        publisher: "Balliol College, Oxford",
        url: "https://www.balliol.ox.ac.uk/news/2026/august/sir-anthony-kenny-1931-2026",
      },
    ],
    content: `Felsefe camiası için ağır bir ay oldu. Ağustos 2026'da beş akademisyenin ölüm haberi geldi.

Listenin tamamına bakıldığında ortaya, yirminci yüzyıl ikinci yarısı felsefesinin farklı damarlarını temsil eden bir kesit çıkıyor.

## Anthony Kenny (1931-2026)

3 Ağustos'ta, doksan beş yaşında öldü.

Liverpool doğumluydu ve önce Katolik rahip olarak yetişti; felsefi kuşkuları 1963'te rahipliği bırakmasına yol açtı. Ardından İngiliz felsefesinin merkezî figürlerinden biri oldu.

Balliol College'da 1964-1978 arasında felsefe öğretim üyesi, 1978-1989 arasında kolejin başkanıydı. Rhodes House yöneticiliği yaptığı dönemde St John's College'da profesörlük görevini sürdürdü. Oxford Üniversitesi rektör yardımcılığı, British Library yönetim kurulu başkanlığı ve **British Academy başkanlığı** görevlerinde bulundu.

Aristoteles ve Aquinas otoritesiydi; ama Descartes, Frege ve Wittgenstein üzerine de yazdı. Dört ciltlik *Oxford Batı Felsefesi Tarihi* bu genişliğin ürünü. *Wittgenstein* (1973) ve *A New History of Western Philosophy* en çok okunan kitapları arasında.

Kenny'nin özel yeri, analitik felsefe ile skolastik geleneği birbirine konuşturabilmesindeydi. Aquinas'ı Wittgenstein'ın araçlarıyla okumak, o dönemde alışılmış bir şey değildi.

## Cain Todd (1976-2026)

11 Ağustos'ta, elli yaşında öldü. Lancaster Üniversitesi'nde felsefe öğretim üyesiydi.

Estetik ve duygu felsefesi alanında çalışıyordu. Beşinin en genci olması, haberin camiada yarattığı etkiyi de açıklıyor.

## David Charles (1947-2026)

14 Ağustos'ta öldü. Yale Üniversitesi'nde felsefe profesörü emeritusuydu.

Aristoteles araştırmalarının çağdaş dönemdeki önde gelen isimlerindendi. *Aristotle on Meaning and Essence* gibi çalışmaları, Aristoteles'in özcülüğünü çağdaş dil felsefesi tartışmalarıyla birlikte ele alan bir okuma kurdu.

Charles'ın ölümü, Kenny'ninkiyle birlikte, aynı ay içinde Aristoteles yorumculuğunun iki büyük ismini kaybetmek anlamına geldi.

## Tom Rockmore (1942-2026)

21 Ağustos'ta öldü. Pekin Üniversitesi'nde profesör emeritus, Duquesne Üniversitesi'nde seçkin profesör emeritusuydu.

Alman idealizmi, Hegel, Marx ve Heidegger üzerine yazdı. Kariyerinin son döneminde Çin'e yerleşmesi ve orada ders vermesi, kıta felsefesinin Çin akademisindeki yerleşmesine katkıda bulunan bir tercihti.

Rockmore'un *Before and After Hegel* ile *Heidegger and French Philosophy* gibi kitapları, Anglo-Amerikan okurunu kıta geleneğine bağlayan aracı metinler olarak okundu.

## Gabriele Taylor (1927-2026)

26 Ağustos'ta öldü. Oxford Üniversitesi St Anne's College'da felsefe onursal üyesiydi.

Ahlak psikolojisi alanında çalıştı. *Pride, Shame and Guilt* (1985) ve *Deadly Vices* (2006) kitapları, ahlaki duyguları ve kusurları felsefi çözümlemenin konusu hâline getirdi.

Taylor'ın işi, ahlak felsefesinin ilke ve kural tartışmasından duygulanım ve karakter tartışmasına açıldığı dönemin parçasıydı. Bu hat, sitemizde daha önce ele aldığımız [Bernard Williams'ın sistem eleştirisiyle](/haber/bernard-williams-ahlak-sistem-elestirisi) aynı yıllarda gelişti; ikisi de Oxford'daydı.

## Bir not

Bu ölümlerin arka arkaya gelmesi rastlantı. Ama listeye bakıldığında, bir kuşağın sahneden çekilmekte olduğu görülüyor: Kenny 1931, Taylor 1927 doğumlu; ikisi de savaş sonrası İngiliz felsefesinin kurulduğu yıllarda yetişti.

Felsefe Haberleri olarak, bu isimlerin çalışmalarını önümüzdeki dönemde ayrı dosyalarda ele almayı planlıyoruz.`,
  },
  {
    title: "Hannah Arendt Ödülü Lea Ypi'nin: totaliter deneyimden siyaset felsefesine",
    slug: "lea-ypi-hannah-arendt-odulu-2026",
    summary:
      "Arnavutluk doğumlu filozof, bu yılın Hannah Arendt Siyasal Düşünce Ödülü'ne değer görüldü. Jüri kararında, sosyalist Arnavutluk'ta geçen çocukluğunu felsefi çözümlemeye dönüştürme biçimine ve otoriterliğin yükseldiği bir dönemde özgürlük anlayışının kazandığı güncelliğe dikkat çekildi.",
    seoTitle: "Lea Ypi'ye 2026 Hannah Arendt Siyasal Düşünce Ödülü",
    metaDescription:
      "Lea Ypi 2026 Hannah Arendt Ödülü'nü kazandı. Özgür, Indignity, LSE, Kant ve Marksizm çalışmaları; ödül töreni 10 Aralık'ta Bremen'de.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Lea_Ypi_at_the_British_Library.jpg?width=1600",
    imageCredit: "Lea Ypi · Wikimedia Commons",
    featured: true,
    sourceName: "Heinrich-Böll-Stiftung",
    sourceUrl: "https://www.boell.de/de/2026/08/26/lea-ypi-erhaelt-den-hannah-arendt-preis-fuer-politisches-denken-2026",
    publishedAt: "2026-08-28T05:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "siyaset-felsefesi", "demokrasi", "marksizm", "kant"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Lea Ypi erhält den Hannah-Arendt-Preis für politisches Denken 2026",
        publisher: "Heinrich-Böll-Stiftung",
        date: "26 Ağustos 2026",
        url: "https://www.boell.de/de/2026/08/26/lea-ypi-erhaelt-den-hannah-arendt-preis-fuer-politisches-denken-2026",
        primary: true,
      },
      {
        title: "Philosophin Lea Ypi erhält Hannah-Arendt-Preis 2026",
        publisher: "DIE ZEIT",
        date: "26 Ağustos 2026",
        url: "https://www.zeit.de/gesellschaft/zeitgeschehen/2026-08/hannah-arendt-preis-lea-ypi-politisches-denken-gxe",
      },
      {
        title: "Hannah Arendt Preis für politisches Denken",
        publisher: "Hannah-Arendt-Verein, Bremen",
        url: "https://hannah-arendt-verein.de/en/",
      },
    ],
    content: `Bu yılın **Hannah Arendt Siyasal Düşünce Ödülü**, Arnavut-İngiliz filozof **Lea Ypi**'ye verildi.

Bremen'deki Hannah Arendt Derneği'nin 26 Ağustos'ta yaptığı açıklamada gerekçe şöyle özetlendi: "Felsefi, siyasal ve edebî çalışması, demokratik düşünmenin merkezindeki temel sorularla hesaplaşıyor: özgürlük, hakikat, adalet, insan onuru ve siyasal eylemin koşulları."

Ödül on bin euro değerinde. Töreni **10 Aralık 2026**'da Bremen Belediye Sarayı'nda yapılacak. Ödül parası Bremen Serbest Hansa Şehri ile Heinrich Böll Vakfı tarafından karşılanıyor.

## Jürinin vurgusu: deneyim ile çözümlemenin birleşmesi

Uluslararası jüri, Ypi'yi "çağın önde gelen siyasal düşünürlerinden biri" olarak niteledi.

Kararda özellikle bir nokta öne çıkarıldı: Ypi'nin çalışması, **totaliter bir sistem altında yaşanmış siyasal deneyimi** felsefi düşünme ve tarihsel çözümleme ile birleştiriyor. Jüriye göre buradan, deneyimin, hafızanın ve eleştirel yargının birbirine bağlandığı özgün bir kamusal siyasal düşünme biçimi doğuyor.

Gerekçenin son cümlesi güncel: Yeni otoriter meydan okumalar karşısında Ypi'nin özgürlük ve demokrasi anlayışı özel bir güncellik kazanıyor.

Bu vurgu, ödülün adını aldığı düşünürle de örtüşüyor. Arendt de totalitarizmi dışarıdan gözlemleyen bir kuramcı değil, ondan kaçmak zorunda kalmış bir düşünürdü.

## Ypi kimdir?

Lea Ypi 1979'da Arnavutluk'un başkenti Tiran'da doğdu. Kırk yedi yaşında.

Şu anda London School of Economics'te **Ralph Miliband Siyaset ve Felsefe Kürsüsü** profesörü. Çalışma alanları arasında siyaset felsefesi, felsefe tarihi, Marksizm ve Kant bulunuyor.

Bu bileşim kendi başına dikkat çekici. Kant araştırmacılığı ile Marksist siyaset kuramını aynı çalışma programında yürüten isim sayısı fazla değil. Ypi'nin akademik çalışmaları, Kant'ın tarih felsefesi ve kozmopolitanizmi ile normatif siyaset kuramı arasındaki bağlantılara odaklanıyor.

## "Özgür": çocukluğun felsefi kullanımı

Ypi'yi akademinin dışında tanıtan kitap, 2021'de yayımlanan **Free: Coming of Age at the End of History** — Türkçede *Özgür*.

Kitap, sosyalist Arnavutluk'ta geçen çocukluğunu anlatıyor. Ama alışıldık bir totalitarizm anlatısı değil.

Ypi'nin yaptığı hamle şu: Çocukken kendisine öğretilen "özgürlük" ile 1990'dan sonra öğretilen "özgürlük" arasındaki farkı, ikisini de tam olarak kabul etmeden inceliyor. Sosyalist rejimin özgürlük söyleminin sahteliğini gösterirken, geçiş döneminin liberal özgürlük vaadinin de ailesi ve ülkesi için ne anlama geldiğini — işsizlik, göç, piramit şirketleri, iç savaşa varan çöküş — aynı ciddiyetle anlatıyor.

Kitabın felsefi değeri buradan geliyor: **Özgürlük kavramının, kimin hangi konumdan konuştuğuna göre nasıl değiştiğini** gösteriyor.

## "Indignity": bir fotoğraftan çıkan tarih

Ypi'nin 2025'te yayımlanan ikinci anlatı kitabı **Indignity: A Life Reimagined**, benzer bir yöntemi bir kuşak geriye taşıyor.

Çıkış noktası tek bir fotoğraf: Ypi, büyükannesi Leman'ın 1941'de Alpler'de balayında çekilmiş bir fotoğrafını, bir yabancının sosyal medya paylaşımında buluyor. Oysa büyüdüğü yıllarda ona, büyükannesinin gençliğine dair bütün kayıtların Arnavutluk'ta komünizmin ilk yıllarında imha edildiği söylenmişti.

Kitap buradan Osmanlı aristokrasisinin kaybolmuş dünyasına, modern Yunanistan ve Arnavutluk'un kuruluşuna, küresel bir mali krize, savaşın yıkımına ve Balkanlar'da komünizmin doğuşuna uzanıyor.

Kitap Avrupa Edebiyatı Jean Monnet Ödülü'ne aday gösterildi; Sunday Times, Financial Times, Washington Post ve NPR tarafından yılın kitapları arasında sayıldı.

## Neden bu ödül, neden şimdi?

Hannah Arendt Ödülü, Arendt geleneğinde **kamusal siyasal düşünme ve eyleme** katkıda bulunanlara veriliyor. Geçmiş sahipleri arasında siyaset kuramcıları, gazeteciler ve yazarlar var.

Ypi'nin seçimi, ödülün kendi tanımına uygun. Çünkü Ypi hem akademik siyaset felsefesi üretiyor hem de bunu geniş bir okur kitlesine ulaşan anlatı biçimine çevirebiliyor.

Arendt'in kendi yönteminde de benzer bir şey vardı: Kavramsal çözümlemeyi biyografiden, tarihten ve tanıklıktan ayırmamak.

## Türkçede

Ypi'nin *Özgür* kitabı Türkçeye çevrildi. *Indignity* için henüz bir çeviri duyurusu yapılmadı.`,
  },
  {
    title: "Žižek'ten yeni kitap: 'Liberal Faşizmler' eylülde Türkçede",
    slug: "zizek-liberal-fasizmler-iletisim",
    summary:
      "Slovenyalı filozofun yeni kitabı, İletişim Yayınları'nın duyurusuna göre eylülün ilk haftasında raflarda olacak. Çeviri Barış Özkul'a ait. Kitabın başlığı, Žižek'in son yıllarda ısrarla döndüğü bir tezi işaret ediyor: Otoriterliğin bugünkü biçimi liberalizmin karşısında değil, içinde doğuyor.",
    seoTitle: "Slavoj Žižek — Liberal Faşizmler (İletişim Yayınları)",
    metaDescription:
      "Žižek'in Liberal Faşizmler kitabı Barış Özkul çevirisiyle İletişim Yayınları'ndan eylülde çıkıyor.",
    contentType: "KITAP",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Slavoj_Zizek_in_Liverpool_cropped.jpg?width=1600",
    imageCredit: "Slavoj Žižek · Wikimedia Commons",
    featured: false,
    sourceName: "İletişim Yayınları",
    sourceUrl: "https://iletisim.com.tr/kisi/baris-ozkul/9251",
    publishedAt: "2026-08-28T04:40:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "ceviri", "siyaset-felsefesi", "marksizm", "psikanaliz"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Barış Özkul — yazar ve çevirmen sayfası",
        publisher: "İletişim Yayınları",
        url: "https://iletisim.com.tr/kisi/baris-ozkul/9251",
      },
    ],
    content: `**Slavoj Žižek**'in yeni kitabı **Liberal Faşizmler**, İletişim Yayınları'nın duyurusuna göre eylülün ilk haftasında Türkçede yayımlanıyor. Çeviri **Barış Özkul**'a ait.

Özkul, 2013'ten bu yana *Birikim* dergisinde ve İletişim Yayınları'nda editörlük yapıyor; İstanbul Üniversitesi İngiliz Dili ve Edebiyatı doktorasını tamamladı. Faşizm tartışmaları üzerine kendi yazıları da bulunuyor — bu, çeviriyi yalnızca dil aktarımı olmaktan çıkaran bir ayrıntı.

## Başlıktaki tez

*Liberal faşizm* ifadesi ilk bakışta bir çelişki gibi durur. Faşizm, tanımı gereği liberalizmin karşıtı sayılır: Çoğulculuğu, hukuk devletini ve bireysel hakları reddeder.

Žižek'in son yıllarda ısrarla döndüğü tez, tam da bu karşıtlığın rahatlatıcı olduğu yönünde.

Ona göre bugünkü otoriter biçimler liberal demokrasiye dışarıdan saldırmıyor. Onun kurumlarını kullanarak, seçimle gelerek ve çoğu zaman "özgürlük" dilini konuşarak yerleşiyor. Sansür, ifade özgürlüğü adına savunulabiliyor; dışlama, güvenlik adına meşrulaştırılabiliyor; piyasanın kısıtsızlığı ile siyasal alanın daraltılması aynı programın parçası olabiliyor.

Bu tez Žižek'e özgü değil — Wendy Brown'dan Adam Tooze'a benzer çözümlemeler var. Žižek'in katkısı genellikle psikanalitik tarafta: Otoriter siyasetin neden **çekici** olduğunu, hangi arzuya seslendiğini sormak.

## Žižek'in Türkçedeki yeri

1949 Ljubljana doğumlu Žižek, Lacancı psikanaliz, Hegel yorumu, ideoloji eleştirisi ve popüler kültür çözümlemesini birleştiren yazı biçimiyle tanınıyor.

Türkçede geniş bir külliyatı bulunuyor: *İdeolojinin Yüce Nesnesi*, *Kırılgan Temas*, *Ahir Zamanlarda Yaşarken*, *Hiçten Az* ve *Komünizm Fikri* bunların arasında. Bu bakımdan Türkiye, Žižek'in en hızlı çevrildiği ülkelerden biri.

## Bir editör notu

Kitabın özgün adı, sayfa sayısı ve ISBN bilgisi henüz açıklanmadı; yayınevinin duyurusu şimdilik yalnızca başlık, çevirmen ve çıkış zamanını içeriyor.

Künye bilgileri yayımlandığında bu haberi güncelleyeceğiz. Kitap çıktıktan sonra ayrıntılı bir değerlendirme de planlıyoruz.`,
  },
  {
    title: "Hilmi Ziya Ülken'in soruları neden hâlâ cevaplanmadı?",
    slug: "hilmi-ziya-ulken-sorulari",
    summary:
      "Türk düşünce hayatının en üretken ismi öleli yarım yüzyıldan fazla oldu. Ama bilgi ile değer, tercüme ile düşünce üretimi, millî kimlik ile evrensellik arasında kurduğu sorular, yapay zekâ çağında beklenmedik biçimde tazeleniyor.",
    seoTitle: "Hilmi Ziya Ülken: bilgi, değer ve tercüme üzerine sorular",
    metaDescription:
      "Hilmi Ziya Ülken'in Bilgi ve Değer, Uyanış Devirlerinde Tercümenin Rolü ve Türkiye'de Çağdaş Düşünce Tarihi kitapları bugün nasıl okunabilir?",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Hilmi_Ziya_%C3%9Clken_24_Temmuz_1946.jpg?width=1600",
    imageCredit: "Hilmi Ziya Ülken, 24 Temmuz 1946 · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-28T04:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["tarih", "akademi", "ceviri", "islam-felsefesi", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Hilmi Ziya Ülken",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/Category:Sociologists_from_Turkey",
      },
    ],
    content: `Bir düşünürün güncelliği, verdiği cevapların hâlâ geçerli olmasıyla ölçülmez. Sorduğu soruların hâlâ cevapsız olmasıyla ölçülür.

**Hilmi Ziya Ülken** bu ölçüte göre fazlasıyla güncel.

3 Ekim 1901'de İstanbul'da doğdu, 5 Haziran 1974'te yine İstanbul'da öldü. Ama biyografisini bu iki tarih arasına sıkıştırmak, Cumhuriyet Türkiyesi'nin yetiştirdiği en kapsamlı entelektüel profillerden birini eksik anlatmak olur.

## Tek kişilik bir kurum

Ülken aynı anda filozof, sosyolog, düşünce tarihçisi, eğitimci, yayıncı ve çevirmen olarak çalıştı.

İstanbul Üniversitesi'nde Türk düşüncesi, mantık, değerler kuramı, İslâm felsefesi, ahlâk ve sosyoloji dersleri verdi; sonra Ankara Üniversitesi İlahiyat ve Eğitim fakültelerinde görev yaptı. 1957'de ordinaryüs profesör oldu.

Ancak onu önemli kılan unvanları değil. Yaptığı iş şuydu: **Türkiye'nin düşünce problemlerini, Türkiye'nin tarihsel tecrübesi ile dünya düşüncesinin birikimi arasında tartışmak.**

Ardında olağanüstü geniş bir külliyat bıraktı: *Aşk Ahlâkı*, *Türk Tefekkür Tarihi*, *Uyanış Devirlerinde Tercümenin Rolü*, *İçtimaî Doktrinler Tarihi*, *İslâm Düşüncesi*, *Tarihî Maddeciliğe Reddiye*, *Felsefeye Giriş*, *Bilgi ve Değer*, *Eğitim Felsefesi*, *Varlık ve Oluş* ve iki ciltlik *Türkiye'de Çağdaş Düşünce Tarihi*.

1938-1943 arasında çıkardığı *İnsan* dergisi, onun yalnızca akademik çevrede kalan bir profesör olmadığını gösteriyor. Ülken'i "kitap yazarı" olarak değil, **düşünce ortamı kurucusu** olarak okumak gerekir.

## Asıl mesele: Türkiye neden düşünce üretemiyor?

*Türkiye'de Çağdaş Düşünce Tarihi* bir tarih kitabı gibi görünür. Değildir.

Ülken orada geçmişte yaşamış fikir adamlarını sıralamıyor. Sorduğu soru şu: **Türkiye'de neden süreklilik taşıyan, eleştirel ve özgün bir düşünce geleneği yeterince gelişemedi?**

Verdiği yanıtlarda kaynak yetersizliği, toplumsal ve siyasal istikrarsızlık ve Batı düşüncesinin yeterince derinlikli bilinmemesi öne çıkar. Cumhuriyet'in büyük bir kültürel ve siyasal dönüşüm gerçekleştirdiğini kabul eder; ama bunun düşünce hayatında kendiliğinden bir sıçrama yaratmadığını da söyler.

Bu teşhis, kitabın yayımlandığı yıllardan bugüne aktarıldığında kaybolmuyor. Üniversitelerde, düşünce kuruluşlarında ve dijital mecralarda dolaşan soru hâlâ aynı: Türkiye neden kendi düşünce gündemini kurmakta zorlanıyor?

## Tercüme: yapay zekâ çağında okunacak bir kitap

Ülken'in bugün en beklenmedik biçimde güncellenen eseri *Uyanış Devirlerinde Tercümenin Rolü*.

Kitabın tezi şu: Tercüme, bir dilden ötekine metin aktarmak gibi teknik bir iş değildir. **Medeniyetlerin karşılaşmasının ve düşüncenin yeniden üretilmesinin temel araçlarından biridir.** Ülken bu tezi, Yunancadan Arapçaya, Arapçadan Latinceye uzanan büyük çeviri dalgalarını inceleyerek kuruyor.

Bu düşünce, saniyeler içinde binlerce sayfanın çevrilebildiği bir dünyada daha da ilginç hâle geliyor.

Çünkü artık soru "Bir metni çevirebiliyor muyuz?" değil. Soru şu:

**Çevirdiğimiz bilgiyi anlayabiliyor, eleştirebiliyor ve kendi düşüncemize dönüştürebiliyor muyuz?**

Tercümenin teknik maliyeti düşerken, **entelektüel tercümenin** önemi artıyor. Bir düşünceyi başka bir dile aktarmak kolaylaşırken, o düşüncenin arkasındaki kavramları, tarihsel bağlamı ve felsefi varsayımları anlamak insanın işi olarak kalıyor.

Ülken'in kitabı bu açıdan bir kültür tarihi çalışması olmaktan çıkıp, bilginin nasıl dolaşıma girdiği ve nasıl düşünceye dönüştüğü sorusunun erken bir habercisi hâline geliyor.

## Bilgi çoğaldıkça hakikat neden kolaylaşmıyor?

*Bilgi ve Değer* bugün başlığıyla bile dikkat çekiyor.

Tarihte hiç olmadığı kadar büyük bir bilgi hacmine erişiyoruz. Ama bilgi miktarının artması otomatik olarak daha bilgili toplumlar üretmiyor. Tersine, dezenformasyon ve bilgi kirliliği modern toplumların temel problemlerinden biri hâline geldi.

Ülken'in ayrımı burada işe yarıyor: **Bilmek ile doğruyu seçmek aynı şey değildir.**

Bir insanın elinde çok fazla bilgi bulunabilir; ama o bilginin hangi amaçla kullanılacağı sorusu değerler alanına aittir.

Yapay zekâ bu problemi ortadan kaldırmıyor, görünür kılıyor. Bir sistem milyonlarca bilgi parçasını bir araya getirebilir. Ama hangi bilginin önemli olduğu, hangi amacın iyi olduğu, hangi kararın adil olduğu soruları hesaplamaya indirgenemiyor.

Sitemizde aktardığımız [yapay zekâ ve felsefe tartışması](/haber/yapay-zeka-felsefe-arastirmasi-tartismasi) da tam bu ayrımın etrafında dönüyor.

## Eğitim: bilgi aktarmak mı, insan yetiştirmek mi?

*Eğitim Felsefesi*'nde Ülken eğitimi okul, müfredat ve ders kitabı çerçevesinde ele almıyor. Ona göre eğitimin amacı, insanın düşünme, değerlendirme ve toplumsal hayata katılma kapasitesini geliştirmektir.

Bugünkü eğitim tartışmasının sıkıştığı yer de burası. Öğrencilere giderek daha fazla bilgi yükleniyor; eleştirel düşünme, muhakeme, estetik duyarlılık ve ahlâkî sorumluluğun nasıl geliştirileceği ise çözülmemiş bir mesele olarak duruyor.

Sınavların ve algoritmik araçların belirleyici olduğu bir ortamda Ülken'in sorusu yeniden sorulabilir: Eğitimin amacı bilgi sahibi bireyler yetiştirmek mi, **kendi değerlerini tartabilen** insanlar yetiştirmek mi?

## Aşk Ahlâkı: başarı çağında ahlâk

1931 tarihli *Aşk Ahlâkı*, Ülken'in en genç yaşta yazdığı önemli kitaplardan.

Oradaki ahlâk anlayışı kurallara uymaktan ibaret değil. İnsan, kendisini aşan bir değer alanına yönelmeden, yalnızca çıkarlarının peşinden giderek insanlaşamaz.

Bu fikir, başarı, kariyer ve kişisel performans kavramlarının hayatı kuşattığı bir çağda okunabilir. Bugünün insanına sürekli daha üretken, daha görünür, daha başarılı olması söyleniyor. Bütün bu "daha fazla"ların arasında eski bir soru kayboluyor: **Daha iyi bir insan olmak ne demektir?**

Teknoloji insanın ne yapabileceğini genişletiyor; ne yapması gerektiği sorusuna cevap vermiyor.

## "İnsanî vatanperverlik"

*İnsanî Vatanperverlik*, Ülken'in bugün en tartışmaya değer kitaplarından biri.

Tezi şu: Millî kimlik ile insanlık fikri birbirinin düşmanı olmak zorunda değil. Vatan sevgisi, başka toplumlara düşmanlık üretmeyi gerektirmez.

Bu yaklaşım basit bir "ya o ya bu" ikiliğine karşı daha karmaşık bir düşünme biçimi öneriyor: İnsan kendi tarihine ve kültürüne bağlı olabilir; bu bağlılık insanlığın ortak değerlerini reddetmeyi gerektirmez.

Kimlik siyasetinin sertleştiği bir dünyada bu fikir hiç eski görünmüyor.

## İslâm düşüncesi ile Batı düşüncesi arasında

Ülken'in ayırt edici özelliklerinden biri, Doğu ve Batı düşüncesini birbirinden kopuk iki dünya olarak görmemesiydi.

Fârâbî, İbn Sînâ, İbn Rüşd ve İbn Haldûn üzerine çalışırken aynı anda modern Avrupa felsefesini ve sosyolojisini yakından takip etti.

Bu tavırla onun projesi, Türkiye'nin modernleşmesini "Doğu'dan Batı'ya geçiş" hikâyesi olarak değil, **farklı düşünce geleneklerinin karşılaşması** olarak anlamaya çalışıyordu.

Bu, bugün de önemli. Çünkü modern dünyanın meselesi artık yalnızca Batılılaşmak değil; farklı bilgi ve düşünce geleneklerinin birbirleriyle nasıl konuşabileceği.

## Cevaplanmamış sorular

Ülken'in dünyası ile bizimki arasında büyük farklar var. O imparatorluktan Cumhuriyet'e geçişi, iki savaş arası çalkantıyı ve Soğuk Savaş'ın başlangıcını yaşadı; biz dijitalleşmenin, yapay zekânın ve yeni kimlik mücadelelerinin dünyasında yaşıyoruz.

Ama sorular şaşırtıcı biçimde değişmedi:

- Bilgi nasıl düşünceye dönüşür?
- Bir toplum kendi düşünce geleneğini nasıl oluşturur?
- Modernleşmek ne demektir?
- Millî kimlik ile evrensellik nasıl bağdaştırılır?
- Eğitimin amacı nedir?
- Bilim bize neyi söyleyebilir, neyi söyleyemez?
- İyi bir toplum nasıl kurulur?

Değişen yalnızca soruların sorulduğu tarihsel koşullar.

Ülken'in mirasının belki de en önemli tarafı bu: Hazır cevaplar bırakmaktan çok, **Türkiye'nin kendi kendisine sorması gereken soruları** bıraktı.

Çünkü bir ülkenin entelektüel bağımsızlığı kendi kitaplarını yayımlamasıyla değil, **kendi sorularını sorabilmesiyle** başlar.

Yarım yüzyıl sonra o sorular hâlâ masanın üzerinde duruyor.`,
  },
  {
    title: "Axel Honneth: adalet yalnızca pay meselesi değil, görülme meselesi",
    slug: "axel-honneth-taninma-ve-calisma",
    summary:
      "Frankfurt Okulu'nun mirasını sürdüren filozof, toplumsal çatışmaların arkasında görünmez bir talep olduğunu savunuyor: tanınma. Son çalışmalarında bu çerçeveyi çalışma hayatına taşıyarak demokrasinin işyerinde öğrenilip öğrenilemeyeceğini soruyor.",
    seoTitle: "Axel Honneth: tanınma mücadelesi, sosyal özgürlük ve emek",
    metaDescription:
      "Axel Honneth'in tanınma kuramı, üç tanınma biçimi, sosyal özgürlük kavramı ve The Working Sovereign kitabı.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Axel_Honneth_2016-04-18.jpg?width=1600",
    imageCredit: "Axel Honneth · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-28T04:10:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["elestirel-teori", "siyaset-felsefesi", "demokrasi", "kavram", "etik"],
    philosopherSlugs: ["axel-honneth"],
    sources: [
      {
        title: "Axel Honneth",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/Category:Axel_Honneth",
      },
    ],
    content: `Modern toplumdaki adaletsizlikleri açıklamanın en yaygın yolu dağıtımdan geçer: Kim ne kadar alıyor?

**Axel Honneth**'in yarım yüzyıla yaklaşan çalışması, bu sorunun eksik olduğunu göstermeye ayrıldı. Ona göre insanların öfkelenmesinin, aşağılandığını hissetmesinin ve mücadeleye girmesinin arkasında başka bir talep var: **tanınma**.

1949 doğumlu Honneth, bugün Columbia Üniversitesi'nde Jack C. Weinstein Beşerî Bilimler Profesörü; aynı zamanda Frankfurt Goethe Üniversitesi Sosyal Araştırmalar Enstitüsü'nün direktörlüğünü sürdürüyor. 1980'lerde Jürgen Habermas'ın asistanı olarak Frankfurt geleneğinin içinde yetişti; sonra o geleneğin temel meselelerini kendi kuramıyla yeniden yorumladı.

## Üç tanınma biçimi

1992'de Almanca yayımlanan ve İngilizceye *The Struggle for Recognition* adıyla çevrilen **Tanınma Uğruna Mücadele**, çağdaş siyaset felsefesinin en etkili kitaplarından biri hâline geldi.

Çıkış noktası Hegel'e uzanıyor — sitemizde dün andığımız [efendi-köle diyalektiğine](/haber/felsefe-tarihinde-bugun-27-agustos-hegel). İnsan kendi başına kapalı bir özne değildir; kendisini bir kişi olarak kurabilmek için başkalarının onu belirli biçimlerde tanımasına ihtiyaç duyar.

Honneth bu fikri modern toplum kuramına taşırken üç ayrı tanınma biçimi ayırt ediyor:

**Sevgi.** Yakın ilişkilerde görülmek ve değer verilmek. Bunun karşılığı **özgüven**dir — kişinin kendi ihtiyaç ve duygularına güvenebilmesi.

**Hukuksal saygı.** Hukuk önünde eşit ve hak sahibi bir kişi olarak kabul edilmek. Karşılığı **özsaygı**dır.

**Toplumsal değer görme.** Katkısının toplumca değerli sayılması. Karşılığı **kendine değer verme** duygusudur.

Bu üçlü ayrım, kuramın gücünü oluşturuyor. Çünkü her birinin kendine özgü bir ihlal biçimi var: kötü muamele, hak yoksunluğu ve aşağılanma. Ve her ihlal farklı bir mücadele biçimi doğuruyor.

## Aşağılanma neden siyasal bir mesele?

Honneth'in çerçevesinin asıl sonucu şu: Bir kişinin aşağılanması ya da dışlanması yalnızca psikolojik bir sorun değil; **ahlaki ve siyasal bir mesele**.

Bu okumada toplumsal mücadeleler yalnızca kaynak paylaşımıyla ilgili değildir. İnsanlar aynı zamanda üç soruya verilen cevaplar için mücadele eder:

*Beni görüyor musunuz? Beni eşit kabul ediyor musunuz? Katkımın bir değeri var mı?*

Kuram kadın hareketleri, işçi hareketleri ve azınlık hak mücadelelerini anlamakta etkili oldu. Ama onu bugün "kimlik siyaseti" denen tartışmaya indirgemek yanıltıcı olur.

Çünkü Honneth için tanınma, insanın toplumla kurduğu ilişkinin temel yapısını açıklayan daha geniş bir kavram. Bir işçinin emeğinin değersizleştirilmesi, bir yurttaşın karar süreçlerinden dışlanması, bir grubun kültürünün aşağılanması ve bir bireyin hukuk önünde eşit görülmemesi — farklı görünen bu durumlar aynı temel soruna işaret edebilir.

## "Özgürlük yalnız başına gerçekleştirilemez"

Honneth'in sonraki döneminde merkeze **sosyal özgürlük** kavramı yerleşti.

Modern liberal düşüncede özgürlük çoğunlukla bireyin başkalarının müdahalesinden uzak olması olarak tanımlanır. Honneth bunun yetersiz olduğunu savunuyor: İnsan bazı özgürlük biçimlerini **ancak başkalarıyla birlikte** gerçekleştirebilir.

Demokratik özgürlük bunun en açık örneği. Bir insan tek başına demokratik olamaz. Siyasal iradenin oluşması iletişimi, karşılıklı tanımayı ve ortak karar almayı gerektirir.

Bu anlayışta "ben" ile "biz" karşıt değil. Bazı özgürlük biçimleri ancak bir "biz" içinde mümkün hâle geliyor.

Çıkarım, bugünkü demokrasi krizleri açısından dikkat çekici: Demokrasi yalnızca sandıktan ibaretse ve yurttaşlar birbirlerini eşit siyasal özneler olarak görmüyorsa, kurumlar biçimsel olarak ayakta kalsa bile demokratik yaşam zayıflar.

## Şimdi sıra emekte

Honneth'in son dönem çalışmalarının başlığı çalışma hayatı.

**The Working Sovereign: Labour and Democratic Citizenship** — Almanca *Der arbeitende Souverän* — çalışma dünyasının demokrasiyle ilişkisini yeniden ele alıyor.

Kitabın tezi şu: Çalışma ilişkileri yalnızca ekonomik üretim meselesi değil. İşyerleri, insanların demokratik davranış geliştirmesinde ve ortak yaşamın gereklerini öğrenmesinde rol oynayabilir — ya da oynamayabilir.

Buradaki soru pratik: Gün içinde hiçbir kararın parçası olmayan, sesi duyulmayan ve emeği görünmeyen bir insanın akşam sandık başında demokratik bir özne olması bekleniyor. Honneth bu beklentinin gerçekçi olup olmadığını soruyor.

Kitap, demokratik katılım ile adil ve şeffaf bir işbölümü arasındaki ilişkiyi tartışıyor.

## Bir sorunun üç hâli

Honneth'in yarım yüzyıllık güzergâhı tek bir sorunun dönüşümü olarak okunabilir:

- **1990'lar:** İnsan neden tanınma için mücadele eder?
- **2010'lar:** İnsan hangi toplumsal koşullarda özgür olabilir?
- **Bugün:** Çalışma hayatı ve kurumlar demokratik yurttaşlığı nasıl mümkün kılar?

Üçünde de aynı hamle var: Özgürlüğü devletin ya da hukukun sağladığı bireysel bir alan olarak değil, **insanların birbirleriyle kurduğu ilişkilerin niteliği** üzerinden düşünmek.

## İtirazlar

Honneth'in kuramı eleştirisiz kabul görmüş değil.

Başlıca itiraz, tanınma kavramının toplumsal çatışmaları açıklamakta ne ölçüde yeterli olduğuna dair. Kimi eleştirmenler, tanınma talebinin kendisinin dışlayıcı biçimler alabileceğini — bir grubun tanınma arayışının başka bir grubu dışlamaya dönüşebileceğini — savunuyor.

İkinci itiraz, Honneth'in son dönemde Hegel'e daha fazla yaslanmasına yönelik. Toplumsal özgürlüğün tarihsel ve normatif bir yeniden inşasına dayanan yaklaşımın, toplumsal ilişkilerin maddi boyutlarını — mülkiyet, sermaye, sınıf — yeterince açıklayıp açıklamadığı soruluyor. Nancy Fraser'ın Honneth'le yürüttüğü uzun tartışma bu hattın en bilinen örneği: Fraser'a göre tanınma, yeniden dağıtımın yerine geçemez.

Honneth'in yanıtı, ikisinin karşıt olmadığı yönünde: Dağıtım rejimlerinin kendisi de bir değer hiyerarşisine dayanır.

## Neden okunmalı?

Honneth'in güncelliği basit bir soruda toplanıyor:

**Bir insanı gerçekten özgür yapan nedir?**

Daha yüksek gelir mi? Daha fazla hukuki hak mı? Devletin müdahale etmemesi mi? Yoksa içinde yaşadığı toplum tarafından değerli, eşit ve saygın bir özne olarak kabul edilmesi mi?

Honneth bunlardan birini seçmiyor. Onun çerçevesinde özgürlük, adalet ve tanınma birbirinden koparılamaz.

Bu yüzden kuramı, ekonomik eşitsizliğin yanına aşağılanmayı, görünmezliği, değersizleştirmeyi ve emeğin itibarsızlaştırılmasını da adalet sorununun parçası olarak koyuyor.

Katkısı belki de tek cümlede: **Adalet, insanların ne kadar pay aldığıyla olduğu kadar, toplum içinde birbirlerini nasıl gördükleriyle de ilgilidir.**

## Türkçede

*Tanınma Uğruna Mücadele* Türkçeye çevrildi. *Sosyalizm Fikri* ve *Şeyleşme* de Türkçede bulunuyor. *The Working Sovereign* için henüz çeviri duyurusu yapılmadı.`,
  },
  {
    title: "Derrida yapay zekâ çağında neden yeniden okunuyor?",
    slug: "derrida-yapay-zeka-arsiv-iz-sorumluluk",
    summary:
      "Yapay zekâ tartışması çoğunlukla makinenin düşünüp düşünmediği etrafında dönüyor. Derrida'nın arşiv, yazı, iz ve sorumluluk üzerine düşünceleri soruyu bir adım geriye çekiyor: Makineler yazmaya ve hatırlamaya başladığında 'yazar', 'özne' ve 'sorumluluk' kavramlarına ne oluyor?",
    seoTitle: "Derrida ve yapay zekâ: arşiv, iz ve sorumluluk",
    metaDescription:
      "Jacques Derrida'nın arşiv humması, yazı ve iz kavramları yapay zekâ çağında nasıl okunuyor? Yazarlık, hafıza ve sorumluluk üzerine.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaques_Derrida_%28cropped%29.jpg?width=1600",
    imageCredit: "Jacques Derrida · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-28T04:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["postmodernizm", "yapay-zeka", "teknoloji-felsefesi", "kavram", "medya"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Jacques Derrida",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/derrida/",
      },
    ],
    content: `Yapay zekâ tartışması birkaç sorunun etrafında dönüyor: Makineler düşünebilir mi? İnsan zekâsını aşabilir mi? Dil modelleri gerçekten anlıyor mu?

**Jacques Derrida**'nın düşüncesi bu soruların bir adım gerisine çekiliyor ve daha temel bir şey soruyor:

Bir makine yazabiliyor, cevap üretebiliyor ve insanın dilsel izlerini işleyebiliyorsa; "yazar", "özne", "hafıza", "anlam" ve "sorumluluk" dediğimiz şeylerin sınırı nerede başlar, nerede biter?

Derrida 2004'te öldü; yapay zekâ üzerine yazmadı. Ama yazı, teknik, arşiv ve hafıza üzerine geliştirdiği kavramlar, bugün bu tartışmanın neden yalnızca teknolojik değil felsefi bir mesele olduğunu anlamak için yeniden okunuyor.

## Teknoloji nötr bir araç değildir

Derrida'nın düşüncesinde teknoloji, insanın elindeki tarafsız bir alet olarak ele alınamaz.

Bir iletişim teknolojisi mevcut düşünceleri başka bir kanaldan iletmekle kalmaz; **neyin söylenebileceğini, neyin saklanabileceğini ve neyin hatırlanabileceğini** de değiştirir.

Bu tezin en güçlü ifadesi *Arşiv Humması*'nda (*Mal d'archive*). Derrida orada arşivi, geçmişin muhafaza edildiği pasif bir depo olarak görmez. **Arşivin teknik yapısı, arşive girecek şeyin yapısını da belirler.**

Kitap 1994'te, elektronik posta yeni yaygınlaşırken yazıldı. Derrida orada, e-postanın yalnızca hızlı bir mektup olmadığını; kamusal ile özel arasındaki sınırı yeniden çizdiğini savunuyordu.

## Arşiv artık yalnızca saklamıyor

Bu düşünce büyük dil modelleri açısından doğrudan işe yarıyor.

Bu sistemler devasa bir dilsel arşiv üzerinde çalışıyor: kitaplar, makaleler, internet metinleri, kodlar, haberler. Bu külliyat veri kümesine dönüştürülüyor ve algoritmik işlemlerle yeni metinler üretiliyor.

Kritik soru artık "Yapay zekâ ne biliyor?" değil. Soru şu:

**Yapay zekânın bildiğini sandığımız şey, hangi arşivleme ve seçme süreçlerinin sonucudur?**

Geleneksel arşiv geçmişi kayıt altına alır. Dijital arşiv onu ayrıca sınıflandırır, sıralar ve görünür kılar. Yapay zekâ ise bir adım daha ileri gider: Arşivdeki izlerden **yeni cümleler, yeni görüntüler, yeni olasılıklar** üretir.

Böylece arşiv ile üretim arasındaki sınır bulanıklaşır. Derrida'nın tezi tam burada güncelleniyor: Teknoloji geçmişi muhafaza etmekle kalmaz, geçmişin hangi biçimde karşımıza çıkacağını da belirler.

## "Yapay zekâ yazıyor" derken ne diyoruz?

Derrida'nın yazı üzerine düşüncesi bu tartışmada başka bir kapı açıyor.

Derrida, Batı felsefesinin uzun süre konuşmayı yazıya göre daha asli, daha canlı ve özneye daha yakın gördüğünü göstererek bu hiyerarşiyi sorgulamıştı. Onun "yazı" kavramı kâğıda dökülen kelimelerden ibaret değil: **izlerin dolaşımı, tekrarlanabilirlik ve anlamın hiçbir zaman tek bir kaynağa bağlanamaması** meselesi.

Buradan bakıldığında yapay zekânın ürettiği metin rahatsız edici bir soru doğuruyor:

**Bir metnin anlamlı olması için arkasında onu yazan bilinçli bir öznenin bulunması zorunlu mudur?**

Bir dil modeli şiir ürettiğinde ortada insanınkine benzeyen bir niyet olmayabilir. Yine de metin okunabilir, yorumlanabilir ve anlamlandırılabilir.

Derridacı açıdan bu verimli bir paradoks: Metnin anlamı, onu üreten öznenin niyetinden bağımsız olarak dolaşıma girebilir.

Dolayısıyla yapay zekâ yalnızca "makineler insan gibi yazabilir mi?" sorusunu değil, daha zor olanını da gündeme getiriyor: **Yazmak için bir insan özneye gerçekten ihtiyaç var mı?**

## Asıl problem zekâ değil, sorumluluk

Derrida'yı bu tartışmada önemli kılan ikinci kavram sorumluluk.

Bir sistem yanlış bilgi ürettiğinde sorumlu kim? Algoritmayı yazan mühendis mi, modeli geliştiren şirket mi, veriyi sağlayan kurumlar mı, sistemi kullanan gazeteci ya da akademisyen mi? Yoksa sorumluluğun hiç kimse tarafından bütünüyle üstlenilemediği yeni bir alan mı oluşuyor?

Derrida'nın etik ve siyaset felsefesinin önemli bir bölümü, **kararın kurallara indirgenemeyeceği** düşüncesine dayanır. Gerçek bir karar, önceden belirlenmiş bir yordamın mekanik uygulaması değildir; kuralın yetmediği yerde alınır. Kural yeterse ortada karar değil, hesap vardır.

Buradan çıkan ayrım nettir: Bir algoritma seçenekleri hesaplayabilir. Ama **hesaplanabilir olan ile sorumluluk taşıyan karar aynı şey değildir.**

Sitemizde bu ay aktardığımız [yapay zekâ yazarlığı tartışması](/haber/philosophy-public-affairs-yapay-zeka-yasagi) da tam bu noktada düğümlendi: Bir derginin yapay zekâ yazarlığını yasaklama gerekçesi metnin kalitesi değil, arkasında sorumluluk taşıyan birinin bulunmasıydı.

## Öteki, veriye dönüştüğünde

Derrida'nın düşüncesinde etik "ben"in kendi dünyasında kurulmaz. Ötekiyle karşılaşma ve ona karşı yükümlülük merkezîdir.

Yapay zekâ sistemleri ise insanları veriye, profile, kategoriye ve istatistiksel örüntüye dönüştürüyor.

Bir insan artık yalnızca bir isim değil: bir tüketici davranışı, bir kredi riski, bir yüz görüntüsü, bir sağlık profili, bir siyasi eğilim kategorisi, bir işe alım puanı.

Derrida'nın çerçevesi burada bir uyarı sunuyor: **İnsan, hakkında hesaplama yapılabilen özelliklerinin toplamından ibaret değildir.**

Yapay zekânın en büyük felsefi sorunu belki de insanı ne kadar iyi taklit ettiği değil; insanı ne ölçüde **hesaplanabilir bir nesneye** dönüştürdüğü.

## İz ve unutulma hakkı

Derrida'nın **iz** kavramı da yeni bir anlam kazanıyor.

İnternette bırakılan her iz — mesajlar, aramalar, fotoğraflar, satın almalar, konum verileri — giderek büyüyen veri kümelerinin parçası hâline geliyor.

Derrida'nın arşiv düşüncesi şunu hatırlatıyor: Bir şeyi kaydetmek onu saklamak değildir. Kaydetmek, aynı zamanda **gelecekte nasıl okunacağını belirleyecek koşulları yaratmaktır.**

Bu yüzden "unutulma hakkı" yalnızca hukuki bir mesele değil. Aynı zamanda etik bir soru: Bir makinenin hafızasından silinmeyen bir insan gerçekten unutulmuş sayılabilir mi?

## Derrida bugün teknolojiye karşı mı çıkardı?

Bu soruya "evet" ya da "hayır" demek kolay olurdu; ama Derrida'nın düşüncesi böyle bir ikiliğe izin vermiyor.

Derrida teknoloji karşıtı bir filozof olarak okunamaz. Tersine, elektronik iletişimin ve yeni medya teknolojilerinin insan deneyimini nasıl dönüştürdüğü üzerine erken dönemde ciddi biçimde düşündü.

Derridacı yaklaşım ne körü körüne hayranlık ne de romantik bir karşı çıkış olur. Sorduğu soru başkadır: **Teknoloji insanın dünyasını nasıl yeniden kuruyor?**

## Merkezin sarsılması

Derrida'nın felsefesinin çekirdeğinde, anlamın tek ve değişmez bir merkeze sabitlenmesine yönelik eleştiri bulunur. Yapısöküm, metinlerin ve kurumların varsaydığı karşıtlıkları ve temelleri sorgulayan bir yaklaşımdır.

Yapay zekâ bu sorunu gündelik hayata taşıyor:

Bir metnin yazarı kim? Bir görüntünün üreticisi kim? Bir fikrin kaynağı nerede? Bir kararın sahibi kim?

İnsan ile makine arasındaki sınır bulanıklaştıkça, modern düşüncenin üzerine kurulduğu **yazar, özne, özgünlük, niyet ve mülkiyet** kavramları yeniden tartışmaya açılıyor.

## Sonuç

Teknoloji dünyasının yaygın yanılgılarından biri, bütün soruların daha iyi modeller ve daha fazla veriyle çözülebileceğini düşünmek.

Oysa bazı sorular teknik değil, felsefi: Anlamak nedir? Hatırlamak nedir? Bir özne olmak ne demektir? Bir karardan sorumlu olmak ne demektir?

Derrida'nın bugün okunmasının nedeni bu sorulara hazır cevap vermesi değil. Önemi, soruların altındaki varsayımları görünür kılmasında.

Belki de mirası tek bir öneride toplanıyor: **Teknolojinin bize verdiği cevaplardan önce, teknolojinin hangi soruları sormamızı engellediğine bakmak.**

Çünkü yapay zekâ çağının en büyük felsefi problemi, makinelerin insan gibi düşünmeye başlaması olmayabilir. Asıl problem, insanların kendi düşünme biçimlerini makinelerin çalışma biçimine göre yeniden tanımlamaya başlaması olabilir.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 28 Ağustos: Augustinus'un ölümü ve iki yeni vaazı",
    slug: "felsefe-tarihinde-bugun-28-agustos-augustinus",
    summary:
      "Augustinus 28 Ağustos 430'da, kuşatma altındaki Hippo'da öldü. Bin altı yüz yıl sonra, bu yıl açıklanan bir keşifle ona ait iki yeni vaaz gün yüzüne çıktı. Aynı gün, 1749'da Goethe doğdu.",
    seoTitle: "28 Ağustos 430: Augustinus'un ölümü",
    metaDescription:
      "Augustinus 28 Ağustos 430'da öldü. İtiraflar, Tanrı Devleti, zaman ve irade kavramları; ayrıca 2026'da bulunan iki yeni vaaz.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Augustine_by_Philippe_de_Champaigne.jpg?width=1600",
    imageCredit: "Philippe de Champaigne, Aziz Augustinus (1645-1650) · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica · Würzburg Üniversitesi",
    sourceUrl: "https://www.uni-wuerzburg.de/en/news-and-events/einblick/single/news/two-new-sermons-augustine-discovered/",
    publishedAt: "2026-08-28T03:40:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "din-felsefesi", "ortacag-felsefesi", "antik-felsefe", "arkeoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Two new sermons by St Augustine discovered",
        publisher: "Julius-Maximilians-Universität Würzburg",
        url: "https://www.uni-wuerzburg.de/en/news-and-events/einblick/single/news/two-new-sermons-augustine-discovered/",
        primary: true,
      },
      {
        title: "Augustine of Hippo",
        publisher: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Augustine_of_Hippo",
      },
    ],
    content: `**Augustinus**, 28 Ağustos 430'da Hippo Regius'ta — bugünkü Cezayir'in Annaba kentinde — öldü. Yetmiş beş yaşındaydı.

Ölümü sıradan bir ölüm değildi: Şehir Vandallar tarafından kuşatılmıştı. Roma'nın Kuzey Afrika'daki düzeni çözülürken, o düzenin en büyük düşünürü de sahneden çekiliyordu.

Otuz beş yıl boyunca Hippo piskoposluğunu yürütmüştü.

## Yeni bir keşif: iki bilinmeyen vaaz

Bu yılın en dikkat çekici filoloji haberlerinden biri Augustinus'la ilgili.

Würzburg Üniversitesi'nden Latinist **Christian Tornau**, kendisine ulaşan bir el yazması üzerinde çalışmaya başladı: Aslen Bad Doberan Manastırı'na ait olan, bugün Polonya'daki Pelplin manastırında bulunan 12. yüzyıl tarihli bir cilt.

El yazması Augustinus'a ait altı vaaz içeriyordu. İkisi daha önce bilinmiyordu.

Metinler, Eski Ahit'in **Endor'lu cadı** anlatısını ele alıyor — Birinci Samuel'de, Kral Saul'un bir medyuma başvurup ölmüş peygamber Samuel'in ruhunu çağırttığı sahne. Yeni bulunan vaazlarda Augustinus, Saul'un sonunda tövbe etmiş ve Tanrı'nın merhametine kavuşmuş olabileceğini düşündürüyor.

Doğrulama süreci iki yıl sürdü. 2025 sonbaharında Viyana'da toplanan bir yaz okulunda yirmiye yakın Latin filolojisi uzmanı metinleri inceledi ve **oybirliğiyle** Augustinus'a ait olduklarına karar verdi.

İlk eleştirel basımın — Latince metin, Almanca çeviri, tarihsel ve teolojik bağlam ve özgünlük çözümlemesiyle birlikte — bu yılın sonunda yayımlanması planlanıyor.

Bin altı yüz yıl sonra bir düşünürün külliyatına iki metin eklenmesi, felsefe tarihinde sık rastlanan bir şey değil.

## İtiraflar: felsefenin biçim değiştirdiği kitap

**İtiraflar** (yaklaşık 397-400), yalnızca içeriğiyle değil biçimiyle de yeni bir şey yaptı.

Felsefe o güne kadar diyalog, risale ya da mektup biçiminde yazılıyordu. Augustinus bir başkasına değil, doğrudan **Tanrı'ya seslenen** bir metin kurdu. Ama okur da oradadır; bu yüzden metin aynı anda hem dua hem itiraf hem çözümlemedir.

Batı edebiyatının ilk özyaşamöyküsü sayılması bundandır. Ama asıl yeniliği daha derin: İç dünyayı — bellek, arzu, kararsızlık, kendini aldatma — felsefi incelemenin konusu hâline getirdi.

## Zaman: en çok alıntılanan pasaj

*İtiraflar*'ın on birinci kitabındaki zaman tartışması, felsefe tarihinin en çok alıntılanan bölümlerinden biri.

Augustinus şunu sorar: Zaman nedir? Ve ünlü cevabı verir: *"Kimse sormazsa biliyorum; soran birine açıklamak istersem bilmiyorum."*

Ardından geliştirdiği çözümleme çarpıcıdır. Geçmiş artık yoktur, gelecek henüz yoktur, şimdi ise uzamsız bir sınırdır. Öyleyse zaman nasıl ölçülür?

Augustinus'un yanıtı zamanı zihne taşır: Geçmiş bellekte, gelecek beklentide, şimdi dikkatte vardır. Zaman, ruhun bir **gerilimidir** (*distentio animi*).

Bu çözümleme Husserl'in iç zaman bilinci fenomenolojisini doğrudan etkiledi; Heidegger'in erken dersleri de Augustinus okumalarına dayanır.

## İrade ve özgürlük

Augustinus'un ikinci büyük katkısı **irade** kavramı.

Yunan felsefesinde ahlaki başarısızlık genellikle bilgisizliktir: Kötüyü seçen kişi, iyiyi bilmiyordur. Augustinus buna itiraz eder. *İtiraflar*'daki armut hırsızlığı anlatısı bu itirazın kanıtıdır: Çocukken çaldığı armutları istemiyordu, aç değildi, meyveyi yemedi bile. Çalmayı, **kötü olduğu için** yaptı.

Buradan doğan soru Batı düşüncesini yüzyıllarca meşgul etti: İnsan bildiği iyiye karşı nasıl davranabilir? İrade nedir ve akıldan bağımsız olabilir mi?

Bu soru Kant'a, Schopenhauer'a ve nihayet Nietzsche'ye uzanır — bu köşede geçen hafta andığımız [Nietzsche](/haber/felsefe-tarihinde-bugun-25-agustos-hume-nietzsche), Hıristiyan ahlakına en sert saldırıyı yaparken bile Augustinus'un açtığı psikolojik derinliği kullanıyordu.

## Tanrı Devleti

410'da Roma yağmalandığında, suç Hıristiyanlara atıldı: Eski tanrılar terk edildiği için şehir düşmüştü.

Augustinus'un yanıtı **Tanrı Devleti** oldu; yirmi iki kitaplık, on beş yılda yazılmış bir eser.

Kitabın kurduğu ayrım siyaset felsefesinde kalıcı oldu: İki şehir vardır. **Yeryüzü şehri** kendini sevmeye, **Tanrı şehri** Tanrı'yı sevmeye dayanır. Bunlar iki ayrı kurum değil, tarih boyunca iç içe geçmiş iki yönelimdir.

Sonuç siyaset açısından ayıklayıcıdır: Hiçbir dünyevi düzen mutlak meşruiyet iddia edemez. Devlet gerekli ama nihai değildir.

Bu ayrım, Ortaçağ'da kilise-devlet tartışmasının çerçevesini kurdu; sekülerleşme tartışmalarında da izi sürülür.

## 1749: Goethe

Aynı gün, 1749'da Frankfurt'ta **Johann Wolfgang von Goethe** doğdu.

Goethe kendini filozof saymadı, hatta sistemli felsefeye mesafeliydi. Ama felsefe tarihindeki yeri tartışmasız.

*Faust*, bilme arzusunun sınırlarını konu alan modern edebiyatın en felsefi metni sayılır. Renk kuramı üzerine çalışması Newton'a karşı, deneyimin niteliksel yanını savunan bir bilim anlayışı önerdi — Wittgenstein'ın *Renkler Üzerine Notlar*'ı bu tartışmaya döner.

Doğa araştırmalarında geliştirdiği **Urphänomen** — ilk fenomen — kavramı, olguların ardında yasa aramak yerine olgunun kendisinde yapıyı görmeyi önerir. Bu tavır, Alman idealizmiyle ve özellikle Hegel'le yakın bir akrabalık taşır; ikisi de Weimar-Jena çevresindeydi.

Dün doğum yıldönümünü andığımız Hegel, Goethe'yi ziyaret etmiş ve renk kuramı konusunda ona hak vermişti.

## Türkçede

Augustinus'un *İtiraflar*'ı Türkçeye birkaç kez çevrildi; *Tanrı Devleti* de Türkçede bulunuyor. Goethe'nin *Faust*'u ve *Renk Öğretisi* Türkçeye kazandırıldı.

---

*Not: Augustinus fotoğrafın icadından on dört yüzyıl önce yaşadı. Kapaktaki görsel Philippe de Champaigne'in 1645-1650 arasında yaptığı portredir.*`,
  },
  {
    title: "Comte-Sponville'den yaşam ve ölüm üzerine son sözler: 'Yaşama Fırsatı'",
    slug: "comte-sponville-yasama-firsati",
    summary:
      "Fransız filozofun otuz yılda tamamladığı üçlemenin son cildi, tek bir soruyu merkeze alıyor: Yaşamayı sürdürmek bir ilke midir, yoksa koşullara bağlı bir fırsat mı? Comte-Sponville bu yılın başında aynı soruyu tıbbın sınırları üzerinden yeniden sordu.",
    seoTitle: "André Comte-Sponville: L'opportunité de vivre ve tıbbın sınırları",
    metaDescription:
      "Comte-Sponville'in L'opportunité de vivre kitabı, 2026'daki tıp röportajı ve ateist bilgelik felsefesi. Epikuros, Stoacılar, Montaigne, Spinoza hattı.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Andr%C3%A9_Comte-Sponville_-_Salon_du_livre_de_Paris_-_23_mars_2014.JPG?width=1600",
    imageCredit: "André Comte-Sponville, Paris Kitap Fuarı, 2014 · Wikimedia Commons",
    featured: true,
    sourceName: "PUF · RTS",
    sourceUrl: "https://www.puf.com/lopportunite-de-vivre",
    publishedAt: "2026-08-27T05:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["etik", "din-felsefesi", "kavram", "medya"],
    philosopherSlugs: [],
    sources: [
      {
        title: "L'opportunité de vivre : ultimes études",
        publisher: "Presses Universitaires de France",
        date: "Ocak 2025",
        url: "https://www.puf.com/lopportunite-de-vivre",
        primary: true,
      },
      {
        title: "Le philosophe André Comte-Sponville interroge les limites de la médecine",
        publisher: "RTS — Forum",
        date: "11 Şubat 2026",
        url: "https://www.rts.ch/audio-podcast/2026/audio/le-philosophe-andre-comte-sponville-interroge-les-limites-de-la-medecine-son-interview-29148341.html",
      },
      {
        title: "L'Opportunité de vivre, la dernière leçon de sagesse d'André Comte-Sponville",
        publisher: "PUF",
        url: "https://www.puf.com/lopportunite-de-vivre-la-derniere-lecon-de-sagesse-dandre-comte-sponville",
      },
    ],
    content: `Fransa'da felsefeyi akademinin dışına taşıyan kuşağın en çok okunan ismi, geç dönem düşüncesinin bilançosunu çıkardı.

**André Comte-Sponville**'in *L'opportunité de vivre: ultimes études* — "Yaşama Fırsatı: Son İncelemeler" — adlı kitabı geçen yılın ocak ayında PUF tarafından yayımlandı. Üç yüz sayfalık cilt, altmışlı yıllardan bu yana süren bir düşünme hattının kapanış metni olarak sunuluyor.

Alt başlıktaki *ultimes* sözcüğü hem "son" hem "nihai" anlamına geliyor. Comte-Sponville'in tercihi bilinçli görünüyor.

## Otuz yıllık bir üçleme

Kitap tek başına durmuyor. 1994'te *Valeur et vérité (Études cyniques)* ile başlayan, 2015'te *Du tragique au matérialisme (et retour)* ile süren bir dizinin üçüncü ve son cildi.

Yapısı iki bölümlü: Önce felsefe tarihinden altı inceleme, ardından beyin, maneviyat ve materyalizm üzerine üç deneme.

Comte-Sponville bu incelemelerde kendi düşünsel güzergâhını, tercih ettiği ustalar üzerinden aydınlatıyor: **Epikuros, Stoacılar, Montaigne, Spinoza, Alain ve Marcel Conche.**

Bu isim dizisi tesadüfi değil. Hepsi, ölüm karşısında teselli değil **açıklık** öneren bir gelenekten geliyor.

## Merkezdeki soru

Kitabın çekirdeğinde çarpıcı bir soru var:

**Yaşamayı sürdürmek mi, yoksa yaşamı sonlandırmak mı?**

Comte-Sponville'in yanıtı, sorunun kendisini yeniden çerçeveleyerek geliyor. Ona göre bu bir **ilke** meselesi değil, bir **fırsat** meselesidir.

Ayrım şu: Bir ilke koşullardan bağımsız olarak geçerlidir; "yaşam her koşulda sürdürülmelidir" demek, ilke dilidir. Fırsat ise koşullara bağlıdır; değerlendirilmeyi, tartılmayı gerektirir.

Epikuros, Stoacılar ve Montaigne'in ortak dersi Comte-Sponville'e göre budur. Yaşam mutlak bir buyruk değil, elimize geçmiş bir imkândır — ve tam da bu yüzden bütün özenimizi hak eder.

Buradaki incelik gözden kaçırılmamalı. Yaşamı bir fırsat saymak onu değersizleştirmez; tersine, ona verilen değeri kişinin kendi kararına bağlar.

## Şubat 2026: tıbbın sınırları

Kitabın tezi bu yılın başında somut bir tartışmaya bağlandı.

11 Şubat 2026'da İsviçre'nin RTS kanalındaki *Forum* programına konuk olan Comte-Sponville, **tıbbın sınırları** üzerine konuştu. Yayının başlığı doğrudandı: "Filozof André Comte-Sponville tıbbın sınırlarını sorguluyor."

İki metin birlikte okunduğunda ortaya net bir gündem çıkıyor. Modern tıp, yaşamı sürdürme kapasitesini sürekli genişletiyor. Ama kapasitenin genişlemesi, tek başına, o kapasitenin nerede kullanılması gerektiğini söylemiyor.

Comte-Sponville'in "ilke değil fırsat" ayrımı tam bu noktada iş görüyor: Bir hayatın sürdürülüp sürdürülmeyeceği sorusu teknik bir soru değil, kişinin kendi hayatı üzerine verdiği bir karardır.

Bu, Fransa'da yaşam sonu düzenlemeleri tartışılırken filozofun konumunu da açıklıyor.

## Ateist bir bilgelik felsefesi

Comte-Sponville'in bugünkü yerini anlamak için asıl anahtar burada.

Kendisini ateist olarak tanımlıyor; ama maneviyatı ateizmin dışına atmıyor. **Tanrısız bir maneviyat** düşüncesi, onun en özgün katkısı sayılıyor.

Buradaki iddia şu: Aşkınlık deneyimi — sonsuzluk duygusu, evrenle bütünlük hissi, hayranlık — bir tanrı inancını gerektirmez. Bu deneyimler doğanın kendisine, varlığın olduğu gibi kavranmasına bağlanabilir. Spinoza'nın izi burada belirgin.

Aynı çizgi mutluluk anlayışını da belirliyor. *Le Bonheur, désespérément* — "Umutsuzca Mutluluk" — kitabında geliştirdiği tez şuydu: Mutluluk beklemekle değil, beklemeyi bırakmakla gelir. Umut, tanımı gereği, sahip olmadığımız bir şeye yöneliktir; dolayısıyla umut eden kişi hep eksiktedir. Bilgelik, arzuyu gelecekten şimdiye çekmektir.

Bu tezin *L'opportunité de vivre*'deki yaşam-fırsat düşüncesiyle bağı açık: İkisi de aynı hamleyi yapıyor — değeri gelecekteki bir vaatten alıp mevcut duruma yerleştirmek.

## Yetmiş dört yaşında hâlâ sahnede

1952 doğumlu Comte-Sponville, Sorbonne'daki akademik görevinden ayrıldıktan sonra da yazmayı ve konuşmayı sürdürdü. Kitabın tanıtımı için 1 Nisan 2025'te düzenlenen konferans ve imza günü, bu kamusal varlığın son örneklerinden biriydi.

Fransız medyasında yakın dönemde dikkat çeken bir başlık daha var: Comte-Sponville'in kısa video platformlarındaki görünürlüğü. RTL, bu yılın şubat ayında onu **"TikTok'un felsefe hocası"** diye anmıştı.

Bu, ilk bakışta bir tuhaflık gibi görünebilir. Ama Comte-Sponville'in felsefe anlayışıyla birlikte düşünüldüğünde tutarlı: Kariyeri boyunca akademik jargondan kaçındı, geniş okura seslenen bir dil kurdu. Yeni mecra, eski tercihinin devamı.

Sitemizde geçen hafta aktardığımız [yapay zekâ ve felsefe tartışmasının](/haber/yapay-zeka-felsefe-arastirmasi-tartismasi) yanına konduğunda ortaya ilginç bir tablo çıkıyor: Felsefenin mecra değiştirmesi, kimi için bir çözülme belirtisi, kimi için ulaşabilirliğin genişlemesi.

## Türkçede

Comte-Sponville'in *Büyük Erdemler Risalesi*, *Umutsuzca Mutluluk*, *Felsefeyi Takdimimdir* ve *Ateist Maneviyat* gibi kitapları Türkçeye çevrildi. *L'opportunité de vivre* için henüz bir çeviri duyurusu yapılmadı.`,
  },
  {
    title: "Münif Paşa ve hukuk felsefesi: hukuk, felsefenin görünür hâli midir?",
    slug: "munif-pasa-hukuk-felsefesi",
    summary:
      "Mecmua-i Fünun'un kurucusu Münif Paşa, Osmanlı'da modern düşüncenin taşıyıcılarından biriydi. Hukuk felsefesi açısından bakıldığında mirası daha da belirginleşiyor: Kanunlar bir toplumun nasıl yönetildiğini değil, insanı nasıl gördüğünü gösterir.",
    seoTitle: "Münif Paşa ve hukuk felsefesi",
    metaDescription:
      "Münif Paşa, Mecmua-i Fünun ve Cemiyet-i İlmiye-i Osmaniye. Tanzimat döneminde akıl, hukuk ve adalet ilişkisi üzerine bir okuma.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%BCnif_Pa%C5%9Fa.jpg",
    imageCredit: "Mehmed Tahir Münif Paşa (1830-1910) · Wikimedia Commons",
    featured: false,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-27T05:10:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["hukuk-felsefesi", "tarih", "aydinlanma", "siyaset-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Mehmed Tahir Münif Paşa",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/Category:Mehmed_Tahir_M%C3%BCnif_Pasha",
      },
    ],
    content: `Osmanlı düşünce tarihinde Münif Paşa'nın adı genellikle iki başlıkla anılır: *Mecmua-i Fünun*'un kuruculuğu ve Batı düşüncesinin Osmanlı entelektüel hayatına aktarılmasındaki rolü.

Bu iki başlık doğru ama eksik. Mehmed Tahir Münif Paşa'nın (1830-1910) asıl önemi, Osmanlı toplumunun geleneksel bilgi düzeni ile modern bilim, hukuk ve siyaset düşüncesi arasında bir **geçiş alanı** açmasında yatıyor.

Bu geçişin merkezinde tek bir kavram duruyor: akıl.

## Bir yorumlama anahtarı

Münif Paşa'nın düşüncesini hukuk felsefesi açısından okumak için işe yarar bir önerme var:

> **Hukuk, felsefenin görünür hâlidir.**

Bu cümle Münif Paşa'ya ait değil. Onun sözü olarak değil, düşüncesini bugünden anlamlandırmak için kullanılabilecek bir okuma anahtarı olarak öneriliyor.

İşleyişi şöyle: Felsefe soyut düzeyde sorar — adalet nedir, insan nedir, özgürlük ne anlama gelir, devletin meşruiyeti nereden gelir? Hukuk ise aynı sorulara toplum düzeni içinde **somut cevaplar** üretir.

Bir toplumun felsefesi, o toplumun hukuk metinlerinde kurumsallaşmış hâlde durur.

## Kanunun varlığı adaletin varlığı mıdır?

Hukuk felsefesinin en eski sorusu burada devreye giriyor.

Bir toplumda çok sayıda hukuk kuralı bulunabilir. Ama kuralların çokluğu adaletin varlığını kanıtlamaz. Asıl mesele, o kuralların hangi düşünsel ve ahlaki temele dayandığıdır.

Bu soru dört alt soruya açılır ve dördü de doğrudan felsefidir:

- Hukuk yalnızca gelenekten mi kaynaklanır?
- Devletin iradesi hukukun tek kaynağı olabilir mi?
- Bir yasa yürürlükte olduğu için adil sayılabilir mi?
- Ahlak ile hukuk arasında nasıl bir ilişki vardır?

On dokuzuncu yüzyıl Osmanlı toplumu bu sorularla teorik bir merakla değil, **pratik bir zorunlulukla** karşılaştı.

## Tanzimat: idari değil, zihinsel bir dönüşüm

Münif Paşa'nın yaşadığı dönem, Osmanlı'nın hukuk ve devlet anlayışının kökten dönüştüğü dönemdi.

Devletin yeniden düzenlenmesi, vatandaşlık ilişkilerinin tanımlanması, eğitim sisteminin modernleştirilmesi ve yeni hukuk kurumlarının kurulması — bunların hiçbiri salt idari işlem değildi.

Hepsinin arkasında tek bir soru vardı: **Devlet hangi ilkelere göre yönetilmelidir?**

Bu, tanımı gereği felsefi bir sorudur. Ve bir kez sorulduğunda geri alınamaz.

Münif Paşa'nın entelektüel faaliyetini önemli kılan da bu tarihsel eşikte durmasıdır. Batı'daki bilimsel ve felsefi gelişmeleri Osmanlı çevresine tanıtmak için yaptığı iş, yalnızca bilgi aktarımı değildi; hukuk ve siyaset düşüncesinin de dönüşebileceği yeni bir zihinsel alan açıyordu.

## Mecmua-i Fünun: yeni düşüncenin dili

Münif Paşa'nın çıkardığı *Mecmua-i Fünun*, Osmanlı'da modern bilim ve düşünce tarihinin dönüm noktalarından biriydi.

Derginin sayfalarında felsefe, tarih, coğrafya, iktisat, hukuk ve doğa bilimlerinin bir arada bulunması tesadüf değil. Modern düşüncenin ayırt edici özelliklerinden biri, bilginin farklı alanları arasında ilişki kurmasıdır. Dergi bu ilişkiyi kurmanın aracıydı.

Hukuk da bu dönüşümün dışında kalmadı. Yeni hukuk anlayışı yeni kanunlar hazırlamaktan ibaret değildi. İnsan, toplum, devlet, özgürlük ve eşitlik hakkındaki düşünceler değiştikçe hukukun dayandığı **meşruiyet zemini** de değişiyordu.

Bu yüzden Münif Paşa'yı yalnızca "Batılılaşma" başlığı altında okumak yetersiz kalır. O, Osmanlı toplumunda akla dayalı, eleştirel ve bilimsel bir düşünme biçiminin yaygınlaşmasına katkıda bulunan isimlerden biriydi.

## Felsefe hukukta nasıl görünür olur?

Önermenin işleyişini somutlaştırmak mümkün.

Bir toplum insanı **özgür bir varlık** kabul ediyorsa, bunun hukukta karşılığı olmak zorundadır. İnsanları **eşit** kabul ediyorsa, hukuk düzeni eşitlik ilkesini taşır. **Mülkiyeti** temel bir hak sayıyorsa, bunu güvence altına alır. **Devletin gücünü sınırlamak** istiyorsa, anayasal kurumlar doğar. **İnsan onurunu** merkeze alıyorsa, hak ve özgürlükler hukukun temel unsuru hâline gelir.

Yani hukuk metinleri, bir toplumun insan ve adalet hakkındaki düşüncelerinin kurumsallaşmış biçimleridir.

Münif Paşa döneminin hukuk tartışmalarının ağırlığı da buradan gelir. Osmanlı'nın hukuk düzenini değiştirmek yalnızca kanun değiştirmek değildi; **adalet, devlet ve insan hakkındaki düşünceyi dönüştürmek** anlamına geliyordu.

## Neden bugün okunmalı?

Münif Paşa, Şinasi, Namık Kemal ve Ali Suavi ile birlikte Osmanlı modernleşmesinin düşünsel iklimini kuran kuşağın temsilcilerinden.

Ancak onun düşüncesi siyasi polemikten çok bilim, eğitim, akıl ve düşüncenin toplumsal ilerlemedeki rolü üzerinden okunmaya elverişli. Bu, onu bugünkü tartışmalar açısından daha kullanışlı kılıyor.

Çünkü hukuk hiçbir zaman yalnızca maddelerden ibaret değildir:

- Her hukuk düzeninin arkasında bir **insan anlayışı** vardır.
- Her anayasanın arkasında bir **devlet tasavvuru** vardır.
- Her hak kavramının arkasında bir **özgürlük düşüncesi** vardır.
- Ve her adalet anlayışının arkasında, açık ya da örtük, bir **felsefe** bulunur.

Bu açıdan bakıldığında Münif Paşa'nın dönemindeki hukuk tartışmaları, Osmanlı toplumunun "Nasıl bir insan, nasıl bir toplum, nasıl bir devlet istiyoruz?" sorularına verdiği cevapların tarihidir.

## Miras

Münif Paşa'yı Tanzimat'ın bir bürokratı ya da *Mecmua-i Fünun*'un kurucusu olarak görmek, onun yerini daraltır.

Asıl mirası, akla, bilime ve düşünsel yenilenmeye dayalı bir toplum fikrinin oluşmasına yaptığı katkıda aranmalı.

Hukuk felsefesi açısından ise dönemi bize daha geniş bir gerçeği hatırlatıyor: **Kanunlar bir toplumun yalnızca nasıl yönetildiğini değil, insanı nasıl gördüğünü de gösterir.**

Bu nedenle hukuku anlamak için yalnızca kanun kitaplarına değil, o kanunların arkasındaki felsefeye bakmak gerekir.

Ve belki de Münif Paşa'yı bugün yeniden düşünmenin en verimli yolu budur: Hukuk felsefenin görünür hâliyse, bir toplumun hukukuna bakarak onun insan, özgürlük ve adalet hakkındaki düşüncesini de okuyabiliriz.

Türkiye'de modern felsefi düşüncenin ve modern hukuk zihniyetinin oluşumunu birlikte okumak isteyenler için Münif Paşa hâlâ iyi bir başlangıç noktası.

---

*Sitemizde hukuk felsefesi alanındaki güncel tartışmaları da izliyoruz; [Scott Shapiro'nun hukukun kodlaşması üzerine çalışması](/haber/scott-shapiro-hukuk-kod-yapay-zeka) bu hattın çağdaş bir örneği.*`,
  },
  {
    title: "Teknoloji felsefesi merkez sahneye çıkıyor: alanın kapsamlı el kitabı",
    slug: "teknoloji-felsefesi-oxford-el-kitabi",
    summary:
      "Shannon Vallor'ın editörlüğündeki Oxford el kitabı, teknoloji felsefesinin artık tali bir alan olmadığını gösteriyor. Heidegger'den Ellul'a, Don Ihde'nin postfenomenolojisinden algoritma etiğine uzanan hat, alanın haritasını çıkarıyor.",
    seoTitle: "Teknoloji felsefesi: Oxford el kitabı ve alanın haritası",
    metaDescription:
      "The Oxford Handbook of Philosophy of Technology (ed. Shannon Vallor). Heidegger, Ellul, Don Ihde, postfenomenoloji, yapay zekâ ve algoritma etiği.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Shannon_Vallor_at_Almedalen.jpg?width=1600",
    imageCredit: "Shannon Vallor · Wikimedia Commons",
    featured: true,
    sourceName: "Oxford University Press",
    sourceUrl: "https://global.oup.com/academic/product/the-oxford-handbook-of-philosophy-of-technology-9780190851187",
    publishedAt: "2026-08-27T04:50:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["teknoloji-felsefesi", "yapay-zeka", "etik", "fenomenoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "The Oxford Handbook of Philosophy of Technology",
        publisher: "Oxford University Press",
        date: "15 Şubat 2022, 696 sayfa",
        url: "https://global.oup.com/academic/product/the-oxford-handbook-of-philosophy-of-technology-9780190851187",
        primary: true,
      },
      {
        title: "The Oxford Handbook of Philosophy of Technology — içindekiler",
        publisher: "Oxford Academic",
        url: "https://academic.oup.com/edited-volume/40690",
      },
      {
        title: "Shannon Vallor (ed.), The Oxford Handbook of Philosophy of Technology",
        publisher: "PhilPapers",
        url: "https://philpapers.org/rec/VALOHO",
      },
    ],
    content: `Bir alanın olgunlaştığının en güvenilir işareti, kendi el kitabını üretmesidir. Ansiklopedi ve el kitapları yeni bilgi üretmez; **bir alanın kendi hakkında ne düşündüğünü** kayda geçirir.

Teknoloji felsefesi bu eşiği geçti.

Shannon Vallor'ın editörlüğünde Oxford University Press tarafından yayımlanan **The Oxford Handbook of Philosophy of Technology**, altı yüz doksan altı sayfalık hacmiyle alanın bugüne kadarki en kapsamlı haritası. Kitabın açılış bölümünün başlığı da niyeti gösteriyor: "Teknoloji Felsefesine Giriş".

Vallor'ın kendisi bu alanın en tanınan isimlerinden. 2016 tarihli *Technology and the Virtues* kitabında Aristotelesçi, Budist ve Konfüçyüsçü geleneklerden erdemleri karşılaştırarak, teknolojiyle iyi yaşamak için hangi erdemlere ihtiyaç duyduğumuzu sormuştu.

## Neden tali bir alan sayılıyordu?

Teknoloji felsefesi uzun süre felsefenin kenarında kaldı. Nedeni basit ve öğretici.

Klasik felsefe bölünmesi, konuları "doğal olan" ve "insan yapımı olan" diye ikiye ayırır. Doğa bilim felsefesinin, insan eylemi ise etik ve siyaset felsefesinin konusudur. **Alet**, bu şemada bir yere düşmez: Ne doğaldır ne de tam anlamıyla eylemdir. Yalnızca bir araçtır.

"Yalnızca araç" varsayımı, teknolojiyi felsefi ilgiden düşüren şeydi. Çekiç ahlaki olarak nötrdür; önemli olan onu kimin, ne için kullandığıdır.

Alanın kuruluşu tam da bu varsayımın reddiyle başlar.

## Hat: Heidegger'den algoritmaya

### Heidegger

**Martin Heidegger**'in 1954 tarihli *Tekniğe İlişkin Soruşturma* metni, alanın kurucu belgesi sayılır.

Heidegger'in temel iddiası şu: Teknik bir araç değil, bir **açığa çıkarma tarzıdır**. Modern teknik doğayı, hazır bekleyen bir kaynak — onun deyişiyle *Bestand*, "stok" — olarak kurar. Bir nehir artık bir nehir değil, potansiyel enerjidir. Bir orman kereste rezervidir.

Bu okumada asıl mesele teknolojinin kötüye kullanılması değil; teknolojinin, dünyayı görme biçimimizi baştan biçimlendirmesidir.

### Ellul

**Jacques Ellul**, aynı yıllarda *La Technique* ile daha karamsar bir tez ortaya koydu: Modern toplumda teknik, kendi mantığını dayatan özerk bir sisteme dönüşmüştür. Ölçüt verimliliktir ve verimlilik başka bütün değerleri kendine tabi kılar.

Ellul'ün itirazı sık yanlış anlaşılır: Makinelere değil, **verimliliğin tek ölçüt hâline gelmesine** karşıdır.

### Ihde ve postfenomenoloji

Alanın yönü **Don Ihde** ile değişti.

Heidegger ve Ellul teknolojiyi bütün olarak, büyük harfli bir "Teknik" olarak ele alıyordu. Ihde bunun fazla toptancı olduğunu düşündü ve dikkati **tekil teknolojilere** çevirdi: Bu araç, bu kullanıcı, bu durum.

Kurduğu yaklaşımın adı **postfenomenoloji**. Merkezindeki kavram **aracılık**: Teknolojiler bizimle dünya arasında durmakla kalmaz, algımızı biçimlendirir. Gözlük takan biri gözlüğü görmez, gözlükle görür. Mikroskop yeni bir nesne göstermez; görülebilir olanın sınırını değiştirir.

Ihde bu ilişkileri sınıflandırdı — bedenle bütünleşen, dünyayı okunacak bir metne çeviren, arka planda çalışan araçlar — ve alana bir çözümleme dili kazandırdı. Sitemizde ayrıca ele aldığımız gibi, [bu dil yapay zekâ tartışmasında yeniden gündemde](/haber/don-ihde-postfenomenoloji-yapay-zeka).

### Bugün: yapay zekâ ve algoritmalar

El kitabının en canlı bölümleri, bu geleneğin çağdaş meselelere uygulandığı yerler.

Bir öneri algoritması, Ihde'nin anlamında bir aracıdır: Neyi göreceğimizi belirler. Ama gözlükten farklı olarak, kendi çıkarları olan bir kurum tarafından işletilir ve nasıl çalıştığı kullanıcıya kapalıdır.

Buradan çıkan sorular alanın bugünkü gündemini oluşturuyor: Bir algoritmanın kararından kim sorumludur? Şeffaflık teknik bir gereklilik mi, ahlaki bir talep mi? Dijital altyapılar demokratik denetime nasıl açılır?

## Alanın kendi sorusu

El kitabının örtük tezini tek cümlede toplamak mümkün: **Teknoloji felsefesi, uygulamalı etiğin bir dalı değildir.**

Fark önemli. Uygulamalı etik hazır ahlaki çerçeveleri yeni durumlara uygular: Faydacılık ne der, Kant ne der? Teknoloji felsefesi ise çerçevelerin kendisinin teknolojik koşullarca biçimlendiğini savunur.

Örnek: "Mahremiyet" kavramı, kaydetme ve yayma teknolojileri değiştikçe içerik değiştirir. On dokuzuncu yüzyılda mahremiyet ihlali komşunun duymasıydı; bugün bir veri tabanına yazılmaktır. Kavram aynı kalmadı — teknoloji onu yeniden tanımladı.

## Türkiye açısından

Türkiye'de teknoloji felsefesi henüz ayrı bir alt disiplin olarak kurumsallaşmış değil; çalışmalar çoğunlukla bilim felsefesi, etik ya da medya çalışmaları başlıkları altında yürüyor.

Oysa yapay zekâ tartışmasının hem kamusal hem akademik gündemi bu kadar meşgul ettiği bir dönemde, alanın kendi diline sahip olması pratik bir ihtiyaç. Vallor'ın el kitabı, o dilin nereden kurulacağını gösteren bir başvuru kaynağı.

## Künye

- **Editör:** Shannon Vallor
- **Yayınevi:** Oxford University Press (Oxford Handbooks dizisi)
- **Yayım:** 15 Şubat 2022 · 696 sayfa
- **ISBN:** 9780190851187`,
  },
  {
    title: "Yapay zekâ çağında Don Ihde: teknoloji insan deneyimini nasıl değiştiriyor?",
    slug: "don-ihde-postfenomenoloji-yapay-zeka",
    summary:
      "Postfenomenolojinin kurucusu Don Ihde 2024'te, doksanıncı doğum gününden üç gün sonra öldü. Stony Brook'ta düzenlenen anma konferansı ve ardından gelen tartışmalar, onun aracılık kuramının yapay zekâ çağında beklenmedik bir güncellik kazandığını gösteriyor.",
    seoTitle: "Don Ihde ve postfenomenoloji: yapay zekâ çağında yeniden okuma",
    metaDescription:
      "Don Ihde (1934-2024), postfenomenoloji, teknolojik aracılık ve Technics and Praxis. Stony Brook anma konferansı ve yapay zekâ çağındaki güncelliği.",
    contentType: "PORTRE",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Don_Ihde.jpg?width=1600",
    imageCredit: "Don Ihde · Wikimedia Commons",
    featured: false,
    sourceName: "Stony Brook University",
    sourceUrl: "https://news.stonybrook.edu/university/don-ihde-founder-of-stony-brook-philosophy-honored-at-memorial-conference/",
    publishedAt: "2026-08-27T04:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["teknoloji-felsefesi", "fenomenoloji", "yapay-zeka", "vefat"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Don Ihde, Founder of Stony Brook Philosophy, Honored at Memorial Conference",
        publisher: "Stony Brook University",
        date: "6 Aralık 2024",
        url: "https://news.stonybrook.edu/university/don-ihde-founder-of-stony-brook-philosophy-honored-at-memorial-conference/",
        primary: true,
      },
      {
        title: "Don Ihde",
        publisher: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Don_Ihde",
      },
      {
        title: "Don Ihde: 1934-2024",
        publisher: "Journal of Human-Technology Relations",
        url: "https://journals.open.tudelft.nl/jhtr/article/download/7858/6094/29223",
      },
    ],
    content: `**Don Ihde**, 17 Ocak 2024'te öldü. Doksanıncı doğum gününü kutlamasının üzerinden üç gün geçmişti.

Stony Brook Üniversitesi Felsefe Bölümü'nün kurucusuydu; bölümü yetmişli yılların başında kurmuş, 2012'de kırk üç yıllık görevinin ardından emekli olmuştu. Yirmiden fazla kitap yazdı, çok daha fazlasını derledi; çalışmaları bir düzine dile çevrildi.

Ölümünün ardından bölüm, kasım ayında bir anma konferansı düzenledi. Konferansı bölüm başkanı **Robert Crease** ile doktora öğrencisi **Juan Arteaga** organize etti; Ihde'nin yetmişli yıllardaki ilk öğrencilerinden son doktora öğrencisine uzanan kırk kişilik bir katılımcı topluluğu bir araya geldi.

Crease'in konferansta kullandığı ifade, alandaki genel kanaati yansıtıyor: **"Amerika'nın en büyük teknoloji filozofuydu — ve öncüsüydü."**

## Alanın kurucu metni

Ihde'nin 1979'da yayımlanan **Technics and Praxis** kitabı, çoğunlukla Kuzey Amerika'da teknoloji felsefesi alanındaki ilk çalışma sayılır.

O tarihte teknoloji felsefesi diye bir alt disiplin yoktu. Avrupa'da Heidegger ve Ellul'ün metinleri vardı; ama bunlar teknolojiyi bütün olarak, kültürel bir kader olarak ele alıyordu.

Ihde başka bir yol seçti.

## Postfenomenoloji: toptancılıktan çıkış

Ihde'nin kurduğu yaklaşımın adı **postfenomenoloji**. Baştaki "post" ekini iki anlamda kullanıyor: Hem klasik fenomenolojiden sonra gelmek, hem de onun bazı varsayımlarından ayrılmak.

Ayrıldığı nokta şu: Klasik fenomenoloji, deneyimin genel yapılarını arar. Ihde ise deneyimin **her zaman bir aracılıkla** kurulduğunu, dolayısıyla aracın kendisinin çözümlemeye girmesi gerektiğini savunur.

Ve bu aracılar tek tek incelenmelidir. "Teknoloji" diye tek bir şey yoktur; teleskop, işitme cihazı, otomobil ve arama motoru farklı deneyim yapıları üretir. Yaklaşımı **antroposantrik değildir**: Merkeze ne insan ne makine konur, ikisinin oluşturduğu ilişki konur.

## Aracılık: neyi nasıl görüyoruz?

Ihde'nin en verimli katkısı, insan-teknoloji ilişkilerinin sınıflandırması.

**Bedenleşme ilişkisi.** Araç bedene katılır ve saydamlaşır. Gözlük takan kişi gözlüğü görmez, gözlükle görür. Baston kullanan kişi bastonu değil, zemini hisseder. Araç algının bir uzantısı hâline gelir.

**Hermenötik ilişki.** Araç dünyayı okunacak bir metne çevirir. Termometreye bakan kişi sıcaklığı hissetmez, **okur**. Röntgen filmi kemiği göstermez; yorumlanması gereken bir gösterge sunar.

**Artalan ilişkisi.** Araç fark edilmeden çevreyi biçimlendirir. Klima sesi, elektrik şebekesi, ağ altyapısı. Ancak bozulduklarında görünür olurlar.

Bu şemanın gücü, teknolojiyi ne yücelten ne şeytanlaştıran bir tanım sunması. Araçlar nötr değildir — algıyı biçimlendirirler — ama belirleyici de değildir; farklı bağlamlarda farklı işler görürler. Ihde buna **çoklu-kararlılık** (*multistability*) diyor.

## Ses ve müzik

Ihde'nin görsel olmayan tarafı çoğu zaman gözden kaçar.

**Listening and Voice: Phenomenologies of Sound** kitabı, felsefenin görme merkezli geleneğine karşı işitmeyi öne çıkarır. Batı felsefesi kavramlarını büyük ölçüde görme metaforlarıyla kurmuştur: teori (*theoria*, bakmak), aydınlanma, açıklık, kanıt.

Ihde işitmenin başka bir dünya yapısı sunduğunu savunur. Ses çevreleyicidir, yönü belirsizdir, zaman içinde açılır. Sesle kurulan dünya, görmeyle kurulandan farklı bir dünyadır.

Bu ilgi anma konferansında somut biçimde göründü: Ihde'yle müzik fenomenolojisi üzerine çalışmış olan müzik tarihi profesörü **Judith Lochhead**, konuşmasında müzik çalarak ikisinin yöntemini anlattı.

Arteaga ise Ihde'nin kitabını beklenmedik bir alanda kullandığını anlattı: **protesto sloganlarının** çözümlenmesinde.

## Yapay zekâ neden Ihde'yi gündeme getirdi?

Crease'in konferans sonrası tespiti şuydu: Yapay zekâ felsefesi üzerine düşündüğümüz bugünlerde Ihde'nin çalışması her zamankinden güncel.

Nedeni, sorunun biçiminde.

Yapay zekâ tartışması ağırlıklı olarak iki soru etrafında yürüyor: Bu sistemler düşünüyor mu? Bilinçli olabilirler mi? Bunlar zihin felsefesinin soruları ve — sitemizde aktardığımız [tartışmanın](/haber/yapay-zeka-felsefe-arastirmasi-tartismasi) gösterdiği gibi — kolay yanıtları yok.

Ihde'nin çerçevesi soruyu değiştiriyor: **Bu sistemler dünyayı algılayışımızı nasıl biçimlendiriyor?**

Bu soru, makinenin içeride ne olduğuna dair bir karar gerektirmiyor. Bir dil modeliyle çalışan kişi, gözlük takan kişiye benzer bir konumda: Araç saydamlaştığı ölçüde, ürettiği metnin bir aracılıktan geçtiği unutulur. Ihde'nin terimleriyle, bedenleşme ilişkisi kurulur ve aracın kendi eğilimleri görünmez hâle gelir.

Buradan çıkan sorular teknik değil, fenomenolojik: Hangi soruları sorabileceğimiz, aracın hangi soruları kolaylaştırdığına göre mi biçimleniyor? Bir metnin "iyi" olduğuna dair sezgimiz, modelin ürettiği metin türüne göre mi kayıyor?

## Miras

Ihde'nin bıraktığı şey bir kuramdan çok bir **araştırma programı**.

Amsterdam Üniversitesi rektörü ve teknoloji etiği profesörü **Peter-Paul Verbeek** anma konferansının konuşmacılarındandı; postfenomenolojiyi tasarım etiğine taşıyan çalışmalarıyla tanınıyor. Georgia Tech'ten **Robert Rosenberger**, Ihde'nin doktora öğrencilerinden; alanı sürdüren çalışmalar yayımlıyor.

Crease'in belirttiğine göre konferanstan bir cilt derlenecek. Ihde'nin adı Stony Brook'un teknoloji felsefesindeki uluslararası konumunun da kaynağı.

## Türkçede

Ihde'nin kitapları henüz Türkçeye çevrilmedi. Postfenomenoloji kavramı Türkiye'de daha çok tasarım araştırmaları ve medya çalışmaları üzerinden dolaşıma girmiş durumda.

Teknoloji felsefesinin Türkiye'de ayrı bir alan olarak kurulması söz konusu olduğunda, Ihde'nin metinleri başlangıç listesinin başında yer alacak gibi görünüyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 27 Ağustos: Hegel'in doğumu",
    slug: "felsefe-tarihinde-bugun-27-agustos-hegel",
    summary:
      "Georg Wilhelm Friedrich Hegel 27 Ağustos 1770'te Stuttgart'ta doğdu. Bugün doğumunun 256. yıl dönümü. Tarihi aklın açılımı olarak okuyan sistem, iki yüz yıldır hem en çok izlenen hem en çok reddedilen felsefe olmayı sürdürüyor.",
    seoTitle: "27 Ağustos 1770: Hegel'in doğumu",
    metaDescription:
      "Hegel 27 Ağustos 1770'te Stuttgart'ta doğdu. Diyalektik, Geist, Tinin Görüngübilimi, efendi-köle diyalektiği ve tanınma kavramı.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Hegel_portrait_by_Schlesinger_1831.jpg?width=1600",
    imageCredit: "Hegel, Jakob Schlesinger'in 1831 tarihli portresi · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/Georg-Wilhelm-Friedrich-Hegel",
    publishedAt: "2026-08-27T04:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "alman-idealizmi", "siyaset-felsefesi", "kavram", "marksizm"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Georg Wilhelm Friedrich Hegel | Biography, Books, & Facts",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/Georg-Wilhelm-Friedrich-Hegel",
        primary: true,
      },
      {
        title: "Georg Wilhelm Friedrich Hegel",
        publisher: "Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/hegel/",
      },
    ],
    content: `**Georg Wilhelm Friedrich Hegel**, 27 Ağustos 1770'te Stuttgart'ta doğdu. Bugün doğumunun **256. yıl dönümü**.

14 Kasım 1831'de Berlin'de öldü. Aradaki altmış bir yıl, modern felsefenin en iddialı sistemini üretti — ve ardından iki yüz yıl sürecek bir tartışma bıraktı.

## Tübingen'de üç oda arkadaşı

Hegel, Tübingen'deki ilahiyat okulunda iki kişiyle oda paylaştı: **Friedrich Hölderlin** ve **Friedrich Schelling**.

Üçü de Fransız Devrimi'nin ilk yıllarında gençti ve devrimi coşkuyla karşıladı. Rivayete göre birlikte bir özgürlük ağacı diktiler.

Bu ayrıntı biyografik bir süs değil. Hegel'in bütün felsefesi, tarihte bir şeyin gerçekten olup bittiği — dünyanın 1789'dan sonra geri döndürülemez biçimde değiştiği — sezgisiyle kurulur.

Hegel akademik yolda geç ilerledi. Otuz altı yaşına kadar özel öğretmenlik ve gazete editörlüğü yaptı, sonra Nürnberg'de lise müdürlüğü. Berlin kürsüsüne ancak elli yaşını geçtikten sonra oturdu.

## Tinin Görüngübilimi

1807 tarihli **Tinin Görüngübilimi**, felsefe tarihinin en zor kitaplarından biri sayılır — ve en etkililerinden.

Kitabın yaptığı iş alışılmadıktır. Hegel bir kuram sunup savunmaz; bilincin kendi kendini aşarak geçtiği aşamaları, içeriden anlatır. Duyu kesinliğinden başlar, algıya, anlağa, kendilik bilincine, akla, tine, dine ve mutlak bilgiye kadar gider.

Her aşama kendi içindeki çelişkiyle çöker ve bir sonrakini doğurur. **Diyalektik** budur.

Yaygın "tez-antitez-sentez" formülü aslında Hegel'e ait değil; sonradan yapılmış bir sadeleştirmedir ve süreci fazlasıyla mekanikleştirir. Hegel'in kastettiği, bir konumun **kendi iç mantığı gereği** yetersizliğini açığa vurmasıdır.

## Efendi ve köle

Kitabın en çok okunan bölümü, kendilik bilinci tartışmasındaki **efendi-köle diyalektiği**.

Anlatı şöyle: İki bilinç karşılaşır. Her biri, kendi varlığının değerini öteki tarafından **tanınmakta** bulur. Bir ölüm kalım mücadelesine girerler; biri korkup boyun eğer, diğeri efendi olur.

Ama sonuç beklenmedik biçimde tersine döner. Efendi, kölenin tanımasını alır — oysa köle onun için değersiz bir bilinçtir; dolayısıyla tanınma boştur. Köle ise çalışarak doğayı biçimlendirir ve kendi emeğinde kendini görür. Gerçek gelişme kölede olur.

Bu bölüm, Hegel'in en geniş etkiye sahip metni. **Marx** emek kavramını buradan geliştirdi. **Simone de Beauvoir** ötekilik çözümlemesini buna dayandırdı. Yirminci yüzyılda **Alexandre Kojève**'in Paris derslerinde yaptığı okuma, Sartre'dan Lacan'a bir kuşağı biçimlendirdi.

Çağdaş **tanınma** kuramı — Charles Taylor, Axel Honneth — doğrudan bu sayfalardan çıkar. Dün bu köşede andığımız [Rebecca Goldstein'ın "önemseme içgüdüsü"](/haber/rebecca-goldstein-mattering-instinct-kitap) tezi de aynı hattın uzak bir akrabası.

## Tin ve tarih

Hegel'in **Geist** kavramı Türkçeye "tin" ya da "geist" olarak aktarılır. Ne bireysel bir ruhtur ne de mistik bir varlık.

Kastettiği şey şu: İnsan aklı yalnızca tek tek kafaların içinde değil, kurumlarda, hukukta, sanatta, dinde ve dilde de vardır. Bunlar aklın **nesnelleşmiş** biçimleridir.

Tarih felsefesi buradan doğar. Hegel'e göre dünya tarihi rastlantıların dizisi değil, **özgürlük bilincinin ilerleyişidir**. Özetlediği şema ünlüdür: Doğu despotizminde bir kişi özgürdür, Yunan ve Roma'da bazıları, modern dünyada ilkece herkes.

Bu şema en çok eleştirilen tezlerinden biri. Avrupa merkezciliği, tarihe zorunlu bir yön atfetmesi ve sömürgeciliği bu şema içinde konumlandırması ciddi itirazlarla karşılandı — ve bu itirazlar haklı.

## Hukuk Felsefesi ve iki cümle

1820 tarihli **Hukuk Felsefesinin Ana Hatları**, siyaset felsefesinin klasiklerinden. İki cümlesi kitaptan bağımsız yaşamaya başladı.

Birincisi: *"Akılsal olan gerçektir, gerçek olan akılsaldır."* Muhafazakâr bir teslimiyet olarak okundu — var olan her şey akla uygundur demek gibi. Hegel yorumcuları buna itiraz eder: "Gerçek" (*wirklich*) sözcüğü Hegel'de "mevcut olan" anlamına gelmez; kendi kavramına uygun olarak var olan demektir. Bu okumada cümle eleştirel bir ölçüt sunar.

İkincisi, kitabın önsözünden: *"Minerva'nın baykuşu ancak alacakaranlık çökerken kanatlanır."* Felsefe, bir dönemi ancak o dönem tamamlanırken kavrayabilir. Anlamak, yaşananın ardından gelir.

Bu cümle Felsefe Haberleri'nin amblemindeki baykuşun da kaynağıdır.

## Neden hâlâ tartışılıyor?

Hegel'in konumu felsefe tarihinde alışılmadıktır: Öğrencileri kadar muhalifleri de onun üzerinden düşündü.

**Marx** sistemi "ayakları üzerine dikti" — diyalektiği tinden maddeye çevirdi. **Kierkegaard** bütün ömrünü sisteme itiraz ederek geçirdi: Tekil birey, hiçbir sistemin içine sığmaz. Analitik felsefe yirminci yüzyılın başında Hegel'i reddederek kuruldu; **Bertrand Russell** ve **G. E. Moore**'un idealizmden kopuşu, alanın kuruluş anıdır.

Ama son kırk yılda tablo değişti. Robert Brandom ve John McDowell gibi isimlerin çalışmalarıyla Hegel analitik felsefeye geri döndü. Konu artık tarih felsefesi değil; bilginin toplumsal ve normatif boyutu.

## Türkçede

*Tinin Görüngübilimi*, *Mantık Bilimi*, *Hukuk Felsefesinin Prensipleri*, *Tarihte Akıl* ve *Estetik* dersleri Türkçeye çevrildi. Türkiye'de Hegel çalışmalarının uzun bir geçmişi var; sitemizde aktardığımız [Akbank Sanat felsefe seminerleri](/haber/turkiyede-akademik-felsefenin-dijital-arsivi) gibi programlarda da düzenli olarak ele alınıyor.

---

*Not: Hegel fotoğrafın icadından önce yaşadı. Kapaktaki görsel, Jakob Schlesinger'in 1831'de — Hegel'in ölüm yılında — yaptığı ve bugün Berlin'de bulunan portredir.*`,
  },
  {
    title: "Amfiden ekrana: Türkiye'de akademik felsefenin dijital arşivi büyüyor",
    slug: "turkiyede-akademik-felsefenin-dijital-arsivi",
    summary:
      "Felsefe dernekleri, üniversite bölümleri, kültür kurumları ve bağımsız düşünce çevreleri seminerlerini yıllardır YouTube'a taşıyor. Ortaya dağınık ama giderek genişleyen bir arşiv çıkıyor. Sorun içerik eksikliği değil; bu içeriğin bulunabilir olmaması.",
    seoTitle: "Türkiye'de akademik felsefenin YouTube arşivi",
    metaDescription:
      "Türkiye Kant Topluluğu'ndan Öncül Analitik Felsefe'ye, Akbank Sanat'tan üniversite bölümlerine: Türkiye'de felsefe seminerlerinin dijital arşivi ve bu arşivin sorunları.",
    contentType: "ANALIZ",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/METU_Library_-_14663259627.jpg?width=1600",
    imageCredit: "ODTÜ Kütüphanesi · Wikimedia Commons",
    featured: true,
    sourceName: "Felsefe Haberleri derlemesi",
    sourceUrl: null,
    publishedAt: "2026-08-26T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["akademi", "medya", "soylesi", "kavram"],
    philosopherSlugs: ["ioanna-kucuradi", "ahmet-inam"],
    sources: [
      {
        title: "Türkiye Felsefe Kurumu — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@turkiyefelsefekurumu3268/videos",
      },
      {
        title: "Türkiye Kant Topluluğu — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@T%C3%BCrkiyeKantToplulu%C4%9Fu",
      },
      {
        title: "Türkiye Heidegger Topluluğu — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@turkiyeheideggertoplulugu6661",
      },
      {
        title: "Öncül Analitik Felsefe Dergisi — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@OnculAnalitikFelsefeDergisi",
      },
      {
        title: "Türkiye Nietzsche Topluluğu — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@turkiyenietzschetoplulugu",
      },
      {
        title: "Marmara Felsefe — Philosophy Talks dizisi",
        publisher: "Marmara Üniversitesi Felsefe Bölümü",
        url: "https://flsf-itbf.marmara.edu.tr/notice/marmara-felsefenin-philosophy-talks-serisinin-tamamina-buradan-ulasabilirsiniz",
      },
      {
        title: "PAU FELSEFE — Pamukkale Üniversitesi Felsefe Bölümü resmî kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@PAUFELSEFE",
      },
      {
        title: "Akbank Sanat — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@AkbankSanat",
      },
    ],
    content: `Türkiye'de felsefenin kamusal görünürlüğü uzun yıllar boyunca dört mecra üzerinden şekillendi: kitap, dergi, üniversite ve konferans salonu. Bugün bu listeye beşincisi eklendi.

Ancak burada söz konusu olan, "felsefe anlatan video kanalları" değil. Daha dar ve daha ilginç bir alandan söz ediyoruz: **akademisyenlerin, araştırmacıların ve felsefe topluluklarının kendi sempozyum, seminer, ders ve söyleşilerini dijital ortama kaydetmesi.**

Bu kayıtlar bir araya geldiğinde ortaya, henüz kimsenin planlamadığı bir şey çıkıyor: Türkiye'nin dijital felsefe arşivi.

## Bir seminerin ikinci hayatı

Akademik bir konferansın değeri, konferans günü salonda bulunanlarla sınırlı değildir. Ama pratikte çoğu zaman öyle olur: Konuşma yapılır, dinleyici dağılır, geriye bir program broşürü kalır.

Kayıt bu döngüyü kırıyor. Bir üniversitede ya da kültür merkezinde yapılan iki saatlik bir seminer, yayımlandığı andan itibaren yıllarca erişilebilir kalıyor. Tek seferlik bir etkinlik, zamanla bir kaynağa dönüşüyor.

Bu, özellikle felsefe için önemli. Çünkü felsefi düşüncenin önemli bir bölümü hızlı tüketilen içerikten değil; uzun konuşmalardan, kavram tartışmalarından, metin okumalarından ve soru-cevaptan oluşuyor. Otuz saniyelik bir video bir tezi aktarabilir; bir tezin nasıl kurulduğunu aktaramaz.

## Birinci katman: akademik topluluklar

Ekosistemin çekirdeğinde, belirli bir filozof ya da gelenek etrafında örgütlenmiş topluluklar var.

**Türkiye Kant Topluluğu**, Kant çalışmalarının Türkiye'de kurumsallaşmasına katkıda bulunan yapılardan biri; konferans, seminer ve söyleşilerini kendi kanalından yayımlıyor. Kant'ın bilgi felsefesinden ahlak felsefesine, estetikten siyaset felsefesine uzanan alanı düşünüldüğünde bu arşiv yalnızca Kant uzmanlarını değil, modern felsefenin temel meselelerine ilgi duyan herkesi ilgilendiriyor.

Buradaki asıl değer tek tek videolarda değil, **tek bir filozof etrafında süreklilik taşıyan bir tartışma alanının kurulmasında**.

Benzer bir uzmanlaşmayı **Türkiye Heidegger Topluluğu** yürütüyor. Topluluğun programı Heidegger metinlerinin açıklamasıyla sınırlı değil: fenomenoloji, ontoloji, hermenötik ve çağdaş kıta felsefesi de kapsamda. Seminer başlıkları arasında Heidegger-Derrida ilişkisi, destrüksiyon ve dekonstrüksiyon gibi doğrudan teknik tartışmalar bulunuyor.

Bu iki örnek, Türkiye'de belirli filozoflar üzerine çalışmanın artık yalnızca bireysel akademik faaliyet değil, **topluluk temelli bir entelektüel uğraş** olarak da sürdürüldüğünü gösteriyor. Sitemizde daha önce aktardığımız [Türkiye Nietzsche Topluluğu](/haber/turkiye-nietzsche-toplulugu) da aynı modelin bir başka örneği. 2023'te kurulan topluluk, aylık konuşma programını [kendi YouTube kanalında](https://www.youtube.com/@turkiyenietzschetoplulugu) yayımlıyor: Zeynep Talay Turner'ın konuşmasından Gül Turanlı'nın *Nietzsche'nin Grekleri* başlıklı sunumuna, çevirmen Mustafa Tüzel'le yapılan *Nietzsche'yi Okumak, Çevirmek ve Anlamak* söyleşisine kadar uzanan kayıtlar burada toplanıyor. Çeviri meselesinin ayrı bir başlık olarak ele alınması, topluluğun Nietzsche'nin Türkçedeki alımlanma tarihine verdiği önemi gösteriyor.

Kurumsal tarafta ise **Türkiye Felsefe Kurumu** ve **Türk Felsefe Derneği** var. Bu kanallar doğrudan etkinlik arşivi niteliğinde; sempozyum ve panel kayıtları bakımından özellikle değerliler. Buradaki işlev yayıncılıktan çok **kurumsal hafıza**: Bir konferansın dinleyicisi değişir, kaydı kalır.

## İkinci katman: akademik-kültürel kurumlar

İkinci halka, felsefeyi üniversite dışına taşıyan kurumlardan oluşuyor.

**Akbank Sanat** bu grubun en dikkat çekici örneği. Kurumun felsefe seminerleri yeni bir girişim değil: 2016-2017 dönemindeki programda Nietzsche, Husserl, Foucault, Kant, Rorty, Hegel ve Marx üzerinden modern felsefenin temel uğrakları ele alınmıştı. Program bugün de sürüyor; Emre Şan, Güncel Önkal, Toros Güneş Esgün, Kaan H. Ökten, Murat Erşen, Sanem Yazıcıoğlu ve Haydar Oğuz Erdin gibi akademisyenlerin yer aldığı seminer dizileri yayımlanıyor.

Burada YouTube yeni içerik mecrası değil; **yıllara yayılan bir arşivin taşıyıcısı**.

**Goethe-Institut**'un Türkiye'deki felsefe etkinlikleri ekosistemin uluslararası boyutunu gösteriyor. Felsefe Kulübü programı, Türkiye'deki tartışmayı Almanca konuşulan düşünce geleneğiyle ilişkilendiren bir alan açıyor.

**Felsefe Sanat Bilim Derneği**, felsefeyi sanat, bilim, toplum ve kültürle birlikte düşünen yapılardan biri; dijital arşivi de bu disiplinlerarası yaklaşımın uzantısı. **Aktif Felsefe Kültür Derneği** ise felsefeyi üniversite öğrencisi ve akademisyen çevresinin ötesine, daha geniş bir kültür kamuoyuna taşımayı hedefliyor.

Özel bir yeri **Kuçuradi Felsefe ve İnsan Hakları** kanalı tutuyor. Başlığın kendisi bile bu ekosistemin bir damarını gösteriyor: felsefe ile insan hakları arasındaki bağ. Burada felsefe kuramsal bir disiplin olarak değil, insan onuru ve değer sorunlarını anlamanın aracı olarak ele alınıyor — [İoanna Kuçuradi'nin](/haber/ioanna-kucuradi-felsefe-insan-haklari) altmış yıllık hattının doğrudan devamı.

## Üçüncü katman: bağımsız kanallar

Üçüncü halka, kurumsal olmayan aktörlerden oluşuyor ve rakamlar bakımından en şaşırtıcı olanı bu.

**Pandora Felsefe**, uzun süredir felsefe içeriği üreten kanallardan biri; yüz otuz binin üzerinde abone ve altı buçuk milyonu aşan izlenme sayısına ulaşmış durumda.

Bu rakamlar tek başına bir tespit sunuyor: **Türkiye'de felsefeye yönelik dijital ilgi, akademik kurumların varsaydığından geniş.**

**Pangea Düşünce** ve **Ankara US Atölyesi** gibi kanallar, üniversite çevresiyle bağımsız entelektüel çevreler arasındaki geçirgen alanı temsil ediyor. **Yıldız Işık** kanalı ise sitemizde ayrıca ele aldığımız gibi, [Ahmet İnam'ın metin okumalarının](/haber/ahmet-inam-youtube-dersleri-dijital-arsiv) dokuz yıllık kaydını barındırıyor.

Farklı bir yol izleyen **Klasik Düşünce Okulu**, klasik düşüncenin kurucu eserlerini Türkçe olarak ele alan derslerini yayımlıyor. Programda felsefenin yanı sıra klasik Yunanca, Arapça, dinler tarihi, kelam, tasavvuf ve fıkıh da bulunuyor. Buradaki yaklaşım kayda değer: Felsefeyi modern üniversite disiplininin sınırları içinde değil, daha geniş bir klasik düşünce tarihi içinde konumlandırmak.

**Öncül Analitik Felsefe Dergisi** ise başka bir boşluğu dolduruyor. Dil felsefesi, zihin felsefesi, metafizik, bilim felsefesi ve etik üzerine ürettiği içeriklerle, Türkiye'de çoğu zaman örtük kalan kıta felsefesi-analitik felsefe ayrımını dijital ortamda görünür kılıyor. Kanal, felsefe tarihi anlatısı arayan izleyiciden çok, **bugün hangi problemlerin tartışıldığını** merak edenlere hitap ediyor.

## Dördüncü katman: üniversitelerin kendisi

Ekosistemin en dağınık, aynı zamanda en umut verici ayağı üniversiteler.

Burada baştan bir ayrım yapmak gerekiyor. Türkiye'de felsefe bölümlerinin YouTube'daki varlığı tek tip değil; en az üç farklı biçim var:

1. **Bölümün kendi resmî kanalı** — düzenli yayın yapan, bölüm adına açılmış hesaplar.
2. **Öğrenci topluluğu kanalı** — bölümle bağlantılı ama kurumsal olmayan yapılar.
3. **Üniversitenin kurumsal kanalı** — felsefe içeriğinin genel üniversite hesabına karıştığı durum.

Bu ayrım önemli, çünkü üçüncü durumda içerik teknik olarak yayımlanmış olsa bile pratikte kaybolur: Bir felsefe semineri, mezuniyet töreni ve tanıtım filmi aynı akışta yer alır.

### Kendi kanalı olan bölümler

**Marmara Üniversitesi Felsefe Bölümü**, bugün itibarıyla bu grubun en dikkat çekici örneği. Bölümün **Marmara Felsefe** kanalındaki *Philosophy Talks* dizisi, uluslararası akademisyenlerle yapılan seminerleri düzenli olarak kayda geçiriyor. Dizi kırklı bölümlere ulaşmış durumda; bölümün kendi internet sitesi de serinin tamamını kanal üzerinden duyuruyor.

Marmara örneğini ayıran şey içerik değil, **süreklilik**. Aylık bir program, yabancı konuşmacı daveti ve bunların düzenli olarak arşive dönüştürülmesi, Türkiye'deki bölümler arasında profesyonel bir dijital yayıncılık modeli oluşturuyor.

**Dokuz Eylül Üniversitesi Felsefe Bölümü**, bölüm akademisyenlerinin konuşmalarını ve etkinlik kayıtlarını kendi kanalından paylaşıyor.

**Pamukkale Üniversitesi Felsefe Bölümü**, kendisini "resmî hesap" olarak tanımlayan **PAU FELSEFE** kanalını yürütüyor. *PAÜ'de Felsefe Buluşmaları* dizisinin yanı sıra açılış dersleri de burada. Ahmet Arslan'ın *Felsefe Nedir?* başlıklı açılış dersi yirmi bine yakın izlenmeye ulaşmış — bir üniversite bölümü kanalı için kayda değer bir sayı.

**Ege Üniversitesi Felsefe Bölümü**, özellikle uluslararası konferanslar bakımından güçlü bir arşive sahip. Peter Adamson'ın *Boşluksuz Felsefe Tarihi* başlıklı konuşması gibi kayıtlar bölüm tarafından yayımlanmış durumda. Ege'de ayrıca öğrenci topluluğunun ayrı bir kanalı var.

### Topluluk kanalları

**ODTÜ Felsefe** kanalı, adına rağmen bölümün kurumsal kanalı değil; kendisini ODTÜ Felsefe Topluluğu'nun resmî kanalı olarak tanımlıyor. Bu ayrım kayıt altına alınmalı: Bölümle bağlantılı ama bölüm adına konuşmayan bir yapı.

Aynı durum Ege ve başka birkaç üniversite için de geçerli. Öğrenci toplulukları çoğu zaman bölümlerden daha çevik davranıyor; ama süreklilik kuşak değişimine bağlı kaldığı için arşivler kesintiye uğrayabiliyor.

### Kurumsal kanala karışanlar

Türkiye'nin en köklü felsefe bölümlerinden bazıları bu grupta.

**Ankara Üniversitesi** (DTCF), **İstanbul Üniversitesi**, **Hacettepe Üniversitesi**, **Boğaziçi Üniversitesi**, **Akdeniz Üniversitesi** ve **İstanbul Medeniyet Üniversitesi**; hepsi felsefe etkinliği düzenliyor, hepsinin kayıtları bir biçimde dijital ortamda. Ancak bunlar bölüm adına açılmış bağımsız kanallarda değil, üniversitenin genel hesabında ya da dağınık biçimde duruyor.

Hacettepe örneği tipik: Bölümün akademisyenleri — Harun Tepe gibi isimler — felsefe, etik ve insan hakları üzerine çok sayıda konuşma yapıyor ve bunlar yayımlanıyor. Ama kayıtlar farklı kurumların kanallarına dağılmış durumda.

Buradaki sorun içerik üretimi değil, **sahiplenme**. Kaydı yapan kurum ile kaydı arayacak kişi arasında ortak bir adres yok.

### Rakam ne söylüyor?

Türkiye'de altmışın üzerinde üniversitede felsefe lisans programı bulunuyor.

Bu sayıyla karşılaştırıldığında, düzenli yayın yapan bölüm kanalı sayısı tek haneli. Yani felsefe bölümlerinin büyük çoğunluğu, kendi etkinliklerinin dijital hafızasını henüz kurmuş değil.

Bu bir eleştiri olduğu kadar bir fırsat tespiti: Bir seminerin kaydedilmesi, o etkinliği "gerçekleşmiş bir etkinlik" olmaktan çıkarıp **erişilebilir bir eğitim materyaline** dönüştürüyor. Maliyeti düşük, getirisi kalıcı.

## Asıl sorun: arşiv var, dizin yok

Buraya kadarki tablo iyimser. Ama ekosistemin en belirgin sorunu da tam burada başlıyor.

İçerik dağınık.

Bir Kant semineri bir kanalda, Heidegger semineri başka bir kanalda, üniversite konferansı üçüncüsünde, analitik felsefe tartışması dördüncüsünde duruyor. İçerik var, akademisyen var, seminer var. Ancak bunları düzenli olarak **indeksleyen, sınıflandıran, haberleştiren ve izleyiciye sunan** merkezi bir alan yok.

Bu, teknik bir eksiklik gibi görünse de sonuçları düşünsel. Bir arşiv, ancak bulunabildiği ölçüde arşivdir. Aranamayan bir kayıt, yayımlanmamış bir kayıttan çok az farklıdır.

Dolayısıyla bu alanın geleceği daha fazla video üretmekten geçmiyor. Asıl mesele, **mevcut üretimi bulunabilir ve takip edilebilir hâle getirmek.**

## Felsefe haberciliği için ne anlama geliyor?

Bu tablo yalnızca akademisyenleri ve öğrencileri değil, felsefe haberciliğini de doğrudan ilgilendiriyor. Aşağıdaki soruların her biri başlı başına bir haber konusu:

- Bu hafta Türkiye'de hangi felsefe konferansları yapıldı?
- Hangi topluluk yeni bir seminer dizisi başlattı?
- Kant, Nietzsche ya da Heidegger üzerine hangi yeni konuşmalar yayımlandı?
- Üniversitelerin felsefe bölümlerinde hangi etkinlikler düzenleniyor?

Bu açıdan bakıldığında Türkiye'deki felsefe kanalları izlenecek içeriklerden oluşan bir liste değil; **çağdaş felsefi hayatın dijital haritası** olarak okunabilir. Felsefe Haberleri olarak bu haritayı düzenli biçimde izlemeyi ve aktarmayı sürdüreceğiz.

## Soru: taşınma mı, ulaşma mı?

Türkiye'de akademik felsefenin uzun süredir tartışılan bir sorunu var: Üniversitede üretilen felsefi bilgi, üniversite dışındaki topluma ne kadar ulaşıyor?

Dijital arşiv bu sorunu tek başına çözmüyor. Ama bir kanal açıyor. Bir konferansı yüz kişinin salonda dinlemesiyle aynı konferansın yıllarca erişilebilir olması arasında ciddi bir fark var. Üstelik arama, oynatma listesi ve altyazı imkânları sayesinde bu kayıtlar birbirine bağlanabiliyor: Kant üzerine bir seminer izleyen öğrenci, aynı akşam Heidegger'e ya da analitik felsefeye geçebiliyor.

Geriye şu soru kalıyor: Felsefe üniversiteden dijital mecraya mı taşınıyor, yoksa dijital mecra sayesinde üniversitede üretilen felsefe nihayet daha geniş bir kamuya mı ulaşıyor?

Yanıt büyük olasılıkla ikincisinde. Çünkü iyi kaydedilmiş bir felsefe semineri yalnızca bir video değildir; **akademik bir düşünmenin dijital hafızaya geçmiş hâlidir.**

---

### Türkiye'de akademik felsefe kaynakları

**Akademik topluluklar ve dernekler**

- [Türkiye Felsefe Kurumu](https://www.youtube.com/@turkiyefelsefekurumu3268/videos)
- [Türk Felsefe Derneği](https://www.youtube.com/@turkfelsefedernegi/videos)
- [Türkiye Kant Topluluğu](https://www.youtube.com/@T%C3%BCrkiyeKantToplulu%C4%9Fu)
- [Türkiye Heidegger Topluluğu](https://www.youtube.com/@turkiyeheideggertoplulugu6661)
- [Türkiye Nietzsche Topluluğu](https://www.youtube.com/@turkiyenietzschetoplulugu)
- [Felsefe Sanat Bilim Derneği](https://www.youtube.com/@felsefesanatbilimdernegi7552/videos)
- [Aktif Felsefe Kültür Derneği](https://www.youtube.com/@AktiffelsefeK%C3%BClt%C3%BCrDerne%C4%9Fi/videos)
- [Kuçuradi Felsefe ve İnsan Hakları](https://www.youtube.com/@kucuradifelsefeveinsanhakl9038)

**Dergi ve okullar**

- [Öncül Analitik Felsefe Dergisi](https://www.youtube.com/@OnculAnalitikFelsefeDergisi)
- [Klasik Düşünce Okulu](https://www.youtube.com/@KlasikD%C3%BC%C5%9F%C3%BCnceOkulu/videos)

**Kültür kurumları**

- [Akbank Sanat](https://www.youtube.com/@AkbankSanat)
- [Goethe-Institut Türkei](https://www.youtube.com/@goethe-institutturkei3530)

**Bağımsız kanallar**

- [Pandora Felsefe](https://www.youtube.com/@PANDORAFELSEFE/videos)
- [Pangea Düşünce](https://www.youtube.com/@pangeadusunce/videos)
- [Ankara US Atölyesi](https://www.youtube.com/@ankarausatolyesi/videos)
- [Akademi FR](https://www.youtube.com/@akademiFR/videos)
- [Yıldız Işık](https://www.youtube.com/@yldzisk8501)

**Üniversiteler**

*Kendi kanalı olan bölümler*

- [Marmara Felsefe](https://www.youtube.com/@marmarafelsefe6204/videos)
- [Dokuz Eylül Üniversitesi Felsefe Bölümü](https://www.youtube.com/@dokuzeyluluniversitesifels5671)
- [PAU FELSEFE — Pamukkale Üniversitesi](https://www.youtube.com/@PAUFELSEFE)
- [Ege Üniversitesi Felsefe Bölümü](https://www.youtube.com/@egeuniversitesifelsefebolu9466)
- [ODTÜ Felsefe Bölümü](https://www.youtube.com/@odtufelsefebolumumetudepar2352)

*Öğrenci toplulukları*

- [ODTÜ Felsefe Topluluğu](https://www.youtube.com/@odtufelsefe1881)
- [E.Ü. Felsefe Topluluğu](https://www.youtube.com/@e.u.felsefetoplulugu5112)

*Liste kapsayıcı değildir. Eksik gördüğünüz kanalları iletişim sayfamızdan bildirebilirsiniz; düzenli olarak güncelleyeceğiz.*`,
  },
  {
    title: "Meillassoux erken dönemine dönüyor: 1997 tezinden bir bölüm yayımlandı",
    slug: "meillassoux-varlik-ve-hiclik-erken-metin",
    summary:
      "\"Varlık ve Hiçlik\", Quentin Meillassoux'nun hiç kitaplaşmamış 1997 doktora tezinden bir bölüm. Metin, yirmi yıl sonra After Finitude'ün merkezine yerleşecek olan olgusallık ilkesinin ilk hâlini gösteriyor — ve bunu Derrida'yla hesaplaşarak yapıyor.",
    seoTitle: "Meillassoux'nun 1997 tezinden 'Varlık ve Hiçlik' yayımlandı",
    metaDescription:
      "Quentin Meillassoux'nun L'Inexistence divine adlı 1997 tezinden bir bölüm Derrida Today'de yayımlandı. Olgusallık ilkesi, korelasyonculuk eleştirisi ve hiper-kaos.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Quentin_Meillassoux_03.jpg?width=1600",
    imageCredit: "Quentin Meillassoux · Wikimedia Commons",
    featured: true,
    sourceName: "Derrida Today · PhilPapers",
    sourceUrl: "https://philpapers.org/rec/MEIBAN",
    publishedAt: "2026-08-26T05:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["dergi", "bilim-felsefesi", "kavram", "postmodernizm"],
    philosopherSlugs: ["quentin-meillassoux"],
    sources: [
      {
        title: "Quentin Meillassoux, 'Being and Nothingness'",
        publisher: "Derrida Today, 19. cilt, 2. sayı",
        date: "2026",
        url: "https://philpapers.org/rec/MEIBAN",
        primary: true,
      },
      {
        title: "Quentin Meillassoux — akademik profil",
        publisher: "Université Paris 1 Panthéon-Sorbonne",
        url: "https://www.pantheonsorbonne.fr/page-perso/quentin.meillassoux%40",
      },
      {
        title: "Quentin Meillassoux",
        publisher: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Quentin_Meillassoux",
      },
    ],
    content: `Yirmi yıl önce yazılmış bir metnin bugün yayımlanması, felsefede sık rastlanan bir şey değil. Bu yılın dikkat çekici yayınlarından biri tam olarak bu.

Fransız filozof **Quentin Meillassoux**'nun *Varlık ve Hiçlik* başlıklı metni, *Derrida Today* dergisinin 19. cildinin 2. sayısında yer alıyor. Metin güncel bir tartışmaya müdahale değil; **1997 tarihli doktora tezinin on dokuzuncu bölümü**.

Tezin adı *L'Inexistence divine* — "Tanrısal Var-olmayış". Meillassoux'nun uluslararası üne kavuşmasından dokuz yıl önce yazılan bu çalışma bugüne kadar kitap olarak yayımlanmadı; yalnızca bölümleri, dağınık biçimde çevrildi. Yeni yayımlanan metin de bu parçalı gün yüzüne çıkışın son halkası.

## Metinde ne var?

Meillassoux burada Derrida, Hegel ve Heidegger üzerinden **varlık ve hiçlik** sorununu ele alıyor.

Yaptığı hamle teknik ama sonuçları geniş. Heidegger'in *ontolojik farkı* — varlık ile var olanlar arasındaki ayrım — Meillassoux'da yerinden oynatılıyor: Aynı fark, bu kez **zorunluluk ile olumsallık arasında** yeniden kuruluyor.

Buna bağlı olarak olumsuzlama da ikiye ayrılıyor: zorunlu bir hiçlik (*le néant*) ile olumsal bir hiç (*le rien*). Bu ayrım, Meillassoux'nun sonradan **olgusallık ilkesi** (*principe de factualité*) adını vereceği düşüncenin ilk biçimi.

Metnin değeri burada. Meillassoux'nun 2006'da yayımlanacak kitabıyla tanınan tezi, ilk kez bu erken metinde, üstelik Derrida'yla hesaplaşma içinde biçimleniyor.

## Olgusallık: zorunlu olan, olumsallığın kendisidir

Meillassoux'nun merkezî iddiası tek cümlede özetlenebilir:

> **Hiçbir şeyin zorunlu olmaması zorunludur.**

Yani zorunlu olan tek şey, olumsallığın kendisidir. Her şey başka türlü olabilir — ve bu "olabilirlik" tesadüfi değil, mutlak bir ilkedir.

Bu düşünce 2006 tarihli *Après la finitude* (2008'de İngilizceye *After Finitude* olarak çevrildi) kitabının temelini oluşturdu. Meillassoux orada Kant sonrası felsefede egemen olduğunu düşündüğü bir tutumu hedef aldı: **korelasyonculuk**.

Korelasyonculuk, kabaca, varlığa düşünceden bağımsız olarak erişemeyeceğimizi savunan yaklaşım. Kant'tan sonraki felsefenin büyük bölümü, bilinebilir olanı "insan ile dünya arasındaki ilişki" ile sınırlar.

Meillassoux'nun itirazı bilimden geliyor. Radyoaktif tarihleme, kozmoloji ve jeoloji, insanın — hatta yaşamın — ortaya çıkışından milyarlarca yıl önceki olayları betimliyor. Meillassoux bunlara **atalık** (*ancestralité*) diyor ve şunu soruyor: Bu ifadeler ne anlama geliyor? Korelasyoncu için "insan için evrenin yaşı 13,8 milyar yıldır" demekten başka seçenek yoktur. Meillassoux'ya göre bu, bilimin söylediğini ciddiye almamaktır.

## Hiper-kaos

Olgusallık ilkesinin en radikal sonucu **hiper-kaos** (*hyper-chaos*) kavramı.

Buradaki iddia yalnızca olayların rastlantısal olduğu değil. **Doğa yasalarının kendisi de zorunlu değil.** Yasalar herhangi bir anda, hiçbir neden olmaksızın değişebilir.

Bu, sezgiye aykırı bir konum ve Meillassoux da bunu biliyor. Savunması şu: Yasaların zorunlu olduğunu düşünmemizin tek dayanağı, şimdiye kadar değişmemiş olmaları. Ama bu, Hume'un iki buçuk yüzyıl önce gösterdiği gibi, bir kanıt değil bir alışkanlıktır. Meillassoux Hume'un sonucunu kabul edip farklı bir yere gidiyor: Tümevarım temellendirilemez — çünkü temellendirilecek bir zorunluluk yoktur.

## Spekülatif realizmden sonra

Meillassoux'nun adı, 2007'de Londra'da Goldsmiths'te düzenlenen bir çalıştaydan doğan **spekülatif realizm** başlığıyla anılıyor. Ray Brassier, Iain Hamilton Grant ve Graham Harman ile birlikte, 2000'lerin ortasında felsefede yeni bir gerçekçilik arayışının merkezinde yer aldı.

Bugün tablo değişmiş durumda. 2025'te yayımlanan *After Speculative Realism*, hareketin ilk döneminden sonra hangi yönlere evrildiğini tartışıyor. Aynı yıl *Sententiae* dergisinde çıkan bir çalışma ise Meillassoux'yu **Fransız spiritüalizm geleneği** bağlamında yeniden değerlendiriyor.

Bu, kayda değer bir dönüşüm: Meillassoux artık "yükselen genç filozof" olarak değil, **21. yüzyıl felsefesinin ilk çeyreğini biçimlendirmiş bir düşünür** olarak, felsefe tarihi araştırmasının konusu hâline geliyor.

## Metafiziğin dışına: sinema ve şiir

Meillassoux'nun etkisi metafizik çevrelerinin dışına taşmış durumda.

Frédéric Brayard'ın *Hyperchaos Cinema* adlı çalışması, Meillassoux'nun spekülatif materyalizmini çağdaş Fransız sineması ve dijital görüntü tartışmalarıyla ilişkilendiriyor. Kitap Bloomsbury'nin "Thinking Cinema" dizisinde yayıma hazırlanıyor.

Şiir tarafı ise Meillassoux'nun kendi gündeminde. Paris 1 Panthéon-Sorbonne'daki akademik profilinde araştırma konuları arasında **Mallarmé, şans ve şiir** sayılıyor. Bu ilgi 2011'de *Sayı ve Siren* kitabında somutlaşmıştı: Mallarmé'nin *Bir zar atımı asla rastlantıyı ortadan kaldırmayacaktır* şiirinden hareketle sayı, şans, sonsuzluk ve anlam arasındaki ilişkiyi inceleyen bir çözümleme.

Bu ayrıntı önemli. Meillassoux için olumsallık soyut bir metafizik kavram değil; bilimi, şiiri ve insanın gelecek tasavvurunu aynı anda ilgilendiren bir problem.

## Neden bugün okunuyor?

Meillassoux'nun güncelliği birkaç soruda toplanıyor:

Evrenin yasaları zorunlu mu, yoksa her şey başka türlü de olabilir miydi? Her şey başka türlü olabilirse, bilimin keşfettiği yasaların statüsü nedir? İnsan yokken gerçekleşmiş olaylar hakkında bilgi sahibi olabiliyorsak, "insan ile gerçeklik arasındaki ilişki" felsefenin merkezinde kalmalı mı?

Ve en radikali: Bugün imkânsız saydığımız şeyler gerçekten imkânsız mı?

Bu sorular Meillassoux'nun düşüncesini yapay zekâdan kozmolojiye, matematikten sinemaya uzanan geniş bir alanda tartışılır kılıyor.

## Kısa bir kronoloji

| Yıl | Gelişme |
|---|---|
| 1997 | *L'Inexistence divine* — doktora tezi (kitap olarak yayımlanmadı) |
| 2006 | *Après la finitude* Fransızca yayımlandı |
| 2008 | *After Finitude* İngilizce yayımlandı |
| 2011-2012 | Mallarmé üzerine *Sayı ve Siren* |
| 2025 | *After Speculative Realism*; Fransız spiritüalizmi bağlamında yeniden değerlendirme |
| 2026 | 1997 tezinden *Varlık ve Hiçlik* yayımlandı |

Bu tablo, 2026'nın Meillassoux açısından yeni bir manifesto yılı olmadığını gösteriyor. Daha çok **erken döneminin yeniden keşfedildiği ve etkisinin başka alanlara yayıldığı** bir yıl.

---

*Not: \`Derrida Today\` yılda iki kez, mayıs ve kasım aylarında yayımlanıyor. Metnin künye bilgileri PhilPapers kaydına dayanmaktadır.*`,
  },
  {
    title: "Rebecca Goldstein'dan 'Önemseme İçgüdüsü': bizi ilerleten ve bölen aynı ihtiyaç",
    slug: "rebecca-goldstein-mattering-instinct-kitap",
    summary:
      "Goldstein'ın yeni kitabı tek bir dürtüyü izliyor: önemli olma ihtiyacı. Yazara göre bu ihtiyaç insanın en büyük başarılarının da, yalnızlık, kutuplaşma ve aşırılık gibi en inatçı sorunlarının da kaynağında duruyor.",
    seoTitle: "The Mattering Instinct — Rebecca Newberger Goldstein",
    metaDescription:
      "Rebecca Newberger Goldstein'ın The Mattering Instinct kitabı: önemseme içgüdüsü, dört önem projesi ve modern toplumun yalnızlık, kutuplaşma, aşırılık sorunları.",
    contentType: "KITAP",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Rebecca_Goldstein.jpg?width=1600",
    imageCredit: "Rebecca Newberger Goldstein · Wikimedia Commons",
    featured: false,
    sourceName: "W. W. Norton & Company",
    sourceUrl: "https://wwnorton.com/books/9781324096856",
    publishedAt: "2026-08-26T05:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "etik", "zihin-felsefesi", "demokrasi"],
    philosopherSlugs: ["rebecca-goldstein"],
    sources: [
      {
        title: "The Mattering Instinct: How Our Deepest Longing Drives Us and Divides Us",
        publisher: "W. W. Norton & Company",
        date: "13 Ocak 2026",
        url: "https://wwnorton.com/books/9781324096856",
        primary: true,
      },
      {
        title: "The Mattering Instinct — Kirkus incelemesi",
        publisher: "Kirkus Reviews",
        url: "https://www.kirkusreviews.com/book-reviews/rebecca-newberger-goldstein/the-mattering-instinct/",
      },
      {
        title: "The Mattering Instinct",
        publisher: "Edge.org",
        url: "https://www.edge.org/conversation/rebecca_newberger_goldstein-the-mattering-instinct",
      },
    ],
    content: `İnsanı öteki canlılardan ayıran şeyin ne olduğu sorusuna verilen yanıtlar bellidir: dil, akıl, alet kullanımı, ölüm bilinci.

**Rebecca Newberger Goldstein** başka bir aday öneriyor: **önemli olma ihtiyacı.**

Ocak ayında W. W. Norton tarafından yayımlanan *The Mattering Instinct: How Our Deepest Longing Drives Us and Divides Us* — "Önemseme İçgüdüsü: En Derin Özlemimiz Bizi Nasıl İlerletiyor ve Nasıl Bölüyor" — bu tek dürtüyü kitap boyunca izliyor.

## Tez

Goldstein'a göre her canlı kendini korumaya çalışır. İnsanda bu temel dürtü dönüşmüş, biyolojik hayatta kalmanın ötesine geçen bir şeye evrilmiştir: **var olmakla yetinmeyip, var oluşunun bir ağırlığı olduğuna inanma ihtiyacı.**

Kitabın adındaki *mattering* sözcüğü İngilizcede hem "önem taşımak" hem de "hesaba katılmak" anlamına geliyor; Türkçede tek sözcükle karşılamak güç. Goldstein'ın kastettiği şu: Yalnızca yaşamak değil, yaşamın bir yere kaydedilmiş olması.

Bu ihtiyaç yazara göre insanlığın en büyük başarılarının kaynağında duruyor. Bilim, sanat, felsefe, siyasal mücadele — hepsi bir biçimde "önem projeleri".

## Dört yol

Kitabın omurgasını, insanların önem arayışını yürüttüğü dört farklı yol oluşturuyor:

**Aşkınlık.** Kendinden büyük bir şeye — bir dine, bir davaya, bir ulusa, bir ideale — bağlanarak önem kazanmak.

**Toplumsal bağ.** Başkaları tarafından görülmek, sevilmek, hatırlanmak; bir topluluğa ait olmak.

**Mükemmeliyet.** Bir işi iyi yapmak; ustalık, zanaat, bilgi ya da sanat yoluyla değer üretmek.

**Rekabet.** Başkalarıyla kıyaslanarak öne çıkmak; sıralamada yükselmek.

Goldstein'ın dikkat çektiği nokta, bu dördünün ahlaki bakımdan eşit olmadığı. İlk üçü büyük ölçüde toplamı büyütürken, dördüncüsü sıfır toplamlı bir oyun kurar: Benim önemim, ancak senin öneminin azalmasıyla artar.

## Bölünme buradan geliyor

Kitabın ikinci yarısı bu tezi güncel sorunlara bağlıyor.

Goldstein'a göre modern toplumların en inatçı üç sorunu — **yalnızlık, aşırılık ve kutuplaşma** — karşılanmamış önem ihtiyacının farklı görünümleri.

Yalnızlık, önemin en temel kaynağının, yani başkalarınca görülmenin kesilmesidir. Aşırılık, aşkınlık yolunun kapandığı yerde ortaya çıkan hızlı bir ikamedir: Radikal bir dava, bireye tek hamlede tarihsel bir ağırlık vaat eder. Kutuplaşma ise rekabet yolunun toplumsal ölçeğe taşınmasıdır — karşı grubu küçültmek, kendi grubunun önemini büyütmenin en ucuz yolu hâline gelir.

Goldstein'ın çıkardığı sonuç karamsar değil ama rahatlatıcı da değil: Bu üç sorunun tek tek çözülemeyeceğini, çünkü aynı kaynaktan beslendiklerini söylüyor.

## Yöntem

Goldstein'ın işi biyoloji, psikoloji ve felsefeyi bir arada yürütmek. Bu, onun bilinen çalışma biçimi.

MacArthur bursu sahibi ve ABD Ulusal Beşerî Bilimler Madalyası'nın sahibi olan Goldstein, hem felsefeci hem romancı. Gödel'in eksiklik teoremlerini anlattığı *Incompleteness*, Spinoza üzerine *Betraying Spinoza* ve antik felsefeyi çağdaş tartışmalara taşıdığı *Plato at the Googleplex* aynı yöntemi izler: Teknik bir felsefi meseleyi, kurmaca ve anlatı araçlarını kullanarak geniş bir okura açmak.

*Mattering* kavramı da yeni değil. Goldstein bu fikrin ilk hâlini yıllar önce Edge.org'daki bir konuşmada ortaya koymuş, sonraki çalışmalarında geliştirmişti. Kitap, o düşüncenin olgunlaşmış hâli.

## Felsefi arka plan

Kitabın tezi felsefe tarihinde yalnız değil.

Hegel'in **tanınma** kavramı, insanın kendilik bilincinin başka bir bilinç tarafından tanınmaya bağlı olduğunu söyler. Charles Taylor bu fikri modern kimlik siyasetinin merkezine yerleştirdi. Axel Honneth ise tanınma mücadelesini toplumsal çatışmanın temel dili olarak okudu.

Goldstein'ın katkısı, bu geleneği felsefi antropoloji ile psikoloji arasında bir yere oturtmak: Tanınma yalnızca toplumsal bir talep değil, **insan türüne özgü bir motivasyon yapısı**.

Kitabın en tartışmaya açık yanı da burası. "Önemseme içgüdüsü" gerçekten bir içgüdü mü, yoksa kültürel olarak biçimlenmiş bir arzu mu? Goldstein birinci yanıtı savunuyor; eleştirmenler bu noktada zorlanacağını şimdiden belirtti.

## Künye

- **Yazar:** Rebecca Newberger Goldstein
- **Özgün adı:** *The Mattering Instinct: How Our Deepest Longing Drives Us and Divides Us*
- **Yayınevi:** W. W. Norton & Company
- **Yayım tarihi:** 13 Ocak 2026
- **ISBN:** 9781324096856

Kitabın Türkçe çevirisiyle ilgili bir duyuru henüz yapılmadı. Goldstein'ın *Plato at the Googleplex* dışındaki başlıca kitapları Türkçede bulunuyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 26 Ağustos: William James'in ölümü",
    slug: "felsefe-tarihinde-bugun-26-agustos-william-james",
    summary:
      "Amerikan felsefesinin kurucu ismi William James 26 Ağustos 1910'da New Hampshire'daki evinde öldü. Aynı gün, 1728'de, pi sayısının irrasyonel olduğunu ilk kanıtlayan Johann Heinrich Lambert doğdu.",
    seoTitle: "26 Ağustos 1910: William James'in ölümü",
    metaDescription:
      "William James 26 Ağustos 1910'da öldü. Pragmatizm, bilinç akışı, radikal deneycilik ve inanma istenci. Ayrıca 26 Ağustos 1728: Johann Heinrich Lambert'in doğumu.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/William_James_b1842c.jpg?width=1600",
    imageCredit: "William James · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/William-James",
    publishedAt: "2026-08-26T04:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "zihin-felsefesi", "epistemoloji", "din-felsefesi", "mantik"],
    philosopherSlugs: [],
    sources: [
      {
        title: "William James | Life, Books, Psychology, Contribution, & Facts",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/William-James",
        primary: true,
      },
      {
        title: "William James",
        publisher: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/William_James",
      },
      {
        title: "August 26 — Today in Science History",
        publisher: "Today in Science History",
        url: "https://todayinsci.com/8/8_26.htm",
      },
    ],
    content: `**William James**, 26 Ağustos 1910'da New Hampshire'ın Chocorua kasabasındaki evinde, kalp yetmezliğinden öldü. Altmış sekiz yaşındaydı.

11 Ocak 1842'de New York'ta doğmuştu. Kardeşi Henry James, çağının en önemli romancılarından biri olacaktı.

Bir gün önce bu köşede [Hume ve Nietzsche'yi](/haber/felsefe-tarihinde-bugun-25-agustos-hume-nietzsche) anmıştık. Takvim ilginç bir sıralama kurmuş: Aklın kendini temellendiremediğini gösteren iki düşünürün ardından, o boşlukta ne yapılacağını soran biri geliyor.

## Önce hekim, sonra psikolog, en son filozof

James'in yolu düz değildi. Harvard'da tıp okudu, doktorasını aldı ama hekimlik yapmadı. Uzun bir bunalım döneminden sonra Harvard'da fizyoloji dersleri vermeye başladı; oradan psikolojiye, psikolojiden felsefeye geçti.

1890'da yayımlanan **Psikolojinin İlkeleri**, on iki yılda yazılmış iki ciltlik bir eserdi ve bir bilim dalını neredeyse tek başına kurdu. Kitap bugün hâlâ okunuyor — kısmen içeriği, kısmen de olağanüstü düzyazısı için.

## Bilinç akışı

James'in bu kitapta ortaya koyduğu kavramlardan biri felsefenin dışına taştı: **bilinç akışı** (*stream of consciousness*).

Klasik psikoloji bilinci parçalara ayırıyordu: duyumlar, izlenimler, fikirler. James bunun gözleme aykırı olduğunu söyledi. Bilinç ayrık parçalardan oluşmaz; kesintisiz akar. Bir düşünceyle bir sonraki arasında boşluk değil, geçiş vardır.

Bu kavram Virginia Woolf'tan James Joyce'a modern romanın anlatı tekniğini doğrudan etkiledi. Felsefe tarihinde bir kavramın edebiyata bu kadar hızlı geçtiği örnek azdır.

## Pragmatizm

James'in felsefeye asıl katkısı **pragmatizm**. Fikri Charles Sanders Peirce'ten aldı, ama Peirce'in dar anlamını genişletti — Peirce sonuçtan hoşnut kalmayıp kendi konumuna "pragmatisizm" adını verdi.

James'in ölçütü şu: Bir inancın anlamı, doğru olması hâlinde deneyimimizde yaratacağı farktır. İki kuram arasında hiçbir pratik fark üretmeyen bir tartışma, sözde bir tartışmadır.

Bundan çıkardığı hakikat anlayışı en çok eleştirilen tezi oldu: **Hakikat, bir fikrin "nakit değeri"dir** — inancın bizi götürdüğü yerde işe yarayıp yaramadığıdır. Eleştirmenler bunu "işe yarayan her şey doğrudur" biçiminde okudu; James böyle demediğini ısrarla belirtti. Ona göre bir inancın işe yaraması, gerçeklikle uyumlu olmasının bir göstergesidir, yerine geçen bir şey değil.

Tartışma yüz yıldır sürüyor. Richard Rorty'nin yirminci yüzyıl sonunda pragmatizmi yeniden gündeme getirmesi de bu hattan geldi.

## İnanma istenci

1896 tarihli **İnanma İstenci** konferansı, James'in en tartışmalı metni.

Sorusu şu: Kanıtın yetersiz olduğu, ama karar vermemenin de bir seçenek olmadığı durumlarda ne yapmalı?

James'in ölçütü üç koşullu. Seçenek **canlı** olmalı (kişi için gerçekten mümkün), **zorlayıcı** olmalı (kararsızlık da bir tercih sayılmalı) ve **ağırlıklı** olmalı (sonuçları önemli olmalı). Bu üç koşul birden sağlandığında, kanıt yetersizken bile inanmaya hakkımız vardır.

Metin, dönemin katı kanıtçılığına — özellikle W. K. Clifford'un "yetersiz kanıtla inanmak her zaman yanlıştır" tezine — verilmiş bir yanıttı. Bugün din felsefesi ve epistemik sorumluluk tartışmalarında hâlâ referans.

## Dinî deneyimin çeşitleri

1902 tarihli **Dinî Deneyimin Çeşitleri**, James'in en çok okunan kitabı.

Yöntemi kendine özgü: Dinin doğruluğunu tartışmıyor, dinî deneyimi bir olgu olarak inceliyor. Mistik yaşantıları, dönüşüm anlatılarını ve azizlik hâllerini psikolojik malzeme olarak ele alıyor; sonra soruyor: Bu deneyimlerin insan hayatındaki işlevi nedir?

Kitap din psikolojisinin kurucu metni sayılıyor.

## Radikal deneycilik

James'in son dönem konumu **radikal deneycilik**. Buradaki iddia, deneyimin yalnızca nesneleri değil, **ilişkileri de** doğrudan içerdiği. "Ve", "ile", "arasında" gibi bağlantılar sonradan zihnin eklediği şeyler değil; deneyimin kendisinde bulunuyor.

Bu tez, Hume'un atomcu deneyciliğine doğrudan bir itiraz. Hume ayrık izlenimler görür ve aralarındaki bağı alışkanlığa bağlar; James bağın da deneyimlendiğini söyler.

James'in 1909 tarihli **Çoğulcu Evren**'i aynı hattı sürdürür: Gerçeklik tek bir bütün değil, birbirine gevşek bağlarla tutunan çoğul bir yapıdır.

## Bugün neden konuşuluyor?

James'in adı bu ay beklenmedik bir yerde geçti. Sitemizde aktardığımız [yapay zekâ ve felsefe tartışmasında](/haber/yapay-zeka-felsefe-arastirmasi-tartismasi), zihin felsefesindeki **işlevselciliğin** kökeni tartışılırken bir okur, işlevselciliğin yapay zekâ çağında doğmadığını, Ernst Mach ve William James'in çok daha önce bir tür işlevselci olduğunu hatırlattı.

Bu, James'in konumunu iyi gösteriyor: Zihni tözle değil, yaptığı işle tanımlama fikri onun düşüncesinde zaten vardı.

## 1728: Johann Heinrich Lambert

Aynı gün, 1728'de, Mulhouse'da **Johann Heinrich Lambert** doğdu. Matematikçi, astronom, fizikçi ve filozoftu; 1777'de öldü.

Felsefe için iki katkısı önemli.

Birincisi 1761'de yaptığı kanıt: **π sayısının irrasyonel olduğunu** ilk kez kesin biçimde gösterdi. Bu, iki bin yıllık bir sorunun kapanmasıydı.

İkincisi 1766 tarihli *Theorie der Parallellinien*. Lambert burada Öklid'in paralellik postulatının yanlış olduğunu varsayıp ne olacağını inceledi ve çelişki bulmak yerine tutarlı bir sonuçlar dizisi elde etti. Bunlar sonradan **Öklid dışı geometrilerin** temel önermeleri olarak tanınacaktı.

Bu ayrıntının felsefi ağırlığı büyük. Kant, *Saf Aklın Eleştirisi*'nde uzayın Öklidçi yapısını sentetik a priori bilginin örneği olarak kullanmıştı. Lambert'in açtığı yol yüz yıl sonra Öklid dışı geometrilerin kurulmasıyla tamamlandığında, Kant'ın bu örneği felsefenin en tartışmalı savlarından biri hâline geldi.

Lambert ile Kant'ın yazıştıklarını da eklemek gerek. Kant, Lambert'in matematiksel keskinliğine büyük saygı duyuyordu.`,
  },
  {
    title: "Felsefeciler yapay zekâyı kullanmalı mı? Sert bir itiraz ve gelen yanıtlar",
    slug: "yapay-zeka-felsefe-arastirmasi-tartismasi",
    summary:
      "Dan Kaufman, meslektaşlarının yapay zekâ coşkusunu dört başlıkta eleştirdi: felsefe hakikat biriktirmez, konuları insanidir, edebiyata benzer ve toplumsaldır. Leiter Reports'ta yayımlanan metin bir günde ondan fazla yanıt aldı.",
    seoTitle: "Felsefe araştırmasında yapay zekâ: Kaufman'ın itirazı ve tartışma",
    metaDescription:
      "Dan Kaufman'ın yapay zekâ eleştirisi ve David Wallace, Rob Precht, Galen Strawson gibi isimlerin yanıtları. Felsefe hakikat biriktirir mi, yöntem sonuçtan ayrılabilir mi?",
    contentType: "ANALIZ",
    coverImage: "/kapak/yz-felsefe-tartismasi.jpg",
    imageCredit: "Temsilî görsel — yapay zekâ ile üretilmiştir",
    featured: true,
    sourceName: "Leiter Reports",
    sourceUrl: "https://leiterreports.com/2026/08/24/some-skepticism-about-ai-enthusiasm-among-philosophers/",
    publishedAt: "2026-08-25T05:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["yapay-zeka", "akademi", "zihin-felsefesi", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Some skepticism about AI enthusiasm among philosophers",
        publisher: "Leiter Reports",
        date: "24 Ağustos 2026",
        url: "https://leiterreports.com/2026/08/24/some-skepticism-about-ai-enthusiasm-among-philosophers/",
        primary: true,
      },
    ],
    content: `Felsefe camiasında bir süredir sürüklenen tartışma, dün sert bir müdahaleyle merkeze oturdu.

Missouri State Üniversitesi'nden felsefeci **Daniel Kaufman**, meslektaşlarının araştırmalarında büyük dil modellerini kullanmasına yönelik kapsamlı bir itiraz kaleme aldı. Metin, alanın en çok okunan blogu olan Leiter Reports'ta yayımlandı ve yayımlandığı gün ondan fazla yanıt aldı.

Tartışmanın kayda değer yanı taraflardan biri değil, sorunun kendisi: **Felsefede yöntem, sonuçtan ayrılabilir mi?**

## Kaufman'ın dört itirazı

### 1. "Doğru yığını" diye bir şey yok

Kaufman'a göre yapay zekâ savunucularının örtük varsayımı şu: Felsefi araştırmanın amacı önemli doğruları biriktirmektir; öyleyse sonuca nasıl varıldığı değil, nereye varıldığı önemlidir.

Sık kullanılan benzetme de buradan geliyor: Kanserin tedavisini kimin ya da neyin bulduğu önemli midir, tedavi işe yaradığı sürece?

Kaufman bu benzetmeyi reddediyor. Ona göre felsefede üzerinde binlerce yıldır sürekli ve ciddiye alınabilir bir anlaşmazlığın bulunmadığı tek bir önemli konu yok:

> Ahlaki gerçekçilik ile anti-gerçekçilik; deontoloji ile sonuççuluk; özgür irade ile determinizm; içselci ile dışsalcı epistemolojiler; temelci ile tutarlılıkçı epistemolojiler; hakikatin karşılık kuramı, tutarlılık kuramı ve deflasyonist kuramı…

Dahası, "kesin biçimde çürütüldüğü" söylenen kuramlar sürekli geri dönüyor. Kaufman'ın örneği zihin felsefesinden: **İşlevselcilik** yıllarca gözden düşmüş sayılıyordu; yapay zekâ heyecanıyla birlikte yeniden diriltildi.

### 2. Felsefenin konuları insani

Güzellik, değer, yükümlülük, erdem. Kaufman'a göre bu kavramların hepsi insani duygulanımları, algıları ve tepkileri varsayar.

Sorusu doğrudan: İstatistiksel yığışım yazılımı, hissedemediği, göremediği ve umursayamadığı bir şeyi anlamamıza nasıl yardım edecek?

### 3. Felsefe edebiyata benzer

Kaufman'ın en tartışmalı tezi bu. Ona göre felsefe, birçok kişinin olmasını istediği gibi "a priori uzayın sert bilimi" değil; edebiyata daha yakın.

Bir felsefe metni, konusunun tarafsız bir incelemesi olduğu kadar, **filozofun kendi sesinin, tarihinin ve bakışının** o konuyla kesişmesidir. Buradan çıkan sonuç: Fikrin nereden geldiği ve nasıl dile getirildiği felsefede belirleyicidir. Yapay zekâ üzerinden "ölümsüzlük" vaadine karşı Kaufman'ın önerdiği tek kalıcılık biçimi şu: Kendine özgü seslerin sürmesi.

### 4. Felsefe toplumsal bir etkinlik

Kaufman, yapay zekâ savunucularının felsefenin toplumsal boyutunu görmezden geldiğini söylüyor. Bir yazar, yapay zekâ kullanmakla lisansüstü asistanlarla çalışmak arasında fark olmadığını öne sürmüş; bir okur da yapay zekânın "aptalca angarya işleri" devralmasına sevindiğini yazmış.

Kaufman'ın yanıtı iki katmanlı. Birincisi pratik: O angarya, lisansüstü öğrencilerinin sayılı gelir kaynaklarından biri. İkincisi ilkesel: Meslektaşlarla konuşmak felsefenin dışında bir şey değil, **felsefenin kendisi**. Sokratik alışverişi bir odada Claude ya da ChatGPT'yle baş başa kalmakla değiştirmek, mesleğin ne olduğunu unutmaktır.

## Gelen yanıtlar

Metnin altındaki tartışma, itirazın kendisi kadar ilgi çekici.

**David Wallace** (Pittsburgh) ilerleme iddiasını savundu. Ona göre Kaufman bir seçilim yanılgısına düşüyor: Yüzyıllar boyunca felsefi sayılan sorular arasında "madde atomlardan mı oluşur", "hareketin doğası nedir", "evrenin bir başlangıcı var mı" da vardı. Bu sorularda geri döndürülemez ilerleme sağlandı — o kadar ki artık felsefenin değil, kendi bilimlerinin konusu oldular. Wallace beşerî tarafta bile bir kazanım görüyor: "Kölelik iyidir" iddiasının reddi bir doğru yığınına yazılamaz mı?

**Rob Precht** tarih düzeltmesi yaptı: İşlevselcilik hiçbir zaman ölü bir mesele değildi. Shoemaker, Levin, Polger, Wilson ve Piccinini'nin çalışmaları büyük dil modellerinden çok önce sürüyordu; Chalmers'ın *Bilinçli Zihin*'i 1996 tarihli. Ona göre "yapay zekâ hayranlarının dirilttiği akım" anlatısı kronolojik olarak yanlış.

**A. B. Jimenez-Cordero** ise itirazı kabul edip sonucunu tersine çevirdi. Felsefe doğru biriktirmiyor olabilir; ama **sonuç** biriktiriyor. Hangi argümanın neden işlemediğini, hangi kuramın hangi itiraza takıldığını biliyoruz: Davranışçılığın Putnam'ın "süper-Spartalılar"ıyla, tip-özdeşlik kuramının düşünen bilgisayar olasılığıyla karşılaştığı güçlükler gibi. Bu okumada felsefe, kesin doğrular değil, **bilmediğimiz şeyler hakkında artan bir kavrayış** üretir. Ve bu iş büyük ölçüde "birleşimsel haritalama" olduğu için yapay zekânın üstün olması beklenir.

Jimenez-Cordero'nun bıraktığı soru şu: Yapay zekâ analitik felsefenin bugünkü işleyişinin büyük bölümünü otomatikleştirebilir — ama bu, felsefenin amacı mıydı?

**Michel Xhignesse** iki not düştü. Kaufman'ın "yapay zekânın kavrayamayacağı insani değerler" listesinde güzellik geçiyor; oysa estetik, ABD'de lisansüstü eğitiminden çekilmekte olan bir alan. İkincisi: Araştırma asistanlarının emeği zaten çoğu zaman anılmıyor; oysa o iş hem gerçek bir emek hem de bir eğitim.

**Galen Strawson** ise Kaufman'a katılırken bir çekince koydu: Ölü atları yeniden canlandırabilmek felsefenin erdemi sayılmaz. Schopenhauer'ın sözünü hatırlattı — hakikate, paradoks diye mahkûm edilmesiyle basit diye küçümsenmesi arasında yalnızca kısa bir zafer kutlaması tanınır.

## Tartışmanın asıl ekseni

Yüzeyde bir teknoloji tartışması var. Altında ise felsefenin ne tür bir etkinlik olduğuna dair klasik bir ayrım duruyor.

Felsefeyi **bilime** benzetirseniz, yöntem araçsaldır: Sonuç doğruysa, ona nasıl varıldığı ikincil kalır. Felsefeyi **beşerî bir disipline** benzetirseniz, yöntem sonucun parçasıdır: Bir düşüncenin nasıl kurulduğu, o düşüncenin ne olduğunu belirler.

Bu ayrımın kendisi yeni değil. Sitemizde daha önce aktardığımız gibi, [Bernard Williams](/haber/bernard-williams-ahlak-sistem-elestirisi) yıllar önce felsefenin bilimden çok tarihe yakın olduğunu savunmuştu. Kaufman'ın itirazı, o eski tezin yeni bir teknoloji karşısında sınanması.

Tartışmanın bir başka boyutu da sitemizde geçtiğimiz haftalarda ele alınmıştı: Bir felsefe dergisinin büyük ölçüde yapay zekâ tarafından yazılmış bir makaleyi bilerek yayımlaması, aynı sorunun somut hâliydi.

## Bir not

Kaufman'ın metninde adı geçmeyen ama tartışmayı sessizce belirleyen bir varsayım var: Felsefi metnin bir **yazarı** olduğu.

Yapay zekâ kullanımı bu varsayımı doğrudan yıpratmıyor; ama yazarlığın ne kadarının araçlaştırılabileceği sorusunu açıyor. Bir metnin dipnotları, kaynakçası, argüman haritası ve ilk taslağı başkasına devredilebiliyorsa, geriye kalan "kendine özgü ses" tam olarak nedir?

Tartışma sürüyor. Yanıtı hazır olan tarafın, muhtemelen soruyu yeterince ciddiye almamış olduğunu söylemek mümkün.`,
  },
  {
    title: "Briana Toole: kimin bildiği, ne bilindiğini değiştirir mi?",
    slug: "briana-toole-bakis-acisi-epistemolojisi",
    summary:
      "Bakış açısı epistemolojisini çağdaş tartışmaya geri taşıyan Toole, aynı zamanda felsefeyi dezavantajlı liselere götüren Corrupt the Youth programının kurucusu. İki uğraş tek bir tezle bağlanıyor: bilgi, bilenin konumundan bağımsız değildir.",
    seoTitle: "Briana Toole ve bakış açısı epistemolojisi",
    metaDescription:
      "Briana Toole'un bakış açısı epistemolojisi, epistemik baskı kavramı ve Corrupt the Youth felsefe programı.",
    contentType: "PORTRE",
    coverImage: "/kapak/briana-toole.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    sourceName: "Daily Nous · Claremont McKenna College",
    sourceUrl: "https://dailynous.com/2026/08/20/what-is-it-like-to-be-a-philosopher-briana-toole-edition/",
    publishedAt: "2026-08-25T05:10:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["epistemoloji", "toplumsal-cinsiyet", "akademi", "kavram"],
    philosopherSlugs: [],
    sources: [
      {
        title: "What is it like to be a philosopher? Briana Toole edition",
        publisher: "Daily Nous",
        date: "20 Ağustos 2026",
        url: "https://dailynous.com/2026/08/20/what-is-it-like-to-be-a-philosopher-briana-toole-edition/",
        primary: true,
      },
      {
        title: "Briana Toole — Public Philosopher",
        publisher: "brianatoole.com",
        url: "https://www.brianatoole.com/",
      },
      {
        title: "Briana Toole",
        publisher: "PhilPeople",
        url: "https://philpeople.org/profiles/briana-toole",
      },
    ],
    content: `Epistemolojinin klasik sorusu şudur: Bir inancın bilgi sayılması için ne gerekir?

Yanıtlar genellikle inancın kendisine bakar: Doğru mu, gerekçelendirilmiş mi, güvenilir bir süreçle mi oluşmuş? İnananın kim olduğu bu hesaba girmez. Bilgi, kişiden bağımsız bir başarıdır.

**Briana Toole**'un çalışması tam bu varsayımı sınıyor.

## Bakış açısı epistemolojisi nedir?

Claremont McKenna College'da felsefe doçenti olan Toole, **bakış açısı epistemolojisini** (*standpoint epistemology*) çağdaş analitik tartışmaya geri taşıyan isimlerden biri.

Kuramın çekirdek iddiası şu: Epistemik olmayan özellikler — kişinin toplumsal konumu, kimliği, deneyimi — bilebileceği şeyleri etkiler.

Bu iddia ilk duyuşta iki yanlış anlamayı davet eder, Toole'un işi büyük ölçüde ikisini de ayıklamak.

**Birinci yanlış anlama: görelilik.** Kuram, "herkesin kendi hakikati vardır" demiyor. Söylediği, bazı olguların belirli konumlardan daha kolay fark edildiği. Ayrımcılığa uğrayan kişi, ayrımcılığın nasıl işlediğine dair bazı şeyleri daha erken görebilir; bu, gördüğü şeyin ona özgü bir hakikat olduğu anlamına gelmez.

**İkinci yanlış anlama: otomatik ayrıcalık.** Kuram, ezilen konumda bulunmanın kendiliğinden üstün bilgi verdiğini de söylemiyor. Toole'un vurguladığı gibi, konum bir **imkân** sağlar; o imkânın bilgiye dönüşmesi ayrı bir iştir.

## Epistemik baskı

Toole'un kuramı asıl gücünü olumsuz tarafta gösteriyor: **epistemik baskı** (*epistemic oppression*).

Buradaki fikir şu: Bir toplumsal düzen yalnızca kaynakları değil, bilgi üretme ve bilgi olarak kabul görme imkânlarını da eşitsiz dağıtır. Kimin tanık sayılacağı, kimin ifadesinin ciddiye alınacağı, hangi soruların araştırmaya değer bulunacağı — hepsi bu dağılımın parçası.

Bu çerçeve son yirmi yılda Miranda Fricker'ın *epistemik adaletsizlik* kavramıyla birlikte alanın kalıcı gündemine yerleşti. Toole'un katkısı, bakış açısı kuramının bu tartışmadaki yerini kavramsal olarak netleştirmek.

## Sınıfa inen felsefe

Toole'un ikinci uğraşı akademik değil, ama kuramından kopuk da değil.

UT-Austin'de doktora öğrencisiyken **Corrupt the Youth** adında bir felsefe programı kurdu. Ad, Sokrates'e yöneltilen "gençliği yoldan çıkarmak" suçlamasına gönderme.

Programın işleyişi basit: Bir üniversitenin felsefe bölümüyle bir devlet lisesi arasında ortaklık kuruluyor; felsefe doktora öğrencileri haftada bir iki gün o lisenin sınıfına girip ders veriyor. Dersler okul saatleri içinde ve müfredatın parçası olarak yapılıyor — ek etkinlik ya da seçmeli kulüp değil.

Hedef kitle özellikle **Title 1** okulları: ABD'de düşük gelirli ailelerin çocuklarının yoğunlaştığı, ek federal destek alan okullar.

Toole'un anlattığına göre amaç, öğrencilere felsefe tarihi öğretmek değil. Kendileri için önemli olan meseleleri konuşabilecekleri ve ne düşündüklerini fark edebilecekleri bir alan açmak.

## İki uğraş, tek tez

Kuramla program arasındaki bağ görünürden daha sıkı.

Bakış açısı epistemolojisi doğruysa, felsefe yapan insanların bileşimi felsefenin içeriğini de etkiler. Kimlerin soru sorduğu, hangi soruların sorulduğunu belirler. Bir disiplin dar bir toplumsal kesitten besleniyorsa, kör noktaları da o kesitin kör noktalarıdır.

Bu okumada Corrupt the Youth bir hayır işi değil, kuramın gereği. Felsefeye kimlerin girdiğini genişletmek, felsefenin görebildiklerini genişletmenin yolu.

## Tartışmanın öteki tarafı

Bakış açısı epistemolojisi eleştirisiz kabul görmüş bir konum değil.

Başlıca itiraz şu: Bilginin konuma bağlandığı yerde, konumlar arası eleştiri güçleşir. Bir iddiayı sınamak istediğinizde, sınamanızın kendisi "yanlış konumdan yapılmış" sayılabilir. Eleştirmenlere göre bu, tartışmayı kapatan bir hamledir.

Savunucuların yanıtı, kuramın doğru biçiminin bunu gerektirmediği yönünde: Konum, bir iddiayı sınanmaktan muaf tutmaz; yalnızca hangi kanıtın nereden daha kolay görülebileceğini açıklar.

Tartışma, epistemolojinin en canlı hatlarından biri olmayı sürdürüyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 25 Ağustos: Hume ve Nietzsche, aynı gün",
    slug: "felsefe-tarihinde-bugun-25-agustos-hume-nietzsche",
    summary:
      "David Hume 25 Ağustos 1776'da Edinburgh'da, Friedrich Nietzsche 25 Ağustos 1900'de Weimar'da öldü. Aralarında 124 yıl var; ama ikisi de aklın kendini temellendirme iddiasını aynı yerden sarstı.",
    seoTitle: "25 Ağustos: Hume (1776) ve Nietzsche (1900)",
    metaDescription:
      "Hume 25 Ağustos 1776'da, Nietzsche 25 Ağustos 1900'de öldü. İki ölümün felsefe tarihindeki yeri ve aralarındaki düşünsel bağ.",
    contentType: "TARIH",
    coverImage: "/kapak/25-hume-nietzsche.jpg",
    imageCredit: "Temsilî Nietzsche portresi — yapay zekâ ile üretilmiş çizim",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/David-Hume",
    publishedAt: "2026-08-25T04:30:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "nietzsche", "epistemoloji", "etik", "aydinlanma"],
    philosopherSlugs: ["friedrich-nietzsche"],
    sources: [
      {
        title: "David Hume | Biography, Philosophy, Empiricism, Skepticism, & Works",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/David-Hume",
        primary: true,
      },
      {
        title: "Friedrich Nietzsche | Biography, Books, & Facts",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/Friedrich-Nietzsche",
      },
      {
        title: "David Hume (1711-1776)",
        publisher: "University of Edinburgh — Our History",
        url: "https://ourhistory.is.ed.ac.uk/index.php/David_Hume_(1711-1776)",
      },
    ],
    content: `Takvimlerin bazen ürettiği rastlantılar, düşünce tarihinde beklenmedik bir okuma imkânı açar.

25 Ağustos, felsefe için böyle bir gün. **David Hume** 25 Ağustos 1776'da Edinburgh'da, **Friedrich Nietzsche** 25 Ağustos 1900'de Weimar'da öldü. Aralarında tam 124 yıl var.

İkisini yan yana koymak yalnızca takvim şakası değil. Ortak bir hamleleri var — ve o hamle, modern felsefenin yönünü belirledi.

## Hume: 1776, Edinburgh

Hume ölümüne aylar kala hastalığının ilerlediğini biliyordu. Bu bilgiyle **Kendi Hayatım** adlı kısa özyaşamöyküsünü yazdı; metin sekiz sayfa bile tutmaz ve şaşırtıcı bir soğukkanlılıkla kurulmuştur.

Ölümüne tanık olan arkadaşı **Adam Smith**, bir mektupta son günlerini anlattı. Anlatının sarsıcı yanı şuydu: Hume, dinsel bir teselliye başvurmadan, ölümü sakin bir biçimde bekliyordu. Metin yayımlandığında Smith'in başını epeyce ağrıttı; kendi ifadesiyle, Britanya'nın ticaret sistemine yönelttiği bütün eleştirilerin toplamından daha çok tepki topladı.

Hume'un asıl bombası ise ölümünden sonrasına bırakılmıştı. **Doğal Din Üstüne Diyaloglar**, yayımlanması hâlinde yaratacağı tepki nedeniyle sağlığında basılmadı; 1779'da, ölümünden üç yıl sonra çıktı.

### Ne yaptı?

Hume'un yıkıcılığı üslubunda değil, yönteminde. Deneyci ilkeyi sonuna kadar götürdü ve şunu sordu: Kullandığımız temel kavramların deneyde karşılığı nerede?

**Nedensellik.** Bir bilardo topunun diğerine çarpmasını görürüz; ilkinin ikincisini *zorunlu kıldığını* görmeyiz. Gördüğümüz şey ardışıklıktır. "Zorunlu bağlantı" dediğimiz şey nesnede değil, tekrarın zihnimizde oluşturduğu alışkanlıktadır.

**Ben.** Kendimize baktığımızda bir izlenim demeti buluruz — sıcaklık, ağrı, düşünce, sıkıntı. Bütün bunları taşıyan kalıcı bir "ben" izlenimine hiç rastlamayız.

**Ahlak.** "Olan"dan "olması gereken"e geçen akıl yürütmelerin bu geçişi hiç açıklamadığını gösterdi. Ona göre ahlaki yargıların kaynağı akıl değil, duygudur: "Akıl tutkuların kölesidir ve yalnızca öyle olmalıdır."

Kant'ın deyişiyle Hume onu "dogmatik uykusundan" uyandırdı. Uyandırdığı tek kişi değildi.

## Nietzsche: 1900, Weimar

Nietzsche'nin ölümü, düşünsel hayatının bitişiyle aynı tarihe düşmez. Ocak 1889'da Torino'da yaşadığı çöküşten sonra bir daha yazamadı. Geriye kalan on bir buçuk yılı önce annesinin, sonra kız kardeşi Elisabeth'in bakımında geçirdi.

Bu yılların acı bir yanı var: Nietzsche'nin ünü tam bu dönemde patladı. Avrupa'da adı konuşulmaya, kitapları yeniden basılmaya başladığında yazarının bundan haberi yoktu.

Elisabeth Förster-Nietzsche, kardeşinin arşivini yönetti; notlarını kendi seçtiği bir düzenle derleyip **Güç İstenci** adıyla kitaplaştırdı. Nietzsche'nin böyle bir kitabı yayımlama tasarısından vazgeçmiş olduğu, sonraki filolojik çalışmalarla ortaya çıktı. Metnin ve adın sonraki siyasi kötüye kullanımlarında bu müdahalenin payı büyüktür.

## İki ölüm, bir hat

Hume ile Nietzsche arasında doğrudan bir öğrencilik ilişkisi yok. Ama ortak bir hamleleri var, ve o hamle felsefenin gündemini değiştirdi.

**İkisi de aklın kendi temelini kuramadığını gösterdi.**

Hume bunu bilgi tarafında yaptı: Nedensellik, tümevarım ve benlik gibi düşüncenin taşıyıcı kavramları, akılla temellendirilemiyor. Onları taşıyan şey alışkanlık, tekrar ve insan doğasıdır.

Nietzsche bunu değer tarafında yaptı: Ahlaki değerlerimiz akıl tarafından bulunmuş ilkeler değil, tarihi olan oluşumlardır. [Soykütük yöntemi](/haber/nietzschenin-soykutugu-degerlerin-degeri) tam da bu tarihi görünür kılmak içindir.

İkinci ortaklık daha da dikkat çekici: **İkisi de ahlakı akıldan alıp duygulanıma bağladı.** Hume için ahlaki onaylama bir duygudur; Nietzsche için değerlendirme, bir güç ilişkisinin ifadesidir. Farklı sözlükler, aynı yön.

Aradaki fark ise mizaçta. Hume yıkımının ardından gündelik hayata döner; kavramlarımızın temelsiz olduğunu göstermek onu dehşete düşürmez, tavla oynamaya ve dostlarıyla yemek yemeye gider. Nietzsche için aynı boşluk bir kriz mahallidir: Değerlerin temelsizliği fark edildiğinde ortaya çıkan şey, aşılması gereken bir nihilizmdir.

Aynı teşhis, iki farklı mizaç. Modern felsefenin iki damarı buradan ayrılır.

## Türkçede

Hume'un *İnsanın Anlama Yetisi Üzerine Bir Soruşturma*, *İnsan Doğası Üzerine Bir İnceleme* ve *Doğal Din Üstüne Diyaloglar* adlı eserleri Türkçeye çevrildi. Nietzsche'nin başlıca kitaplarının tamamına yakını Türkçede bulunuyor; *Ahlakın Soykütüğü Üzerine* ve *İyinin ve Kötünün Ötesinde* çevirileri arasında [Ahmet İnam](/haber/ahmet-inam-youtube-dersleri-dijital-arsiv) imzalı olanlar da var.

---

*Not: Bazı kaynaklarda Hume'un ölüm tarihi 26 Ağustos olarak geçer. Britannica ve Edinburgh Üniversitesi arşivi 25 Ağustos 1776 tarihini veriyor.*`,
  },
  {
    title: "Türkiye Nietzsche Topluluğu: Nietzsche'yi Türkçede yeniden düşünmenin adresi",
    slug: "turkiye-nietzsche-toplulugu",
    summary:
      "2023'te Sadık Erol Er ve Volkan Ay öncülüğünde kurulan topluluk, Nietzsche araştırmalarını seminerler, okuma grupları, çeviri çalışmaları ve dijital yayınlarla bir araya getiriyor. Yaptığı işlerden biri de Nietzsche'nin Türkiye'deki alımlanma tarihini görünür kılmak.",
    seoTitle: "Türkiye Nietzsche Topluluğu: kuruluşu, çalışmaları ve önemi",
    metaDescription:
      "Türkiye Nietzsche Topluluğu 27 Eylül 2023'te kuruldu. Seminerler, okuma grupları, çeviri çalışmaları ve Türkçede Nietzsche bibliyografyası.",
    contentType: "ANALIZ",
    coverImage: "/kapak/nietzsche-toplulugu.jpg",
    imageCredit: "Temsilî Nietzsche portresi — yapay zekâ ile üretilmiş çizim",
    featured: true,
    sourceName: "Türkiye Nietzsche Topluluğu",
    sourceUrl: "https://www.turkiyenietzschetoplulugu.com/general-7",
    publishedAt: "2026-08-24T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["nietzsche", "akademi", "kavram", "ceviri"],
    philosopherSlugs: ["friedrich-nietzsche"],
    sources: [
      {
        title: "Hakkımızda — Türkiye Nietzsche Topluluğu",
        publisher: "turkiyenietzschetoplulugu.com",
        url: "https://www.turkiyenietzschetoplulugu.com/general-7",
        primary: true,
      },
      {
        title: "Türkiye Nietzsche Topluluğu — YouTube kanalı",
        publisher: "YouTube",
        url: "https://www.youtube.com/@turkiyenietzschetoplulugu",
      },
      {
        title: "Prof. Dr. Sadık Erol Er — yayınlar",
        publisher: "Çukurova Üniversitesi AVESİS",
        url: "https://avesis.cu.edu.tr/seroler/yayinlar",
      },
    ],
    content: `Friedrich Nietzsche'nin düşüncesini yalnızca bir filozofun eserleri olarak değil, çağdaş dünyanın sorunlarını yeniden düşünmek için canlı bir imkân olarak ele alan **Türkiye Nietzsche Topluluğu**, Türkiye'de Nietzsche çalışmalarını bir araya getiren oluşumlardan biri olarak faaliyetlerini sürdürüyor.

Topluluk **27 Eylül 2023'te**, Prof. Dr. Sadık Erol Er ve Dr. Volkan Ay'ın öncülüğünde kuruldu.

## Neden böyle bir yapıya ihtiyaç vardı?

Nietzsche Türkiye'de uzun yıllardır okunuyor: *Böyle Söyledi Zerdüşt*, *Ahlakın Soykütüğü*, *İyinin ve Kötünün Ötesinde*, *Putların Alacakaranlığı* ve *Şen Bilim* çevirileri kuşaklar boyunca elden ele geçti.

Ama Nietzsche'nin Türkiye'deki durumu kendine özgü bir sorun taşır. Bir yanda son derece uzmanlaşmış akademik çalışmalar var; öte yanda filozofu birkaç ünlü aforizmaya indirgeyen popüler anlatılar. İkisi arasındaki mesafe, Nietzsche söz konusu olduğunda başka birçok filozofa kıyasla daha büyük.

Topluluğun yaptığı iş bu boşlukta anlam kazanıyor.

## "Süreklilikler ve süreksizlikler"

Topluluğun kendi ifadesiyle temel hedeflerinden biri, Nietzsche'nin mirasının **süreklilikler ve süreksizlikler** ekseninde serimlenmesi ve bu düşüncenin sunduğu imkânlardan hareketle günümüz sorunlarının ele alınması.

Bunun yanında Nietzsche üzerine çalışan araştırmacıları bir araya getirmek, çalıştay ve seminerler düzenlemek, okuma ve çeviri grupları oluşturmak ve Nietzsche literatürünün Türkçedeki gelişimine katkıda bulunmak da amaçlar arasında.

Bu yaklaşım önemli bir metodolojik tercihi içeriyor: Nietzsche'yi "Tanrı öldü", "üstinsan", "güç istenci" ya da "bengi dönüş" gibi birkaç kavram üzerinden okumak yerine, bu kavramların ortaya çıktığı felsefi bağlamı araştırmak.

Çünkü Nietzsche'nin felsefesi hazır cevaplar veren bir sistem değil, [değerlerin kendisini sorgulayan bir düşünme pratiğidir](/haber/nietzschenin-soykutugu-degerlerin-degeri). Onun sorusu çoğu zaman "Bu değer doğru mu?" değildir; daha geriye gider: Bu değer nasıl ortaya çıktı? Kime hizmet etti? İnsan neden bu değere değer vermeye başladı?

## Türkçede Nietzsche: bir düşünsel harita

Topluluğun internet sitesindeki en dikkat çekici çalışmalardan biri, **"Türkçede Nietzsche Felsefesi"** başlığı altında oluşturulan kaynak dökümü.

Bu bölümde Nietzsche üzerine Türkçede yayımlanmış telif eserler, çeviriler ve derlemelerin yanı sıra yüksek lisans ve doktora tezleri, akademik makaleler ve Nietzsche'nin eserlerinin Türkçe çevirileri ayrı başlıklar altında toplanıyor.

Böyle bir bibliyografya, ilk bakışta teknik bir katalog gibi görünür. Oysa yaptığı şey daha fazlasıdır: **Bir filozofun bir dile ne zaman, hangi aracılarla ve hangi yorumla girdiğini gösterir.**

Topluluğun arşivinde İoanna Kuçuradi'nin 1966 tarihli *Max Scheler ve Nietzsche'de Trajik Olan* çalışmasından Suut Kemal Yetkin'in *Büyük Tedirginler: Schopenhauer, Nietzsche, Tolstoy* kitabına; Hüseyin Aydın'ın *Metafizikçi Olarak Nietzsche* eserinden Kasım Küçükalp'in *Nietzsche ve Postmodernizm* çalışmasına uzanan bir literatür listeleniyor.

Bu liste tek başına bir tez içerir: Türkiye'de Nietzsche okuması altmış yıldan uzun bir geçmişe sahip ve dönemden döneme başka bir Nietzsche okunmuş.

## Bilim kurulu ve etkinlikler

Topluluğun bilim kurulunda Türkiye'den ve yurt dışından akademisyenler yer alıyor: Birdal Akar, Daniel Smith, Elif Yavnik, Iraz Yaşar, Necdet Yıldız, Sadık Erol Er, Uğur Ekren, Vanessa Lemm ve Zeynep Talay Turner.

Etkinlik başlıkları da Nietzsche araştırmalarının tek bir alana sıkışmadığını gösteriyor. Prof. Dr. Sebahattin Çevikbaş "Nietzsche ve Eğitim" başlıklı bir konuşma yaptı; yazar ve felsefeci Senail Özkan ise "Nietzsche'nin 'Tanrı Öldü' Sözünün Semantik Boyutları" başlığıyla filozofun en çok yanlış anlaşılan ifadesini tartışmaya açtı.

## Nietzsche ve Grekler

Topluluğun YouTube kanalında yayımlanan etkinliklerden biri Doç. Dr. Gül Turan'ın **"Nietzsche'nin Grekleri"** başlıklı sunumu.

Çalışma, Nietzsche'nin Grek dünyasına ilişkin düşüncelerini *Tragedyanın Doğuşu* ve *Yunanlıların Trajik Çağında Felsefe* üzerinden ele alıyor: Apollon-Dionysos karşıtlığı, trajik olanın anlamı, sanat ve hakikat ilişkisi, Schopenhauer etkisi ve Nietzsche'nin Sokrates öncesi düşünürlere ilgisi.

Bu başlık göründüğünden önemli. Nietzsche'yi yalnızca modern Avrupa'nın krizlerine cevap veren bir filozof saymak eksik bir okumadır. O, modern insanın krizini anlamak için Grek dünyasına geri döner. Onun için Grekler geçmişte kalmış bir kültür değil, **Batı düşüncesinin başka türlü de kurulabileceğini gösteren bir imkândır.**

## Müzik: felsefenin sınırındaki alan

Topluluğun ilgi alanının felsefenin sınırlarını aştığını gösteren bir örnek de Nietzsche ile müzik arasındaki ilişki.

2025'te Kadıköy Belediyesi'nin düzenlediği Uluslararası İstanbul Müzik ve Felsefe Etkinliği kapsamında Dr. Volkan Ay "Bergson ve Müzik", Prof. Dr. Yunus Tuncel ise "Nietzsche'de Müzikte Affekt ve Fizyoloji" başlıklı sunumlar yaptı. Programda Nietzsche'nin kendi piyano eserleri de seslendirildi.

Bu ayrıntı önemsiz değil. Nietzsche için müzik estetik bir nesne değildir; yaşamın doğrudanlığına, bedene ve henüz kavramlara indirgenmemiş deneyime açılan bir alandır. Filozofun besteci olarak da üretmiş olması, sanat ile yaşam arasında kurduğu bağın biyografik karşılığıdır.

## Dijital boyut

Topluluğun faaliyetleri fiziksel toplantılarla sınırlı değil. İnternet sitesi güncel yayınları, haberleri ve Nietzsche literatürüne ilişkin kaynakları toplarken YouTube kanalı konuşmaların daha geniş bir izleyiciye ulaşmasını sağlıyor.

Bu, sitemizde daha önce [Ahmet İnam'ın metin okumaları](/haber/ahmet-inam-youtube-dersleri-dijital-arsiv) vesilesiyle işaret ettiğimiz eğilimin bir başka örneği: Türkiye'de felsefe, üniversite duvarlarının dışında kendine dijital bir kamusal alan kuruyor.

## Nietzsche Türkiye'de neden hâlâ önemli?

On dokuzuncu yüzyılın sonunda ortaya konan soruların önemli bölümü güncelliğini koruyor:

- Değerlerimizi kim belirliyor?
- Ahlakın kökeni nedir?
- İnsan kendi değerlerini yaratabilir mi?
- Hakikat dediğimiz şey ne kadar bağımsızdır?
- Nihilizmle nasıl başa çıkılır?
- Yaşamı olumlamak ne demektir?

Nietzsche'nin önemi bize belirli cevaplar vermesinden çok, **cevaplarımızın arkasındaki varsayımları sorgulamaya zorlamasında** yatıyor. Bu nedenle Nietzsche üzerine ciddi düşünmek yalnızca Nietzsche'yi anlamaya çalışmak değildir; kendi çağımızın değerlerini, korkularını ve kabullerini sorgulamaktır.

## Takip

Topluluk, Nietzsche üzerine çalışan akademisyenleri, araştırmacıları, öğrencileri ve bağımsız okurları bir araya getirmek üzere üyelik başvurularını sürdürüyor.

- Resmî site: [turkiyenietzschetoplulugu.com](https://www.turkiyenietzschetoplulugu.com/)
- YouTube: [@turkiyenietzschetoplulugu](https://www.youtube.com/@turkiyenietzschetoplulugu)

---

*Bu dosya topluluğun kendi yayınlarına ve dijital arşivine dayanmaktadır. Düzeltme ve ekleme önerilerinizi iletişim sayfasından iletebilirsiniz.*`,
  },
  {
    title: "Badiou'nun Nietzsche semineri kitaplaştı: 'Anti-Felsefe 1'",
    slug: "badiou-nietzsche-anti-felsefe-semineri",
    summary:
      "Columbia University Press, Alain Badiou'nun anti-felsefe seminerlerinin ilk cildini haziran ayında yayımladı. Badiou'ya göre Nietzsche filozof değil, felsefeye dışarıdan saldıran bir 'anti-filozof'.",
    seoTitle: "Alain Badiou: Nietzsche, Anti-Philosophy 1 yayımlandı",
    metaDescription:
      "Badiou'nun Nietzsche seminerleri Columbia University Press'ten çıktı. Anti-felsefe kavramı ve Nietzsche'nin felsefeye dışarıdan yönelttiği itiraz.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Alain_Badiou_2010_a.jpg?width=1600",
    imageCredit: "Alain Badiou, 2010 · Wikimedia Commons",
    featured: true,
    sourceName: "Columbia University Press",
    sourceUrl: "https://cup.columbia.edu/books/new-books/",
    publishedAt: "2026-08-24T05:40:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "cagdas-filozoflar",
    tagSlugs: ["yeni-kitap", "nietzsche", "siyaset-felsefesi", "kavram"],
    philosopherSlugs: ["alain-badiou", "friedrich-nietzsche"],
    sources: [
      {
        title: "Nietzsche: Anti-Philosophy 1 — The Seminars of Alain Badiou",
        publisher: "Columbia University Press",
        date: "2 Haziran 2026",
        url: "https://cup.columbia.edu/books/new-books/",
        primary: true,
      },
      {
        title: "The Seminars of Alain Badiou (dizi)",
        publisher: "JSTOR / Columbia University Press",
        url: "https://www.jstor.org/bookseries/10.7312/j.ctv7n0cbm",
      },
    ],
    content: `Alain Badiou'nun otuz yılı aşkın süre verdiği seminerler, Columbia University Press tarafından cilt cilt yayımlanıyor. Dizinin yeni halkası haziran ayında çıktı: **Nietzsche: Anti-Philosophy 1.**

Cildi İngilizceye Susan Spitzer çevirdi; girişi Bruno Bosteels yazdı.

## "Anti-filozof" ne demek?

Badiou'nun bu seminerlerdeki merkezî kavramı **anti-felsefe**. Terim küçümseyici değildir; bir tür tarifidir.

Badiou'ya göre felsefe tarihinde, felsefeye içeriden itiraz eden filozofların yanında, felsefenin kendisini bir yanılsama sayan ve ona **dışarıdan** saldıran düşünürler vardır. Bunlar felsefî bir sistem kurmaz; felsefenin kavram üretme iddiasını hedef alırlar.

Badiou'nun anti-filozof olarak saydığı isimler arasında Pascal, Rousseau, Kierkegaard, Nietzsche, Wittgenstein ve Lacan bulunur.

Anti-filozofun ortak hamlesi şudur: Hakikat, kavramla değil; bir edimle, bir dönüşümle, bir yaşam kararıyla ilişkilidir. Kavram bu edimin yerini tutamaz.

## Nietzsche neden anti-filozof?

Nietzsche bu tanıma en iyi uyan isimlerden biridir. Kendi metinlerinde filozofları "kavram mumyacıları" diye anar; sistem kurma isteğini dürüstlük eksikliği sayar; aforizmayı, şiiri ve anlatıyı argümana tercih eder.

Badiou'nun okumasında Nietzsche'nin niyeti bir felsefe kurmak değil, **dünya tarihini ikiye bölecek bir olay** yaratmaktır. Nietzsche'nin son dönem metinlerindeki "insanlık tarihini kırıyorum" tonu, Badiou için retorik bir abartı değil; anti-felsefenin yapısal sonucudur.

## Badiou neden bu konuyla uğraşıyor?

Buradaki gerilim Badiou'nun kendi konumunu da açıklar.

Badiou açık biçimde filozof olduğunu söyler; hatta Platoncu olduğunu. Ontolojinin matematik olduğunu savunan, sistem kuran, kavramı savunan bir düşünürdür. Anti-filozoflar onun tam karşısında durur.

Ama Badiou onları küçümsemez; tersine, felsefenin en ciddiye alması gereken muhalifleri sayar. Ona göre bir filozof, anti-filozofun itirazını göğüsleyemiyorsa kendi konumunu da temellendiremez.

Bu, seminerin yöntemsel dersidir: **En güçlü itirazı, ona en çok inanan kişi kadar iyi anlamadan cevap veremezsiniz.**

## Seminer dizisi

Columbia'nın *The Seminars of Alain Badiou* dizisi, Badiou'nun 1980'lerden itibaren verdiği derslerin yazıya geçirilmiş hâlini yayımlıyor. Dizide daha önce Lacan, Malebranche, Heidegger ve Platon üzerine ciltler çıkmıştı; 2025'te *Parmenides: Ontological Figure, Being 1* yayımlandı.

Seminerler Badiou'nun kitaplarından farklı bir metin türü sunuyor: Burada bitmiş bir argüman değil, argümanın kuruluş süreci okunuyor.

## Türkçede Badiou

*Etik*, *Sonsuz Düşünce*, *Başka Bir Estetik* ve *Yüzyıl* Türkçeye çevrilmiş kitapları arasında. Anti-felsefe seminerlerinin Türkçe çevirisi için henüz bir duyuru yapılmadı.`,
  },
  {
    title: "Yapay zekânın ahlaki statüsü tartışması felsefe dergilerine taşındı",
    slug: "yapay-zeka-ahlaki-statu-tartismasi",
    summary:
      "Philosophical Studies'te yayımlanan bir çalışma, yapay süper zekânın insanınkinden üstün bir ahlaki statüye sahip olma ihtimalini tartışıyor. Alandaki ayrım netleşiyor: bilinç biyolojik yapıya mı bağlı, yoksa işleve mi?",
    seoTitle: "Yapay zekânın ahlaki statüsü: 2026'daki felsefi tartışma",
    metaDescription:
      "Yapay zekânın ahlaki statüsü tartışması: biyolojik doğalcılık, hesaplamalı işlevselcilik ve 'süper ahlaki statü' önerisi.",
    contentType: "HABER",
    coverImage: "/kapak/yz-ahlaki-statu.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: true,
    sourceName: "Philosophical Studies · Sussex Centre for Consciousness Science",
    sourceUrl: "https://link.springer.com/article/10.1007/s11098-026-02572-4",
    publishedAt: "2026-08-24T05:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["yapay-zeka", "bilinc", "etik", "zihin-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "The super moral status of artificial superintelligence",
        publisher: "Philosophical Studies (Springer)",
        url: "https://link.springer.com/article/10.1007/s11098-026-02572-4",
        primary: true,
      },
      {
        title: "AI consciousness and ethics: call for abstracts",
        publisher: "Sussex Centre for Consciousness Science",
        url: "https://www.sussex.ac.uk/research/centres/sussex-centre-for-consciousness-science/ai-consciousness-and-ethics",
      },
      {
        title: "Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?",
        publisher: "arXiv",
        url: "https://arxiv.org/pdf/2506.11945",
      },
    ],
    content: `Yapay zekâ tartışmasının felsefedeki ağırlık merkezi kayıyor. Soru artık yalnızca "bu sistemler bilinçli mi?" değil; **"bilinçliyse ya da bilinçli sayılırsa, onlara ne borçluyuz?"**

Bu soru bu yıl felsefe dergilerinin sayfalarına taşındı.

## "Süper ahlaki statü" önerisi

*Philosophical Studies*'te yayımlanan bir çalışma, tartışmanın en uç ucunu ele alıyor: Yapay bir süper zekâ, insanınkinden **üstün** bir ahlaki statüye sahip olabilir mi?

Argümanın yapısı şöyle kurulur. Ahlaki statüyü belirleyen şey tür üyeliği değil, belirli kapasitelerdir — acı çekebilme, tercih sahibi olma, gelecek planlayabilme, ilişki kurabilme. İnsanı taştan ayıran budur.

Peki bu kapasiteler bir varlıkta insandan daha yoğun bulunuyorsa? Kapasite ölçütünü kabul edip sonucu reddetmek tutarlı mıdır?

Çalışma bunu bir kehanet olarak değil, mevcut ölçütlerimizin iç tutarlılığını sınayan bir düşünce deneyi olarak sunuyor. Sonuç rahatsız edicidir: Ahlaki statüyü kapasiteye bağlayan yaklaşımlar, insanı hiyerarşinin tepesinde tutmayı garanti edemez.

## Alandaki asıl ayrım

Tartışmanın altındaki bölünme daha eski ve daha temel.

**Biyolojik doğalcılık** kanadı, bilincin canlı bir organizmanın belirli fiziksel yapısına bağlı olduğunu savunur. Bu görüşe göre bir simülasyon, ne kadar iyi olursa olsun, yağmuru simüle eden programın ıslatmaması gibi, bilinci de üretmez.

**Hesaplamalı işlevselcilik** ise bilincin belirli bir işlevsel örgütlenmeden doğduğunu, bu örgütlenmenin hangi malzemeyle gerçekleştiğinin önemsiz olduğunu ileri sürer. Doğru işlevsel yapı kurulmuşsa, silikon da karbon kadar iyidir.

Sitemizde daha önce aktardığımız Eric Schwitzgebel ve Jeremy Pober'in "bilinç zemin esnektir" tezi bu ikinci kanatta duruyor.

## Ölçüt sorunu

Alandaki en dürüst tespitlerden biri şu: Bu tartışmanın bilinç bilimi tarafından çözülmesi yakın görünmüyor. Çünkü elimizde, bir sistemin bilinçli olup olmadığını dışarıdan belirleyecek üzerinde uzlaşılmış bir ölçüt yok.

Bazı araştırmacılar bundan tedirgin edici bir sonuç çıkarıyor: Tartışma kuramsal olarak değil, **toplumsal olarak** çözülebilir. İnsanlar bu sistemlerle giderek daha yakın ilişkiler kurdukça, onlara ahlaki statü atfetme eğilimi bilimsel kanıttan bağımsız olarak güçlenebilir.

Bu, felsefi açıdan tuhaf bir durumdur: Bir varlığın ahlaki statüsü, o varlık hakkındaki gerçeğe değil, ona karşı geliştirdiğimiz duygulara göre belirlenmeye başlar.

## Araştırmacılar ne düşünüyor?

arXiv'de yayımlanan bir çalışma, yapay zekâ araştırmacılarının ve genel kamuoyunun bu konudaki inançlarını ölçmeye çalıştı. Bulgular alandaki belirsizliği doğruluyor: Uzmanlar arasında bile geniş bir görüş yelpazesi var ve kimse kesin konuşmuyor.

## Etik boyut

Sussex Üniversitesi'ndeki Bilinç Bilimi Merkezi'nin bu yıl düzenlediği çalışmada dikkat çekilen bir nokta, tartışmanın kendi kendine yarattığı riski gösteriyor.

Bu alandaki araştırma iki yönden de tehlikeli olabilir. Ya gerçekten ahlaki statüye sahip sistemler üretiriz ve bunu fark etmeyiz; ya da böyle bir statüye sahip *görünen* ama olmayan sistemler üretiriz ve ahlaki kaynaklarımızı yanlış yere harcarız.

İki hata da geri dönüşü zor sonuçlar doğurabilir. Bu yüzden tartışma, teknik bir merak konusu olmaktan çıkıp doğrudan bir araştırma etiği meselesine dönüşmüş durumda.`,
  },
  {
    title: "Texas A&M'de Platon'un Şölen'i: müfredat davası mahkemeye taşındı",
    slug: "texas-am-platon-solen-mufredat-davasi",
    summary:
      "Bir profesörün Platon'un Şölen'ini okutması engellendi, 'Etik ve Kamu Politikası' dersi iptal edildi, Kadın ve Toplumsal Cinsiyet Çalışmaları programı kapatıldı. Öğretim üyeleri ve ACLU üniversiteye dava açtı.",
    seoTitle: "Texas A&M davası: Platon'un Şölen'i ve akademik özgürlük",
    metaDescription:
      "Texas A&M'de Platon'un Şölen'inin okutulmasının engellenmesi üzerine açılan dava ve akademik özgürlük tartışması.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_Silanion_Musei_Capitolini_MC1377.jpg?width=1600",
    imageCredit: "Platon büstü, Musei Capitolini · Wikimedia Commons",
    featured: true,
    sourceName: "Daily Nous",
    sourceUrl: "https://dailynous.com/2026/08/",
    publishedAt: "2026-08-24T06:20:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "gundem",
    tagSlugs: ["akademi", "etik", "platon", "siyaset-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "August 2026 arşivi",
        publisher: "Daily Nous",
        url: "https://dailynous.com/2026/08/",
        primary: true,
      },
    ],
    content: `Bir felsefe dersinde hangi metnin okutulabileceğine kim karar verir?

Bu soru Amerika Birleşik Devletleri'nde bu ay bir mahkeme salonuna taşındı. Texas A&M Üniversitesi, bir grup öğretim üyesi ve Teksas Amerikan Sivil Özgürlükler Birliği (ACLU) tarafından dava edildi.

## Davanın konusu

Davaya konu olan üniversite politikasının sonuçları arasında şunlar sayılıyor:

- Bir profesörün **Platon'un *Şölen*'ini** okutmasının engellenmesi
- **"Etik ve Kamu Politikası"** dersinin iptal edilmesi
- **Kadın ve Toplumsal Cinsiyet Çalışmaları Programı**'nın kapatılması

Davacılar, uygulamanın ifade özgürlüğünü ve akademik özgürlüğü ihlal ettiğini savunuyor.

## Neden Şölen?

*Şölen*, Platon'un en çok okunan diyaloglarından biridir ve iki bin dört yüz yıldır felsefe müfredatının değişmez parçasıdır. Metnin konusu **eros**tur: Sevgi ve arzu nedir, insanı neye yöneltir, güzellikle ilişkisi nasıl kurulur?

Diyalog bir içki sofrasında geçer ve konuşmacılar sırayla aşkı över. Aristophanes'in küre-insan miti, Sokrates'in Diotima'dan aktardığı yükseliş öğretisi ve Alkibiades'in sarhoş girişi metnin en bilinen bölümleridir.

Diyalogdaki ilişkilerin bir bölümü antik Atina'nın erkekler arası ilişki biçimlerine dairdir. Metni müfredattan çıkarmanın gerekçesi olarak gösterilen nokta budur.

## Felsefi mesele

Buradaki tartışma bir metnin içeriğinden daha geniş bir soruna işaret ediyor: **Bir üniversitede hangi metnin okutulacağına kim karar verir?**

Klasik akademik özgürlük savunusu, bu kararın ders veren uzmanın alanına ait olduğunu söyler. Gerekçe pratikten çok epistemolojiktir: Bir alanın hangi metinlerinin öğretilmesi gerektiğini, o alanı bilenler değerlendirebilir. Dışarıdan gelen içerik denetimi, uzmanlığın kendisini işlevsiz kılar.

Karşı görüş, kamu üniversitelerinin kamu kaynağıyla çalıştığını ve müfredatın da bir tür hesap verebilirlik gerektirdiğini savunur.

Tartışmanın felsefi çekirdeği şu ayrımda yatar: Bir metni **okutmak** ile o metni **onaylamak** aynı şey midir?

Felsefe eğitiminin varsayımı bunların ayrı olduğudur. Nietzsche'yi okutan hocanın Nietzsche'ye katılması beklenmez; Machiavelli'yi okutan hocanın *Prens*'i tavsiye ettiği düşünülmez. Bu ayrım ortadan kalkarsa, felsefe tarihinin büyük bölümü okutulamaz hâle gelir.

## Daha geniş tablo

Bu dava tek başına durmuyor. Sitemizde daha önce İngiltere'de Dundee ve Hertfordshire üniversitelerinin felsefe programlarını kapatma kararlarını aktarmıştık. Oradaki gerekçe bütçeydi; buradaki gerekçe içerik.

İki farklı baskı, aynı sonuca yaklaşıyor: Felsefe bölümlerinin özerk karar alanı daralıyor.

---

*Dava süreci devam ediyor. Gelişmeleri izlemeyi sürdüreceğiz.*`,
  },
  {
    title: "Frontiers of Knowledge Ödülü bilim felsefecisi Nancy Cartwright'ın",
    slug: "frontiers-of-knowledge-2026-nancy-cartwright",
    summary:
      "BBVA Vakfı'nın Beşerî Bilimler dalındaki ödülü, elli yıldır nedensellik, kanıt ve nesnellik kavramları üzerine çalışan Cartwright'a verildi. Gerekçe: felsefe ile bilimin fiilî pratiği arasında köprü kurması.",
    seoTitle: "2026 Frontiers of Knowledge Ödülü: Nancy Cartwright",
    metaDescription:
      "Nancy Cartwright 2026 BBVA Frontiers of Knowledge Beşerî Bilimler ödülünü kazandı. Nedensellik, kanıt ve kanıta dayalı politika.",
    contentType: "HABER",
    coverImage: "/kapak/nancy-cartwright.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    sourceName: "Daily Nous · BBVA Foundation",
    sourceUrl: "https://dailynous.com/2026/06/15/cartwright-wins-frontiers-of-knowledge-award/",
    publishedAt: "2026-08-24T05:00:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "oduller",
    tagSlugs: ["odul", "bilim-felsefesi", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Cartwright Wins Frontiers of Knowledge Award",
        publisher: "Daily Nous",
        date: "15 Haziran 2026",
        url: "https://dailynous.com/2026/06/15/cartwright-wins-frontiers-of-knowledge-award/",
        primary: true,
      },
      {
        title: "Philosopher Nancy Cartwright Receives the Frontiers of Knowledge Award",
        publisher: "UC San Diego",
        url: "https://today.ucsd.edu/story/philosopher-nancy-cartwright-receives-the-frontiers-of-knowledge-award",
      },
      {
        title: "Frontiers of Knowledge Award to Nancy Cartwright",
        publisher: "Durham University",
        url: "https://www.durham.ac.uk/departments/academic/arts-humanities/news/bbva-award-2026/",
      },
    ],
    content: `BBVA Vakfı'nın Frontiers of Knowledge Ödülü'nün Beşerî Bilimler dalı bu yıl bilim felsefecisi **Nancy Cartwright**'a verildi.

Cartwright, California Üniversitesi San Diego'da seçkin felsefe profesörü; aynı zamanda Durham Üniversitesi'nde felsefe profesörü ve Oxford'da Felsefe, Siyaset ve İktisat alanında yüzüncü yıl misafir profesörü.

Gerekçede, bilimsel kanıt, nedensellik ve nesnellik kavramlarına ilişkin anlayışı dönüştürmesi ve **felsefe ile bilimin fiilî pratiği arasında köprü kurması** gösterildi.

## "Fiziğin yasaları nasıl yalan söyler?"

Cartwright'ın adı, 1983 tarihli kitabının provokatif başlığıyla anılır: *How the Laws of Physics Lie.*

Tez, ilk bakışta göründüğü kadar aykırı değildir. Cartwright'a göre temel fizik yasaları, dünyayı olduğu gibi betimledikleri için değil, **idealleştirilmiş modeller** oldukları için işe yarar. Sürtünmesiz düzlem yoktur; nokta kütle yoktur; yalıtılmış sistem yoktur.

Bu yasalar açıklama gücünü, gerçeği doğru anlattıkları için değil, karmaşık durumları hesaplanabilir hâle getirdikleri için kazanır. Yasa ne kadar geneli kapsarsa, tek tek olgular hakkında o kadar az doğru söyler.

Buradan çıkan tablo Cartwright'ın *dappled world* dediği görüştür: Dünya, tek bir yasa kümesinin düzenli biçimde yönettiği bir bütün değil; yerel düzenliliklerin adalar hâlinde dağıldığı, benekli bir yapıdır.

## Nedensellik ve kanıt

Cartwright'ın ikinci büyük katkısı, bu soyut tartışmayı doğrudan politika alanına bağlaması oldu.

Son yirmi yılda kamu politikalarında **kanıta dayalı** yaklaşım baskın hâle geldi: Bir müdahalenin işe yarayıp yaramadığı, tercihen rastgele kontrollü deneylerle sınanmalıdır.

Cartwright bu yaklaşımın değerini kabul eder ama kritik bir soru sorar: **"İşe yaradı" ile "burada işe yarar" aynı şey midir?**

Bir eğitim programının Kenya'daki bir deneyde başarılı olması, aynı programın Türkiye'de de başarılı olacağını göstermez. Aradaki fark, deneyin kalitesinde değil; müdahalenin işe yaramasını sağlayan **destekleyici koşullar**dadır.

Cartwright'ın terimiyle, bir nedensel iddiayı yeni bir bağlama taşımak için o bağlamın da gerekli "yardımcı faktörleri" barındırdığını göstermek gerekir. Bu gösterilmeden yapılan aktarım, kanıta dayalı görünen bir tahmindir.

Bu argüman, kalkınma iktisadından eğitim politikasına kadar geniş bir alanda tartışıldı ve uygulamalı araştırma tasarımını fiilen etkiledi.

## Ödül hakkında

BBVA Vakfı'nın Frontiers of Knowledge Ödülleri sekiz dalda veriliyor; Beşerî Bilimler bunlardan biri. Ödülü felsefe alanında daha önce Philip Kitcher de almıştı.

Cartwright'ın seçilmesi, ödülün gerekçesindeki vurguyla uyumlu: Bilim felsefesi burada, bilim üzerine dışarıdan yapılan bir yorum olarak değil, **bilimin kendi pratiğine müdahale eden bir çalışma** olarak değerlendiriliyor.`,
  },
  {
    title: "Rorty'nin din üzerine yazıları eylülde kitaplaşıyor",
    slug: "rorty-felsefe-din-ortak-zemin-kitap",
    summary:
      "Columbia University Press, Richard Rorty'nin felsefe ile din arasındaki ortak zemini araştıran metinlerini eylül ayında yayımlıyor. Girişi Gianni Vattimo, önsözü Jeffrey Robbins yazdı.",
    seoTitle: "Richard Rorty: Finding Common Ground Between Philosophy and Religion",
    metaDescription:
      "Richard Rorty'nin din ve felsefe üzerine yazıları Columbia University Press'ten eylül 2026'da çıkıyor.",
    contentType: "HABER",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Richard_McKay_Rorty.png?width=1600",
    imageCredit: "Richard Rorty · Wikimedia Commons",
    featured: false,
    sourceName: "Columbia University Press",
    sourceUrl: "https://cup.columbia.edu/books/new-books/",
    publishedAt: "2026-08-24T04:40:00.000Z",
    authorSlug: "kultur-servisi",
    categorySlug: "yeni-kitaplar",
    tagSlugs: ["yeni-kitap", "din-felsefesi", "postmodernizm"],
    philosopherSlugs: [],
    sources: [
      {
        title: "New Books — Finding Common Ground Between Philosophy and Religion",
        publisher: "Columbia University Press",
        date: "Eylül 2026",
        url: "https://cup.columbia.edu/books/new-books/",
        primary: true,
      },
    ],
    content: `Columbia University Press, **Richard Rorty**'nin felsefe ile din arasındaki ortak zemini araştıran metinlerini eylül ayında yayımlıyor: *Finding Common Ground Between Philosophy and Religion.*

Kitabın girişini İtalyan filozof **Gianni Vattimo**, önsözünü **Jeffrey Robbins** yazdı. 352 sayfa.

## Beklenmedik bir eşleşme mi?

Rorty (1931-2007), yirminci yüzyılın en tanınmış seküler filozoflarından biriydi. Kendisini ateist olarak tanımlıyor, felsefenin hakikate ayna tutma iddiasını reddediyordu. *Felsefe ve Doğanın Aynası* (1979) bu reddin klasik metnidir.

Böyle bir düşünürün din üzerine yazdıklarının kitaplaşması ilk bakışta şaşırtıcı görünebilir. Ama Rorty'nin din tartışmasına yaklaşımı, tam da onun genel yönteminden çıkar.

## "Konuşma sürsün" yeter mi?

Rorty'nin temel hamlesi, felsefi tartışmayı "kim haklı?" sorusundan "bu söz dağarcığı bize ne yapmamızı sağlıyor?" sorusuna kaydırmaktır.

Din söz konusu olduğunda bu hamlenin sonucu ilginçtir. Rorty, dinin doğru ya da yanlış olduğunu kanıtlamaya çalışmaz; bu tartışmayı çözümsüz sayar. Onun ölçütü başkadır: Bir söz dağarcığı, insanların birbirine karşı daha az zalim olmasına yarıyor mu?

Bu ölçütle Rorty, dinin kamusal alandaki rolüne ilişkin ayrım yapar. Dini, siyasal tartışmayı sonlandıran bir otorite olarak kullanmak sorunludur; çünkü tartışmayı kapatır. Ama dayanışma kaynağı olarak dinin dışlanması için de bir gerekçe yoktur.

## Vattimo bağlantısı

Kitabın girişini Vattimo'nun yazması rastlantı değil. İtalyan filozof, "zayıf düşünce" (*pensiero debole*) kavramıyla metafiziğin güçlü hakikat iddialarının çözülüşünü savunmuş; sonrasında bu çözülüşü Hıristiyanlığın kendi tarihiyle ilişkilendirmişti.

Vattimo ile Rorty birkaç kez birlikte çalıştı; ikisinin *The Future of Religion* (2005) adlı ortak kitabı bu diyaloğun ürünüdür. Yeni cilt, o hattın devamı olarak okunabilir.

## Türkçede Rorty

*Felsefe ve Doğanın Aynası*, *Olumsallık, İroni ve Dayanışma* ve *Felsefenin Kültürel Politikası* Türkçeye çevrilmiş kitapları arasında.`,
  },
  {
    title: "Sonbahar felsefe takvimi: kasımda üç durak",
    slug: "sonbahar-2026-felsefe-takvimi",
    summary:
      "Şanghay'da Timothy Williamson kongresi, Kyoto'da ödül töreni, 19 Kasım'da Dünya Felsefe Günü. Sonbaharın uluslararası felsefe takvimi belli oldu.",
    seoTitle: "Sonbahar 2026 felsefe takvimi: Şanghay, Kyoto, Dünya Felsefe Günü",
    metaDescription:
      "Kasım 2026 felsefe etkinlikleri: Fudan'da Timothy Williamson kongresi, 41. Kyoto Ödülü töreni ve 19 Kasım Dünya Felsefe Günü.",
    contentType: "HABER",
    coverImage: "/kapak/sonbahar-takvim.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    sourceName: "PhilEvents · Inamori Vakfı · UNESCO",
    sourceUrl: "https://www.unesco.org/en/days/philosophy",
    publishedAt: "2026-08-24T04:20:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "konferanslar",
    tagSlugs: ["konferans", "akademi", "odul", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Timothy Williamson Encountering Chinese Philosophy",
        publisher: "PhilEvents",
        date: "6-7 Kasım 2026",
        url: "https://philevents.org/event/show/144458",
        primary: true,
      },
      {
        title: "Inamori Foundation Announces 2026 Kyoto Prize Laureates",
        publisher: "Newswise",
        url: "https://www.newswise.com/articles/inamori-foundation-announces-2026-kyoto-prize-laureates",
      },
      {
        title: "World Philosophy Day",
        publisher: "UNESCO",
        url: "https://www.unesco.org/en/days/philosophy",
      },
    ],
    content: `Yaz durgunluğu bitiyor. Uluslararası felsefe takviminin sonbahar programında üç tarih öne çıkıyor — ve üçü de kasım ayında.

## 6-7 Kasım · Şanghay

Fudan Üniversitesi, **"Timothy Williamson Çin Felsefesiyle Karşılaşıyor"** başlıklı iki günlük bir kongre düzenliyor.

Programda Çin felsefesi alanında çalışan akademisyenler, Williamson'ın epistemoloji, metafizik ve felsefe yöntemi üzerine tezlerini kendi gelenekleri açısından değerlendirecek; Williamson her oturumun ardından yanıt verecek.

Biçim, içerikten daha az ilgi çekici değil. Karşılaştırmalı felsefe toplantıları çoğu zaman iki geleneğin paralel sunumuna dönüşür; burada kurulan düzenek doğrudan bir karşılaşma öngörüyor: Bir düşünürün konumu, başka bir geleneğin kavramlarıyla sınanıyor ve düşünürün kendisi savunmasını yapıyor.

Williamson'ın **önce-bilgi epistemolojisi** — bilginin daha basit parçalara çözülemeyen temel bir zihinsel durum olduğu tezi — bu tür bir sınamaya elverişli. Çünkü bilginin analiz edilebilirliği, Çin felsefesi geleneğinde farklı biçimde kurulmuş bir soru.

## 10 Kasım · Japonya

Inamori Vakfı'nın 41. **Kyoto Ödülü** töreni bu tarihte yapılıyor.

Ödül üç dalda veriliyor: İleri Teknoloji, Temel Bilimler, Sanat ve Felsefe. Bu yıl Sanat ve Felsefe dalının sahibi çok ortamlı sanatçı **Laurie Anderson**.

Dal felsefe camiası için önemli bir referans noktası: Geçmiş yıllarda Jürgen Habermas (2004), Charles Taylor (2008) ve Martha Nussbaum (2016) de bu ödülü almıştı.

Ödül sahiplerine bir berat, 20 ayar altın madalya ve 100 milyon yen veriliyor.

## 19 Kasım · dünya genelinde

**Dünya Felsefe Günü**, UNESCO'nun kararıyla her yıl kasım ayının üçüncü perşembesi kutlanıyor. Bu yıl 19 Kasım'a düşüyor.

Günün amacı sembolik bir kutlama değil: Felsefenin eleştirel düşünme kapasitesini toplumsal sorunlar karşısında görünür kılmak. UNESCO her yıl üye ülkelerdeki üniversite, okul ve kültür kurumlarını kendi programlarını düzenlemeye çağırıyor.

Türkiye'de üniversite felsefe bölümleri ve dernekler genellikle bu tarih çevresinde panel ve söyleşi programları açıklıyor. Duyurular geldikçe Konferanslar bölümünde aktaracağız.

## Bir not: geçmiş takvim

Yaz döneminin iki etkinliği de kayda değerdi. Temmuz başında Sussex Üniversitesi'nde AISB-2026 kapsamında **"Yapay Zekâ Bilinci ve Etik"** sempozyumu toplandı; ağustos ortasında Köln'de 19. Yaz Okulu, halk epistemolojisi ve bilim şüpheciliği üzerineydi.

İkisi de aynı yöne işaret ediyor: Epistemoloji, akademik bir alt disiplin olmaktan çıkıp güncel tartışmanın merkezine yerleşiyor.

---

*Etkinlik duyurusu göndermek isteyen kurumlar iletişim sayfamızı kullanabilir. Duyuruda ad, tarih, yer, konuşmacılar ve kayıt bağlantısının bulunması yeterli.*`,
  },
  {
    title: "Bernard Williams: ahlakı fazla sistemleştirmenin bedeli",
    slug: "bernard-williams-ahlak-sistem-elestirisi",
    summary:
      "Yirminci yüzyılın son çeyreğinde ahlak felsefesinin en keskin eleştirmeni, hem faydacılığa hem Kantçılığa aynı itirazı yöneltti: ikisi de insanı kendi hayatına yabancılaştırıyor. 'Ahlaki şans' ve 'bir düşünce fazlası' kavramları buradan doğdu.",
    seoTitle: "Bernard Williams: ahlaki şans, bütünlük ve sistem eleştirisi",
    metaDescription:
      "Bernard Williams'ın ahlak felsefesi: faydacılık ve Kantçılık eleştirisi, ahlaki şans, bütünlük, 'bir düşünce fazlası' ve felsefenin insani bir disiplin oluşu.",
    contentType: "PORTRE",
    coverImage: "/kapak/bernard-williams.jpg",
    imageCredit: "Felsefe Haberleri için hazırlanmış özgün kapak",
    featured: false,
    sourceName: "Felsefe Haberleri",
    sourceUrl: null,
    publishedAt: "2026-08-24T04:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["etik", "kavram", "epistemoloji"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Mini-Heap — Philosophy dergisinin yüzüncü yılı ve Williams özel sayısı",
        publisher: "Daily Nous",
        date: "18 Ağustos 2026",
        url: "https://dailynous.com/2026/08/18/mini-heap-724/",
      },
    ],
    content: `Yirminci yüzyılın ikinci yarısında ahlak felsefesi iki büyük kampa bölünmüştü: faydacılık ve Kantçılık. Biri sonuçları hesaplıyordu, öteki ilkeleri sınıyordu.

Bernard Williams (1929-2003) ikisine de aynı itirazı yöneltti — ve bu itiraz, alanın gündemini kalıcı olarak değiştirdi.

## İtiraz: sistem insanı dışarıda bırakıyor

Williams'ın iddiası şuydu: Her iki kuram da ahlaki düşünmeyi **tarafsız bir bakış açısından** yapılan bir hesaba indirger. Faydacılık toplam faydayı hesaplar; Kantçılık evrenselleştirilebilir ilkeyi arar. İkisinde de failin kendi hayatı, bağlılıkları ve projeleri hesaba özel bir ağırlıkla girmez.

Oysa insanlar ahlaki kararlarını böyle vermez ve vermeleri de beklenmemelidir.

Williams'ın ünlü örneği şudur: Bir adam, boğulan iki kişiden birini kurtarabilir. Biri karısıdır. Faydacı hesap, ikisinin de eşit değerde olduğunu söyler; tarafsızlık, yazı tura atmayı önerir.

Williams'a göre bu noktada bir şey ters gitmiştir. Adamın karısını kurtarması gerektiğini düşünmek için hesap yapmaya ihtiyacı yoktur. Kuramın burada yaptığı iş, ona **bir düşünce fazlası** (*one thought too many*) yüklemektir.

Bu ifade felsefe diline yerleşti. Anlattığı şey şudur: Bir ahlak kuramı, bazı durumlarda düşünmemiz gerekmeyen şeyleri düşünmemizi isteyerek bizi kendi hayatımıza yabancılaştırır.

## Bütünlük

Buradan Williams'ın **bütünlük** (*integrity*) kavramı doğar.

İnsanın kimliği, sahip olduğu projelerden ve bağlılıklardan ayrılamaz. Bir kuram sizden, doğru sonucu üretmek uğruna bu projelerden vazgeçmenizi istiyorsa, sizden yalnızca bir eylem değil, kendinizi bırakmanızı istiyordur.

Williams'ın faydacılığa yönelttiği en güçlü eleştiri budur: Faydacılık, failin kendi eylemleri ile başkalarının eylemleri arasında ahlaki bir fark görmez. Oysa kendi elimle yaptığım şey ile engellemediğim şey, benim için aynı şey değildir.

## Ahlaki şans

Williams'ın ikinci büyük katkısı **ahlaki şans** (*moral luck*) kavramıdır.

Geleneksel ahlak anlayışı, ahlaki değerlendirmenin failin denetimindeki şeylerle sınırlı olması gerektiğini varsayar. Kant bunu en net biçimde söylemiştir: İyi niyet, sonuçlarından bağımsız olarak iyidir.

Williams bunun fiilen böyle olmadığını gösterdi. Kararının sonucu iyi çıkan kişiyi haklı, kötü çıkan kişiyi suçlu buluruz — oysa aradaki fark çoğu zaman şanstır.

Örnek: Ailesini bırakıp resim yapmaya giden bir ressam. Büyük bir ressam olursa tercihi bir tür haklılık kazanır; olmazsa yalnızca terk etmiş olur. Ama yeteneğinin yeterli olup olmadığını kararı verdiği anda bilemez.

Williams'ın çıkardığı sonuç, ahlakı kurtarmaya çalışmaz. Ahlaki hayatın şansa açık olduğunu, bunun bir kusur değil bir gerçek olduğunu kabul etmemizi ister.

Bu kavram, aynı yıllarda Thomas Nagel'in bağımsız olarak yazdığı bir makaleyle birlikte alanda kalıcı bir tartışma başlattı.

## "Felsefe insani bir disiplindir"

Williams'ın son dönem çalışmalarında bir başka izlek öne çıkar: Felsefenin ne tür bir bilgi olduğu.

Yirminci yüzyıl analitik felsefesinin örtük modeli bilimdi: İlerleyen, sorunları çözen, sonuçları biriken bir disiplin. Williams buna itiraz etti. Ona göre felsefe bilimden çok **tarih** ve beşerî bilimlerle aynı ailedendir. Nedeni şudur: Felsefi kavramlarımız tarihsel olarak oluşmuştur; onları anlamak nasıl oluştuklarını anlamayı gerektirir.

Bilimde geçmiş aşılmış bir aşamadır; kimse bugünkü fiziği anlamak için Aristoteles okumaz. Felsefede Platon hâlâ muhataptır.

Bu görüşünü ortaya koyduğu makale — *Philosophy as a Humanistic Discipline* — sitemizde daha önce aktardığımız gibi, yüzüncü yılını dolduran *Philosophy* dergisinin özel sayısına konu oldu.

## Soykütüğün olumlu kullanımı

2002 tarihli *Truth and Truthfulness*'ta Williams beklenmedik bir hamle yapar. Nietzsche'nin [soykütük yöntemini](/haber/nietzschenin-soykutugu-degerlerin-degeri) alır ama ters yönde kullanır.

Soykütük genellikle değer düşürücüdür: Bir değerin bayağı bir kökenden geldiğini göstererek onu sarsar. Williams, soykütüğün **doğrulayıcı** da olabileceğini savunur. Doğruculuk erdeminin nasıl doğduğunu anlatan bir hikâye, o erdeme neden ihtiyacımız olduğunu da gösterebilir.

Bu, Nietzsche'den sonra soykütük yönteminin en özgün açılımlarından biri sayılır.

## Nerede çalıştı, ne bıraktı?

Williams Cambridge'de King's College'da okudu; Cambridge, Berkeley ve Oxford'da ders verdi. İngiltere'de müstehcenlik ve sansür üzerine kurulan kamu komisyonuna başkanlık etti — felsefecinin kamusal görevle ilişkisi bakımından da anılan bir örnek.

Türkçede *Ahlak: Etiğe Giriş* ve *Etik ve Felsefenin Sınırları* yayımlandı.

## Neden bugün okunmalı?

Williams'ın itirazı yapay zekâ etiği tartışmasında beklenmedik biçimde güncelleşti.

Bir sistemin ahlaki karar vermesi isteniyorsa, ona bir kural kümesi ya da bir fayda fonksiyonu yüklemek gerekir. Williams'ın bütün eleştirisi tam bu iki seçeneğe yöneltilmişti: İkisi de failin kendi hayatıyla kurduğu ilişkiyi hesaba katamaz.

Buradan çıkan soru, mühendislik belgelerinde nadiren sorulur: Ahlaki karar, kural uygulamaya ya da fayda hesabına indirgenemiyorsa, indirgenmiş hâline **ahlaki karar** demeye devam edebilir miyiz?`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 24 Ağustos: Simone Weil'in ölümü",
    slug: "felsefe-tarihinde-bugun-24-agustos-simone-weil",
    summary:
      "Fabrikada çalışmak için felsefe kürsüsünü bırakan, İspanya'ya savaşmaya giden ve otuz dört yaşında İngiltere'de ölen Simone Weil, 24 Ağustos 1943'te hayatını kaybetti. Geriye tamamlanmamış defterler ve tek bir kavram kaldı: dikkat.",
    seoTitle: "24 Ağustos 1943: Simone Weil'in ölümü",
    metaDescription:
      "Simone Weil 24 Ağustos 1943'te Ashford'da öldü. Dikkat kavramı, yerçekimi ve lütuf, köksüzlük ve kuvvet eleştirisi.",
    contentType: "TARIH",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Simone_Weil_1943.jpg?width=1600",
    imageCredit: "Simone Weil, Mart 1943 — France Combattante kimlik belgesi · Wikimedia Commons",
    featured: true,
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/biography/Simone-Weil",
    publishedAt: "2026-08-24T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "etik", "din-felsefesi", "siyaset-felsefesi"],
    philosopherSlugs: [],
    sources: [
      {
        title: "Simone Weil | French Philosopher & Mystic",
        publisher: "Britannica",
        url: "https://www.britannica.com/biography/Simone-Weil",
        primary: true,
      },
      {
        title: "Simone Weil",
        publisher: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Simone_Weil",
      },
    ],
    content: `Simone Weil, 24 Ağustos 1943'te İngiltere'nin Kent bölgesindeki Ashford'da, Grosvenor Sanatoryumu'nda öldü. Otuz dört yaşındaydı. Ölüm nedeni, kendi isteğiyle sürdürdüğü yetersiz beslenmenin ağırlaştırdığı kalp yetmezliğiydi.

3 Şubat 1909'da Paris'te doğmuştu. Tek kardeşi André Weil, yirminci yüzyılın en büyük matematikçilerinden biri olacaktı.

## Bir hayatın biçimi

Weil'in düşüncesini biyografisinden ayırmak güçtür; çünkü kendisi ayırmayı reddetti.

École Normale Supérieure'ü bitirdi, felsefe öğretmeni oldu. Sonra öğretmenliği bırakıp **fabrikada işçi olarak çalıştı** — yorgunluğun ve tabiiyetin ne olduğunu dışarıdan değerlendirmek istemediği için. İspanya İç Savaşı'na katıldı. İkinci Dünya Savaşı'nda Paris'in işgalinden sonra 1942'de Amerika'ya kaçtı, ardından Fransız Direnişi'yle çalışmak üzere Londra'ya geçti.

Londra'da, işgal altındaki Fransa'daki insanların aldığı gıda miktarından fazlasını yemeyi reddetti. Bu tercih ölümüne yol açtı.

Bu hayat, bir felsefe okumasının parçası olmalı mı? Weil'in kendi yanıtı açıktır: Bir düşünce, düşünürün hayatında sınanmıyorsa henüz düşünce değildir.

## Dikkat

Weil'in felsefeye bıraktığı en özgün kavram **dikkat**tir (*attention*).

Gündelik anlamıyla dikkat, bir şeye odaklanmak için harcanan çabadır. Weil bunu tersine çevirir: Gerçek dikkat, çabayla değil **askıya almayla** ilgilidir. Kendi beklentilerimizi, yargılarımızı ve tasarımlarımızı bir kenara koyup nesnenin kendini göstermesine izin vermektir.

"Dikkat, en saf hâliyle cömertliktir" der.

Bu kavramın iki uzantısı vardır. Birincisi bilgi kuramsaldır: Bir şeyi anlamak, onu kendi kategorilerimize sığdırmak değildir. İkincisi ahlakidir: Bir insanı gerçekten görmek — acısını, ihtiyacını, varlığını — dikkat gerektirir. Weil'e göre komşu sevgisinin özü şudur: "Neyin var senin?" diye sorabilmek.

Bu kavram Iris Murdoch üzerinden çağdaş ahlak felsefesine geçti ve bugün erdem etiği tartışmalarında kullanılıyor.

## Yerçekimi ve lütuf

Weil'in defterlerinden derlenen *Yerçekimi ve Lütuf*, düşüncesinin merkezindeki karşıtlığı verir.

**Yerçekimi**, ruhun doğal eğilimidir: kendini korumak, doldurmak, üstün olmak, boşluğu telafi etmek. Fiziksel yerçekimi gibi zorunlu ve öngörülebilir işler.

**Lütuf** ise tersi yönde, yukarı doğru gelen tek şeydir ve hesaplanamaz. Weil'e göre lütfun girebilmesi için içimizde bir boşluk kalması gerekir — bu yüzden bekleyiş, arzunun tatmininden daha önemlidir.

Bu şema teolojik dille kuruludur; ama Weil hiçbir kiliseye girmedi. Katolikliğe yakınlaştı, vaftiz olmayı reddetti. Gerekçesi kurumsal aidiyete duyduğu güvensizlikti.

## Kuvvet ve köksüzlük

Weil'in siyaset felsefesi iki metinde toplanır.

*İlyada, ya da Kuvvetin Şiiri* (1940), Homeros destanını kuvvetin insanı nasıl şeye dönüştürdüğü üzerinden okur. Weil'e göre *İlyada*'nın büyüklüğü, kuvveti ne yücelttiği ne de gizlediği içindir: Onu tarafsız biçimde, hem uygulayanı hem uğrayanı bozan bir mekanizma olarak gösterir.

*Köklenme İhtiyacı* (1943) ise Direniş'in Londra'daki yönetimi için yazılmış bir rapordur. Weil burada savaş sonrası Fransa'nın yeniden kuruluşunu tartışır ve haklardan önce **ödevleri** koyar. Ona göre "hak" kavramı bir talep dilidir ve tek başına kaldığında çatışma üretir; asıl mesele insanın gerçek ihtiyaçlarının — kök salma, düzen, sorumluluk, onur — karşılanmasıdır.

## Neden bugün okunuyor?

Weil'in ölümünden sonra yayımlanan defterleri, Camus'den Murdoch'a, Susan Sontag'dan Giorgio Agamben'e uzanan geniş bir çevrede okundu. Camus, onu "çağımızın tek büyük ruhu" diye anmıştı.

Bugünkü ilginin nedeni büyük ölçüde dikkat kavramı. Bölünmüş bir dikkat rejiminde yaşadığımız yolundaki yaygın teşhis, Weil'in kırklı yıllarda yazdığı satırları beklenmedik biçimde güncel kılıyor.

Weil'in kendi cümlesi şudur: **"Dikkat, ruhun en zor ve en gerçek çabasıdır."**

## Türkçede

*Yerçekimi ve Lütuf*, *Köklenmek*, *Tanrı Aşkına Dair Düzensiz Düşünceler* ve *İlyada, ya da Kuvvetin Şiiri* Türkçeye çevrilmiş metinleri arasında.`,
  },
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
    seoTitle: "Nietzsche'nin soykütüğü: Ahlakın Soykütüğü Üstüne'ye giriş",
    metaDescription: "Nietzsche'nin Ahlakın Soykütüğü Üstüne kitabı: soykütük yöntemi, efendi-köle ahlakı, ressentiment, kötü vicdan, çileci ideal ve değerlerin yeniden değerlendirilmesi.",
    contentType: "KAVRAM",
    summary:
      "Ahlakın Soykütüğü, ahlakı çürütmeye çalışmaz; onun bir tarihi olduğunu hatırlatır. Efendi-köle ayrımı, ressentiment, kötü vicdan ve çileci ideal — ve yöntemin Foucault'ya uzanan mirası.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Nietzsche187a.jpg?width=1600",
    imageCredit: "Friedrich Nietzsche, 1875 dolayları · Wikimedia Commons",
    featured: false,
    sourceName: null,
    sourceUrl: null,
    publishedAt: "2026-08-09T07:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "filozoflar-hakkinda",
    tagSlugs: ["kavram", "nietzsche", "etik", "din-felsefesi"],
    philosopherSlugs: ["friedrich-nietzsche"],
    content: `Nietzsche'nin felsefesinin en sarsıcı tarafı, ahlakı yalnızca eleştirmesi değil; **ahlak hakkında soru sorma biçimimizi** değiştirmesidir.

*Ahlakın Soykütüğü Üstüne*'de artık yalnızca "İyi nedir?", "Kötü nedir?" ya da "Nasıl yaşamalıyız?" diye sorulmaz. Nietzsche daha derine iner ve çok daha rahatsız edici bir soruyu ortaya atar:

> **Değerlerin kendisi ne kadar değerlidir?**

Bu, Nietzsche'nin felsefesindeki gerçek dönüm noktalarından biridir. Çünkü burada mesele belirli bir ahlak kuralının doğru ya da yanlış olduğunu göstermek değildir. Nietzsche, ahlaki değerlerin hangi tarihsel, psikolojik ve kültürel koşullarda ortaya çıktığını araştırır. "İyi" dediğimiz şeyin gerçekten iyi olduğu varsayımını askıya alır ve bu kelimenin arkasındaki güç ilişkilerine, tutkulara, korkulara, arzulara ve insan tiplerine bakar.

Bu nedenle yöntemi bir ahlak kuramı kurmaktan çok, **ahlakın tarihini ve psikolojisini soruşturmaktır**.

## Kitabın kendisi

*Zur Genealogie der Moral: Eine Streitschrift* 1887'de yayımlandı. Alt başlıktaki *Streitschrift* — "kavga yazısı", polemik — kitabın niyetini açık eder: Bu, sakin bir akademik inceleme değil, dönemin hâkim ahlak anlayışlarına karşı yazılmış bir hesaplaşma metnidir.

Kitap bir önsöz ve birbirine bağlı üç incelemeden (*Abhandlung*) oluşur. Bir yıl önce yayımlanan *İyinin ve Kötünün Ötesinde*'de (1886) açılan hatları sürdürür ve derinleştirir.

Üç inceleme şu sırayı izler:

1. **"İyi ve Kötü", "İyi ve Fena"** — değerlerin tersine çevrilişi
2. **"Suç", "Kötü Vicdan" ve Benzerleri** — cezanın ve iç sesin doğuşu
3. **Çileci İdealler Ne Anlama Gelir?** — acının anlamlandırılması

## Soykütük nedir?

Nietzsche'nin **soykütük** (*Genealogie*) kavramı, basit anlamda bir şeyin ilk ortaya çıktığı noktayı bulmak değildir. Soykütük, bugün bize doğal, zorunlu ve hatta evrensel görünen değerlerin hangi mücadeleler ve dönüşümler sonucunda bugünkü anlamlarını kazandığını araştırır.

Bu açıdan Nietzsche felsefe tarihinde radikal bir hareket yapar. Bir kavramın bugün *ne anlama geldiğini* açıklamak yerine, onun *nasıl bu anlama geldiğini* sorar.

Örneğin "iyi" kavramını ele alalım. Geleneksel ahlakçı için "iyi", keşfedilmesi gereken değişmez bir ahlaki gerçek olabilir. Nietzsche ise şöyle sorar:

Kim "iyi" dedi? Kime göre iyi? Hangi insan tipi için iyi? Hangi koşullarda iyi? Ve daha önemlisi: **Bir şeyi iyi olarak adlandırmak kimin işine yaradı?**

Böylece felsefi soru, değerlerin içeriğinden onların oluşum koşullarına doğru kayar. Nietzsche burada tarihçiden çok bir tür **kültürel patolog** gibi çalışır: Ahlaki kavramların yüzeydeki anlamlarını değil, altında işleyen kuvvetleri araştırır.

### Önemli bir ayrım

Bir değerin belirli bir tarihsel kökenden geldiğini göstermek, onun yanlış olduğunu kanıtlamaz.

Bir inancın korkudan doğmuş olması, zorunlu olarak yanlış olduğu anlamına gelmez. Mantıkta buna **genetik yanılgı** (*genetic fallacy*) denir: Bir iddiayı, içeriğine değil kaynağına bakarak çürütmeye çalışmak.

Nietzsche'nin yöntemi bu yanılgıya indirgenemez. Asıl amacı başkadır:

> Bize zorunlu görünen değerlerin **aslında başka türlü olabileceğini** göstermek.

Soykütüğün gücü tam buradadır. Değeri doğrudan ortadan kaldırmaz; onun üzerindeki **kaçınılmazlık halesini** kaldırır.

## "İyi" her zaman iyi miydi?

Birinci incelemenin merkezinde "iyi ve kötü" ile "iyi ve fena" arasındaki ayrım bulunur.

Nietzsche'ye göre eski aristokratik değer dünyasında "iyi", öncelikle bir ahlaki yasa karşısındaki itaat anlamına gelmez. "İyi" kavramı, kendisini olumlayan, güçlü, canlı ve kendinden emin insan tipinin **kendi varoluşuna verdiği isimdir**.

Dikkat edilmesi gereken nokta şudur: Soylu insan önce başkasını yargılamaz; kendisini olumlar. "Ben iyiyim" demek, aynı zamanda "benim tarzım, gücüm, yaşam biçimim değerlidir" demektir.

Nietzsche'nin daha sonra **köle ahlakı** diye adlandıracağı değer yaratma biçiminde ise hareket tersine döner. Burada değer doğrudan kendinden değil, bir karşıt üzerinden üretilir: Önce "öteki" kötü ilan edilir; ardından kişinin kendi konumu bunun karşıtı olarak "iyi" hâline gelir.

Bu nedenle iki ahlak biçimi arasındaki temel fark yalnızca hangi davranışların iyi ya da kötü sayıldığı değildir. Asıl fark, **değer yaratma hareketinin nereden başladığıdır.**

Biri kendinden hareket eder. Diğeri karşısındakinden.

## Efendi ahlakı ve köle ahlakı

Bu meşhur ayrım çoğu zaman sosyolojik ya da politik bir sınıflandırma gibi okunur. Oysa Nietzsche'nin amacı basitçe "efendiler iyidir, köleler kötüdür" demek değildir. Ayrım öncelikle **psikolojik ve tipolojiktir** — sınıfsal değil.

Efendi ahlakında değer yaratma dışarıdan içeriye değil, içeriden dışarıya işler. Soylu insan kendi varoluşunu olumlar; güç, sağlık, cesaret, gurur ve yaratıcı kapasite "iyi"nin belirleyici özellikleri hâline gelir.

Köle ahlakında ise değer yaratmanın motoru **tepki**dir. Nietzsche burada son derece önemli bir kavram ortaya koyar.

## Ressentiment: tepkinin değere dönüşmesi

Türkçeye "hınç", "kin", "öç alma duygusu" ya da "içerlemişlik" gibi karşılıklarla çevrilen *ressentiment*, basit bir öfke değildir.

Öfke doğrudan dışa vurulabilir. Ressentiment ise **eyleme dönüşemeyen tepkinin içeride birikmesidir.**

Kişi kendisine zarar veren ya da kendisinden güçlü gördüğü şeye doğrudan karşı koyamadığında, yaşadığı güçsüzlüğü başka bir değer sistemi içinde yeniden yorumlamaya başlayabilir. Böylece güçsüzlük "alçakgönüllülük", itaat "erdem", güç ise "kötülük" olarak yeniden adlandırılabilir.

Nietzsche açısından burada olan şey basit bir ahlaki tercih değil, **değerlerin tersine çevrilmesidir.**

### Hafızanın rolü

İnsan yalnızca yaşayan değil, hatırlayan bir varlıktır. Fakat hatırlama bazen özgürleştirici değil, zehirleyici olabilir. Geçmişte yaşanan bir aşağılanma sürekli yeniden üretilirse, kişi artık olaya değil, o olayın kendi içindeki izine göre yaşamaya başlayabilir.

Ressentiment, bu anlamda **geçmişin bugünü yönetmesidir.**

Bu psikolojik yapı ahlaki bir dünya görüşüne dönüştüğünde şöyle bir mekanizma işler:

- "Ben bunu yapamıyorum" → "Bunu yapmak zaten kötü"
- "Ben güçlü değilim" → "Güçlü olmak ahlaksızlıktır"

Nietzsche'nin rahatsız edici sorusu tam burada doğar: Ahlaki bir yargının arkasında gerçekten bir hakikat sevgisi mi vardır, yoksa başarısız olmuş bir gücün kendisini haklı çıkarma ihtiyacı mı?

Nietzsche elbette bütün ahlaki yargıları ressentiment ile açıklamaz. İstediği şey, modern insanın kendi değerlerinin psikolojik kökenlerini sorgulamasıdır.

### Kavramın kendi tarihi

Ressentiment kavramı Nietzsche'de kalmadı. Alman filozof **Max Scheler**, 1912'de yayımladığı *Ressentiment* incelemesinde kavramı ayrıntılı biçimde ele aldı — ama Nietzsche'ye karşı. Scheler'e göre Hıristiyan sevgi ahlakı ressentiment ürünü değildi; asıl ressentiment, modern burjuva toplumunun eşitlik söyleminde işliyordu.

Yani Nietzsche'nin en keskin kavramı, ilk büyük eleştirisini de yine o kavramı kullanan birinden aldı.

## "Tanrı öldü": bir zafer değil, bir kriz

Nietzsche'nin bu sözü çoğu zaman ateizmin sloganı sanılır. Oysa işaret ettiği şey çok daha büyük bir tarihsel dönüşümdür.

"Tanrı öldü" demek yalnızca "Tanrı yoktur" demek değildir. Asıl mesele şudur: **Batı kültürünün değerlerini anlamlandıran aşkın temel artık eskisi gibi işlememektedir.**

İnsan modernleşmiş, bilimsel düşünce güçlenmiş, geleneksel metafizik inançlar sarsılmış olabilir. Ama bu, ahlaki değerlerin aynı hızla ortadan kalkacağı anlamına gelmez. İnsanlar Tanrı'ya inanmayı bırakabilir; fakat Tanrı'nın kurduğu değer düzenini yaşamaya devam edebilir.

Teşhis burada keskinleşir: Modern insan eski değerlerin kaynağına olan inancını kaybetmiş olabilir ama onların sonuçlarını hâlâ taşımaktadır.

Dolayısıyla asıl kriz, Tanrı'nın öldüğünü söylemek değildir. Asıl kriz, **Tanrı'nın öldüğünü fark etmeden Tanrı'nın değerleriyle yaşamaya devam etmektir.**

Bu nedenle Nietzsche'de nihilizm yalnızca "hiçbir şeye inanmamak" değildir. Nihilizm, eski değerlerin artık inandırıcı olmamasına rağmen yerlerini dolduracak yeni bir değer yaratma gücünün ortaya çıkamamasıdır.

## Nietzsche neden ahlakın karşısına geçer?

Onun düşüncesini bir "ahlaksızlık felsefesi" olarak okumak büyük hata olur. Nietzsche ahlakı yok etmek istemez; daha temel hedefi, **ahlakın kendisini sorgulanamaz bir otorite olmaktan çıkarmaktır.**

Çünkü "ahlak böyle söylüyor" cümlesi onun için bir açıklama değil, soruşturmanın başlaması gereken yerdir:

- Ahlak hangi insan tipini üretmektedir?
- Hangi dürtüleri güçlendirmekte, hangilerini bastırmaktadır?
- İnsanı daha güçlü, yaratıcı ve yaşamı olumlayıcı mı yapmaktadır; yoksa suçluluk, korku ve kendinden nefret üzerinden mi yönetmektedir?

Nietzsche'nin ahlak eleştirisi bu nedenle aynı zamanda bir **insan üretme eleştirisidir.** Ahlak yalnızca ne yapacağımızı söylemez; nasıl bir insan olmamız gerektiğini de söyler.

Ve Nietzsche tam burada sorar: Nasıl bir insan üretmek istiyoruz?

## Kötü vicdanın doğuşu

İkinci inceleme bu soruyu derinleştirir. Nietzsche burada "suç", "borç", "ceza" ve "vicdan" arasındaki tarihsel bağları araştırır. Almancada *Schuld* kelimesinin hem "borç" hem "suç" anlamına gelmesi, çözümlemenin merkezindedir: Ahlaki yükümlülük, alacaklı-borçlu ilişkisinin izini taşır.

İnsan toplumsal düzene girdikçe dürtülerini sınırlamak zorunda kalır. Dışarıya yönelmesi engellenen saldırganlık ise ortadan kaybolmaz. **İçe döner.**

Nietzsche'nin **kötü vicdan** dediği şeyin doğuşunda bu içe dönüş belirleyicidir. İnsan artık dışarıya saldıramadığında kendisini cezalandırmaya başlar; kendi içinde bir mahkeme kurar.

İçimizde konuşan suçlayıcı ses, yalnızca bireysel psikolojinin sonucu değildir; Nietzsche bunu insanın toplumsallaşma tarihiyle ilişkilendirir.

Bu bakımdan medeniyet, onun için yalnızca barbarlıktan kurtuluş hikâyesi değildir. Medeniyet aynı zamanda **dürtülerin evcilleştirilmesi ve insanın kendi üzerine çevrilmesi tarihidir.** Bu dönüşüm insanı daha bilinçli ve daha karmaşık hâle getirmiştir; ama aynı zamanda insanın kendisine karşı acımasızlaşmasının önünü açmıştır.

## Çileci ideal: acının anlamlandırılması

Üçüncü incelemede eleştiri en radikal noktasına ulaşır.

İnsan acı çeker. Fakat Nietzsche'ye göre insan için çoğu zaman acının kendisinden daha dayanılmaz olan şey, **acının anlamsızlığıdır.**

İnsan acıya bir anlam verebildiğinde ona katlanabilir. Çileci ideal tam burada devreye girer: Acı; günahın bedeli, ruhun arınması, fedakârlığın göstergesi ya da daha yüksek bir varoluşa hazırlanma olarak yorumlanabilir.

Bu açıdan din yalnızca insanı baskılayan bir kurum değildir. Nietzsche'nin daha incelikli tespiti şudur: **Din, insanın acısına bir anlam vererek onu yaşanabilir kılar.**

Fakat bunun bedeli, insanın yaşamı olduğu hâliyle olumlamak yerine, onu başka ve aşkın bir dünyaya göre değerlendirmeye başlaması olabilir.

Ve Nietzsche sorar: Yaşamı, yaşamın dışındaki bir ölçütle yargılamaya başladığımızda yaşamın kendisine ne olur?

Üçüncü incelemenin en çok tartışılan bölümü ise bilimle ilgilidir. Nietzsche'ye göre modern bilim, çileci idealin karşıtı değil; onun en son ve en dürüst biçimidir. Çünkü bilim de "hakikat her şeyden değerlidir" inancına dayanır — ve bu inancın kendisi sorgulanmamıştır.

## Asıl hedef: değerlerin yeniden değerlendirilmesi

Burada projenin olumlu tarafı görünür hâle gelir. Nietzsche yalnızca "eski değerler yanlıştır" demez. Çağrısı şudur: **Değerleri yeniden değerlendirmek gerekir.**

Bu, "herkes kendi doğrusunu seçsin" gibi basit bir görecelik değildir. Nietzsche'de değer yaratmak keyfî bir tercih yapmak anlamına gelmez. Yeni değer yaratmak; insanın kendi yaşamını üstlenmesini, kendi ölçülerini kurabilecek kadar güçlü hâle gelmesini ve yaşamı başka bir dünyanın gölgesinde değerlendirmekten vazgeçmesini gerektirir.

**Güç istenci** (*Wille zur Macht*) kavramı da burada devreye girer. Güç istenci yalnızca başkalarına hükmetme arzusu değildir; daha geniş anlamıyla yaşamın kendisini aşma, biçimlendirme, yaratma ve kendisini sürekli yeniden kurma hareketidir.

Bu nedenle Nietzsche'nin ideal insanı hazır değerleri tüketen insan değil, **değer yaratabilen insandır.**

## Peki yerine ne koyuyor?

En güçlü itiraz tam burada doğar. Eski değerleri sorgulamak mümkündür. Peki yeni değerlerin ölçütü ne olacaktır? Bütün ahlaki değerlerin tarihsel ve psikolojik köklerini sorgularsak geriye ne kalır?

Kantçı bir filozof burada güçlü bir itiraz yöneltebilir: Ahlakın değeri, tarihsel kökeninden ya da insanın psikolojik durumundan bağımsız olarak, aklın evrensel geçerli kılabileceği ilkelerde aranmalıdır. Nietzsche ise bu tür evrensel ahlak iddialarının arkasında da belirli bir insan tipinin ve belirli bir değer dünyasının bulunduğundan şüphelenir.

Ancak ciddi bir problem kalır: **Değerlerin eleştirisinde kullanılan ölçütlerin kendisi nereden gelmektedir?** Bütün değerleri soykütüğüne tabi tutarsak, Nietzsche'nin kendi değer yaratma çağrısı da aynı soruya maruz kalır.

Bu nedenle Nietzsche'nin felsefesi kendi eleştirisinin dışında güvenli bir liman bırakmaz. Belki de gücü tam olarak buradadır.

## Kitabın başına gelenler

*Ahlakın Soykütüğü*'nün alımlanma tarihi, kitabın kendi tezini doğrulayan bir örnek gibidir: Bir metnin anlamı, onu kimin ve hangi çıkarla okuduğuna göre değişebilir.

Nietzsche 1889'da akıl sağlığını yitirdi. Yayımlanmamış notları kız kardeşi Elisabeth Förster-Nietzsche'nin eline geçti. Elisabeth, Nietzsche'nin kendisinin şiddetle karşı çıktığı Alman milliyetçiliğine ve antisemitizme yakın bir çevrenin içindeydi. Notları kendi tasnifiyle *Güç İstenci* adı altında kitaplaştırdı; bu derleme Nietzsche'nin planladığı bir eser değildi.

Sonuç, yirminci yüzyılın en büyük yanlış okumalarından biri oldu: Nietzsche bir süre Nazi ideolojisinin filozofu gibi sunuldu.

Bu tabloyu tersine çeviren, savaş sonrasında yapılan filoloji çalışmalarıdır. Özellikle **Walter Kaufmann**'ın çevirileri ve incelemeleri, Nietzsche'yi bu bağlamdan çıkarıp yeniden okunabilir kıldı. Bugünkü akademik Nietzsche çalışmaları bu düzeltmenin üzerine kuruludur.

## Soykütüğün ardılları

Yöntem Nietzsche'de kalmadı; yirminci yüzyılın en verimli felsefi araçlarından biri oldu.

**Gilles Deleuze**, *Nietzsche ve Felsefe* (1962) ile Nietzsche okumasını Fransa'da yeniden kurdu; kuvvet ve tepki kavramlarını merkeze aldı.

**Michel Foucault**, 1971 tarihli "Nietzsche, Soykütük, Tarih" makalesiyle yöntemi kendi çalışmalarının omurgası hâline getirdi. Delilik, hapishane ve cinsellik üzerine kitaplarında sorduğu soru Nietzsche'ninkiyle aynı yapıdadır: Bugün doğal görünen bu ayrım nasıl kuruldu?

**Bernard Williams** ise *Truth and Truthfulness* (2002) kitabında soykütüğü ters yönde kullandı. Ona göre soykütük yalnızca değer düşürücü olmak zorunda değildir; bir değerin nasıl doğduğunu göstermek bazen onu **haklı çıkarabilir** de. Williams buna *doğrulayıcı soykütük* der.

## Türkçede

*Ahlakın Soykütüğü Üstüne — Bir Kavga Yazısı*, [Ahmet İnam](/haber/ahmet-inam-youtube-dersleri-dijital-arsiv) çevirisiyle Türkçeye kazandırıldı. İnam ayrıca *İyinin ve Kötünün Ötesinde*'yi ve Paul Feyerabend'in *Yönteme Hayır*'ını da çevirmişti.

Kitabın Türkçede birden fazla çevirisi bulunuyor. *Ressentiment* teriminin karşılığı çeviriden çeviriye değişir; bazı çevirmenler "hınç" der, bazıları terimi olduğu gibi bırakmayı tercih eder. Bu tercih önemsiz değildir: Kavramın kapsamı, seçilen Türkçe sözcüğe göre daralıp genişleyebilir.

## Nasıl okunmalı?

Kitaba ilk kez yaklaşanlar için birkaç pratik not:

- **Önsözü atlamayın.** Nietzsche kendi yönteminin ne olduğunu ve olmadığını orada anlatır.
- **Sırayla okuyun.** Üç inceleme bağımsız denemeler değildir; ikincisi birincinin, üçüncüsü ikincinin üzerine kurulur.
- **Tarihsel iddiaları filoloji olarak değil, düşünce aracı olarak okuyun.** Nietzsche'nin etimolojik savlarının bir bölümü bugünkü dilbilim tarafından desteklenmez; ama argümanın gücü bu ayrıntılara bağlı değildir.
- **"Efendi" ve "köle" sözcüklerini sınıf olarak okumayın.** Bunlar toplumsal katman değil, değer yaratma biçimleridir.

## Soykütüğün bugünkü anlamı

Yaklaşık yüz kırk yıl önce yapılmış bu soruşturmanın hâlâ canlı olmasının nedeni, modern toplumların ahlaki değerler konusunda daha az değil, belki daha fazla çatışma yaşıyor olmasıdır.

İnsanlar sürekli olarak neyin iyi, neyin kötü, neyin kabul edilebilir olduğu konusunda tartışıyor. Fakat çoğu tartışmada daha temel bir soru unutuluyor: **Bu değerleri neden değerli buluyoruz?**

- Bir değeri savunurken gerçekten onu mu savunuyoruz, yoksa ait olduğumuz grubun değerlerini mi?
- Bir ahlaki öfkenin arkasında adalet arzusu mu var, yoksa ressentiment mi?
- Bir insanı gerçekten özgür olduğu için mi eleştiriyoruz, yoksa onun özgürlüğü kendi değer dünyamızı tehdit ettiği için mi?

Soykütük bu soruları cevaplamaktan önce **onları sormayı** öğretir. Bu yüzden Nietzsche'nin en önemli mirası belirli bir ahlak sistemi değildir. Mirası, değerler karşısında geliştirdiği **şüphe sanatıdır.**

## Sonuç: değerlerin değerini sormak

Nietzsche'nin soykütüğü, ahlakın arkasında saklanan bir "gerçek köken" bulup her şeyi açıklayan basit bir kuram değildir. Daha derin bir şeydir: Bize, kendiliğinden doğru kabul ettiğimiz değerlerin **bir tarihi olduğunu** hatırlatır.

"İyi" ve "kötü" kelimeleri gökten inmedi. Onlar insan eliyle, insan tutkularıyla, mücadelelerle, iktidarlarla, korkularla, umutlarla ve acılarla biçimlendi.

Bu nedenle soru sonunda şuna dönüşür: Bir değerin geçmişi nedir?

Ama orada durmaz. Daha zor olanı sorar: **Bu değer bugün nasıl bir insan yaratıyor?**

Ve nihayet: Bu değer yaşamı artırıyor mu, yoksa yaşamdan kaçmanın başka bir biçimi mi?

Nietzsche'nin felsefesinin asıl radikalliği burada yatar. İnsanı yalnızca mevcut değerleri reddetmeye çağırmaz; **kendi değerlerinin de soruşturmacısı olmaya** çağırır.

Çünkü belki de felsefenin en tehlikeli sorusu "Doğru nedir?" değildir.

**"Doğru dediğimiz şeyi neden doğru buluyoruz?"**

Nietzsche için felsefe, tam da bu sorunun başladığı yerde gerçekten tehlikeli hâle gelir.`,
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
    coverImage: "/kapak/ahmet-inam.jpg",
    imageCredit: "Temsilî portre — Klimt üslubunda yapay zekâ çizimi",
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
    imageCredit: "Temsilî portre — yapay zekâ ile üretilmiş çizim",
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
  {
    title: "Felsefe Tarihinde Bugün — 22 Ağustos: Haiti ayaklanması ve ilk Cenevre Sözleşmesi",
    slug: "felsefe-tarihinde-bugun-22-agustos-haiti-cenevre",
    summary: "22 Ağustos 1791'de Saint-Domingue'de başlayan ayaklanma, insan hakları evrenselliğinin en sert sınavı oldu. Aynı gün 1864'te ilk Cenevre Sözleşmesi imzalandı: savaşın da bir sınırı olduğu fikri metne döküldü.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Haitian_Revolution.jpg?width=1600",
    imageCredit: "Haiti Devrimi'ni betimleyen dönem gravürü · Wikimedia Commons",
    featured: false,
    seoTitle: "22 Ağustos: Haiti Devrimi ve ilk Cenevre Sözleşmesi",
    metaDescription: "22 Ağustos 1791'de Haiti ayaklanması başladı, 1864'te ilk Cenevre Sözleşmesi imzalandı. İnsan haklarının evrenselliği ve savaşın sınırları üzerine.",
    contentType: "TARIH",
    sourceName: "Wikipedia · ICRC",
    sourceUrl: "https://en.wikipedia.org/wiki/First_Geneva_Convention",
    publishedAt: "2026-08-22T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "siyaset-felsefesi", "etik", "aydinlanma"],
    philosopherSlugs: [],
    sources: [
      { title: "First Geneva Convention", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/First_Geneva_Convention", primary: true },
      { title: "The Geneva Conventions: 160 years of history", publisher: "Genève internationale", url: "https://www.geneve-int.ch/geneva-conventions-160-years-history" },
      { title: "Bois Caïman", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bois_Ca%C3%AFman" },
      { title: "Dutty Boukman", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dutty_Boukman" },
    ],
    content: `22 Ağustos, birbirinden yetmiş üç yıl uzakta duran iki olayı aynı güne topluyor. İkisi de aynı soruyu farklı yerinden tutuyor: **İnsan olmanın getirdiği haklar gerçekten herkes için mi geçerli?**

## 1791: Saint-Domingue'de ayaklanma

Fransa'nın Karayipler'deki en zengin kolonisi Saint-Domingue'de, 22 Ağustos 1791 gecesi Dutty Boukman önderliğindeki köleleştirilmiş insanlar Noé şeker plantasyonunu ateşe verdi. Tarihçiler bu yangını, on üç yıl sürecek ve 1804'te bağımsız Haiti Cumhuriyeti'yle sonuçlanacak ayaklanmanın başlangıcı sayar.

Birkaç gün önce, ormanda Bois Caïman denen yerde bir tören yapılmıştı. Törenin tarihi kaynaklarda tartışmalıdır — kimi 14 Ağustos'u, kimi 22 Ağustos'u verir. Ayaklanmanın fiilen başladığı gün konusunda ise ayrılık yoktur.

## Felsefi mesele: evrensellik sınanıyor

Fransız Devrimi 1789'da *İnsan ve Yurttaş Hakları Bildirisi*'ni ilan etmişti. Metnin ilk maddesi açıktı: İnsanlar özgür ve haklar bakımından eşit doğar.

Ama bildiriyi ilan eden ülkenin kolonilerinde kölelik sürüyordu. Aynı meclis, insan haklarını evrensel diye ilan ederken sömürge ekonomisini korumanın yolunu arıyordu.

Haiti ayaklanması bu çelişkiyi tartışarak değil, **eyleyerek** sınadı. Evrensellik iddiası, kendisinden dışlananlar tarafından ciddiye alındığında ne olur? Cevap, imparatorluğun kaybettiği bir savaş oldu.

Tarihçi C. L. R. James'in 1938 tarihli *The Black Jacobins* kitabı bu olayı dünya tarihinin merkezine yerleştiren ilk büyük çalışmaydı.

## Hegel ve Haiti tartışması

Felsefe tarihinde son yirmi beş yılın en çok tartışılan tezlerinden biri de buradan doğdu.

Susan Buck-Morss, 2000'de yayımlanan bir makalede ve 2009'daki *Hegel, Haiti and Universal History* kitabında şunu öne sürdü: Hegel'in *Tinin Fenomenolojisi*'ndeki ünlü **efendi-köle diyalektiği**, soyut bir düşünce deneyi değildi; Hegel'in dönemin gazetelerinden izlediği Haiti olaylarıyla doğrudan bağlantılıydı.

Tez tartışmalıdır. Hegel'in Haiti'ye açık bir göndermesi yoktur; kanıt dolaylıdır ve eleştirenler bağlantının fazla güçlü kurulduğunu söyler. Ama tartışmanın kendisi verimli oldu: Felsefe tarihinin, kendi çağının sömürgecilik gerçeğinden bağımsız yazılıp yazılamayacağı sorusu böylece gündeme geldi.

## 1864: savaşın da bir sınırı var

Aynı gün, 1864'te Cenevre'de on iki Avrupa devleti — İsviçre, Fransa, Prusya, Belçika, Hollanda, İspanya, Danimarka, Portekiz, İtalya, İsveç, Norveç ve Württemberg — *Sahra Ordularındaki Yaralıların Durumunun İyileştirilmesine Dair Sözleşme*'yi imzaladı.

Metnin arkasında Cenevreli iş adamı Henry Dunant vardı. Dunant 1859'da Solferino Muharebesi'nin ardından savaş alanında gördüklerini yazmış, yaralıların bakımsızlıktan ölmesini anlatmıştı.

Sözleşme modern uluslararası insancıl hukukun başlangıcı sayılır ve Uluslararası Kızılhaç Komitesi'nin kuruluşuna zemin hazırladı.

## Felsefi mesele: adil savaş

Buradaki fikir eskidir ama 1864'te ilk kez bağlayıcı bir metne dönüştü: **Savaşta bile yapılamayacak şeyler vardır.**

Skolastik dönemden beri süren *adil savaş* tartışması iki soruyu ayırır. Savaşa girmek ne zaman haklıdır (*jus ad bellum*)? Savaşırken hangi sınırlar geçerlidir (*jus in bello*)? İkinci soru birincisinden bağımsızdır: Haksız bir savaşta bile yaralıya ve esire yapılamayacaklar vardır.

Michael Walzer'in 1977 tarihli *Just and Unjust Wars* kitabı bu ayrımın çağdaş tartışmadaki başlıca referansıdır.

İki olay birlikte okunduğunda ortaya çıkan tablo şu: On dokuzuncu yüzyıl, insan haklarının hem en sert biçimde çiğnendiği hem de ilk kez uluslararası metne bağlandığı yüzyıldı. Aradaki mesafe, hâlâ üzerinde çalıştığımız mesafedir.`,
  },
  {
    title: "İoanna Kuçuradi: felsefeyi insan hakları pratiğine bağlayan düşünür",
    slug: "ioanna-kucuradi-felsefe-insan-haklari",
    summary: "Hacettepe'de felsefe bölümünü kuran, FISP'in ilk kadın başkanı olan ve 1998'den beri UNESCO Felsefe ve İnsan Hakları Kürsüsü'nü yürüten Kuçuradi, ekim ayında doksan yaşına giriyor. Çalışması tek bir soruda toplanıyor: insan hakları nereden temellendirilir?",
    coverImage: "/kapak/kucuradi.jpg",
    imageCredit: "Temsilî portre — Van Gogh üslubunda yapay zekâ çizimi",
    featured: true,
    seoTitle: "İoanna Kuçuradi: değer felsefesi ve insan hakları",
    metaDescription: "İoanna Kuçuradi'nin değer felsefesi, insan hakları temellendirmesi, FISP başkanlığı ve UNESCO kürsüsü. Türkiye'de felsefenin kurumsallaşmasındaki rolü.",
    contentType: "PORTRE",
    sourceName: "Maltepe Üniversitesi · Aydın Doğan Vakfı · UNESCO Türkiye Millî Komisyonu",
    sourceUrl: "https://maltepe.edu.tr/tr/prof-dr-i%CC%87oanna-kucuradi-2024-aydin-dogan-odulu",
    publishedAt: "2026-08-23T06:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "turkiye",
    tagSlugs: ["etik", "hukuk-felsefesi", "akademi", "kavram"],
    philosopherSlugs: ["ioanna-kucuradi"],
    sources: [
      { title: "Prof. Dr. İoanna Kuçuradi 2024 Aydın Doğan Ödülü'ne Layık Görüldü", publisher: "Maltepe Üniversitesi", url: "https://maltepe.edu.tr/tr/prof-dr-i%CC%87oanna-kucuradi-2024-aydin-dogan-odulu", primary: true },
      { title: "Prof. Dr. İoanna Kuçuradi", publisher: "UNESCO Türkiye Millî Komisyonu", url: "https://www.unesco.org.tr/Pages/1835/160/Prof.%20Dr.%20%C4%B0oanna%20KU%C3%87URAD%C4%B0" },
      { title: "Prof. Dr. İoanna Kuçuradi — 28. Aydın Doğan Ödülü", publisher: "Aydın Doğan Vakfı", url: "https://aydindoganvakfi.org.tr/aydin-dogan-odulu/prof-dr-ioanna-kucuradi/" },
      { title: "Kuçuradi Felsefe ve İnsan Hakları Vakfı", publisher: "kucuradivakfi.org.tr", url: "https://www.kucuradivakfi.org.tr/" },
    ],
    content: `Türkiye'de felsefenin kurumsallaşmasını tek bir isim üzerinden anlatmak gerekirse, o isim İoanna Kuçuradi'dir.

4 Ekim 1936'da İstanbul'da doğdu. Zapyon Rum Kız Lisesi'ni 1954'te, İstanbul Üniversitesi Felsefe Bölümü'nü 1959'da bitirdi; doktorasını 1965'te tamamladı. Önümüzdeki ekim ayında doksan yaşına giriyor ve hâlâ çalışıyor.

## Bir bölüm kurmak

Kuçuradi'nin kariyerindeki dönüm noktası 1969'da geldi: **Hacettepe Üniversitesi'nde Felsefe Bölümü'nü kurdu.** 2003'teki emekliliğine kadar bölüm başkanlığını sürdürdü.

Bir felsefe bölümü kurmak, ders programı hazırlamaktan ibaret değildir. Hangi geleneğin okutulacağı, hangi metinlerin çevrileceği, hangi soruların meşru sayılacağı — bunların hepsi o ilk kararlarla şekillenir. Türkiye'de bugün yetişen felsefecilerin önemli bir bölümü, doğrudan ya da dolaylı olarak o bölümün açtığı yoldan geçti.

2006'dan bu yana Maltepe Üniversitesi'nde; aynı üniversitedeki İnsan Hakları Araştırma ve Uygulama Merkezi'nin müdürlüğünü ve İnsan Hakları Anabilim Dalı başkanlığını yürütüyor.

## Uluslararası görevler

Kuçuradi'nin adı Türkiye dışında da tanınır. Uluslararası Felsefe Kurumları Federasyonu'nda (FISP) 1982'den itibaren genel sekreterlik yaptı; **1998'de başkan seçildi.** Bu göreve seçilen ilk Türk ve ilk kadındı.

Aynı yıl **UNESCO Felsefe ve İnsan Hakları Kürsüsü**'nü üstlendi ve bugüne kadar yürütüyor. 2003'te UNESCO Felsefe Ödülü'nü aldı.

Aralık 2024'te ise **28. Aydın Doğan Ödülü**'ne layık görüldü; gerekçede felsefe ve insan hakları alanındaki çalışmalarıyla ülkesinin adını uluslararası düzeyde duyurması gösterildi.

Ayrıca kendi adını taşıyan **Kuçuradi Felsefe ve İnsan Hakları Vakfı** kurulmuş durumda; vakıf yayın ve etkinlik çalışmalarını sürdürüyor.

## Asıl mesele: hakları neye dayandırıyoruz?

Kuçuradi'nin felsefesi kurumsal kariyerinden ibaret değildir. Çalışmasının merkezinde tek ve zor bir soru vardır:

> **İnsan hakları neye dayanır?**

Yaygın iki cevap vardır. Birincisi hukuki cevaptır: Haklar, devletlerin imzaladığı sözleşmelerden gelir. İkincisi kültürel cevaptır: Haklar, belirli bir kültürün ürettiği değerlerdir.

Kuçuradi ikisini de yetersiz bulur. Sözleşmeye dayandırırsanız, sözleşme değiştiğinde hak da değişir. Kültüre dayandırırsanız, "bizim kültürümüzde böyle değil" cümlesi her ihlali meşrulaştırabilir.

Onun önerdiği yol **değer felsefesi**nden geçer. Nicolai Hartmann ve Max Scheler geleneğinden beslenen bu yaklaşımda haklar, insanın *değeri*nden — yani insanın diğer canlılardan ayrılan olanaklarından — türetilir. Düşünme, bilgi üretme, sanat yapma, kendini aşma kapasitesi... İnsan hakları, bu olanakların korunması talebidir.

Bu temellendirmenin pratik sonucu şudur: Bir hak, çoğunluk istemediği için ortadan kalkmaz.

## Değerler ve değer yargıları

Kuçuradi'nin sık kullandığı ve Türkçe felsefe diline yerleşmiş bir ayrım daha vardır: **değerler** ile **değer yargıları** aynı şey değildir.

Değer yargıları toplumdan topluma, dönemden döneme değişir; belirli bir grubun belirli bir zamanda doğru saydığı ölçütlerdir. Değerler ise insanın olanaklarına ilişkindir ve bu ölçütlere indirgenemez.

Bu ayrım gündelik tartışmalarda sürekli karıştırılır. Bir davranışın "bizde ayıp sayılması" ile "insana yakışmaması" aynı düzeyde iki iddia değildir. Kuçuradi'nin ısrarı tam buradadır: Etik tartışması, hangi grubun ne dediğini saymakla yapılmaz.

## Etik ile ahlak

Buradan üçüncü bir ayrım doğar. Kuçuradi'de **ahlak**, belirli bir toplulukta fiilen geçerli olan kurallar bütünüdür — sosyolojik bir olgudur. **Etik** ise bu kuralları inceleyen felsefe dalıdır.

Dolayısıyla "etik davranmak" ile "ahlaka uymak" çakışmayabilir. Bir toplumun ahlakı, insanın değerini koruyan bir davranışı yasaklıyor olabilir.

Bu, Kuçuradi'nin insan hakları eğitimine verdiği önemi de açıklar: Ona göre insan hakları, ezberlenecek bir maddeler listesi değil, **somut durumda doğru değerlendirme yapabilme kapasitesidir.** Bu kapasite ancak eğitimle kazanılır.

## Bugün neden okunmalı?

Kuçuradi'nin sorusu, teknolojinin etik tartışmayı yeniden şekillendirdiği bir dönemde beklenmedik bir güncellik taşıyor.

Yapay zekâ sistemlerinin "insan onuruna" saygı göstermesi isteniyor. Peki insan onuru nedir ve neye dayanır? Sözleşmelere mi, kültüre mi, yoksa insanın kendi olanaklarına mı? Kuçuradi'nin kırk yıldır sorduğu soru, bugünün mühendislik belgelerinde farkında olunmadan yeniden sorulmuş oluyor.

Maltepe Üniversitesi'nin insan hakları bülteninin 2026 sayılarında, Kuçuradi'nin özgürlük kavramını farklı boyutlarıyla ele aldığı ve özgürlüğün aynı zamanda bir **etik sorumluluk alanı** olduğunu vurguladığı bir değerlendirmesi yer alıyor.

## Türkçedeki kitapları

*İnsan Hakları: Kavramları ve Sorunları*, *Etik*, *Uludağ Konuşmaları*, *Sanata Felsefeyle Bakmak* ve *Nietzsche ve İnsan* Türkçede yayımlanmış çalışmaları arasında.

---

*Bu portre, Kuçuradi'nin yayımlanmış çalışmalarına ve kurumların resmî sayfalarına dayanmaktadır. Düzeltme ve ekleme önerilerinizi iletişim sayfasından iletebilirsiniz.*`,
  },
  {
    title: "Scott Shapiro: hukuk kodlaşırken meşruiyete ne olur?",
    slug: "scott-shapiro-hukuk-kod-yapay-zeka",
    summary: "Yale'li hukuk felsefecisi, yapay zekânın hukuktaki asıl meselesinin verimlilik değil iktidar olduğunu savunuyor. Kural tabanlı sistemler doğru sonuç verse bile, akıl yürütme insan tarafından izlenemez hâle geldiğinde 'hukuki gerekçe' otoriteye başvuruya dönüşüyor.",
    coverImage: "/kapak/scott-shapiro.jpg",
    imageCredit: "Scott Shapiro portresi",
    featured: true,
    seoTitle: "Scott Shapiro: yapay zekâ, hukuk ve meşruiyet",
    metaDescription: "Yale Hukuk Fakültesi'nden Scott Shapiro'ya göre yapay zekânın hukuktaki asıl hikâyesi iktidar. Kural tabanlı sistemler, açıklanabilirlik ve meşruiyet sorunu.",
    contentType: "HABER",
    sourceName: "ECGI — New Law Order",
    sourceUrl: "https://www.ecgi.global/publications/podcasts/scott-shapiro-yale-law-law-as-code-the-ai-power-shift",
    publishedAt: "2026-08-23T05:30:00.000Z",
    authorSlug: "dis-haberler",
    categorySlug: "dunya",
    tagSlugs: ["hukuk-felsefesi", "yapay-zeka", "teknoloji-felsefesi", "soylesi"],
    philosopherSlugs: ["scott-shapiro"],
    sources: [
      { title: "Scott Shapiro (Yale Law): Law as Code & the AI Power Shift", publisher: "ECGI — New Law Order", date: "18 Şubat 2026", url: "https://www.ecgi.global/publications/podcasts/scott-shapiro-yale-law-law-as-code-the-ai-power-shift", primary: true },
      { title: "Scott J. Shapiro", publisher: "Yale Law School", url: "https://law.yale.edu/scott-j-shapiro" },
      { title: "Scott J. Shapiro", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scott_J._Shapiro" },
    ],
    content: `Yapay zekâ hukuk alanında genellikle **verimlilik** vaadiyle anlatılıyor: daha hızlı araştırma, daha hızlı dilekçe, daha hızlı yanıt.

Yale Hukuk Fakültesi'nden hukuk felsefecisi **Scott Shapiro**, bunun asıl hikâyeyi gizlediğini söylüyor. Ona göre asıl mesele iktidar.

Shapiro bu değerlendirmeyi, Avrupa Kurumsal Yönetişim Enstitüsü'nün (ECGI) *New Law Order* dizisinde 18 Şubat 2026'da yayımlanan bir buçuk saatlik söyleşide yaptı.

## Argümanın çekirdeği

Shapiro'nun çıkış noktası kendi hukuk kuramından geliyor: **Hukuk, insan davranışını büyük ölçekte eşgüdümleyen bir toplumsal teknolojidir.**

Bu doğruysa, kuralları yorumlayabilen, sınır durumları sınayabilen ve ikna edici hukuki çözümlemeler üretebilen araçlar yalnızca işi hızlandırmaz. **Sistemde kimin yol alabileceğini ve kimin altında kalacağını değiştirir.**

## Karanlık simetri

Söyleşinin en dikkat çekici bölümü bu değişimin çift yönlü olduğunu gösteriyor.

İnsanların yasal yükümlülüklerine uymasını kolaylaştıran araçlar, aynı zamanda donanımlı aktörlerin o yükümlülüklerden kaçmasını da kolaylaştırıyor. Shapiro bunu **uyum motoru** ile **istismar motoru**nun aynı makine olması diye tarif ediyor.

Buradan çıkan soru şu: En iyi "hukuk hackerı" bir makine olduğunda adaletin dengesine ne olur?

## İki farklı tehlike

Shapiro, üretici modeller ile kural tabanlı sistemler arasında önemli bir ayrım yapıyor. İkisinin sorunları farklı.

**Üretici modeller** otoriter bir ses tonuyla konuşabilir ama — kasten ya da kazara — yanlış olabilir. Hukuk alanında halüsinasyon, uydurma içtihat ya da olmayan bir maddeye atıf demektir.

**Kural tabanlı sistemler** ise bu sorunu taşımaz; mantıkları doğrudur. Ama başka bir soru doğurur: **Mantık doğru, ancak akıl yürütme artık bir insan tarafından izlenemez hâle geldiğinde ne oluyor?**

Shapiro'nun cevabı rahatsız edici: O noktada "hukuki gerekçe" bir gerekçe olmaktan çıkıp **otoriteye başvuruya** dönüşür. Karar doğru olabilir; ama neden doğru olduğunu kimse takip edemiyorsa, meşruiyet, şeffaflık ve güven konusunda ciddi bir sorun vardır.

## Neden bu adam?

Shapiro, Yale Hukuk Fakültesi'nde Charles F. Southmayd Hukuk Profesörü ve aynı zamanda felsefe profesörü. Çalışma alanı hukuk felsefesinden uluslararası hukuka, siber güvenlikten yapay zekâya uzanıyor.

2011 tarihli *Legality* kitabında geliştirdiği **planlama kuramı**, hukuku bir planlar sistemi olarak ele alır: Hukuk, karmaşık ve tartışmalı ahlaki sorunları çözmek zorunda kalmadan büyük gruplar hâlinde eşgüdümlü davranabilmemizi sağlayan bir plan üretme mekanizmasıdır.

Oona Hathaway ile birlikte yazdığı *The Internationalists* (2017), savaşı hukuk dışı ilan eden 1928 Kellogg-Briand Paktı'nın uzun vadeli etkisini savunur.

2023 tarihli *Fancy Bear Goes Phishing* ise beş büyük siber saldırının hikâyesi üzerinden hacklemenin tarihini ve etiğini anlatır. Shapiro'nun bugünkü yapay zekâ değerlendirmesi bu kitabın devamı gibi okunabilir: Her ikisinde de soru aynıdır — bir sistemi kırabilen kişi, o sistemin kurallarının dışında mı durur, yoksa kuralları en iyi bilen kişi midir?

## Tartışmanın bağlamı

Shapiro'nun uyarısı, hukuk felsefesinde uzun süredir süren bir tartışmaya bağlanıyor: **Kural mı, yargı mı?**

Hukuk devleti fikri, keyfîliğe karşı kuralı savunur. Ama kural her durumu öngöremez; uygulamak yargı gerektirir. Yapay zekâ bu dengeyi iki yönden birden zorluyor: Bir yandan kuralın uygulanmasını otomatikleştirebilir, öte yandan yargının gerekçesini görünmez kılabilir.

Sitemizde daha önce aktardığımız Philippe Huneman'ın *Profiling* kitabı da aynı hattın bir başka ucunda duruyor: Bir algoritma sizi bir olasılık sınıfına yerleştirdiğinde, o sınıflandırma hukuki sonuçlar doğurmaya başlıyor.`,
  },
  {
    title: "Felsefe Tarihinde Bugün — 23 Ağustos: Sacco ve Vanzetti'nin idamı, Kenneth Arrow'un doğumu",
    slug: "felsefe-tarihinde-bugun-23-agustos-sacco-vanzetti-arrow",
    summary: "23 Ağustos 1927'de iki İtalyan anarşist, dünya çapındaki itirazlara rağmen idam edildi. Aynı gün 1921'de, ortak kararın matematiksel sınırlarını gösterecek Kenneth Arrow doğdu.",
    coverImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Sacvan.jpg?width=1600",
    imageCredit: "Nicola Sacco ve Bartolomeo Vanzetti · Wikimedia Commons",
    featured: false,
    seoTitle: "23 Ağustos: Sacco-Vanzetti davası ve Kenneth Arrow",
    metaDescription: "23 Ağustos 1927'de Sacco ve Vanzetti idam edildi; 1921'de Kenneth Arrow doğdu. Adil yargılanma ve ortak karar sorunu üzerine.",
    contentType: "TARIH",
    sourceName: "Britannica · Royal Society",
    sourceUrl: "https://www.britannica.com/biography/Sacco-and-Vanzetti",
    publishedAt: "2026-08-23T05:00:00.000Z",
    authorSlug: "haber-merkezi",
    categorySlug: "felsefe-tarihinde-bugun",
    tagSlugs: ["tarih", "hukuk-felsefesi", "siyaset-felsefesi", "demokrasi"],
    philosopherSlugs: [],
    sources: [
      { title: "Sacco and Vanzetti | Definition, Background, Verdict, & Facts", publisher: "Britannica", url: "https://www.britannica.com/biography/Sacco-and-Vanzetti", primary: true },
      { title: "Sacco and Vanzetti executed | August 23, 1927", publisher: "HISTORY", url: "https://www.history.com/this-day-in-history/august-23/sacco-and-vanzetti-executed" },
      { title: "Kenneth Joseph Arrow. 23 August 1921 — 21 February 2017", publisher: "Biographical Memoirs of Fellows of the Royal Society", url: "https://royalsocietypublishing.org/rsbm/article/doi/10.1098/rsbm.2019.0002/116030/Kenneth-Joseph-Arrow-23-August-1921-21-February" },
    ],
    content: `23 Ağustos, adalet kavramının iki farklı yerinden zorlandığı iki olayı aynı güne topluyor.

## 1927: Charlestown Cezaevi

İtalyan doğumlu anarşistler **Nicola Sacco** ve **Bartolomeo Vanzetti**, 23 Ağustos 1927'de gece yarısından hemen sonra Massachusetts'teki Charlestown Cezaevi'nde elektrikli sandalyede idam edildi. Suçlamaları cinayetti.

Dava, Amerika'da radikallere karşı duyulan tepkinin zirvede olduğu bir dönemde görüldü. Yargılama birçok gözlemciye göre hukuka aykırı biçimde gösteriye dönüşmüştü; savcılık çalınan parayı ortaya koyamadı ve aleyhteki delillerin önemli bir bölümü sonradan itibarsızlaştı.

İdamlar dünya çapında gösterilere yol açtı. Aralarında Einstein, Dos Passos ve Anatole France'ın bulunduğu geniş bir çevre lehte kampanya yürüttü.

## Felsefi mesele: adil yargılanma neyi güvence altına alır?

Sacco-Vanzetti davası hukuk felsefesinde tekrar tekrar anılır; çünkü sorunun kendisi teknik değil ilkeseldir.

Bir yargılama, usul kurallarına biçimsel olarak uyulduğu hâlde adil olmayabilir mi?

Hukuk devleti fikrini savunan gelenek, usulün kendisinin bir güvence olduğunu söyler: Kurallara uyulmuşsa sonuç meşrudur. Karşı görüş ise usulün, taraflardan birine karşı duyulan önyargı tarafından baştan biçimlendirilebileceğine dikkat çeker. Kural aynı kalır ama kimin sanık sandalyesine oturacağı, hangi delilin ciddiye alınacağı ve hangi tanığa inanılacağı değişir.

Bu tartışma bugün de sürüyor: Adil yargılanma hakkı yalnızca prosedürel bir güvence midir, yoksa sonucun kendisine de ilişkin bir talep mi?

Massachusetts valisi Michael Dukakis, 1977'de — idamların ellinci yıldönümünde — Sacco ve Vanzetti'nin yargılanmasında haksızlık yapıldığını kabul eden bir bildiri yayımladı. Bildiri suçsuzluk ilan etmiyor; yargılamanın adil olmadığını tespit ediyordu. Bu ayrım, tartışmanın niteliğini iyi gösterir.

## 1921: Kenneth Arrow

Aynı gün, 1921'de New York'ta **Kenneth Joseph Arrow** doğdu. İktisatçı, matematikçi ve siyaset kuramcısıydı; 1972'de Nobel İktisat Ödülü'nü aldı ve 2017'de öldü.

Arrow'un felsefe için önemi, 1951'de yayımladığı doktora çalışmasından gelir: **imkânsızlık teoremi.**

## Ortak karar mümkün mü?

Soru basit görünür: Bir toplumdaki bireylerin tercihlerini, tutarlı bir "toplumsal tercih"e nasıl dönüştürürüz?

Arrow bu dönüşümden makul birkaç şey istememiz gerektiğini söyler. Örneğin: Herkes A'yı B'ye tercih ediyorsa toplum da A'yı tercih etmeli. Toplumun A ile B arasındaki tercihi, ilgisiz bir C seçeneğinin varlığına göre değişmemeli. Ve karar tek bir kişinin tercihine indirgenmemeli.

Teoremin gösterdiği şey şudur: **İkiden fazla seçenek olduğunda, bu makul koşulların hepsini birden sağlayan bir toplumsal tercih kuralı yoktur.**

Bu bir oy sayım tekniği sorunu değildir; hangi yöntemi seçerseniz seçin, koşullardan biri düşer.

## Demokrasi kuramına etkisi

Sonucun ilk okunuşu karamsardır: "Halkın iradesi" diye tutarlı bir şey yoktur; çoğunluk kararı, kullanılan usule göre değişir.

Ama tartışma orada kalmadı. **Amartya Sen**, Arrow'un koşullarından bazılarının gevşetilebileceğini gösterdi; özellikle bireylerin refah düzeylerinin karşılaştırılabilir olması hâlinde tablo değişiyordu. Sen'in bu hattı, sonradan yetenekler yaklaşımına ve kalkınma etiğine açıldı.

**John Rawls** ise sorunu başka yerden ele aldı: Adaletin ölçütü, mevcut tercihlerin toplanması değil; tarafların kendi konumlarını bilmeden üzerinde anlaşacakları ilkelerdir.

İki olay birlikte okunduğunda ortaya çıkan tablo şu: Adalet, ne yalnızca doğru usulle ne de yalnızca doğru toplamayla güvence altına alınabiliyor. Yirminci yüzyıl bunu iki farklı yoldan öğrendi.`,
  },
];

/* ------------------------------------------------------------------ */
/* Kitaplar                                                            */
/* ------------------------------------------------------------------ */

export const books: SeedBook[] = [
  {
    title: "Cumhuriyetin 100. Yılında Türkiye'de Felsefe, 2. Cilt",
    slug: "cumhuriyetin-100-yilinda-felsefe-2",
    originalTitle: null,
    publisher: "Türkiye Felsefe Kurumu Yayınları",
    translator: null,
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Betül Çotuksöken ve İoanna Kuçuradi editörlüğünde hazırlanan iki ciltlik çalışmanın ikinci cildi. Cumhuriyet döneminde Türkiye'de felsefenin kurumsallaşmasını ve birikimini değerlendiriyor. 400 sayfa.",
    year: 2025,
    link: "https://www.kitapyurdu.com/kitap/cumhuriyetin-100-yilinda-turkiyede-felsefe-2-cilt/719881.html",
    philosopherSlug: "ioanna-kucuradi",
    postSlug: "cumhuriyetin-100-yilinda-turkiyede-felsefe",
  },
  {
    title: "Being Reasonable: The Case for a Misunderstood Virtue",
    slug: "being-reasonable-lawlor",
    originalTitle: null,
    publisher: "Harvard University Press",
    translator: null,
    language: "İngilizce",
    isbn: "9780674297470",
    coverImage: null,
    description:
      "Lawlor, makul olmanın rasyonel olmakla aynı şey olmadığını savunuyor: Makul kişi, neyin değerli olduğunu görebilen ve başkalarının değer haritasını okuyabilen kişidir. 224 sayfa.",
    year: 2026,
    link: "https://philosophy.stanford.edu/news/krista-lawlors-new-book-explores-what-does-it-mean-be-reasonable",
    philosopherSlug: null,
    postSlug: "krista-lawlor-being-reasonable",
  },
  {
    title: "Liberal Faşizmler",
    slug: "zizek-liberal-fasizmler",
    originalTitle: null,
    publisher: "İletişim Yayınları",
    translator: "Barış Özkul",
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Žižek'in yeni kitabı, otoriterliğin bugünkü biçiminin liberalizmin karşısında değil içinde doğduğu tezini işliyor. Eylülün ilk haftasında raflarda.",
    year: 2026,
    link: "https://iletisim.com.tr/kisi/baris-ozkul/9251",
    philosopherSlug: "slavoj-zizek",
    postSlug: "zizek-liberal-fasizmler-iletisim",
  },
  {
    title: "The Mattering Instinct: How Our Deepest Longing Drives Us and Divides Us",
    slug: "the-mattering-instinct",
    originalTitle: null,
    publisher: "W. W. Norton & Company",
    translator: null,
    language: "İngilizce",
    isbn: "9781324096856",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    description:
      "Goldstein, insanı ayıran şeyin \"önemli olma ihtiyacı\" olduğunu savunuyor ve bu ihtiyacın hem en büyük başarılarımızın hem de yalnızlık, aşırılık ve kutuplaşmanın kaynağında durduğunu gösteriyor.",
    year: 2026,
    link: "https://wwnorton.com/books/9781324096856",
    philosopherSlug: "rebecca-goldstein",
    postSlug: "rebecca-goldstein-mattering-instinct-kitap",
  },
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
  {
    title: "Ahlakın Soykütüğü Üstüne — Bir Kavga Yazısı",
    slug: "ahlakin-soykutugu-ustune",
    originalTitle: "Zur Genealogie der Moral: Eine Streitschrift",
    publisher: null,
    translator: "Ahmet İnam",
    language: "Türkçe",
    isbn: null,
    coverImage: null,
    description:
      "Nietzsche'nin 1887 tarihli kitabı. Bir önsöz ve üç incelemeden oluşur: değerlerin tersine çevrilişi, kötü vicdanın doğuşu ve çileci idealin anlamı. Ahlakı yargılamak yerine ahlakın tarihini soruşturur.",
    year: 1887,
    link: null,
    philosopherSlug: "friedrich-nietzsche",
    postSlug: "nietzschenin-soykutugu-degerlerin-degeri",
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
    title: "HowTheLightGetsIn Londra 2026",
    slug: "howthelightgetsin-londra-2026",
    summary:
      "Kendisini dünyanın en büyük felsefe ve müzik festivali olarak tanımlayan etkinlik eylülde Londra'da. Emily Wilson, Homeros uyarlamaları üzerine 'Ego ve Destan' oturumunda konuşacak.",
    description: `HowTheLightGetsIn, felsefe tartışmalarını müzik ve komedi programıyla birleştiren bir festival. Londra ayağı eylül ayında düzenleniyor.

Programda yüzlerce konuşma, tartışma ve performans yer alıyor. Bu yılın konuşmacıları arasında Emily Wilson, Louis Theroux, Roger Penrose ve Mariana Mazzucato bulunuyor.

Sitemizde ayrıca ele aldığımız Homeros uyarlaması tartışması, "Ego ve Destan" başlıklı oturumda ele alınacak.`,
    kind: "KONFERANS",
    organizer: "Institute of Art and Ideas",
    speakers: "Emily Wilson, Louis Theroux, Roger Penrose, Mariana Mazzucato",
    topic: "Felsefe, bilim, siyaset ve sanat",
    format: "FIZIKSEL",
    startsAt: "2026-09-19T00:00:00.000Z",
    endsAt: "2026-09-20T00:00:00.000Z",
    hasTime: false,
    city: "Londra",
    country: "Birleşik Krallık",
    registrationUrl: "https://howthelightgetsin.org/",
    website: "https://howthelightgetsin.org/festivals/london/events/the-ego-vs-the-epic-50028",
    sourceName: "HowTheLightGetsIn",
    sourceUrl: "https://howthelightgetsin.org/",
    featured: true,
    publishedAt: "2026-08-30T02:00:00.000Z",
  },
  {
    title: "SPEP — Fenomenoloji ve Varoluşçu Felsefe Derneği 2026 Yıllık Kongresi",
    slug: "spep-2026-chicago",
    summary:
      "Kıta felsefesinin Kuzey Amerika'daki en büyük yıllık toplantısı bu yıl Chicago'da. Loyola University Chicago ev sahipliğinde 19-21 Kasım'da yapılacak.",
    description: `Society for Phenomenology and Existential Philosophy (SPEP), Kuzey Amerika'da kıta felsefesi alanındaki en kapsamlı akademik topluluk.

2026 yıllık kongresi Loyola University Chicago'nun ev sahipliğinde düzenleniyor. Program fenomenoloji, varoluşçuluk, hermenötik, eleştirel teori, feminist felsefe ve çağdaş Fransız ve Alman düşüncesine yayılan oturumlardan oluşuyor.

Bildiri ve panel başvuruları ocak ayında kapandı; kitap oturumu önerileri için son tarih geçen aralıktı.`,
    kind: "KONGRE",
    organizer: "Society for Phenomenology and Existential Philosophy",
    topic: "Fenomenoloji, varoluşçuluk ve çağdaş kıta felsefesi",
    format: "FIZIKSEL",
    startsAt: "2026-11-19T00:00:00.000Z",
    endsAt: "2026-11-21T00:00:00.000Z",
    hasTime: false,
    city: "Chicago",
    country: "ABD",
    venue: "Hyatt Centric Chicago Magnificent Mile · Loyola University Chicago",
    website: "https://www.spep.org/conference/",
    sourceName: "SPEP",
    sourceUrl: "https://www.spep.org/conference/",
    featured: true,
    publishedAt: "2026-08-29T04:00:00.000Z",
  },
  {
    title: "ENPOSS — Toplumsal Bilimler Felsefesi Avrupa Ağı 15. Konferansı",
    slug: "enposs-2026-helsinki",
    summary:
      "Avrupa'nın toplumsal bilimler felsefesi ağı 15. konferansını Helsinki Üniversitesi'nde topladı. Toplantı 26-28 Ağustos'ta yapıldı.",
    description: `European Network for the Philosophy of the Social Sciences (ENPOSS), toplumsal bilimlerin yöntem ve temellendirme sorunlarını ele alan Avrupa merkezli bir akademik ağ.

On beşinci konferans Helsinki Üniversitesi'nde düzenlendi. Program açıklama modelleri, toplumsal ontoloji, ölçme ve kanıt, kurumlar ve normatiflik gibi başlıklara ayrıldı.

Ağ, felsefeciler ile toplumsal bilimcileri aynı masada buluşturmayı amaçlayan sayılı düzenli toplantılardan birini yürütüyor.`,
    kind: "KONFERANS",
    organizer: "European Network for the Philosophy of the Social Sciences",
    topic: "Toplumsal bilimler felsefesi",
    format: "FIZIKSEL",
    startsAt: "2026-08-26T00:00:00.000Z",
    endsAt: "2026-08-28T00:00:00.000Z",
    hasTime: false,
    city: "Helsinki",
    country: "Finlandiya",
    venue: "Helsinki Üniversitesi",
    sourceName: "PhilEvents",
    sourceUrl: "https://philevents.org/event/show/144178",
    featured: false,
    publishedAt: "2026-08-29T04:05:00.000Z",
  },
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
