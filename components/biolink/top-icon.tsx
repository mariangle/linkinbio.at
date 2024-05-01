import React from "react";
import type { Link as LinkType, TopIconOptions } from "@/lib/types";
import { Social, socials } from "@/lib/constants/social-links";
import { getDomain } from "@/lib/utils";
import { TopIconStyle } from "@/lib/types";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { icons } from "@/lib/constants/icons";
import { FaGlobe } from "react-icons/fa";

export function TopIcon({
  item,
  options,
  whiteText = true,
}: {
  item: LinkType;
  options: TopIconOptions;
  className?: string;
  whiteText?: boolean;
}) {
  if (!item.isTopIcon) return null;

  const socialLink = socials.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const blackColor = "#000000";
  const whiteColor = "#FFFFFF";
  const defaultColor = whiteText ? whiteColor : blackColor;
  const icon = icons.find((icon) => icon.id === item.iconId);

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
    const DisplayIcon = socialLink
      ? socialLink.icon
      : item.iconId && icon
        ? icon.value
        : FaGlobe;

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

    if (!backgroundOptions) {
      return (
        <TopIconLink
          social={{
            name: socialLink?.name || item.title,
            url: item.url,
          }}
        >
          <DisplayIcon
            style={{
              filter,
              color,
            }}
            className="size-6"
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
          name: socialLink?.name || item.title,
          url: item.url,
        }}
      >
        <div
          className="grid size-8 place-content-center rounded-full"
          style={{
            filter,
            background,
          }}
        >
          <DisplayIcon
            style={{
              color,
            }}
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
          color: defaultColor,
          colorOnly: false,
        }}
        iconOptions={{
          color: defaultColor,
          colorOnly: false,
        }}
      />
    );
  }

  return (
    <TopIconDisplay
      shadowOptions={{
        color: defaultColor,
        colorOnly: true,
      }}
      iconOptions={{
        color: defaultColor,
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
    url: string;
    name: string;
  };
}) {
  return (
    <Tooltip content={social.name} smallWidth>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={social.url}
        className="group relative block"
      >
        {children}
      </Link>
    </Tooltip>
  );
}
