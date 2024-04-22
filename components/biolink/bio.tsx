import { cn } from "@/lib/utils";

export function Bio({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-2 text-sm", className)} style={{ color: "#FFFFFF" }}>
      {children}
    </p>
  );
}
