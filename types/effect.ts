export enum WeatherEffect {
  Rain = "rain",
  Snow = "snow",
  Thunder = "thunder",
  LighthingBugs = "lightning-bugs",
  Fog = "fog",
}

export enum AnimationType {
  FadeIn = "fade-in",
  SlideIn = "slide-in",
  Spotlight = "spotlight",
  Staggered = "staggered",
}

export interface EffectsOptions {
  bioTypewriter?: boolean;
  titleTypewriter?: boolean;
  titleSparkles?: boolean;
  weather?: WeatherEffect;
  animation?: AnimationType;
}
