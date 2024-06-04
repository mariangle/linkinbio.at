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
      className={cn("mx-auto w-full max-w-[1150px] px-6", className)}
      {...props}
    >
      {props.children}
    </div>
  );
}
