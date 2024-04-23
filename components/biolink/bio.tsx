import { cn } from "@/lib/utils";

import { TypewriterEffect } from "@/components/biolink/typewriter-effect";

export function Bio({
  children,
  className,
  typewriter,
}: {
  children: React.ReactNode;
  className?: string;
  typewriter?: boolean;
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
    <p className={cn("mt-2 text-sm", className)} style={{ color: "#FFFFFF" }}>
      {children}
    </p>
  );
}
