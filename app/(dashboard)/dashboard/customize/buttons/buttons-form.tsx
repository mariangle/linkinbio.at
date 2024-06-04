"use client";

import React from "react";

import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { useBiolinkPreviewStore } from "@/lib/store";
import {
  FormHeading,
  FormFooter,
  FormActions,
} from "@/components/dashboard/form";
import { FontPicker } from "@/components/font-picker";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Button as ExampleButton } from "@/components/biolink/button";
import { ButtonTemplates } from "./button-templates";
import { ButtonsFormSchema, ButtonsFormValues } from "@/lib/validations";
import { ButtonOptions, Font } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ColorPicker } from "@/components/color-picker";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function ButtonsForm({ data }: { data: ButtonOptions }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<ButtonsFormValues>({
    resolver: zodResolver(ButtonsFormSchema),
    defaultValues: {
      shadowSolid: data?.shadow.solid,
      shadowSpreadRadius: data?.shadow.spreadRadius,
      shadowColor: data?.shadow.color,
      fontColor: data?.font.color,
      fontFamily: data?.font.family,
      fontShadow: data?.font.shadow,
      textHidden: data?.text.hidden,
      borderColor: data?.border.color,
      borderRadius: data?.border.radius,
      borderWidth: data?.border.width,
      backgroundColor: data?.background.color,
      backgroundOpacity: data?.background.opacity,
      backgroundBlur: data?.background.blur,
      backgroundSocialColor: data?.background.socialColor,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ButtonsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/buttons",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            buttons: {
              shadow: {
                solid: value.shadowSolid ?? data?.shadow.solid,
                spreadRadius:
                  value.shadowSpreadRadius ?? data?.shadow.spreadRadius,
                color: value.shadowColor ?? data?.shadow.color,
              },
              font: {
                family: (value.fontFamily as Font) ?? data?.font.family,
                color: value.fontColor ?? data?.font.color,
                shadow: value.fontShadow ?? data?.font.shadow,
              },
              text: {
                hidden: value.textHidden ?? data?.text.hidden,
              },
              border: {
                color: value.borderColor ?? data?.border.color,
                radius: value.borderRadius ?? data?.border.radius,
                width: value.borderWidth ?? data?.border.width,
              },
              background: {
                color: value.backgroundColor ?? data?.background.color,
                opacity: value.backgroundOpacity ?? data?.background.opacity,
                blur: value.backgroundBlur ?? data?.background.blur,
                socialColor:
                  value.backgroundSocialColor ?? data?.background.socialColor,
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

  const onCancel = () => {
    form.reset();
  };

  const setButtonValues = (
    button: ButtonOptions,
    form: UseFormReturn<ButtonsFormValues>,
  ) => {
    const { shadow, text, border, background, font } = button;

    form.setValue("shadowSolid", shadow.solid);
    form.setValue("shadowSpreadRadius", shadow.spreadRadius);
    form.setValue("shadowColor", shadow.color);
    form.setValue("fontColor", font.color);
    form.setValue("fontShadow", font.shadow);
    form.setValue("fontFamily", font.family);
    form.setValue("textHidden", text.hidden);
    form.setValue("borderColor", border.color);
    form.setValue("borderRadius", border.radius);
    form.setValue("borderWidth", border.width);
    form.setValue("backgroundColor", background.color);
    form.setValue("backgroundOpacity", background.opacity);
    form.setValue("backgroundBlur", background.blur);
    form.setValue("backgroundSocialColor", background.socialColor);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormHeading>Templates</FormHeading>
        <ButtonTemplates onSelect={(button) => setButtonValues(button, form)} />
        <FormHeading>Customize</FormHeading>
        <div className="flex flex-col rounded-lg bg-secondary/25 p-2 md:flex-row">
          <div className="grid w-full place-content-center rounded-lg bg-secondary/35 p-4">
            <div className="pointer-events-none w-full max-w-xs">
              <ExampleButton
                item={{
                  url: "https://fake.com",
                  archived: false,
                  title: "Example Button",
                  iconName: "FaPalette",
                }}
                config={{
                  text: {
                    hidden: form.watch("textHidden"),
                  },
                  font: {
                    family: form.watch("fontFamily") as Font,
                    color: form.watch("fontColor"),
                    shadow: form.watch("fontShadow"),
                  },
                  shadow: {
                    solid: form.watch("shadowSolid"),
                    spreadRadius: form.watch("shadowSpreadRadius"),
                    color: form.watch("shadowColor"),
                  },
                  background: {
                    color: form.watch("backgroundColor"),
                    opacity: form.watch("backgroundOpacity"),
                    blur: form.watch("backgroundBlur"),
                    socialColor: form.watch("backgroundSocialColor"),
                  },
                  border: {
                    radius: form.watch("borderRadius"),
                    width: form.watch("borderWidth"),
                    color: form.watch("borderColor"),
                  },
                }}
              />
            </div>
          </div>
          <div className="p-4 md:w-[340px]">
            <Tabs defaultValue="font">
              <TabsList className="mb-4">
                <TabsTrigger value="font">Font</TabsTrigger>
                <TabsTrigger value="background" className="gap-2">
                  Background
                </TabsTrigger>
                <TabsTrigger value="border" className="gap-2">
                  Border
                </TabsTrigger>
                <TabsTrigger value="shadow" className="gap-2">
                  Shadow
                </TabsTrigger>
              </TabsList>
              <TabsContent value="font">
                <div className="space-y-4">
                  <Label>Text Color</Label>
                  <ColorPicker
                    color={form.getValues("fontColor")}
                    setColor={(color) => form.setValue("fontColor", color)}
                  />
                  <div className="w-full space-y-2">
                    <Label>Font</Label>
                    <FontPicker
                      font={form.getValues("fontFamily") as Font}
                      setFont={(font) => {
                        form.setValue("fontFamily", font);
                      }}
                    />
                  </div>
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
                </div>
              </TabsContent>
              <TabsContent value="background">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
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
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Detect Social Media
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
                    <div className="text-xs text-muted-foreground">
                      Social media links will automatically change the
                      background color to match the platform.
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Background Opacity</Label>
                      <div className="text-xs">
                        {(
                          form.getValues("backgroundOpacity") ?? 0 * 100
                        ).toFixed(0)}
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
              </TabsContent>
              <TabsContent value="border">
                <div className="space-y-6">
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
                          type="button"
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
                          type="button"
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
              </TabsContent>
              <TabsContent value="shadow">
                <div>
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
                        defaultValue={[
                          form.getValues("shadowSpreadRadius") ?? 0,
                        ]}
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <FormFooter>
          <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
        </FormFooter>
      </form>
    </Form>
  );
}
