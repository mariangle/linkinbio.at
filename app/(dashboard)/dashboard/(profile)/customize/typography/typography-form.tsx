"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { ColorPicker } from "@/components/color-picker";
import { FontPicker } from "@/components/font-picker";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
  FormActions,
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { Font } from "@/lib/types/enums";
import { TypographyFormSchema, TypographyFormValues } from "@/lib/validations";

export function TypographyForm({
  data,
  modified,
  premium,
}: {
  data: {
    titleColor: string;
    titleFont: Font;
    textColor: string;
    textFont: Font;
    hideUsername: boolean;
  };
  modified?: boolean;
  premium: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<TypographyFormValues>({
    resolver: zodResolver(TypographyFormSchema),
    defaultValues: {
      titleColor: data.titleColor,
      titleFont: data.titleFont,
      textColor: data.textColor,
      textFont: data.textFont,
      hideUsername: data.hideUsername,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<TypographyFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/profile",
    modified,
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        console.log(value.hideUsername);
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            profile: {
              ...biolink.config.profile,
              title: {
                color: value.titleColor ?? data.titleColor,
                font: value.titleFont as Font,
              },
              text: {
                font: value.textFont as Font,
                color: value.textColor ?? data.textColor,
              },
              hideUsername: value.hideUsername ?? data.hideUsername,
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Typography</FormHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="mb-2 font-semibold">Title</div>
                <div className="flex items-end gap-2">
                  <div className="space-y-2">
                    <FormLabel>Color</FormLabel>
                    <ColorPicker
                      color={form.getValues("titleColor")}
                      setColor={(color) => {
                        form.setValue("titleColor", color);
                      }}
                      small
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <FormLabel>Font</FormLabel>
                    <FontPicker
                      font={form.getValues("titleFont") as Font}
                      setFont={(font) => {
                        form.setValue("titleFont", font);
                      }}
                      premium={premium}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold">Text</div>
                <div className="flex items-end gap-2">
                  <div className="space-y-2">
                    <FormLabel>Color</FormLabel>
                    <ColorPicker
                      color={form.getValues("textColor")}
                      setColor={(color) => {
                        form.setValue("textColor", color);
                      }}
                      small
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <FormLabel>Font</FormLabel>
                    <FontPicker
                      font={form.getValues("textFont") as Font}
                      setFont={(font) => {
                        form.setValue("textFont", font);
                      }}
                      premium={premium}
                    />
                  </div>
                </div>
              </div>
            </div>
            <FormSwitch
              title="Hide Username"
              description="Toggle to not display the username. You need a profile title to hide the username."
            >
              <FormField
                control={form.control}
                name="hideUsername"
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
          </FormContent>
          <FormFooter>
            <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
