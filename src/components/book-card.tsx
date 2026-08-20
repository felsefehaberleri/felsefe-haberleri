import Image from "next/image";

import { cn } from "@/lib/utils";
import type { BookSummary } from "@/types/content";

/** Kitap kartı — "Yeni Kitaplar" bölümü ve filozof profillerinde. */
export function BookCard({ book, className }: { book: BookSummary; className?: string }) {
  const meta = [book.publisher, book.year?.toString(), book.language].filter(Boolean).join(" · ");

  return (
    <article className={cn("flex gap-4 rounded-xl border border-line bg-surface p-4", className)}>
      {book.coverImage && (
        <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md border border-line">
          <Image src={book.coverImage} alt="" fill sizes="80px" className="object-cover" />
        </div>
      )}

      <div className="min-w-0">
        <h3 className="font-serif text-base leading-snug font-bold">{book.title}</h3>

        {book.originalTitle && <p className="mt-1 text-xs text-muted italic">{book.originalTitle}</p>}

        {book.philosopher && <p className="mt-1.5 text-sm text-accent">{book.philosopher.name}</p>}

        {book.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{book.description}</p>
        )}

        {meta && (
          <p className="mt-2 text-xs text-muted">
            {meta}
            {book.translator ? ` · Çeviri: ${book.translator}` : ""}
          </p>
        )}

        {book.link && (
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-accent hover:underline"
          >
            Yayıncı sayfası →
          </a>
        )}
      </div>
    </article>
  );
}
