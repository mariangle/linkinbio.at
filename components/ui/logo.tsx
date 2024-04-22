import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "o-indigo-800/20 w-fit rounded-full border border-border/50 bg-slate-800 bg-gradient-to-tr from-slate-800 p-1.5 shadow-xl",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="webvaerk"
        width={50}
        height={50}
        className="size-5"
      />
    </div>
  );
}
