import type { MetadataRoute } from "next";

/**
 * Web uygulama künyesi.
 *
 * Telefonda "Ana ekrana ekle" denince sitenin adı ve simgesi buradan okunur.
 * Simge, sitenin küçük logosudur: kartal ve yılan amblemi.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Felsefe Haberleri",
    short_name: "Felsefe",
    description:
      "Çağdaş filozofların konuşmaları, açıklamaları, fikirleri ve yeni kitapları.",
    start_url: "/",
    display: "standalone",
    lang: "tr",
    background_color: "#faf7f2",
    theme_color: "#1f4354",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
