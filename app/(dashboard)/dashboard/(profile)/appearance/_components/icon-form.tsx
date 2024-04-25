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
import { TopIconOptions, TopIconStyle } from "@/types";
import { topIconStyles } from "@/constants/icons";
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
    <div className="rounded-lg bg-secondary p-4">
      <div className="text-sm font-semibold">Top Icons</div>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Enable Social Icons</div>
            <div className="text-xs text-muted-foreground">
              Automatically display social media icons at the top of your
              profile.
            </div>
          </div>
          <Switch
            checked={showTopIcons}
            onCheckedChange={() => setShowTopIcons(!showTopIcons)}
          />
        </div>
      </div>
      <div className="mt-4 space-y-4 rounded-lg border p-4">
        <div className="text-sm font-semibold">Top Icon Styling</div>
        <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Shadow</div>
            <div className="text-xs text-muted-foreground">
              Add a drop shadow
            </div>
          </div>
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
        </div>
        <div className="mt-2 flex items-center gap-4">
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
        </div>
      </div>
    </div>
  );
}
