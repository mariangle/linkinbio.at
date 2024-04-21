"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { SunMediumIcon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggle = () =>
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <button onClick={toggle}>
      <SunMediumIcon className="size-4" />
    </button>
  );
}
