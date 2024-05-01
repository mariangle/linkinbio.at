import { cn } from "@/lib/utils";
import { Layout } from "@/components/biolink/layout";
import { Biolink, Layout as LayoutEnum } from "@/lib/types";

export function PhoneMockup({
  hero,
  biolink,
  layout,
  scale = true,
  className,
}: {
  hero?: boolean;
  biolink?: Biolink;
  layout?: LayoutEnum;
  scale?: boolean;
  className?: string;
}) {
  return (
    <div className="perspective">
      <div
        className={cn(
          "iphone-x not-prose overflow-hidden",
          scale && "sm:scale-125 md:scale-150",
          hero && "iphone-x-featured",
          className,
        )}
      >
        <div className="relative z-0 block h-full overflow-hidden rounded-[2.4rem] border border-black">
          {biolink && (
            <Layout
              biolink={biolink}
              preview
              layout={layout ?? biolink.config.layout}
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 h-full w-full origin-bottom rounded-[40px] opacity-50" />
      </div>
    </div>
  );
}
