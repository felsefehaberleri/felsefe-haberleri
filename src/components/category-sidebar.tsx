import Link from "next/link";

import { TagPill } from "@/components/tag-pill";
import { cn } from "@/lib/utils";
import type { CategoryWithCount, TagSummary } from "@/types/content";

/** Masaüstünde sabit duran kategori + etiket kenar çubuğu. */
export function CategorySidebar({
  categories,
  tags,
  activeSlug,
}: {
  categories: CategoryWithCount[];
  tags: TagSummary[];
  activeSlug?: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-10">
        <div>
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Kategoriler</p>
          <ul className="mt-4 space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/kategori/${category.slug}`}
                  aria-current={category.slug === activeSlug ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                    category.slug === activeSlug
                      ? "bg-accent-soft font-medium text-accent"
                      : "text-ink-soft hover:bg-accent-soft hover:text-accent",
                  )}
                >
                  {category.name}
                  <span className="text-xs text-muted">{category.postCount}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {tags.length > 0 && (
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">Etiketler</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TagPill key={tag.id} name={tag.name} slug={tag.slug} />
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
