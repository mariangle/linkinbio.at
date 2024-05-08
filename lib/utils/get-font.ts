import { Font } from "@/lib/types";
import { fonts } from "@/lib/constants/fonts";

export function getFont(titleFont: string | null | undefined): Font {
  return fonts.find((f) => f.value === titleFont)?.value ?? Font.Inter;
}

export function getFontDisplay(titleFont: string | null | undefined) {
  return fonts.find((f) => f.value === titleFont)?.display ?? "inter";
}
