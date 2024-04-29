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
    color: "#000000",
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
    opacity: 1,
    blur: 0,
    socialIconColor: false,
  },
  icon: {
    hidden: false,
    shadow: false,
    socialIconColor: false,
  },
};

export const defaultVisuals: EffectsOptions = {};

export const topIcon: TopIconOptions = {
  shadow: true,
  style: TopIconStyle.SocialBackgroundWhiteColor,
};

export const defaultBiolink: Config = {
  layout: Layout.Standard,
  font: Font.Inter,
  hideUsername: false,
  invertTextColor: false,
  background: defaultBackground,
  title: defaultTitle,
  button: defaultButton,
  effects: defaultVisuals,
  topIcon: topIcon,
};
