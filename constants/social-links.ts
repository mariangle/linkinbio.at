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
  FaDribbble,
} from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in",
    color: "#0077B5",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    url: "https://discord.com/",
    color: "#7289DA",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    url: "https://www.facebook.com/",
    color: "#1877F2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/",
    color: "#171515",
  },
  {
    icon: FaReddit,
    label: "Reddit",
    url: "https://www.reddit.com/",
    color: "#FF5700",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "https://www.youtube.com/",
    color: "#FF0000",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    url: "https://www.tiktok.com/",
    color: "#000000",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    url: "https://twitter.com/",
    color: "#1DA1F2",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/",
    color: "#E4405F",
  },
  {
    icon: FaTwitch,
    label: "Twitch",
    url: "https://www.twitch.tv/",
    color: "#6441A4",
  },
  {
    icon: FaSnapchat,
    label: "Snapchat",
    url: "https://www.snapchat.com/",
    color: "#FFFC00",
  },
  {
    icon: FaStackOverflow,
    label: "Stack Overflow",
    url: "https://stackoverflow.com/",
    color: "#F48024",
  },
  {
    icon: FaSpotify,
    label: "Spotify",
    url: "https://www.spotify.com/",
    color: "#1DB954",
  },
  {
    icon: FaSoundcloud,
    label: "SoundCloud",
    url: "https://soundcloud.com/",
    color: "#FF5500",
  },
  {
    icon: FaDribbble,
    label: "Dribbble",
    url: "https://dribbble.com/",
    color: "#EA4C89",
  },
  {
    icon: BsFillThreadsFill,
    label: "Threads",
    url: "https://www.example.com/threads",
    color: "#000000",
  },
] as const;
