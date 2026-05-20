"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CtaBlock } from "@/components/CtaBlock";
import { GoogleLogo } from "@/components/GoogleLogo";
import { StarRating } from "@/components/StarRating";

const reviews = [
  {
    name: "E. K.",
    date: "2 ay önce",
    text: "Klinik ortamı son derece sakin ve profesyonel. İlk seans öncesi bilgilendirme süreci şeffaf ve güven vericiydi. Bursa'da psikolog arayanlara gönül rahatlığıyla önerebilirim.",
  },
  {
    name: "M. A.",
    date: "3 ay önce",
    text: "Çift terapisi sürecinde iletişim becerilerimiz belirgin şekilde güçlendi. Uzman yaklaşımı bilimsel ve saygılı; danışan gizliliği her aşamada hissediliyor.",
  },
  {
    name: "S. Y.",
    date: "4 ay önce",
    text: "EMDR seansları travma sonrası yaşadığım zorlanmaları yönetmemde çok etkili oldu. Seans süresi ve süreç net anlatıldı; etik ilkelere bağlı bir klinik deneyim.",
  },
  {
    name: "D. T.",
    date: "5 ay önce",
    text: "Bireysel terapi desteği kaygı ve stres yönetiminde kalıcı fark yarattı. Randevu ve asistan yönlendirmesi hızlı; Bursa psikolog tavsiye arayanlar için güçlü bir referans.",
  },
] as const;

function GoogleReviewCard({
  name,
  date,
  text,
}: {
  name: string;
  date: string;
  text: string;
}) {
  return (
    <article className="review-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A73E8] text-sm font-semibold text-white sm:h-11 sm:w-11"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#202124]">{name}</p>
            <p className="text-xs text-[#5F6368]">{date}</p>
          </div>
        </div>
        <GoogleLogo className="h-5 w-5 shrink-0" />
      </div>
      <div className="mt-3 sm:mt-4">
        <StarRating />
      </div>
      <p className="mt-4 flex-1 text-sm leading-[1.7] text-[#3C4043] sm:mt-5">
        {text}
      </p>
    </article>
  );
}

export function GoogleReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".review-card");
    const amount = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    window.setTimeout(updateScrollState, 450);
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

        <p className="mt-6 text-xs font-medium text-slate-body/70 md:hidden">
          Kaydırarak tüm yorumları görüntüleyin →
        </p>

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
              onScroll={updateScrollState}
              className="reviews-track -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
              role="region"
              aria-label="Google yorumları"
            >
              {reviews.map((review) => (
                <GoogleReviewCard key={review.name} {...review} />
              ))}
            </div>
          </div>
        </div>

        <div id="randevu-orta" className="mt-12 sm:mt-16">
          <CtaBlock variant="banner" />
        </div>
      </div>
    </section>
  );
}
