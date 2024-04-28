import { SoundcloudOptions } from "@/types";

export function SoundcloudTrack({ options }: { options?: SoundcloudOptions }) {
  if (!options?.trackId) return null;

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <iframe
        width="100%"
        height="150"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${options.trackId}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
    </div>
  );
}
