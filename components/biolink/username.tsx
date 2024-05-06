import { cn } from "@/lib/utils";

export function Username({
  className,
  whiteText,
  username,
}: {
  className?: string;
  whiteText?: boolean;
  username: string;
}) {
  return (
    <div
      className={cn(
        "mt-1 text-sm",
        whiteText ? "text-white/70" : "text-black/50",
        className,
      )}
    >
      @{username}
    </div>
  );
}
