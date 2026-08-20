import Link from "next/link";

import { cn } from "@/lib/utils";

/** Etiket rozeti — etiket arşiv sayfasına bağlanır. */
export function TagPill({ name, slug, className }: { name: string; slug: string; className?: string }) {
  return (
    <Link
      href={`/etiket/${slug}`}
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {name}
    </Link>
  );
}
