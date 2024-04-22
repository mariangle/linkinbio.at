import { cn } from "@/lib/utils";
export function Username({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-1 text-xs text-gray-300", className)}>
      @{children}
    </div>
  );
}
