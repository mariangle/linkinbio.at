import { platforms } from "@/lib/constants/platforms";
import { IconType } from "react-icons/lib";

import { FaGlobe } from "react-icons/fa";
import { Font } from "@/lib/types";
import { fonts } from "@/lib/constants/fonts";

export function getFont(titleFont: string | null | undefined): Font {
  return fonts.find((f) => f.value === titleFont)?.value ?? Font.Inter;
}

export function getFontDisplay(titleFont: string | null | undefined) {
  return fonts.find((f) => f.value === titleFont)?.display ?? "inter";
}

export function getIconByProvider(provider: string): IconType {
  const foundProvider = platforms.find(
    (link) => link.name.toLowerCase() === provider.toLowerCase(),
  )?.icon;

  return foundProvider || FaGlobe;
}

export function getPlatformByProvider(provider: string) {
  const foundPlatform = platforms.find(
    (link) => link.name.toLowerCase() === provider.toLowerCase(),
  );

  return foundPlatform;
}
