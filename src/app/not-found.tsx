import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container size="reading" className="py-28 text-center">
      <p className="font-serif text-6xl font-bold text-accent">404</p>
      <h1 className="mt-6 font-serif text-2xl font-bold">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-4 text-sm text-muted">
        Bağlantı taşınmış ya da haber yayından kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
      >
        Ana sayfaya dön
      </Link>
    </Container>
  );
}
