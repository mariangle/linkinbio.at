"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Switch } from "@/components/ui/switch";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TopIconStyle } from "@/lib/types";
import { topIconStyles } from "@/lib/constants/top-icon-styles";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { TopIconsFormSchema, TopIconsFormValues } from "@/lib/validations";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";

export function TopIconForm({
  data,
  modified,
}: {
  data: {
    shadow: boolean;
    style?: string;
    color: string;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<TopIconsFormValues>({
    resolver: zodResolver(TopIconsFormSchema),
    defaultValues: {
      shadow: data.shadow,
      style: data.style,
      color: data.color,
    },
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            topIcon: {
              shadow: value.shadow ?? data.shadow,
              style: value.style as TopIconStyle | undefined,
              color: value.color ?? data.color,
            },
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  const { loading, dirty, submit } = useFormSubmit<TopIconsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/top-icons",
    modified,
  });

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
            <FormHeading>Top Icons</FormHeading>
            <FormSwitch
              title="Shadow"
              description="Add a drop shadow to the top icons."
            >
              <FormField
                control={form.control}
                name="shadow"
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
            <div className="space-y-2">
              <Label>Icon Color</Label>
              <ColorPicker
                color={form.getValues("color")}
                setColor={(color) => {
                  form.setValue("color", color);
                }}
              />
            </div>
            <FormField
              control={form.control}
              name="style"
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
                      {topIconStyles.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormContent>
          <FormFooter>
            <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
          </FormFooter>
        </FormContainer>
      </form>
    </Form>
  );
}
