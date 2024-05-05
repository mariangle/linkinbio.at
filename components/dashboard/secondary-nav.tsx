"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SecondaryNav({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="flex w-full overflow-y-auto border-b">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap border-b-2 border-b-transparent px-3 py-4 text-sm text-muted-foreground",
                pathname === item.href && "border-b-foreground text-foreground",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
