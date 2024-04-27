import {
  Settings,
  Link2 as Link,
  User,
  Palette,
  Sparkles,
  Layers3,
} from "lucide-react";

export const navLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Templates",
    href: "/templates",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export const dashboardLinks = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const profileLinks = [
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Links",
    href: "/dashboard/links",
    icon: Link,
  },
  {
    label: "Appearance",
    href: "/dashboard/appearance",
    icon: Palette,
  },
  {
    label: "Modules",
    href: "/dashboard/modules",
    icon: Layers3,
  },
];

export const settingsLinks = [
  {
    label: "Account",
    href: "/dashboard/settings/account",
  },
  {
    label: "Appearance",
    href: "/dashboard/settings/appearance",
  },
  {
    label: "Billing",
    href: "/dashboard/settings/billing",
  },
];

export const modulesLinks = [
  {
    label: "Spotify",
    href: "/dashboard/modules/spotify",
  },
  {
    label: "Discord",
    href: "/dashboard/modules/discord",
  },
  {
    label: "Twitch",
    href: "/dashboard/modules/twitch",
  },
  {
    label: "Twitter",
    href: "/dashboard/modules/twitter",
  },
  {
    label: "Youtube",
    href: "/dashboard/modules/youtube",
  },
  {
    label: "Soundcloud",
    href: "/dashboard/modules/soundcloud",
  },
  {
    label: "Instagram",
    href: "/dashboard/modules/instagram",
  },
];

export const biolinkCustomizationLinks = [
  {
    label: "Appearance",
    href: "/dashboard/appearance",
  },
  {
    label: "Layout",
    href: "/dashboard/appearance/layout",
  },
  {
    label: "Visual Effects",
    href: "/dashboard/appearance/visual-effects",
  },
];

export const routes = [
  ...dashboardLinks,
  ...profileLinks,
  ...biolinkCustomizationLinks,
  ...settingsLinks,
];
