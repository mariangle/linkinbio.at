import { cn } from "@/lib/utils";

import { TypewriterEffect } from "@/components/biolink/typewriter-effect";

export function Bio({
  children,
  className,
  typewriter,
  whiteText,
}: {
  children: React.ReactNode;
  className?: string;
  typewriter?: boolean;
  whiteText: boolean;
}) {
  if (typewriter) {
    return (
      <div
        className={cn("mt-2 text-sm", className)}
        style={{ color: "#FFFFFF" }}
      >
        <TypewriterEffect words={children as string} />
      </div>
    );
  }

  return (
    <p
      className={cn(
        "mt-2 text-sm",
        whiteText ? "text-white" : "text-black",
        className,
      )}
    >
      {children}
    </p>
  );
}
