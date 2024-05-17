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
  user: Pick<User, "title" | "premium">;
}) {
  if (!user.title) return null;

  if (user.premium && options.effect === TitleEffect.Typewriter) {
    return (
      <div className="relative">
        <div
          style={{
            color: options?.color ? options.color : undefined,
          }}
          className={cn(
            "text-wrap break-all  text-xl font-semibold",
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
      {user.premium && options.effect === TitleEffect.Sparkles && (
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
      {user.premium && options.effect === TitleEffect.CherryBlossoms && (
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
        style={{
          color: options.color,
          font: options.font,
        }}
        className={cn(
          "relative w-fit text-wrap break-all  text-xl font-semibold",
          className,
          getFontDisplay(options?.font),
        )}
      >
        {user.title}
      </h2>
    </div>
  );
}
