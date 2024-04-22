import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileOptions {
  radius?: number;
}

export function ProfilePicture({
  url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  options = {
    radius: 100,
  },
  className,
}: {
  url?: string;
  options?: ProfileOptions;
  className?: string;
}) {
  return (
    <Image
      src={url}
      width={100}
      height={100}
      alt="profile image"
      unoptimized
      className={(cn("size-20"), className)}
      style={{
        borderRadius: options.radius,
      }}
    />
  );
}
