import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import * as React from "react";

export function ColorPicker({
  color,
  setColor,
  small = false,
  className,
  disabled,
}: {
  color?: string;
  setColor: (color: string) => void;
  small?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const [colorValue, setColorValue] = React.useState(color);

  const colorFallback = "#FFFFFF";

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value);
  };

  const handleColorBlur = () => setColor(colorValue || colorFallback);

  return (
    <div className="relative">
      <Input
        type="color"
        value={colorValue}
        onChange={handleColorChange}
        onBlur={handleColorBlur} // Call handleColorBlur on blur event
        className="absolute left-0 top-0 z-10 w-full cursor-pointer bg-none p-0 opacity-0"
      />
      <div
        className={cn(
          "glassmorphism relative flex h-9 w-full items-center gap-2 rounded-lg p-2",
          small && "w-9 justify-center p-0",
          className,
        )}
        role="button"
      >
        <div
          className={cn("size-4 rounded-md", small && "size-5 rounded-full")}
          style={{
            backgroundColor: isValidHexColor(colorValue || "")
              ? colorValue
              : colorFallback,
          }}
        />
        {!small && <div className="text-sm">{color}</div>}
      </div>
    </div>
  );
}

function isValidHexColor(hex: string) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}
