"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface BorderOptions {
  label?: string;
  value: string | number;
  display?: number;
}

export const borderOptions: BorderOptions[] = [
  {
    label: "0",
    value: "none",
    display: 0,
  },
  {
    label: "0.2",
    value: "sm",
    display: 5,
  },
  {
    label: "0.4",
    value: "md",
    display: 8,
  },
  {
    label: "0.6",
    value: "lg",
    display: 10,
  },
  {
    label: "0.8",
    value: "xl",
    display: 12,
  },
  {
    label: "1",
    value: "full",
    display: 50,
  },
];

export const buttonRadiusOptions: BorderOptions[] = [
  {
    label: "0",
    value: 0,
  },
  {
    label: "0.2",
    value: 5,
  },
  {
    label: "0.4",
    value: 10,
  },
  {
    label: "0.6",
    value: 15,
  },
  {
    label: "0.8",
    value: 20,
  },
  {
    label: "1",
    value: 25,
  },
];

export const buttonWidthOptions: BorderOptions[] = [
  {
    label: "0px",
    value: 0,
  },
  {
    label: "1px",
    value: 1,
  },
  {
    label: "2px",
    value: 2,
  },
  {
    label: "3px",
    value: 3,
  },
  {
    label: "4px",
    value: 4,
  },
  {
    label: "5px",
    value: 5,
  },
];

export function RadiusPicker({
  value,
  onChange,
  options = borderOptions,
  className,
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  options?: BorderOptions[];
  className?: string;
}) {
  return (
    <div className={cn("grid w-full grid-cols-6 gap-4", className)}>
      {options.map((size) => {
        const isSelected = size.value === value;
        return (
          <button
            key={size.value}
            onClick={() => onChange(size.value)}
            className={cn(
              `glassmorphism h-10 w-full shrink-0 text-sm`,
              isSelected && "border border-primary dark:border-primary/50",
            )}
            style={{
              borderTopLeftRadius: size.display ?? size.value,
            }}
            type="button"
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
}
