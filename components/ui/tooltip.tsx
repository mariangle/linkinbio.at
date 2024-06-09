"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function Tooltip({
  children,
  content,
  position = "top",
  smallWidth = false,
}: {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  smallWidth?: boolean;
}) {
  return (
    <div className="group relative w-fit">
      {children}
      <div
        className={cn(
          "pointer-events-none absolute whitespace-nowrap rounded-full border border-b-0 border-white/5 bg-neutral-950/50 px-2.5 py-1.5 text-xs text-white opacity-0 backdrop-blur-2xl duration-200 group-hover:opacity-100",
          position === "top" &&
            "bottom-6 left-1/2 -translate-x-1/2 -translate-y-1 group-hover:-translate-y-1/2",
          position === "right" &&
            "left-12 top-1/2 -translate-x-2 -translate-y-1/2 group-hover:translate-x-0",
          smallWidth && "w-fit max-w-[100px] truncate text-center",
        )}
      >
        {content}
      </div>
    </div>
  );
}
