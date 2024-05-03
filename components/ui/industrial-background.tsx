import { cn } from "@/lib/utils";

export function IndustrialBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030010]">
      {/* Inner vertical line */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1200px]">
        <div className="vertical-line absolute right-0 top-0"></div>
        <div className="vertical-line"></div>
        {/* Top left blur */}
        <div className="absolute left-0 top-24 h-28 w-[400px] -rotate-45  bg-[#443A76]/10 blur-2xl">
          <div className="absolute left-0 top-24 h-16 w-[500px] -translate-y-48 bg-indigo-400/10 opacity-100 blur-3xl"></div>
        </div>
        {/* Bottom right blur */}
      </div>
      {/* Outer vertical line */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1200px]">
        <div className="vertical-line absolute left-0 top-0"></div>
        <div className="vertical-line absolute right-0 top-0"></div>
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
