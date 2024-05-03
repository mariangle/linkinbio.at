import React, { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const colors = [
  "#FF6347", // Tomato
  "#7FFFD4", // Aquamarine
  "#40E0D0", // Turquoise
  "#FFD700", // Gold
  "#9932CC", // Dark Orchid
  "#FF8C00", // Dark Orange
  "#4682B4", // Steel Blue
  "#8A2BE2", // Blue Violet
];

export function ColorPicker({
  color,
  setColor,
  small = false,
  className,
}: {
  color: string;
  setColor: (color: string) => void;
  small?: boolean;
  className?: string;
}) {
  const [colorValue, setColorValue] = useState(color);
  const colorFallback = "#FFFFFF";
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColor(isValidHexColor(color) ? color : colorFallback);
    setColorValue(color);
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex h-9 w-full items-center gap-2 rounded-lg border border-border bg-input p-2",
          small && "w-9 justify-center border-none bg-transparent p-0",
          className,
        )}
      >
        <div
          className="size-6 rounded-full"
          style={{
            backgroundColor: isValidHexColor(colorValue)
              ? colorValue
              : colorFallback,
          }}
        />
        {!small && <div>{color}</div>}
      </PopoverTrigger>
      <PopoverContent className="bg-secondary">
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="size-6 cursor-pointer rounded-sm"
              style={{ backgroundColor: color }}
              onClick={() => {
                setColor(color);
                setColorValue(color);
              }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-10 bg-none p-0"
          />
          <Input
            value={colorValue}
            onChange={handleColorChange}
            className={cn(
              "w-full",
              !isValidHexColor(colorValue) &&
                "border-destructive focus-visible:ring-destructive",
            )}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function isValidHexColor(hex: string) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}
