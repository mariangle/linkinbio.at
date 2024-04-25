import { cn } from "@/lib/utils";

export function ContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("z-20 mx-auto h-fit w-full max-w-xl p-4", className)}>
      {children}
    </div>
  );
}
