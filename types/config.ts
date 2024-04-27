import type {
  BackgroundOptions,
  ButtonOptions,
  TitleOptions,
  EffectsOptions,
  TopIconOptions,
  Layout,
  Font,
} from ".";

export interface Config {
  layout: Layout;
  font: Font;
  showTopIcons: boolean;
  hideUsername: boolean;
  invertTextColor: boolean;
  background: BackgroundOptions;
  button: ButtonOptions;
  topIcon: TopIconOptions;
  title: TitleOptions;
  effects: EffectsOptions;
}
