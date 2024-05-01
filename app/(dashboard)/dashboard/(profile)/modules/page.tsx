import { SpotifyForm } from "./_components/spotify-form";
import { SoundcloudForm } from "./_components/soundcloud-form";
import { YoutubeForm } from "./_components/youtube-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Modules() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink} className="my-6 space-y-6">
      <SpotifyForm />
      <SoundcloudForm />
      <YoutubeForm />
    </PageWithPreview>
  );
}
