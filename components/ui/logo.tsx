import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-fit rounded-md border border-border/50 bg-gradient-to-tr from-background p-2 shadow-xl dark:to-indigo-800/20",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="webvaerk"
        width={50}
        height={50}
        className="size-4"
      />
    </div>
  );
}
