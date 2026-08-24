import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Kapak görseli çerçevesi.
 *
 * SORUN
 * Kapaklar 16:9 kutularda gösteriliyor. Kaynak görsel dikey bir portre ya da
 * kare bir tabloysa `object-cover` onu kırpar; çoğu zaman yüzün yarısı kesilir.
 *
 * ÇÖZÜM
 * Görseli kırpmak yerine tamamını gösteriyoruz (`object-contain`) ve arta kalan
 * boşluğu görselin kendi bulanık kopyasıyla dolduruyoruz. Böylece:
 *  - dikey/kare kapaklarda hiçbir yüz kesilmez, çerçeve de boş kalmaz;
 *  - zaten 16:9 olan kapaklarda bulanık katman görünmez, hiçbir şey değişmez.
 *
 * Bu bileşen haber kapağı gösterilen her yerde kullanılmalıdır.
 */
export function CoverImage({
  src,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  sizes: string;
  priority?: boolean;
  /** Öndeki görsele eklenecek sınıflar (örneğin hover büyütme efekti). */
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="scale-110 object-cover blur-2xl"
      />
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-contain", className)}
      />
    </>
  );
}
