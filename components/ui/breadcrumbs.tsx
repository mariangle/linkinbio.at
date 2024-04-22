"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/dashboard";

export function Breadcrumbs({
  items,
}: {
  items?: {
    name: string;
    href: string;
  }[];
}) {
  const path = usePathname();
  const breadcrumbs = path.split("/").filter(Boolean);
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
      <li className="flex items-center gap-2 text-sm">
        <Link href={"/dashboard"} className="text-gray-400">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>
      </li>
      {breadcrumbs.map((crumb, index) => {
        // Find the corresponding item
        const item = routes?.find((item) => item.href.includes(crumb));
        const lastItem = index === breadcrumbs.length - 1;

        // Construct the href for this breadcrumb
        const href = "/dashboard/" + breadcrumbs.slice(0, index + 1).join("/");

        if (!lastItem) return null;

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
