import { IconStyle, Position } from "@/lib/types";

export const iconStyles = [
  {
    label: "Custom Background White Color",
    value: IconStyle.CustomBackgroundWhiteColor,
  },
  {
    label: "White Background Custom Color",
    value: IconStyle.WhiteBackgroundCustomColor,
  },
  {
    label: "Social Background White Color",
    value: IconStyle.SocialBackgroundWhiteColor,
  },
  {
    label: "No Background Social Color",
    value: IconStyle.NoBackgroundSocialColor,
  },
  {
    label: "Black Background White Color",
    value: IconStyle.BlackBackgroundWhiteColor,
  },
  {
    label: "White Background Black Color",
    value: IconStyle.WhiteBackgroundBlackColor,
  },
  {
    label: "White Background Social Color",
    value: IconStyle.WhiteBackgroundSocialColor,
  },
];

export const iconSizeOptions = [
  {
    label: "Small",
    value: "small",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Large",
    value: "large",
  },
];

export const iconPositionOptions: {
  label: string;
  value: Position;
}[] = [
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Bottom",
    value: "bottom",
  },
];

export type IconStyleOption = (typeof iconStyles)[number];
export type IconSizeOption = (typeof iconSizeOptions)[number];
