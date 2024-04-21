"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "../theme-toggle";
import { Logo } from "@/components/ui/logo";
import { User, ChevronLeft } from "lucide-react";
import { dashboardLinks, biolinkLinks } from "@/constants/dashboard";
import { NavItem } from "@/components/dashboard/nav-item";

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div className="sticky top-0 max-h-screen p-4">
      <header
        className={cn(
          "flex h-full max-h-screen flex-col justify-between rounded-xl border bg-secondary p-4 duration-300",
          isCollapsed ? "w-[83px]" : "w-[200px]",
        )}
      >
        <div>
          <div
            className={cn(
              "flex",
              isCollapsed ? "justify-center" : "justify-start",
            )}
          >
            <Logo />
          </div>
          <div className="mt-4 h-px w-full bg-border" />
          <ul className="mt-2 flex flex-col gap-1">
            {biolinkLinks.map((item, index) => (
              <li key={index}>
                <NavItem item={item} collapsed={isCollapsed} />
              </li>
            ))}
            <div className="h-px w-full bg-border" />
            {dashboardLinks.map((item, index) => (
              <li key={index}>
                <NavItem item={item} collapsed={isCollapsed} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="h-px w-full bg-border" />
          <ThemeToggle />
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "bg-black/1 mt-4 flex h-11 w-full items-center justify-start gap-2 rounded-md border border-border px-2 py-2 text-sm",
              isCollapsed && "justify-center",
            )}
          >
            <ChevronLeft
              className={cn("size-4 duration-300", isCollapsed && "rotate-180")}
            />
          </button>
          <div
            className={cn(
              "mt-4 flex h-12 items-center gap-4",
              isCollapsed && "justify-center",
            )}
          >
            <div className="rounded-full bg-slate-400">
              <User className="size-7 p-1 text-slate-600" />
            </div>
            {!isCollapsed && (
              <div>
                <div className="text-sm">Maria</div>
                <div className="w-32 truncate text-xs text-slate-400">
                  mariach171001@gmail.com
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
