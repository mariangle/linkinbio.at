import type {
  BackgroundOptions,
  ButtonOptions,
  ContainerOptions,
  TitleOptions,
  EffectsOptions,
  TopIconOptions,
} from ".";
import type { Layout, Font } from "@/types/enums";

export interface Config {
  layout: Layout;
  font: Font;
  showTopIcons: boolean;
  darkText: boolean;
  background: BackgroundOptions;
  button: ButtonOptions;
  container: ContainerOptions;
  topIcon: TopIconOptions;
  title: TitleOptions;
  effects: EffectsOptions;
}
