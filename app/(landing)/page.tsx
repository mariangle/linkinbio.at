import { cn } from "@/lib/utils";

import { InfiniteMovingHighlights } from "./_components/infinite-scrolling-text";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "./_components/claim-link";
import { BackgroundCellCore } from "./_components/background-ripple-effect";

import { FlipWords } from "./_components/flip-words";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export default function Page() {
  const words = ["advanced", "customizable", "flexible", "modern"];

  return (
    <div className="relative overflow-x-hidden">
      <BackgroundCellCore />
      <Container
        className="pointer-events-none relative z-50 flex min-h-screen flex-col gap-12 py-24 2xl:flex-row"
        variant="landing"
      >
        <div className="relative flex flex-1 flex-col items-start justify-start gap-6 md:justify-center">
          <div
            className={cn(
              "max-w-5xl pb-2 text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl",
              poppins.className,
            )}
          >
            <span>
              The most <FlipWords words={words} /> <br />
            </span>
            link-in-bio. Ever.
          </div>
          <div className="my-3 max-w-2xl text-base text-muted-foreground sm:text-xl lg:text-left">
            Introducing your advanced, no-cost solution for engaging with your
            audience, offering full customization without any themes.
          </div>
          <div className="pointer-events-auto">
            <ClaimLink />
          </div>
          <div className="fixed inset-x-0 bottom-0 z-10">
            <div className="border-t">
              <InfiniteMovingHighlights speed="slow" direction="left" />
            </div>
            <div className="border-t">
              <InfiniteMovingHighlights
                speed="slow"
                direction="right"
                secondary
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
