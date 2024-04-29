import { Dancing_Script, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const readex = localFont({
  src: "../../public/fonts/ReadexPro-Regular.ttf",
});
export const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.ttf",
});
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const fonts = [
  {
    name: "Inter",
    value: "inter",
    display: inter.className,
  },
  {
    name: "Readex",
    value: "readex",
    display: readex.className,
  },
  {
    name: "Roboto",
    value: "roboto",
    display: roboto.className,
  },
  {
    name: "Dancing Script",
    value: "dancing-script",
    display: dancingScript.className,
  },
];
