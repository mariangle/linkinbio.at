import { Cormorant_Garamond } from "next/font/google";

import localFont from "next/font/local";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const readex = localFont({ src: "../public/ReadexPro-Regular.ttf" });
