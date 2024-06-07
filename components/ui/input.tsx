import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputVariants = cva(
  "flex h-9 w-full rounded-md px-3 py-1 text-sm text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 hover:border-white/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:hover:border-white/25",
  {
    variants: {
      variant: {
        default: "glassmorphism",
        transparent:
          "border-none !bg-transparent focus-visible:outline-none focus-visible:ring-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface LinkProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, LinkProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
