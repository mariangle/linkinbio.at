"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "../../../components/ui/button";

export function ClaimLink() {
  const [link, setLink] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "flex items-center rounded-md bg-neutral-300 p-1 pl-3 dark:bg-neutral-900",
        isFocused && "bg-black/30 ring-1 ring-primary",
      )}
    >
      <label htmlFor="claim-link">linkinbio.at/</label>
      <Input
        id="claim-link"
        onChange={(e) => setLink(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="username"
        className="focus-visible:ring-none border-none bg-transparent px-0 text-base text-white placeholder:text-neutral-400 focus-visible:ring-transparent"
        maxLength={20}
      />
      <Link
        href="/sign-up"
        className="whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-800"
      >
        Claim your link
      </Link>
    </div>
  );
}
