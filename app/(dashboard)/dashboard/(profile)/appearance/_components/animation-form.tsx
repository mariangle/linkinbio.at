"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimationVariant } from "@/types";
import { animations } from "@/constants/animations";

export function AnimationForm() {
  const [animationType, setAnimationType] = React.useState<AnimationVariant>(
    AnimationVariant.FadeIn,
  );

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="w-full">
        <div className="mt-3 font-semibold">Entrance Animation</div>
        <div className="mt-2 flex items-center gap-4">
          <Select
            defaultValue={animationType}
            onValueChange={(animation) =>
              setAnimationType(animation as AnimationVariant)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Weather Effect" />
            </SelectTrigger>
            <SelectContent>
              {animations.map((item, index) => (
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
