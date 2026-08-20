/**
 * Veritabanı tohumlama betiği.  Çalıştırma: `npm run db:seed`
 * Upsert kullandığı için birden çok kez çalıştırılabilir (idempotent).
 */
import { PrismaClient } from "@prisma/client";

import { authors, books, categories, philosophers, posts, tags } from "./seed-data";

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
    const { authorSlug, categorySlug, tagSlugs, philosopherSlugs, publishedAt, ...rest } = post;

    const relations = {
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      author: { connect: { slug: authorSlug } },
      category: { connect: { slug: categorySlug } },
    };

    await prisma.post.upsert({
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
