import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProfilePicture({
  src,
  className,
  nullable,
}: {
  src?: string | null;
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
        className={cn("size-24 shrink-0 rounded-full bg-secondary", className)}
      />
    );
  }
  return (
    <Image
      unoptimized
      src={src}
      width={100}
      height={100}
      alt="profile image"
      className={cn("size-24 shrink-0 rounded-full object-cover", className)}
    />
  );
}
