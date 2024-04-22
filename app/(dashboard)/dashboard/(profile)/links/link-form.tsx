import * as React from "react";

import { cn } from "@/lib/utils";

import { socialLinks } from "@/constants/social-links";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LinkSuggestion } from "./link-suggestion";
import { SearchIcon, XIcon, PlusIcon } from "lucide-react";

export function LinkForm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [url, setUrl] = React.useState("");

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
          Enter URL
        </Label>
        <div className="flex items-center gap-2">
          <Input placeholder="URL" />
          <Button>Add</Button>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
      <div className="relative p-4">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2" />
          <Input
            placeholder="Search apps..."
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <div>
          <Label className="mt-4 block text-xs">
            {search ? "Results" : "Suggestions"}
          </Label>
          <div className="mt-4 flex gap-4">
            {search
              ? socialLinks
                  .filter((item) =>
                    item.label.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item, index) => (
                    <LinkSuggestion key={index} item={item} />
                  ))
              : socialLinks
                  .slice(0, 5)
                  .map((item, index) => (
                    <LinkSuggestion key={index} item={item} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}
