import { InfiniteMovingHighlights } from "./_components/infinite-scrolling-text";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "./_components/claim-link";
import { BackgroundCellCore } from "./_components/background-ripple-effect";
import { HeroShowcase } from "./_components/hero-showcase";

export default function Page() {
  return (
    <div className="relative overflow-x-hidden">
      <BackgroundCellCore />
      <Container
        className="pointer-events-none relative z-50 flex min-h-screen flex-col gap-12 py-24 md:pt-32 2xl:flex-row"
        variant="landing"
      >
        <div className="relative flex flex-1 flex-col items-start justify-start gap-6 md:justify-center">
          <div className="max-w-5xl pb-2 text-5xl font-semibold md:text-6xl lg:text-6xl">
            Connect all your links with one single link.
          </div>
          <div className="max-w-2xl text-base text-muted-foreground sm:text-xl lg:text-left">
            Introducing your advanced, fully customizable, and no-cost solution
            for engaging with your audience.
          </div>
          <div className="pointer-events-auto">
            <ClaimLink />
          </div>
          <div className="relative">
            <div className="fixed inset-x-0 z-10 translate-y-12 2xl:bottom-0 2xl:translate-y-0">
              <div className="-rotate-3 bg-[#F98BD7]">
                <InfiniteMovingHighlights speed="slow" direction="left" />
              </div>
            </div>
            <div className="fixed inset-x-0 z-10 translate-y-12 2xl:bottom-0 2xl:translate-y-0">
              <div className="rotate-3 bg-[#8bda31] drop-shadow-[0_0px_10px_rgba(0,0,0,0.5)] dark:bg-[#A6F000]">
                <InfiniteMovingHighlights speed="slow" direction="right" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <div className="pointer-events-auto w-full">
            <HeroShowcase />
          </div>
        </div>
      </Container>
    </div>
  );
}
