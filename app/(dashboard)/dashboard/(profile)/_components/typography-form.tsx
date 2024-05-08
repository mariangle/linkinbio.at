"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  FormMessage,
} from "@/components/ui/form";
import { fonts } from "@/lib/constants/fonts";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { Font } from "@/lib/types/enums";
import { TypographyFormSchema, TypographyFormValues } from "@/lib/validations";

export function TypographyForm({
  data,
  modified,
}: {
  data: {
    titleColor: string;
    titleFont: Font;
    textColor: string;
    textFont: Font;
    hideUsername: boolean;
  };
  modified?: boolean;
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
              <div className="flex items-center gap-2">
                <div className="space-y-2">
                  <Label>Title Color</Label>
                  <ColorPicker
                    color={form.getValues("titleColor")}
                    setColor={(color) => {
                      form.setValue("titleColor", color);
                    }}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="titleFont"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Text Font</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a top icon style" />
                        </SelectTrigger>
                        <SelectContent>
                          {fonts.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <ColorPicker
                    color={form.getValues("textColor")}
                    setColor={(color) => {
                      form.setValue("textColor", color);
                    }}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="textFont"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Text Font</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a top icon style" />
                        </SelectTrigger>
                        <SelectContent>
                          {fonts.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
