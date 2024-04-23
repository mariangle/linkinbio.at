import Link from "next/link";

import type { Link as LinkType } from "@/types";
import { socialLinks } from "@/constants/social-links";
import { hexToRgb, getDomain } from "@/lib/utils";
import type { ButtonOptions } from "@/types";
import { defaultButton } from "@/constants/default-options";
export function Button({
  item,
  config = defaultButton,
}: {
  item: Pick<LinkType, "title" | "url">;
  config?: ButtonOptions;
}) {
  const backgroundColorRgb = hexToRgb(config.background.color);

  const socialLink = socialLinks.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const socialIconRgb = hexToRgb(socialLink?.color ?? config.text.color);

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
      className="flex w-full items-center justify-center gap-3 whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 hover:brightness-90"
      style={{
        color: config.text.color,
        backgroundColor: config.background.socialIconColor
          ? `rgba(${socialIconRgb?.r}, ${socialIconRgb?.g}, ${socialIconRgb?.b}, ${config.background.opacity})`
          : `rgba(${backgroundColorRgb?.r}, ${backgroundColorRgb?.g}, ${backgroundColorRgb?.b}, ${config.background.opacity})`,
        borderRadius: config.border.radius,
        boxShadow: config.shadow.solid
          ? `4px 4px 0px 0px rgba(0, 0, 0, 0.5)`
          : `0 0 ${config.shadow.spreadRadius}px rgba(0, 0, 0, 1)`,
        backdropFilter:
          config.background.blur > 0
            ? `blur(${config.background.blur}px)`
            : undefined,
        border: `${config.border.width}px solid ${config.border.color}`,
      }}
    >
      {socialLink && !config.icon.hidden ? (
        <socialLink.icon
          style={{
            color: config.icon.socialIconColor
              ? socialLink.color
              : config.text.color,
            filter: `drop-shadow(0 0 0.5rem ${config.icon.socialIconColor ? socialLink.color : config.text.color})`,
          }}
          className="size-5"
        />
      ) : null}

      {!config?.text.hidden && <span>{item.title}</span>}
    </Link>
  );
}
