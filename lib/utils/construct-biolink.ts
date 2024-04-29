import type { Biolink } from "@/lib/types";
import { Layout, Font, TopIconStyle } from "@/lib/types/enums";

import { fonts } from "@/lib/constants/fonts";
import { layouts } from "@/lib/constants/layouts";
import { topIconStyles } from "@/lib/constants/top-icon-styles";
import { weatherEffects } from "@/lib/constants/weather-effects";

import type {
  User,
  Background,
  Button,
  Title,
  TopIcon,
  Effect,
  Configuration,
  Link,
  Embed,
} from "@prisma/client";

export interface ExtendedUser extends User {
  links?: Link[];
  background?: Background;
  button?: Button;
  userTitle?: Title;
  topIcon?: TopIcon;
  effect?: Effect;
  config?: Configuration;
  embed?: Embed[];
}

// TODO: Either use fallback or undefined to all - not both

function getFont(font: string | null | undefined) {
  return fonts.find((f) => f.name === font)?.value ?? Font.Inter;
}

function getLayout(layout: string | null | undefined) {
  return layouts.find((l) => l.name === layout)?.value ?? Layout.Standard;
}

function getTopIconStyle(style: string | null | undefined) {
  return topIconStyles.find((s) => s.label === style)?.value ?? undefined;
}

function getWeatherEffect(effect: string | null | undefined) {
  return weatherEffects.find((e) => e.label === effect)?.value ?? undefined;
}

// TODO: Also check if user is premium

export function constructBiolink({ user }: { user: ExtendedUser }): Biolink {
  return {
    user: {
      username: user.username ?? "nousername",
      title: user.title ?? undefined,
      image: user.image ?? undefined,
      occupation: user.occupation ?? undefined,
      location: user.location ?? undefined,
      bio: user.bio ?? undefined,
      premium: true || false, // ! set to true for now
    },
    config: {
      invertTextColor: user.config?.invertTextColor ?? false,
      font: getFont(user.config?.font),
      layout: getLayout(user.config?.layout),
      hideUsername: user.config?.hideUsername ?? false,
      button: {
        shadow: {
          solid: user.button?.shadowSolid ?? false,
          spreadRadius: user.button?.shadowSpreadRadius ?? 0,
          color: user.button?.shadowColor ?? "#000000",
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
      },
      background: {
        color: user.background?.color ?? "#23a6d5",
        url: user.background?.url ?? undefined,
        gradient: {
          startColor: user.background?.startColor ?? "#FF512F",
          endColor: user.background?.endColor ?? "#DD2476",
        },
      },
      topIcon: {
        shadow: user.topIcon?.shadow ?? false,
        style: getTopIconStyle(user.topIcon?.style),
      },
      effects: {
        titleTypewriter: user.effect?.titleTypewriter ?? false,
        bioTypewriter: user.effect?.bioTypewriter ?? false,
        titleSparkles: user.effect?.titleSparkles ?? false,
        weather: getWeatherEffect(user.effect?.backgroundWeather),
      },
      title: {
        font: getFont(user.userTitle?.font),
        color: user.userTitle?.color ?? "#470000",
      },
    },
    settings: {},
    links: user.links ?? [],
    modules: {},
  };
}
