import { cn } from "@/lib/utils";
import { Font, TextOptions } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/get-font";
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { defaultTextOptions } from "@/lib/constants/defaults";

export function Details({
  occupation,
  location,
  options = defaultTextOptions,
  className,
}: {
  occupation?: string;
  location?: string;
  options?: TextOptions;
  className?: string;
}) {
  if (!occupation && !location) return null;

  return (
    <div
      className={cn(
        "mt-2 flex flex-wrap items-center justify-center gap-2 text-sm",
        className,
        getFontDisplay(options.font),
      )}
      style={{ color: options.color }}
    >
      {occupation && (
        <div className="flex items-center gap-2">
          <FaBriefcase className="size-3" />
          {occupation}
        </div>
      )}
      {location && (
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="size-3" />
          {location}
        </div>
      )}
    </div>
  );
}
