"use client";

import * as React from "react";

import { useFormSubmit } from "@/hooks/use-form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { FormHeading, FormSwitch } from "@/components/dashboard/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Label } from "@/components/ui/label";
import { WeatherEffect } from "@/lib/types";
import { weatherEffects } from "@/lib/constants/weather-effects";
import { EffectsFormValues, EffectsFormSchema } from "@/lib/validations";

export function EffectsForm({
  data,
  modified,
}: {
  data: {
    titleSparkles: boolean;
    titleTypewriter: boolean;
    bioTypewriter: boolean;
    weatherEffect?: WeatherEffect;
  };
  modified?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();

  const form = useForm<EffectsFormValues>({
    resolver: zodResolver(EffectsFormSchema),
    defaultValues: {
      titleSparkles: data.titleSparkles,
      titleTypewriter: data.titleTypewriter,
      bioTypewriter: data.bioTypewriter,
      weatherEffect: data.weatherEffect,
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
              titleSparkles: value.titleSparkles ?? false,
              titleTypewriter: value.titleTypewriter ?? false,
              bioTypewriter: value.bioTypewriter ?? false,
              weatherEffect: value.weatherEffect as WeatherEffect,
            },
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, biolink]);

  async function onSubmit() {
    await submit();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormHeading>Effects</FormHeading>
          <Label>Title</Label>
          <FormSwitch title="Sparkles">
            <FormField
              control={form.control}
              name="titleSparkles"
              render={({ field }) => (
                <FormItem>
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
          <FormSwitch title="Typewriter">
            <FormField
              control={form.control}
              name="titleTypewriter"
              render={({ field }) => (
                <FormItem>
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
          <Label>Bio</Label>
          <FormSwitch title="Typewriter">
            <FormField
              control={form.control}
              name="bioTypewriter"
              render={({ field }) => (
                <FormItem>
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
        <div>
          <FormHeading>Background Effect</FormHeading>
          <div className="mt-2 text-sm text-muted-foreground">
            Select a weather effect to enhance your profile. It complements
            darker backgrounds.
          </div>
        </div>
        <FormField
          control={form.control}
          name="weatherEffect"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        <Button loading={loading} disabled={!dirty}>
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
