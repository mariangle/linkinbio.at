import type {
  BackgroundOptions,
  ButtonOptions,
  ContainerOptions,
  TitleOptions,
} from ".";
import type { Layout } from "@/components/biolink/layout";
import type { Font } from "@/constants/fonts";

export interface Configuration {
  layout: Layout;
  font: Font;
  darkText: boolean;
  background: BackgroundOptions;
  button: ButtonOptions;
  container: ContainerOptions;
  title: TitleOptions;
}
