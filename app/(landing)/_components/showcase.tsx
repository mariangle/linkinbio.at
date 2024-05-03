"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function ShowcaseContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-showcase relative overflow-hidden rounded-[1.8rem] border bg-[#030010] bg-gradient-to-br from-indigo-900/10 via-[#030010] to-indigo-900/25",
        className,
      )}
    >
      <Image
        src="/showcase-card.webp"
        width={500}
        height={500}
        alt="Background"
        className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 opacity-15"
      />
      <div className={cn("relative p-6 md:p-10", className)}>{children}</div>
    </div>
  );
}

export function ShowcaseItemContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-showcase rounded-2xl border bg-white/5 p-4 text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ShowcaseHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xl font-medium text-indigo-100 md:text-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ShowcaseDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-2 text-sm text-slate-300", className)}>
      {children}
    </div>
  );
}

export function ShowcaseIconContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-showcase mb-4 grid w-fit place-content-center rounded-xl border bg-gradient-to-b from-slate-950 to-indigo-800/10 p-3 shadow-lg shadow-indigo-950/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
