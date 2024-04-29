"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WeatherEffect } from "@/lib/types";
import { weatherEffects } from "@/lib/constants/weather-effects";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

import {
  FormHeading,
  FormDescription,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";

export function WeatherEffectForm({
  data,
}: {
  data: {
    weatherEffect?: WeatherEffect;
  };
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [weatherEffect, setWeatherEffect] = React.useState<
    WeatherEffect | undefined
  >(data.weatherEffect);

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        effects: {
          ...biolink.config.effects,
          weather: weatherEffect,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherEffect]);

  return (
    <FormContainer>
      <FormContent>
        <div>
          <FormHeading>Weather Effect</FormHeading>
          <FormDescription>
            Select a weather effect to enhance your profile. It complements
            darker backgrounds.
          </FormDescription>
        </div>
        <Select
          defaultValue={weatherEffect || "none"}
          onValueChange={(font) => setWeatherEffect(font as WeatherEffect)}
        >
          <SelectTrigger>
            <SelectValue
              placeholder="Select Weather Effect"
              className="placeholder:text-red-foreground"
            />
          </SelectTrigger>
          <SelectContent>
            {weatherEffects.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
            <SelectItem value="none">None</SelectItem>
          </SelectContent>
        </Select>
      </FormContent>
      <FormFooter>
        <Button variant="foreground">Save</Button>
      </FormFooter>
    </FormContainer>
  );
}
