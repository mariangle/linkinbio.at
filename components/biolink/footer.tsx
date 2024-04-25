import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="size-5"
      />
      <div
        className={cn("text-xs", !textDark ? "text-white/70" : "text-black/50")}
      >
        Made with LinkUp
      </div>
    </Link>
  );
}
