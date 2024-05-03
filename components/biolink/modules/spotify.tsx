import { SpotifyOptions, ContentType } from "@/lib/types";

export function SpotifyTrack({
  options,
}: {
  options: Omit<SpotifyOptions, "type">;
}) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${
        options.contentId
      }?utm_source=generator&theme=${options.darkBackground && 0}`}
      width="100%"
      height="80"
      style={{ borderRadius: "15px" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export function SpotifyAlbum({
  options,
}: {
  options: Omit<SpotifyOptions, "type">;
}) {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/album/${options.contentId}?utm_source=generator&theme=${options.darkBackground && 0}`}
      height={options.compactLayout ? 152 : 352}
      width="100%"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export function SpotifyPlaylist({
  options,
}: {
  options: Omit<SpotifyOptions, "type">;
}) {
  return (
    <iframe
      title="Spotify Playlist"
      src={`https://open.spotify.com/embed/playlist/${options.contentId}?utm_source=generator&theme=${options.darkBackground && 0}`}
      width="100%"
      height="352"
      allow="encrypted-media *;"
      allowFullScreen
      loading="lazy"
      style={{ borderRadius: "12px" }}
    ></iframe>
  );
}

export function Spotify({ options }: { options?: SpotifyOptions }) {
  if (!options?.contentId || !options.enabled) return null;

  switch (options.type) {
    case ContentType.Track:
      return <SpotifyTrack options={options} />;
    case ContentType.Album:
      return <SpotifyAlbum options={options} />;
    case ContentType.Playlist:
      return <SpotifyPlaylist options={options} />;
    default:
      return null;
  }
}
