import {
  Layout,
  TopIconStyle,
  WeatherEffect,
  ContentType,
  TitleEffect,
} from "@/lib/types/enums";
import {
  TopIconStyle as PrismaTopIconStyle,
  Layout as PrismaLayout,
  WeatherEffect as PrismaWeatherEffect,
  ContentType as PrismaContentType,
} from "@prisma/client";

export function convertToPrismaTopIconStyle(iconStyle: string) {
  switch (iconStyle) {
    case TopIconStyle.SocialBackgroundWhiteColor:
      return PrismaTopIconStyle.SocialBackgroundWhiteColor;
    case TopIconStyle.BlackBackgroundWhiteColor:
      return PrismaTopIconStyle.BlackBackgroundWhiteColor;
    case TopIconStyle.WhiteBackgroundBlackColor:
      return PrismaTopIconStyle.WhiteBackgroundBlackColor;
    case TopIconStyle.NoBackgroundSocialColor:
      return PrismaTopIconStyle.NoBackgroundSocialColor;
    case TopIconStyle.WhiteBackgroundSocialColor:
      return PrismaTopIconStyle.WhiteBackgroundSocialColor;
    default:
      return undefined;
  }
}

export function convertToTopIconStyle(
  prismaTopIconStyle?: PrismaTopIconStyle | null,
) {
  switch (prismaTopIconStyle) {
    case PrismaTopIconStyle.SocialBackgroundWhiteColor:
      return TopIconStyle.SocialBackgroundWhiteColor;
    case PrismaTopIconStyle.BlackBackgroundWhiteColor:
      return TopIconStyle.BlackBackgroundWhiteColor;
    case PrismaTopIconStyle.WhiteBackgroundBlackColor:
      return TopIconStyle.WhiteBackgroundBlackColor;
    case PrismaTopIconStyle.NoBackgroundSocialColor:
      return TopIconStyle.NoBackgroundSocialColor;
    case PrismaTopIconStyle.WhiteBackgroundSocialColor:
      return TopIconStyle.WhiteBackgroundSocialColor;
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
    case TitleEffect.Stars:
      return TitleEffect.Stars;
    default:
      return;
  }
}
