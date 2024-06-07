import {
  Biolink,
  ContentType,
  Font,
  Layout,
  TitleEffect,
  IconStyle,
  WeatherEffect,
} from "@/lib/types";

const dummyPlatformlinks = [
  {
    provider: "Spotify",
    username: "username",
    url: "https://spotify.com/username",
  },
  {
    provider: "Twitter",
    username: "username",
    url: "https://twitter.com/username",
    archived: false,
  },
  {
    provider: "Youtube",
    username: "username",
    url: "https://youtube.com/username",
    archived: false,
  },
];

const dummyWebsitelinks = [
  {
    title: "Get in touch",
    url: "https://mariangle.com",
    iconName: "FaEnvelope",
  },
  {
    title: "Let's grab a coffee",
    url: "https://mariangle.com",
    iconName: "FaCoffee",
  },
  {
    title: "Donate to my cause",
    url: "https://mariangle.com",
    iconName: "FaHeart",
  },
];

export const dummyBiolinks: Biolink[] = [
  {
    user: {
      id: "1",
      username: "peterdoe",
      email: "",
      title: "Peter",
      image:
        "https://pagesix.com/wp-content/uploads/sites/3/2024/05/billieeilish_1712588407_3341756226905924105_28527810.jpg",
      occupation: "Google",
      location: "Denmark",
      premium: true,
    },
    config: {
      profile: {
        title: {
          font: Font.Inter,
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
          spreadRadius: 25,
          color: "#000000",
        },
        text: {
          hidden: false,
        },
        font: {
          family: Font.Inter,
          color: "#ffffff",
          shadow: false,
        },
        border: {
          color: "#000000",
          radius: 25,
          width: 0,
        },
        background: {
          color: "#004794",
          opacity: 0.25,
          blur: 50,
          socialColor: true,
        },
      },
      background: {
        color: "#000000",
        url: "https://media1.giphy.com/media/3oriNZuNzeTbtJvKs8/200w.gif?cid=6c09b952bjf0lcef7akunmreo9igmq4tkwm7sz6qq0fnqz2y&ep=v1_gifs_search&rid=200w.gif&ct=g",
        gradient: {
          startColor: "#000000",
          endColor: "#000000",
          angle: 0,
          enabled: false,
        },
      },
      icons: {
        shadow: true,
        style: IconStyle.CustomBackgroundWhiteColor,
        color: "#001731",
        position: "bottom",
      },
      effects: {
        weather: WeatherEffect.Rain,
      },
    },
    links: {
      website: [
        {
          title: "Spotify",
          url: "https://spotify.com/username",
        },
        {
          title: "Youtube",
          url: "https://youtube.com/username",
        },
        {
          title: "Tiktok",
          url: "https://tiktok.com/username",
        },
        {
          title: "Website",
          url: "https://mariangle.com",
          iconName: "FaGlobe",
        },
      ],
      platform: [],
    },
    widgets: {},
  },
  {
    user: {
      id: "2",
      username: "oliverdoe",
      email: "",
      title: "OLIVER",
      image:
        "https://t4.ftcdn.net/jpg/05/91/73/91/360_F_591739168_JjLY7nji77hvf094509GOU1Yc3ATIXMe.jpg",
      bio: "Designer and Creative Director",
      premium: true,
    },
    config: {
      profile: {
        title: {
          font: Font.Raleway,
          color: "#FEBB4E",
        },
        text: {
          color: "#FFFFFF",
          font: Font.Roboto,
        },
        layout: Layout.WithCover,
        hideUsername: true,
      },
      buttons: {
        shadow: {
          solid: false,
          spreadRadius: 0,
          color: "#000000",
        },
        text: {
          hidden: false,
        },
        font: {
          family: Font.Raleway,
          color: "#FEBB4E",
          shadow: false,
        },
        border: {
          color: "#000000",
          radius: 5,
          width: 0,
        },
        background: {
          color: "#FFFFFF",
          opacity: 0.25,
          blur: 50,
          socialColor: false,
        },
      },
      background: {
        color: "#12012E",
        url: "https://img.freepik.com/premium-photo/luxury-elegant-gold-background-abstract-design-elegance_1030736-3092.jpg",
        gradient: {
          angle: 0,
          enabled: false,
        },
      },
      icons: {
        shadow: false,
        style: IconStyle.WhiteBackgroundCustomColor,
        color: "#FEBB4E",
      },
      effects: {
        title: TitleEffect.Sparkles,
      },
    },
    links: {
      website: dummyWebsitelinks,
      platform: dummyPlatformlinks,
    },
    widgets: {},
  },
  {
    user: {
      id: "4",
      username: "johndoe",
      email: "",
      title: "John",
      occupation: "Developer",
      location: "Denmark",
      image:
        "https://img.freepik.com/premium-photo/happy-stick-figure-drawing-white-background-illustration-image-ai-generated-art_848903-6762.jpg",
      bio: "typescript, next.js, tailwindcss",
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
        layout: Layout.Glassmorphism,
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
        color: "#FFC0CB",
        url: "https://img.freepik.com/free-vector/abstract-3d-perspective-indoor-wireframe-vector-design_1017-39916.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716336000&semt=ais_user",
        gradient: {
          angle: 0,
          enabled: false,
        },
      },
      icons: {
        shadow: true,
        color: "#FFFFFF",
        style: IconStyle.NoBackgroundSocialColor,
        size: "small",
      },
      effects: {
        title: TitleEffect.Typewriter,
        weather: WeatherEffect.Thunder,
      },
    },
    links: {
      website: [],
      platform: dummyPlatformlinks,
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
  },
  {
    user: {
      id: "5",
      username: "juliedoe",
      email: "",
      title: "Julie Doe",
      image:
        "https://yt3.googleusercontent.com/gNL3HdMcYAtyjFFcjWJk5KIf0eeAxLOsIfWFMMtShmK3PYZA4Etsye0qwHKz3WFETkUzvGeKyw=s900-c-k-c0x00ffffff-no-rj",
      premium: true,
    },
    config: {
      profile: {
        title: {
          font: Font.PlayfairDisplay,
          color: "#4C3222",
        },
        text: {
          color: "#4C3222",
          font: Font.Roboto,
        },
        layout: Layout.Bold,
        hideUsername: false,
      },
      buttons: {
        shadow: {
          solid: true,
          spreadRadius: 5,
          color: "#4C3222",
        },
        text: {
          hidden: true,
        },
        font: {
          family: Font.PlayfairDisplay,
          color: "#4C3222",
          shadow: false,
        },
        border: {
          color: "#4C3222",
          radius: 0,
          width: 2,
        },
        background: {
          color: "#000000",
          opacity: 0,
          blur: 50,
          socialColor: true,
        },
      },
      background: {
        color: "#EDDDC1",
        gradient: {
          startColor: "#F5EDCE",
          endColor: "#CDD2BE",
          angle: 45,
          enabled: true,
        },
      },
      icons: {
        shadow: true,
        color: "4C3222",
      },
      effects: {
        title: TitleEffect.CherryBlossoms,
      },
    },
    links: {
      website: [
        {
          title: "Get in touch",
          url: "https://mariangle.com",
          iconName: "FaEnvelope",
        },
        {
          title: "Let's grab a coffee",
          url: "https://mariangle.com",
          iconName: "FaCoffee",
        },
        {
          title: "Donate to my cause",
          url: "https://mariangle.com",
          iconName: "FaHeart",
        },
      ],
      platform: dummyPlatformlinks,
    },
    widgets: {},
  },
];
