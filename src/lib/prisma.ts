import { PrismaClient } from "@prisma/client";

/**
 * Tekil (singleton) Prisma istemcisi.
 * Next.js geliştirme modunda hot-reload her seferinde modülleri yeniden
 * değerlendirdiği için, istemciyi global nesnede saklayarak bağlantı
 * havuzunun tükenmesini engelliyoruz.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
