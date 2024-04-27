"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function FeatureTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="cursor-help"
      >
        {children}
      </button>
      {showTooltip && (
        <div className="absolute top-full z-10 mt-2 w-[250px] rounded border bg-background p-2 text-xs text-foreground shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
}

export function Tooltip({
  children,
  content,
  position = "top",
}: {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}) {
  return (
    <div className="group relative">
      {children}
      <div
        className={cn(
          "pointer-events-none absolute whitespace-nowrap rounded-full bg-neutral-950/50 px-2.5 py-1.5 text-white opacity-0 backdrop-blur-2xl duration-200 group-hover:opacity-100",
          position === "top" &&
            "bottom-6 left-1/2 -translate-x-1/2 -translate-y-1 group-hover:-translate-y-1/2",
          position === "right" &&
            "left-12 top-1/2 -translate-x-2 -translate-y-1/2 text-xs group-hover:translate-x-0",
        )}
      >
        {content}
      </div>
    </div>
  );
}
