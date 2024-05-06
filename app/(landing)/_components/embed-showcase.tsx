import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { SpotifyTrack } from "@/components/biolink/modules/spotify";
import { YoutubeVideo } from "@/components/biolink/modules/youtube";
import {
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseHeader,
  ShowcaseIconContainer,
} from "./showcase";
import { Layers3 } from "lucide-react";

export function EmbedShowcase() {
  return (
    <ShowcaseContainer className="p-0 md:p-0">
      <div className="p-6 md:p-10">
        <ShowcaseIconContainer>
          <Layers3 className="size-5 text-white" />
        </ShowcaseIconContainer>
        <ShowcaseHeader>Embeds</ShowcaseHeader>
        <ShowcaseDescription>
          Add your favorite tracks, playlists, albums and videos.
        </ShowcaseDescription>
      </div>
      <div className="mt-6">
        <div className="ml-8 h-[250px]">
          <YoutubeVideo options={{ enabled: true, videoId: "JLd09jmEAYA" }} />
        </div>{" "}
      </div>
    </ShowcaseContainer>
  );
}
