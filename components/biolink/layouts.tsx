import type { Biolink } from "@/types";
import { cn } from "@/lib/utils";
import { Layout as LayoutEnum } from "@/types/enums";
import { GlassmorphismLayout } from "@/components/biolink/layouts/glassmorphism-layout";
import { StandardLayout } from "@/components/biolink/layouts/standard-layout";
import { SleekLayout } from "@/components/biolink/layouts/sleek-layout";

export function Layout({
  biolink,
  preview,
  layout,
}: {
  biolink: Biolink;
  preview?: boolean;
  layout?: LayoutEnum;
}) {
  switch (layout) {
    case LayoutEnum.Standard:
      return (
        <div className={cn("fixed inset-0", preview && "absolute")}>
          <StandardLayout biolink={biolink} preview={preview} />
        </div>
      );

    case LayoutEnum.Glassmorphism:
      return (
        <div className="absolute inset-0">
          <GlassmorphismLayout biolink={biolink} preview={preview} />
        </div>
      );

    case LayoutEnum.Sleek:
      return (
        <div className="absolute inset-0">
          <SleekLayout biolink={biolink} preview={preview} />
        </div>
      );

    default:
      return (
        <div className={cn("fixed inset-0", preview && "absolute")}>
          <StandardLayout biolink={biolink} preview={preview} />
        </div>
      );
  }
}
