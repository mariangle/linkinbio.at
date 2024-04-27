"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { ImagePicker } from "@/components/image-picker";
import { ProfilePicture } from "@/components/biolink/profile-picture";

export function ProfileForm() {
  const { biolink, updateBiolink, loading } = useBiolinkPreview();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [profileOptions, setProfileOptions] = React.useState<Profile>({
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
      profile: profileOptions,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileOptions]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        <div className="relative h-fit w-fit">
          <ProfilePicture src={profileOptions.image} className="size-20" />
          <ImagePicker
            url={profileOptions.image}
            setUrl={(url) => {
              setProfileOptions({
                ...profileOptions,
                image: url,
              });
            }}
            open={dialogOpen}
            setOpen={setDialogOpen}
          >
            <button className="absolute bottom-0 right-0 grid place-content-center rounded-full bg-primary p-1.5">
              <Pencil className="size-3" />
            </button>
          </ImagePicker>
        </div>
        <div className="my-4 space-y-4">
          <div className="space-y-2">
            <Label>Profile Title</Label>
            <Input
              placeholder="Your title"
              value={profileOptions.title}
              onChange={(e) => {
                setProfileOptions({
                  ...profileOptions,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label>Biography</Label>
            <Textarea
              placeholder="shadcn"
              rows={3}
              value={profileOptions.bio}
              onChange={(e) => {
                setProfileOptions({
                  ...profileOptions,
                  bio: e.target.value,
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label>Occupation</Label>
            <Input
              placeholder="Occupation"
              value={profileOptions.occupation}
              onChange={(e) => {
                setProfileOptions({
                  ...profileOptions,
                  occupation: e.target.value,
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              placeholder="Occupation"
              value={profileOptions.location}
              onChange={(e) => {
                setProfileOptions({
                  ...profileOptions,
                  location: e.target.value,
                });
              }}
            />
          </div>
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  );
}
