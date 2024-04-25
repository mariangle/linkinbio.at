import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { isValidImage, isValidVideo } from "@/lib/utils/media-validation";
import { BackgroundVideo } from "@/components/biolink/background-video";

export function BackgroundContainer({
  color = "#000000",
  children,
  className,
}: {
  color?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)} style={{ backgroundColor: color }}>
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
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return null;
}

export function isValidUrl(url: string) {
  return url.startsWith("https://");
}
