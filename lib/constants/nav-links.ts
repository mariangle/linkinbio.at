import {
  FaLink,
  FaPencilRuler,
  FaCog,
  FaChartPie,
  FaUser,
  FaFont,
  FaFacebook,
  FaFileImage,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";

import { PanelLeft, SparklesIcon } from "lucide-react";

export interface DashboardLink {
  label: string;
  href: string;
  icon: any;
  children?: SecondaryDashboardLink[];
}

export interface SecondaryDashboardLink {
  label: string;
  href: string;
  icon?: any;
}

export const dashboardLinks: DashboardLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FaChartPie,
  },
  {
    label: "Links",
    href: "/dashboard/links/platform",
    icon: FaLink,
    children: [
      {
        label: "Platform",
        href: "/dashboard/links/platform",
      },
      {
        label: "Website",
        href: "/dashboard/links/website",
      },
    ],
  },
  {
    label: "Customize",
    href: "/dashboard/customize/profile",
    icon: FaPencilRuler,
    children: [
      {
        label: "Profile",
        href: "/dashboard/customize/profile",
        icon: FaUser,
      },
      {
        label: "Typography",
        href: "/dashboard/customize/typography",
        icon: FaFont,
      },
      {
        label: "Layout",
        href: "/dashboard/customize/layout",
        icon: PanelLeft,
      },
      {
        label: "Icons",
        href: "/dashboard/customize/icons",
        icon: FaFacebook,
      },
      {
        label: "Background",
        href: "/dashboard/customize/background",
        icon: FaFileImage,
      },
      {
        label: "Buttons",
        href: "/dashboard/customize/buttons",
        icon: FaPalette,
      },
      {
        label: "VFX",
        href: "/dashboard/customize/vfx",
        icon: SparklesIcon,
      },
      {
        label: "Widgets",
        href: "/dashboard/customize/widgets",
        icon: FaLayerGroup,
      },
    ],
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: FaCog,
  },
];
