"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { navLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/landing/nav-item";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { BurgerMenu } from "@/components/burger-menu";

export function Navbar() {
  const { hasScrolledPastThreshold: backgroundVisible } = useScrollThreshold(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isWhiteOnly = usePathname() === "/";

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        items={navLinks}
      />
      <header className="fixed top-0 z-50 mx-auto flex w-full justify-center">
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            backgroundVisible ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, transparent)",
          }}
        ></div>
        <Container
          variant="landing"
          className={cn(
            "relative flex h-11 w-full items-center justify-between bg-gradient-to-b from-transparent to-transparent py-8 text-foreground md:py-16",
            isWhiteOnly && "text-white",
          )}
        >
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex flex-1 items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className="size-5"
              />
              <div className="font-semibold">linkinbio</div>
            </Link>
            <ul className="flex-2 hidden items-center gap-4 md:flex">
              {navLinks.map((link) => (
                <NavItem key={link.label} item={link} />
              ))}
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full",
                )}
              >
                Get Started
              </Link>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full",
                )}
              >
                Login
              </Link>
            </div>
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </Container>
      </header>
    </>
  );
}
