"use client";

import { useState } from "react";

/**
 * Bülten üyeliği formu.
 * `variant="inline"` footer gibi dar alanlar, `variant="card"` geniş bloklar içindir.
 */
export function SubscribeForm({ variant = "card" }: { variant?: "card" | "inline" }) {
  const [form, setForm] = useState({ email: "", name: "", website: "" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

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

      setNotice({ kind: "ok", text: json.meta?.message ?? "Onay e-postası gönderildi." });
      setForm({ email: "", name: "", website: "" });
    } catch {
      setNotice({ kind: "error", text: "Bağlantı hatası. Lütfen tekrar deneyin." });
    } finally {
      setSending(false);
    }
  }

  const inline = variant === "inline";

  return (
    <form
      onSubmit={submit}
      className={
        inline ? "" : "rounded-xl border border-line bg-surface p-6 sm:p-7"
      }
    >
      {!inline && (
        <>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Üyelik</p>
          <h2 className="mt-3 font-serif text-xl font-bold">Yeni haberler e-postanıza gelsin</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Üye olun; yeni haberler yayımlandığında kısa bir bülten gönderelim. Ücretsiz,
            tek tıkla çıkabilirsiniz.
          </p>
        </>
      )}

      <div className={inline ? "mt-3 flex flex-col gap-2" : "mt-5 flex flex-col gap-3 sm:flex-row"}>
        {!inline && (
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Adınız (isteğe bağlı)"
            maxLength={80}
            className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-accent sm:w-44"
          />
        )}

        <input
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="e-posta adresiniz"
          maxLength={254}
          className="w-full flex-1 rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-accent"
        />

        {/* Bot tuzağı */}
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
          className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium whitespace-nowrap text-paper transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {sending ? "Gönderiliyor…" : "Üye ol"}
        </button>
      </div>

      {notice && (
        <p className={notice.kind === "ok" ? "mt-3 text-xs text-accent" : "mt-3 text-xs text-red-600"}>
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
