import { FaLink, FaPencilRuler, FaCog, FaChartPie } from "react-icons/fa";

export const dashboardLinks = [
  {
    label: "Links",
    href: "/dashboard/links",
    icon: FaLink,
  },
  {
    label: "Customize",
    href: "/dashboard/customize/profile",
    icon: FaPencilRuler,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: FaChartPie,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: FaCog,
  },
];
