import { cn } from "@/lib/utils";
import { Layout } from "@/components/biolink/layout";
import { Biolink, Layout as LayoutEnum } from "@/types";

export function PhoneMockup({
  hero,
  biolink,
  layout,
  scale = true,
}: {
  hero?: boolean;
  biolink?: Biolink;
  layout?: LayoutEnum;
  scale?: boolean;
}) {
  return (
    <div className="perspective">
      <div
        className={cn(
          "iphone-x not-prose overflow-hidden",
          hero && "iphone-x-featured",
          scale && "sm:scale-125 md:scale-150",
        )}
      >
        <div className="relative z-0 block h-full overflow-hidden rounded-[2.4rem] border border-black">
          {biolink && (
            <Layout
              biolink={biolink}
              layout={layout ?? biolink.config.layout}
              preview
            />
          )}
        </div>
        <div className="absolute inset-0 h-full w-full origin-bottom rounded-[40px] opacity-50" />
      </div>
    </div>
  );
}
