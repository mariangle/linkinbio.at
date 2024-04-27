import { cn } from "@/lib/utils";
import Image from "next/image";
import { isValidImage } from "@/lib/utils/media-validation";

export function ProfilePicture({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  if (!src || !isValidImage(src)) {
    return (
      <Image
        alt="profile image"
        src="/default-pfp.png"
        width={100}
        height={100}
        className={cn("size-24 rounded-full bg-secondary", className)}
      />
    );
  }
  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt="profile image"
      unoptimized
      className={cn("size-24 rounded-full object-cover", className)}
    />
  );
}
