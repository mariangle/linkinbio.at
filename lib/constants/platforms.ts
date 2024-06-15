import {
  FaLinkedinIn,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaTwitch,
  FaSnapchatGhost,
  FaStackOverflow,
  FaSpotify,
  FaSoundcloud,
  FaPinterest,
  FaDribbble,
  FaTumblr,
  FaQuora,
  FaGlobe,
  FaBitcoin,
  FaKickstarter,
} from "react-icons/fa";
import {
  SiRoblox,
  SiOnlyfans,
  SiLitecoin,
  SiRiotgames,
  SiX,
} from "react-icons/si";

import { IconType } from "react-icons/lib";

export interface Platform {
  icon: IconType;
  name: string;
  color: string;
  gradientColors?: string[];
  baseURL?: string;
  iconName: string;
}

export const platforms: Platform[] = [
  {
    icon: FaGlobe,
    name: "Website",
    color: "#000000",
    iconName: "FaGlobe",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    color: "#0077B5",
    baseURL: "linkedin.com/in/",
    iconName: "FaLinkedinIn",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    color: "#5865F2",
    baseURL: "discord.gg/",
    iconName: "FaDiscord",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    color: "#1877F2",
    baseURL: "facebook.com/",
    iconName: "FaFacebook",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#171515",
    baseURL: "github.com/",
    iconName: "FaGithub",
  },
  {
    icon: FaReddit,
    name: "Reddit",
    color: "#FF5700",
    baseURL: "reddit.com/",
    iconName: "FaReddit",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    color: "#FF0000",
    baseURL: "youtube.com/",
    iconName: "FaYoutube",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    color: "#000000",
    baseURL: "tiktok.com/@",
    iconName: "FaTiktok",
  },
  {
    icon: SiX,
    name: "X",
    color: "#1DA1F2",
    baseURL: "x.com/",
    iconName: "SiX",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    color: "#E4405F",
    gradientColors: ["#F58529", "#DD2A7B", "#833AB4"],
    baseURL: "instagram.com/",
    iconName: "FaInstagram",
  },
  {
    icon: FaTwitch,
    name: "Twitch",
    color: "#6441A4",
    baseURL: "twitch.tv/",
    iconName: "FaTwitch",
  },
  {
    icon: FaSnapchatGhost,
    name: "Snapchat",
    color: "#FFFC00",
    baseURL: "snapchat.com/add/",
    iconName: "FaSnapchatGhost",
  },
  {
    icon: FaStackOverflow,
    name: "Stack Overflow",
    color: "#F48024",
    baseURL: "stackoverflow.com/users/",
    iconName: "FaStackOverflow",
  },
  {
    icon: FaSpotify,
    name: "Spotify",
    color: "#1DB954",
    baseURL: "open.spotify.com/",
    iconName: "FaSpotify",
  },
  {
    icon: FaSoundcloud,
    name: "SoundCloud",
    color: "#FF5500",
    baseURL: "soundcloud.com/",
    iconName: "FaSoundcloud",
  },
  {
    icon: SiRoblox,
    name: "Roblox",
    color: "#FFFFFF",
    baseURL: "https://www.roblox.com/users/",
    iconName: "FaSoundcloud",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    color: "#EA4C89",
    baseURL: "dribbble.com/",
    iconName: "FaDribbble",
  },
  {
    icon: FaTumblr,
    name: "Tumblr",
    color: "#1D3666",
    baseURL: "tumblr.com/",
    iconName: "FaTumblr",
  },
  {
    icon: FaQuora,
    name: "Quora",
    color: "#B32A26",
    baseURL: "quora.com/profile/",
    iconName: "FaQuora",
  },
  {
    icon: FaPinterest,
    name: "Pinterest",
    color: "#DF0019",
    baseURL: "pinterest.com/",
    iconName: "FaPinterest",
  },
  {
    icon: FaBitcoin,
    name: "Bitcoin",
    color: "#F7931A",
    iconName: "FaBitcoin",
  },
  {
    icon: SiOnlyfans,
    name: "OnlyFans",
    color: "#F4D9D8",
    baseURL: "onlyfans.com/",
    iconName: "SiOnlyfans",
  },
  {
    icon: SiLitecoin,
    name: "Litecoin",
    color: "#2AB8EB",
    iconName: "SiLitecoin",
  },
  {
    icon: SiRiotgames,
    name: "Riot Games",
    color: "#D32936",
    iconName: "SiRiotgames",
  },
  {
    icon: FaKickstarter,
    name: "Kickstarter",
    color: "#2BDE73",
    baseURL: "kickstarter.com/profile/",
    iconName: "FaKickstarter",
  },
];

export const sortedPlatforms = platforms.sort((a, b) =>
  a.name > b.name ? 1 : -1,
);
