import {
  Settings,
  Link2 as Link,
  User,
  Palette,
  GitBranch,
  Sparkles,
  Newspaper,
  SquarePen,
} from "lucide-react";

export const navLinks = [
  {
    label: "Features",
    path: "/features",
  },
  {
    label: "Templates",
    path: "/templates",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
];

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
    name: "Posts",
    href: "/dashboard/posts",
    icon: SquarePen,
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
