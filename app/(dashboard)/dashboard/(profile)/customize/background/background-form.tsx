"use client";

import * as React from "react";
import { Image as ImageIcon } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { useBiolinkPreviewStore } from "@/lib/store";

import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  FormHeading,
  FormContainer,
  FormContent,
  FormFooter,
  FormActions,
} from "@/components/dashboard/form";
import { ImagePicker } from "@/components/image-picker";
import { BackgroundFormSchema, BackgroundFormValues } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackgroundOptions as BackgroundData } from "@/lib/types";

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

  const backgroundStyle =
    form.getValues("gradientStartColor") && form.getValues("gradientEndColor")
      ? {
          backgroundImage: `linear-gradient(${form.getValues("gradientAngle")}deg, ${form.getValues("gradientStartColor")}, ${form.getValues("gradientEndColor")})`,
        }
      : { backgroundColor: form.getValues("color") };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Background</FormHeading>
            <div className="space-y-2">
              <ImagePicker
                url={form.getValues("url")}
                setUrl={(url) => {
                  form.setValue("url", url || "");
                }}
              >
                <button className="border-glass flex w-full items-center gap-2 rounded-lg border bg-input/50 px-2 py-3">
                  <ImageIcon className="size-4 text-muted-foreground" />
                  <div className="truncate whitespace-nowrap text-sm">
                    {form.getValues("url") || "Add a background image"}
                  </div>
                </button>
              </ImagePicker>
              <div className="text-sm text-muted-foreground">
                The image will serve as either a cover photo or override the
                background color, depending on the layout.
              </div>
            </div>
            <div className="bg-glass h-px w-full"></div>
            <div className="flex flex-col-reverse gap-4 md:flex-row">
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
                    <Label>Color</Label>
                    <ColorPicker
                      color={form.getValues("color")}
                      setColor={(color) => form.setValue("color", color)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="gradient">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label>Start Color</Label>
                        <ColorPicker
                          color={form.getValues("gradientStartColor")}
                          setColor={(color) =>
                            form.setValue("gradientStartColor", color)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Color</Label>
                        <ColorPicker
                          color={form.getValues("gradientEndColor")}
                          setColor={(color) =>
                            form.setValue("gradientEndColor", color)
                          }
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
              <div className="bg-glass border-glass h-[150px] w-full rounded-lg border p-4 md:h-[200px]">
                <div
                  className="h-full w-full rounded-lg"
                  style={backgroundStyle}
                />
              </div>
            </div>
          </FormContent>
          <FormFooter>
            <FormActions loading={loading} cancel={onCancel} dirty={true} />
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
