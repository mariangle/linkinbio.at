import {
  Settings,
  Link2 as Link,
  User,
  Palette,
  GitBranch,
  Sparkles,
  Newspaper,
} from "lucide-react";

export const dashboardLinks = [
  {
    name: "Integrations",
    href: "/dashboard/integrations",
    icon: GitBranch,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const profileLinks = [
  {
    name: "Information",
    href: "/dashboard/information",
    icon: User,
  },
  {
    name: "Links",
    href: "/dashboard/links",
    icon: Link,
  },
  {
    name: "Appearance",
    href: "/dashboard/appearance",
    icon: Palette,
  },
  {
    name: "Feed",
    href: "/dashboard/feed",
    icon: Newspaper,
  },
];

export const biolinkCustomizationLinks = [
  {
    name: "Appearance",
    href: "/dashboard/appearance",
    icon: Palette,
  },
  {
    name: "Layout",
    href: "/dashboard/appearance/layout",
  },
  {
    name: "Visual Effects",
    href: "/dashboard/appearance/visual-effects",
    icon: Sparkles,
  },
];

export const routes = [
  ...dashboardLinks,
  ...profileLinks,
  ...biolinkCustomizationLinks,
];
