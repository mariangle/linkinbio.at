"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import { EffectsOptions } from "@/types";

export function EffectsForm() {
  const [visualsOptions, setVisualOptions] = React.useState<
    Pick<EffectsOptions, "bioTypewriter" | "titleTypewriter" | "titleSparkles">
  >({
    titleSparkles: false,
    titleTypewriter: false,
    bioTypewriter: false,
  });

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="text-sm font-semibold">Typography Effects</div>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">Title Sparkles Effect</div>
          <Switch
            checked={visualsOptions.titleSparkles}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                titleSparkles: !visualsOptions.titleSparkles,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">Title Typewriter Effect</div>
          <Switch
            checked={visualsOptions.titleTypewriter}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                titleTypewriter: !visualsOptions.titleTypewriter,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">Bio Typewriter Effect</div>
          <Switch
            checked={visualsOptions.bioTypewriter}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                bioTypewriter: !visualsOptions.bioTypewriter,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
