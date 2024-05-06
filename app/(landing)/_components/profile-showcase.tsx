"use client";

import * as React from "react";

import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Font } from "@/lib/types";
import { ColorPicker } from "@/components/color-picker";
import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
  ShowcaseItemContainer,
  ShowcaseIconContainer,
} from "./showcase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fonts } from "@/lib/constants/fonts";
import { Palette } from "lucide-react";
export function ProfileCustomizer() {
  const [profileOptions, setProfileOptions] = React.useState({
    typewriter: false,
    sparkles: false,
    color: "#FFFFFF",
    hideUsername: false,
    font: Font.Inter,
  });
  return (
    <ShowcaseContainer className="h-full">
      <ShowcaseIconContainer>
        <Palette className="size-5 text-white" />
      </ShowcaseIconContainer>
      <ShowcaseHeader>Profile</ShowcaseHeader>
      <ShowcaseDescription>
        Customize your profile to make it stand out.
      </ShowcaseDescription>
      <div className="relative mx-4 mt-8 flex h-[60px] flex-col items-center justify-center">
        <Title
          options={{
            color: profileOptions.color,
            font: profileOptions.font,
            sparkles: profileOptions.sparkles,
            typewriter: profileOptions.typewriter,
          }}
          user={{ title: "Maria", username: "maria" }}
        />
        {!profileOptions.hideUsername && (
          <Username username="maria" whiteText />
        )}
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <ColorPicker
            small
            color={profileOptions.color}
            setColor={(color) => {
              setProfileOptions({ ...profileOptions, color });
            }}
          />
          <Select
            onValueChange={(value) => {
              setProfileOptions({
                ...profileOptions,
                font: value as Font,
              });
            }}
            defaultValue={profileOptions.font}
          >
            <SelectTrigger className="border border-[rgba(63,81,116,0.5)] bg-white/5 text-white">
              <SelectValue placeholder="Select a top icon style" />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="my-4 flex items-center justify-between">
          <div className="text-xs text-white">Hide Username</div>
          <Checkbox
            checked={profileOptions.hideUsername}
            className="border-none data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-700"
            onCheckedChange={() =>
              setProfileOptions({
                ...profileOptions,
                hideUsername: !profileOptions.hideUsername,
              })
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ShowcaseItemContainer className="flex items-center justify-between">
          <div className="text-sm">Typewriter</div>
          <Switch
            className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-700"
            checked={profileOptions.typewriter}
            onCheckedChange={() =>
              setProfileOptions({
                ...profileOptions,
                typewriter: !profileOptions.typewriter,
              })
            }
          />
        </ShowcaseItemContainer>
        <ShowcaseItemContainer className="flex items-center justify-between">
          <div className="text-sm">Sparkles</div>
          <Switch
            checked={profileOptions.sparkles}
            className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-700"
            onCheckedChange={() =>
              setProfileOptions({
                ...profileOptions,
                sparkles: !profileOptions.sparkles,
              })
            }
          />
        </ShowcaseItemContainer>
      </div>
    </ShowcaseContainer>
  );
}
