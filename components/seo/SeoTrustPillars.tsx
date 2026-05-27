import { FadeIn } from "@/components/FadeIn";

export type SeoTrustPillarsProps = {
  heading: string;
  intro?: string;
  pillars: readonly { label: string; title: string; body: string }[];
};

/**
 * "Klinik yaklaşım & güven" bölümü.
 * AuthoritySection ile aynı görsel dili kullanır; sayfa içinde
 * etik & gizlilik mesajını ölçülü biçimde aktarır.
 */
export function SeoTrustPillars({ heading, intro, pillars }: SeoTrustPillarsProps) {
  if (pillars.length === 0) return null;

  return (
    <FadeIn as="section">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Klinik Yaklaşım</p>
      <h2 className="heading-section max-w-2xl">{heading}</h2>
      {intro ? (
        <p className="body-lead mt-5 max-w-2xl sm:mt-6">{intro}</p>
      ) : null}

      <ul className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
        {pillars.map((pillar) => (
          <li
            key={pillar.title}
            className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ice-blue pt-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:pt-10"
          >
            <span className="font-display text-xl font-semibold tracking-[-0.02em] text-neon-turquoise sm:text-2xl">
              {pillar.label}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
                {pillar.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
