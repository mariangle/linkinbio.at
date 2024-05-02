import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  loading?: boolean;
  variant?: "youtube" | "spotify" | "soundcloud" | "secondary";
}

export function ModuleButton({
  loading,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "transform cursor-pointer rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-opacity-50",
        variant === "youtube" && "bg-red-500 hover:bg-red-600",
        variant === "spotify" && "bg-green-500 hover:bg-green-600",
        variant === "soundcloud" && "bg-orange-500 hover:bg-orange-600",
        variant === "secondary" && "bg-neutral-700 hover:bg-neutral-600",
      )}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : props.children}
    </button>
  );
}
