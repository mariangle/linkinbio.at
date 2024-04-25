import type { Biolink } from "@/types";
import { WeatherEffect } from "@/types";
import { Layout, Font } from "@/types/enums";
import { TopIconStyle } from "@/types";

export const dummyBiolink: Biolink = {
  user: {
    username: "johndoe",
    premium: true,
  },
  profile: {
    image:
      "https://i.pinimg.com/564x/29/06/09/2906099a50ab7fc23dbc1a8f01ec64ac.jpg",
    title: "John Doe",
    bio: "I am a developer",
    location: "Earth",
    occupation: "Intelligent Banker",
  },
  config: {
    darkText: false,
    font: Font.Inter,
    layout: Layout.Professional,
    showTopIcons: true,
    hideUsername: false,
    background: {
      url: "https://i.pinimg.com/564x/29/06/09/2906099a50ab7fc23dbc1a8f01ec64ac.jpg",
      color: "#dddddd",
    },
    topIcon: {
      dropShadow: false,
      style: TopIconStyle.SOCIAL_ICON_COLOR,
    },
    button: {
      shadow: {
        solid: false,
        spreadRadius: 0,
      },
      text: {
        color: "#FFFFFF",
        hidden: false,
      },
      border: {
        color: "#000000",
        radius: 24,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 1,
        blur: 0,
        socialIconColor: true,
      },
      icon: {
        hidden: false,
        shadow: false,
        socialIconColor: false,
        dropShadow: false,
      },
    },
    container: {},
    title: {
      font: "inter",
      color: "#470000",
    },
    effects: {
      titleTypewriter: true,
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
    },
    {
      id: "2",
      order: 1,
      title: "GitHub",
      url: "https://github.com",
    },
    {
      id: "3",
      order: 1,
      title: "Instagram",
      url: "https://instagram.com",
    },
    {
      id: "3",
      order: 1,
      title: "Random Website",
      url: "https://website.com",
    },
    {
      id: "4",
      order: 1,
      title: "Random Website",
      url: "https://tiktok.com",
    },
  ],
};
