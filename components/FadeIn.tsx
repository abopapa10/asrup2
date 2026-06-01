import { createElement, type CSSProperties, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  /**
   * Above-the-fold / LCP alanları için animasyonu kapatır.
   * Varsayılan false — alt bölümlerde kademeli giriş korunur.
   */
  instant?: boolean;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
  instant = false,
}: FadeInProps) {
  const classes = instant
    ? className.trim()
    : `fade-in ${className}`.trim();

  return createElement(
    as,
    {
      className: classes || undefined,
      style: instant
        ? undefined
        : ({ animationDelay: `${delay}s` } as CSSProperties),
    },
    children
  );
}
