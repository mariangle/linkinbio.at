import {
  Settings,
  Link as LinkIcon,
  User,
  Palette,
  GitBranch,
} from "lucide-react";

export const dashboardLinks = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const biolinkLinks = [
  {
    name: "Information",
    href: "/dashboard/profile/information",
    icon: User,
  },
  {
    name: "Links",
    href: "/dashboard/profile/links",
    icon: LinkIcon,
  },
  {
    name: "Appearance",
    href: "/dashboard/profile/appearance",
    icon: Palette,
  },
  {
    name: "Integrations",
    href: "/dashboard/profile/integrations",
    icon: GitBranch,
  },
];

export const biolinkCustomizationLinks = [
  {
    name: "Appearance",
    href: "/dashboard/profile/appearance",
    icon: Palette,
  },
  {
    name: "Layout",
    href: "/dashboard/profile/appearance/layout",
  },
  {
    name: "Effects",
    href: "/dashboard/profile/appearance/effects",
  },
  {
    name: "Animations",
    href: "/dashboard/profile/appearance/animations",
  },
];

export const routes = [
  ...dashboardLinks,
  ...biolinkLinks,
  ...biolinkCustomizationLinks,
];
