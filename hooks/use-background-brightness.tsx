"use client";

import * as React from "react";

interface ImageBrightnessProps {
  color: string;
  url: string;
}

export function useBackgroundBrightness({ color, url }: ImageBrightnessProps) {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  React.useEffect(() => {
    const isHexColor = (color: string): boolean => {
      const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      return hexColorPattern.test(color);
    };

    const isGradient = (value: string): boolean => {
      const gradientPattern = /linear-gradient|radial-gradient/;
      return gradientPattern.test(value);
    };

    const determineBrightness = (value: string): boolean => {
      if (isHexColor(value)) {
        const hex = value.substring(1); // Remove #
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
      } else if (isGradient(value)) {
        // You might implement a more sophisticated approach for gradients
        return true; // Assuming white text for gradients
      } else {
        // Handle other types of backgrounds here
        return false; // For now, assuming it's not dark
      }
    };

    setIsDark(determineBrightness(color));
  }, [color]);

  return {
    isDark,
  };
}
