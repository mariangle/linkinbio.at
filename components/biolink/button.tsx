import Link from "next/link";

import type { Link as LinkType } from "@/lib/types";
import { socialLinks } from "@/constants/social-links";
import { hexToRgb, getDomain } from "@/lib/utils";
import type { ButtonOptions } from "@/types";

const defaultOptions: ButtonOptions = {
  shadow: 0,
  text: {
    color: "#FFFFFF",
  },
  border: {
    color: "#000000",
    radius: 0,
    width: 0,
  },
  background: {
    color: "#000000",
    opacity: 0.5,
    blur: 50,
  },
  options: {
    socialBackgroundColor: false,
    socialIconColor: false,
    hideIcon: false,
    hideText: false,
  },
};
export function Button({
  item,
  config = defaultOptions,
}: {
  item: Pick<LinkType, "title" | "url">;
  config?: ButtonOptions;
}) {
  const backgroundColorRgb = hexToRgb(config.background.color);

  const socialLink = socialLinks.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
      className="flex w-full items-center justify-center gap-3 whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 hover:brightness-90"
      style={{
        color: config.text.color,
        backgroundColor: config.options.socialBackgroundColor
          ? socialLink?.color
          : `rgba(${backgroundColorRgb?.r}, ${backgroundColorRgb?.g}, ${backgroundColorRgb?.b}, ${config.background.opacity})`,
        borderRadius: config.border.radius,
        boxShadow: `0 0 ${config.shadow}px rgba(0, 0, 0, 1)`,
        backdropFilter: `blur(${config.background.blur}px)`,
      }}
    >
      {socialLink && !config.options.hideIcon ? (
        <socialLink.icon
          style={{
            color: config.options.socialIconColor
              ? socialLink.color
              : config.text.color,
            filter: `drop-shadow(0 0 0.5rem ${config.options.socialIconColor ? socialLink?.color : config.text.color})`,
          }}
          className="size-5"
        />
      ) : null}
      {!config?.options.hideText && <span>{item.title}</span>}
    </Link>
  );
}
