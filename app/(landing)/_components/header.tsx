import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ModeToggle } from "../../../components/dashboard/mode-toggle";
import Image from "next/image";

export function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 mx-auto flex w-full justify-center">
        <Container
          variant="landing"
          className={cn(
            "relative flex h-11 w-full items-center justify-between bg-gradient-to-b from-transparent to-transparent py-8 md:py-8",
          )}
        >
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="flex flex-1 items-center gap-2 text-sm font-semibold md:text-base"
            >
              <Image
                src="/icon.svg"
                alt="logo"
                width={50}
                height={50}
                className="size-8 shrink-0 invert dark:invert-0"
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <ModeToggle />
            <div className="flex items-center gap-4">
              <Link href="/sign-in" className="font-medium">
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="hidden h-[40px] items-center justify-center rounded-full border border-white/10 bg-zinc-950 px-4 sm:flex"
              >
                <span className="inline-block text-base font-bold text-white">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
