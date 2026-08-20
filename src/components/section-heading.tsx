import Link from "next/link";

/** Gazete tarzı bölüm başlığı: küçük büyük harfli başlık + ince çizgi. */
export function SectionHeading({
  title,
  href,
  hrefLabel = "Tümü",
  note,
}: {
  title: string;
  href?: string;
  hrefLabel?: string;
  note?: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b-2 border-ink pb-2">
      <h2 className="font-serif text-lg font-bold tracking-wide">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden />
      {note && <span className="text-xs text-muted">{note}</span>}
      {href && (
        <Link href={href} className="text-xs font-medium tracking-wide text-accent uppercase hover:underline">
          {hrefLabel} →
        </Link>
      )}
    </div>
  );
}
