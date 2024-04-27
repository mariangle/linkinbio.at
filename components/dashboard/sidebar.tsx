"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Logo } from "@/components/ui/logo";
import { ChevronLeft } from "lucide-react";
import { dashboardLinks, profileLinks } from "@/constants/nav-links";
import { NavItem } from "@/components/dashboard/nav-item";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <header
      className={cn(
        "hidden md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-between md:border-r md:duration-300",
        isCollapsed ? "w-[72px]" : "w-[190px]",
      )}
    >
      <div>
        <div className="mx-3 mt-3 px-1">
          <Logo />
        </div>
        <ul className="my-2">
          {profileLinks.map((item, index) => (
            <li key={index}>
              <NavItem item={item} collapsed={isCollapsed} />
            </li>
          ))}
        </ul>
        <div className="h-px w-full bg-border" />
        <ul className="my-2 flex flex-col gap-1">
          {dashboardLinks.map((item, index) => (
            <li key={index}>
              <NavItem item={item} collapsed={isCollapsed} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="h-px w-full bg-border" />
        <div className="p-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "flex h-10 w-full items-center justify-start gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm",
            )}
          >
            <ChevronLeft
              className={cn("size-4 duration-300", isCollapsed && "rotate-180")}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
