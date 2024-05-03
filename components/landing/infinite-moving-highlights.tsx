"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import {
  CloudLightning,
  Gem,
  LayoutPanelLeft,
  Paintbrush,
  Palette,
  Sparkles,
  Type,
  Video,
} from "lucide-react";

export const InfiniteMovingHighlights = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-xs overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 text-white",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex items-center gap-3">
          <Paintbrush className="size-4" />
          Customizable buttons
        </div>
        <div className="flex items-center gap-3">
          <CloudLightning className="size-4" />
          Weather Effects
        </div>
        <div className="flex items-center gap-3">
          <LayoutPanelLeft className="size-4" />
          Multiple Layouts
        </div>
        <div className="flex items-center gap-3">
          <Sparkles className="size-4" />
          Text Effects
        </div>
        <div className="flex items-center gap-3">
          <Video className="size-4" />
          Background Video
        </div>
        <div className="flex items-center gap-3">
          <Gem className="size-4" />
          Background Gif
        </div>
        <div className="flex items-center gap-3">
          <Type className="size-4" />
          Custom Fonts
        </div>
        <div className="flex items-center gap-3">
          <Palette className="size-4" />
          Unlimited Colors
        </div>
      </ul>
    </div>
  );
};
