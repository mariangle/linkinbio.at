import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProfilePicture({
  src,
  className,
  nullable,
}: {
  src?: string;
  className?: string;
  nullable?: boolean;
}) {
  if (!src) {
    return nullable ? (
      <div className="size-24"></div>
    ) : (
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
