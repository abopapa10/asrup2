"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CtaBlock } from "@/components/CtaBlock";
import { GoogleLogo } from "@/components/GoogleLogo";
import { StarRating } from "@/components/StarRating";
import {
  googleReviews,
  REVIEW_CLAMP_CHARS,
  type GoogleReview,
} from "@/lib/google-reviews";

const AUTO_SCROLL_SPEED = 0.55;
const USER_PAUSE_MS = 8000;
const AUTO_SCROLL_FLAG_MS = 120;

function getInitial(name: string) {
  const trimmed = name.trim();
  return trimmed.charAt(0).toLocaleUpperCase("tr-TR");
}

function GoogleReviewCard({ name, date, text }: GoogleReview) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = text.length > REVIEW_CLAMP_CHARS;

  return (
    <article className="review-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A73E8] text-sm font-semibold text-white sm:h-11 sm:w-11"
            aria-hidden
          >
            {getInitial(name)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#202124]">{name}</p>
            <p className="text-xs text-[#5F6368]">{date}</p>
          </div>
        </div>
        <GoogleLogo className="h-5 w-5 shrink-0" />
      </div>

      <div className="mt-3 sm:mt-4">
        <StarRating />
      </div>

      <div className="review-card-body mt-4 min-h-0 flex-1 sm:mt-5">
        <p
          className={`review-card-text text-[0.9375rem] leading-[1.72] text-[#3C4043] ${
            expanded || !canExpand ? "" : "review-card-text-clamped"
          }`}
        >
          {text}
        </p>
        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="review-card-toggle mt-3 text-sm font-semibold text-[#1A73E8] transition-colors hover:text-[#1558B0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
            aria-expanded={expanded}
          >
            {expanded ? "Daha az göster" : "Devamını oku"}
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function GoogleReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const autoScrollingUntilRef = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(1);

  const pauseAutoScroll = useCallback(() => {
    pauseUntilRef.current = Date.now() + USER_PAUSE_MS;
  }, []);

  const markAutoScrolling = useCallback(() => {
    autoScrollingUntilRef.current = Date.now() + AUTO_SCROLL_FLAG_MS;
  }, []);

  const isAutoScrolling = useCallback(() => {
    return Date.now() < autoScrollingUntilRef.current;
  }, []);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setThumbRatio(1);
      return;
    }
    setScrollProgress(el.scrollLeft / maxScroll);
    setThumbRatio(Math.min(1, el.clientWidth / el.scrollWidth));
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let frame = 0;
    let lastUiUpdate = 0;

    const tick = (now: number) => {
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (maxScroll > 4 && Date.now() > pauseUntilRef.current) {
        markAutoScrolling();

        if (el.scrollLeft >= maxScroll - 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += AUTO_SCROLL_SPEED;
        }

        if (now - lastUiUpdate > 120) {
          updateScrollState();
          lastUiUpdate = now;
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateScrollState();
    });
    resizeObserver.observe(el);

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, markAutoScrolling]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    pauseAutoScroll();
    const card = el.querySelector<HTMLElement>(".review-card");
    const amount = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    window.setTimeout(updateScrollState, 450);
  };

  const handleUserScroll = () => {
    if (!isAutoScrolling()) {
      pauseAutoScroll();
    }
    updateScrollState();
  };

  const handleUserInteract = () => {
    pauseAutoScroll();
  };

  return (
    <section
      id="yorumlar"
      aria-labelledby="reviews-heading"
      className="overflow-hidden border-t border-ice-blue/40 bg-mesh-sky py-20 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <div className="flex max-w-2xl flex-col items-start">
          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <GoogleLogo className="h-5 w-5" />
            <span className="text-xs font-medium text-[#5F6368]">Google</span>
          </div>
          <p className="eyebrow eyebrow-cta mb-4">Sosyal Kanıt</p>
          <h2 id="reviews-heading" className="heading-section">
            Danışan Deneyimleri
          </h2>
          <p className="body-lead mt-4 sm:mt-5">
            Bursa ve İstanbul&apos;daki klinik çalışmalarımızdan gelen güven
            veren geri bildirimler.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-14">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Önceki yorumlar"
            className="absolute -left-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-ice-blue bg-white p-2.5 text-slate-charcoal shadow-sm transition-opacity disabled:opacity-25 md:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
          >
            <ChevronLeft strokeWidth={1.25} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Sonraki yorumlar"
            className="absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-ice-blue bg-white p-2.5 text-slate-charcoal shadow-sm transition-opacity disabled:opacity-25 md:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
          >
            <ChevronRight strokeWidth={1.25} className="h-5 w-5" />
          </button>

          <div className="md:carousel-fade-mask">
            <div
              ref={trackRef}
              onScroll={handleUserScroll}
              onTouchStart={handleUserInteract}
              onWheel={handleUserInteract}
              onMouseDown={handleUserInteract}
              className="reviews-track -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
              role="region"
              aria-label="Google yorumları — kaydırarak gezinin"
            >
              {googleReviews.map((review) => (
                <GoogleReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>

          <div
            className="reviews-scroll-indicator mt-5 md:hidden"
            aria-hidden
          >
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
        </div>

        <div id="randevu-orta" className="mt-16 sm:mt-20 md:mt-16">
          <CtaBlock variant="banner" />
        </div>
      </div>
    </section>
  );
}
