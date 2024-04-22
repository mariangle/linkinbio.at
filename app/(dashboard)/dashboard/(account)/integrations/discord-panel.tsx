import { FaDiscord } from "react-icons/fa";
import { DiscordForm } from "./discord-form";
import { Tooltip } from "@/components/ui/tooltip";

export function DiscordPanel() {
  return (
    <div className="rounded-xl border border-indigo-500/10 bg-black bg-gradient-to-br from-indigo-500/5 to-indigo-500/30 p-4">
      <div className="flex flex-col items-start gap-2">
        <FaDiscord className="size-8 text-[#5865F2]" />
        <h2 className="mb-1 text-xl font-semibold text-white">
          Discord Presence
        </h2>
      </div>
      <p className="text-sm text-slate-300">
        Display your Discord status on your profile.
      </p>
      <DiscordForm />
    </div>
  );
}
