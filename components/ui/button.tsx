import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex disabled:cursor-not-allowed tracking-wide items-center duration-300 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary/65 text-white hover:bg-primary/40 border border-white/15 shadow-sm drop-shadow-[0_0px_5px_hsl(var(--primary))]",
        destructive:
          "bg-destructive/65 text-destructive-foreground border border-white/10 dark:border-white/5 shadow-sm hover:bg-destructive/50 drop-shadow-[0_0px_5px_hsl(var(--destructive))]",
        outline:
          "bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white/20 border border-white/10 dark:border-white/5 hover:bg-white/30 dark:bg-white/5 dark:hover:bg-white/10 shadow-sm",
        foreground:
          "bg-foreground text-white dark:text-black shadow-sm hover:bg-foreground/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
