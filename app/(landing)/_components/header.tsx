import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full justify-center">
      <Container
        className={cn(
          "relative flex h-11 w-full items-center justify-between bg-gradient-to-b from-transparent to-transparent py-8 md:py-8",
        )}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex flex-1 items-center gap-1 text-lg font-semibold"
          >
            <Logo className="fill-[#E3FFCC]" />
            linkinbio.at
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="hidden h-[37.5px] items-center justify-center rounded-full bg-[#E3FFCC] px-3.5 sm:flex"
          >
            <span className="inline-block text-sm font-semibold text-[#0B363C]">
              Get Started
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
