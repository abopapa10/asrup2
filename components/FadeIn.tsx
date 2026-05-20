import { createElement, type CSSProperties, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
}: FadeInProps) {
  return createElement(
    as,
    {
      className: `fade-in ${className}`.trim(),
      style: { animationDelay: `${delay}s` } as CSSProperties,
    },
    children
  );
}
