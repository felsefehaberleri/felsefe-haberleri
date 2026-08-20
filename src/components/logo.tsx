import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Marka görselleri.
 *
 * Sitenin iki logosu vardır:
 *   · "owl"   — baykuş: ana logo. Künyede (masthead) kullanılır.
 *   · "eagle" — kartal ve yılan: ikincil logo. Küçük boy simge, sekme ikonu
 *               (favicon), alt bilgi ve e-postalarda kullanılır.
 *
 * Her logonun iki renk sürümü vardır: açık zemin için lacivert mürekkep,
 * koyu zemin için krem mürekkep. Doğru sürüm CSS ile seçilir (`dark:`),
 * böylece tema değişiminde titreme (flash) olmaz ve sunucuda da doğru basılır.
 *
 * Görseller şeffaf PNG'dir; arka planı olmadığı için her zemine oturur.
 */
type LogoVariant = "owl" | "owl-mark" | "eagle" | "mark";

const SOURCES: Record<LogoVariant, { light: string; dark: string; width: number; height: number }> = {
  /** Baykuş + "Felsefe Haberleri" yazısı (dikey kilit). */
  owl: { light: "/logo-owl.png", dark: "/logo-owl-dark.png", width: 720, height: 823 },
  /** Yalnızca baykuş amblemi. */
  "owl-mark": { light: "/logo-owl-mark.png", dark: "/logo-owl-mark-dark.png", width: 360, height: 408 },
  /** Kartal + yılan ve "Felsefe Haberleri" yazısı (dikey kilit). */
  eagle: { light: "/logo-eagle.png", dark: "/logo-eagle-dark.png", width: 640, height: 730 },
  /** Yalnızca kartal + yılan amblemi — sitenin küçük simgesi. */
  mark: { light: "/logo-mark.png", dark: "/logo-mark-dark.png", width: 320, height: 368 },
};

export function Logo({
  variant = "owl-mark",
  className,
  alt = "Felsefe Haberleri",
  priority = false,
  sizes,
}: {
  variant?: LogoVariant;
  /** Yüksekliği burada verin: örn. "h-20 w-auto". */
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const source = SOURCES[variant];
  const shared = {
    width: source.width,
    height: source.height,
    priority,
    sizes,
  };

  return (
    <>
      {/* Açık tema */}
      <Image {...shared} src={source.light} alt={alt} className={cn("dark:hidden", className)} />
      {/* Koyu tema — aynı logonun ikinci kopyası, ekran okuyucuya tekrar okutulmaz. */}
      <Image
        {...shared}
        src={source.dark}
        alt=""
        aria-hidden
        className={cn("hidden dark:block", className)}
      />
    </>
  );
}
