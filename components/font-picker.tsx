"use client";

import React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fonts } from "@/lib/constants/fonts";
import { Font } from "@/lib/types";

export function FontPicker({
  font,
  setFont,
  className,
}: {
  font: Font;
  setFont: (font: Font) => void;
  className?: string;
}) {
  const [fontValue, setFontValue] = React.useState<Font>(font);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "border-glass flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-lg border bg-input/50 px-3 text-sm",
            fontValue && "text-muted-foreground",
            className,
          )}
        >
          {font
            ? fonts.find((font) => font.value === fontValue)?.name
            : "Select font"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] overflow-y-auto p-0">
        <Command>
          <CommandInput placeholder="Search font..." />
          <CommandEmpty>No font found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {fonts.map((font) => (
                <CommandItem
                  value={font.name}
                  key={font.value}
                  onSelect={() => {
                    setFont(font.value as Font);
                    setFontValue(font.value as Font);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      font.value === fontValue ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {font.name}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
