import {
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaSnapchat,
  FaStackOverflow,
  FaSpotify,
  FaSoundcloud,
  FaPinterest,
  FaDribbble,
  FaTumblr,
  FaSkype,
  FaQuora,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface Platform {
  icon: IconType;
  name: string;
  color: string;
  gradientColors?: string[];
  domain: string;
}

export const platforms: Platform[] = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    color: "#0077B5",
    domain: "linkedin.com/in",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    color: "#7289DA",
    domain: "discord.com",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    color: "#1877F2",
    domain: "facebook.com",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#171515",
    domain: "github.com",
  },
  {
    icon: FaReddit,
    name: "Reddit",
    color: "#FF5700",
    domain: "reddit.com",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    color: "#FF0000",
    domain: "youtube.com",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    color: "#000000",
    gradientColors: ["#69C9D0", "#F7E9F7"],
    domain: "tiktok.com",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    color: "#1DA1F2",
    domain: "twitter.com",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    color: "#E4405F",
    gradientColors: ["#F58529", "#DD2A7B", "#833AB4"],
    domain: "instagram.com",
  },
  {
    icon: FaTwitch,
    name: "Twitch",
    color: "#6441A4",
    domain: "twitch.tv",
  },
  {
    icon: FaSnapchat,
    name: "Snapchat",
    color: "#FFFC00",
    domain: "snapchat.com",
  },
  {
    icon: FaStackOverflow,
    name: "Stack Overflow",
    color: "#F48024",
    domain: "stackoverflow.com",
  },
  {
    icon: FaSpotify,
    name: "Spotify",
    color: "#1DB954",
    domain: "spotify.com",
  },
  {
    icon: FaSoundcloud,
    name: "SoundCloud",
    color: "#FF5500",
    domain: "soundcloud.com",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    color: "#EA4C89",
    domain: "dribbble.com",
  },
  {
    icon: FaTumblr,
    name: "Tumblr",
    color: "#1D3666",
    domain: "tumblr.com",
  },
  {
    icon: FaSkype,
    name: "Skype",
    color: "#00aff0",
    domain: "skype.com",
  },
  {
    icon: FaQuora,
    name: "Quora",
    color: "#B32A26",
    domain: "quora.com",
  },
  {
    icon: FaPinterest,
    name: "Pinterest",
    color: "#DF0019",
    domain: "pinterest.com",
  },
];
