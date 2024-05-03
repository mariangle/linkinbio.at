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
} from "@/components/dashboard/form";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/constants/fonts";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Font } from "@/lib/types/enums";
import {
  ProfileOptionsFormSchema,
  ProfileOptionsFormValues,
} from "@/lib/validations";

export function TitleForm({
  data,
  modified,
}: {
  data: {
    titleColor: string;
    titleFont: Font;
    invertTextColor: boolean;
    hideUsername: boolean;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();

  const form = useForm<ProfileOptionsFormValues>({
    resolver: zodResolver(ProfileOptionsFormSchema),
    defaultValues: {
      titleColor: data.titleColor,
      titleFont: data.titleFont,
      invertTextColor: data.invertTextColor,
      hideUsername: data.hideUsername,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<ProfileOptionsFormValues>({
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
              invertTextColor: value.invertTextColor ?? data.invertTextColor,
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormContent>
            <FormHeading>Title</FormHeading>
            <div className="mt-2 flex items-center gap-4">
              <div className="space-y-2">
                <Label>Color</Label>
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
                  <FormItem>
                    <FormLabel>Style</FormLabel>
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
            <FormSwitch
              title="Invert Text Color"
              description="Toggle to manually invert the text color based on the background."
            >
              <FormField
                control={form.control}
                name="invertTextColor"
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
            <Button loading={loading} disabled={!dirty}>
              Save Changes
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
