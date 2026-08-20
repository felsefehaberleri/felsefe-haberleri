/**
 * İçerik eşitleme — her yayında (deploy) çalışır.
 *
 * `prisma/seed-data.ts` dosyası sitenin içerik kaynağıdır. Bu betik oradaki
 * bölümleri, etiketleri, editörleri, filozofları, haberleri ve kitapları
 * veritabanına **upsert** eder:
 *
 *   - Yeni kayıt varsa eklenir.
 *   - Var olan kayıt güncellenmişse üzerine yazılır.
 *   - Dosyadan çıkarılan kayıtlar veritabanında **silinmez** (55/56. kural).
 *
 * Okur verisine (yorumlar, üyeler, iletişim mesajları) hiç dokunmaz.
 *
 * Böylece yeni haber eklemek için tek yapılması gereken `seed-data.ts` dosyasını
 * güncelleyip GitHub'a yüklemek olur; Vercel yayına alırken içerik kendiliğinden
 * siteye işlenir.
 *
 * Veritabanına ulaşılamazsa derleme durmasın diye uyarı yazıp geçer.
 */
import { PrismaClient } from "@prisma/client";

import { authors, books, categories, events, philosophers, posts, tags } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  const started = Date.now();
  let created = 0;
  let updated = 0;

  // 1) Bölümler
  for (const category of categories) {
    const existing = await prisma.category.findUnique({ where: { slug: category.slug } });
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name, description: category.description, order: category.order },
      create: category,
    });
    existing ? updated++ : created++;
  }

  // 2) Etiketler
  for (const tag of tags) {
    const existing = await prisma.tag.findUnique({ where: { slug: tag.slug } });
    await prisma.tag.upsert({ where: { slug: tag.slug }, update: { name: tag.name }, create: tag });
    existing ? updated++ : created++;
  }

  // 3) Editörler
  for (const author of authors) {
    const existing = await prisma.author.findUnique({ where: { slug: author.slug } });
    await prisma.author.upsert({
      where: { slug: author.slug },
      update: { name: author.name, avatar: author.avatar, bio: author.bio },
      create: author,
    });
    existing ? updated++ : created++;
  }

  // 4) Filozoflar
  for (const philosopher of philosophers) {
    const existing = await prisma.philosopher.findUnique({ where: { slug: philosopher.slug } });
    await prisma.philosopher.upsert({
      where: { slug: philosopher.slug },
      update: philosopher,
      create: philosopher,
    });
    existing ? updated++ : created++;
  }

  // 5) Haberler ve kalıcı içerikler
  for (const post of posts) {
    const { authorSlug, categorySlug, tagSlugs, philosopherSlugs, publishedAt, ...rest } = post;

    const data = {
      ...rest,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      author: { connect: { slug: authorSlug } },
      category: { connect: { slug: categorySlug } },
    };

    const existing = await prisma.post.findUnique({ where: { slug: post.slug } });

    const saved = await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        ...data,
        // Listeleri önce boşaltıp yeniden bağlıyoruz ki kaldırılan ilişkiler kalmasın.
        tags: { set: [], connect: tagSlugs.map((slug) => ({ slug })) },
        philosophers: { set: [], connect: philosopherSlugs.map((slug) => ({ slug })) },
      },
      create: {
        ...data,
        tags: { connect: tagSlugs.map((slug) => ({ slug })) },
        philosophers: { connect: philosopherSlugs.map((slug) => ({ slug })) },
      },
    });

    // Kaynak künyesi: haberin kendi kaynakları yeniden yazılır.
    // (Bunlar haberin alt kayıtlarıdır; içerik silme sayılmaz.)
    await prisma.postSource.deleteMany({ where: { postId: saved.id } });

    if (post.sources?.length) {
      await prisma.postSource.createMany({
        data: post.sources.map((source, index) => ({
          postId: saved.id,
          title: source.title,
          publisher: source.publisher ?? null,
          date: source.date ?? null,
          url: source.url,
          primary: source.primary ?? false,
          order: index,
        })),
      });
    }

    existing ? updated++ : created++;
  }

  // 6) Kitaplar
  for (const book of books) {
    const { philosopherSlug, postSlug, ...rest } = book;

    const data = {
      ...rest,
      philosopher: philosopherSlug ? { connect: { slug: philosopherSlug } } : undefined,
      post: postSlug ? { connect: { slug: postSlug } } : undefined,
    };

    const existing = await prisma.book.findUnique({ where: { slug: book.slug } });
    await prisma.book.upsert({ where: { slug: book.slug }, update: data, create: data });
    existing ? updated++ : created++;
  }

  // 7) Etkinlikler (Konferanslar bölümü)
  for (const event of events) {
    const data = {
      ...event,
      startsAt: new Date(event.startsAt),
      endsAt: event.endsAt ? new Date(event.endsAt) : null,
      deadline: event.deadline ? new Date(event.deadline) : null,
      cfpDeadline: event.cfpDeadline ? new Date(event.cfpDeadline) : null,
      publishedAt: event.publishedAt ? new Date(event.publishedAt) : null,
    };

    const existing = await prisma.event.findUnique({ where: { slug: event.slug } });
    await prisma.event.upsert({ where: { slug: event.slug }, update: data, create: data });
    existing ? updated++ : created++;
  }

  console.log(
    `📚 İçerik eşitlendi — ${created} yeni, ${updated} güncellenen kayıt (${Date.now() - started} ms).`,
  );
}

main()
  .catch((error) => {
    console.warn("⚠️  İçerik eşitlenemedi (derleme sürüyor):", (error as Error).message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
