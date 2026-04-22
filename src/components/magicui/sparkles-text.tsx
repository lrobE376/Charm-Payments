// src/components/magicui/sparkles-text.tsx
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactNode } from "react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  size: number;
}

const CHARM_COLORS = ["#C9A96E", "#E8C99A", "#004421", "#1E5C35"];

function generateSparkle(color: string): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color,
    delay: Math.random() * 1.5,
    size: Math.round(Math.random() * 8 + 6),
  };
}

function SparkleIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </svg>
  );
}

export function SparklesText({
  children,
  className,
  sparkleCount = 8,
}: {
  children: ReactNode;
  className?: string;
  sparkleCount?: number;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: sparkleCount }, () =>
        generateSparkle(
          CHARM_COLORS[Math.floor(Math.random() * CHARM_COLORS.length)],
        ),
      ),
    );

    const interval = setInterval(() => {
      const color = CHARM_COLORS[Math.floor(Math.random() * CHARM_COLORS.length)];
      setSparkles((prev) => [...prev.slice(1), generateSparkle(color)]);
    }, 500);

    return () => clearInterval(interval);
  }, [sparkleCount]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <SparkleIcon color={sparkle.color} size={sparkle.size} />
        </span>
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
}
