import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-fit overflow-hidden rounded-full border border-primary/25 bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-2 text-xs text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
