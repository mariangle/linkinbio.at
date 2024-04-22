"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { BackgroundOptions } from "@/components/biolink/background";

export function BackgroundVideo({
  url,
  options,
  className,
}: {
  url: string;
  options?: BackgroundOptions;
  className?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {})
        .catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
    }

    return () => {
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className={cn("h-full w-full object-cover", className)}
      src={url}
    />
  );
}
