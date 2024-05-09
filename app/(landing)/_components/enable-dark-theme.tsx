"use client";

import React from "react";
import { useTheme } from "next-themes";

export function EnableDarkTheme() {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return null;
}
