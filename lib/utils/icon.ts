import { IconType } from "react-icons/lib";

import { platforms } from "@/lib/constants/platforms";
import { FaGlobe } from "react-icons/fa";

const DEFAULT_ICON = FaGlobe;

export function getIconByProvider(provider: string): IconType {
  const foundProvider = platforms.find(
    (link) => link.name.toLowerCase() === provider.toLowerCase(),
  )?.icon;

  return foundProvider || DEFAULT_ICON;
}
