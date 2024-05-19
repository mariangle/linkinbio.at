import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ColorPicker } from "@/components/color-picker";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ButtonsFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ButtonCustomizerSheet({
  form,
  children,
}: {
  form: UseFormReturn<ButtonsFormValues>;
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Button Customization</SheetTitle>
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
                      color={form.getValues("fontColor")}
                      setColor={(color) => form.setValue("fontColor", color)}
                    />
                  </div>
                  <div className="space-y-4">
                    <Label>Background Color</Label>
                    <ColorPicker
                      color={form.getValues("backgroundColor")}
                      setColor={(color) =>
                        form.setValue("backgroundColor", color)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Background Opacity</Label>
                    <div className="text-xs">
                      {(form.getValues("backgroundOpacity") ?? 0 * 100).toFixed(
                        0,
                      )}
                      %
                    </div>
                  </div>
                  <Slider
                    min={0}
                    max={1}
                    step={0.05}
                    defaultValue={[form.getValues("backgroundOpacity") ?? 0]}
                    onValueChange={(backgroundOpacity) =>
                      form.setValue("backgroundOpacity", backgroundOpacity[0])
                    }
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Background Blur</Label>
                    <div className="text-xs">
                      {form.getValues("backgroundBlur")}%
                    </div>
                  </div>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={[form.getValues("backgroundBlur") ?? 0]}
                    onValueChange={(backdropBlur) =>
                      form.setValue("backgroundBlur", backdropBlur[0])
                    }
                  />
                  <div className="text-xs text-muted-foreground">
                    Looks best with background images. Ensure you have lowered
                    opacity for background opacity to be visible.
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
                    color={form.getValues("borderColor")}
                    setColor={(color) => form.setValue("borderColor", color)}
                  />
                </div>
                <div className="space-y-4">
                  <Label>Border Width</Label>
                  <div className="grid grid-cols-6 gap-2">
                    {[
                      {
                        label: "0px",
                        value: 0,
                      },
                      {
                        label: "1px",
                        value: 1,
                      },
                      {
                        label: "2px",
                        value: 2,
                      },
                      {
                        label: "3px",
                        value: 3,
                      },
                      {
                        label: "4px",
                        value: 4,
                      },
                      {
                        label: "5px",
                        value: 5,
                      },
                    ].map((radius, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() =>
                          form.setValue("borderWidth", radius.value)
                        }
                        className={cn(
                          "rounded-lg px-3 py-1 text-xs",
                          form.getValues("borderWidth") === radius.value &&
                            "ring-1 ring-foreground/50",
                        )}
                      >
                        {radius.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <Label>Border Radius</Label>
                  <div className="grid grid-cols-6 gap-2">
                    {[
                      {
                        label: "0",
                        value: 0,
                      },
                      {
                        label: "0.2",
                        value: 5,
                      },
                      {
                        label: "0.4",
                        value: 10,
                      },
                      {
                        label: "0.6",
                        value: 15,
                      },
                      {
                        label: "0.8",
                        value: 20,
                      },
                      {
                        label: "1",
                        value: 25,
                      },
                    ].map((radius, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() =>
                          form.setValue("borderRadius", radius.value)
                        }
                        className={cn(
                          "rounded-lg px-3 py-1 text-xs",
                          form.getValues("borderRadius") === radius.value &&
                            "ring-1 ring-foreground/50",
                        )}
                      >
                        {radius.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* SHADOW */}
            <div>
              <div className="my-4 flex items-center gap-4 text-base font-semibold">
                <div className="whitespace-nowrap">Shadow</div>
                <div className="h-px w-full bg-border"></div>
              </div>
              <div className="space-y-4">
                <Label>Shadow Color</Label>
                <ColorPicker
                  color={form.getValues("shadowColor")}
                  setColor={(color) => form.setValue("shadowColor", color)}
                />
              </div>
              <div className="my-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>
                      Shadow{" "}
                      {form.getValues("shadowSolid") === true
                        ? "Offset"
                        : "Width"}
                    </Label>
                    <div className="text-xs">
                      {form.getValues("shadowSpreadRadius")}px
                    </div>
                  </div>
                  <Slider
                    min={0}
                    max={25}
                    step={1}
                    defaultValue={[form.getValues("shadowSpreadRadius") ?? 0]}
                    onValueChange={(shadow) =>
                      form.setValue("shadowSpreadRadius", shadow[0])
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Solid shadow
                  </div>
                  <FormField
                    control={form.control}
                    name="shadowSolid"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
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
                  <div className="text-sm text-muted-foreground">Hide Text</div>
                  <FormField
                    control={form.control}
                    name="textHidden"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Font Shadow
                  </div>
                  <FormField
                    control={form.control}
                    name="fontShadow"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Social Media Background Color
                  </div>
                  <FormField
                    control={form.control}
                    name="backgroundSocialColor"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
