import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Tooltip } from "@/components/ui/tooltip";

export function NavItem({
  item,
  collapsed,
}: {
  item: { label: string; href: string; icon: any };
  collapsed?: boolean;
}) {
  const pathname = usePathname();
  const active = item.href === pathname;

  return (
    <div className="relative">
      {active && (
        <div className="absolute bottom-0 left-1/2 z-10 h-0.5 w-5 -translate-x-1/2 rounded-r-md bg-primary md:left-0 md:top-1/2 md:h-5 md:w-0.5 md:-translate-y-1/2" />
      )}
      <Link
        href={item.href}
        className={cn(
          "flex h-11 items-center justify-start gap-3 rounded-xl bg-secondary px-3.5 py-2 text-sm text-muted-foreground opacity-75",
          active &&
            "bg-gradient-to-t from-indigo-100 to-transparent text-foreground opacity-100 dark:from-primary/20 md:bg-gradient-to-r",
          !collapsed && "md:bg-transparent",
        )}
      >
        <item.icon className="size-3.5 shrink-0" />
        <span
          className={cn("hidden whitespace-nowrap", !collapsed && "md:block")}
        >
          {item.label}
        </span>
      </Link>
    </div>
  );
}
