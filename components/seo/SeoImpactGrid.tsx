import { FadeIn } from "@/components/FadeIn";

export type SeoImpactItem = {
  title: string;
  body: string;
};

type SeoImpactGridProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: readonly SeoImpactItem[];
};

/**
 * 4 başlıklı klinik etki / hizmet kapsamı kartları.
 * Mevcut `editorial-card` stilini kullanır; ana sayfa
 * `ServicesGrid`'in görsel diliyle uyumludur.
 */
export function SeoImpactGrid({
  eyebrow,
  heading,
  intro,
  items,
}: SeoImpactGridProps) {
  return (
    <FadeIn as="section">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
          {intro}
        </p>
      ) : null}

      <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-7">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.04} as="article">
            <div className="editorial-card h-full">
              <span
                className="font-display text-xs font-semibold tabular-nums text-neon-turquoise sm:text-sm"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body sm:leading-[1.9]">
                {item.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
