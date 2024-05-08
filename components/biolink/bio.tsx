import { cn } from "@/lib/utils";
import { TextOptions } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/get-font";

export function Bio({
  bio,
  className,
  options,
}: {
  bio: string;
  className?: string;
  options?: TextOptions;
}) {
  return (
    <p
      className={cn("mt-2 text-base", className, getFontDisplay(options?.font))}
      style={{ color: options?.color }}
    >
      {bio}
    </p>
  );
}
