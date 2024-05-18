"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { useFormSubmit } from "@/hooks/use-form-action";
import { Switch } from "@/components/ui/switch";
import {
  FormFooter,
  FormSwitch,
  FormActions,
} from "@/components/dashboard/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { IconOptions as IconData, IconStyle } from "@/lib/types";
import { iconStyles } from "@/lib/constants/icon-styles";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { TopIconsFormSchema, TopIconsFormValues } from "@/lib/validations";
import { ColorPicker } from "@/components/color-picker";
import { TopIcon } from "@/components/biolink/top-icon";
import { cn } from "@/lib/utils";

export function IconsForm({ data }: { data?: IconData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<TopIconsFormValues>({
    resolver: zodResolver(TopIconsFormSchema),
    defaultValues: {
      shadow: data?.shadow,
      style: data?.style,
      color: data?.color,
    },
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            icons: {
              shadow: value.shadow,
              style: value.style as IconStyle | undefined,
              color: value.color,
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
    endpoint: "/api/manage/icons",
  });

  const onSubmit = async () => {
    await submit();
  };

  const onCancel = () => {
    form.reset();
  };

  const renderTopIcon = (
    provider: string,
    form: UseFormReturn<TopIconsFormValues>,
    style:
      | {
          value: IconStyle;
          label: string;
        }
      | undefined = undefined,
    key?: number,
  ) => {
    const selected = form.getValues("style") === style?.value;
    return (
      <div
        key={key}
        onClick={() => form.setValue("style", style?.value)}
        className={cn(
          "relative grid cursor-pointer place-content-center rounded-lg px-4 py-8",
          !style?.value && !form.getValues("style") && " bg-primary/20",
          selected && "bg-primary/20",
        )}
      >
        {!style && (
          <div className="absolute left-2 top-2">
            <ColorPicker
              color={form.getValues("color")}
              setColor={(color) => {
                form.setValue("color", color);
              }}
              small
            />
          </div>
        )}
        <TopIcon
          options={{
            style: style?.value,
            color: form.getValues("color")!,
            shadow: form.getValues("shadow"),
          }}
          item={{
            provider: provider,
          }}
          size="lg"
        />
      </div>
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {renderTopIcon("Twitter", form)}
          {iconStyles.map((style, idx) => {
            return renderTopIcon("Twitter", form, style, idx);
          })}
        </div>
        <div className="flex w-full items-center gap-2">
          <FormSwitch title="Shadow">
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
        </div>
        <FormFooter>
          <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
        </FormFooter>
      </form>
    </Form>
  );
}
