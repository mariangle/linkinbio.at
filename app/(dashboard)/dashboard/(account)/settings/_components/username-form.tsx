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
import { Button } from "@/components/ui/button";

export function UsernameForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [username, setUsername] = React.useState("johndoe");

  return (
    <FormContainer>
      <FormContent>
        <div>
          <FormHeading>Username</FormHeading>
          <FormDescription>
            Your username is how people find you on linkup.bio/{username}.
            It&apos;s unique to you and can only be changed once every 14 days.
          </FormDescription>
        </div>
        <Input />
      </FormContent>
      <FormFooter>
        <Button variant="foreground">Save</Button>
      </FormFooter>
    </FormContainer>
  );
}
