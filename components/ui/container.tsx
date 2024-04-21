import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  as?: string;
  section?: boolean;
  page?: boolean;
  variant?: "landing";
}

export function Container({
  className,
  section,
  page,
  variant,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-lg px-4",
        section && "py-24",
        page && "min-h-[100svh] py-32",
        variant === "landing" && "max-w-none px-6 md:px-12 lg:px-16",

        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
