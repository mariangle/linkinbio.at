import Image from "next/image";

import { cn } from "@/lib/utils";
import { fonts } from "@/constants/fonts";
import { TypewriterEffect } from "@/components/biolink/typewriter-effect";
import { TitleOptions } from "@/types";
import { defaultTitle } from "@/constants/default-options";

export function Title({
  children,
  options = defaultTitle,
  typewriter,
  sparkles,
  className,
}: {
  children: React.ReactNode;
  options?: TitleOptions;
  className?: string;
  typewriter?: boolean;
  sparkles?: boolean;
}) {
  const mergedOptions = { ...defaultTitle, ...options };

  const font = fonts.find((item) => item.value === mergedOptions?.font);

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
            className,
            font?.display ?? "inter",
          )}
          style={{ color: mergedOptions.color }}
        >
          <TypewriterEffect words={children as string} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {true && (
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
          className,
        )}
        style={{ color: mergedOptions?.color ?? "#FFFFFF" }}
      >
        {children}
      </h2>
    </div>
  );
}
