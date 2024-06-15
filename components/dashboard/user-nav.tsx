"use client";

import * as React from "react";

import { LogOut, Palette, CreditCard, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import Link from "next/link";
import { User } from "@/lib/types";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function UserNav({ user }: { user: User }) {
  const { setTheme } = useTheme();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfilePicture
          className="size-8 md:ml-1 md:size-9"
          nullable
          src={user.image ? user.image : "/default-pfp.png"}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[99] max-w-[200px]">
        <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild disabled>
          <Link
            href="/dashboard/settings/billing"
            className="flex items-center"
          >
            <CreditCard className="mr-2 size-4" />
            Premium
          </Link>
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              <span>Appearance</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light Mode</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark Mode</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            onClick={async () => {
              await fetch("/api/auth/logout", {
                method: "POST",
              });
              router.push("/");
            }}
            className="w-full cursor-pointer text-destructive"
          >
            <LogOut className="mr-2 size-4" />
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
