import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  items,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isMenuOpen ? "0%" : "-100%" }}
      exit={{ y: "-100%", transition: { duration: 0 } }}
      transition={{ type: "just" }}
      className="fixed right-0 top-0 z-50 flex h-screen w-full overflow-hidden border-b bg-background/75 backdrop-blur-lg md:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="flex h-full w-full flex-col justify-between"
      >
        <ul className="mt-20 flex flex-col gap-4 p-4">
          {items.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-2 font-medium duration-300 hover:opacity-50",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 p-6">
          {/* Add something here */}
        </div>
      </motion.div>
    </motion.div>
  );
}
