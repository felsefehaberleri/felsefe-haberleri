/**
 * İlk kurulumda veritabanını otomatik doldurur.
 *
 * Derleme (build) sırasında çalışır ve şunu sorar: veritabanında hiç bölüm var mı?
 *   - Yoksa  → tohumlamayı çalıştırır (bölümler, filozoflar, haberler, kitaplar).
 *   - Varsa  → hiçbir şey yapmaz; mevcut içeriğe ve yorumlara dokunmaz.
 *
 * Böylece siteyi ilk kez yayına alan kişinin bilgisayarına Node.js kurup komut
 * çalıştırmasına gerek kalmaz. Sonraki her yayında bu adım kendiliğinden atlanır.
 *
 * Veritabanına ulaşılamazsa süreç hata vermez; derleme durmasın diye uyarı yazıp geçer.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.category.count();

  if (existing > 0) {
    console.log(`ℹ️  Veritabanında ${existing} bölüm var — tohumlama atlandı.`);
    return;
  }

  console.log("🌱 Veritabanı boş, örnek içerik yükleniyor...");

  // Tohumlama betiği kendi içinde bağlantıyı kapattığı için ayrı süreçte değil,
  // doğrudan içe aktararak çalıştırıyoruz.
  await import("./seed");
}

main()
  .catch((error) => {
    console.warn("⚠️  Otomatik tohumlama yapılamadı (derleme sürüyor):", (error as Error).message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
