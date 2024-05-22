import * as React from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon } from "lucide-react";
import { isValidImage } from "@/lib/utils/media-validation";

export function ImagePicker({
  url,
  setUrl,
  children,
  title,
  description,
}: {
  url?: string;
  setUrl: (url?: string) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const [isImageValid, setIsImageValid] = React.useState(true);
  const [localUrl, setLocalUrl] = React.useState(url || "");
  const [validUrl, setValidUrl] = React.useState(url || "");
  const [open, setOpen] = React.useState(false);

  const confirm = () => {
    if (isImageValid) {
      setOpen(false);
      setUrl(localUrl);
    }
  };

  const remove = () => {
    setOpen(false);
    setUrl(undefined);
    setLocalUrl("");
    setValidUrl("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="bg-glass-secondary grid h-32 place-content-center overflow-hidden rounded-lg">
          {validUrl ? (
            <Image
              width={500}
              height={500}
              unoptimized
              src={validUrl}
              alt="image url"
              className="h-full w-full object-cover"
            />
          ) : (
            <ImageIcon className="size-8 text-muted-foreground" />
          )}
        </div>
        <div className="space-y-2">
          <Label>Enter Image URL</Label>
          <Input
            placeholder="Image URL"
            value={localUrl}
            onChange={(e) => {
              setLocalUrl(e.target.value);
              setIsImageValid(isValidImage(e.target.value));
              if (isValidImage(e.target.value)) {
                setValidUrl(e.target.value);
              }
            }}
          />
          {!isImageValid && (
            <div className="text-xs text-destructive">
              Please enter a valid image URL (PNG, JPG, JPEG)
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-2">
          {localUrl && (
            <Button variant="destructive" onClick={remove}>
              Delete
            </Button>
          )}
          <Button disabled={!isImageValid} onClick={confirm}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
