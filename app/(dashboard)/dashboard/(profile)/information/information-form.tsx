"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Profile } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { isValidImage } from "@/lib/utils/media-validation";

export function InformationForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [isImageValid, setIsImageValid] = React.useState(true);
  const [profile, setProfile] = React.useState<Profile>({
    title: "",
    bio: "",
    image: "",
    occupation: "",
    location: "",
  });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      profile,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <div>
      <div>
        <div className="size-16 rounded-full bg-red-500"></div>
      </div>
      <div className="my-4 space-y-4">
        <div className="space-y-2">
          <Label>Profile Title</Label>
          <Input
            placeholder="Your title"
            value={profile.title}
            onChange={(e) => {
              setProfile({
                ...profile,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <Label>Profile Image URL</Label>
          <Input
            placeholder="Profile Image URL"
            value={profile.image}
            onChange={(e) => {
              setProfile({
                ...profile,
                image: e.target.value,
              });
              setIsImageValid(isValidImage(e.target.value));
            }}
          />
          {!isImageValid && (
            <div className="text-xs text-destructive">
              Please enter a valid image URL (PNG, JPG, JPEG)
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label>Biography</Label>
          <Textarea
            placeholder="shadcn"
            rows={3}
            value={profile.bio}
            onChange={(e) => {
              setProfile({
                ...profile,
                bio: e.target.value,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <Label>Occupation</Label>
          <Input
            placeholder="Occupation"
            value={profile.occupation}
            onChange={(e) => {
              setProfile({
                ...profile,
                occupation: e.target.value,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <Label>Location</Label>
          <Input
            placeholder="Occupation"
            value={profile.location}
            onChange={(e) => {
              setProfile({
                ...profile,
                location: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
