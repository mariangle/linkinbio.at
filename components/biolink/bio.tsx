import { cn } from "@/lib/utils";
import { TextOptions } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/getters";
import { defaultTextOptions } from "@/lib/constants/defaults";

export function Bio({
  bio,
  className,
  options = defaultTextOptions,
}: {
  bio?: string;
  className?: string;
  options?: TextOptions;
}) {
  if (!bio) return null;

  return (
    <p
      className={cn(
        "mt-1 whitespace-normal text-wrap break-all text-base",
        className,
        getFontDisplay(options.font),
      )}
      style={{ color: options.color }}
    >
      {bio}
    </p>
  );
}
