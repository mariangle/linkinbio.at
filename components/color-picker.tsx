import React, { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const colors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#0000FF",
  "#800080",
  "#FFFFFF",
  "#000000",
];

export function ColorPicker({
  color,
  setColor,
  small = false,
}: {
  color: string;
  setColor: (color: string) => void;
  small?: boolean;
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
          small && "w-9 justify-center",
        )}
      >
        <div
          className="size-4 rounded-sm"
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
