import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";

type SeoContentSectionProps = {
  heading: string;
  paragraphs: readonly string[];
  /** Görsel sıralama için animasyon gecikmesi (saniye) */
  delay?: number;
};

export function SeoContentSection({
  heading,
  paragraphs,
  delay = 0,
}: SeoContentSectionProps) {
  return (
    <FadeIn delay={delay} as="section" className="max-w-3xl">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]"
          >
            {renderInlineMarkup(paragraph)}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}
