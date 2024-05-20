"use client";

import { hexToRgb, cn } from "@/lib/utils";

import { FeaturedLink } from "@/components/biolink/featured-link";
import type { WebsiteLink, ButtonOptions } from "@/lib/types";
import { useTracking } from "@/hooks/use-tracking";
import { defaultButtonOptions } from "@/lib/constants/defaults";

import { ButtonImage } from "@/components/biolink/button-image";
import { CustomIcon } from "@/components/biolink/custom-icon";

export function Button({
  item,
  config = defaultButtonOptions,
  size,
}: {
  item: WebsiteLink;
  config?: ButtonOptions;
  size?: "sm";
}) {
  const { trackClick } = useTracking();

  if (item.archived) return null;

  if (item.featured)
    return (
      <FeaturedLink
        item={item}
        config={{
          borderRadius: config.border.radius,
        }}
      />
    );

  const textColor = config.font.color;

  // TODO - Add social link support

  const backgroundColorRgb = hexToRgb(
    config.background.socialColor!
      ? config.background.color!
      : config.background.color!,
  ); // Assert that the color is not null

  const shadowColorRgb = hexToRgb(config.shadow.color!);

  const gradientBackground = undefined; /*=
    config.background.socialColor && socialLink?.gradientColors
      ? `linear-gradient(to right, ${socialLink?.gradientColors.join(", ")})`
      : undefined;*/

  const backgroundColor = backgroundColorRgb
    ? `rgba(${backgroundColorRgb.r}, ${backgroundColorRgb.g}, ${backgroundColorRgb.b}, ${config.background.opacity})`
    : gradientBackground;

  const backgroundImage = config.background.socialColor
    ? gradientBackground
    : undefined;

  const border = `${config.border.width}px solid ${config.border.color}`;

  const boxShadow = config.shadow.solid
    ? `${config.shadow.spreadRadius}px ${config.shadow.spreadRadius}px 0px 0px rgba(${shadowColorRgb?.r}, ${shadowColorRgb?.g}, ${shadowColorRgb?.b}, 1)`
    : config.shadow.spreadRadius! > 0
      ? `4px 4px ${config.shadow.spreadRadius}px rgba(${shadowColorRgb?.r}, ${shadowColorRgb?.g}, ${shadowColorRgb?.b}, 1)`
      : undefined;

  const backdropFilter =
    config.background.blur! > 0
      ? `blur(${config.background.blur}px)`
      : undefined;

  const filter = config.font.shadow
    ? `drop-shadow(0 0 0.5rem ${config.font.color})`
    : undefined;

  const redirect = async () => {
    if (!item.id) return;

    window.open(item.url, "_blank");

    await trackClick(item.id, false);
  };

  return (
    <button
      onClick={redirect}
      className={cn(
        "relative flex min-h-[48px] w-full items-center justify-center gap-3 whitespace-nowrap px-16 py-3 font-medium transition-all duration-200 hover:brightness-90",
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
        WebkitBackdropFilter: backdropFilter,
      }}
    >
      {item.imageUrl ? (
        <ButtonImage
          url={item.imageUrl}
          options={{
            radius: config.border.radius,
          }}
        />
      ) : item.iconName ? (
        <CustomIcon
          name={item.iconName}
          options={{
            filter: filter,
            color: textColor,
          }}
        />
      ) : null}
      {!config.text.hidden && (
        <span
          style={{
            filter: filter,
            color: textColor,
          }}
        >
          {item.title}
        </span>
      )}
    </button>
  );
}
