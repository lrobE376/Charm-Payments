// src/components/magicui/bento-grid.tsx
import { cn } from "@/lib/utils";
import type { ComponentType, ReactNode } from "react";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-[#fdf9ed]",
        "shadow-[0_0_0_1px_rgba(0,68,33,0.08),0_4px_16px_rgba(0,68,33,0.06)]",
        "transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(0,68,33,0.18),0_16px_48px_rgba(0,68,33,0.12)]",
        className,
      )}
    >
      <div className="overflow-hidden">{background}</div>

      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-transform duration-300 group-hover:-translate-y-10">
        <Icon className="mb-2 h-10 w-10 origin-left text-[#004421] transition-transform duration-300 group-hover:scale-75" />
        <h3 className="text-lg font-semibold text-[#1c1c15]">{name}</h3>
        <p className="text-sm leading-relaxed text-[#3d3d2e]">{description}</p>
      </div>

      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={href}
          className="pointer-events-auto text-sm font-medium text-[#004421] transition-colors hover:text-[#C9A96E]"
        >
          {cta} →
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl transition-colors duration-300 group-hover:bg-[#004421]/[0.03]" />
    </div>
  );
}
