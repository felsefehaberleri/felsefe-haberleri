import Link from "next/link";

import type { PaginationMeta } from "@/types/content";

/**
 * Basit sayfalama. Sunucu bileşeni: sayfa bağlantıları normal <a> olduğu için
 * JavaScript kapalıyken de çalışır.
 */
export function Pagination({ pagination, basePath }: { pagination: PaginationMeta; basePath: string }) {
  const { page, totalPages, hasNextPage, hasPreviousPage } = pagination;
  if (totalPages <= 1) return null;

  const href = (target: number) => (target === 1 ? basePath : `${basePath}?page=${target}`);

  return (
    <nav aria-label="Sayfalama" className="mt-14 flex items-center justify-between border-t border-line pt-6">
      {hasPreviousPage ? (
        <Link href={href(page - 1)} className="text-sm text-ink-soft transition-colors hover:text-accent">
          ← Önceki
        </Link>
      ) : (
        <span className="text-sm text-muted/60">← Önceki</span>
      )}

      <span className="text-sm text-muted">
        Sayfa {page} / {totalPages}
      </span>

      {hasNextPage ? (
        <Link href={href(page + 1)} className="text-sm text-ink-soft transition-colors hover:text-accent">
          Sonraki →
        </Link>
      ) : (
        <span className="text-sm text-muted/60">Sonraki →</span>
      )}
    </nav>
  );
}
