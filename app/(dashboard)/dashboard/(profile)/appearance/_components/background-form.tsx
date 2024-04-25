"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "@/components/ui/color-picker";
import { BackgroundOptions } from "@/types";
import { dummyBiolink } from "@/constants/dummy";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function BackgroundForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();

  const [backgroundOptions, setBackgroundOptions] =
    React.useState<BackgroundOptions>({
      color: dummyBiolink.config.background.color ?? "#FFFFFF",
      url: "",
    });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        background: backgroundOptions,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundOptions]);

  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Background</h2>
      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label>Background URL</Label>
          <Input
            value={backgroundOptions.url}
            onChange={(e) => {
              setBackgroundOptions({
                ...backgroundOptions,
                url: e.target.value,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPicker
            color={backgroundOptions.color}
            setColor={(color) =>
              setBackgroundOptions({
                ...backgroundOptions,
                color,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
