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

  const link = (
    <Link
      href={item.href}
      className={cn(
        "mx-3 flex h-11 items-center justify-start gap-3 rounded-md px-3.5 py-2 text-sm text-muted-foreground",
        active &&
          "bg-gradient-to-r from-background to-transparent text-foreground dark:from-primary/10",
      )}
    >
      <item.icon className="size-4 shrink-0" />
      <span
        className={cn(
          "whiotespace-nowrap block transition-all duration-1000",
          collapsed && "invisible hidden opacity-0",
        )}
      >
        {item.label}
      </span>
    </Link>
  );

  return (
    <div className="relative">
      {active && <div className="absolute h-full w-[2px] bg-primary" />}
      {collapsed ? (
        <Tooltip content={item.label} position="right">
          {link}
        </Tooltip>
      ) : (
        link
      )}
    </div>
  );
}
