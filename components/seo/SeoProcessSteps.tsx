import { FadeIn } from "@/components/FadeIn";

export type SeoProcessStep = {
  title: string;
  body: string;
};

type SeoProcessStepsProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  steps: readonly SeoProcessStep[];
};

/**
 * Klinik süreç adımları — numaralı dikey liste.
 * Görsel dil ana sayfa `AuthoritySection` philosophy bloğu
 * ile uyumludur; daha sade tutulmuştur.
 */
export function SeoProcessSteps({
  eyebrow,
  heading,
  intro,
  steps,
}: SeoProcessStepsProps) {
  return (
    <FadeIn as="section" className="max-w-3xl">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
          {intro}
        </p>
      ) : null}

      <ol className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ice-blue pt-7 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:pt-8"
          >
            <span
              className="font-display text-lg font-semibold tracking-[-0.02em] text-neon-turquoise sm:text-xl"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.85] text-slate-body sm:leading-[1.9]">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </FadeIn>
  );
}
