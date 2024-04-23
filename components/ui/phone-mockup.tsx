import { cn } from "@/lib/utils";
import { Layout } from "@/components/biolink/layouts";
import { Biolink } from "@/types";
import { Layout as LayoutEnum } from "@/types/enums";

export function PhoneMockup({
  hero,
  biolink,
  layout = LayoutEnum.Standard,
}: {
  hero?: boolean;
  biolink: Biolink;
  layout?: LayoutEnum;
}) {
  return (
    <div className="perspective">
      <div
        className={cn(
          "iphone-x not-prose overflow-hidden",
          hero && "iphone-x-featured",
        )}
      >
        <div className="relative z-0 block h-full overflow-hidden rounded-[2.4rem] border border-black">
          <Layout biolink={biolink} layout={layout} preview />
        </div>
        <div className="reflection" />
      </div>
    </div>
  );
}
