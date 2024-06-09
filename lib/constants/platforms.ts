import {
  FaLinkedinIn,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaSnapchatGhost,
  FaStackOverflow,
  FaSpotify,
  FaSoundcloud,
  FaPinterest,
  FaDribbble,
  FaTumblr,
  FaSkype,
  FaQuora,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface Platform {
  icon: IconType;
  name: string;
  color: string;
  gradientColors?: string[];
  domain: string;
  iconName: string;
}

export const platforms: Platform[] = [
  {
    icon: FaGlobe,
    name: "Website",
    color: "#FFFFFF",
    domain: "",
    iconName: "FaGlobe",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    color: "#0077B5",
    domain: "linkedin.com/in",
    iconName: "FaLinkedinIn",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    color: "#5865F2",
    domain: "discord.com",
    iconName: "FaDiscord",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    color: "#1877F2",
    domain: "facebook.com",
    iconName: "FaFacebook",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#171515",
    domain: "github.com",
    iconName: "FaGithub",
  },
  {
    icon: FaReddit,
    name: "Reddit",
    color: "#FF5700",
    domain: "reddit.com",
    iconName: "FaReddit",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    color: "#FF0000",
    domain: "youtube.com",
    iconName: "FaYoutube",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    color: "#000000",
    domain: "tiktok.com",
    iconName: "FaTiktok",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    color: "#1DA1F2",
    domain: "twitter.com",
    iconName: "FaTwitter",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    color: "#E4405F",
    gradientColors: ["#F58529", "#DD2A7B", "#833AB4"],
    domain: "instagram.com",
    iconName: "FaInstagram",
  },
  {
    icon: FaTwitch,
    name: "Twitch",
    color: "#6441A4",
    domain: "twitch.tv",
    iconName: "FaTwitch",
  },
  {
    icon: FaSnapchatGhost,
    name: "Snapchat",
    color: "#FFFC00",
    domain: "snapchat.com",
    iconName: "FaSnapchatGhost",
  },
  {
    icon: FaStackOverflow,
    name: "Stack Overflow",
    color: "#F48024",
    domain: "stackoverflow.com",
    iconName: "FaStackOverflow",
  },
  {
    icon: FaSpotify,
    name: "Spotify",
    color: "#1DB954",
    domain: "spotify.com",
    iconName: "FaSpotify",
  },
  {
    icon: FaSoundcloud,
    name: "SoundCloud",
    color: "#FF5500",
    domain: "soundcloud.com",
    iconName: "FaSoundcloud",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    color: "#EA4C89",
    domain: "dribbble.com",
    iconName: "FaDribbble",
  },
  {
    icon: FaTumblr,
    name: "Tumblr",
    color: "#1D3666",
    domain: "tumblr.com",
    iconName: "FaTumblr",
  },
  {
    icon: FaSkype,
    name: "Skype",
    color: "#00aff0",
    domain: "skype.com",
    iconName: "FaSkype",
  },
  {
    icon: FaQuora,
    name: "Quora",
    color: "#B32A26",
    domain: "quora.com",
    iconName: "FaQuora",
  },
  {
    icon: FaPinterest,
    name: "Pinterest",
    color: "#DF0019",
    domain: "pinterest.com",
    iconName: "FaPinterest",
  },
];

export const sortedPlatforms = platforms.sort((a, b) =>
  a.name > b.name ? 1 : -1,
);
