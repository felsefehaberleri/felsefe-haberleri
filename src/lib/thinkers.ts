/**
 * Sayfanın en üstündeki portre şeridinde görünen düşünürler.
 *
 * DİZİLİM
 * Şerit üç parçadan oluşur: sol grup — merkez — sağ grup.
 * Merkezdeki portre her ekran genişliğinde tam ortada kalır; sol ve sağ gruplar
 * kalan yeri eşit paylaşır. Bu yüzden Nietzsche `centerThinker`, hemen solundaki
 * Spinoza sol grubun sonunda, hemen sağındaki Kant sağ grubun başındadır.
 *
 * GÖRSELLER
 * Wikimedia Commons üzerindeki kamuya açık (public domain) ya da serbest lisanslı
 * eserlerdir. `Special:FilePath` adresi dosyayı doğrudan sunar; `width` parametresi
 * küçültülmüş bir sürüm döndürür.
 *
 * Bir portre yüklenmezse önce `altImage` denenir, o da olmazsa kutu sessizce koyu
 * bir doku olarak kalır — şerit bozulmaz. Değiştirmek isterseniz Commons'ta dosya
 * adını bulup aşağıdaki satırı güncellemeniz yeterli.
 */
export type Thinker = {
  name: string;
  /** Erişilebilirlik metni ve fareyle üzerine gelince görünen ipucu için. */
  era: string;
  image: string;
  /** Birincisi yüklenmezse denenecek ikinci dosya. */
  altImage?: string;
  link: string;
};

const commons = (file: string, width = 400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`;

/** Merkezin solundaki portreler — sondaki Spinoza, Nietzsche'nin hemen solunda durur. */
export const leftThinkers: Thinker[] = [
  {
    name: "Sokrates",
    era: "MÖ 5. yy",
    image: commons("Socrates_Louvre.jpg"),
    link: "https://tr.wikipedia.org/wiki/Sokrates",
  },
  {
    name: "Platon",
    era: "MÖ 4. yy",
    image: commons("Plato_Silanion_Musei_Capitolini_MC1377.jpg"),
    link: "https://tr.wikipedia.org/wiki/Platon",
  },
  {
    name: "Aristoteles",
    era: "MÖ 4. yy",
    image: commons("Aristotle_Altemps_Inv8575.jpg"),
    link: "https://tr.wikipedia.org/wiki/Aristoteles",
  },
  {
    name: "Descartes",
    era: "17. yy",
    image: commons("Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg"),
    link: "https://tr.wikipedia.org/wiki/Ren%C3%A9_Descartes",
  },
  {
    name: "Hume",
    era: "18. yy",
    image: commons("Painting_of_David_Hume.jpg"),
    altImage: commons("David_Hume.jpg"),
    link: "https://tr.wikipedia.org/wiki/David_Hume",
  },
  {
    name: "Spinoza",
    era: "17. yy",
    image: commons("Spinoza.jpg"),
    link: "https://tr.wikipedia.org/wiki/Baruch_Spinoza",
  },
];

/** Şeridin tam ortasındaki portre. */
export const centerThinker: Thinker = {
  name: "Nietzsche",
  era: "19. yy",
  image: commons("Nietzsche187a.jpg", 520),
  link: "https://tr.wikipedia.org/wiki/Friedrich_Nietzsche",
};

/** Merkezin sağındaki portreler — baştaki Kant, Nietzsche'nin hemen sağında durur. */
export const rightThinkers: Thinker[] = [
  {
    name: "Kant",
    era: "18. yy",
    image: commons("Immanuel_Kant_(painted_portrait).jpg"),
    link: "https://tr.wikipedia.org/wiki/Immanuel_Kant",
  },
  {
    name: "Hegel",
    era: "19. yy",
    image: commons("Hegel_portrait_by_Schlesinger_1831.jpg"),
    link: "https://tr.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel",
  },
  {
    name: "Marx",
    era: "19. yy",
    image: commons("Karl_Marx_001.jpg"),
    link: "https://tr.wikipedia.org/wiki/Karl_Marx",
  },
  {
    name: "Sartre",
    era: "20. yy",
    image: commons("Jean-Paul_Sartre_FP.JPG"),
    altImage: commons("Jean_Paul_Sartre_1965.jpg"),
    link: "https://tr.wikipedia.org/wiki/Jean-Paul_Sartre",
  },
  {
    name: "Hannah Arendt",
    era: "20. yy",
    image: commons("Hannah_Arendt_1958_(cropped).jpg"),
    altImage: commons("Hannah_Arendt_1975_(cropped).jpg"),
    link: "https://tr.wikipedia.org/wiki/Hannah_Arendt",
  },
];

/** Tüm portreler, soldan sağa sırayla. */
export const thinkers: Thinker[] = [...leftThinkers, centerThinker, ...rightThinkers];
