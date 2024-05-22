import Image from "next/image";
import { cn } from "@/lib/utils";

interface ButtonImageOptions {
  radius: number;
  textHidden?: boolean;
}

export function ButtonImage({
  url,
  options,
}: {
  url: string;
  options: ButtonImageOptions;
}) {
  return (
    <Image
      src={url}
      alt="image"
      width={500}
      height={500}
      className={cn(
        "absolute left-1 top-1/2 size-10 -translate-y-1/2 object-cover",
        options?.textHidden && "left-1/2 top-1/2 -translate-x-1/2",
      )}
      style={{
        borderRadius: options.radius - 2,
      }}
      unoptimized
    />
  );
}
