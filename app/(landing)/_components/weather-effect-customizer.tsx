"use client";

import * as React from "react";

import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
  ShowcaseItemContainer,
  ShowcaseIconContainer,
} from "./showcase";
import { WeatherEffect as WeatherEffectType } from "@/lib/types";
import { WeatherEffect } from "@/components/biolink/effects/weather-effect";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { weatherEffects } from "@/lib/constants/weather-effects";
import { Sparkles } from "lucide-react";

export function WeatherEffectCustomizer() {
  const [weatherEffect, setWeatherEffect] = React.useState<WeatherEffectType>(
    WeatherEffectType.Thunder,
  );

  const [enabled, setEnabled] = React.useState(false);

  return (
    <ShowcaseContainer className="w-full">
      {enabled && <WeatherEffect preview variant={weatherEffect} />}
      <div className="flex flex-col gap-4">
        <div>
          <ShowcaseIconContainer>
            <Sparkles className="size-5 text-white" />
          </ShowcaseIconContainer>
          <ShowcaseHeader>Weather Effects</ShowcaseHeader>
          <ShowcaseDescription>Make it stand out.</ShowcaseDescription>
        </div>
        <div className="max-w-[250px] space-y-6">
          <Select
            onValueChange={(weather) => {
              setWeatherEffect(weather as WeatherEffectType);
            }}
            defaultValue={weatherEffect}
          >
            <SelectTrigger className="border-[rgba(63,81,116,0.5)] bg-white/5 text-white">
              <SelectValue placeholder="Select a background weather effect" />
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
          <ShowcaseItemContainer className="flex items-center justify-between">
            <div className="text-sm">Enable</div>
            <Switch
              checked={enabled}
              className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-neutral-700"
              onCheckedChange={() => setEnabled(!enabled)}
            />
          </ShowcaseItemContainer>
        </div>
      </div>
    </ShowcaseContainer>
  );
}
