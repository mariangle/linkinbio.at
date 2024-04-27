import Link from "next/link";
import { socials } from "@/constants/social-links";
import { hexToRgb, getDomain } from "@/lib/utils";
import { icons } from "@/constants/icons";

import type { Link as LinkType } from "@/types";
import type { ButtonOptions } from "@/types";
import { FaGlobe } from "react-icons/fa";

export function Button({
  item,
  config,
  display,
}: {
  item: Pick<LinkType, "title" | "url" | "iconId">;
  config: ButtonOptions;
  display?: boolean;
}) {
  const socialLink = socials.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const icon = icons.find((icon) => icon.id === item.iconId);

  const textColor = config.background.socialIconColor
    ? "#FFFFFF"
    : config.text.color;

  const backgroundColorRgb = hexToRgb(
    config.background.socialIconColor
      ? socialLink?.color ?? config.background.color
      : config.background.color,
  );

  const gradientBackground =
    config.background.socialIconColor && socialLink?.gradientColors
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
      className="flex h-12 w-full items-center justify-center gap-3 whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 hover:brightness-90"
      style={{
        color: textColor,
        borderRadius: config.border.radius,
        border: `${config.border.width}px solid ${config.border.color}`,
        backgroundImage: config.background.socialIconColor
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
                color: config.icon.socialIconColor
                  ? socialLink.color
                  : config.text.color,
                filter: config.icon.dropShadow
                  ? `drop-shadow(0 0 0.5rem ${
                      config.icon.socialIconColor
                        ? socialLink.color
                        : config.text.color
                    })`
                  : undefined,
              }}
              className="size-5"
            />
          ) : icon ? (
            <icon.value
              style={{
                color: config.text.color,
                filter: config.icon.dropShadow
                  ? `drop-shadow(0 0 0.5rem ${config.text.color})`
                  : undefined,
              }}
              className="size-5"
            />
          ) : (
            <FaGlobe
              style={{
                color: config.text.color,
                filter: config.icon.dropShadow
                  ? `drop-shadow(0 0 0.5rem ${config.text.color})`
                  : undefined,
              }}
              className="size-5"
            />
          )}
        </>
      )}

      {!config.text.hidden && <span>{item.title}</span>}
    </Link>
  );
}
