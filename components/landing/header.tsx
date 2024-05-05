"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { navLinks } from "@/lib/constants/nav-links";
import { NavItem } from "@/components/landing/nav-item";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { BurgerMenu } from "@/components/burger-menu";

export function Navbar() {
  const { hasScrolledPastThreshold: backgroundVisible } = useScrollThreshold(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        items={navLinks}
        className="bg-[#030010]/50 text-white"
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
            "relative flex h-11 w-full items-center justify-between bg-gradient-to-b from-transparent to-transparent py-8 text-indigo-50 md:py-16",
          )}
        >
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex flex-1 items-center gap-2 text-sm font-semibold md:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              linkinbio.at
              <Alpha />
            </Link>
            <ul className="flex-2 hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <NavItem key={link.label} item={link} />
              ))}
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="/sign-in"
                className={cn(
                  "hidden rounded-full border border-primary/50 bg-black/10 px-3.5 py-1.5 text-sm md:block md:text-base",
                )}
              >
                Login
              </Link>
              <Link
                href="/sign-in"
                className={cn(
                  "flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3.5 py-1.5 text-sm text-slate-950 md:text-base",
                )}
              >
                Sign Up
              </Link>
            </div>
            <BurgerMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              className="bg-white"
            />
          </div>
        </Container>
      </header>
    </>
  );
}

const Alpha = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-indigo-100"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5625 0.440552H16.9441C20.2578 0.440552 22.114 2.99537 21.09 6.14689L19.2359 11.8532C18.2119 15.0048 14.6955 17.5596 11.3818 17.5596H5.00019C1.68649 17.5596 -0.169696 15.0048 0.854296 11.8532L2.7084 6.14689C3.73239 2.99537 7.24879 0.440552 10.5625 0.440552ZM10.2189 12.5104C9.6706 12.5047 9.18622 12.357 8.76577 12.0672C8.34815 11.7774 8.02145 11.3768 7.78565 10.8655C7.54986 10.3541 7.43196 9.76605 7.43196 9.10128C7.43196 8.43935 7.55554 7.85696 7.8027 7.35412C8.04986 6.84844 8.38651 6.45355 8.81264 6.16946C9.23878 5.88537 9.72031 5.74333 10.2572 5.74333C10.6266 5.74333 10.9561 5.81151 11.2459 5.94787C11.5357 6.08139 11.7842 6.27031 11.9916 6.51463C12.199 6.75611 12.3666 7.03878 12.4945 7.36264H12.52L12.8439 5.82855H14.0754L13.3465 9.10034L14.1607 12.374H12.9163L12.5567 10.8314H12.5243C12.3993 11.1553 12.2317 11.445 12.0214 11.7007C11.8141 11.9536 11.5612 12.1524 11.2629 12.2973C10.9646 12.4422 10.6166 12.5132 10.2189 12.5104Z"
        />
        <path d="M12.1493 9.08423C12.1067 8.87117 12.0442 8.64531 11.9618 8.40668C11.8794 8.1652 11.7729 7.93935 11.6422 7.72912C11.5115 7.51605 11.3482 7.34276 11.1521 7.20923C10.9589 7.07571 10.7274 7.00895 10.4575 7.00895C10.1479 7.00895 9.8794 7.09844 9.65213 7.27742C9.4277 7.45355 9.25298 7.69929 9.12798 8.01463C9.00582 8.32997 8.94474 8.69077 8.94474 9.09702C8.94474 9.50327 9.0044 9.86833 9.12372 10.1922C9.24588 10.5132 9.41634 10.7661 9.63509 10.9507C9.85384 11.1325 10.1067 11.2234 10.3936 11.2234C10.6521 11.2234 10.8808 11.1553 11.0797 11.0189C11.2786 10.8797 11.449 10.7021 11.5911 10.4862C11.7331 10.2675 11.8496 10.0374 11.9405 9.79588C12.0342 9.55156 12.1038 9.32571 12.1493 9.11833L12.1531 9.10043L12.1493 9.08423Z" />
      </g>
    </svg>
  );
};
