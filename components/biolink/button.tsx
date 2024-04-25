import Link from "next/link";
import { socials } from "@/constants/social-links";
import { hexToRgb, getDomain } from "@/lib/utils";
import { defaultButton } from "@/constants/default-options";

import type { Link as LinkType } from "@/types";
import type { ButtonOptions } from "@/types";

export function Button({
  item,
  config = defaultButton,
}: {
  item: Pick<LinkType, "title" | "url">;
  config?: ButtonOptions;
}) {
  const socialLink = socials.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

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
    : `0 0 ${config.shadow.spreadRadius}px rgba(0, 0, 0, 1)`;

  const backdropFilter =
    config.background.blur > 0
      ? `blur(${config.background.blur}px)`
      : undefined;

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
      className="flex w-full items-center justify-center gap-3 whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 hover:brightness-90"
      style={{
        color: textColor,
        borderRadius: config.border.radius,
        border: `${config.border.width}px solid ${config.border.color}`,
        backgroundColor: `rgba(${backgroundColorRgb?.r}, ${backgroundColorRgb?.g}, ${backgroundColorRgb?.b}, ${config.background.opacity})`,
        background: gradientBackground,
        boxShadow,
        backdropFilter,
      }}
    >
      {socialLink && !config.icon.hidden ? (
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
      ) : null}

      {!config.text.hidden && <span>{item.title}</span>}
    </Link>
  );
}
