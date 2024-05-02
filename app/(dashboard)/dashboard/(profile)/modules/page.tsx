import { SpotifyForm } from "./_components/spotify-form";
import { SoundcloudForm } from "./_components/soundcloud-form";
import { YoutubeForm } from "./_components/youtube-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { ContentType } from "@/lib/types";

export default async function Modules() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <SpotifyForm
        data={{
          contentId: biolink.modules.spotify?.contentId ?? "",
          type: biolink.modules.spotify?.type ?? ContentType.Track,
          enabled: biolink.modules.spotify?.enabled ?? true,
          darkBackground: biolink.modules.spotify?.darkBackground ?? false,
          compactLayout: biolink.modules.spotify?.compactLayout ?? false,
        }}
        modified={!!biolink.modules.spotify}
      />
      <SoundcloudForm
        data={{
          trackId: biolink.modules.soundcloud?.trackId ?? "",
          enabled: biolink.modules.soundcloud?.enabled ?? true,
        }}
        modified={!!biolink.modules.soundcloud}
      />
      <YoutubeForm
        data={{
          videoId: biolink.modules.youtube?.videoId ?? "",
          enabled: biolink.modules.youtube?.enabled ?? true,
        }}
        modified={!!biolink.modules.youtube}
      />
    </PageWithPreview>
  );
}
