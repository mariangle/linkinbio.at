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
import { topIconStyles } from "@/constants/top-icon-styles";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function IconForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [showTopIcons, setShowTopIcons] = React.useState<boolean>(true);
  const [topIconOptions, setTopIconOptions] = React.useState<TopIconOptions>({
    dropShadow: false,
    style: TopIconStyle.SOCIAL_BACKGROUND,
  });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        showTopIcons: showTopIcons,
        topIcon: topIconOptions,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topIconOptions, showTopIcons]);

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Top Icons</FormHeading>
        <FormSwitch
          title="Enable Social Icons"
          description="Automatically display social media icons at the top of your
              profile."
        >
          <Switch
            checked={showTopIcons}
            onCheckedChange={() => setShowTopIcons(!showTopIcons)}
          />
        </FormSwitch>
        <Label>Styling</Label>
        <FormSwitch
          title="Shadow"
          description="Add a drop shadow to the top icons."
        >
          <Switch
            checked={topIconOptions.dropShadow}
            disabled={!showTopIcons}
            onCheckedChange={() =>
              setTopIconOptions({
                ...topIconOptions,
                dropShadow: !topIconOptions.dropShadow,
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
          disabled={!showTopIcons}
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
