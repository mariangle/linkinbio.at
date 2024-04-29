"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/constants/nav-links";

export function Heading({
  children,
  className,
  id,
  level = "h2",
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  level?: "h1" | "h2" | "h3";
}) {
  const pathname = usePathname();
  const HeadingTag = level;
  const route = routes.find((route) => route.href === pathname);

  if (!children) {
    return (
      <HeadingTag
        className={cn(
          "pb-4 text-3xl font-semibold capitalize tracking-tight md:text-4xl",
          className,
        )}
        id={id}
      >
        {route?.label || "Untitled"}
      </HeadingTag>
    );
  }
  return (
    <HeadingTag
      className={cn(
        "pb-4 text-3xl font-semibold capitalize tracking-tight md:text-4xl",
        className,
      )}
      id={id}
    >
      {children}
    </HeadingTag>
  );
}
