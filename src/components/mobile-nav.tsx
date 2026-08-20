"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { CategoryWithCount } from "@/types/content";

/** Küçük ekranlarda bölümleri açan yan çekmece (drawer). */
export function MobileNav({ categories }: { categories: CategoryWithCount[] }) {
  const [open, setOpen] = useState(false);

  // Çekmece açıkken arka planın kaymasını engelle.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Menüyü aç"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft lg:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <nav className="absolute top-0 right-0 flex h-full w-72 flex-col gap-1 overflow-y-auto border-l border-line bg-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-serif text-lg font-bold">Bölümler</span>
              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/kategori/${category.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-accent-soft hover:text-accent"
              >
                {category.name}
                <span className="text-xs text-muted">{category.postCount}</span>
              </Link>
            ))}

            <div className="mt-4 space-y-1 border-t border-line pt-4">
              <Link href="/filozoflar" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-accent">
                Filozoflar
              </Link>
              <Link href="/kitaplar" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-accent">
                Kitaplar
              </Link>
              <Link href="/hakkinda" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-accent">
                Hakkında
              </Link>
              <Link href="/iletisim" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-accent">
                İletişim
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
