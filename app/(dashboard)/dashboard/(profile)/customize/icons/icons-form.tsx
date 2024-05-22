"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormSubmit } from "@/hooks/use-form-action";
import { Switch } from "@/components/ui/switch";
import {
  FormFooter,
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
import { TopIconsFormSchema, TopIconsFormValues } from "@/lib/validations";
import { ColorPicker } from "@/components/color-picker";
import { TopIcon } from "@/components/biolink/icon";
import { IconOptions as IconData, IconStyle, Position } from "@/lib/types";
import {
  iconStyles,
  type IconStyleOption,
  iconPositionOptions,
  iconSizeOptions,
} from "@/lib/constants/icon";
import { useBiolinkPreviewStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function IconsForm({ data }: { data?: IconData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<TopIconsFormValues>({
    resolver: zodResolver(TopIconsFormSchema),
    defaultValues: data,
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
              position: value.position as Position,
              size: value.size,
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

  const renderIconOption = (
    form: UseFormReturn<TopIconsFormValues>,
    style?: IconStyleOption,
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
        <TopIcon
          options={{
            style: style?.value,
            color: form.getValues("color")!,
            shadow: form.getValues("shadow"),
            position: form.getValues("position"),
          }}
          item={{
            provider: "twitter",
          }}
        />
      </div>
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 lg:flex-row"
      >
        <div className="grid w-full grid-cols-2 overflow-hidden rounded-lg bg-primary/10 p-2">
          {renderIconOption(form)}
          {iconStyles.map((style, idx) => {
            return renderIconOption(form, style, idx);
          })}
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-secondary/25 p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <FormLabel>Color</FormLabel>
              <ColorPicker
                color={form.getValues("color")}
                setColor={(color) => {
                  form.setValue("color", color);
                }}
              />
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="border-glass flex w-full items-center justify-between gap-2 rounded-lg border bg-input/50 px-4 py-2">
                <div className="text-sm">Shadow</div>
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
              </div>
            </div>
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {iconPositionOptions.map((iconPosition, index) => (
                        <FormItem
                          key={index}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={iconPosition.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {iconPosition.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {iconSizeOptions.map((iconSize, index) => (
                        <FormItem
                          key={index}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={iconSize.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {iconSize.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormFooter className="p-0">
            <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
          </FormFooter>
        </div>
      </form>
    </Form>
  );
}
