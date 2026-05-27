import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { ArticleFaqItem } from "@/lib/article-types";

type ArticleFaqListProps = {
  items: readonly ArticleFaqItem[];
  heading?: string;
};

/**
 * Makale altında görünür şekilde render edilen SSS bloğu.
 * Native `<details>` / `<summary>` üzerine kuruludur — JS gerektirmez,
 * SEO için ideal markup üretir ve `buildArticleJsonLd` içindeki
 * FAQPage schema'sıyla içerik düzeyinde birebir eşleşir.
 */
export function ArticleFaqList({
  items,
  heading = "Sıkça Sorulan Sorular",
}: ArticleFaqListProps) {
  if (items.length === 0) return null;

  return (
    <FadeIn as="section" aria-label={heading} className="mt-16 sm:mt-20">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">SSS</p>
      <h2 className="heading-section text-left">{heading}</h2>

      <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:gap-4">
        {items.map((item, index) => (
          <details
            key={item.question}
            className="article-faq-item faq-item group"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-soft-sky/15 sm:gap-6 sm:px-7 sm:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-slate-charcoal [&::-webkit-details-marker]:hidden">
              <span className="flex gap-3 sm:gap-5">
                <span
                  className="mt-0.5 font-display text-xs font-semibold tabular-nums text-neon-turquoise sm:text-sm"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                  {item.question}
                </span>
              </span>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-ice-blue bg-white transition-all duration-500 ease-gallery group-open:rotate-180 group-open:border-neon-turquoise/60 group-open:bg-neon-turquoise/15">
                <ChevronDown
                  strokeWidth={1.25}
                  className="h-4 w-4 text-slate-body"
                  aria-hidden
                />
              </span>
            </summary>

            <div className="px-5 pb-5 pt-0 sm:px-7 sm:pb-7">
              <div className="faq-answer max-w-prose">
                <p>{item.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </FadeIn>
  );
}
