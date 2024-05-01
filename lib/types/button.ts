export interface ButtonOptions {
  text: {
    color: string;
    hidden: boolean;
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
  icon: {
    hidden: boolean;
    shadow: boolean;
    socialColor: boolean;
  };
  customized?: boolean;
}
