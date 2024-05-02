import { ContentType } from ".";

export interface Modules {
  spotify?: SpotifyOptions;
  youtube?: YoutubeOptions;
  soundcloud?: SoundcloudOptions;
}

export interface SpotifyOptions {
  contentId: string;
  type: ContentType;
  enabled: boolean;
  darkBackground: boolean;
  compactLayout: boolean;
}

export interface YoutubeOptions {
  enabled: boolean;
  videoId: string;
}

export interface SoundcloudOptions {
  enabled: boolean;
  trackId: string;
}
