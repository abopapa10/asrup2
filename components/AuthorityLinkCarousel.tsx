"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import type { AuthorityLinkItem } from "@/lib/authority-links";

type AuthorityLinkCarouselProps = {
  title: string;
  eyebrow?: string;
  lead?: string;
  items: readonly AuthorityLinkItem[];
  badgeLabel?: string;
};

export function AuthorityLinkCarousel({
  title,
  eyebrow = "Uzmanlık",
  lead,
  items,
  badgeLabel = "Sayfa",
}: AuthorityLinkCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(1);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const ratio =
      track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1;
    setThumbRatio(Math.min(1, Math.max(0.2, ratio)));
    setScrollProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  return (
    <section aria-labelledby="expertise-carousel-heading">
      <FadeIn>
        <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
        <h2 id="expertise-carousel-heading" className="heading-section max-w-3xl">
          {title}
        </h2>
        {lead ? <p className="body-lead mt-4 max-w-2xl sm:mt-5">{lead}</p> : null}
      </FadeIn>

      <div className="relative mt-8 sm:mt-10">
        <div className="carousel-fade-mask">
          <div
            ref={trackRef}
            onScroll={updateScrollState}
            className="expertise-track -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            role="region"
            aria-label={`${title} — yatay kaydırarak gezinin`}
          >
            {items.map((item) => (
              <article key={item.href} className="expertise-card">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col no-underline"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="eyebrow text-[0.65rem]">{badgeLabel}</span>
                    <ArrowUpRight
                      strokeWidth={1.25}
                      className="h-4 w-4 text-ice-blue transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {item.label}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-[1.7] text-slate-body">
                    {item.description}
                  </p>
                  <span className="link-editorial mt-4 inline-flex text-sm">
                    {item.cta}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-scroll-indicator mt-5 lg:hidden" aria-hidden>
          <div className="reviews-scroll-track">
            <div
              className="reviews-scroll-thumb"
              style={{
                width: `${thumbRatio * 100}%`,
                marginLeft: `${scrollProgress * (100 - thumbRatio * 100)}%`,
              }}
            />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-body/70 lg:hidden">
          Kartları yatay kaydırarak tüm alanları görebilirsiniz
        </p>
      </div>
    </section>
  );
}
