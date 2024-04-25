import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProfilePicture({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  if (!src) {
    return <div className={cn("size-24 rounded-full", className)} />;
  }
  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt="profile image"
      unoptimized
      className={cn("size-24 rounded-full", className)}
    />
  );
}
