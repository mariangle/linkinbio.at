"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { EffectsOptions } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Label } from "@/components/ui/label";

export function TextAnimationForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [visualsOptions, setVisualOptions] = React.useState<
    Pick<EffectsOptions, "bioTypewriter" | "titleTypewriter" | "titleSparkles">
  >({
    titleSparkles: false,
    titleTypewriter: false,
    bioTypewriter: false,
  });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        effects: visualsOptions,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visualsOptions]);

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
      </FormContent>
      <FormFooter>
        <Button variant="foreground">Save</Button>
      </FormFooter>
    </FormContainer>
  );
}
