import Image from "next/image";

import { cn } from "@/lib/utils";
import { fonts } from "@/lib/constants/fonts";
import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";
import { Font, User } from "@/lib/types";

interface TitleOptions {
  typewriter?: boolean;
  sparkles?: boolean;
  font?: Font;
  color: string;
}

export function Title({
  options,
  className,
  whiteText,
  user,
}: {
  options: TitleOptions;
  className?: string;
  whiteText?: boolean;
  user: Pick<User, "title" | "username">;
}) {
  const font = fonts.find((f) => f.value === options.font)?.display;

  if (options.typewriter) {
    return (
      <div className="relative">
        {options.sparkles && (
          <Image
            src="/sparkle.gif"
            alt="logo"
            unoptimized
            width="0"
            height="0"
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
        )}
        <div
          className={cn(
            "text-xl font-semibold",
            !options?.color && whiteText ? "text-white" : "text-black",
            className,
            font ?? "inter",
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
      {options.sparkles && (
        <Image
          src="/sparkle.gif"
          alt="logo"
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
          font ?? "inter",
          !options?.color && whiteText ? "text-white" : "text-black",
          className,
        )}
        style={{
          color: options?.color ? options.color : undefined,
        }}
      >
        {user.title || `@${user.username}`}
      </h2>
    </div>
  );
}
