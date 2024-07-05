import Image from "next/image";

import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";
import { FlickerText } from "@/components/biolink/effects/flicker-text";
import { TitleOptions, TitleEffect, User } from "@/lib/types";
import { getFontDisplay } from "@/lib/utils/getters";
import { hexToRgb } from "@/lib/utils";

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

  if (!user.premium) {
    effect = undefined;
  }

  const { r, g, b } = hexToRgb(options?.color);

  const shimmerStyles = effect === TitleEffect.Shimmer && {
    background: `linear-gradient(90deg, transparent, rgba(${r}, ${g}, ${b}, 1), transparent)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    animation: "shining 2s linear infinite",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: `rgba(${r}, ${g}, ${b}, 0.25)`,
    backgroundClip: "text",
  };

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
          ...shimmerStyles,
        }}
        className={cn(
          "relative w-fit text-wrap break-all bg-transparent text-xl font-semibold tracking-wider",
          className,
          effect === TitleEffect.Glitch && "glitch-effect",
          effect === TitleEffect.Shake && "shake-effect",
          effect === TitleEffect.Rainbow && "rainbow-effect",
          getFontDisplay(options?.font),
        )}
      >
        {effect === TitleEffect.Glitch && (
          <span aria-hidden="true">{user.title}</span>
        )}
        {effect === TitleEffect.Typewriter ? (
          <TypewriterEffect words={user.title} />
        ) : effect === TitleEffect.Flicker ? (
          <FlickerText title={user.title} color={options?.color} />
        ) : (
          user.title
        )}
        {effect === TitleEffect.Glitch && (
          <span aria-hidden="true">{user.title}</span>
        )}
      </h2>
    </div>
  );
}
