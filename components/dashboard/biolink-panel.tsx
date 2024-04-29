"use client";

import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { biolinkLinks } from "@/lib/constants/nav-links";
import { usePathname } from "next/navigation";

export function BiolinkPanel() {
  const currentPath = usePathname();
  const isBiolinkPage = biolinkLinks.some((link) =>
    currentPath.includes(link.href),
  );

  if (!isBiolinkPage) return null;

  return (
    <div className="hidden xl:sticky xl:top-[57px] xl:grid xl:h-screen xl:w-full xl:place-content-center xl:self-start xl:overflow-y-auto xl:border-l xl:p-4">
      <BiolinkPreview />
    </div>
  );
}
