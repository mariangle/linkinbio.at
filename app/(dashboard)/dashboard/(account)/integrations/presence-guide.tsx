"use client";

import * as React from "react";

import { Tooltip } from "@/components/ui/tooltip";
import { XIcon } from "lucide-react";

export function PresenceGuide() {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div className="relative mb-4 w-full border-l-2 border-blue-500 bg-gradient-to-l from-foreground/10 to-blue-500/10 p-4  text-foreground">
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-2"
      >
        <XIcon className="size-4 text-foreground" />
      </button>
      <div className="text-sm">
        <div className="pb-1 font-semibold">Integration Guide</div>
        <div className="pb-2">
          To display your Discord Status on your profile, simply follow these
          steps:
        </div>
        <div className="space-y-1">
          <div>1. Join the Lanyard Discord server.</div>
          <div>2. Provide your Discord User ID.</div>
        </div>
      </div>
      <Tooltip content="The Lanyard Discord Server employs a bot for tracking your Discord status. By providing your user ID, we can access your Discord Status through their API endpoint at GET api.lanyard.rest/v1/users/:discord_user_id.">
        <span className="text-xs underline decoration-dotted underline-offset-2">
          Why is this necessary?
        </span>
      </Tooltip>
    </div>
  );
}
