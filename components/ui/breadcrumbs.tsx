"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  dashboardLinks,
  biolinkLinks,
  biolinkCustomizationLinks,
} from "@/constants/dashboard";

export const validationLinks = [
  ...dashboardLinks,
  ...biolinkLinks,
  ...biolinkCustomizationLinks,
];

export function Breadcrumbs({
  items,
}: {
  items?: {
    name: string;
    href: string;
  }[];
}) {
  const path = usePathname();
  const breadcrumbs = path.split("/").filter(Boolean).slice(1);
  if (items) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-2">
      {breadcrumbs.map((crumb, index) => {
        // Find the corresponding item
        const item = validationLinks?.find((item) => item.href.includes(crumb));
        const lastItem = index === breadcrumbs.length - 1;

        // Construct the href for this breadcrumb
        const href = "/dashboard/" + breadcrumbs.slice(0, index + 1).join("/");

        return (
          <li key={href} className="flex items-center gap-2 text-sm">
            {lastItem ? (
              <div>{item ? item.name : crumb}</div>
            ) : (
              <Link href={href} className="text-gray-400">
                {item ? item.name : crumb}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className={cn(!lastItem && "text-gray-400")}>/</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
