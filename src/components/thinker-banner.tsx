"use client";

import { useState } from "react";

import { centerThinker, leftThinkers, rightThinkers, type Thinker } from "@/lib/thinkers";

/**
 * Sayfanın en üstündeki portre şeridi.
 *
 * İki çalışma biçimi vardır:
 *
 * 1) TEK GÖRSEL — `NEXT_PUBLIC_BANNER_IMAGE` tanımlıysa (ör. "/banner.jpg")
 *    o dosya tek parça bir şerit olarak basılır. Kendi hazırladığınız toplu
 *    fotoğrafı `public/` klasörüne koyup bu değişkeni tanımlamanız yeterlidir.
 *
 * 2) BİRLEŞİK ŞERİT (varsayılan) — portreler aralıksız yan yana dizilir; ortak
 *    sepya işlemi, degrade ve iç gölge sayesinde tek bir görsel gibi görünür.
 *    Yazı yoktur, yalnızca portreler.
 *
 * Dizilim: sol grup ve sağ grup kalan genişliği eşit paylaşır, ortadaki portre
 * her ekranda tam merkezde kalır (bkz. src/lib/thinkers.ts).
 */
const bannerImage = process.env.NEXT_PUBLIC_BANNER_IMAGE;

/** Tek portre. Görsel yüklenmezse önce yedeği, o da olmazsa sade koyu doku kalır. */
function Portrait({ thinker, emphasized = false }: { thinker: Thinker; emphasized?: boolean }) {
  const [source, setSource] = useState(thinker.image);
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Sessiz yedek: adı yazmadan, şeridin dokusunu sürdüren koyu bir alan.
    return (
      <span
        aria-hidden
        className="h-full min-w-0 flex-1 bg-[radial-gradient(circle_at_50%_35%,#3a342e,#1c1917)]"
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
      onError={() => {
        if (thinker.altImage && source !== thinker.altImage) {
          setSource(thinker.altImage);
          return;
        }
        setFailed(true);
      }}
      className={`h-full min-w-0 object-cover object-top opacity-90 grayscale-[0.9] sepia-[0.25] transition duration-500 hover:opacity-100 hover:grayscale-0 hover:sepia-0 ${
        emphasized ? "w-[13%] shrink-0" : "flex-1"
      }`}
    />
  );
}

export function ThinkerBanner() {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="border-b border-line bg-ink">
      <div className="relative h-[104px] w-full overflow-hidden sm:h-[132px] lg:h-[150px]">
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
            {/* Sol grup ve sağ grup eşit genişlikte; ortadaki portre tam merkezde kalır. */}
            <div className="flex h-full min-w-0 flex-1">
              {leftThinkers.map((thinker) => (
                <Portrait key={thinker.name} thinker={thinker} />
              ))}
            </div>

            <Portrait thinker={centerThinker} emphasized />

            <div className="flex h-full min-w-0 flex-1">
              {rightThinkers.map((thinker) => (
                <Portrait key={thinker.name} thinker={thinker} />
              ))}
            </div>
          </div>
        )}

        {/* Şeridi tek bir görsel gibi bütünleyen degrade ve iç gölge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  );
}
