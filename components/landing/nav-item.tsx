"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavItem({
  item,
}: {
  item: {
    path: string;
    label: string;
  };
}) {
  const path = usePathname();
  const isActive = path === item.path;

  return (
    <div className="relative">
      <li
        className={cn(
          "group relative block h-5 overflow-hidden px-1.5 text-sm text-muted-foreground hover:text-foreground/90",
          isActive && "text-foreground/90",
        )}
      >
        <Link href={item.path} className="text-white">
          {item.label}
        </Link>
      </li>
    </div>
  );
}
