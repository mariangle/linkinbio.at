import type {
  WebsiteLink as WebsiteLinkProps,
  PlatformLink as PlatformLinkProps,
} from "@prisma/client";
import type { WebsiteLink, PlatformLink } from "@/lib/types";

import { platforms } from "@/lib/constants/platforms";

export function constructLinkFromWebsite(link: WebsiteLinkProps): WebsiteLink {
  return {
    id: link.id,
    order: link.order,
    title: link.title,
    url: link.url,
    featured: link.featured,
    archived: link.archived,
    imageUrl: link.imageUrl ?? undefined,
    iconName: link.iconName ?? undefined,
  };
}

export function constructPlatformUrl({
  provider,
  username,
}: {
  provider: string;
  username: string;
}) {
  const foundProvider = platforms.find((link) => link.name === provider);

  if (foundProvider?.name === "Website") {
    return `${username}`;
  }

  if (!foundProvider?.baseURL) {
    return undefined;
  }

  return `https://${foundProvider?.baseURL}${username}`;
}

export function constructLinkFromPlatform(
  link: PlatformLinkProps,
): PlatformLink {
  return {
    id: link.id,
    order: link.order,
    url: constructPlatformUrl({
      provider: link.provider,
      username: link.username,
    }),
    archived: link.archived,
    provider: link.provider,
    username: link.username,
  };
}
