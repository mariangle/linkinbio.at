import { cn } from "@/lib/utils";

import { InfiniteMovingHighlights } from "./_components/infinite-scrolling-text";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "./_components/claim-link";
import { BackgroundCellCore } from "@/components/ui/background-ripple-effect";
import { FlipWords } from "./_components/flip-words";
import { CircleCheckBig } from "lucide-react";

const highlights = [
  "Instant setup",
  "No credit card required",
  "Unlimited access",
];
const words = ["advanced", "intuitive", "flexible", "modern"];

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
      <BackgroundCellCore />
      <Container className="pointer-events-none relative z-50 flex h-[90vh] flex-col gap-12 py-24">
        <div className="relative flex flex-1 flex-col items-start justify-start gap-8 md:justify-center">
          <div
            className={cn(
              "max-w-5xl text-5xl font-medium tracking-wide sm:text-5xl md:text-6xl lg:text-7xl",
            )}
          >
            <span>
              The most <FlipWords words={words} /> <br />
            </span>
            link-in-bio. Ever.
          </div>
          <div className="pointer-events-auto max-w-2xl text-base text-[#B8CEC1] sm:text-xl lg:text-left">
            Introducing your advanced, no-cost solution for engaging with your
            audience, offering full customization without any themes.
          </div>
          <div className="pointer-events-auto">
            <ClaimLink />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-[#39997c]",
                )}
              >
                <CircleCheckBig className="size-3" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-t-teal-900">
        <InfiniteMovingHighlights speed="slow" direction="right" />
      </div>
    </div>
  );
}
