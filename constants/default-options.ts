// Default options for a biolink config

import type { Config } from "@/types";
import {
  BackgroundOptions,
  ButtonOptions,
  TopIconOptions,
  TitleOptions,
  EffectsOptions,
  TopIconStyle,
} from "@/types";
import { Layout, Font } from "@/types/enums";

export const defaultBackground: BackgroundOptions = {
  url: "",
  color: "#FFFFFF",
  gradient: {
    startColor: "#FFFFFF",
    endColor: "#FFFFFF",
    angle: 0,
  },
};

export const defaultTitle: TitleOptions = {
  font: "inter",
  color: "#FFFFFF",
};

export const defaultButton: ButtonOptions = {
  shadow: {
    solid: false,
    spreadRadius: 0,
  },
  text: {
    color: "#FFFFFF",
    hidden: false,
  },
  border: {
    color: "#000000",
    radius: 0,
    width: 0,
  },
  background: {
    color: "#000000",
    opacity: 0.5,
    blur: 50,
    socialIconColor: false,
  },
  icon: {
    hidden: false,
    shadow: false,
    socialIconColor: false,
    dropShadow: false,
  },
};

export const defaultVisuals: EffectsOptions = {};

export const topIcon: TopIconOptions = {
  dropShadow: true,
  style: TopIconStyle.SOCIAL_BACKGROUND,
};

export const defaultBiolink: Config = {
  layout: Layout.Standard,
  font: Font.Inter,
  showTopIcons: true,
  hideUsername: false,
  darkText: false,
  background: defaultBackground,
  title: defaultTitle,
  button: defaultButton,
  effects: defaultVisuals,
  topIcon: topIcon,
  container: {},
};
