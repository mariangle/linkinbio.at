import { Settings, Link2 as Link, User, Palette, Puzzle } from "lucide-react";

export const navLinks = [
  {
    label: "Features",
    href: "/features",
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

export const biolinkLinks = [
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
    icon: Puzzle,
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
  ...biolinkLinks,
  ...biolinkCustomizationLinks,
];
