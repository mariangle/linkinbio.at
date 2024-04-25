"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Profile } from "@/types";

export function InformationForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const [profile, setProfile] = React.useState<Profile>({
    title: "",
    bio: "",
    image: "",
    occupation: "",
    location: "",
  });

  return (
    <div>
      <div>
        <div className="size-16 rounded-full bg-red-500"></div>
      </div>
      <div className="my-4 space-y-4">
        <div className="space-y-2">
          <Label>Profile Title</Label>
          <Input placeholder="Your title" />
        </div>
        <div className="space-y-2">
          <Label>Profile Image URL</Label>
          <Input placeholder="Your title" />
        </div>
        <div className="space-y-2">
          <Label>Biography</Label>
          <Textarea placeholder="shadcn" rows={3} />
        </div>
        <div className="space-y-2">
          <Label>Occupation</Label>
          <Input placeholder="Your occupation" />
        </div>
        <div className="space-y-2">
          <Label>Location</Label>
          <Input placeholder="Your location" />
        </div>
      </div>
    </div>
  );
}
