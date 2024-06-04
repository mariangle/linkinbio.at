"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardLinks } from "@/lib/constants/nav-links";

const links =
  dashboardLinks.find((item) => item.label === "Customize")?.children ?? [];

export function CustomizationNavigation() {
  const pathname = usePathname();

  if (!pathname.includes("/dashboard/customize")) return null;

  const isActive = (href: string) => pathname.includes(href);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white dark:bg-neutral-800",
              isActive(item.href) &&
                "bg-primary/50 text-white dark:bg-white dark:text-black",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
