export enum TitleEffect {
  Sparkles = "sparkles",
  Typewriter = "typewriter",
  Glitch = "glitch",
}

export enum WeatherEffect {
  Rain = "rain",
  Snow = "snow",
  Thunder = "thunder",
  LighthingBugs = "lightning-bugs",
  Fog = "fog",
}

export interface Visuals {
  title?: TitleEffect;
  weather?: WeatherEffect;
}
