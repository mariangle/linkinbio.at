"use client";
import * as React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "@/components/ui/color-picker";
import { BackgroundOptions } from "@/types";
import { dummyBiolink } from "@/constants/dummy";

import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContainerOptions } from "@/components/biolink/container";

export function BackgroundForm() {
  const [backgroundUrl, setBackgroundUrl] = React.useState(
    dummyBiolink.config.background.url ?? "",
  );
  const [backgroundOptions, setBackgroundOptions] =
    React.useState<BackgroundOptions>({
      color: dummyBiolink.config.background.color ?? "#FFFFFF",
      url: "",
    });

  const [containerOptions, setContainerOptions] =
    React.useState<ContainerOptions>({
      blur: 0.5,
      radius: 0,
      opacity: 1,
      color: "#000000",
    });

  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Background</h2>
      <BackgroundContainer
        color={backgroundOptions.color}
        className="h-48 w-full overflow-hidden rounded-xl bg-background p-4"
      >
        <BackgroundMedia url={backgroundUrl} className="rounded-lg" />
      </BackgroundContainer>
      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label>Background URL</Label>
          <Input
            value={backgroundUrl}
            onChange={(e) => setBackgroundUrl(e.target.value)}
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
