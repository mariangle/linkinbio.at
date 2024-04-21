import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavItem({
  item,
  collapsed,
}: {
  item: { name: string; href: string; icon: any };
  collapsed?: boolean;
}) {
  const pathname = usePathname();
  const active = item.href === pathname;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex h-11 items-center justify-start gap-2 rounded-md border border-transparent px-2 py-2 text-sm",
        active && "border-slate-800 bg-gray-900",
        collapsed && "justify-center",
      )}
    >
      <item.icon className="size-4" />
      <span
        className={cn(
          "block transition-all duration-1000",
          collapsed && "invisible hidden opacity-0",
        )}
      >
        {item.name}
      </span>
    </Link>
  );
}
