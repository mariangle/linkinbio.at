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
  if (!src) {
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
    // TODO: handle this better
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={100}
      height={100}
      alt="profile image"
      className={cn("size-24 rounded-full object-cover", className)}
    />
  );
}
