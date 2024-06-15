"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { ChevronLeft, X } from "lucide-react";
import { dashboardLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/dashboard/nav-item";
import { UserNav } from "./user-nav";
import { EyeIcon } from "lucide-react";
import { useBiolinkPreviewStore } from "@/lib/store";
import { User } from "@/lib/types";
import { Logo } from "../ui/logo";

export function Navigation({ user }: { user: User }) {
  const { setOpen, open } = useBiolinkPreviewStore();
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <header
      className={cn(
        "group/nav fixed bottom-0 z-50 flex w-full items-end justify-center p-4 md:static md:top-0 md:h-screen md:w-auto md:self-start md:pr-0",
        open && "z-[999]",
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute left-1/2 z-[99] flex w-fit -translate-x-1/2 -translate-y-[80px] items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl md:fixed md:bottom-0 md:-translate-y-[20px] xl:hidden"
      >
        {open ? <X className="size-4" /> : <EyeIcon className="size-4" />}
        {open ? "Close Preview" : "Preview"}
      </button>
      <div
        className={cn(
          "relative flex h-full flex-col items-center justify-center gap-4 duration-300",
          open &&
            "pointer-events-none opacity-0 xl:pointer-events-auto xl:opacity-100",
        )}
      >
        <div className="absolute left-full top-0 hidden translate-x-4 p-4 pl-0 md:block">
          <button
            className="rounded-full bg-primary/50 p-1.5 opacity-0 backdrop-blur-xl duration-100 group-hover/nav:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronLeft
              className={cn(
                "size-0 text-white duration-300 group-hover/nav:size-5",
                collapsed && "rotate-180",
              )}
            />
          </button>
        </div>
        <div
          className={cn(
            "glassmorphism relative flex h-full flex-col justify-between gap-4 rounded-2xl p-3 duration-300",
            "shadow-[0_0px_15px_rgba(0,0,0,0.1)] md:w-auto",
            collapsed ? "md:w-[70px]" : "md:w-[190px]",
          )}
        >
          <div className="flex h-full w-full flex-row justify-between gap-3 md:flex-col md:gap-4">
            <div>
              <div className="hidden p-1.5 md:block">
                <Logo className="size-8 fill-white" />
              </div>
              <ul className="flex flex-row gap-2 md:my-2 md:flex-col">
                {dashboardLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={collapsed} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row items-center gap-2 md:flex-col md:items-start md:gap-3">
              <div className="h-[70%] w-px bg-border/25 md:h-px md:w-full"></div>
              <div className="flex w-full items-start justify-start gap-3">
                <div className="grid shrink-0 place-content-center">
                  <UserNav user={user} />
                </div>
                {!collapsed && (
                  <div className="hidden flex-col truncate md:flex">
                    <div className="text-sm text-white">{user.username}</div>
                    <div className="text-xs text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
