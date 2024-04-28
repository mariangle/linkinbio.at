"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormHeading,
  FormDescription,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";

import { AnimationVariant } from "@/types";
import { animations } from "@/constants/animations";

export function AnimationForm() {
  const [animationType, setAnimationType] = React.useState<AnimationVariant>(
    AnimationVariant.FadeIn,
  );

  return (
    <FormContainer>
      <FormContent>
        <div>
          <FormHeading>Entrance Animation</FormHeading>
          <FormDescription>
            Select an entrance animation that will be displayed when the profile
            is loaded.
          </FormDescription>
        </div>
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
      </FormContent>
      <FormFooter>
        <Button variant="foreground">Save</Button>
      </FormFooter>
    </FormContainer>
  );
}
