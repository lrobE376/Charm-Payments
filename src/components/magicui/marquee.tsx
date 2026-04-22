// src/components/magicui/marquee.tsx
"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  /** Number of duplicated sets — increase for very few items */
  repeat?: number;
  /** Color of the fade-out edges — must match the section background */
  fadeColor?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fadeColor = "#fdf9ed",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      style={{
        maskImage: vertical
          ? `linear-gradient(to bottom, transparent, #fff 10%, #fff 90%, transparent)`
          : `linear-gradient(to right, transparent, #fff 8%, #fff 92%, transparent)`,
        WebkitMaskImage: vertical
          ? `linear-gradient(to bottom, transparent, ${fadeColor} 10%, ${fadeColor} 90%, transparent)`
          : `linear-gradient(to right, transparent, ${fadeColor} 8%, ${fadeColor} 92%, transparent)`,
      }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[--gap]",
            vertical
              ? "animate-magicui-marquee-vertical flex-col"
              : "animate-magicui-marquee flex-row",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
