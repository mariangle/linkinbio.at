"use client";

import * as React from "react";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";
import { User, LogOut, Settings, LifeBuoy, CreditCard } from "lucide-react";
import { BurgerMenu } from "@/components/burger-menu";
import { MobileMenu } from "@/components/mobile-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashboardLinks, biolinkLinks } from "@/lib/constants/nav-links";
import type { User as UserType } from "@prisma/client";
import Link from "next/link";

export function Navbar({ user }: { user: UserType }) {
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
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2" role="button">
                <div className="rounded-full bg-muted">
                  <User className="size-7 p-1.5 text-foreground" />
                </div>
                <div className="text-sm">{user.username}</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-[200px]">
              <DropdownMenuLabel className="truncate">
                {user.email}
                {user.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="flex items-center">
                  <Settings className="mr-2 size-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild disabled>
                <Link
                  href="/dashboard/settings/billing"
                  className="flex items-center"
                >
                  <CreditCard className="mr-2 size-4" />
                  Billing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild disabled>
                <Link href="/dashboard/settings" className="flex items-center">
                  <LifeBuoy className="mr-2 size-4" />
                  Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button
                  onClick={async () => await signOut()}
                  className="w-full cursor-pointer"
                >
                  <LogOut className="mr-2 size-4" />
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </>
  );
}
