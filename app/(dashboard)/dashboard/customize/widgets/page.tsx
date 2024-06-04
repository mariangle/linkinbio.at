import { getCachedBiolink } from "@/server/actions/get-biolink";
import { SpotifyForm } from "./spotify-form";
import { SoundcloudForm } from "./soundcloud-form";
import { YoutubeForm } from "./youtube-form";
import { PageHeading } from "@/components/dashboard/page";

export default async function Widgets() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <PageHeading>Customize Widgets</PageHeading>
      <SpotifyForm data={biolink.widgets.spotify} />
      <SoundcloudForm data={biolink.widgets.soundcloud} />
      <YoutubeForm data={biolink.widgets.youtube} />
    </>
  );
}
