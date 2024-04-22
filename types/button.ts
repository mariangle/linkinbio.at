export interface ButtonOptions {
  shadow: number;
  text: {
    color: string;
  };
  background: {
    color: string;
    opacity: number;
    blur: number;
  };
  border: {
    radius: number;
    width: number;
    color: string;
  };
  options: {
    socialBackgroundColor: boolean;
    socialIconColor: boolean;
    hideIcon: boolean;
    hideText: boolean;
  };
}
