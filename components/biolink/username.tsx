import { cn } from "@/lib/utils";
import { TextOptions } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/get-font";

export function Username({
  className,
  options,
  username,
}: {
  className?: string;
  options?: TextOptions;
  username: string;
}) {
  return (
    <div
      className={cn(
        "mt-1 text-sm opacity-80",
        className,
        getFontDisplay(options?.font),
      )}
      style={{ color: options?.color }}
    >
      @{username}
    </div>
  );
}
