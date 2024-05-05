import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BurgerMenu({
  isMenuOpen,
  setIsMenuOpen,
  className,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  return (
    <button
      className="h-6 w-6 space-y-1.5 md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <motion.div
        animate={isMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn("h-px w-4 origin-center bg-foreground", className)}
      />
      <motion.div
        animate={isMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn("h-px w-4 origin-center bg-foreground", className)}
      />
    </button>
  );
}
