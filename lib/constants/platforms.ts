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

export interface Social {
  icon: IconType;
  name: string;
  url: string; // TODO: Delete this once ive fully used domain
  color: string;
  gradientColors?: string[];
  domain: string;
}

export const platforms: Social[] = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in",
    color: "#0077B5",
    domain: "linkedin.com/in",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    url: "https://discord.com/",
    color: "#7289DA",
    domain: "discord.com",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/",
    color: "#1877F2",
    domain: "facebook.com",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/",
    color: "#171515",
    domain: "github.com",
  },
  {
    icon: FaReddit,
    name: "Reddit",
    url: "https://www.reddit.com/",
    color: "#FF5700",
    domain: "reddit.com",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    url: "https://www.youtube.com/",
    color: "#FF0000",
    domain: "youtube.com",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    url: "https://www.tiktok.com/",
    color: "#000000",
    gradientColors: ["#69C9D0", "#F7E9F7"],
    domain: "tiktok.com",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    url: "https://twitter.com/",
    color: "#1DA1F2",
    domain: "twitter.com",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/",
    color: "#E4405F",
    gradientColors: ["#F58529", "#DD2A7B", "#833AB4"],
    domain: "instagram.com",
  },
  {
    icon: FaTwitch,
    name: "Twitch",
    url: "https://www.twitch.tv/",
    color: "#6441A4",
    domain: "twitch.tv",
  },
  {
    icon: FaSnapchat,
    name: "Snapchat",
    url: "https://www.snapchat.com/",
    color: "#FFFC00",
    domain: "snapchat.com",
  },
  {
    icon: FaStackOverflow,
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    color: "#F48024",
    domain: "stackoverflow.com",
  },
  {
    icon: FaSpotify,
    name: "Spotify",
    url: "https://www.spotify.com/",
    color: "#1DB954",
    domain: "spotify.com",
  },
  {
    icon: FaSoundcloud,
    name: "SoundCloud",
    url: "https://soundcloud.com/",
    color: "#FF5500",
    domain: "soundcloud.com",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    url: "https://dribbble.com/",
    color: "#EA4C89",
    domain: "dribbble.com",
  },
  {
    icon: FaTumblr,
    name: "Tumblr",
    url: "https://www.tumblr.com",
    color: "#1D3666",
    domain: "tumblr.com",
  },
  {
    icon: FaSkype,
    name: "Skype",
    url: "https://skype.com",
    color: "#01A8ED", // ! Change this color
    domain: "skype.com",
  },
  {
    icon: FaQuora,
    name: "Quora",
    url: "https://quora.com",
    color: "#B32A26",
    domain: "quora.com",
  },
  {
    icon: FaPinterest,
    name: "Pinterest",
    url: "https://pinterest.com",
    color: "#DF0019",
    domain: "pinterest.com",
  },
];
