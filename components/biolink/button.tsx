import Link from "next/link";
import { socials } from "@/lib/constants/social-links";
import { hexToRgb, getDomain, cn } from "@/lib/utils";
import { icons } from "@/lib/constants/icons";

import type { Link as LinkType } from "@/lib/types";
import type { ButtonOptions } from "@/lib/types";
import { FaGlobe } from "react-icons/fa";

export function Button({
  item,
  config,
  display,
  className,
  size,
}: {
  item: Pick<LinkType, "title" | "url" | "iconId" | "isTopIcon">;
  config: ButtonOptions;
  display?: boolean;
  className?: string;
  size?: "sm";
}) {
  if (item.isTopIcon) {
    return null;
  }

  const socialLink = socials.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const icon = icons.find((icon) => icon.id === item.iconId);

  const textColor = config.background.socialColor
    ? "#FFFFFF"
    : config.text.color;

  const backgroundColorRgb = hexToRgb(
    config.background.socialColor
      ? socialLink?.color ?? config.background.color
      : config.background.color,
  );

  const gradientBackground =
    config.background.socialColor && socialLink?.gradientColors
      ? `linear-gradient(to right, ${socialLink?.gradientColors.join(", ")})`
      : undefined;

  const boxShadow = config.shadow.solid
    ? `4px 4px 0px 0px rgba(0, 0, 0, 0.5)`
    : config.shadow.spreadRadius > 0
      ? `4px 4px ${config.shadow.spreadRadius}px rgba(0, 0, 0, 1)`
      : undefined;

  const backdropFilter =
    config.background.blur > 0
      ? `blur(${config.background.blur}px)`
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
        border: `${config.border.width}px solid ${config.border.color}`,
        backgroundImage: config.background.socialColor
          ? gradientBackground
          : undefined,
        backgroundColor: backgroundColorRgb
          ? `rgba(${backgroundColorRgb.r}, ${backgroundColorRgb.g}, ${backgroundColorRgb.b}, ${config.background.opacity})`
          : gradientBackground,
        boxShadow,
        backdropFilter,
      }}
    >
      {!config.icon.hidden && (
        <>
          {socialLink ? (
            <socialLink.icon
              style={{
                color: config.icon.socialColor
                  ? socialLink.color
                  : config.text.color,
                filter: config.icon.shadow
                  ? `drop-shadow(0 0 0.5rem ${
                      config.icon.socialColor
                        ? socialLink.color
                        : config.text.color
                    })`
                  : undefined,
              }}
              className={cn("size-5", size === "sm" && "size-4")}
            />
          ) : icon ? (
            <icon.value
              style={{
                color: config.text.color,
                filter: config.icon.shadow
                  ? `drop-shadow(0 0 0.5rem ${config.text.color})`
                  : undefined,
              }}
              className={cn("size-5", size === "sm" && "size-4")}
            />
          ) : (
            <FaGlobe
              style={{
                color: config.text.color,
                filter: config.icon.shadow
                  ? `drop-shadow(0 0 0.5rem ${config.text.color})`
                  : undefined,
              }}
              className={cn("size-5", size === "sm" && "size-4")}
            />
          )}
        </>
      )}

      {!config.text.hidden && <span>{item.title}</span>}
    </Link>
  );
}
