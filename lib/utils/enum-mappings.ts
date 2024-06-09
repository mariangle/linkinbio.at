import { Layout, WeatherEffect, ContentType } from "@/lib/types/enums";
import {
  Layout as PrismaLayout,
  BackgroundEffect as PrismaBackgroundEffect,
  ContentType as PrismaContentType,
} from "@prisma/client";

export function convertToPrismaLayout(layout: Layout): PrismaLayout {
  const layoutMap: Record<Layout, PrismaLayout> = {
    [Layout.WithCover]: PrismaLayout.WithCover,
    [Layout.Professional]: PrismaLayout.Professional,
    [Layout.Glassmorphism]: PrismaLayout.Glassmorphism,
    [Layout.Bold]: PrismaLayout.Bold,
    [Layout.Modern]: PrismaLayout.Modern,
    [Layout.Standard]: PrismaLayout.Standard,
  };

  return layoutMap[layout] || PrismaLayout.Standard;
}

export function convertToLayout(
  layout: PrismaLayout | null | undefined,
): Layout {
  const layoutMap: Record<PrismaLayout, Layout> = {
    [PrismaLayout.WithCover]: Layout.WithCover,
    [PrismaLayout.Professional]: Layout.Professional,
    [PrismaLayout.Glassmorphism]: Layout.Glassmorphism,
    [PrismaLayout.Bold]: Layout.Bold,
    [PrismaLayout.Modern]: Layout.Modern,
    [PrismaLayout.Standard]: Layout.Standard,
  };

  return layoutMap[layout!] || Layout.Standard;
}

export function convertToWeatherEffect(
  prismaBackgroundEffect?: PrismaBackgroundEffect | null,
) {
  switch (prismaBackgroundEffect) {
    case PrismaBackgroundEffect.Snow:
      return WeatherEffect.Snow;
    case PrismaBackgroundEffect.Rain:
      return WeatherEffect.Rain;
    case PrismaBackgroundEffect.LightningBugs:
      return WeatherEffect.LightningBugs;
    case PrismaBackgroundEffect.Thunder:
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
      return PrismaBackgroundEffect.Snow;
    case WeatherEffect.Rain:
      return PrismaBackgroundEffect.Rain;
    case WeatherEffect.LightningBugs:
      return PrismaBackgroundEffect.LightningBugs;
    case WeatherEffect.Thunder:
      return PrismaBackgroundEffect.Thunder;
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
