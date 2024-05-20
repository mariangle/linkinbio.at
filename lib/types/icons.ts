import type { IconStyle } from ".";

export type Position = "top" | "bottom";

export interface IconOptions {
  shadow?: boolean;
  style?: IconStyle;
  color?: string;
  position?: Position;
}
