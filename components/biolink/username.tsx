import { cn } from "@/lib/utils";
export function Username({
  children,
  className,
  whiteText,
}: {
  children: React.ReactNode;
  className?: string;
  whiteText: boolean;
}) {
  return (
    <div
      className={cn(
        "mt-1 text-xs",
        whiteText ? "text-white/75" : "text-black/75",
        className,
      )}
    >
      @{children}
    </div>
  );
}
