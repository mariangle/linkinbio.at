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
    layout: Layout.Standard,
    showTopIcons: false,
    hideUsername: false,
    background: {
      url: "https://i.pinimg.com/564x/29/06/09/2906099a50ab7fc23dbc1a8f01ec64ac.jpg",
      color: "#dddddd",
    },
    topIcon: {
      dropShadow: true,
      style: TopIconStyle.SOCIAL_BACKGROUND,
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
        radius: 5,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 0.8,
        blur: 25,
        socialIconColor: false,
      },
      icon: {
        hidden: false,
        shadow: false,
        socialIconColor: false,
        dropShadow: false,
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
  ],
};
