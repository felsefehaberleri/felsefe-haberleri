import { Container } from "@/components/container";

/** Sayfa geçişlerinde gösterilen iskelet (skeleton) ekran. */
export default function Loading() {
  return (
    <Container size="wide" className="py-16">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-40 rounded bg-line" />
        <div className="h-10 w-3/4 rounded bg-line" />
        <div className="h-4 w-full rounded bg-line" />
        <div className="h-4 w-5/6 rounded bg-line" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 rounded-xl bg-line" />
          ))}
        </div>
      </div>
    </Container>
  );
}
