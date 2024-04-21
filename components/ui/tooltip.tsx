"use client";

import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="cursor-help"
      >
        {children}
      </button>
      {showTooltip && (
        <div className="absolute top-full z-10 mt-2 w-[250px] rounded border bg-background p-2 text-xs text-foreground shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};
