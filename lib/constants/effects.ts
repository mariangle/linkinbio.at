import { TitleEffect, BackgroundEffect } from "@/lib/types";

export const weatherEffects: {
  value: BackgroundEffect;
  label: string;
}[] = [
  {
    value: "rain",
    label: "Rain",
  },
  {
    value: "snow",
    label: "Snow",
  },
  {
    value: "thunder",
    label: "Thunder",
  },
  {
    value: "lightning-bugs",
    label: "Lightning Bugs",
  },
  {
    value: "stars",
    label: "Stars",
  },
  {
    value: "cash",
    label: "Cash Rain",
  },
];

export const titleEffects = [
  {
    value: TitleEffect.Typewriter,
    label: "Typewriter",
  },
  {
    value: TitleEffect.Sparkles,
    label: "Sparkles",
  },
  {
    value: TitleEffect.CherryBlossoms,
    label: "Cherry Blossoms",
  },
  {
    value: TitleEffect.Shake,
    label: "Shake",
  },
  {
    value: TitleEffect.Glitch,
    label: "Glitch",
  },
  {
    value: TitleEffect.Rainbow,
    label: "Rainbow",
  },
  {
    value: TitleEffect.Flicker,
    label: "Flicker",
  },
  {
    value: TitleEffect.Shimmer,
    label: "Shimmer",
  },
];
