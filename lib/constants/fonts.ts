import {
  Dancing_Script,
  Inter,
  Oswald,
  Raleway,
  Playfair_Display,
  Merienda,
  Great_Vibes,
} from "next/font/google";
import localFont from "next/font/local";
import { Font as FontEnum } from "@/lib/types";

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

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const merienda = Merienda({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const fonts = [
  {
    name: "Inter",
    value: FontEnum.Inter,
    display: inter.className,
  },
  {
    name: "Readex",
    value: FontEnum.Readex,
    display: readex.className,
  },
  {
    name: "Roboto",
    value: FontEnum.Roboto,
    display: roboto.className,
  },
  {
    name: "Oswald",
    value: FontEnum.Oswald,
    display: oswald.className,
  },
  {
    name: "Raleway",
    value: FontEnum.Raleway,
    display: raleway.className,
  },
  {
    name: "Playfair Display",
    value: FontEnum.PlayfairDisplay,
    display: playfairDisplay.className,
  },
  {
    name: "Dancing Script",
    value: FontEnum.DancingScript,
    display: dancingScript.className,
  },
  {
    name: "Merienda",
    value: FontEnum.Merienda,
    display: merienda.className,
  },
  {
    name: "Great Vibes",
    value: FontEnum.GreatVibes,
    display: greatVibes.className,
  },
];
