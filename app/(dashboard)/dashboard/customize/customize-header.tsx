"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardLinks } from "@/lib/constants/nav-links";
import { Heading } from "@/components/ui/typography";

const links =
  dashboardLinks.find((item) => item.label === "Customize")?.children ?? [];

export function CustomizeHeader() {
  const pathname = usePathname();

  if (!pathname.includes("/dashboard/customize")) return null;

  const isActive = (href: string) => pathname.includes(href);

  return (
    <div className="space-y-4">
      <div className="flex flex-row flex-wrap gap-2">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "glassmorphism-secondary flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium shadow-sm duration-300 hover:bg-white/10 hover:drop-shadow-[0_0px_5px_rgba(255,255,255,0.5)] dark:hover:bg-white/5",
              isActive(item.href) &&
                "bg-primary/25 text-white dark:bg-primary/25 dark:text-white",
            )}
          >
            <item.icon className="size-2.5" />
            <span
              className={cn(
                isActive(item.href) &&
                  "drop-shadow-[0_0px_5px_rgba(255,255,255,0.5)]",
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Heading>{links.find((item) => isActive(item.href))?.label}</Heading>
    </div>
  );
}
