import { Settings, LineChart } from "lucide-react";
import { FaLink, FaPalette, FaLayerGroup, FaUser } from "react-icons/fa";

export const navLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const dashboardLinks = [
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: LineChart,
  },
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
    icon: FaUser,
  },
  {
    label: "Links",
    href: "/dashboard/links",
    icon: FaLink,
  },
  {
    label: "Appearance",
    href: "/dashboard/appearance",
    icon: FaPalette,
  },
  {
    label: "Modules",
    href: "/dashboard/modules",
    icon: FaLayerGroup,
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
    label: "Effects",
    href: "/dashboard/appearance/effects",
  },
];

export const routes = [
  ...dashboardLinks,
  ...biolinkLinks,
  ...biolinkCustomizationLinks,
];
