"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const mounted = useMounted();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme}>
      <Sun className={cn("size-4 dark:hidden", className)} />
      <Moon className={cn("hidden size-4 dark:block", className)} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
