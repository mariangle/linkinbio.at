import { cn } from "@/lib/utils";

export function ContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto h-full w-full max-w-xl p-4", className)}>
      {children}
    </div>
  );
}
