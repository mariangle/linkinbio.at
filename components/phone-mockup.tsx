import { cn } from "@/lib/utils";
import { Layout } from "@/components/biolink/layout";
import { Biolink, Layout as LayoutEnum } from "@/lib/types";

export function PhoneMockup({
  hero,
  biolink,
  className,
  scale = true,
}: {
  hero?: boolean;
  biolink?: Biolink;
  className?: string;
  scale?: boolean;
}) {
  return (
    <div className="perspective">
      <div
        className={cn(
          "iphone-x not-prose overflow-hidden",
          hero && "iphone-x-featured pointer-events-none",
          scale && "sm:scale-125 md:scale-150",
          className,
        )}
      >
        <div className="relative z-0 block h-full overflow-hidden rounded-[2.4rem] border border-black">
          {biolink && (
            <Layout
              biolink={biolink}
              preview
              layout={biolink.config.profile?.layout}
            />
          )}
        </div>
      </div>
    </div>
  );
}
