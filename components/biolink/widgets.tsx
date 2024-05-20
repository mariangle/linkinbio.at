import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { Spotify } from "@/components/biolink/modules/spotify";
import { YoutubeVideo } from "@/components/biolink/modules/youtube";
import { Widgets as WidgetsType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Widgets({
  widgets,
  className,
  premium = true,
}: {
  widgets?: WidgetsType;
  className?: string;
  premium?: boolean;
}) {
  if (!premium) return null;

  if (!widgets?.soundcloud || !widgets.spotify || !widgets.youtube) return null;

  return (
    <div className={cn("mt-6 w-full space-y-2", className)}>
      <SoundcloudTrack options={widgets?.soundcloud} />
      <Spotify options={widgets?.spotify} />
      <YoutubeVideo options={widgets?.youtube} />
    </div>
  );
}
