import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThinkerBanner } from "@/components/thinker-banner";
import { sans, serif } from "@/lib/fonts";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Felsefe Haberleri — Çağdaş filozoflardan güncel haberler",
    template: "%s — Felsefe Haberleri",
  },
  description:
    "Çağdaş filozofların konuşmaları, açıklamaları, fikirleri ve yeni kitapları. Gündem, Türkiye, Dünya, konferanslar, ödüller ve kitap haberleri.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Felsefe Haberleri",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes tema sınıfını istemcide eklediği için gerekli.
    <html lang="tr" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThinkerBanner />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
