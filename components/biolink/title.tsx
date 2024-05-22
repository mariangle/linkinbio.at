import Image from "next/image";

import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";
import { TitleOptions, TitleEffect, User } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/get-font";

export function Title({
  options,
  effect,
  className,
  user,
}: {
  options?: TitleOptions;
  effect?: TitleEffect;
  className?: string;
  user: Pick<User, "title" | "premium">;
}) {
  if (!user.title) return null;

  if (user.premium && effect === TitleEffect.Typewriter) {
    return (
      <div className="relative">
        <div
          style={{
            color: options?.color,
          }}
          className={cn(
            "text-wrap break-all text-xl font-semibold tracking-wider",
            className,
            getFontDisplay(options?.font),
          )}
        >
          <TypewriterEffect words={user.title} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-fit">
      {user.premium && effect === TitleEffect.Sparkles && (
        <Image
          src="/effects/sparkles.gif"
          alt="sparkle"
          unoptimized
          width="0"
          height="0"
          sizes="100vw"
          className="absolute h-full w-full object-cover"
        />
      )}
      {user.premium && effect === TitleEffect.CherryBlossoms && (
        <Image
          src="/effects/cherry-blossoms.gif"
          alt="cherry blossoms"
          unoptimized
          width="0"
          height="0"
          sizes="100vw"
          className="absolute h-full w-full object-cover"
        />
      )}
      <h2
        style={{
          color: options?.color,
          font: options?.font,
        }}
        className={cn(
          "relative w-fit text-wrap break-all bg-transparent text-xl font-semibold tracking-wider",
          className,
          effect === TitleEffect.Glitch && "glitch-effect",
          effect === TitleEffect.Shake && "shake-effect",
          getFontDisplay(options?.font),
        )}
        data-text={user.title}
      >
        {user.title}
      </h2>
    </div>
  );
}
