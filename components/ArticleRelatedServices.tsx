import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { ArticleRelatedService } from "@/lib/article-types";

type ArticleRelatedServicesProps = {
  services: readonly ArticleRelatedService[];
};

/**
 * Makalenin altında klinik bağlamla eşleşen 1-3 hizmet/SEO landing
 * sayfasına yönelik premium internal-link bloğu.
 *
 * Görsel dil: editorial-card pattern, neon-turquoise accent ve
 * yumuşak hover animasyonu.
 */
export function ArticleRelatedServices({ services }: ArticleRelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <FadeIn
      as="section"
      aria-labelledby="article-related-services-heading"
      className="mt-16 sm:mt-20"
    >
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">İlgili Hizmetler</p>
      <h2
        id="article-related-services-heading"
        className="heading-section text-left"
      >
        Klinik destek seçenekleri
      </h2>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="editorial-card group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-slate-body/80 sm:text-[0.6875rem]">
                Hizmet
              </p>
              <span
                aria-hidden
                className="text-xs text-slate-body/70 transition-transform duration-500 ease-gallery group-hover:translate-x-1 sm:text-sm"
              >
                →
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:mt-5 sm:text-xl">
              {service.label}
            </h3>

            {service.description ? (
              <p className="mt-3 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                {service.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}
