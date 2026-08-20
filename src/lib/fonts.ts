import { Inter, Merriweather } from "next/font/google";

/** Arayüz (navigasyon, butonlar, etiketler) için sans-serif. */
export const sans = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext: Türkçe karakterler
  variable: "--font-sans",
  display: "swap",
});

/** Uzun metin gövdesi ve başlıklar için serif. */
export const serif = Merriweather({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});
