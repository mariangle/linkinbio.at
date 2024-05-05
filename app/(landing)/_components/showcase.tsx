"use client";

import { cn } from "@/lib/utils";
import { CardSpotlightEffect } from "@/components/ui/card";

export function ShowcaseContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardSpotlightEffect
      className={cn(
        "border-showcase relative overflow-hidden rounded-[1.8rem] border bg-[#030010] bg-gradient-to-b from-transparent to-indigo-800/10 p-0 duration-300 hover:border-[#393b58]",
        className,
      )}
    >
      <div className={cn("relative p-6 md:p-10", className)}>{children}</div>
    </CardSpotlightEffect>
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
    <div className={cn("mt-2 text-base text-slate-300", className)}>
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
