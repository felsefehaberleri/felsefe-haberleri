import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Sayfa genişliğini sınırlayan ortak sarmalayıcı. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  /** `reading` uzun metinler için daha dar bir ölçü kullanır. */
  size?: "default" | "reading" | "wide";
}) {
  const width =
    size === "reading" ? "max-w-3xl" : size === "wide" ? "max-w-7xl" : "max-w-6xl";

  return <div className={cn("mx-auto w-full px-5 sm:px-8", width, className)}>{children}</div>;
}
