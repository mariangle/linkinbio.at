import type { Layout, Font } from ".";

export interface ProfileOptions {
  title: {
    font: Font;
    color: string;
  };
  layout: Layout;
  font: Font;
  hideUsername: boolean;
  invertTextColor: boolean;
  customized?: boolean;
}
