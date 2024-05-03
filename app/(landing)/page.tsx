import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import { InfiniteMovingHighlights } from "@/components/landing/infinite-moving-highlights";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "@/components/landing/claim-link";

export default function Page() {
  return (
    <div className="relative">
      <Image
        src={BackgroundImage}
        alt="abstract background image"
        className="fixed inset-0 h-full w-full scale-110 object-cover blur-md brightness-[50%] hue-rotate-[10deg]"
      />
      <Container
        className="relative flex min-h-screen flex-col gap-12 py-24 md:pt-32 lg:flex-row"
        variant="landing"
      >
        <div className="relative flex flex-1 flex-col items-start justify-start gap-6 md:justify-center">
          <div className="max-w-3xl pb-4 text-5xl font-medium text-indigo-100 md:text-6xl lg:text-7xl">
            Connect all your links with one single link.
          </div>
          <div className="max-w-2xl text-base text-slate-300 sm:text-xl lg:text-left">
            linkinbio.at is your modern, customizable, and free solution for
            connecting with your audience.
          </div>
          <ClaimLink />
          <InfiniteMovingHighlights speed="slow" />
        </div>
        <div className="hidden flex-1 items-center justify-center md:justify-center xl:flex"></div>
      </Container>
    </div>
  );
}
