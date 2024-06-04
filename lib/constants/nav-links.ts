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
    children: [
      {
        label: "Profile",
        href: "/dashboard/customize/profile",
      },
      {
        label: "Typography",
        href: "/dashboard/customize/typography",
      },
      {
        label: "Layout",
        href: "/dashboard/customize/layout",
      },
      {
        label: "Icons",
        href: "/dashboard/customize/icons",
      },
      {
        label: "Background",
        href: "/dashboard/customize/background",
      },
      {
        label: "Buttons",
        href: "/dashboard/customize/buttons",
      },
      {
        label: "VFX",
        href: "/dashboard/customize/vfx",
      },
      {
        label: "Widgets",
        href: "/dashboard/customize/widgets",
      },
    ],
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
