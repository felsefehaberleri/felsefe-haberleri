import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCategories } from "@/lib/queries";

/** Gazete künyesi biçiminde üst başlık: tarih şeridi + logo + bölüm çubuğu. */
export async function SiteHeader() {
  const categories = await getCategories();

  const today = new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header>
      {/* Üst şerit: tarih + tema düğmesi */}
      <div className="border-b border-line bg-surface">
        <Container size="wide" className="flex h-10 items-center justify-between gap-4">
          <p className="truncate text-[11px] tracking-wide text-muted uppercase">{today}</p>

          <div className="flex items-center gap-3">
            <Link href="/hakkinda" className="hidden text-[11px] tracking-wide text-muted uppercase hover:text-accent sm:block">
              Hakkında
            </Link>
            <Link href="/iletisim" className="hidden text-[11px] tracking-wide text-muted uppercase hover:text-accent sm:block">
              İletişim
            </Link>
            <ThemeToggle />
            <MobileNav categories={categories} />
          </div>
        </Container>
      </div>

      {/* Künye — amblem, ad ve slogan tek eksende ortalanır */}
      <Container size="wide" className="py-6 text-center sm:py-8">
        <Link href="/" className="inline-flex flex-col items-center gap-3 sm:gap-4">
          <Logo
            variant="owl-mark"
            className="h-14 w-auto sm:h-20"
            alt="Felsefe Haberleri amblemi"
            priority
            sizes="(min-width: 640px) 80px, 56px"
          />
          <span className="block font-serif text-3xl leading-none font-black tracking-[0.06em] sm:text-5xl">
            FELSEFE HABERLERİ
          </span>
        </Link>
        <p className="mt-3 text-[11px] tracking-[0.25em] text-muted uppercase">
          Çağdaş filozoflar · fikirler · kitaplar
        </p>
      </Container>

      {/* Bölüm çubuğu — mobilde yatay kaydırılır */}
      <nav className="sticky top-0 z-40 border-y-2 border-ink bg-paper/95 backdrop-blur">
        <Container size="wide">
          <ul className="scrollbar-none flex items-center gap-6 overflow-x-auto py-2.5">
            {/* Küçük simge: künye yukarı kaydığında markayı görünür tutar ve ana sayfaya döner. */}
            <li className="shrink-0 border-r border-line pr-5">
              <Link href="/" aria-label="Ana sayfa" className="block transition-opacity hover:opacity-70">
                <Logo variant="mark" className="h-6 w-auto" alt="Felsefe Haberleri" sizes="24px" />
              </Link>
            </li>

            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  // "Konferanslar" bölümü etkinlik takvimine gider; diğerleri haber arşivine.
                  href={category.slug === "konferanslar" ? "/konferanslar" : `/kategori/${category.slug}`}
                  className="text-[12.5px] font-medium tracking-wide whitespace-nowrap text-ink-soft uppercase transition-colors hover:text-accent"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="ml-auto hidden gap-6 lg:flex">
              <Link
                href="/filozoflar"
                className="text-[12.5px] font-medium tracking-wide whitespace-nowrap text-accent uppercase hover:underline"
              >
                Filozof Dizini
              </Link>
              <Link
                href="/kitaplar"
                className="text-[12.5px] font-medium tracking-wide whitespace-nowrap text-accent uppercase hover:underline"
              >
                Kitaplık
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
