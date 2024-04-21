import { DiscordPanel } from "./discord-panel";
import { SpotifyPanel } from "./spotify-panel";
import { PresenceGuide } from "./presence-guide";

export default function Integrations() {
  return (
    <div className="space-y-8">
      <PresenceGuide />
      <DiscordPanel />
      <SpotifyPanel />
    </div>
  );
}
