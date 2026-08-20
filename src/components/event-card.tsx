import { CalendarDays, Globe, MapPin, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import type { EventItem } from "@/types/content";

/** Etkinlik türünün Türkçe karşılığı. */
const KIND_LABELS: Record<string, string> = {
  KONFERANS: "Konferans",
  KONGRE: "Kongre",
  SEMPOZYUM: "Sempozyum",
  CALISTAY: "Çalıştay",
  SEMINER: "Seminer",
  WEBINAR: "Webinar",
  PANEL: "Panel",
  DERS: "Ders",
  KOLOKYUM: "Kolokyum",
  YAZ_OKULU: "Yaz Okulu",
  KIS_OKULU: "Kış Okulu",
  CFP: "Bildiri Çağrısı",
};

const FORMAT_LABELS: Record<string, string> = {
  ONLINE: "Çevrimiçi",
  FIZIKSEL: "Yüz yüze",
  HIBRIT: "Hibrit",
};

const dayFormat = new Intl.DateTimeFormat("tr-TR", { day: "numeric" });
const monthFormat = new Intl.DateTimeFormat("tr-TR", { month: "short" });
const fullDate = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });
const timeFormat = new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit" });

/** "6-7 Şubat 2026" ya da "6 Şubat 2026" biçiminde tarih aralığı. */
function formatRange(event: EventItem): string {
  const start = fullDate.format(event.startsAt);
  if (!event.endsAt) return start;

  const sameDay = event.startsAt.toDateString() === event.endsAt.toDateString();
  if (sameDay) return start;

  return `${fullDate.format(event.startsAt)} – ${fullDate.format(event.endsAt)}`;
}

/**
 * Etkinlik kartı.
 * Solda takvim yaprağı, sağda künye: tür, başlık, düzenleyen, yer, biçim, kayıt.
 * `past` geçmiş etkinlikleri soluklaştırır (arşiv görünümü).
 */
export function EventCard({ event, past = false }: { event: EventItem; past?: boolean }) {
  const place = [event.venue, event.city, event.country].filter(Boolean).join(", ");
  const deadline = event.cfpDeadline ?? event.deadline;
  const deadlineLabel = event.cfpDeadline ? "Bildiri son tarihi" : "Kayıt son tarihi";

  return (
    <article
      className={cn(
        "flex gap-5 rounded-xl border border-line bg-surface p-5 transition-colors",
        past ? "opacity-70" : "hover:border-accent",
      )}
    >
      {/* Takvim yaprağı */}
      <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-line bg-paper">
        <span className="font-serif text-xl leading-none font-bold">
          {dayFormat.format(event.startsAt)}
        </span>
        <span className="mt-1 text-[10px] tracking-widest text-muted uppercase">
          {monthFormat.format(event.startsAt)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            {KIND_LABELS[event.kind] ?? event.kind}
          </span>
          <span className="text-[11px] tracking-wide text-muted uppercase">
            {FORMAT_LABELS[event.format] ?? event.format}
          </span>
        </div>

        <h3 className="mt-1.5 font-serif text-lg leading-snug font-bold">{event.title}</h3>

        {event.topic && <p className="mt-1 text-sm text-ink-soft italic">{event.topic}</p>}

        {event.summary && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{event.summary}</p>
        )}

        <dl className="mt-3 grid gap-1.5 text-xs text-muted">
          <div className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            <dd>
              {formatRange(event)}
              {event.hasTime && ` · ${timeFormat.format(event.startsAt)}`}
              {event.hasTime && event.timezone && ` (${event.timezone})`}
            </dd>
          </div>

          {place && (
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <dd>{place}</dd>
            </div>
          )}

          {event.organizer && (
            <div className="flex items-start gap-2">
              <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <dd>
                {event.organizer}
                {event.speakers && ` · ${event.speakers}`}
              </dd>
            </div>
          )}

          {deadline && !past && (
            <div className="flex items-start gap-2">
              <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
              <dd className="text-accent">
                {deadlineLabel}: {fullDate.format(deadline)}
              </dd>
            </div>
          )}

          {event.fee && (
            <div className="flex items-start gap-2">
              <Globe className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <dd>{event.fee}</dd>
            </div>
          )}
        </dl>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
          {event.registrationUrl && !past && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-4 py-1.5 font-medium text-paper transition-opacity hover:opacity-90"
            >
              Kayıt ol
            </a>
          )}

          {event.website && (
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Resmî site →
            </a>
          )}

          {event.sourceUrl && (
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent"
            >
              Kaynak: {event.sourceName ?? "bağlantı"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
