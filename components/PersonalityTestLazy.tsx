"use client";

import dynamic from "next/dynamic";

const PersonalityTest = dynamic(
  () =>
    import("@/components/PersonalityTest").then((m) => ({
      default: m.PersonalityTest,
    })),
  {
    ssr: false,
    loading: () => (
      <section
        id="kisilik-testi"
        className="mb-16 border-t border-b border-ice-blue/50 bg-mesh-sky py-10 pb-16 sm:mb-24 sm:py-14 sm:pb-20 lg:mb-32 lg:py-16 lg:pb-24"
        aria-hidden
      >
        <div className="mx-auto max-w-xl px-5 sm:px-6 lg:mx-auto lg:max-w-editorial lg:px-12">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-4 h-3 w-24 rounded bg-ice-blue/80" />
            <div className="mx-auto h-9 w-64 max-w-full rounded bg-ice-blue/60 sm:h-10" />
            <div className="mx-auto mt-3 h-5 w-32 rounded bg-ice-blue/50" />
          </div>
          <div className="editorial-card mx-auto mt-6 min-h-[14rem] p-5 sm:mt-7 sm:min-h-[15rem] sm:p-6" />
        </div>
      </section>
    ),
  }
);

export function PersonalityTestLazy() {
  return <PersonalityTest />;
}
