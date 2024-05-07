import { Biolink, ContentType, Font } from "@/lib/types";
import {
  convertToTopIconStyle,
  convertToWeatherEffect,
  convertToLayout,
  convertToContentType,
  convertToTitleEffect,
} from "@/lib/utils/enum-mappings";
import {
  constructLinkFromWebsite,
  constructLinkFromPlatform,
} from "@/lib/utils/construct-link";
import { fonts } from "@/lib/constants/fonts";

import type {
  User,
  Background,
  Button,
  TopIcon,
  Effect,
  WebsiteLink,
  PlatformLink,
  Profile,
  Spotify,
  Soundcloud,
  Youtube,
} from "@prisma/client";

export interface ExtendedUser extends User {
  platformLinks?: PlatformLink[];
  websiteLinks?: WebsiteLink[];
  background?: Background;
  button?: Button;
  topIcon?: TopIcon;
  effect?: Effect;
  profile?: Profile;
  spotify?: Spotify;
  soundcloud?: Soundcloud;
  youtube?: Youtube;
}

function getFont(titleFont: string | null | undefined): Font {
  return fonts.find((f) => f.value === titleFont)?.value ?? Font.Inter;
}

export function constructBiolink({ user }: { user: ExtendedUser }): Biolink {
  return {
    user: {
      username: user.username ?? "",
      title: user.title ?? undefined,
      image: user.image ?? undefined,
      occupation: user.occupation ?? undefined,
      location: user.location ?? undefined,
      bio: user.bio ?? undefined,
      premium: true,
    },
    config: {
      profile: {
        customized: user.profile ? true : false,
        title: {
          color: user.profile?.titleColor ?? "#FFFFFF",
          font: getFont(user.profile?.titleFont),
        },
        font: Font.Inter,
        layout: convertToLayout(user.profile?.layout),
        hideUsername: user.profile?.hideUsername ?? false,
        invertTextColor: user.profile?.invertTextColor ?? false,
      },
      button: {
        shadow: {
          solid: user.button?.shadowSolid ?? false,
          spreadRadius: user.button?.shadowSpreadRadius ?? 0,
          color: user.button?.shadowColor ?? "#FFFFFF",
        },
        text: {
          color: user.button?.textColor ?? "#ffffff",
          hidden: user.button?.textHidden ?? false,
        },
        border: {
          color: user.button?.borderColor ?? "#000000",
          radius: user.button?.borderRadius ?? 0,
          width: user.button?.borderWidth ?? 0,
        },
        background: {
          color: user.button?.backgroundColor ?? "#000000",
          opacity: user.button?.backgroundOpacity ?? 1,
          blur: user.button?.backgroundBlur ?? 0,
          socialColor: user.button?.backgroundSocialColor ?? false,
        },
        icon: {
          hidden: user.button?.iconHidden ?? false,
          shadow: user.button?.iconShadow ?? false,
          socialColor: user.button?.iconSocialColor ?? false,
        },
        customized: user.button ? true : false,
      },
      background: {
        customized: user.background ? true : false,
        color: user.background?.color ?? "#0055B3",
        url: user.background?.url ?? undefined,
        gradient: {
          startColor: user.background?.gradientStartColor ?? undefined,
          endColor: user.background?.gradientEndColor ?? undefined,
          angle: user.background?.gradientAngle ?? 0,
        },
      },
      topIcon: {
        shadow: user.topIcon?.shadow ?? false,
        style: convertToTopIconStyle(user.topIcon?.style),
        customized: user.topIcon ? true : false,
      },
      effects: {
        customized: user.effect ? true : false,
        title: convertToTitleEffect(user.effect?.titleEffect),
        weather: convertToWeatherEffect(user.effect?.weatherEffect),
      },
    },
    links: {
      website: user.websiteLinks
        ? user.websiteLinks?.map((link) => constructLinkFromWebsite(link))
        : [],
      platform: user.platformLinks
        ? user.platformLinks?.map((link) => constructLinkFromPlatform(link))
        : [],
    },
    modules: {
      spotify: user.spotify && {
        enabled: user.spotify.enabled,
        compactLayout: user.spotify.compactLayout,
        darkBackground: user.spotify.darkBackground,
        contentId: user.spotify.contentId,
        type: convertToContentType(user.spotify.type) ?? ContentType.Track,
      },
      youtube: user.youtube && {
        enabled: user.youtube.enabled,
        videoId: user.youtube.videoId,
      },
      soundcloud: user.soundcloud && {
        enabled: user.soundcloud.enabled,
        trackId: user.soundcloud.trackId,
      },
    },
  };
}
