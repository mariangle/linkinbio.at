"use client";

import { dashboardLinks } from "@/lib/constants/nav-links";
import { usePathname } from "next/navigation";

export function DashboardHeading() {
  const pathname = usePathname();
  const secondaryPath = pathname.split("/")[2];
  const currentLink = dashboardLinks.find((link) =>
    link.href.includes(secondaryPath),
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold">{currentLink?.label}</h1>
    </div>
  );
}
