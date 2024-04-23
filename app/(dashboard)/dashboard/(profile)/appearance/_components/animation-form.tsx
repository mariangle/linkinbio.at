"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimationType } from "@/types";
import { animationsTypes } from "@/constants/animations";

export function AnimationForm() {
  const [animationType, setAnimationType] = React.useState<AnimationType>(
    AnimationType.FadeIn,
  );

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="w-full">
        <div className="mt-3 font-semibold">Entrance Animation</div>
        <div className="mt-2 flex items-center gap-4">
          <Select
            defaultValue={animationType}
            onValueChange={(animation) =>
              setAnimationType(animation as AnimationType)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Weather Effect" />
            </SelectTrigger>
            <SelectContent>
              {animationsTypes.map((value, index) => (
                <SelectItem key={index} value={value}>
                  {value}
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
