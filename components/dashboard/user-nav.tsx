"use client";

import * as React from "react";
import { signOut } from "next-auth/react";

import { LogOut, Settings, LifeBuoy, CreditCard } from "lucide-react";
import { BurgerMenu } from "@/components/burger-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { User as UserType } from "@prisma/client";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import Link from "next/link";

export function UserNav({ user }: { user: UserType }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfilePicture className="size-8" src={user.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-[200px]">
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
  );
}
