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
import { getFontDisplay } from "@/lib/utils/getters";

export function FontPicker({
  font,
  setFont,
  className,
  premium = true,
}: {
  font: Font;
  setFont: (font: Font) => void;
  className?: string;
  premium?: boolean;
}) {
  const [fontValue, setFontValue] = React.useState<Font>(font);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          disabled={!premium}
          type="button"
          className={cn(
            "glassmorphism flex h-9 w-full items-center justify-between whitespace-nowrap rounded-lg px-3 text-sm disabled:opacity-75",
            fontValue && "text-muted-foreground",
            className,
          )}
        >
          <div className="flex w-full items-center justify-between gap-2">
            {font
              ? fonts.find((font) => font.value === fontValue)?.name
              : "Select font"}
          </div>
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
                  className={cn(getFontDisplay(font.value))}
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
