"use client";

import { motion } from "framer-motion";

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slide: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  scale: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
};

export function AnimatedElement({
  children,
  animationVariant = "slide",
  duration = 0.5,
  delay,
  className,
  once = true,
}: {
  children: React.ReactNode;
  animationVariant?: keyof typeof variants;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const variant = variants[animationVariant];

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      transition={{ ease: "easeInOut", duration, delay }}
      viewport={{ once, amount: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
