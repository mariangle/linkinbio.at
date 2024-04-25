import { cn } from "@/lib/utils";
import { Layout } from "@/components/biolink/layout";
import { Biolink } from "@/types";

export function PhoneMockup({
  hero,
  biolink,
}: {
  hero?: boolean;
  biolink: Biolink;
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
          <Layout biolink={biolink} layout={biolink.config.layout} preview />
        </div>
        <div className="reflection" />
      </div>
    </div>
  );
}
