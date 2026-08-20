"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * next-themes sağlayıcısı. `attribute="class"` sayesinde tema değişimi
 * <html> etiketine `dark` sınıfı ekler; Tailwind bunu `dark:` varyantıyla okur.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
