import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { XIcon, PlusIcon } from "lucide-react";
import { IconPicker } from "@/components/icon-picker";
import { Link } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function LinkForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [isOpen, setIsOpen] = React.useState(false);
  const [link, setLink] = React.useState<Partial<Link>>({
    title: "",
    url: "",
  });

  // TODO: Make select option with predefined socials or custom website url

  if (!isOpen) {
    return (
      <div className="flex max-w-xs items-center justify-start gap-2">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full rounded-full"
          size="lg"
        >
          <PlusIcon className="mr-2 size-4 text-gray-300" />
          Add Link
        </Button>
      </div>
    );
  }

  const add = () => {
    if (biolink) {
      const newLink = {
        ...link,
        id: (biolink.links.length + 1).toString(),
      } as Link;
      updateBiolink({
        ...biolink,
        links: [...biolink.links, newLink],
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative rounded-lg border">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute right-2 top-2 rounded-full border bg-secondary p-1"
      >
        <XIcon className="size-3" />
      </button>
      <div className="p-4">
        <Label className="block pb-2 text-base font-medium text-foreground">
          New Link
        </Label>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div>
              <IconPicker
                iconId={link.iconId}
                setIconId={(iconId) => {
                  setLink({ ...link, iconId });
                }}
              />
            </div>
            <div className="w-full space-y-2">
              <Input
                placeholder="Title"
                onChange={(e) => {
                  setLink({ ...link, title: e.target.value });
                }}
              />
              <Input
                placeholder="URL"
                onChange={(e) => {
                  setLink({ ...link, url: e.target.value });
                }}
              />
            </div>
          </div>
          <Button onClick={add}>Add</Button>
        </div>
      </div>
    </div>
  );
}
