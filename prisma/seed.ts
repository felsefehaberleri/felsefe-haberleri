/**
 * Veritabanı tohumlama betiği.  Çalıştırma: `npm run db:seed`
 * Upsert kullandığı için birden çok kez çalıştırılabilir (idempotent).
 */
import { PrismaClient } from "@prisma/client";

import { authors, books, categories, events, philosophers, posts, tags } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Tohumlama başlıyor...");

  // 1) Kategoriler
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name, description: category.description, order: category.order },
      create: category,
    });
  }
  console.log(`   ✓ ${categories.length} kategori`);

  // 2) Etiketler
  for (const tag of tags) {
    await prisma.tag.upsert({ where: { slug: tag.slug }, update: { name: tag.name }, create: tag });
  }
  console.log(`   ✓ ${tags.length} etiket`);

  // 3) Editörler
  for (const author of authors) {
    await prisma.author.upsert({
      where: { slug: author.slug },
      update: { name: author.name, avatar: author.avatar, bio: author.bio },
      create: author,
    });
  }
  console.log(`   ✓ ${authors.length} editör`);

  // 4) Filozoflar
  for (const philosopher of philosophers) {
    await prisma.philosopher.upsert({
      where: { slug: philosopher.slug },
      update: philosopher,
      create: philosopher,
    });
  }
  console.log(`   ✓ ${philosophers.length} filozof`);

  // 5) Haberler (ilişkiler slug üzerinden bağlanır)
  for (const post of posts) {
    // `sources` ilişki tablosudur; haber verisine karışmamalı.
    const { authorSlug, categorySlug, tagSlugs, philosopherSlugs, publishedAt, sources, ...rest } =
      post;

    const relations = {
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      author: { connect: { slug: authorSlug } },
      category: { connect: { slug: categorySlug } },
    };

    const saved = await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        ...rest,
        ...relations,
        // Etiket/filozof listelerini önce boşaltıp yeniden bağlıyoruz ki
        // tohum verisinden kaldırılan ilişkiler veritabanında kalmasın.
        tags: { set: [], connect: tagSlugs.map((slug) => ({ slug })) },
        philosophers: { set: [], connect: philosopherSlugs.map((slug) => ({ slug })) },
      },
      create: {
        ...rest,
        ...relations,
        tags: { connect: tagSlugs.map((slug) => ({ slug })) },
        philosophers: { connect: philosopherSlugs.map((slug) => ({ slug })) },
      },
    });

    // Kaynak künyesi
    await prisma.postSource.deleteMany({ where: { postId: saved.id } });

    if (sources?.length) {
      await prisma.postSource.createMany({
        data: sources.map((source, index) => ({
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
  }
  console.log(`   ✓ ${posts.length} haber`);

  // 6) Kitaplar
  for (const book of books) {
    const { philosopherSlug, postSlug, ...rest } = book;

    const data = {
      ...rest,
      philosopher: philosopherSlug ? { connect: { slug: philosopherSlug } } : undefined,
      post: postSlug ? { connect: { slug: postSlug } } : undefined,
    };

    await prisma.book.upsert({ where: { slug: book.slug }, update: data, create: data });
  }
  console.log(`   ✓ ${books.length} kitap`);

  // 7) Etkinlikler
  for (const event of events) {
    const data = {
      ...event,
      startsAt: new Date(event.startsAt),
      endsAt: event.endsAt ? new Date(event.endsAt) : null,
      deadline: event.deadline ? new Date(event.deadline) : null,
      cfpDeadline: event.cfpDeadline ? new Date(event.cfpDeadline) : null,
      publishedAt: event.publishedAt ? new Date(event.publishedAt) : null,
    };
    await prisma.event.upsert({ where: { slug: event.slug }, update: data, create: data });
  }
  console.log(`   ✓ ${events.length} etkinlik`);

  console.log("✅ Tohumlama tamamlandı.");
}

main()
  .catch((error) => {
    console.error("❌ Tohumlama başarısız:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
