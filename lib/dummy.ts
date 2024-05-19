import {
  Biolink,
  ContentType,
  Font,
  Layout,
  TitleEffect,
  IconStyle,
  WeatherEffect,
} from "@/lib/types";

export const dummyBiolink: Biolink = {
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
    buttons: {
      shadow: {
        solid: false,
        spreadRadius: 5,
        color: "#000000",
      },
      text: {
        hidden: false,
      },
      font: {
        family: Font.Roboto,
        color: "#ffffff",
        shadow: false,
      },
      border: {
        color: "#000000",
        radius: 25,
        width: 0,
      },
      background: {
        color: "#000000",
        opacity: 1,
        blur: 50,
        socialColor: true,
      },
    },
    background: {
      color: "#141315",
      url: "https://wallpapers.com/images/featured/aesthetic-cloud-background-05bsl7m2e5bh01ki.jpg",
      gradient: {
        startColor: "#FF512F",
        endColor: "#DD2476",
      },
    },
    icons: {
      shadow: false,
      style: IconStyle.SocialBackgroundWhiteColor,
      color: "#FFFFFF",
    },
    effects: {
      title: TitleEffect.Typewriter,
      weather: WeatherEffect.Rain,
    },
  },
  links: {
    website: [],
    platform: [
      {
        provider: "Spotify",
        username: "https://spotify.com/username",
        url: "https://spotify.com/username",
        archived: false,
      },
      {
        url: "https://github.com/username",
        provider: "GitHub",
        username: "username",
        archived: false,
      },
      {
        url: "https://facebook.com/username",
        provider: "Facebook",
        username: "username",
        archived: false,
      },
      {
        url: "https://twitter.com/username",
        provider: "Twitter",
        username: "username",
        archived: false,
      },
      {
        url: "https://youtube.com/username",
        provider: "Youtube",
        username: "username",
        archived: false,
      },
      {
        url: "https://website.com/username",
        provider: "Website",
        username: "username",
        archived: false,
      },
    ],
  },
  widgets: {
    spotify: {
      enabled: true,
      compactLayout: true,
      darkBackground: true,
      contentId: "6FED8aeieEnUWwQqAO9zT1",
      type: ContentType.Album,
    },
  },
};
