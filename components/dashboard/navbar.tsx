"use client";

import * as React from "react";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";
import { LogOut, Settings, LifeBuoy, CreditCard } from "lucide-react";
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
import { SharePopover } from "@/components/dashboard/share-dialog";
import { dashboardLinks, biolinkLinks } from "@/lib/constants/nav-links";
import type { User as UserType } from "@prisma/client";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import Link from "next/link";
import { ModeToggle } from "@/components/dashboard/mode-toggle";

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
          "sticky top-0 z-50 h-[57px] border-b bg-background px-4 backdrop-blur-xl dark:bg-secondary/75",
          "flex items-center justify-between",
        )}
      >
        <div className="flex w-full items-center justify-end gap-3">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ProfilePicture className="size-8" src={user.image} />
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
          <SharePopover username={user.username || ""} />
          <div className="flex items-center gap-2 md:hidden">
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </>
  );
}
