"use client";

import * as React from "react";

import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { Checkbox } from "@/components/ui/checkbox";
import { Font, TitleEffect } from "@/lib/types";
import { ColorPicker } from "@/components/color-picker";
import {
  ShowcaseContainer,
  ShowcaseHeader,
  ShowcaseDescription,
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
import { titleEffects } from "@/lib/constants/effects";
export function ProfileCustomizer() {
  const [profileOptions, setProfileOptions] = React.useState({
    titleEffect: TitleEffect.CherryBlossoms,
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
            effect: profileOptions.titleEffect,
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
      <div>
        <div className="mb-2 text-sm text-white">Title Effect</div>
        <Select
          onValueChange={(value) => {
            setProfileOptions({
              ...profileOptions,
              titleEffect: value as TitleEffect,
            });
          }}
          defaultValue={profileOptions.titleEffect}
        >
          <SelectTrigger className="border border-[rgba(63,81,116,0.5)] bg-white/5 text-white">
            <SelectValue placeholder="Select a top icon style" />
          </SelectTrigger>
          <SelectContent>
            {titleEffects.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </ShowcaseContainer>
  );
}
