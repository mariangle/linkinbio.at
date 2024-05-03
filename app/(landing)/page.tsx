import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import { InfiniteMovingHighlights } from "@/components/landing/infinite-moving-highlights";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "@/components/landing/claim-link";
import { PhoneMockup } from "@/components/phone-mockup";
import type { Biolink } from "@/lib/types";
import { WeatherEffect } from "@/lib/types";
import { Layout, Font, ContentType } from "@/lib/types/enums";
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
    profile: {
      invertTextColor: false,
      title: {
        font: Font.Inter,
        color: "#470000",
      },
      font: Font.Inter,
      layout: Layout.Standard,
      hideUsername: false,
    },
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
    effects: {
      titleTypewriter: false,
      bioTypewriter: false,
      titleSparkles: false,
      weatherEffect: WeatherEffect.Thunder,
    },
  },
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
      enabled: true,
      contentId: "123",
      darkBackground: false,
      compactLayout: false,
      type: ContentType.Album,
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
