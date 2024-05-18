import {
  Biolink,
  ContentType,
  Font,
  Layout,
  TitleEffect,
  IconStyle,
  WeatherEffect,
} from "@/lib/types";

export const dummyUser: Biolink = {
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
    buttons: {
      shadow: {
        solid: false,
        spreadRadius: 5,
        color: "#000000",
      },
      text: {
        color: "#ffffff",
        hidden: false,
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
      icon: {
        hidden: false,
        shadow: true,
        socialColor: false,
      },
      customized: true,
    },
    background: {
      customized: true,
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
