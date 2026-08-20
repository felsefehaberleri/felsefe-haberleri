import type { PhilosopherDetail } from "@/types/content";

/**
 * Filozof Dizini künyesi — ansiklopedik alanların tablo görünümü.
 *
 * Boş alanlar hiç basılmaz: doğrulanmamış bilgi yerine boşluk bırakmak,
 * uydurma bilgi yazmaktan iyidir (2. kural).
 */
function Row({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;

  return (
    <div className="grid gap-1 border-b border-line py-2.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
      <dd className="text-sm text-ink-soft">{value}</dd>
    </div>
  );
}

/** Satır satır yazılmış listeleri madde madde gösterir. */
function ListRow({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;

  const items = value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className="grid gap-1 border-b border-line py-2.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
      <dd>
        <ul className="space-y-1 text-sm text-ink-soft">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

/** "Başlık — URL" biçimindeki kaynak satırlarını bağlantıya çevirir. */
function SourceRow({ value }: { value: string | null | undefined }) {
  if (!value) return null;

  const items = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separator = line.lastIndexOf(" — ");
      if (separator === -1) return { title: line, url: null };
      return { title: line.slice(0, separator), url: line.slice(separator + 3) };
    });

  if (items.length === 0) return null;

  return (
    <div className="grid gap-1 py-2.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs tracking-wide text-muted uppercase">Kaynaklar</dt>
      <dd>
        <ul className="space-y-1 text-sm">
          {items.map((item) => (
            <li key={item.title}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-ink-soft">{item.title}</span>
              )}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export function PhilosopherProfile({ philosopher }: { philosopher: PhilosopherDetail }) {
  // Yaşayan filozofa ölüm tarihi yazılmaz (15. ve 33. kural).
  const lifespan = philosopher.alive
    ? philosopher.birthDate
      ? `${philosopher.birthDate} — yaşıyor`
      : null
    : [philosopher.birthDate, philosopher.deathDate].filter(Boolean).join(" — ") || null;

  const hasAny =
    lifespan ||
    philosopher.fullName ||
    philosopher.period ||
    philosopher.school ||
    philosopher.areas ||
    philosopher.majorWorks ||
    philosopher.keyConcepts ||
    philosopher.influencedBy ||
    philosopher.influenced ||
    philosopher.sources;

  if (!hasAny) return null;

  return (
    <section className="border-t border-line py-10">
      <div className="flex items-center gap-4 border-b-2 border-ink pb-2">
        <h2 className="font-serif text-lg font-bold tracking-wide">Künye</h2>
        <span className="h-px flex-1 bg-line" aria-hidden />
      </div>

      <dl className="mt-5">
        <Row label="Tam adı" value={philosopher.fullName} />
        <Row label="Yaşam" value={lifespan} />
        <Row label="Ülke" value={philosopher.country} />
        <Row label="Dönem" value={philosopher.period} />
        <Row label="Akım" value={philosopher.school} />
        <Row label="Kurum" value={philosopher.affiliation} />
        <Row label="Çalışma alanları" value={philosopher.areas} />
        <ListRow label="Önemli eserleri" value={philosopher.majorWorks} />
        <Row label="Temel kavramlar" value={philosopher.keyConcepts} />
        <Row label="Etkilendikleri" value={philosopher.influencedBy} />
        <Row label="Etkiledikleri" value={philosopher.influenced} />
        <SourceRow value={philosopher.sources} />
      </dl>
    </section>
  );
}
