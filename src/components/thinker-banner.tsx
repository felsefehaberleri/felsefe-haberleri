"use client";

import { useState } from "react";

import { thinkers, type Thinker } from "@/lib/thinkers";

/**
 * Sayfanın en üstündeki portre şeridi.
 *
 * İki çalışma biçimi vardır:
 *
 * 1) TEK GÖRSEL — `NEXT_PUBLIC_BANNER_IMAGE` tanımlıysa (ör. "/banner.jpg")
 *    o dosya tek parça bir şerit olarak basılır.
 *
 * 2) BİRLEŞİK ŞERİT (varsayılan) — 13 portre eşit genişlikte, aralıksız yan yana
 *    dizilir. Eşit genişlik sayesinde ortadaki portre (Nietzsche) her ekranda tam
 *    merkezde kalır. Ortak sepya işlemi ve degrade, şeridi tek bir görsel gibi
 *    gösterir; üzerinde yazı yoktur.
 *
 * Kırpma noktası her portre için ayrı ayarlanır (bkz. `focus`, src/lib/thinkers.ts),
 * böylece yüzler kadrajın ortasında kalır, kafalar kesilmez.
 */
const bannerImage = process.env.NEXT_PUBLIC_BANNER_IMAGE;

/** Tek portre. Görsel yüklenmezse önce yedeği, o da olmazsa sade koyu doku kalır. */
function Portrait({ thinker }: { thinker: Thinker }) {
  const [source, setSource] = useState(thinker.image);
  const [failed, setFailed] = useState(false);

  // Tüm kutular aynı genişlikte: şerit boyunca eşit bölünür.
  const cell = "h-full min-w-0 flex-1 basis-0";

  if (failed) {
    // Sessiz yedek: ad yazmadan, şeridin dokusunu sürdüren koyu bir alan.
    return (
      <span
        aria-hidden
        className={`${cell} bg-[radial-gradient(circle_at_50%_35%,#3a342e,#1c1917)]`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={source}
      alt={`${thinker.name} — ${thinker.era}`}
      title={thinker.name}
      loading="eager"
      style={{ objectPosition: thinker.focus }}
      onError={() => {
        if (thinker.altImage && source !== thinker.altImage) {
          setSource(thinker.altImage);
          return;
        }
        setFailed(true);
      }}
      className={`${cell} object-cover opacity-90 grayscale-[0.9] sepia-[0.25] transition duration-500 hover:opacity-100 hover:grayscale-0 hover:sepia-0`}
    />
  );
}

export function ThinkerBanner() {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="border-b border-line bg-ink">
      <div className="relative h-[110px] w-full overflow-hidden sm:h-[140px] lg:h-[164px]">
        {bannerImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bannerImage}
            alt="Felsefe tarihinin düşünürleri"
            onError={() => setHidden(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full">
            {thinkers.map((thinker) => (
              <Portrait key={thinker.name} thinker={thinker} />
            ))}
          </div>
        )}

        {/* Şeridi tek bir görsel gibi bütünleyen degrade ve iç gölge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.45)]"
        />
      </div>
    </div>
  );
}
