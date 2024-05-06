import { cn } from "@/lib/utils";

export function Bio({
  bio,
  className,
  whiteText,
}: {
  bio: string;
  className?: string;
  whiteText?: boolean;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-base",
        whiteText ? "text-white" : "text-black",
        className,
      )}
    >
      {bio}
    </p>
  );
}
