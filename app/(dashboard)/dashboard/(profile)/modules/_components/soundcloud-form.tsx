"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaSoundcloud } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SoundcloudOptions } from "@/lib/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function SoundcloudForm() {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [expanded, setExpanded] = React.useState(false);
  const [soundcloudOptions, setSoundcloudOptions] =
    React.useState<SoundcloudOptions>({
      trackId: "",
      enabled: false,
    });

  const update = () => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      modules: {
        ...biolink.modules,
        soundcloud: soundcloudOptions,
      },
    });
  };

  return (
    <div className="rounded-lg bg-neutral-800 bg-gradient-to-r from-orange-500/20 p-4 text-white">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2 font-semibold">
          <FaSoundcloud className="size-5 text-orange-500" />
          Soundcloud
        </div>
        <ChevronDown
          className={cn(
            "size-5 rotate-0 text-orange-500 duration-300",
            expanded && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <Label className="text-white">Track ID</Label>
                <Input
                  className="border-none bg-neutral-900 placeholder:text-neutral-400 focus-visible:ring-0"
                  placeholder="Enter Soundcloud track ID"
                  value={soundcloudOptions.trackId}
                  onChange={(e) =>
                    setSoundcloudOptions({
                      ...soundcloudOptions,
                      trackId: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-lg border border-orange-500/5 bg-orange-500/20 p-3">
                <div className="text-sm font-semibold">Enable</div>
                <Switch
                  className="data-[state=checked]:bg-orange-600 data-[state=unchecked]:bg-neutral-800"
                  checked={soundcloudOptions.enabled}
                  onCheckedChange={() =>
                    setSoundcloudOptions({
                      ...soundcloudOptions,
                      enabled: !soundcloudOptions.enabled,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={update}
                  className="transform rounded-full bg-neutral-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-neutral-600"
                >
                  Delete
                </button>
                <button
                  onClick={update}
                  className="transform rounded-full bg-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-orange-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
