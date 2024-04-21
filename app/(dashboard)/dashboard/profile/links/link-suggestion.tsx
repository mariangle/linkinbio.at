import { SocialLink } from "@/lib/types";

export function LinkSuggestion({ item }: { item: SocialLink }) {
  return (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="w-fit rounded-md border bg-black/5 p-3 dark:bg-white">
        <item.icon className="size-7" style={{ color: item.color }} />
      </div>
      {item.label}
    </div>
  );
}
