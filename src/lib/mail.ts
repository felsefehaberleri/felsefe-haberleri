import "server-only";

/**
 * E-posta gönderim katmanı.
 *
 * Sağlayıcı: Resend (https://resend.com) — ücretsiz katmanı küçük siteler için yeterli
 * ve sunucusuz ortamda (Vercel) SMTP kurmadan çalışır.
 *
 * RESEND_API_KEY tanımlı değilse hiçbir şey patlamaz: e-posta konsola yazılır.
 * Böylece yerel geliştirmede anahtar olmadan da tüm akışlar denenebilir.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type MailInput = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const contactEmail = process.env.CONTACT_EMAIL ?? "info@felsefehaberleri.com";
const mailFrom = process.env.MAIL_FROM ?? `Felsefe Haberleri <${contactEmail}>`;

export async function sendMail({ to, subject, html, text, replyTo }: MailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info(`[mail:devre dışı] Alıcı: ${to} | Konu: ${subject}\n${text ?? ""}`);
    return false;
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailFrom,
        to: [to],
        subject,
        html,
        ...(text ? { text } : {}),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!response.ok) {
      console.error("[mail] gönderilemedi:", response.status, await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("[mail] hata:", error);
    return false;
  }
}

/** E-posta gövdesine giren kullanıcı metnini kaçışlar. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ------------------------------------------------------------------ */
/* Şablonlar                                                           */
/* ------------------------------------------------------------------ */

