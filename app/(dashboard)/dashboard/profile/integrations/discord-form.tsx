"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LanyardDiscordPresence } from "@/types";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const getDiscordPresence = async (
  userId: string,
): Promise<LanyardDiscordPresence> => {
  const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
    method: "GET",
  });
  return response.json();
};

export function DiscordForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userId, setUserId] = React.useState<string>("1014431678858543134");
  const [spotifyMusic, setSpotifyMusic] = React.useState<boolean>(false);
  const [discordPresence, setDiscordPresence] =
    React.useState<LanyardDiscordPresence>();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await getDiscordPresence(userId);
    console.log(data);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onSwitchChange = (checked: boolean) => {
    setSpotifyMusic(checked);
  };

  return (
    <form className="mt-4 space-y-4" onSubmit={onSubmit}>
      <div>
        <Label
          htmlFor="discord-user-id"
          className="mb-2 block text-xs text-white"
        >
          Discord User ID
        </Label>
        <Input
          id="discord-user-id"
          placeholder="Eg. 1014431675858143134 "
          value={userId}
          onChange={onInputChange}
          className="bg-black/25 text-white"
        />
      </div>
      <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-white">Spotify Music</h3>
          <p className="text-xs text-slate-300">
            Display your the music you&apos;re listening to on Spotify through
            Discord.
          </p>
        </div>
        <Switch checked={spotifyMusic} onCheckedChange={onSwitchChange} />
      </div>
      <div className="flex items-center gap-2">
        <Button>Submit</Button>
        <Link
          target="_blank"
          rel="noopener nofollow"
          href="https://discord.com/invite/UrXF2cfJ7F"
          className={cn(buttonVariants({ variant: "solid" }))}
        >
          Join Lanyard Discord Server
        </Link>
      </div>
    </form>
  );
}
