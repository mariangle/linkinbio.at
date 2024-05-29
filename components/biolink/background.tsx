import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundOptions } from "@/lib/types";
import { isValidImage, isValidVideo } from "@/lib/utils/media-validation";
import { BackgroundVideo } from "@/components/biolink/background-video";
import { defaultBackgroundOptions } from "@/lib/constants/defaults";

export function BackgroundContainer({
  options = defaultBackgroundOptions,
  children,
  className,
  premium = true,
  preview,
}: {
  options?: BackgroundOptions;
  children?: React.ReactNode;
  className?: string;
  premium?: boolean;
  preview?: boolean;
}) {
  // Check if options or options.gradient is null before accessing properties
  const backgroundStyle =
    options?.gradient?.endColor && options?.gradient?.startColor && premium
      ? {
          backgroundImage: `linear-gradient(${options.gradient.angle || 0}deg, ${options.gradient.startColor}, ${options.gradient.endColor})`,
        }
      : { backgroundColor: options?.color }; // Provide default value for backgroundColor if options is null

  return (
    <div
      className={cn(
        "fixed inset-0 flex h-full w-full flex-col items-center justify-between overflow-y-auto p-4",
        className,
      )}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
}

export function BackgroundMedia({
  url,
  className,
}: {
  url?: string;
  className?: string;
}) {
  if (!url) return null;

  if (isValidVideo(url)) {
    return <BackgroundVideo url={url} className={className} />;
  }

  if (isValidImage(url)) {
    return (
      <Image
        src={url}
        unoptimized
        alt="background image"
        width={1920}
        height={1080}
        className={cn(
          "pointer-events-none h-full w-full object-cover",
          className,
        )}
      />
    );
  }

  return null;
}
