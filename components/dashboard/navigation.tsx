"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { ChevronLeft, Zap } from "lucide-react";
import { dashboardLinks, biolinkLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/dashboard/nav-item";
import { ModeToggle } from "@/components/dashboard/mode-toggle";
import { UserNav } from "./user-nav";
import { PremiumDialog } from "./premium-dialog";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { BurgerMenu } from "../burger-menu";
import Image from "next/image";
import { User } from "@/lib/types";

export function Navigation({ user }: { user: User }) {
  const { setOpen, open } = useBiolinkPreviewStore();
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <header
      className={cn(
        "group/nav fixed bottom-0 z-50 flex w-full items-end justify-center p-4 md:static md:top-0 md:h-screen md:w-auto md:self-start ",
      )}
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-4">
        <div className="absolute left-full top-0 hidden translate-x-4 p-4 pl-0 md:block">
          <button
            className="rounded-full bg-primary p-1.5 opacity-0 duration-100 group-hover/nav:opacity-100"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeft
              className={cn(
                "size-0 text-white duration-300 group-hover/nav:size-5",
                isCollapsed && "rotate-180",
              )}
            />
          </button>
        </div>
        <div
          className={cn(
            "bg-glass border-glass relative flex gap-4 rounded-2xl border p-3 duration-300",
            "h-full flex-col justify-between md:w-auto",
            isCollapsed ? "md:w-[70px]" : "md:w-[190px]",
          )}
        >
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-1/2 flex w-fit -translate-x-1/2 -translate-y-[60px] items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl md:hidden"
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
                        className="bg-glass-secondary flex items-center gap-2 rounded-lg px-3 py-2"
                      >
                        <item.icon className="size-4" />
                        <span className="text-center text-xs text-muted-foreground">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <button className="bg-glass-secondary flex items-center justify-center rounded-lg px-3 py-1">
                    <ModeToggle />
                  </button>
                </ul>
                <div className="bg-gradient-fade h-px w-full" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex h-full w-full flex-row justify-between gap-4 md:flex-col">
            <div>
              <div className="hidden p-2 md:block">
                <Image
                  src="/icon.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="size-7 shrink-0 opacity-75 invert-0"
                />
              </div>
              <ul className="flex flex-row gap-2 md:my-2 md:flex-col">
                {biolinkLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={isCollapsed} />
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-fade hidden h-px w-full to-transparent md:block" />
              <ul className="my-2 hidden flex-col gap-2 md:flex">
                {dashboardLinks.map((item, index) => (
                  <li key={index}>
                    <NavItem item={item} collapsed={isCollapsed} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row items-center gap-4 md:flex-col md:gap-2">
              <div className="bg-gradient-fade h-full w-px md:h-px md:w-full" />
              <div className="flex flex-row items-center gap-3 md:mt-4 md:w-full md:flex-col">
                <div className="hidden md:block">
                  <PremiumDialog>
                    <button className="rounded-full border border-primary/50 bg-primary/25 p-2">
                      <Zap className="size-5 text-primary" />
                    </button>
                  </PremiumDialog>
                </div>
                <UserNav user={user} />
                <div className="bg-glass-secondary hidden w-full items-center justify-center rounded-xl px-2.5 py-3 md:flex">
                  <ModeToggle />
                </div>
                <div className="md:w-full">
                  <BurgerMenu
                    isMenuOpen={!isCollapsed}
                    setIsMenuOpen={() => setIsCollapsed(!isCollapsed)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