/** Tüm e-postalarda ortak, sade ve okunaklı çerçeve. */
function layout(title: string, body: string, footerNote?: string): string {
  const domain = siteUrl.replace(/^https?:\/\//, "");

  return `<!doctype html>
<html lang="tr"><body style="margin:0;background:#faf7f2;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#23201c">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e6e0d6;border-radius:14px;overflow:hidden">
        <tr><td style="padding:24px 30px;border-bottom:2px solid #23201c">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:14px;vertical-align:middle">
              <img src="${siteUrl}/logo-mark.png" width="44" height="51" alt="Felsefe Haberleri" style="display:block;border:0">
            </td>
            <td style="vertical-align:middle">
              <div style="font-family:Georgia,serif;font-weight:800;letter-spacing:.06em;font-size:19px">FELSEFE HABERLERİ</div>
              <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#78716a;margin-top:5px">Çağdaş filozoflar &middot; fikirler &middot; kitaplar</div>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:30px">
          <h1 style="font-family:Georgia,serif;font-size:21px;margin:0 0 16px">${title}</h1>
          ${body}
        </td></tr>
        <tr><td style="padding:18px 30px;border-top:1px solid #e6e0d6;font-size:12px;color:#78716a">
          ${footerNote ?? `<a href="${siteUrl}" style="color:#8f4b2e">${domain}</a> &middot; ${contactEmail}`}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function button(href: string, label: string): string {
  return `<p style="margin:24px 0"><a href="${href}" style="display:inline-block;background:#23201c;color:#faf7f2;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px">${label}</a></p>`;
}

/** Üyelik onayı (double opt-in). */
export function subscriptionConfirmMail(token: string) {
  const link = `${siteUrl}/abone/onay?token=${token}`;

  return {
    subject: "Üyeliğinizi onaylayın — Felsefe Haberleri",
    html: layout(
      "Son bir adım kaldı",
      `<p style="line-height:1.7;font-size:15px">Felsefe Haberleri bültenine kaydolduğunuz için teşekkürler.
       Üyeliğinizi başlatmak için aşağıdaki düğmeye tıklayın.</p>
       ${button(link, "Üyeliğimi onayla")}
       <p style="font-size:13px;color:#78716a;line-height:1.6">Düğme çalışmazsa bu adresi tarayıcınıza yapıştırın:<br>
       <span style="word-break:break-all">${link}</span></p>
       <p style="font-size:13px;color:#78716a;line-height:1.6">Bu kaydı siz yapmadıysanız hiçbir şey yapmanıza gerek yok; onaylanmayan kayıtlar bir süre sonra silinir.</p>`,
    ),
    text: `Üyeliğinizi onaylamak için: ${link}`,
  };
}

/** Onay sonrası hoş geldiniz. */
export function welcomeMail(unsubscribeToken: string) {
  const unsubscribe = `${siteUrl}/abone/cikis?token=${unsubscribeToken}`;

  return {
    subject: "Üyeliğiniz başladı — Felsefe Haberleri",
    html: layout(
      "Hoş geldiniz",
      `<p style="line-height:1.7;font-size:15px">Üyeliğiniz onaylandı. Bundan sonra yeni haberler yayımlandığında
       kısa bir bülten alacaksınız: çağdaş filozofların açıklamaları, yeni kitaplar, konferanslar ve ödüller.</p>
       ${button(siteUrl, "Siteye git")}`,
      `Bültenden çıkmak için <a href="${unsubscribe}" style="color:#8f4b2e">buraya tıklayın</a>. &middot; ${contactEmail}`,
    ),
    text: `Üyeliğiniz onaylandı. Çıkmak için: ${unsubscribe}`,
  };
}

/** Yeni haber bildirimi (zamanlanmış görevle toplu gönderilir). */
export function newPostsMail(
  posts: Array<{ title: string; summary: string; slug: string; categoryName: string }>,
  unsubscribeToken: string,
) {
  const unsubscribe = `${siteUrl}/abone/cikis?token=${unsubscribeToken}`;

  const items = posts
    .map(
      (post) => `<tr><td style="padding:14px 0;border-bottom:1px solid #e6e0d6">
        <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8f4b2e">${escapeHtml(post.categoryName)}</div>
        <a href="${siteUrl}/haber/${post.slug}" style="display:block;font-family:Georgia,serif;font-size:17px;font-weight:700;color:#23201c;text-decoration:none;margin-top:6px">${escapeHtml(post.title)}</a>
        <div style="font-size:14px;color:#4a453e;line-height:1.6;margin-top:6px">${escapeHtml(post.summary)}</div>
      </td></tr>`,
    )
    .join("");

  return {
    subject:
      posts.length === 1 ? `Yeni haber: ${posts[0].title}` : `Felsefe Haberleri — ${posts.length} yeni haber`,
    html: layout(
      posts.length === 1 ? "Yeni bir haber var" : `${posts.length} yeni haber`,
      `<table role="presentation" width="100%">${items}</table>`,
      `Bültenden çıkmak için <a href="${unsubscribe}" style="color:#8f4b2e">buraya tıklayın</a>. &middot; ${contactEmail}`,
    ),
    text: posts.map((post) => `${post.title} — ${siteUrl}/haber/${post.slug}`).join("\n"),
  };
}

/** İletişim formundan gelen mesajın yönetime iletilmesi. */
export function contactNotificationMail(input: {
  name: string;
  email: string;
  subject?: string | null;
  body: string;
}) {
  return {
    subject: `İletişim formu: ${input.subject?.trim() || "Yeni mesaj"}`,
    html: layout(
      "Yeni mesaj",
      `<p style="font-size:14px;line-height:1.7"><strong>Gönderen:</strong> ${escapeHtml(input.name)} &lt;${escapeHtml(input.email)}&gt;</p>
       <p style="font-size:14px;line-height:1.7"><strong>Konu:</strong> ${escapeHtml(input.subject ?? "—")}</p>
       <div style="margin-top:16px;padding:16px;background:#faf7f2;border-radius:10px;font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(input.body)}</div>`,
    ),
    text: `${input.name} <${input.email}>\n${input.subject ?? ""}\n\n${input.body}`,
  };
}

/** Mesajı gönderene otomatik yanıt. */
export function contactAutoReplyMail(name: string) {
  return {
    subject: "Mesajınızı aldık — Felsefe Haberleri",
    html: layout(
      "Mesajınızı aldık",
      `<p style="line-height:1.7;font-size:15px">Merhaba ${escapeHtml(name)},</p>
       <p style="line-height:1.7;font-size:15px">Mesajınız bize ulaştı. En kısa sürede yanıtlayacağız.
       Acil bir konuysa doğrudan <a href="mailto:${contactEmail}" style="color:#8f4b2e">${contactEmail}</a> adresine yazabilirsiniz.</p>`,
    ),
    text: "Mesajınızı aldık, en kısa sürede yanıtlayacağız.",
  };
}
