"use client";

import React from "react";
import type { IconOptions } from "@/lib/types";
import { Platform } from "@/lib/constants/platforms";
import { cn } from "@/lib/utils";
import { IconStyle } from "@/lib/types";
import { Tooltip } from "@/components/ui/tooltip";
import { useTracking } from "@/hooks/use-tracking";
import { getIconByProvider } from "@/lib/utils/icon";
import { getPlatformByProvider } from "@/lib/utils/platform";

interface TopIconProps {
  item: {
    provider: string;
    url?: string;
    id?: string;
  };
  options?: IconOptions;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function TopIcon({
  item = {
    provider: "",
    url: "",
    id: "",
  },
  options = {
    shadow: false,
    color: "#FFFFFF",
  },
  size = "md",
}: TopIconProps) {
  const platform = getPlatformByProvider(item.provider);

  if (!platform) return null;

  const getDropShadow = (color: string) => {
    return options.shadow ? `drop-shadow(0 0 0.35rem ${color})` : undefined;
  };

  const getGradientColors = (platform: Platform) =>
    platform.gradientColors
      ? getLinearGradient(platform.gradientColors)
      : platform.color;

  const getBackground = (color: string) => {
    return platform ? getGradientColors(platform) : color;
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
    const shadowColor = platform ? platform.color : shadowOptions.color;
    const iconColor = platform ? platform.color : iconOptions.color;

    const filter = !shadowOptions.colorOnly
      ? getDropShadow(shadowColor)
      : getDropShadow(shadowOptions.color);

    const color = !iconOptions.colorOnly
      ? platform
        ? platform.color
        : iconColor
      : iconOptions.color;

    const DisplayIcon = getIconByProvider(item.provider);

    if (!backgroundOptions) {
      return (
        <TopIconLink
          link={{
            id: item.id,
            name: platform?.name!,
            url: item.url,
          }}
        >
          <DisplayIcon
            style={{
              filter,
              color,
            }}
            className={cn(
              "size-6",
              size === "sm" && "size-5",
              size === "lg" && "size-7",
            )}
          />
        </TopIconLink>
      );
    }

    const background = !backgroundOptions.colorOnly
      ? getBackground(platform ? platform.color : backgroundOptions.color)
      : backgroundOptions.color;

    return (
      <TopIconLink
        link={{
          id: item.id,
          name: platform?.name!,
          url: item.url,
        }}
      >
        <div
          className={cn(
            "grid size-8 place-content-center rounded-full",
            size === "sm" && "size-7",
            size === "lg" && "size-9",
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
            className={cn(
              "size-[18px]",
              size === "sm" && "size-4",
              size === "lg" && "size-5",
            )}
          />
        </div>
      </TopIconLink>
    );
  }

  if (options.style === IconStyle.SocialBackgroundWhiteColor) {
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

  if (options.style === IconStyle.BlackBackgroundWhiteColor) {
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

  if (options.style === IconStyle.WhiteBackgroundBlackColor) {
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

  if (options.style === IconStyle.WhiteBackgroundSocialColor) {
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

  if (options.style === IconStyle.NoBackgroundSocialColor) {
    return (
      <TopIconDisplay
        shadowOptions={{
          color: options.color ?? blackColor,
          colorOnly: false,
        }}
        iconOptions={{
          color: options.color ?? blackColor,
          colorOnly: false,
        }}
      />
    );
  }

  return (
    <TopIconDisplay
      shadowOptions={{
        color: options.color ?? whiteColor,
        colorOnly: true,
      }}
      iconOptions={{
        color: options.color ?? whiteColor,
        colorOnly: true,
      }}
    />
  );
}

export function TopIconLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: {
    id?: string;
    url?: string;
    name: string;
  };
}) {
  const { trackClick } = useTracking();

  const isPreview = !link.id || !link.url || !link.name;

  const redirect = async () => {
    if (isPreview) return;

    window.open(link.url, "_blank");

    await trackClick(link.id!, true);
  };

  return (
    <Tooltip content={link.name} smallWidth>
      <button
        onClick={redirect}
        className={cn(
          "group relative block w-fit",
          isPreview && "cursor-default",
        )}
      >
        {children}
      </button>
    </Tooltip>
  );
}
