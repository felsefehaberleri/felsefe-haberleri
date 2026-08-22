"use client";

import { useId, useState } from "react";

/**
 * Bülten üyeliği formu.
 *
 * `variant="card"`   — İletişim sayfası gibi geniş bloklar: başlıklı kutu.
 * `variant="inline"` — Alt bilgi gibi dar sütunlar: başlıksız, alt alta.
 *
 * YERLEŞİM NOTU
 * Alanlar tek satıra sıkıştırılmıyor. Ad ve e-posta bir ızgarada durur; düğme
 * kendi satırındadır. Böylece dar sütunda e-posta kutusu ezilmez — önceki
 * sürümde tam bu oluyordu.
 */
type Notice = { kind: "ok" | "warn" | "error"; text: string };

const NOTICE_STYLE: Record<Notice["kind"], string> = {
  ok: "border-accent/30 bg-accent-soft text-accent",
  warn: "border-line bg-paper text-ink-soft",
  error: "border-red-200 bg-red-50 text-red-700",
};

export function SubscribeForm({ variant = "card" }: { variant?: "card" | "inline" }) {
  const id = useId();
  const [form, setForm] = useState({ email: "", name: "", website: "" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSending(true);
    setNotice(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await response.json();

      if (!response.ok || !json?.success) {
        setNotice({ kind: "error", text: json?.error?.message ?? "Kayıt yapılamadı." });
        return;
      }

      setNotice({
        // E-posta gönderilemediyse bu bir hata değil; kayıt alındı ama beklemede.
        kind: json.meta?.mailSent === false ? "warn" : "ok",
        text: json.meta?.message ?? "Onay e-postası gönderildi.",
      });
      setForm({ email: "", name: "", website: "" });
    } catch {
      setNotice({ kind: "error", text: "Bağlantı kurulamadı. Lütfen tekrar deneyin." });
    } finally {
      setSending(false);
    }
  }

  const inline = variant === "inline";
  const alan =
    "w-full min-w-0 rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm outline-none " +
    "placeholder:text-muted focus:border-accent";

  return (
    <form onSubmit={submit} className={inline ? "" : "rounded-xl border border-line bg-surface p-6 sm:p-7"}>
      {!inline && (
        <>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Üyelik</p>
          <h2 className="mt-3 font-serif text-xl leading-snug font-bold">
            Yeni haberler e-postanıza gelsin
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Üye olun; yeni haberler yayımlandığında kısa bir bülten gönderelim. Ücretsiz, tek
            tıkla çıkabilirsiniz.
          </p>
        </>
      )}

      <div className={inline ? "mt-3 grid gap-2" : "mt-5 grid gap-3"}>
        {/* Dar alanda alt alta, geniş alanda yan yana */}
        <div className={inline ? "grid gap-2" : "grid gap-3 sm:grid-cols-2"}>
          <div>
            <label htmlFor={`${id}-ad`} className="sr-only">
              Adınız
            </label>
            <input
              id={`${id}-ad`}
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Adınız (isteğe bağlı)"
              maxLength={80}
              autoComplete="name"
              className={alan}
            />
          </div>

          <div>
            <label htmlFor={`${id}-eposta`} className="sr-only">
              E-posta adresiniz
            </label>
            <input
              id={`${id}-eposta`}
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="E-posta adresiniz"
              maxLength={254}
              autoComplete="email"
              className={alan}
            />
          </div>
        </div>

        {/* Bot tuzağı — insanlar görmez, doldurulursa kayıt sessizce yok sayılır. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={form.website}
          onChange={(event) => setForm({ ...form, website: event.target.value })}
          className="hidden"
        />

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-lg bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-40 sm:w-auto sm:justify-self-start"
        >
          {sending ? "Gönderiliyor…" : "Üye ol"}
        </button>
      </div>

      {notice && (
        <p
          role="status"
          className={`mt-4 rounded-lg border px-3.5 py-2.5 text-[13px] leading-relaxed ${NOTICE_STYLE[notice.kind]}`}
        >
          {notice.text}
        </p>
      )}

      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        Kaydolduktan sonra adresinize bir onay bağlantısı gönderilir; onaylamadan bülten
        başlamaz. Adresiniz üçüncü kişilerle paylaşılmaz.
      </p>
    </form>
  );
}
