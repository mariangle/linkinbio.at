"use client";

import * as React from "react";

import { useFormSubmit } from "@/hooks/use-form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  FormHeading,
  FormSwitch,
  FormActions,
  FormContent,
  FormContainer,
} from "@/components/dashboard/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Label } from "@/components/ui/label";
import { WeatherEffect, TitleEffect } from "@/lib/types";
import { weatherEffects, titleEffects } from "@/lib/constants/effects";
import { EffectsFormValues, EffectsFormSchema } from "@/lib/validations";

export function EffectsForm({
  data,
  modified,
}: {
  data: {
    title?: TitleEffect;
    weather?: WeatherEffect;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();

  const form = useForm<EffectsFormValues>({
    resolver: zodResolver(EffectsFormSchema),
    defaultValues: {
      title: data.title,
      weather: data.weather,
    },
  });

  const { loading, dirty, submit } = useFormSubmit<EffectsFormValues>({
    initialData: data,
    formValues: form.getValues(),
    endpoint: "/api/manage/effects",
    modified,
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
    <FormContainer>
      <FormContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <FormHeading>Title Animation</FormHeading>
              <div className="mt-2 text-sm text-muted-foreground">
                Select a title effect.
              </div>
            </div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a title animation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {titleEffects.map((item, index) => (
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
            <div>
              <FormHeading>Background Effect</FormHeading>
              <div className="mt-2 text-sm text-muted-foreground">
                Select a weather effect to enhance your profile. It complements
                darker backgrounds.
              </div>
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
            <div className="flex justify-end">
              <FormActions loading={loading} cancel={onCancel} dirty={dirty} />
            </div>
          </form>
        </Form>
      </FormContent>
    </FormContainer>
  );
}
