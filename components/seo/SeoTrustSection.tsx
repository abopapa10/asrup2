import { FadeIn } from "@/components/FadeIn";

export type SeoTrustPillar = {
  title: string;
  body: string;
};

type SeoTrustSectionProps = {
  eyebrow: string;
  heading: string;
  pillars: readonly SeoTrustPillar[];
};

/**
 * Klinik güven bölümü — yaklaşım, etik ve klinik standardı
 * sade bir 3 sütunlu yapıda anlatır. Ağır kart kullanılmaz;
 * üst kenardan ince turkuaz aksan ve okumayı kolaylaştıran
 * ferah dağılım tercih edilir.
 */
export function SeoTrustSection({
  eyebrow,
  heading,
  pillars,
}: SeoTrustSectionProps) {
  return (
    <FadeIn as="section">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>

      <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.05} as="article">
            <div className="border-t-2 border-t-neon-turquoise/60 pt-6 sm:pt-7">
              <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body sm:leading-[1.9]">
                {pillar.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
