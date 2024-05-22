import type { IconStyle } from ".";

export type Position = "top" | "bottom";

export type Size = "small" | "medium" | "large";

export interface IconOptions {
  shadow?: boolean;
  style?: IconStyle;
  color?: string;
  position?: Position;
  size?: Size;
}
