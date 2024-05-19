import Image from "next/image";

interface ButtonImageOptions {
  radius: number;
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
      className="absolute left-1 top-1/2 size-10 -translate-y-1/2 object-cover"
      style={{
        borderRadius: options.radius - 2,
      }}
      unoptimized
    />
  );
}
