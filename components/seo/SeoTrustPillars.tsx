import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";

export type SeoTrustPillarsProps = {
  heading: string;
  intro?: string;
  pillars: readonly { label: string; title: string; body: string }[];
  portraitSrc?: string;
  portraitAlt?: string;
};

function PillarList({
  pillars,
}: {
  pillars: SeoTrustPillarsProps["pillars"];
}) {
  return (
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
  );
}

/**
 * "Klinik yaklaşım & güven" bölümü.
 * AuthoritySection ile aynı görsel dili kullanır; sayfa içinde
 * etik & gizlilik mesajını ölçülü biçimde aktarır.
 */
export function SeoTrustPillars({
  heading,
  intro,
  pillars,
  portraitSrc,
  portraitAlt,
}: SeoTrustPillarsProps) {
  if (pillars.length === 0) return null;

  const headingBlock = (
    <>
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Klinik Yaklaşım</p>
      <h2 className="heading-section max-w-2xl">{heading}</h2>
      {intro ? (
        <p className="body-lead mt-5 max-w-2xl sm:mt-6">{intro}</p>
      ) : null}
    </>
  );

  if (!portraitSrc) {
    return (
      <FadeIn as="section">
        {headingBlock}
        <PillarList pillars={pillars} />
      </FadeIn>
    );
  }

  return (
    <FadeIn as="section">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div>
          {headingBlock}
          <div className="mx-auto mt-8 w-full max-w-[20rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
            <PortraitFrame
              src={portraitSrc}
              alt={portraitAlt ?? ""}
              variant="clinical"
              align="left"
              imageClassName="object-cover object-[50%_18%]"
            />
          </div>
          <PillarList pillars={pillars} />
        </div>
        <div className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:sticky lg:top-28 lg:block lg:max-w-none">
          <PortraitFrame
            src={portraitSrc}
            alt={portraitAlt ?? ""}
            variant="clinical"
            align="right"
            imageClassName="object-cover object-[50%_18%]"
          />
        </div>
      </div>
    </FadeIn>
  );
}
