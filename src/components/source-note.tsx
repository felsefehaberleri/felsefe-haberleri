import type { SourceRef } from "@/types/content";

/**
 * Haberin kaynak künyesi.
 *
 * Bir haberin birden çok kaynağı olabilir (aynı olayı farklı yayınlar duyurduğunda
 * tek haber açılır, kaynaklar burada listelenir). Birincil kaynak başta gösterilir.
 * Bir haber sitesinde en kritik güven unsuru budur; bu yüzden ayrı bir bileşen.
 */
export function SourceNote({
  name,
  url,
  sources = [],
}: {
  /** Ana kaynak adı (eski tek kaynaklı kayıtlar için). */
  name: string | null;
  url: string | null;
  sources?: SourceRef[];
}) {
  // Çoklu kaynak varsa onu kullan; yoksa tek kaynağa düş.
  const list: SourceRef[] =
    sources.length > 0
      ? sources
      : name
        ? [{ id: "main", title: name, publisher: null, date: null, url: url ?? "", primary: true }]
        : [];

  if (list.length === 0) return null;

  return (
    <aside className="mt-12 rounded-xl border border-line bg-surface p-5 text-sm">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">
        {list.length > 1 ? "Kaynaklar" : "Kaynak"}
      </p>

      <ul className="mt-3 space-y-2">
        {list.map((source) => (
          <li key={source.id} className="leading-relaxed text-ink-soft">
            {source.primary && list.length > 1 && (
              <span className="mr-2 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                Birincil
              </span>
            )}

            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {source.title}
              </a>
            ) : (
              source.title
            )}

            {(source.publisher || source.date) && (
              <span className="text-muted">
                {" — "}
                {[source.publisher, source.date].filter(Boolean).join(", ")}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-muted">
        Bu haber yukarıdaki kaynaklardan derlenmiştir. Düzeltme talepleri için iletişime
        geçebilirsiniz.
      </p>
    </aside>
  );
}
