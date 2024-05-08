import Image from "next/image";

import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";
import { Font, TitleEffect, User } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/get-font";

interface TitleOptions {
  effect?: TitleEffect;
  font?: Font;
  color: string;
}

export function Title({
  options,
  className,
  user,
}: {
  options: TitleOptions;
  className?: string;
  user: Pick<User, "title" | "username">;
}) {
  if (options.effect === TitleEffect.Typewriter) {
    return (
      <div className="relative">
        <div
          className={cn(
            "text-xl font-semibold",
            className,
            getFontDisplay(options?.font),
          )}
          style={{
            color: options?.color ? options.color : undefined,
          }}
        >
          <TypewriterEffect words={user.title || `@${user.username}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-fit">
      {options.effect === TitleEffect.Sparkles && (
        <Image
          src="/sparkle.gif"
          alt="sparkle"
          unoptimized
          width="0"
          height="0"
          sizes="100vw"
          className="absolute h-full w-full object-cover"
        />
      )}
      {options.effect === TitleEffect.CherryBlossoms && (
        <Image
          src="/cherry-blossoms.gif"
          alt="cherry blossoms"
          unoptimized
          width="0"
          height="0"
          sizes="100vw"
          className="absolute h-full w-full object-cover"
        />
      )}
      <h2
        className={cn(
          "relative w-fit text-xl font-semibold",
          className,
          getFontDisplay(options?.font),
        )}
        style={{
          color: options.color,
          font: options.font,
        }}
      >
        {user.title || `@${user.username}`}
      </h2>
    </div>
  );
}
