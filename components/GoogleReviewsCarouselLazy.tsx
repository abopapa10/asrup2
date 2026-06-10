"use client";

import dynamic from "next/dynamic";

const GoogleReviewsCarousel = dynamic(
  () =>
    import("@/components/GoogleReviewsCarousel").then((m) => ({
      default: m.GoogleReviewsCarousel,
    })),
  {
    ssr: false,
    loading: () => (
      <section
        id="yorumlar"
        className="border-b border-ice-blue/40 bg-white py-16 sm:py-24"
        aria-hidden
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <div className="mx-auto h-8 w-48 rounded bg-ice-blue/50" />
          <div className="mt-10 flex gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 w-[min(82vw,18rem)] shrink-0 rounded border border-ice-blue/60 bg-ice-blue/20"
              />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

export function GoogleReviewsCarouselLazy() {
  return <GoogleReviewsCarousel />;
}
