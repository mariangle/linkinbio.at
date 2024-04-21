import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import { InfiniteMovingHighlights } from "@/components/landing/infinite-moving-highlights";
import { iPhone as Phone } from "@/components/ui/iphone";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "@/components/landing/claim-link";

export default function Page() {
  return (
    <div className="relative">
      <Image
        src={BackgroundImage}
        alt="abstract background image"
        className="fixed inset-0 h-full w-full scale-105 object-cover blur-md brightness-75 hue-rotate-[20deg]"
      />
      <Container
        className="relative flex min-h-screen flex-col gap-12 py-24 md:pt-32 lg:flex-row"
        variant="landing"
      >
        <div className="relative flex flex-1 flex-col items-start justify-start gap-4 md:justify-center">
          <div className="max-w-4xl pb-4 text-5xl font-semibold text-gray-200 md:text-6xl lg:text-7xl">
            The most{" "}
            <span className="animate-gradient bg-gradient-to-r from-indigo-500 via-indigo-400 via-40% to-indigo-500 to-50% bg-clip-text text-transparent">
              advanced
            </span>{" "}
            link-in-bio. Ever.
          </div>
          <div className="max-w-3xl text-base text-gray-300 sm:text-lg lg:text-left">
            Streamline your social media accounts with one powerful link. Highly
            customizable and easy-to-use link-in-bio tool.
          </div>
          <ClaimLink />
          <InfiniteMovingHighlights speed="fast" />
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <Phone />
        </div>
      </Container>
    </div>
  );
}
