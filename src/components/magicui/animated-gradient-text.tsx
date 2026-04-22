// src/components/magicui/animated-gradient-text.tsx
"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium",
        "bg-[#fdf9ed]/60 backdrop-blur-sm",
        "shadow-[inset_0_-8px_10px_#00442115] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#00442125]",
        "[--bg-size:300%]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl p-[1px]",
          "animate-gradient",
          "bg-gradient-to-r from-[#004421]/50 via-[#C9A96E]/50 to-[#004421]/50",
          "bg-[length:var(--bg-size)_100%]",
          "[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
          "![mask-composite:subtract]",
        )}
      />
      {children}
    </div>
  );
}
