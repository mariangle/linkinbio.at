import { Font } from ".";

export interface ButtonOptions {
  text: {
    hidden: boolean;
  };
  font: {
    color: string;
    shadow: boolean;
    family: Font;
  };
  shadow: {
    solid: boolean;
    spreadRadius: number;
    color: string;
  };
  background: {
    color: string;
    opacity: number;
    blur: number;
    socialColor: boolean;
  };
  border: {
    radius: number;
    width: number;
    color: string;
  };
}
