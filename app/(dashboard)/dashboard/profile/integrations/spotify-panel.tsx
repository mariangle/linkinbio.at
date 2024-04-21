import { FaSpotify } from "react-icons/fa";

import { SpotifyForm } from "./spotify-form";

export function SpotifyPanel() {
  return (
    <div className="rounded-xl border border-emerald-500/10 bg-black bg-gradient-to-br from-green-500/5 to-emerald-500/30 p-4">
      <div className="flex flex-col items-start gap-2">
        <FaSpotify className="size-8 text-emerald-500" />
        <h2 className="mb-1 text-xl font-semibold text-white">Spotify Music</h2>
      </div>
      <p className="text-sm text-slate-300">
        Display your Spotify music on your profile.
      </p>
      <SpotifyForm />
    </div>
  );
}
