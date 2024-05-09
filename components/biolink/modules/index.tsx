import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { Spotify } from "@/components/biolink/modules/spotify";
import { YoutubeVideo } from "@/components/biolink/modules/youtube";
import { Modules as ModulesType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Modules({
  modules,
  className,
}: {
  modules?: ModulesType;
  className?: string;
}) {
  return (
    <div className={cn("w-full space-y-2", className)}>
      <SoundcloudTrack options={modules?.soundcloud} />
      <Spotify options={modules?.spotify} />
      <YoutubeVideo options={modules?.youtube} />
    </div>
  );
}
