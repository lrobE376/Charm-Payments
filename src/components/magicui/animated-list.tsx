// src/components/magicui/animated-list.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Children, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AnimatedList({
  className,
  children,
  delay = 1000,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  const childrenArray = Children.toArray(children);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= childrenArray.length - 1) return;
    const timer = setTimeout(() => setIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [index, delay, childrenArray.length]);

  const visibleItems = childrenArray.slice(0, index + 1).reverse();

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence>
        {visibleItems.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedListItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mx-auto w-full"
      layout
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
    >
      {children}
    </motion.div>
  );
}
