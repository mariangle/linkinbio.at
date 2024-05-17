"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function NavItem({
  item,
  className,
}: {
  item: {
    href: string;
    label: string;
  };
  className?: string;
}) {
  return (
    <Link href={item.href} className={cn("text-base", className)}>
      {item.label}
    </Link>
  );
}
