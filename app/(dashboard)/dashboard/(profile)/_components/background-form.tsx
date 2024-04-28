"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import { BackgroundOptions } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import {
  FormHeading,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { ImagePicker } from "@/components/image-picker";
import { Image as ImageIcon } from "lucide-react";

export function BackgroundForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [backgroundOptions, setBackgroundOptions] =
    React.useState<BackgroundOptions>({
      color: "#FFFFFF",
      url: "",
    });

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        background: backgroundOptions,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundOptions]);

  return (
    <FormContainer>
      <FormContent>
        <FormHeading>Background</FormHeading>
        <div className="space-y-2">
          <ImagePicker
            url={backgroundOptions.url}
            setUrl={(url) => {
              setBackgroundOptions({
                ...backgroundOptions,
                url,
              });
            }}
            open={dialogOpen}
            setOpen={setDialogOpen}
          >
            <button className="flex w-full items-center gap-2 rounded-lg border bg-input px-2 py-3">
              <ImageIcon className="size-5 text-muted-foreground" />
              <div className="truncate whitespace-nowrap text-sm">
                {backgroundOptions.url || "Add a background image"}
              </div>
            </button>
          </ImagePicker>
          <div className="text-sm text-muted-foreground">
            The image will serve as either a cover photo or override the
            background color, depending on the layout.
          </div>
        </div>
        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPicker
            color={backgroundOptions.color}
            setColor={(color) =>
              setBackgroundOptions({
                ...backgroundOptions,
                color,
              })
            }
          />
        </div>
      </FormContent>
      <FormFooter>
        <Button>Reset</Button>
      </FormFooter>
    </FormContainer>
  );
}
