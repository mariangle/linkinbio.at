import { IconType } from "react-icons/lib";

import { platforms } from "@/lib/constants/platforms";
import { icons } from "@/lib/constants/icons";
import { FaGlobe } from "react-icons/fa";

const DEFAULT_ICON = FaGlobe;

export function getIconByProvider(provider: string): IconType {
  const foundProvider = platforms.find(
    (link) => link.name.toLowerCase() === provider.toLowerCase(),
  )?.icon;

  return foundProvider || DEFAULT_ICON;
}

export function getIconById(iconId: number): IconType {
  const foundIcon = icons.find((icon) => icon.id === iconId)?.value;
  return foundIcon || DEFAULT_ICON;
}
