"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { SpotifyAlbumOptions, SpotifyTrackOptions } from "@/types";
import { Label } from "@/components/ui/label";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

export function SpotifyForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [expanded, setExpanded] = React.useState(false);
  const [albumOptions, setAlbumOptions] = React.useState<SpotifyAlbumOptions>({
    albumId: "",
    enabled: false,
    darkMode: false,
    compactLayout: false,
  });

  const [trackOptions, setTrackOptions] = React.useState<SpotifyTrackOptions>({
    trackId: "",
    enabled: false,
    darkMode: false,
  });

  const updateTrack = () => {};

  const updateAlbum = () => {};

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      modules: {
        ...biolink.modules,
        spotify: {
          track: trackOptions,
          album: albumOptions,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackOptions, albumOptions]);

  return (
    <div className="rounded-lg bg-neutral-800 bg-gradient-to-r from-green-500/20 p-4 text-white">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2 font-semibold">
          <FaSpotify className="size-5 text-green-500" />
          Spotify
        </div>
        <ChevronDown
          className={cn(
            "size-5  rotate-0 text-green-500 duration-300",
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
                  placeholder="Enter Spotify track ID"
                  value={trackOptions.trackId}
                  onChange={(e) =>
                    setTrackOptions({
                      ...trackOptions,
                      trackId: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-300">Dark Background</div>
                <Checkbox
                  className="border-green-500 data-[state=checked]:bg-green-500"
                  checked={trackOptions.darkMode}
                  onCheckedChange={() =>
                    setTrackOptions({
                      ...trackOptions,
                      darkMode: !trackOptions.darkMode,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-lg border border-green-500/5 bg-green-500/20 p-3">
                <div className="text-sm font-semibold">Enable</div>
                <Switch
                  className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-neutral-800"
                  checked={trackOptions.enabled}
                  onCheckedChange={() =>
                    setTrackOptions({
                      ...trackOptions,
                      enabled: !trackOptions.enabled,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-end gap-4">
                <button className="transform rounded-full bg-neutral-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-neutral-600">
                  Delete
                </button>
                <button
                  onClick={updateTrack}
                  className="transform rounded-full bg-green-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-green-300/20 to-neutral-600"></div>
              <div className="space-y-2">
                <Label className="text-white">Album ID</Label>
                <Input
                  className="border-none bg-neutral-900 placeholder:text-neutral-400 focus-visible:ring-0"
                  placeholder="Enter Spotify album ID"
                  value={albumOptions.albumId}
                  onChange={(e) =>
                    setAlbumOptions({
                      ...albumOptions,
                      albumId: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300">
                    Dark Background
                  </div>
                  <Checkbox
                    className="border-green-500 data-[state=checked]:bg-green-500"
                    checked={albumOptions.darkMode}
                    onCheckedChange={() =>
                      setAlbumOptions({
                        ...albumOptions,
                        darkMode: !albumOptions.darkMode,
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300">Compact Layout</div>
                  <Checkbox
                    className="border-green-500 data-[state=checked]:bg-green-500"
                    checked={albumOptions.compactLayout}
                    onCheckedChange={() =>
                      setAlbumOptions({
                        ...albumOptions,
                        compactLayout: !albumOptions.compactLayout,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-lg border border-green-500/5 bg-green-500/20 p-3">
                <div className="text-sm font-semibold">Enable</div>
                <Switch
                  className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-neutral-800"
                  checked={albumOptions.enabled}
                  onCheckedChange={() =>
                    setAlbumOptions({
                      ...albumOptions,
                      enabled: !albumOptions.enabled,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-end gap-4">
                <button className="transform rounded-full bg-neutral-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-neutral-600">
                  Delete
                </button>
                <button
                  onClick={updateAlbum}
                  className="transform rounded-full bg-green-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-green-600"
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
