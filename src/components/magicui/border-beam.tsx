// src/components/magicui/border-beam.tsx
// Parent must have `position: relative` and `overflow: hidden`.

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export function BorderBeam({
  className,
  duration = 15,
  delay = 0,
  colorFrom = "#C9A96E",
  colorTo = "#004421",
  borderWidth = 1.5,
  contentBackground = "#fdf9ed",
}: {
  className?: string;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  /** Background color of the parent card — used to mask the interior. Defaults to Charm surface. */
  contentBackground?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--duration": `${duration}s`,
          "--delay": delay ? `-${delay}s` : "0s",
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className,
      )}
    >
      {/* Spinning conic gradient — clipped by the overflow:hidden parent */}
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 15%, ${colorTo} 30%, transparent 40%)`,
          animationDuration: "var(--duration)",
          animationDelay: "var(--delay)",
        }}
        className="absolute inset-[-150%] animate-spin [animation-timing-function:linear]"
      />
      {/* Inner mask punches out the card interior, leaving only the border strip */}
      <div
        style={{
          inset: `${borderWidth}px`,
          background: contentBackground,
        }}
        className="absolute rounded-[inherit]"
      />
    </div>
  );
}
