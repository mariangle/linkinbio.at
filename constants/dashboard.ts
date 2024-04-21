import {
  Settings,
  Link as LinkIcon,
  User,
  Palette,
  GitBranch,
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

export const biolinkLinks = [
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Links",
    href: "/dashboard/profile/links",
    icon: LinkIcon,
  },
  {
    name: "Customization",
    href: "/dashboard/profile/customization",
    icon: Palette,
  },
];

export const biolinkCustomizationLinks = [
  {
    name: "Customization",
    href: "/dashboard/profile/customization",
    icon: Palette,
  },
  {
    name: "Layout",
    href: "/dashboard/profile/customization/layout",
  },
  {
    name: "Effects",
    href: "/dashboard/profile/customization/effects",
  },
  {
    name: "Animations",
    href: "/dashboard/profile/customization/animations",
  },
];

export const routes = [
  ...dashboardLinks,
  ...biolinkLinks,
  ...biolinkCustomizationLinks,
];
