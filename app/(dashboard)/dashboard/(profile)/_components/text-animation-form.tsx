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
import { EffectsOptions } from "@/lib/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Label } from "@/components/ui/label";

export function TextAnimationForm({
  data,
}: {
  data: {
    titleSparkles: boolean;
    titleTypewriter: boolean;
    bioTypewriter: boolean;
  };
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [visualsOptions, setVisualOptions] = React.useState<
    Pick<EffectsOptions, "bioTypewriter" | "titleTypewriter" | "titleSparkles">
  >({
    titleSparkles: data.titleSparkles,
    titleTypewriter: data.titleTypewriter,
    bioTypewriter: data.bioTypewriter,
  });

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
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
