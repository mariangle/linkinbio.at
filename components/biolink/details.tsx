import { cn } from "@/lib/utils";

import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export function Details({
  occupation,
  location,
  whiteText = true,
  className,
}: {
  occupation?: string;
  location?: string;
  whiteText?: boolean;
  className?: string;
}) {
  if (!occupation && !location) return null;

  return (
    <div
      className={cn(
        "mt-2 flex items-center justify-center gap-2 text-sm",
        whiteText ? "text-white/70" : "text-black/50",
        className,
      )}
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
