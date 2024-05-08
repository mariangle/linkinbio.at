"use client";

import React from "react";
import type { PlatformLink, TopIconOptions } from "@/lib/types";
import { Social, platforms } from "@/lib/constants/platforms";
import { cn, getDomain } from "@/lib/utils";
import { TopIconStyle } from "@/lib/types";
import { Tooltip } from "@/components/ui/tooltip";
import { useTracking } from "@/hooks/use-tracking";
import { getIconByProvider } from "@/lib/utils/icon";

export function TopIcon({
  item,
  options,
  size,
}: {
  item: Pick<PlatformLink, "isTopIcon" | "provider" | "url" | "id" | "title">;
  options: TopIconOptions;
  className?: string;
  size?: "sm";
}) {
  if (!item?.isTopIcon) return null;

  const socialLink = platforms.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const getDropShadow = (color: string) => {
    return options.shadow ? `drop-shadow(0 0 0.35rem ${color})` : undefined;
  };

  const getGradientColors = (socialLink: Social) =>
    socialLink.gradientColors
      ? getLinearGradient(socialLink.gradientColors)
      : socialLink.color;

  const getBackground = (color: string) => {
    return socialLink ? getGradientColors(socialLink) : color;
  };

  const getLinearGradient = (colors: string[]) => {
    return `linear-gradient(to right, ${colors.join(", ")})`;
  };

  const blackColor = "#000000";
  const whiteColor = "#FFFFFF";

  function TopIconDisplay({
    shadowOptions,
    backgroundOptions,
    iconOptions,
  }: {
    className?: string;
    shadowOptions: {
      color: string;
      colorOnly: boolean;
    };
    backgroundOptions?: {
      color: string;
      colorOnly: boolean;
    };
    iconOptions: {
      color: string;
      colorOnly: boolean;
    };
  }) {
    const shadowColor = socialLink ? socialLink.color : shadowOptions.color;
    const iconColor = socialLink ? socialLink.color : iconOptions.color;

    const filter = !shadowOptions.colorOnly
      ? getDropShadow(shadowColor)
      : getDropShadow(shadowOptions.color);

    const color = !iconOptions.colorOnly
      ? socialLink
        ? socialLink.color
        : iconColor
      : iconOptions.color;

    const DisplayIcon = getIconByProvider(item.provider);

    if (!backgroundOptions) {
      return (
        <TopIconLink
          social={{
            id: item.id,
            name: socialLink?.name || item.title,
            url: item.url,
          }}
        >
          <DisplayIcon
            style={{
              filter,
              color,
            }}
            className={cn("size-6", size === "sm" && "size-5")}
          />
        </TopIconLink>
      );
    }

    const background = !backgroundOptions.colorOnly
      ? getBackground(socialLink ? socialLink.color : backgroundOptions.color)
      : backgroundOptions.color;

    return (
      <TopIconLink
        social={{
          id: item.id,
          name: socialLink?.name || item.title,
          url: item.url,
        }}
      >
        <div
          className={cn(
            "grid size-8 place-content-center rounded-full",
            size === "sm" && "size-7",
          )}
          style={{
            filter,
            background,
          }}
        >
          <DisplayIcon
            style={{
              color,
            }}
            className={cn("size-[18px]", size === "sm" && "size-4")}
          />
        </div>
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.SocialBackgroundWhiteColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: blackColor,
          colorOnly: false,
        }}
        backgroundOptions={{
          color: blackColor,
          colorOnly: false,
        }}
        iconOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
      />
    );
  }

  if (options.style === TopIconStyle.BlackBackgroundWhiteColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: blackColor,
          colorOnly: true,
        }}
        backgroundOptions={{
          color: blackColor,
          colorOnly: true,
        }}
        iconOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
      />
    );
  }

  if (options.style === TopIconStyle.WhiteBackgroundBlackColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
        backgroundOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
        iconOptions={{
          color: blackColor,
          colorOnly: true,
        }}
      />
    );
  }

  if (options.style === TopIconStyle.WhiteBackgroundSocialColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
        backgroundOptions={{
          color: whiteColor,
          colorOnly: true,
        }}
        iconOptions={{
          color: blackColor,
          colorOnly: false,
        }}
      />
    );
  }

  if (options.style === TopIconStyle.NoBackgroundSocialColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: options.color,
          colorOnly: false,
        }}
        iconOptions={{
          color: options.color,
          colorOnly: false,
        }}
      />
    );
  }

  return (
    <TopIconDisplay
      shadowOptions={{
        color: options.color,
        colorOnly: true,
      }}
      iconOptions={{
        color: options.color,
        colorOnly: true,
      }}
    />
  );
}

export function TopIconLink({
  children,
  social,
}: {
  children: React.ReactNode;
  social: {
    id?: string;
    url: string;
    name: string;
  };
}) {
  const { trackClick } = useTracking();

  const redirect = async () => {
    window.open(social.url, "_blank");

    if (!social.id) return;

    await trackClick(social.id, true);
  };

  return (
    <Tooltip content={social.name} smallWidth>
      <button onClick={redirect} className="group relative block w-fit">
        {children}
      </button>
    </Tooltip>
  );
}
