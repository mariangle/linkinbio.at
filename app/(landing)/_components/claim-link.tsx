"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function ClaimLink() {
  const [username, setUsername] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "flex items-center rounded-full bg-[#08272A] p-1.5 pl-4",
        isFocused && "bg-black/30 ring-2 ring-[#17A57A]",
      )}
    >
      <label htmlFor="claim-link" className="text-white">
        linkinbio.at/
      </label>
      <Input
        id="claim-link"
        onChange={(e) => setUsername(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="username"
        className="focus-visible:ring-none border-none bg-transparent px-0 text-base text-[#E3FFCC] placeholder:text-[#B8CEC1] focus-visible:ring-transparent"
        maxLength={20}
      />
      <Link
        href={{
          pathname: "/sign-up",
          query: username ? { username } : {},
        }}
        className="flex h-[37.5px] items-center justify-center whitespace-nowrap rounded-full bg-[#E3FFCC] px-3.5 text-sm font-semibold text-[#0B363C]"
      >
        Claim Link
      </Link>
    </div>
  );
}
