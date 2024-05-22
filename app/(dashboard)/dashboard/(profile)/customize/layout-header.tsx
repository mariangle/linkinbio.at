"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Typography",
    href: "/typography",
  },
  {
    title: "Layout",
    href: "/layout",
  },
  {
    title: "Icons",
    href: "/icons",
  },
  {
    title: "Background",
    href: "/background",
  },
  {
    title: "Buttons",
    href: "/buttons",
  },
  {
    title: "VFX",
    href: "/vfx",
  },
  {
    title: "Widgets",
    href: "/widgets",
  },
];

export function LayoutHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.includes(href);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        {links.map(({ title, href }) => (
          <Link
            key={title}
            href={`/dashboard/customize/${href}`}
            className={cn(
              "rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white dark:bg-neutral-800",
              isActive(href) &&
                "bg-primary/50 text-white dark:bg-white dark:text-black",
            )}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
