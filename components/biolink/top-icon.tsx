import React from "react";
import type { Link as LinkType, TopIconOptions } from "@/types";
import { socials } from "@/lib/constants/social-links";
import { getDomain, cn } from "@/lib/utils";
import { TopIconStyle } from "@/types";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { Social } from "@/lib/constants/social-links";

export function TopIcon({
  item,
  options,
  className,
  size,
  whiteText = true,
}: {
  item: Pick<LinkType, "title" | "url">;
  options: TopIconOptions;
  className?: string;
  size?: "sm" | "md" | "lg";
  whiteText?: boolean;
}) {
  const socialLink = socials.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const blackColor = "#000000";
  const whiteColor = "#FFFFFF";
  const defaultColor = whiteText ? whiteColor : blackColor;

  if (!socialLink) return null;

  if (options.style === TopIconStyle.SocialBackgroundWhiteColor) {
    return (
      <TopIconLink
        social={{
          name: socialLink.name,
          url: item.url,
        }}
      >
        <socialLink.icon
          style={{
            filter: options.shadow
              ? `drop-shadow(0 0 0.35rem ${socialLink.color})`
              : undefined,
            color: whiteColor,
            background: socialLink.gradientColors
              ? `linear-gradient(to right, ${socialLink.gradientColors.join(", ")})`
              : socialLink.color,
          }}
          className={cn("size-8 rounded-full p-2", className)}
        />
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.BlackBackgroundWhiteColor) {
    return (
      <TopIconLink
        social={{
          name: socialLink.name,
          url: item.url,
        }}
      >
        <socialLink.icon
          style={{
            filter: options.shadow
              ? `drop-shadow(0 0 0.35rem ${blackColor})`
              : undefined,
            color: whiteColor,
            backgroundColor: blackColor,
          }}
          className={cn("size-8 rounded-full p-2", className)}
        />
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.WhiteBackgroundBlackColor) {
    return (
      <TopIconLink
        social={{
          name: socialLink.name,
          url: item.url,
        }}
      >
        <socialLink.icon
          style={{
            filter: options.shadow
              ? `drop-shadow(0 0 0.35rem ${whiteColor})`
              : undefined,
            color: blackColor,
            backgroundColor: whiteColor,
          }}
          className={cn("size-8 rounded-full p-2", className)}
        />
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.WhiteBackgroundSocialColor) {
    return (
      <TopIconLink
        social={{
          name: socialLink.name,
          url: item.url,
        }}
      >
        <socialLink.icon
          style={{
            filter: options.shadow
              ? `drop-shadow(0 0 0.35rem ${whiteColor})`
              : undefined,
            color: socialLink.gradientColors
              ? `linear-gradient(to right, ${socialLink.gradientColors.join(", ")})`
              : socialLink.color,
            backgroundColor: whiteColor,
          }}
          className={cn(
            "size-8 rounded-full p-2",
            size === "sm" && "size-6 p-1",
            className,
          )}
        />
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.NoBackgroundSocialColor) {
    return (
      <TopIconLink
        social={{
          name: socialLink.name,
          url: item.url,
        }}
      >
        <socialLink.icon
          style={{
            filter: options.shadow
              ? `drop-shadow(0 0 0.35rem ${socialLink.color})`
              : undefined,
            color: socialLink.color,
          }}
          className={cn("size-6", className)}
        />
      </TopIconLink>
    );
  }

  return (
    <TopIconLink
      social={{
        name: socialLink.name,
        url: item.url,
      }}
    >
      <socialLink.icon
        style={{
          filter: options.shadow
            ? `drop-shadow(0 0 0.5rem ${defaultColor})`
            : undefined,
          color: defaultColor,
        }}
        className={cn(
          "size-6 rounded-full",
          className,
          size === "sm" && "size-5",
        )}
      />
    </TopIconLink>
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
    <Tooltip content={social.name}>
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
