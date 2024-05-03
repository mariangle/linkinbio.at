import { YoutubeOptions } from "@/lib/types";

export function YoutubeVideo({ options }: { options?: YoutubeOptions }) {
  if (!options?.videoId || !options.enabled) return null;
  return (
    <div className="iframe-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${options.videoId}?si=IuH7oDNRZxeCmxpt`}
        title="YouTube video player"
        className="rounded-lg"
        width={1000}
        height={1000}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
