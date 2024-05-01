"use client";

import React from "react";

import { useFormSubmit } from "@/hooks/use-form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/color-picker";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ButtonTemplates } from "./button-templates";
import { Paintbrush } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonOptions } from "@/lib/types";

export function ButtonsForm({
  data,
  modified,
}: {
  data: {
    shadowSolid: boolean;
    shadowSpreadRadius: number;
    shadowColor: string;
    textColor: string;
    textHidden: boolean;
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    backgroundColor: string;
    backgroundOpacity: number;
    backgroundBlur: number;
    backgroundSocialColor: boolean;
    iconHidden: boolean;
    iconShadow: boolean;
    iconSocialColor: boolean;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();

  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: data.shadowSolid,
      shadowSpreadRadius: data.shadowSpreadRadius,
      shadowColor: data.shadowColor,
      textColor: data.textColor,
      textHidden: data.textHidden,
      borderColor: data.borderColor,
      borderRadius: data.borderRadius,
      borderWidth: data.borderWidth,
      backgroundColor: data.backgroundColor,
      backgroundOpacity: data.backgroundOpacity,
      backgroundBlur: data.backgroundBlur,
      backgroundSocialColor: data.backgroundSocialColor,
      iconHidden: data.iconHidden,
      iconShadow: data.iconShadow,
      iconSocialColor: data.iconSocialColor,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ButtonsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/button",
    modified,
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            button: {
              shadow: {
                solid: value.shadowSolid ?? data.shadowSolid,
                spreadRadius:
                  value.shadowSpreadRadius ?? data.shadowSpreadRadius,
                color: value.shadowColor ?? data.shadowColor,
              },
              text: {
                color: value.textColor ?? data.textColor,
                hidden: value.textHidden ?? data.textHidden,
              },
              border: {
                color: value.borderColor ?? data.borderColor,
                radius: value.borderRadius ?? data.borderRadius,
                width: value.borderWidth ?? data.borderWidth,
              },
              background: {
                color: value.backgroundColor ?? data.backgroundColor,
                opacity: value.backgroundOpacity ?? data.backgroundOpacity,
                blur: value.backgroundBlur ?? data.backgroundBlur,
                socialColor:
                  value.backgroundSocialColor ?? data.backgroundSocialColor,
              },
              icon: {
                hidden: value.iconHidden ?? data.iconHidden,
                shadow: value.iconShadow ?? data.iconShadow,
                socialColor: value.iconSocialColor ?? data.iconSocialColor,
              },
            },
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  const onSubmit = async () => {
    await submit();
  };

  const setButtonValues = (button: ButtonOptions, form: any) => {
    const { shadow, text, border, background, icon } = button;

    form.setValue("shadowSolid", shadow.solid);
    form.setValue("shadowSpreadRadius", shadow.spreadRadius);
    form.setValue("shadowColor", shadow.color);
    form.setValue("textColor", text.color);
    form.setValue("textHidden", text.hidden);
    form.setValue("borderColor", border.color);
    form.setValue("borderRadius", border.radius);
    form.setValue("borderWidth", border.width);
    form.setValue("backgroundColor", background.color);
    form.setValue("backgroundOpacity", background.opacity);
    form.setValue("backgroundBlur", background.blur);
    form.setValue("backgroundSocialColor", background.socialColor);
    form.setValue("iconHidden", icon.hidden);
    form.setValue("iconShadow", icon.shadow);
    form.setValue("iconSocialColor", icon.socialColor);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Buttons</FormHeading>
            <div className="text-sm text-muted-foreground">Templates</div>
            <ButtonTemplates
              onSelect={(button) => setButtonValues(button, form)}
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
                        <div className="whitespace-nowrap">
                          Text and Background
                        </div>
                        <div className="h-px w-full bg-border"></div>
                      </div>
                      <div className="my-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <Label>Text Color</Label>
                            <ColorPicker
                              color={form.getValues("textColor")}
                              setColor={(color) =>
                                form.setValue("textColor", color)
                              }
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
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="text-sm text-muted-foreground">
                            Toggle Social Media Background for social links
                          </div>
                          <FormField
                            control={form.control}
                            name="backgroundSocialColor"
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
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label>Background Opacity</Label>
                            <div className="text-xs">
                              {form.getValues("backgroundOpacity")}
                            </div>
                          </div>
                          <Slider
                            min={0}
                            max={1}
                            step={0.01}
                            defaultValue={[form.getValues("backgroundOpacity")]}
                            onValueChange={(backgroundOpacity) =>
                              form.setValue(
                                "backgroundOpacity",
                                backgroundOpacity[0],
                              )
                            }
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label>Background Blur</Label>
                            <div className="text-xs">
                              {form.getValues("backgroundBlur")}
                            </div>
                          </div>
                          <Slider
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={[form.getValues("backgroundBlur")]}
                            onValueChange={(backdropBlur) =>
                              form.setValue("backgroundBlur", backdropBlur[0])
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
                            color={form.getValues("borderColor")}
                            setColor={(color) =>
                              form.setValue("borderColor", color)
                            }
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label>Border Width</Label>
                            <div className="text-xs">
                              {form.getValues("borderWidth")}
                            </div>
                          </div>
                          <Slider
                            min={0}
                            max={5}
                            step={1}
                            defaultValue={[form.getValues("borderWidth")]}
                            onValueChange={(borderWidth) =>
                              form.setValue("borderWidth", borderWidth[0])
                            }
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label>Border Radius</Label>
                            <div className="text-xs">
                              {form.getValues("borderRadius")}
                            </div>
                          </div>
                          <Slider
                            min={0}
                            max={25}
                            step={5}
                            defaultValue={[form.getValues("borderRadius")]}
                            onValueChange={(borderRadius) =>
                              form.setValue("borderRadius", borderRadius[0])
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
                              {form.getValues("shadowSpreadRadius")}px
                            </div>
                          </div>
                          <Slider
                            min={0}
                            max={25}
                            step={1}
                            defaultValue={[
                              form.getValues("shadowSpreadRadius"),
                            ]}
                            onValueChange={(shadow) =>
                              form.setValue("shadowSpreadRadius", shadow[0])
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            Override with solid offset shadow
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
                        <div className="whitespace-nowrap">
                          Advanced Options
                        </div>
                        <div className="h-px w-full bg-border"></div>
                      </div>
                      <div className="my-6 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            Hide Text
                          </div>
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
                            Hide Icon
                          </div>
                          <FormField
                            control={form.control}
                            name="iconHidden"
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
                            Social Media Icon Color
                          </div>
                          <FormField
                            control={form.control}
                            name="iconSocialColor"
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
                            Icon Shadow
                          </div>
                          <FormField
                            control={form.control}
                            name="iconShadow"
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
          </FormContent>
          <FormFooter>
            <Button loading={loading} disabled={!dirty}>
              Save Changes
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
