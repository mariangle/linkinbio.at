import React from "react";

import { SpotifyForm } from "./_components/spotify-form";
import { SoundcloudForm } from "./_components/soundcloud-form";
import { YoutubeForm } from "./_components/youtube-form";

export default function Modules() {
  return (
    <div className="my-6 space-y-6">
      <SpotifyForm />
      <SoundcloudForm />
      <YoutubeForm />
    </div>
  );
}
