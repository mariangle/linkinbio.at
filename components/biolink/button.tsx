import Link from "next/link";
import { hexToRgb, cn } from "@/lib/utils";

import type { WebsiteLink, PlatformLink } from "@/lib/types";
import type { ButtonOptions } from "@/lib/types";

import { getIconById, getIconByProvider } from "@/lib/utils/icon";
import { getPlatformByProvider } from "@/lib/utils/platform";

function getIcon(item: PlatformLink | WebsiteLink) {
  if ("provider" in item) {
    return {
      icon: getIconByProvider(item.provider),
      platformLink: getPlatformByProvider(item.provider),
      display: !item.isTopIcon,
    };
  } else {
    return {
      icon: getIconById(item.iconId),
      platformLink: null,
      display: true,
    };
  }
}

export function Button({
  item,
  config,
  size,
}: {
  item: WebsiteLink | PlatformLink;
  config: ButtonOptions;
  size?: "sm";
}) {
  const {
    icon: DisplayIcon,
    platformLink: socialLink,
    display,
  } = getIcon(item);

  if (item.archived) return null;

  if (!display) return null;

  const textColor = config.background.socialColor
    ? "#FFFFFF"
    : config.text.color;

  const backgroundColorRgb = hexToRgb(
    config.background.socialColor
      ? socialLink?.color ?? config.background.color
      : config.background.color,
  );

  const shadowColorRgb = hexToRgb(config.shadow.color);

  const gradientBackground =
    config.background.socialColor && socialLink?.gradientColors
      ? `linear-gradient(to right, ${socialLink?.gradientColors.join(", ")})`
      : undefined;

  const backgroundColor = backgroundColorRgb
    ? `rgba(${backgroundColorRgb.r}, ${backgroundColorRgb.g}, ${backgroundColorRgb.b}, ${config.background.opacity})`
    : gradientBackground;

  const backgroundImage = config.background.socialColor
    ? gradientBackground
    : undefined;

  const border = `${config.border.width}px solid ${config.border.color}`;

  const boxShadow = config.shadow.solid
    ? `${config.shadow.spreadRadius}px ${config.shadow.spreadRadius}px 0px 0px rgba(${shadowColorRgb?.r}, ${shadowColorRgb?.g}, ${shadowColorRgb?.b}, 1)`
    : config.shadow.spreadRadius > 0
      ? `4px 4px ${config.shadow.spreadRadius}px rgba(${shadowColorRgb?.r}, ${shadowColorRgb?.g}, ${shadowColorRgb?.b}, 1)`
      : undefined;

  const backdropFilter =
    config.background.blur > 0
      ? `blur(${config.background.blur}px)`
      : undefined;

  const iconColor = config.icon.socialColor
    ? socialLink?.color
    : config.text.color;

  const filter = config.icon.shadow
    ? `drop-shadow(0 0 0.5rem ${
        config.icon.socialColor ? socialLink?.color : config.text.color
      })`
    : undefined;

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
      className={cn(
        "flex w-full items-center justify-center gap-3 whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 hover:brightness-90",
        size === "sm" && "text-sm",
      )}
      style={{
        color: textColor,
        borderRadius: config.border.radius,
        border: border,
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
        boxShadow,
        backdropFilter,
      }}
    >
      {!config.icon.hidden && (
        <DisplayIcon
          style={{
            color: iconColor,
            filter: filter,
          }}
          className={cn("size-5", size === "sm" && "size-4")}
        />
      )}
      {!config.text.hidden && <span>{item.title}</span>}
    </Link>
  );
}
