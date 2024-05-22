import { cn } from "@/lib/utils";

export function ContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-20 mx-auto flex h-fit w-full max-w-xl flex-col items-center p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
