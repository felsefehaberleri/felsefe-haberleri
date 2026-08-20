/**
 * Haberin kaynak künyesi.
 * Bir haber sitesinde en kritik güven unsuru budur; bu yüzden ayrı bir bileşen.
 */
export function SourceNote({ name, url }: { name: string | null; url: string | null }) {
  if (!name) return null;

  return (
    <aside className="mt-12 rounded-xl border border-line bg-surface p-5 text-sm">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">Kaynak</p>
      <p className="mt-2 text-ink-soft">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            {name}
          </a>
        ) : (
          name
        )}
      </p>
      <p className="mt-2 text-xs text-muted">
        Bu haber yukarıdaki kaynaktan derlenmiştir. Düzeltme talepleri için iletişime geçebilirsiniz.
      </p>
    </aside>
  );
}
