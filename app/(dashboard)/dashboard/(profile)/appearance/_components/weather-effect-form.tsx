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
    <div className="rounded-lg bg-secondary p-4">
      <div className="w-full">
        <div className="mt-3 font-semibold">Weather Effect</div>
        <div className="mt-2 flex items-center gap-4">
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
        </div>
      </div>
    </div>
  );
}
