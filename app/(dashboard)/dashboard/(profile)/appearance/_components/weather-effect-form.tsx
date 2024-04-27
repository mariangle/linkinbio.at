"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WeatherEffect } from "@/types";
import { weatherEffects } from "@/constants/weather-effects";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

import {
  FormHeading,
  FormDescription,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";

export function WeatherEffectForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [weatherEffect, setWeatherEffect] = React.useState<WeatherEffect>(
    WeatherEffect.Snow,
  );

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
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
          defaultValue={weatherEffect}
          onValueChange={(font) => setWeatherEffect(font as WeatherEffect)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Weather Effect" />
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
