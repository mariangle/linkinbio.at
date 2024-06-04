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
} from "@/components/dashboard/form";
import { ImagePicker } from "@/components/image-picker";
import { BackgroundFormSchema, BackgroundFormValues } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackgroundOptions as BackgroundData } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type Tab = "solid" | "gradient";

export function BackgroundForm({ data }: { data?: BackgroundData }) {
  const [tab, setTab] = React.useState<Tab>(
    data?.gradient?.startColor && data?.gradient.endColor
      ? "gradient"
      : "solid",
  );
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<BackgroundFormValues>({
    resolver: zodResolver(BackgroundFormSchema),
    defaultValues: {
      color: data?.color,
      url: data?.url,
      gradientStartColor: data?.gradient?.startColor,
      gradientEndColor: data?.gradient?.endColor,
      gradientAngle: data?.gradient?.angle,
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
                startColor: value.gradientStartColor,
                endColor: value.gradientEndColor,
                angle: value.gradientAngle,
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

  React.useEffect(() => {
    if (tab === "solid") {
      form.setValue("gradientStartColor", "");
      form.setValue("gradientEndColor", "");
    }
  }, [tab, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormHeading>Background Media</FormHeading>
          <div className="space-y-2">
            <BackgroundMedia
              url={form.getValues("url")}
              className="h-[150px]"
            ></BackgroundMedia>
            <div className="flex w-full items-center gap-2">
              <ImagePicker
                setUrl={(url) => {
                  form.setValue("url", url || "");
                }}
              >
                <Button size="lg" className="w-full">
                  <div className="truncate whitespace-nowrap text-sm">
                    {form.getValues("url") ? "Change" : "Add Media"}
                  </div>
                </Button>
              </ImagePicker>
              {form.getValues("url") && (
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    form.setValue("url", "");
                  }}
                  className="w-full"
                >
                  <div className="truncate whitespace-nowrap text-sm">
                    Remove
                  </div>
                </Button>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Your chosen media will act as either a cover photo or replace the
              background, depending on the layout you select.
            </div>
          </div>
          <FormHeading>Background Color</FormHeading>
          <div className="flex flex-col rounded-lg bg-primary/10 p-4">
            <Tabs defaultValue={tab}>
              <TabsList className="mb-4">
                <TabsTrigger
                  value="solid"
                  onClick={() => {
                    setTab("solid");
                  }}
                >
                  Solid Color
                </TabsTrigger>
                <TabsTrigger
                  value="gradient"
                  onClick={() => {
                    setTab("gradient");
                  }}
                  className="gap-2"
                >
                  Gradient Color
                </TabsTrigger>
              </TabsList>
              <TabsContent value="solid">
                <div className="space-y-2">
                  <ColorPicker
                    color={form.getValues("color")}
                    setColor={(color) => form.setValue("color", color)}
                  />
                </div>
              </TabsContent>
              <TabsContent value="gradient">
                <div className="space-y-4">
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
                        small
                      />
                      <FaArrowRight className="size-4 text-input/50" />
                      <ColorPicker
                        color={form.getValues("gradientEndColor")}
                        setColor={(color) =>
                          form.setValue("gradientEndColor", color)
                        }
                        small
                      />
                    </div>
                  </div>
                  <div>
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
                        defaultValue={[form.getValues("gradientAngle") ?? 0]}
                        onValueChange={(angle) =>
                          form.setValue("gradientAngle", angle[0])
                        }
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <FormFooter>
          <FormActions loading={loading} cancel={onCancel} dirty={true} />
        </FormFooter>
      </form>
    </Form>
  );
}
