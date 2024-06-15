"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardLinks } from "@/lib/constants/nav-links";
import { Heading } from "@/components/ui/typography";

const links =
  dashboardLinks.find((item) => item.label === "Links")?.children ?? [];

export function LinksHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.includes(href);

  return (
    <div className="space-y-4">
      <div className="flex flex-row flex-wrap border-b border-b-white/10">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "border-b-2 border-b-transparent px-5 py-2 text-sm font-medium",
              isActive(item.href) && "border-b-white",
            )}
          >
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
      <Heading>{links.find((item) => isActive(item.href))?.label}</Heading>
    </div>
  );
}
