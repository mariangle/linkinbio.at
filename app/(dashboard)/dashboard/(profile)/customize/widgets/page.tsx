import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { SpotifyForm } from "./spotify-form";
import { SoundcloudForm } from "./soundcloud-form";
import { YoutubeForm } from "./youtube-form";

export default async function Widgets() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <SpotifyForm
        data={biolink.widgets.spotify}
        premium={biolink.user.premium}
      />
      <SoundcloudForm
        data={{
          trackId: biolink.widgets.soundcloud?.trackId ?? "",
          enabled: biolink.widgets.soundcloud?.enabled ?? true,
        }}
        modified={!!biolink.widgets.soundcloud}
      />
      <YoutubeForm
        data={{
          videoId: biolink.widgets.youtube?.videoId ?? "",
          enabled: biolink.widgets.youtube?.enabled ?? true,
        }}
        modified={!!biolink.widgets.youtube}
      />
    </>
  );
}
