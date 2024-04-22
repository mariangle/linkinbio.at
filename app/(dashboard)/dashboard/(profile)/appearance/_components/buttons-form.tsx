"use client";

import React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/biolink/button";
import type { ButtonOptions } from "@/types";
import {
  BackgroundMedia,
  BackgroundContainer,
} from "@/components/biolink/background";
import { dummyBiolink } from "@/constants/dummy";

export function ButtonsForm() {
  const [buttonConfig, setButtonConfig] = React.useState<ButtonOptions>({
    shadow: 0,
    text: {
      color: "#FFFFFF",
    },
    border: {
      color: "#000000",
      radius: 0,
      width: 0,
    },
    background: {
      color: "#000000",
      opacity: 0.5,
      blur: 50,
    },
    options: {
      socialBackgroundColor: false,
      socialIconColor: false,
      hideIcon: false,
      hideText: false,
    },
  });

  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Buttons</h2>
      <BackgroundContainer className="relative h-fit overflow-hidden rounded-xl">
        <BackgroundMedia
          url={dummyBiolink.config.background.url}
          className="absolute"
        />
        <div className="relative mx-auto max-w-md p-4">
          <Button
            item={{
              title: "Facebook",
              url: "https://facebook.com",
            }}
            config={buttonConfig}
          />
        </div>
      </BackgroundContainer>
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 self-end">
                <Label>Background Color</Label>
                <ColorPicker
                  color={buttonConfig.background.color}
                  setColor={(backgroundColor) =>
                    setButtonConfig({
                      ...buttonConfig,
                      background: {
                        ...buttonConfig.background,
                        color: backgroundColor,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2 self-end">
                <Label>Text Color</Label>
                <ColorPicker
                  color={buttonConfig.text.color}
                  setColor={(textColor) =>
                    setButtonConfig({
                      ...buttonConfig,
                      text: {
                        ...buttonConfig.text,
                        color: textColor,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Background Opacity</Label>
              <Slider
                min={0}
                max={1}
                step={0.01}
                defaultValue={[buttonConfig.background.opacity]}
                onValueChange={(backgroundOpacity) =>
                  setButtonConfig({
                    ...buttonConfig,
                    background: {
                      ...buttonConfig.background,
                      opacity: backgroundOpacity[0],
                    },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Backdrop Blur</Label>
              <Slider
                min={0}
                max={100}
                step={1}
                defaultValue={[buttonConfig.background.blur]}
                onValueChange={(backdropBlur) =>
                  setButtonConfig({
                    ...buttonConfig,
                    background: {
                      ...buttonConfig.background,
                      blur: backdropBlur[0],
                    },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Shadow</Label>
              <Slider
                min={0}
                max={25}
                step={1}
                defaultValue={[buttonConfig.shadow]}
                onValueChange={(shadow) =>
                  setButtonConfig({
                    ...buttonConfig,
                    shadow: shadow[0],
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Border Radius</Label>
              <Slider
                min={0}
                max={25}
                step={1}
                defaultValue={[buttonConfig.border.radius]}
                onValueChange={(radius) =>
                  setButtonConfig({
                    ...buttonConfig,
                    border: {
                      ...buttonConfig.border,
                      radius: radius[0],
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Hide Icon</div>
              <Switch
                checked={buttonConfig.options.hideIcon}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    options: {
                      ...buttonConfig.options,
                      hideIcon: !buttonConfig.options.hideIcon,
                      hideText: false,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Hide Text</div>
              <Switch
                checked={buttonConfig.options.hideText}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    options: {
                      ...buttonConfig.options,
                      hideText: !buttonConfig.options.hideText,
                      hideIcon: false,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Social Icon Color</div>
              <Switch
                checked={buttonConfig.options.socialIconColor}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    options: {
                      ...buttonConfig.options,
                      socialIconColor: !buttonConfig.options.socialIconColor,
                      socialBackgroundColor: false,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Social Background</div>
              <Switch
                checked={buttonConfig.options.socialBackgroundColor}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    options: {
                      ...buttonConfig.options,
                      socialBackgroundColor:
                        !buttonConfig.options.socialBackgroundColor,
                      socialIconColor: false,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
