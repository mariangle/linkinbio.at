import Link from "next/link";

import { cn } from "@/lib/utils";

export function Footer({
  color = "#FFFFFF",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <div className="text-xs" style={{ color }}>
        Made with linkinbio.at
      </div>
    </Link>
  );
}
