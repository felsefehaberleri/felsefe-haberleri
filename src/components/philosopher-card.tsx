import Link from "next/link";

import { cn } from "@/lib/utils";
import type { PhilosopherSummary, PhilosopherWithCount } from "@/types/content";

/** Filozofun baş harfleri — görsel yoksa avatar yerine kullanılır. */
function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLocaleUpperCase("tr-TR");
}

export function PhilosopherAvatar({
  philosopher,
  size = 48,
}: {
  philosopher: Pick<PhilosopherSummary, "name" | "avatar">;
  size?: number;
}) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-accent-soft font-serif font-bold text-accent"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden
    >
      {philosopher.avatar ? (
        // Filozof görselleri dış kaynaklı olabildiği için basit <img> kullanıyoruz.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={philosopher.avatar} alt="" className="h-full w-full object-cover" />
      ) : (
        initials(philosopher.name)
      )}
    </span>
  );
}

/** Filozof kartı — /filozoflar listesinde ve ana sayfa şeridinde kullanılır. */
export function PhilosopherCard({
  philosopher,
  className,
}: {
  philosopher: PhilosopherWithCount;
  className?: string;
}) {
  return (
    <Link
      href={`/filozof/${philosopher.slug}`}
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent",
        className,
      )}
    >
      <PhilosopherAvatar philosopher={philosopher} size={48} />

      <span className="min-w-0">
        <span className="block font-serif text-base font-bold transition-colors group-hover:text-accent">
          {philosopher.name}
        </span>
        {philosopher.headline && (
          <span className="mt-1 block text-xs leading-relaxed text-muted">{philosopher.headline}</span>
        )}
        <span className="mt-2 block text-xs text-muted">
          {philosopher.postCount} haber
          {philosopher.country ? ` · ${philosopher.country}` : ""}
        </span>
      </span>
    </Link>
  );
}
