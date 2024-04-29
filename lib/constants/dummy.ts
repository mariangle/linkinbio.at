import type { Biolink } from "@/types";
import { WeatherEffect } from "@/types";
import { Layout, Font } from "@/types/enums";
import { TopIconStyle } from "@/types";

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
        socialIconColor: false,
      },
      icon: {
        hidden: false,
        shadow: false,
        socialIconColor: false,
      },
    },
    title: {
      font: "inter",
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
