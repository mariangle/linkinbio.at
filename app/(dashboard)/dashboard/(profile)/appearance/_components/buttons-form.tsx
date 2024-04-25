"use client";

import React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import { Switch } from "@/components/ui/switch";
import type { ButtonOptions } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function ButtonsForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [buttonConfig, setButtonConfig] = React.useState<ButtonOptions>({
    shadow: {
      solid: false,
      spreadRadius: 0,
    },
    text: {
      color: "#FFFFFF",
      hidden: false,
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
      socialIconColor: false,
    },
    icon: {
      hidden: false,
      shadow: false,
      socialIconColor: false,
      dropShadow: false,
    },
  });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        button: buttonConfig,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonConfig]);

  return (
    <div className="rounded-lg bg-secondary p-4">
      <h2 className="mb-2 font-semibold">Buttons</h2>
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="text-sm font-semibold">Content</div>
            <div className="space-y-2 self-end">
              <Label>Color</Label>
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
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Hide Text</div>
              <Switch
                checked={buttonConfig.text.hidden}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    text: {
                      ...buttonConfig.text,
                      hidden: !buttonConfig.text.hidden,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="mb-4 text-sm font-semibold">Background</div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Color</Label>
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
                <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm font-semibold">Social Background</div>
                  <Switch
                    checked={buttonConfig.background.socialIconColor}
                    onCheckedChange={() =>
                      setButtonConfig({
                        ...buttonConfig,
                        background: {
                          ...buttonConfig.background,
                          socialIconColor:
                            !buttonConfig.background.socialIconColor,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Opacity</Label>
                    <div className="text-xs">
                      {buttonConfig.background.opacity}
                    </div>
                  </div>
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
                  <div className="flex items-center justify-between">
                    <Label>Blur</Label>
                    <div className="text-xs">
                      {buttonConfig.background.blur}
                    </div>
                  </div>
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
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-4 text-sm font-semibold">Border</div>
              <div className="space-y-4">
                <div className="space-y-2 self-end">
                  <Label>Color</Label>
                  <ColorPicker
                    color={buttonConfig.border.color}
                    setColor={(borderColor) =>
                      setButtonConfig({
                        ...buttonConfig,
                        border: {
                          ...buttonConfig.border,
                          color: borderColor,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Radius</Label>
                    <div className="text-xs">
                      {buttonConfig.border.radius}px
                    </div>
                  </div>
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Width</Label>
                    <div className="text-xs">{buttonConfig.border.width}px</div>
                  </div>
                  <Slider
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={[buttonConfig.border.width]}
                    onValueChange={(width) =>
                      setButtonConfig({
                        ...buttonConfig,
                        border: {
                          ...buttonConfig.border,
                          width: width[0],
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-4 text-sm font-semibold">Shadow</div>
            <div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Spread Radius</Label>
                  <div className="text-xs">
                    {buttonConfig.shadow.spreadRadius}px
                  </div>
                </div>
                <Slider
                  min={0}
                  max={25}
                  step={1}
                  defaultValue={[buttonConfig.shadow.spreadRadius]}
                  onValueChange={(shadow) =>
                    setButtonConfig({
                      ...buttonConfig,
                      shadow: {
                        ...buttonConfig.shadow,
                        spreadRadius: shadow[0],
                      },
                    })
                  }
                />
              </div>
              <div className="mt-4 flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
                <div className="text-sm font-semibold">Solid Offset</div>
                <Switch
                  checked={buttonConfig.shadow.solid}
                  onCheckedChange={() =>
                    setButtonConfig({
                      ...buttonConfig,
                      shadow: {
                        ...buttonConfig.shadow,
                        solid: !buttonConfig.shadow.solid,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 rounded-lg border p-4">
          <div className="mb-4 text-sm font-semibold">Icon</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Hide</div>
              <Switch
                checked={buttonConfig.icon.hidden}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    icon: {
                      ...buttonConfig.icon,
                      hidden: !buttonConfig.icon.hidden,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold">Social Media Color</div>
              <Switch
                checked={buttonConfig.icon.socialIconColor}
                onCheckedChange={() =>
                  setButtonConfig({
                    ...buttonConfig,
                    icon: {
                      ...buttonConfig.icon,
                      socialIconColor: !buttonConfig.icon.socialIconColor,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-semibold">Shadow</div>
            <Switch
              checked={buttonConfig.icon.dropShadow}
              onCheckedChange={() =>
                setButtonConfig({
                  ...buttonConfig,
                  icon: {
                    ...buttonConfig.icon,
                    dropShadow: !buttonConfig.icon.dropShadow,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
