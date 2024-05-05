import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={50}
      height={50}
      className="size-6 rounded-full bg-white"
    />
  );
}
