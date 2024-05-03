import { cn } from "@/lib/utils";

export function Heading({
  children,
  className,
  id,
  level = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  level?: "h1" | "h2" | "h3";
}) {
  const HeadingTag = level;

  return (
    <HeadingTag
      className={cn(
        "pb-4 text-3xl font-semibold capitalize tracking-tight md:text-4xl",
        className,
      )}
      id={id}
    >
      {children}
    </HeadingTag>
  );
}
