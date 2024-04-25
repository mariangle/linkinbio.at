export interface ButtonOptions {
  text: {
    color: string;
    hidden: boolean;
  };
  shadow: {
    solid: boolean;
    spreadRadius: number;
  };
  background: {
    color: string;
    opacity: number;
    blur: number;
    socialIconColor: boolean;
  };
  border: {
    radius: number;
    width: number;
    color: string;
  };
  icon: {
    hidden: boolean;
    shadow: boolean;
    socialIconColor: boolean;
    dropShadow: boolean;
  };
}
