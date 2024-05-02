import Link from "next/link";

import { cn } from "@/lib/utils";

export function Footer({
  textDark,
  className,
}: {
  textDark: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <div
        className={cn("text-xs", !textDark ? "text-white/70" : "text-black/50")}
      >
        Made with linkinbio.at
      </div>
    </Link>
  );
}
