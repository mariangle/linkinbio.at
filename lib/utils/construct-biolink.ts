import type { Biolink } from "@/lib/types";
import { Font } from "@/lib/types/enums";
import {
  convertToTopIconStyle,
  convertToWeatherEffect,
  convertToLayout,
} from "@/lib/utils/enum-mappings";

import { fonts } from "@/lib/constants/fonts";

import type {
  User,
  Background,
  Button,
  TopIcon,
  Effect,
  Link,
  Profile,
} from "@prisma/client";

export interface ExtendedUser extends User {
  links?: Link[];
  background?: Background;
  button?: Button;
  topIcon?: TopIcon;
  effect?: Effect;
  profile?: Profile;
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
      premium: true || false, // TODO: Also check if user is premium
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
        customized: user.button ? true : false,
      },
      background: {
        customized: user.background ? true : false,
        color: user.background?.color ?? "#0055B3",
        url: user.background?.url ?? undefined,
        gradient: {
          startColor: user.background?.startColor ?? "#FF512F",
          endColor: user.background?.endColor ?? "#DD2476",
        },
      },
      topIcon: {
        shadow: user.topIcon?.shadow ?? false,
        style: convertToTopIconStyle(user.topIcon?.style),
        customized: user.topIcon ? true : false,
      },
      effects: {
        customized: user.effect ? true : false,
        titleTypewriter: user.effect?.titleTypewriter ?? false,
        bioTypewriter: user.effect?.bioTypewriter ?? false,
        titleSparkles: user.effect?.titleSparkles ?? false,
        weatherEffect: convertToWeatherEffect(user.effect?.backgroundWeather),
      },
    },
    links: user.links ?? [],
    modules: {},
  };
}
