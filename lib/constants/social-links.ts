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
  url: string;
  color: string;
  gradientColors?: string[];
}

export const socials: Social[] = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in",
    color: "#0077B5",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    url: "https://discord.com/",
    color: "#7289DA",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/",
    color: "#1877F2",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/",
    color: "#171515",
  },
  {
    icon: FaReddit,
    name: "Reddit",
    url: "https://www.reddit.com/",
    color: "#FF5700",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    url: "https://www.youtube.com/",
    color: "#FF0000",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    url: "https://www.tiktok.com/",
    color: "#000000",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    url: "https://twitter.com/",
    color: "#1DA1F2",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/",
    color: "#E4405F",
    gradientColors: ["#F58529", "#DD2A7B", "#833AB4"],
  },
  {
    icon: FaTwitch,
    name: "Twitch",
    url: "https://www.twitch.tv/",
    color: "#6441A4",
  },
  {
    icon: FaSnapchat,
    name: "Snapchat",
    url: "https://www.snapchat.com/",
    color: "#FFFC00",
  },
  {
    icon: FaStackOverflow,
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    color: "#F48024",
  },
  {
    icon: FaSpotify,
    name: "Spotify",
    url: "https://www.spotify.com/",
    color: "#1DB954",
  },
  {
    icon: FaSoundcloud,
    name: "SoundCloud",
    url: "https://soundcloud.com/",
    color: "#FF5500",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    url: "https://dribbble.com/",
    color: "#EA4C89",
  },
  {
    icon: FaTumblr,
    name: "Tumblr",
    url: "https://www.tumblr.com",
    color: "#1D3666",
  },
  {
    icon: FaSkype,
    name: "Skype",
    url: "https://skype.com",
    color: "#01A8ED", // ! Change this color
  },
  {
    icon: FaQuora,
    name: "Quora",
    url: "https://quora.com",
    color: "#B32A26",
  },
  {
    icon: FaPinterest,
    name: "Pinterest",
    url: "https://pinterest.com",
    color: "#DF0019",
  },
] as const;
