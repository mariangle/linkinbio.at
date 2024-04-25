"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/ui/color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TitleOptions } from "@/types";
import { fonts } from "@/constants/fonts";

export function TitleForm() {
  const [titleOptions, setTitleOptions] = React.useState<TitleOptions>({
    font: "inter",
    color: "#FFFFFF",
  });

  const [darkTextOption, setDarkTextOption] = React.useState<boolean>(false);

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="w-full">
        <div className="mt-3 font-semibold">Title</div>
        <div className="mt-2 flex items-center gap-4">
          <div className="space-y-2">
            <Label>Color</Label>
            <ColorPicker
              small
              color={titleOptions.color}
              setColor={(color) =>
                setTitleOptions({
                  ...titleOptions,
                  color,
                })
              }
            />
          </div>
          <div className="w-full space-y-2">
            <Label>Font</Label>
            <div className="flex items-center gap-2">
              <Select
                defaultValue={titleOptions.font}
                onValueChange={(font) =>
                  setTitleOptions({
                    ...titleOptions,
                    font,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                  {fonts.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.value}
                      className={item.display}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Text</div>
          <div className="mt-2 flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="text-sm font-semibold">Enable Black Text</div>
              <div className="text-xs text-muted-foreground">
                Turn off automatic text color adjustment based on background.
                Enable to switch to black text, particularly useful for images
                as backgrounds.
              </div>
            </div>
            <Switch
              checked={darkTextOption}
              onCheckedChange={() => setDarkTextOption(!darkTextOption)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
