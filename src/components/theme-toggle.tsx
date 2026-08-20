"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Açık/koyu mod düğmesi.
 *
 * Hidrasyon uyuşmazlığını "mounted" durumuyla değil, CSS ile çözüyoruz:
 * iki ikon da her zaman basılır, hangisinin görüneceğine `dark:` varyantı karar verir.
 * Böylece sunucu ve istemci HTML'i birebir aynı olur, fazladan render olmaz.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Koyu ve açık mod arasında geçiş yap"
      title="Koyu / açık mod"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
    </button>
  );
}
