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
    title: "John Doe",
    bio: "I am a developer",
    image: "https://avatars.dicebear.com/api/avataaars/johndoe.svg",
  },
  config: {
    darkText: false,
    font: Font.Inter,
    layout: Layout.Glassmorphism,
    showTopIcons: true,
    background: {
      url: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg",
      color: "#000000",
    },
    topIcon: {
      dropShadow: true,
      style: TopIconStyle.WHITE_BACKGROUND_SOCIAL_COLOR,
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
        color: "#FFFFFF",
        opacity: 0.1,
        blur: 0,
        socialIconColor: false,
      },
      icon: {
        hidden: false,
        shadow: false,
        socialIconColor: false,
      },
    },
    container: {},
    title: {
      font: "inter",
      color: "#FFFFFF",
    },
    effects: {
      weather: WeatherEffect.Thunder,
      titleTypewriter: true,
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
  ],
};
