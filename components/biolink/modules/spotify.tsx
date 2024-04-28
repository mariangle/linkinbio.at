import { SpotifyAlbumOptions, SpotifyTrackOptions } from "@/types";

export function SpotifyTrack({ options }: { options?: SpotifyTrackOptions }) {
  if (!options?.trackId) return null;
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${
        options.trackId ?? "7JjCwLgqMtu2yLPq9G15G3"
      }?utm_source=generator&theme=${options.darkMode && 0}`}
      width="100%"
      height="80"
      style={{ borderRadius: "15px" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export function SpotifyAlbum({ options }: { options?: SpotifyAlbumOptions }) {
  if (!options?.albumId) return null;
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/album/${options.albumId}?utm_source=generator&theme=${options.darkMode && 0}`}
      height={options.compactLayout ? 152 : 352}
      width="100%"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
