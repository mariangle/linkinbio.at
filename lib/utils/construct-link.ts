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
    archived: link.archived,
    iconId: link.iconId,
  };
}

export function constructPlatformUrl({
  provider,
  username,
}: {
  provider: string;
  username: string;
}): string {
  const providerDomain = platforms.find(
    (link) => link.name === provider,
  )?.domain;

  return `https://${providerDomain}/${username}`;
}

export function constructLinkFromPlatform(
  link: PlatformLinkProps,
): PlatformLink {
  return {
    id: link.id,
    order: link.order,
    title: link.title,
    url: constructPlatformUrl({
      provider: link.provider,
      username: link.username,
    }),
    archived: link.archived ?? false,
    isTopIcon: link.isTopIcon,
    provider: link.provider,
    username: link.username,
  };
}
