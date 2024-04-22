import { Dancing_Script, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const readex = localFont({ src: "../public/ReadexPro-Regular.ttf" });
export const roboto = localFont({ src: "../public/Roboto-Regular.ttf" });
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
