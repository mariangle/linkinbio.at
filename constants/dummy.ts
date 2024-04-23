import type { Biolink } from "@/types";
import { Layout } from "@/components/biolink/layout";
import { Font } from "./fonts";
import { WeatherEffect, TitleEffect } from "@/types";
export const dummyBiolink: Biolink = {
  user: {
    username: "johndoe",
  },
  profile: {
    title: "John Doe",
    bio: "I am a developer",
    image: "https://avatars.dicebear.com/api/avataaars/johndoe.svg",
  },
  config: {
    darkText: false,
    font: Font.Inter,
    layout: Layout.Classic,
    background: {
      url: "https://images.unsplash.com/photo-1624422736251-3e4c1f0c4e9d",
      color: "#000000",
    },
    button: {
      shadow: 0,
      text: {
        color: "#FFFFFF",
      },
      border: {
        color: "#000000",
        radius: 0,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 0.5,
        blur: 50,
      },
      options: {
        socialBackgroundColor: false,
        socialIconColor: false,
        hideIcon: false,
        hideText: false,
      },
    },
    container: {},
    title: {
      font: "inter",
      color: "#FFFFFF",
    },
    visuals: {
      title: TitleEffect.Sparkles,
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
  ],
};
