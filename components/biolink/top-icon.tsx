import React from "react";
import type { Link as LinkType, TopIconOptions } from "@/types";
import { socialLinks } from "@/constants/social-links";
import { getDomain, cn } from "@/lib/utils";
import { TopIconStyle } from "@/types";
import Link from "next/link";

export function TopIcon({
  item,
  options,
  className,
  size,
}: {
  item: Pick<LinkType, "title" | "url">;
  options: TopIconOptions;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const socialLink = socialLinks.find((link) =>
    item.url.includes(getDomain(link.url)),
  );

  const blackColor = "#000000";
  const whiteColor = "#FFFFFF";
  const defaultColor = true ? whiteColor : blackColor;

  if (!socialLink) return null;

  if (options.style === TopIconStyle.SOCIAL_BACKGROUND) {
    return (
      <TopIconLink item={item}>
        <socialLink.icon
          style={{
            filter: options.dropShadow
              ? `drop-shadow(0 0 0.35rem ${socialLink.color})`
              : undefined,
            color: whiteColor,
            backgroundColor: socialLink.color,
          }}
          className={cn("size-8 rounded-full p-2", className)}
        />
      </TopIconLink>
    );
  }

  if (options.style === TopIconStyle.BLACK_BACKGROUND) {
    return (
      <TopIconLink item={item}>
        <socialLink.icon
          style={{
            filter: options.dropShadow
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

  if (options.style === TopIconStyle.WHITE_BACKGROUND) {
    return (
      <TopIconLink item={item}>
        <socialLink.icon
          style={{
            filter: options.dropShadow
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

  if (options.style === TopIconStyle.WHITE_BACKGROUND_SOCIAL_COLOR) {
    return (
      <TopIconLink item={item}>
        <socialLink.icon
          style={{
            filter: options.dropShadow
              ? `drop-shadow(0 0 0.35rem ${whiteColor})`
              : undefined,
            color: socialLink.color,
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

  if (options.style === TopIconStyle.SOCIAL_ICON_COLOR) {
    return (
      <TopIconLink item={item}>
        <socialLink.icon
          style={{
            filter: options.dropShadow
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
    <TopIconLink item={item}>
      <socialLink.icon
        style={{
          filter: options.dropShadow
            ? `drop-shadow(0 0 0.5rem ${defaultColor})`
            : undefined,
          color: defaultColor,
        }}
        className={cn(
          "size-6 rounded-full",
          className,
          size === "sm" && "size-4",
        )}
      />
    </TopIconLink>
  );
}

export function TopIconLink({
  children,
  item,
}: {
  children: React.ReactNode;
  item: Pick<LinkType, "title" | "url">;
}) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={item.url}>
      {children}
    </Link>
  );
}
