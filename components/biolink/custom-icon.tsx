"use client";

import * as FaIcons from "react-icons/fa";
import * as LuIcons from "react-icons/lu";
import * as HiIcons from "react-icons/hi";

import { cn } from "@/lib/utils";

interface CustomIconOptions {
  shadow: boolean;
  color: string;
}

export function CustomIcon({
  name,
  options,
  className,
}: {
  name?: string;
  options?: CustomIconOptions;
  className?: string;
}) {
  if (!name) {
    return null;
  }

  try {
    let IconComponent;

    if (name.startsWith("Fa")) {
      IconComponent = FaIcons[name as keyof typeof FaIcons];
    } else if (name.startsWith("Lu")) {
      IconComponent = LuIcons[name as keyof typeof LuIcons];
    } else if (name.startsWith("Hi")) {
      IconComponent = HiIcons[name as keyof typeof HiIcons];
    } else {
      return null;
    }

    if (!IconComponent) {
      return null;
    }

    const filter = options?.shadow
      ? `drop-shadow(0 0 0.5rem ${options?.color})`
      : undefined;

    return (
      <IconComponent
        style={{
          color: options?.color,
          filter,
        }}
        className={cn(
          "absolute left-4 top-1/2 size-5 -translate-y-1/2",
          className,
        )}
      />
    );
  } catch (error) {
    return null;
  }
}
