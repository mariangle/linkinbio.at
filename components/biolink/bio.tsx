import { cn } from "@/lib/utils";

import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";

export function Bio({
  bio,
  className,
  typewriter,
  whiteText,
}: {
  bio: string;
  className?: string;
  typewriter?: boolean;
  whiteText: boolean;
}) {
  if (typewriter) {
    return (
      <div
        className={cn(
          "mt-2 text-sm",
          whiteText ? "text-white" : "text-black",
          className,
        )}
      >
        <TypewriterEffect words={bio} />
      </div>
    );
  }

  return (
    <p
      className={cn(
        "mt-2 text-base",
        whiteText ? "text-white" : "text-black",
        className,
      )}
    >
      {bio}
    </p>
  );
}
