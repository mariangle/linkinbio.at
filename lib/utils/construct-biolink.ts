import {
  Biolink,
  ContentType,
  Font,
  IconStyle,
  Position,
  Size,
  TitleEffect,
} from "@/lib/types";
import {
  convertToWeatherEffect,
  convertToLayout,
  convertToContentType,
} from "@/lib/utils/enum-mappings";
import {
  constructLinkFromWebsite,
  constructLinkFromPlatform,
} from "@/lib/utils/construct-link";
import { getFont } from "@/lib/utils/get-font";

import {
  defaultBackgroundOptions,
  defaultButtonOptions,
  defaultEffectsOptions,
  defaultIconsOptions,
  defaultProfileOptions,
  defaultTextOptions,
} from "@/lib/constants/defaults";

import type {
  User,
  Background,
  Buttons,
  Icons,
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
  buttons?: Buttons;
  icons?: Icons;
  effect?: Effect;
  profile?: Profile;
  spotify?: Spotify;
  soundcloud?: Soundcloud;
  youtube?: Youtube;
}

export function constructBiolink({ user }: { user: ExtendedUser }): Biolink {
  return {
    user: {
      id: user.id,
      username: user.username ?? "",
      email: user.email ?? "",
      title: user.title ?? undefined,
      image: user.image ?? undefined,
      occupation: user.occupation ?? undefined,
      location: user.location ?? undefined,
      bio: user.bio ?? undefined,
      premium: true ?? false, // default to false
    },
    config: {
      profile: {
        title: {
          color: user.profile?.titleColor ?? defaultTextOptions.color,
          font: getFont(user.profile?.titleFont),
        },
        text: {
          font: getFont(user.profile?.textFont),
          color: user.profile?.textColor ?? defaultTextOptions.color,
        },
        layout: convertToLayout(user.profile?.layout),
        hideUsername:
          user.profile?.hideUsername ?? defaultProfileOptions.hideUsername,
      },
      buttons: {
        shadow: {
          solid: user.buttons?.shadowSolid ?? defaultButtonOptions.shadow.solid,
          spreadRadius:
            user.buttons?.shadowSpreadRadius ??
            defaultButtonOptions.shadow.spreadRadius,
          color: user.buttons?.shadowColor ?? defaultButtonOptions.shadow.color,
        },
        text: {
          hidden: user.buttons?.textHidden ?? defaultButtonOptions.text.hidden,
        },
        font: {
          color: user.buttons?.fontColor ?? defaultButtonOptions.font.color,
          shadow: user.buttons?.fontShadow ?? defaultButtonOptions.font.shadow,
          family: Font.Inter,
        },
        border: {
          color: user.buttons?.borderColor ?? defaultButtonOptions.border.color,
          radius:
            user.buttons?.borderRadius ?? defaultButtonOptions.border.radius,
          width: user.buttons?.borderWidth ?? defaultButtonOptions.border.width,
        },
        background: {
          color:
            user.buttons?.backgroundColor ??
            defaultButtonOptions.background.color,
          opacity:
            user.buttons?.backgroundOpacity ??
            defaultButtonOptions.background.opacity,
          blur:
            user.buttons?.backgroundBlur ??
            defaultButtonOptions.background.blur,
          socialColor:
            user.buttons?.backgroundSocialColor ??
            defaultButtonOptions.background.socialColor,
        },
      },
      background: {
        color: user.background?.color ?? defaultBackgroundOptions.color,
        url: user.background?.url ?? defaultBackgroundOptions.url,
        gradient: {
          startColor:
            user.background?.gradientStartColor ??
            defaultBackgroundOptions.gradient?.startColor,
          endColor:
            user.background?.gradientEndColor ??
            defaultBackgroundOptions.gradient?.endColor,
          angle:
            user.background?.gradientAngle ??
            defaultBackgroundOptions.gradient?.angle,
        },
      },
      icons: {
        shadow: user.icons?.shadow ?? defaultIconsOptions.shadow,
        style: (user.icons?.style as IconStyle) ?? defaultIconsOptions.style,
        color: user.icons?.color ?? defaultIconsOptions.color,
        position:
          (user.icons?.position as Position) ?? defaultIconsOptions.position,
        size: (user.icons?.size as Size) ?? defaultIconsOptions.size,
      },
      effects: {
        title:
          (user.effect?.titleEffect as TitleEffect) ??
          defaultEffectsOptions.title,
        weather:
          convertToWeatherEffect(user.effect?.weatherEffect) ??
          defaultEffectsOptions.weather,
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
    widgets: {
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
