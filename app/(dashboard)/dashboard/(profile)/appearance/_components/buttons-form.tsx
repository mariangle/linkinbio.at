"use client";

import React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/color-picker";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import type { ButtonOptions } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { ButtonTemplates } from "./button-templates";
import { Paintbrush, PencilRuler, Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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
      opacity: 1,
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
    <FormContainer>
      <FormContent>
        <FormHeading>Buttons</FormHeading>
        <div className="text-sm text-muted-foreground">Templates</div>
        <ButtonTemplates
          onSelect={(button) => {
            setButtonConfig(button);
            alert("Button template selected");
          }}
        />
        <div className="text-sm text-muted-foreground">Custom</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" variant="secondary" className="border">
              <Paintbrush className="mr-2 size-4" />
              Customize
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">
                Button Customization
              </SheetTitle>
              <div>
                {/* Background and text */}
                <div>
                  <div className="my-4 flex items-center gap-4 text-base font-semibold">
                    <div className="whitespace-nowrap">Text and Background</div>
                    <div className="h-px w-full bg-border"></div>
                  </div>
                  <div className="my-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
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
                      <div className="space-y-4">
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
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="text-sm text-muted-foreground">
                        Toggle Social Media Background for social links
                      </div>
                      <Checkbox
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Background Opacity</Label>
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Background Blur</Label>
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
                      <div className="text-xs text-muted-foreground">
                        Looks best with background images. Ensure you have
                        lowered opacity for background opacity.
                      </div>
                    </div>
                  </div>
                </div>
                {/* BORDER */}
                <div>
                  <div className="my-4 flex items-center gap-4 text-base font-semibold">
                    <div className="whitespace-nowrap">Border</div>
                    <div className="h-px w-full bg-border"></div>
                  </div>
                  <div className="my-6 space-y-6">
                    <div className="space-y-4">
                      <Label>Border Color</Label>
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Border Width</Label>
                        <div className="text-xs">
                          {buttonConfig.border.width}
                        </div>
                      </div>
                      <Slider
                        min={0}
                        max={5}
                        step={1}
                        defaultValue={[buttonConfig.border.width]}
                        onValueChange={(borderWidth) =>
                          setButtonConfig({
                            ...buttonConfig,
                            border: {
                              ...buttonConfig.border,
                              width: borderWidth[0],
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Border Radius</Label>
                        <div className="text-xs">
                          {buttonConfig.border.radius}
                        </div>
                      </div>
                      <Slider
                        min={0}
                        max={25}
                        step={5}
                        defaultValue={[buttonConfig.border.radius]}
                        onValueChange={(borderRadius) =>
                          setButtonConfig({
                            ...buttonConfig,
                            border: {
                              ...buttonConfig.border,
                              radius: borderRadius[0],
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* SHADOW */}
                <div>
                  <div className="my-4 flex items-center gap-4 text-base font-semibold">
                    <div className="whitespace-nowrap">Shadow</div>
                    <div className="h-px w-full bg-border"></div>
                  </div>
                  <div className="my-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Shadow Width</Label>
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
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Override with solid offset shadow
                      </div>
                      <Checkbox
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
                {/* ADVANCED OPTIONS */}
                <div>
                  <div className="my-4 flex items-center gap-4 text-base font-semibold">
                    <div className="whitespace-nowrap">Advanced Options</div>
                    <div className="h-px w-full bg-border"></div>
                  </div>
                  <div className="my-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Hide Text
                      </div>
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
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Hide Icon
                      </div>
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
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Social Media Icon Color
                      </div>
                      <Switch
                        checked={buttonConfig.icon.socialIconColor}
                        onCheckedChange={() =>
                          setButtonConfig({
                            ...buttonConfig,
                            icon: {
                              ...buttonConfig.icon,
                              socialIconColor:
                                !buttonConfig.icon.socialIconColor,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Icon Shadow
                      </div>
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
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </FormContent>
      <FormFooter>
        <Button>Save Changes</Button>
      </FormFooter>
    </FormContainer>
  );
}
