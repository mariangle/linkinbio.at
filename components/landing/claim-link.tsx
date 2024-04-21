"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "../ui/button";

export function ClaimLink() {
  const [link, setLink] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "flex items-center rounded-md bg-black/50 p-1 pl-3",
        isFocused && "bg-black/30 ring-1 ring-primary",
      )}
    >
      <label htmlFor="claim-link">biolinker.in/</label>
      <Input
        id="claim-link"
        onChange={(e) => setLink(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="focus-visible:ring-none px-0 focus-visible:ring-transparent"
        maxLength={20}
      />
      <Link
        href={
          link
            ? {
                pathname: "/register",
                query: { username: link },
              }
            : "/register"
        }
        className={cn(buttonVariants({ variant: "foreground" }))}
      >
        Claim your link
      </Link>
    </div>
  );
}
