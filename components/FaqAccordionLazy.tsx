"use client";

import dynamic from "next/dynamic";

const FaqAccordion = dynamic(
  () =>
    import("@/components/FaqAccordion").then((m) => ({
      default: m.FaqAccordion,
    })),
  {
    loading: () => (
      <section
        className="border-b border-ice-blue/40 bg-mesh-blue py-16 sm:py-24"
        aria-hidden
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <div className="mx-auto h-8 w-56 rounded bg-ice-blue/50" />
          <div className="mt-10 space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-14 rounded border border-ice-blue/60 bg-white/80"
              />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

export function FaqAccordionLazy() {
  return <FaqAccordion />;
}
