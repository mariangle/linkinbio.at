import {
  TextOptions,
  Font,
  BackgroundOptions,
  ProfileOptions,
  Layout,
  EffectsOptions,
  IconOptions,
  ButtonOptions,
} from "@/lib/types";

export const defaultTextOptions: TextOptions = {
  color: "#FFFFFF",
  font: Font.Inter,
};

export const defaultBackgroundOptions: BackgroundOptions = {
  color: "#000000",
  gradient: {
    angle: 0,
  },
};

export const defaultProfileOptions: ProfileOptions = {
  title: defaultTextOptions,
  text: defaultTextOptions,
  layout: Layout.Standard,
  hideUsername: true,
};

export const defaultIconsOptions: IconOptions = {
  color: "#FFFFFF",
  position: "top",
  size: "medium",
};

export const defaultEffectsOptions: EffectsOptions = {};

export const defaultButtonOptions: ButtonOptions = {
  text: {
    hidden: false,
  },
  font: {
    family: Font.Inter,
    color: "#000000",
    shadow: false,
  },
  background: {
    color: "#FFFFFF",
    socialColor: false,
    opacity: 1,
    blur: 0,
  },
  border: {
    width: 0,
    color: "#000000",
    radius: 0,
  },
  shadow: {
    solid: false,
    spreadRadius: 0,
    color: "#000000",
  },
};
