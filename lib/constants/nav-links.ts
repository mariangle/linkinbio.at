import {
  FaLink,
  FaUser,
  FaPencilRuler,
  FaChartBar,
  FaCog,
  FaChartPie,
} from "react-icons/fa";

export const dashboardLinks = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: FaCog,
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
    label: "Customize",
    href: "/dashboard/customize/typography",
    icon: FaPencilRuler,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: FaChartPie,
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
