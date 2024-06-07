"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { useBiolinkPreviewStore } from "@/lib/store";
import { BackgroundMedia } from "@/components/biolink/background";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  FormHeading,
  FormFooter,
  FormActions,
  FormSwitch,
} from "@/components/dashboard/form";
import { ImagePicker } from "@/components/image-picker";
import { BackgroundFormSchema, BackgroundFormValues } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { BackgroundOptions as BackgroundData } from "@/lib/types";
import { FaArrowRight, FaFileImage } from "react-icons/fa";
import { X } from "lucide-react";
import { getExtensionFromURL } from "@/lib/utils/media-validation";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function BackgroundForm({ data }: { data: BackgroundData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<BackgroundFormValues>({
    resolver: zodResolver(BackgroundFormSchema),
    defaultValues: {
      color: data?.color,
      url: data?.url,
      gradientStartColor: data?.gradient?.startColor,
      gradientEndColor: data?.gradient?.endColor,
      gradientAngle: data?.gradient?.angle,
      gradientEnabled: data?.gradient?.enabled,
    },
  });

  const {
    loading,
    submit,
    cancel: clear,
  } = useFormSubmit<BackgroundFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/background",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            background: {
              color: value.color,
              url: value.url,
              gradient: {
                startColor:
                  value.gradientStartColor || data?.gradient?.startColor,
                endColor: value.gradientEndColor || data?.gradient?.endColor,
                angle: value.gradientAngle || data?.gradient?.angle,
                enabled: value.gradientEnabled || data?.gradient?.enabled,
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
    clear();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormHeading>Background Media</FormHeading>
          {form.getValues("url") ? (
            <div className="relative h-[200px] overflow-hidden rounded-2xl">
              <div className="absolute right-2 top-2 flex items-center gap-2">
                <div className="rounded-xl bg-black/50 px-3 py-1.5 uppercase backdrop-blur-2xl">
                  {getExtensionFromURL(form.getValues("url")!)}
                </div>
                <button
                  onClick={() => form.setValue("url", "")}
                  className="w-full rounded-xl bg-black/50 p-1.5 backdrop-blur-2xl duration-300 hover:bg-black/75"
                >
                  <X className="size-5 text-red-600" />
                </button>
              </div>
              <BackgroundMedia
                url={form.getValues("url")}
                className="h-full w-full"
              ></BackgroundMedia>
            </div>
          ) : (
            <ImagePicker
              setUrl={(url) => {
                form.setValue("url", url || "");
              }}
            >
              <button className="grid h-[200px] w-full place-content-center rounded-2xl border border-dashed border-white/25 bg-white/10 dark:bg-black/20">
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <FaFileImage className="size-6 text-white" />
                  <div>Choose Image</div>
                </div>
              </button>
            </ImagePicker>
          )}
          <div className="text-sm text-muted-foreground">
            Your chosen media will act as either a cover photo or replace the
            background, depending on the layout you select.
          </div>
          <FormHeading>Background Color</FormHeading>
          <div className="glassmorphism flex flex-col space-y-4 rounded-lg p-4">
            <div className="space-y-2">
              <ColorPicker
                color={form.getValues("color")}
                setColor={(color) => form.setValue("color", color)}
              />
              <FormSwitch title="Enable Gradient">
                <FormField
                  control={form.control}
                  name="gradientEnabled"
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
              </FormSwitch>
            </div>
            <div
              className={cn(
                "glassmorphism-secondary space-y-4 p-4",
                !form.watch("gradientEnabled") &&
                  "cursor-not-allowed opacity-50",
              )}
            >
              <div
                className="grid h-[80px] place-content-center rounded-lg"
                style={{
                  backgroundImage: `linear-gradient(${form.getValues("gradientAngle")}deg, ${form.getValues("gradientStartColor")}, ${form.getValues("gradientEndColor")})`,
                }}
              >
                <div className="flex items-center gap-4">
                  <ColorPicker
                    color={form.getValues("gradientStartColor")}
                    setColor={(color) =>
                      form.setValue("gradientStartColor", color)
                    }
                    disabled={!form.watch("gradientEnabled")}
                  />
                  <ColorPicker
                    color={form.getValues("gradientEndColor")}
                    setColor={(color) =>
                      form.setValue("gradientEndColor", color)
                    }
                    disabled={!form.watch("gradientEnabled")}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Direction</Label>
                  <div className="text-xs">
                    {form.getValues("gradientAngle")}°
                  </div>
                </div>
                <Slider
                  min={0}
                  max={180}
                  step={10}
                  defaultValue={[form.getValues("gradientAngle")]}
                  onValueChange={(angle) =>
                    form.setValue("gradientAngle", angle[0])
                  }
                  disabled={!form.watch("gradientEnabled")}
                />
              </div>
            </div>
          </div>
        </div>
        <FormFooter>
          <FormActions loading={loading} cancel={onCancel} dirty={true} />
        </FormFooter>
      </form>
    </Form>
  );
}
