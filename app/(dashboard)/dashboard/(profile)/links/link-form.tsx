import * as React from "react";
import { Link } from "@/types";

import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  GripVerticalIcon,
  XIcon,
  CheckIcon,
} from "lucide-react";

import { IconPicker } from "@/components/icon-picker";
import { socials } from "@/constants/social-links";
import { getDomain } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function socialLink(url: string) {
  const social = socials.find((link) => url.includes(getDomain(link.url)));

  return social;
}

export function LinkItem({ item }: { item: Link }) {
  const { biolink, updateBiolink } = useBiolinkPreview();

  const [isEditing, setIsEditing] = React.useState(false);
  const [link, setLink] = React.useState(item);

  const socialItem = socialLink(item.url);

  const clearChanges = () => {
    setIsEditing(false);
    setLink(item);
  };

  const saveChanges = () => {
    setIsEditing(false);
    if (biolink) {
      const updatedLinks = biolink.links.map((linkItem) => {
        if (linkItem.id === item.id) {
          return {
            ...linkItem,
            title: link.title,
            url: link.url,
          };
        }
        return linkItem;
      });

      updateBiolink({
        ...biolink,
        links: updatedLinks,
      });
    }
  };

  const deleteLink = () => {
    if (biolink) {
      updateBiolink({
        ...biolink,
        links: biolink.links.filter((link) => link.id !== item.id),
      });
    }
  };

  return (
    <div className="group rounded-lg bg-secondary">
      <div className="flex items-center">
        <GripVerticalIcon className="ml-2 size-4 text-muted-foreground" />
        <div className="flex w-full items-center justify-between gap-4 p-4">
          {socialItem ? (
            <div className="flex rounded-full border border-border bg-foreground p-1">
              <socialItem.icon className="size-4 cursor-not-allowed text-background" />
            </div>
          ) : (
            <IconPicker
              iconId={link.iconId}
              setIconId={(iconId) => {
                setLink({ ...link, iconId });
              }}
            />
          )}
          <div className="flex w-full items-center justify-between gap-4">
            {isEditing ? (
              <div className="w-full space-y-1.5">
                <Input
                  placeholder="Title"
                  className="w-full"
                  value={link.title}
                  onChange={(e) => {
                    setLink({ ...link, title: e.target.value });
                  }}
                />
                <Input
                  placeholder="URL"
                  className="w-full"
                  value={link.url}
                  onChange={(e) => {
                    setLink({ ...link, url: e.target.value });
                  }}
                />
              </div>
            ) : (
              <div>
                <div className="text-sm text-foreground">{link.title}</div>
                <div className="text-xs text-muted-foreground">{link.url}</div>
              </div>
            )}
            <div className="flex items-start gap-2 text-muted-foreground">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <button onClick={clearChanges}>
                    <XIcon className="size-4" />
                  </button>
                  <button onClick={saveChanges}>
                    <CheckIcon className="size-4" />
                  </button>
                </div>
              ) : (
                <button onClick={() => setIsEditing(true)}>
                  <PencilIcon className="size-4" />
                </button>
              )}
              {!isEditing && (
                <>
                  {socialItem && (
                    <button>
                      <EyeIcon className="size-4" />
                    </button>
                  )}
                  <button onClick={deleteLink}>
                    <TrashIcon className="size-0 duration-300 group-hover:size-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
