"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Title } from "@/components/biolink/title";
import { Bio } from "@/components/biolink/bio";
import { Username } from "@/components/biolink/username";
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

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="relative flex flex-col items-center justify-center rounded-lg border p-4">
        <Title options={titleOptions}>Maria</Title>
        <Username>johndoe</Username>
        <Bio>Lorem ipsum dolor sit amet.</Bio>
      </div>
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
      </div>
    </div>
  );
}
