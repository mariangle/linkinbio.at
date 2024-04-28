"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { YoutubeOptions } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function YoutubeForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [expanded, setExpanded] = React.useState(false);
  const [youtubeOptions, setYoutubeOptions] = React.useState<YoutubeOptions>({
    videoId: "",
    enabled: true,
  });

  const update = () => {};

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      modules: {
        ...biolink.modules,
        youtube: youtubeOptions,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtubeOptions]);

  return (
    <div className="rounded-lg bg-neutral-800 bg-gradient-to-r from-red-500/20 p-4 text-white">
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between"
        >
          <div className="flex items-center gap-2 font-semibold">
            <FaYoutube className="size-5 text-red-500" />
            Youtube
          </div>
          <ChevronDown
            className={cn(
              "size-5 rotate-0 text-red-500 duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>
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
                <Label className="text-white">Video ID</Label>
                <Input
                  className="border-none bg-neutral-900 placeholder:text-neutral-400 focus-visible:ring-0"
                  placeholder="Enter Youtube track ID"
                  value={youtubeOptions.videoId}
                  onChange={(e) =>
                    setYoutubeOptions({
                      ...youtubeOptions,
                      videoId: e.target.value,
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
                <button className="transform rounded-full bg-red-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-red-600">
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
