"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { ChevronLeft } from "lucide-react";
import { dashboardLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/dashboard/nav-item";
import { UserNav } from "./user-nav";
import { EyeIcon } from "lucide-react";
import { useBiolinkPreviewStore } from "@/lib/store";
import { User } from "@/lib/types";

export function Navigation({ user }: { user: User }) {
  const { setOpen, open } = useBiolinkPreviewStore();
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <header
      className={cn(
        "group/nav fixed bottom-0 z-50 flex w-full items-end justify-center p-4 md:static md:top-0 md:h-screen md:w-auto md:self-start md:pr-0 ",
      )}
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-4">
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
            "bg-glass border-glass relative flex gap-4 rounded-2xl border p-3 duration-300",
            "h-full flex-col justify-between md:w-auto",
            collapsed ? "md:w-[70px]" : "md:w-[190px]",
          )}
        >
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-1/2 flex w-fit -translate-x-1/2 -translate-y-[60px] items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl md:hidden"
          >
            <EyeIcon className="size-3" />
            Preview
          </button>
          <div className="flex h-full w-full flex-row justify-between gap-4 md:flex-col">
            <div>
              <div className="hidden p-2 md:block">
                <Image
                  src="/icon.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="size-7 shrink-0 invert-0"
                />
              </div>
              <ul className="flex flex-row gap-2 md:my-2 md:flex-col">
                {dashboardLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={collapsed} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid place-content-center">
              <UserNav user={user} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
