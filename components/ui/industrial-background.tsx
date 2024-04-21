import { cn } from "@/lib/utils";

export function IndustrialBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-screen dark:bg-background">
      {/* Inner vertical line */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[825px] ">
        <div className="vertical-line absolute right-0 top-0">
          <div className="vertical-line-shadow absolute right-px top-0"></div>
        </div>
        <div className="vertical-line">
          <div className="vertical-line-shadow absolute -left-px top-0"></div>
        </div>
        {/* Top left blur */}
        <div className="absolute left-0 top-24 h-28 w-[400px] -rotate-45 bg-indigo-600/40 blur-2xl dark:bg-indigo-800/50">
          <div className="absolute left-0 top-24 h-16 w-[500px] -translate-y-48 bg-indigo-400/50 opacity-0 blur-3xl dark:opacity-100"></div>
        </div>
        {/* Bottom right blur */}
        <div className="absolute bottom-1/3 right-0 h-28 w-[400px] -rotate-45 bg-indigo-300 blur-3xl dark:bg-indigo-800/50"></div>
      </div>
      {/* Outer vertical line */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-screen-lg">
        <div className="vertical-line absolute left-0 top-0">
          <div className="vertical-line-shadow absolute right-px top-0"></div>
        </div>
        <div className="vertical-line absolute right-0 top-0">
          <div className="vertical-line-shadow absolute -left-px top-0"></div>
        </div>
      </div>
      {/* Horizontal top line */}
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full pt-24">
        <div className="horizontal-line"></div>
        <div className="horizontal-line-shadow"></div>
      </div>
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
}
