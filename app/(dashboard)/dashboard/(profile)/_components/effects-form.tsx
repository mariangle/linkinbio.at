"use client";

import * as React from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
} from "@/components/dashboard/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { EffectsOptions } from "@/lib/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Label } from "@/components/ui/label";
import { WeatherEffect } from "@/lib/types";
import { weatherEffects } from "@/lib/constants/weather-effects";

export function EffectsForm({
  data,
  customized,
}: {
  data: {
    titleSparkles: boolean;
    titleTypewriter: boolean;
    bioTypewriter: boolean;
    weatherEffect?: WeatherEffect;
  };
  customized?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [hasCustomized, setHasCustomized] = React.useState(customized);
  const [loading, setLoading] = React.useState(false);
  const [visualsOptions, setVisualOptions] = React.useState<
    Pick<
      EffectsOptions,
      "bioTypewriter" | "titleTypewriter" | "titleSparkles" | "weatherEffect"
    >
  >({
    titleSparkles: data.titleSparkles,
    titleTypewriter: data.titleTypewriter,
    bioTypewriter: data.bioTypewriter,
    weatherEffect: data.weatherEffect ?? undefined,
  });

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        effects: {
          ...biolink.config.effects,
          ...visualsOptions,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visualsOptions]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/manage/effects", {
        method: hasCustomized ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visualsOptions),
      });
      const { message, ok } = await res.json();

      if (ok) {
        toast.success(message);
        setHasCustomized(true);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Text Animations</FormHeading>
        <Label>Title</Label>
        <FormSwitch title="Sparkles">
          <Switch
            checked={visualsOptions.titleSparkles}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                titleSparkles: !visualsOptions.titleSparkles,
              })
            }
          />
        </FormSwitch>
        <FormSwitch title="Typewriter">
          <Switch
            checked={visualsOptions.titleTypewriter}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                titleTypewriter: !visualsOptions.titleTypewriter,
              })
            }
          />
        </FormSwitch>
        <Label>Title</Label>
        <FormSwitch title="Typewriter">
          <Switch
            checked={visualsOptions.bioTypewriter}
            onCheckedChange={() =>
              setVisualOptions({
                ...visualsOptions,
                bioTypewriter: !visualsOptions.bioTypewriter,
              })
            }
          />
        </FormSwitch>
        <div>
          <FormHeading>Weather Effect</FormHeading>
          <div>
            Select a weather effect to enhance your profile. It complements
            darker backgrounds.
          </div>
        </div>
        <Select
          defaultValue={visualsOptions.weatherEffect || "none"}
          onValueChange={(weatherEffect) => {
            setVisualOptions({
              ...visualsOptions,
              weatherEffect: weatherEffect as WeatherEffect,
            });
          }}
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
        <Button loading={loading} onClick={onSubmit} variant="foreground">
          Save
        </Button>
      </FormFooter>
    </FormContainer>
  );
}
