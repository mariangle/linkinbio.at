import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundOptions } from "@/lib/types";
import { isValidImage, isValidVideo } from "@/lib/utils/media-validation";
import { BackgroundVideo } from "@/components/biolink/background-video";

export function BackgroundContainer({
  options,
  children,
  className,
}: {
  options: BackgroundOptions;
  children?: React.ReactNode;
  className?: string;
}) {
  const backgroundStyle =
    options.gradient?.endColor && options.gradient?.startColor
      ? {
          backgroundImage: `linear-gradient(${options.gradient.angle || 180}deg, ${options.gradient.startColor}, ${options.gradient.endColor})`,
        }
      : { backgroundColor: options.color };

  return (
    <div
      className={cn(
        "fixed inset-0 flex h-full flex-col items-center justify-between overflow-y-auto p-4",
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

  if (isValidUrl(url) && isValidVideo(url)) {
    return <BackgroundVideo url={url} className={className} />;
  }

  if (isValidUrl(url) && isValidImage(url)) {
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

export function isValidUrl(url: string) {
  return url.startsWith("https://");
}
