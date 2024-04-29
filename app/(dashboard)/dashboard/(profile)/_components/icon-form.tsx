"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
  FormSwitch,
} from "@/components/dashboard/form";

import { Label } from "@/components/ui/label";
import { TopIconOptions, TopIconStyle } from "@/types";
import { topIconStyles } from "@/lib/constants/top-icon-styles";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function IconForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [topIconOptions, setTopIconOptions] = React.useState<TopIconOptions>({
    shadow: false,
    style: TopIconStyle.SocialBackgroundWhiteColor,
  });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        topIcon: topIconOptions,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topIconOptions]);

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Top Icons</FormHeading>
        <Label>Styling</Label>
        <FormSwitch
          title="Shadow"
          description="Add a drop shadow to the top icons."
        >
          <Switch
            checked={topIconOptions.shadow}
            onCheckedChange={() =>
              setTopIconOptions({
                ...topIconOptions,
                shadow: !topIconOptions.shadow,
              })
            }
          />
        </FormSwitch>
        <Label>Styling</Label>
        <Select
          defaultValue={topIconOptions.style}
          onValueChange={(style) =>
            setTopIconOptions({
              ...topIconOptions,
              style: style as TopIconStyle,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Weather Effect" />
          </SelectTrigger>
          <SelectContent>
            {topIconStyles.map((item, index) => (
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
