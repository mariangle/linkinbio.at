"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

import {
  FormHeading,
  FormDescription,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function SeoForm() {
  const { biolink, setBiolink } = useBiolinkPreview();

  return (
    <FormContainer>
      <FormContent>
        <div>
          <FormHeading>SEO</FormHeading>
          <FormDescription>
            Customize how your biolink appears in search engine results.
          </FormDescription>
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Input />
        </div>
      </FormContent>
      <FormFooter>
        <Button variant="foreground">Save</Button>
      </FormFooter>
    </FormContainer>
  );
}
