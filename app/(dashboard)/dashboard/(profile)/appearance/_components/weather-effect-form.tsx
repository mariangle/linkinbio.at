"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WeatherEffect } from "@/types";
import { weatherEffects } from "@/constants/weather-effects";

export function WeatherEffectForm() {
  const [weatherEffect, setWeatherEffect] = React.useState<WeatherEffect>(
    WeatherEffect.Snow,
  );

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
              {weatherEffects.map((value, index) => (
                <SelectItem key={index} value={value}>
                  {value}
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
