import Image from "next/image";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import type { PostListItem } from "@/types/content";

/**
 * Haber kartı.
 * `variant="compact"` kenar çubuğu/ilgili haberler için görselsiz sıkışık hâldir.
 */
export function ArticleCard({
  post,
  variant = "default",
  className,
}: {
  post: PostListItem;
  variant?: "default" | "compact";
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <article className={cn("group border-b border-line pb-4 last:border-0", className)}>
        <p className="text-xs tracking-wide text-accent uppercase">{post.category.name}</p>
        <h3 className="mt-1.5 font-serif text-base leading-snug font-bold">
          <Link href={`/haber/${post.slug}`} className="transition-colors group-hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-xs text-muted">{formatDate(post.publishedAt)}</p>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-shadow hover:shadow-md",
        className,
      )}
    >
      {post.coverImage && (
        <Link href={`/haber/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-5">
        <Link
          href={`/kategori/${post.category.slug}`}
          className="text-xs font-medium tracking-wide text-accent uppercase"
        >
          {post.category.name}
        </Link>

        <h3 className="mt-2 font-serif text-lg leading-snug font-bold">
          <Link href={`/haber/${post.slug}`} className="transition-colors group-hover:text-accent">
            {post.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>

        {post.philosophers.length > 0 && (
          <p className="mt-3 text-xs text-ink-soft">
            {post.philosophers.map((philosopher) => philosopher.name).join(", ")}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <span>{post.author.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt?.toISOString()}>{formatDate(post.publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}
