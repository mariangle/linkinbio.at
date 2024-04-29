export interface Modules {
  spotify?: SpotifyOptions;
  youtube?: YoutubeOptions;
  soundcloud?: SoundcloudOptions;
}

export interface SpotifyOptions {
  track: SpotifyTrackOptions;
  album: SpotifyAlbumOptions;
}

export interface SpotifyAlbumOptions {
  albumId: string;
  darkMode: boolean;
  enabled: boolean;
  compactLayout: boolean;
}

export interface SpotifyTrackOptions {
  trackId: string;
  darkMode: boolean;
  enabled: boolean;
}

export interface YoutubeOptions {
  enabled: boolean;
  videoId: string;
}

export interface SoundcloudOptions {
  enabled: boolean;
  trackId: string;
}
