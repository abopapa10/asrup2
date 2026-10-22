import { CtaBlock } from "@/components/CtaBlock";

type SeoHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  intro?: string;
  /** Hero altında sakin bir CTA çifti gösterilsin mi? */
  showCta?: boolean;
  proofPoints?: readonly string[];
  whatsappSource?: string;
};

/** SEO landing hero — sunucu render, LCP için animasyon yok */
export function SeoHero({
  eyebrow,
  title,
  lead,
  intro,
  showCta = false,
  proofPoints,
  whatsappSource = "seo-landing-hero",
}: SeoHeroProps) {
  return (
    <article>
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h1 id="hero-heading" className="heading-section max-w-3xl">
        {title}
      </h1>
      <p className="body-lead mt-6 max-w-2xl">{lead}</p>
      {intro ? (
        <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
          {intro}
        </p>
      ) : null}

      {proofPoints && proofPoints.length > 0 ? (
        <ul className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 sm:mt-7">
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm text-slate-charcoal"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-turquoise"
              />
              {point}
            </li>
          ))}
        </ul>
      ) : null}

      {showCta ? (
        <div className="mt-8 max-w-xl sm:mt-10">
          <CtaBlock variant="inline" whatsappSource={whatsappSource} />
        </div>
      ) : null}
    </article>
  );
}
