export interface LanyardDiscordPresence {
  success: boolean;
  data: {
    spotify: Spotify;
    listening_to_spotify: boolean;
    kv: any;
    discord_user: DiscordUser;
    discord_status: string;
    activities: {
      type: number;
      timestamps: { start: number; end: number };
      sync_id: string;
      state: string;
      session_id: string;
      party: { id: string };
      name: string;
      id: string;
      flags: number;
      details: string;
      created_at: number;
      assets: { large_text: string; large_image: string };
    }[];
    active_on_discord_web: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
  };
}

export interface Spotify {
  track_id: string;
  timestamps: { start: number; end: number };
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot: boolean;
  public_flags: number;
}
