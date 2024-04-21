"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { navLinks } from "@/lib/constants";
import { NavItem } from "@/components/landing/nav-item";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const { hasScrolledPastThreshold: backgroundVisible } = useScrollThreshold(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
          className="relative flex h-11 w-full items-center justify-between bg-gradient-to-b from-transparent to-transparent py-8 md:py-16"
        >
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex flex-1 items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="webvaerk"
                width={50}
                height={50}
                className="size-5"
              />
              <div className="font-semibold">biolinker</div>
            </Link>
            <ul className="flex-2 hidden items-center gap-4 text-foreground md:flex">
              {navLinks.map((link) => (
                <NavItem key={link.label} item={link} />
              ))}
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full",
                )}
              >
                Get Started
              </Link>
              <Link
                href="/login"
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

function BurgerMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="h-6 w-6 space-y-1.5 md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <motion.div
        animate={isMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-px w-4 origin-center bg-foreground"
      />
      <motion.div
        animate={isMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-px w-4 origin-center bg-foreground"
      />
    </button>
  );
}

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isMenuOpen ? "0%" : "-100%" }}
      exit={{ y: "-100%", transition: { duration: 0 } }}
      transition={{ type: "just" }}
      className="fixed right-0 top-0 z-50 flex h-screen w-full overflow-hidden border-b bg-background/75 backdrop-blur-lg md:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="flex h-full w-full flex-col justify-between"
      >
        <ul className="mt-20 flex flex-col gap-4 p-4 text-foreground">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={cn(
                  "px-3 py-2 font-medium duration-300 hover:opacity-50",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 p-6">
          {/* Add something here */}
        </div>
      </motion.div>
    </motion.div>
  );
}
