"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { biolinkCustomizationLinks } from "@/constants/nav-links";
import { usePathname } from "next/navigation";

export default function CustomizationNav() {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="flex w-full border-b">
        {biolinkCustomizationLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 border-2 border-transparent px-3 py-2 text-sm",
                pathname === item.href && "border-b-white",
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
