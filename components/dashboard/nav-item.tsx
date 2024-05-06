import { motion } from "framer-motion";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavItem({
  item,
  collapsed,
}: {
  item: { label: string; href: string; icon: any };
  collapsed?: boolean;
}) {
  const pathname = usePathname();
  const secondItemInHref = pathname.split("/")[1];
  const active = pathname.includes(item.href) || secondItemInHref === item.href;

  return (
    <motion.div
      className="relative"
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.05,
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {active && (
        <div className="absolute bottom-0 left-1/2 z-10 h-0.5 w-5 -translate-x-1/2 rounded-r-md bg-primary md:left-0 md:top-1/2 md:h-5 md:w-0.5 md:-translate-y-1/2" />
      )}
      <Link
        href={item.href}
        className={cn(
          "bg-glass-secondary flex h-11 items-center justify-start gap-3 rounded-xl px-3.5 py-2 text-sm text-muted-foreground opacity-50 backdrop-blur-xl",
          active &&
            "bg-gradient-to-t from-white/50 to-transparent text-foreground text-primary opacity-100 dark:from-primary/20 dark:text-white md:bg-gradient-to-r",
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
    </motion.div>
  );
}
