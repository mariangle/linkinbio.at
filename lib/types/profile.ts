import type { Layout, Font } from ".";

export interface TitleOptions {
  font: Font;
  color: string;
}

export interface TextOptions {
  color: string;
  font: Font;
}

export interface ProfileOptions {
  title: TitleOptions;
  text: TextOptions;
  layout: Layout;
  hideUsername: boolean;
}
