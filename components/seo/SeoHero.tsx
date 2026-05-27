import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";

type SeoHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  intro?: string;
  /** Hero altında sakin bir inline CTA çifti gösterilsin mi? */
  showCta?: boolean;
};

export function SeoHero({
  eyebrow,
  title,
  lead,
  intro,
  showCta = false,
}: SeoHeroProps) {
  return (
    <FadeIn as="article">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h1 className="heading-section max-w-3xl">{title}</h1>
      <p className="body-lead mt-6 max-w-2xl">{lead}</p>
      {intro ? (
        <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
          {intro}
        </p>
      ) : null}

      {showCta ? (
        <div className="mt-8 max-w-xl sm:mt-10">
          <CtaBlock variant="inline" />
        </div>
      ) : null}
    </FadeIn>
  );
}
