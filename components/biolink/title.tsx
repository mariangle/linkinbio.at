import Image from "next/image";

import { cn } from "@/lib/utils";
import { fonts } from "@/constants/fonts";
import { TypewriterEffect } from "@/components/biolink/effects/typewriter-effect";
import { TitleOptions } from "@/types";
import { defaultTitle } from "@/constants/default-options";

export function Title({
  options = defaultTitle,
  typewriter,
  sparkles,
  className,
  whiteText,
  title,
}: {
  options?: TitleOptions;
  className?: string;
  typewriter?: boolean;
  sparkles?: boolean;
  whiteText: boolean;
  title: string;
}) {
  const font = fonts.find((item) => item.value === options?.font);

  if (typewriter) {
    return (
      <div className="relative">
        {sparkles && (
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
            !options.color && whiteText ? "text-white" : "text-black",
            className,
            font?.display ?? "inter",
          )}
          style={{ color: options.color ? options.color : undefined }}
        >
          <TypewriterEffect words={title} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {sparkles && (
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
          "relative text-xl font-semibold",
          font?.display ?? "inter",
          !options.color && whiteText ? "text-white" : "text-black",
          className,
        )}
        style={{ color: options.color ? options.color : undefined }}
      >
        {title}
      </h2>
    </div>
  );
}
