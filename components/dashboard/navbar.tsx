"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { User } from "lucide-react";
import { BurgerMenu } from "@/components/burger-menu";
import { MobileMenu } from "../mobile-menu";
import { dashboardLinks, biolinkLinks } from "@/constants/nav-links";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        items={[...biolinkLinks, ...dashboardLinks]}
      />
      <nav
        className={cn(
          "sticky top-0 z-50 border-b bg-secondary/75 px-4 py-3.5 backdrop-blur-xl",
          "flex items-center justify-between",
        )}
      >
        <div className="hidden lg:block">
          <Breadcrumbs />
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-muted">
            <User className="size-7 p-1.5 text-foreground" />
          </div>
          <div>Maria</div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </>
  );
}
