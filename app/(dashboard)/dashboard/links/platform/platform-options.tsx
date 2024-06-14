"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Platform, platforms } from "@/lib/constants/platforms";
import { TopIcon } from "@/components/biolink/icon";
import { Input } from "@/components/ui/input";
import { NewPlatformLinkForm } from "./new-platform-link-form";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";

export function PlatformOptions() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform>();

  if (!open) {
    return (
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        <Plus className="mr-3 size-3" />
        Add a new platform
      </Button>
    );
  }

  return (
    <div className="glassmorphism-secondary relative rounded-2xl">
      <button
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => {
          setOpen(false);
        }}
      >
        <X className="size-3" />
      </button>
      <div className="space-y-4 p-4">
        <h3 className="text-sm font-semibold text-white">Connect platform</h3>
        <Input
          placeholder="Search for a platform"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform, index) => {
            const selected = selectedPlatform?.name === platform.name;
            if (platform.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div
                  key={index}
                  className={cn(
                    "glassmorphism-secondary rounded-2xl border-2 p-2 hover:bg-white/10 dark:hover:bg-white/5",
                    selected && "!bg-white/25 dark:!bg-white/10",
                  )}
                  role="button"
                  onClick={() =>
                    selected
                      ? setSelectedPlatform(undefined)
                      : setSelectedPlatform(platform)
                  }
                >
                  <TopIcon
                    options={{
                      size: "small",
                      backgroundRadius: "full",
                      shadow: false,
                      color: "white",
                    }}
                    item={{
                      provider: platform.name,
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      {selectedPlatform && (
        <div className="border-t border-white/10 p-4 dark:border-white/5">
          <NewPlatformLinkForm
            platform={selectedPlatform}
            close={() => {
              setSelectedPlatform(undefined);
            }}
          />
        </div>
      )}
    </div>
  );
}
