import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import { InfiniteMovingHighlights } from "@/components/landing/infinite-moving-highlights";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "@/components/landing/claim-link";
import { PhoneMockup } from "@/components/phone-mockup";
import type { Biolink } from "@/lib/types";
import { WeatherEffect } from "@/lib/types";
import { Layout, Font } from "@/lib/types/enums";
import { TopIconStyle } from "@/lib/types";

export const dummyBiolink: Biolink = {
  user: {
    username: "johndoe",
    premium: true,
    image:
      "https://i.pinimg.com/564x/29/06/09/2906099a50ab7fc23dbc1a8f01ec64ac.jpg",
    title: "John Doe",
    bio: "I am a developer",
    location: "Earth",
    occupation: "Google",
  },
  config: {
    invertTextColor: false,
    font: Font.Inter,
    layout: Layout.Standard,
    hideUsername: false,
    background: {
      color: "#23a6d5",
    },
    topIcon: {
      shadow: true,
      style: TopIconStyle.BlackBackgroundWhiteColor,
    },
    button: {
      shadow: {
        solid: false,
        spreadRadius: 0,
        color: "#000000",
      },
      text: {
        color: "#FFFFFF",
        hidden: false,
      },
      border: {
        color: "#000000",
        radius: 5,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 1,
        blur: 25,
        socialColor: false,
      },
      icon: {
        hidden: false,
        shadow: false,
        socialColor: false,
      },
    },
    title: {
      font: Font.Inter,
      color: "#470000",
    },
    effects: {
      titleTypewriter: false,
      bioTypewriter: false,
      titleSparkles: false,
      weather: WeatherEffect.Thunder,
    },
  },
  settings: {},
  links: [
    {
      id: "1",
      order: 0,
      title: "Twitter",
      url: "https://twitter.com",
      isTopIcon: true,
    },
    {
      id: "2",
      order: 1,
      title: "GitHub",
      url: "https://github.com",
      isTopIcon: true,
    },
    {
      id: "3",
      order: 1,
      title: "Instagram",
      url: "https://instagram.com",
      isTopIcon: true,
    },
    {
      id: "4",
      order: 1,
      title: "Website",
      url: "https://website.com",
      isTopIcon: true,
    },
  ],
  modules: {
    spotify: {
      track: {
        enabled: true,
        trackId: "123",
        darkMode: false,
      },
      album: {
        enabled: true,
        albumId: "123",
        darkMode: false,
        compactLayout: false,
      },
    },
    youtube: {
      videoId: "123",
      enabled: true,
    },
    soundcloud: {
      trackId: "123",
      enabled: true,
    },
  },
};

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
            Lorem, ipsum.{" "}
            <span className="animate-gradient bg-gradient-to-r from-indigo-500 via-indigo-400 via-40% to-indigo-500 to-50% bg-clip-text text-transparent">
              advanced
            </span>{" "}
            Lorem ipsum dolor sit amet.s
          </div>
          <div className="max-w-3xl text-base text-gray-300 sm:text-lg lg:text-left">
            Lorem ipsum dolor sit amet.
          </div>
          <ClaimLink />
          <InfiniteMovingHighlights speed="fast" />
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-center">
          <PhoneMockup hero biolink={dummyBiolink} scale={false} />
        </div>
      </Container>
    </div>
  );
}
