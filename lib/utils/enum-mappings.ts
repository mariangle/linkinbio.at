import {
  Layout,
  IconStyle,
  WeatherEffect,
  ContentType,
  TitleEffect,
} from "@/lib/types/enums";
import {
  IconsStyle as PrismaIconsStyle,
  Layout as PrismaLayout,
  WeatherEffect as PrismaWeatherEffect,
  ContentType as PrismaContentType,
} from "@prisma/client";

export function convertToPrismaIconStyle(iconStyle: string) {
  switch (iconStyle) {
    case IconStyle.SocialBackgroundWhiteColor:
      return PrismaIconsStyle.SocialBackgroundWhiteColor;
    case IconStyle.BlackBackgroundWhiteColor:
      return PrismaIconsStyle.BlackBackgroundWhiteColor;
    case IconStyle.WhiteBackgroundBlackColor:
      return PrismaIconsStyle.WhiteBackgroundBlackColor;
    case IconStyle.NoBackgroundSocialColor:
      return PrismaIconsStyle.NoBackgroundSocialColor;
    case IconStyle.WhiteBackgroundSocialColor:
      return PrismaIconsStyle.WhiteBackgroundSocialColor;
    default:
      return null;
  }
}

export function convertToTopIconStyle(
  prismaTopIconStyle?: PrismaIconsStyle | null,
) {
  switch (prismaTopIconStyle) {
    case PrismaIconsStyle.SocialBackgroundWhiteColor:
      return IconStyle.SocialBackgroundWhiteColor;
    case PrismaIconsStyle.BlackBackgroundWhiteColor:
      return IconStyle.BlackBackgroundWhiteColor;
    case PrismaIconsStyle.WhiteBackgroundBlackColor:
      return IconStyle.WhiteBackgroundBlackColor;
    case PrismaIconsStyle.NoBackgroundSocialColor:
      return IconStyle.NoBackgroundSocialColor;
    case PrismaIconsStyle.WhiteBackgroundSocialColor:
      return IconStyle.WhiteBackgroundSocialColor;
    default:
      return undefined;
  }
}

export function convertToPrismaLayout(layout: string) {
  switch (layout) {
    case Layout.WithCover:
      return PrismaLayout.WithCover;
    case Layout.Professional:
      return PrismaLayout.Professional;
    case Layout.Glassmorphism:
      return PrismaLayout.Glassmorphism;
    case Layout.Bold:
      return PrismaLayout.Bold;
    case Layout.Modern:
      return PrismaLayout.Modern;
    default:
      return PrismaLayout.Standard;
  }
}

export function convertToLayout(layout: PrismaLayout | null | undefined) {
  switch (layout) {
    case PrismaLayout.WithCover:
      return Layout.WithCover;
    case PrismaLayout.Professional:
      return Layout.Professional;
    case PrismaLayout.Glassmorphism:
      return Layout.Glassmorphism;
    case PrismaLayout.Bold:
      return Layout.Bold;
    case PrismaLayout.Modern:
      return Layout.Modern;
    default:
      return Layout.Standard;
  }
}

export function convertToWeatherEffect(
  prismaWeatherEffect?: PrismaWeatherEffect | null,
) {
  switch (prismaWeatherEffect) {
    case PrismaWeatherEffect.Snow:
      return WeatherEffect.Snow;
    case PrismaWeatherEffect.Rain:
      return WeatherEffect.Rain;
    case PrismaWeatherEffect.LightningBugs:
      return WeatherEffect.LightningBugs;
    case PrismaWeatherEffect.Thunder:
      return WeatherEffect.Thunder;
    default:
      return undefined;
  }
}

export function convertToPrismaWeatherEffect(
  weatherEffect: string | undefined,
) {
  switch (weatherEffect) {
    case WeatherEffect.Snow:
      return PrismaWeatherEffect.Snow;
    case WeatherEffect.Rain:
      return PrismaWeatherEffect.Rain;
    case WeatherEffect.LightningBugs:
      return PrismaWeatherEffect.LightningBugs;
    case WeatherEffect.Thunder:
      return PrismaWeatherEffect.Thunder;
    default:
      return null;
  }
}

export function convertToContentType(
  prismaContentType?: PrismaContentType | null,
) {
  switch (prismaContentType) {
    case PrismaContentType.Album:
      return ContentType.Album;
    case PrismaContentType.Playlist:
      return ContentType.Playlist;
    case PrismaContentType.Track:
      return ContentType.Track;
    default:
      return undefined;
  }
}

export function convertToPrismaContentType(contentType: string | undefined) {
  switch (contentType) {
    case ContentType.Album:
      return PrismaContentType.Album;
    case ContentType.Playlist:
      return PrismaContentType.Playlist;
    case ContentType.Track:
      return PrismaContentType.Track;
    default:
      return null;
  }
}

export function convertToTitleEffect(
  titleEffect?: string | null,
): TitleEffect | undefined {
  switch (titleEffect) {
    case TitleEffect.Typewriter:
      return TitleEffect.Typewriter;
    case TitleEffect.Sparkles:
      return TitleEffect.Sparkles;
    case TitleEffect.Shake:
      return TitleEffect.Shake;
    case TitleEffect.Glow:
      return TitleEffect.Glow;
    case TitleEffect.Glitch:
      return TitleEffect.Glitch;
    case TitleEffect.Hearts:
      return TitleEffect.Hearts;
    case TitleEffect.CherryBlossoms:
      return TitleEffect.CherryBlossoms;

    default:
      return;
  }
}
