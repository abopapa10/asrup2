import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { contactCopy } from "@/lib/contact-copy";

type SeoCTAProps = {
  eyebrow?: string;
  /** Premium ve sakin tek cümlelik başlık */
  heading?: string;
  caption?: string;
};

export function SeoCTA({
  eyebrow = contactCopy.seoEyebrow,
  heading,
  caption = contactCopy.seoCaption,
}: SeoCTAProps) {
  return (
    <FadeIn as="section" className="max-w-3xl">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      {heading ? (
        <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
          {heading}
        </h2>
      ) : null}
      {caption ? (
        <p className={`max-w-xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] ${heading ? "mt-4 sm:mt-5" : ""} mb-6`}>
          {caption}
        </p>
      ) : null}
      <CtaBlock variant="banner" />
    </FadeIn>
  );
}
