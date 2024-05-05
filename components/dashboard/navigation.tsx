"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { ChevronLeft } from "lucide-react";
import { dashboardLinks, biolinkLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/dashboard/nav-item";
import { ModeToggle } from "@/components/dashboard/mode-toggle";
import type { User as UserType } from "@prisma/client";
import { UserNav } from "./user-nav";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { BurgerMenu } from "../burger-menu";
import Image from "next/image";

export function Sidebar({ user }: { user: UserType }) {
  const { setOpen, open } = useBiolinkPreview();
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <header
      className={cn(
        "fixed bottom-0 z-50 flex w-full items-end justify-center p-4 md:static md:top-0 md:h-screen md:w-auto md:self-start",
      )}
    >
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div
          className={cn(
            "relative flex gap-4 rounded-2xl border bg-white/50 p-3 backdrop-blur-2xl duration-300 dark:bg-gray-950/75",
            "h-full flex-col justify-between md:w-auto",
            isCollapsed ? "md:w-[70px]" : "md:w-[190px]",
          )}
        >
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-1/2 flex w-fit -translate-x-1/2 -translate-y-[60px] items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl xl:hidden"
          >
            <EyeIcon className="size-3" />
            Preview
          </button>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden"
              >
                <ul className="my-4 flex flex-row gap-2 md:hidden">
                  {dashboardLinks.map((item, index) => (
                    <li key={index} onClick={() => setIsCollapsed(true)}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 dark:bg-white/5"
                      >
                        <item.icon className="size-4" />
                        <span className="text-center text-xs text-muted-foreground">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <button className="flex items-center justify-center rounded-lg bg-neutral-100 px-3 py-1 dark:bg-white/5">
                    <ModeToggle />
                  </button>
                </ul>
                <div className="h-px w-full bg-border" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex h-full w-full flex-row justify-between gap-4 md:flex-col">
            <div>
              <div className="p-2">
                <Image
                  src="/icon.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="size-7 shrink-0 opacity-75 invert dark:opacity-90 dark:invert-0"
                />
              </div>
              <ul className="flex flex-row gap-2 md:my-2 md:flex-col">
                {biolinkLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={isCollapsed} />
                  </li>
                ))}
              </ul>
              <div className="hidden h-px w-full bg-border md:block" />
              <ul className="my-2 hidden flex-col gap-2 md:flex">
                {dashboardLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={isCollapsed} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row items-center gap-4 md:flex-col md:gap-2">
              <div className="h-full w-px bg-border md:h-px md:w-full" />
              <div className="flex flex-row items-center gap-3 md:mt-4 md:w-full md:flex-col">
                <UserNav user={user} />
                <button className="hidden w-full items-center justify-center rounded-xl border px-2.5 py-3 md:flex">
                  <ModeToggle />
                </button>
                <div className="md:w-full">
                  <BurgerMenu
                    isMenuOpen={!isCollapsed}
                    setIsMenuOpen={() => setIsCollapsed(!isCollapsed)}
                  />
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                      "hidden w-full items-center justify-center gap-2 rounded-xl border px-2.5 py-3 text-sm md:flex",
                    )}
                  >
                    <ChevronLeft
                      className={cn(
                        "size-4 rotate-[270deg] duration-300 md:rotate-0",
                        isCollapsed && "rotate-90 md:rotate-180",
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
