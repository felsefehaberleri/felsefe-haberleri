"use client";

import { useState } from "react";

/** İletişim formu — mesaj hem veritabanına yazılır hem e-posta olarak iletilir. */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", body: "", website: "" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSending(true);
    setNotice(null);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await response.json();

      if (!response.ok || !json?.success) {
        setNotice({ kind: "error", text: json?.error?.message ?? "Mesaj gönderilemedi." });
        return;
      }

      setNotice({ kind: "ok", text: json.meta?.message ?? "Mesajınız iletildi." });
      setForm({ name: "", email: "", subject: "", body: "", website: "" });
    } catch {
      setNotice({ kind: "error", text: "Bağlantı hatası. Lütfen tekrar deneyin." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-line bg-surface p-6 sm:p-7">
      <h2 className="font-serif text-xl font-bold">Mesaj gönderin</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Haber önerisi, etkinlik duyurusu, düzeltme talebi ya da iş birliği için yazabilirsiniz.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="Adınız"
          maxLength={80}
          className="rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-accent"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="E-posta adresiniz"
          maxLength={254}
          className="rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>

      <input
        type="text"
        value={form.subject}
        onChange={(event) => setForm({ ...form, subject: event.target.value })}
        placeholder="Konu (isteğe bağlı)"
        maxLength={140}
        className="mt-3 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-accent"
      />

      <textarea
        required
        rows={7}
        value={form.body}
        onChange={(event) => setForm({ ...form, body: event.target.value })}
        placeholder="Mesajınız…"
        maxLength={4000}
        className="mt-3 w-full resize-y rounded-lg border border-line bg-paper px-3 py-2.5 text-sm leading-relaxed outline-none focus:border-accent"
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

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {sending ? "Gönderiliyor…" : "Mesajı gönder"}
        </button>

        <span className="text-xs text-muted">{form.body.length}/4000</span>

        {notice && (
          <span className={notice.kind === "ok" ? "text-xs text-accent" : "text-xs text-red-600"}>
            {notice.text}
          </span>
        )}
      </div>
    </form>
  );
}
