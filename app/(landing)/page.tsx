import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import { InfiniteMovingHighlights } from "@/components/landing/infinite-moving-highlights";
import { Container } from "@/components/ui/container";
import { ClaimLink } from "@/components/landing/claim-link";
import { PhoneMockup } from "@/components/phone-mockup";
import {
  Biolink,
  ContentType,
  Font,
  Layout,
  TitleEffect,
  TopIconStyle,
  WeatherEffect,
} from "@/lib/types";

const dummyUser: Biolink = {
  user: {
    id: "example_user_id",
    username: "johndoe",
    email: "",
    title: "John Doe",
    image:
      "https://i.pinimg.com/originals/48/05/52/48055289925e3cbc76016f986aa5b401.jpg",
    occupation: "Google",
    location: "USA",
    bio: "Software engineer at Google.",
    premium: true,
  },
  config: {
    profile: {
      customized: true,
      title: {
        font: Font.Roboto,
        color: "#FFFFFF",
      },
      text: {
        color: "#FFFFFF",
        font: Font.Roboto,
      },
      layout: Layout.Standard,
      hideUsername: false,
    },
    button: {
      shadow: {
        solid: true,
        spreadRadius: 5,
        color: "#000000",
      },
      text: {
        color: "#ffffff",
        hidden: false,
      },
      border: {
        color: "#000000",
        radius: 5,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 0.25,
        blur: 50,
        socialColor: false,
      },
      icon: {
        hidden: false,
        shadow: true,
        socialColor: true,
      },
      customized: true,
    },

    background: {
      customized: true,
      color: "#141315",
      url: "https://i.pinimg.com/originals/57/81/ce/5781cefdb7a976f2f24b7abd255513c1.jpg",
      gradient: {
        startColor: "#FF512F",
        endColor: "#DD2476",
      },
    },

    topIcon: {
      shadow: false,
      style: TopIconStyle.SocialBackgroundWhiteColor,
      customized: true,
      color: "#FFFFFF",
    },
    effects: {
      customized: true,
      title: TitleEffect.Typewriter,
      weather: WeatherEffect.Thunder,
    },
  },
  links: {
    website: [],
    platform: [
      {
        id: "example_link_id",
        order: 0,
        provider: "Spotify",
        username: "https://spotify.com/username",
        isTopIcon: true,
        url: "https://spotify.com/username",
        title: "Spotify",
        archived: false,
      },
      {
        id: "example_link_id",
        order: 0,
        title: "GitHub",
        url: "https://github.com/username",
        isTopIcon: true,

        provider: "GitHub",
        username: "username",
        archived: false,
      },
      {
        id: "example_link_id",
        order: 0,
        title: "Facebook",
        url: "https://facebook.com/username",
        isTopIcon: true,
        provider: "Facebook",
        username: "username",
        archived: false,
      },
      {
        id: "example_link_id",
        order: 0,
        title: "Twitter",
        url: "https://twitter.com/username",
        isTopIcon: false,
        provider: "Twitter",
        username: "username",
        archived: false,
      },
      {
        id: "example_link_id",
        order: 0,
        title: "Youtube",
        url: "https://youtube.com/username",
        isTopIcon: false,
        provider: "Youtube",
        username: "username",
        archived: false,
      },
      {
        id: "example_link_id",
        order: 0,
        title: "Website",
        url: "https://website.com/username",
        isTopIcon: false,
        provider: "Website",
        username: "username",
        archived: false,
      },
    ],
  },
  modules: {
    spotify: {
      enabled: true,
      compactLayout: true,
      darkBackground: true,
      contentId: "6FED8aeieEnUWwQqAO9zT1",
      type: ContentType.Album,
    },
  },
};

export default function Page() {
  return (
    <div className="relative">
      <Image
        src={BackgroundImage}
        alt="abstract background image"
        className="fixed inset-0 h-full w-full scale-110 object-cover blur-md brightness-[65%] hue-rotate-[10deg]"
      />
      <Container
        className="relative flex min-h-screen flex-col gap-24 py-24 md:pt-32 lg:flex-row"
        variant="landing"
      >
        <div className="relative flex flex-1 flex-col items-start justify-start gap-6 md:justify-center">
          <div className="max-w-3xl pb-4 text-5xl font-medium text-indigo-100 md:text-6xl lg:text-7xl">
            Connect all your links with one single link.
          </div>
          <div className="max-w-2xl text-base text-slate-300 sm:text-xl lg:text-left">
            Your modern, customizable, and free solution for connecting with
            your audience.
          </div>
          <ClaimLink />
          <InfiniteMovingHighlights speed="slow" />
        </div>
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <PhoneMockup scale={false} hero biolink={dummyUser} />
        </div>
      </Container>
    </div>
  );
}
