"use client";

import * as React from "react";

import { useFormSubmit } from "@/hooks/use-form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FormHeading, FormActions } from "@/components/dashboard/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBiolinkPreviewStore } from "@/lib/store";
import {
  WeatherEffect,
  TitleEffect,
  EffectsOptions as EffectsData,
} from "@/lib/types";
import { weatherEffects, titleEffects } from "@/lib/constants/effects";
import { EffectsFormValues, EffectsFormSchema } from "@/lib/validations";

import { Title } from "@/components/biolink/title";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function EffectsForm({ data }: { data?: EffectsData }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();

  const form = useForm<EffectsFormValues>({
    resolver: zodResolver(EffectsFormSchema),
    defaultValues: {
      title: data?.title,
      weather: data?.weather,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<EffectsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/effects",
  });

  React.useEffect(() => {
    form.watch((value) => {
      if (biolink) {
        setBiolink({
          ...biolink,
          config: {
            ...biolink.config,
            effects: {
              title: value.title as TitleEffect,
              weather: value.weather as WeatherEffect,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="font-medium">Title Animation</div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-md">
                  <FormControl>
                    <Switch
                      checked={field.value !== undefined}
                      onCheckedChange={(checked) => {
                        form.setValue(
                          "title",
                          checked ? "typewriter" : undefined,
                        );
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-secondary p-2">
            {titleEffects.map((item, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  form.setValue("title", item.value);
                }}
                className={cn(
                  "flex h-[50px] justify-center rounded-lg border-2 border-border p-3",
                  form.getValues("title") === item.value &&
                    "border-foreground/50",
                )}
              >
                <Title
                  effect={item.value as TitleEffect}
                  className="!text-sm !text-foreground"
                  user={{ title: item.label, premium: true }}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <FormHeading>Weather Effect</FormHeading>
          <div className="text-sm text-muted-foreground">
            Select a weather effect to enhance your profile. More visible with
            darker images or backgrounds depending on the effect.
          </div>
          <FormField
            control={form.control}
            name="weather"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a background weather effect" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {weatherEffects.map((item, index) => (
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
        </div>
        <div className="flex justify-end">
          <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
        </div>
      </form>
    </Form>
  );
}
