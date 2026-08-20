import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { BookCard } from "@/components/book-card";
import { Container } from "@/components/container";
import { PhilosopherAvatar } from "@/components/philosopher-card";
import { getBooksByPhilosopher, getPhilosopherBySlug, getPosts } from "@/lib/queries";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const philosopher = await getPhilosopherBySlug(slug);
  if (!philosopher) return { title: "Filozof bulunamadı" };

  return {
    title: philosopher.name,
    description: philosopher.headline ?? philosopher.bio ?? undefined,
  };
}

export default async function PhilosopherPage({ params }: Props) {
  const { slug } = await params;
  const philosopher = await getPhilosopherBySlug(slug);
  if (!philosopher) notFound();

  const [{ items: posts, pagination }, books] = await Promise.all([
    getPosts({ philosopherSlug: slug, limit: 12 }),
    getBooksByPhilosopher(slug),
  ]);

  const meta = [
    philosopher.affiliation,
    philosopher.country,
    philosopher.birthYear ? `d. ${philosopher.birthYear}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Container size="wide">
      <header className="flex flex-col gap-6 border-b border-line py-12 sm:flex-row sm:items-start">
        <PhilosopherAvatar philosopher={philosopher} size={96} />

        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Filozof</p>
          <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{philosopher.name}</h1>

          {philosopher.headline && <p className="mt-2 text-base text-ink-soft">{philosopher.headline}</p>}
          {meta && <p className="mt-2 text-sm text-muted">{meta}</p>}

          {philosopher.bio && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">{philosopher.bio}</p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
            <span className="text-muted">{pagination.total} haber</span>
            {philosopher.website && (
              <a
                href={philosopher.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Resmî sayfa →
              </a>
            )}
          </div>
        </div>
      </header>

      <section className="py-12">
        <h2 className="font-serif text-2xl font-bold">Haberler</h2>

        {posts.length === 0 ? (
          <p className="mt-6 text-sm text-muted">Bu filozofla ilgili henüz haber yok.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      {books.length > 0 && (
        <section className="border-t border-line py-12">
          <h2 className="font-serif text-2xl font-bold">Kitapları</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
