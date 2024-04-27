"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
  const path = usePathname();
  const isActive = path === item.href;

  return (
    <Link href={item.href} className={cn("text-sm", className)}>
      {item.label}
    </Link>
  );
}
