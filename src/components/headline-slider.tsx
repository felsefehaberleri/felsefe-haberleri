"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { formatDate } from "@/lib/utils";
import type { PostListItem } from "@/types/content";

/**
 * Manşet slider'ı — sağa/sola kaydırmalı.
 *
 * Kaydırma CSS `scroll-snap` ile yapılır: parmakla sürükleme, fare tekeri ve
 * klavye ok tuşları JavaScript olmadan da çalışır. Oklar ve noktalar yalnızca
 * kolaylık sağlar; JavaScript kapalıysa slider yatay kaydırılabilir bir şerit olur.
 */
export function HeadlineSlider({ posts }: { posts: PostListItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(posts.length - 1, index));
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
  }, [posts.length]);

  // Kaydırma bittiğinde etkin slaytı güncelle.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActive(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  if (posts.length === 0) return null;

  return (
    <section aria-roledescription="carousel" aria-label="Manşet" className="relative">
      <div
        ref={trackRef}
        className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") scrollTo(active + 1);
          if (event.key === "ArrowLeft") scrollTo(active - 1);
        }}
      >
        {posts.map((post, index) => (
          <article
            key={post.id}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${posts.length}`}
            className="relative w-full shrink-0 snap-start"
          >
            <div className="relative h-[420px] w-full overflow-hidden sm:h-[460px] lg:h-[520px]">
              {post.coverImage && (
                // Manşet görselleri tam genişlikte; ölçek bilinmediği için <img>.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

              <div className="absolute inset-x-0 bottom-0">
                <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-10 sm:pb-14">
                  <Link
                    href={`/kategori/${post.category.slug}`}
                    className="inline-block bg-accent px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-white uppercase"
                  >
                    {post.category.name}
                  </Link>

                  <h2 className="mt-4 max-w-3xl font-serif text-2xl leading-tight font-bold text-balance text-white sm:text-3xl lg:text-4xl">
                    <Link href={`/haber/${post.slug}`} className="transition-opacity hover:opacity-80">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 hidden max-w-2xl text-sm leading-relaxed text-white/80 sm:block">
                    {post.summary}
                  </p>

                  <p className="mt-4 text-xs text-white/60">
                    {post.author.name} · {formatDate(post.publishedAt)}
                    {post.philosophers.length > 0 &&
                      ` · ${post.philosophers.map((philosopher) => philosopher.name).join(", ")}`}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {posts.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Önceki manşet"
            onClick={() => scrollTo(active - 1)}
            className="absolute top-1/2 left-3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/50 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Sonraki manşet"
            onClick={() => scrollTo(active + 1)}
            className="absolute top-1/2 right-3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/50 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {posts.map((post, index) => (
              <button
                key={post.id}
                type="button"
                aria-label={`${index + 1}. manşete git`}
                aria-current={index === active}
                onClick={() => scrollTo(index)}
                className={
                  index === active
                    ? "h-1.5 w-7 rounded-full bg-white transition-all"
                    : "h-1.5 w-1.5 rounded-full bg-white/50 transition-all hover:bg-white/80"
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
