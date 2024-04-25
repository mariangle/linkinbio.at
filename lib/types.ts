import { IconType } from "react-icons/lib";

export interface Social {
  icon: IconType;
  name: string;
  url: string;
  color: string;
  gradientColors?: string[];
}
