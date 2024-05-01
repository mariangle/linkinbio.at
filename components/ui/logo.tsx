import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-fit rounded-full border border-border/50 bg-neutral-900 bg-gradient-to-tr from-slate-950 to-indigo-800/20 p-0.5 shadow-xl",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="size-5"
      />
    </div>
  );
}
