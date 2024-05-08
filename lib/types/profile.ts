import type { Layout, Font } from ".";

export interface ProfileOptions {
  title: {
    font: Font;
    color: string;
  };
  text: TextOptions;
  layout: Layout;
  hideUsername: boolean;
  customized?: boolean;
}

export interface TextOptions {
  color: string;
  font: Font;
}
