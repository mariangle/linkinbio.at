export enum TopIconStyle {
  SOCIAL_BACKGROUND = "social-background",
  BLACK_BACKGROUND = "black-background",
  WHITE_BACKGROUND = "white-background",
  SOCIAL_ICON_COLOR = "social-icon-color",
  WHITE_BACKGROUND_SOCIAL_COLOR = "white-background-social-color",
}

export interface TopIconOptions {
  dropShadow: boolean;
  style: TopIconStyle;
}
