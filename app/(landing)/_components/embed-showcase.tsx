import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { SpotifyTrack } from "@/components/biolink/modules/spotify";
import {
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseHeader,
  ShowcaseIconContainer,
} from "./showcase";
import { Layers3 } from "lucide-react";

export function EmbedShowcase() {
  return (
    <ShowcaseContainer>
      <div>
        <ShowcaseIconContainer>
          <Layers3 className="size-5 text-white" />
        </ShowcaseIconContainer>
        <ShowcaseHeader>Embeds</ShowcaseHeader>
        <ShowcaseDescription>
          Add your favorite tracks, playlists, albums and videos to your
          biolink.
        </ShowcaseDescription>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <SoundcloudTrack options={{ enabled: true, trackId: "509599005" }} />
        <SpotifyTrack
          options={{
            enabled: true,
            darkBackground: false,
            compactLayout: false,
            contentId: "6wWaVoUOzLQJHd3bWAUpdZ",
          }}
        />
      </div>
    </ShowcaseContainer>
  );
}
