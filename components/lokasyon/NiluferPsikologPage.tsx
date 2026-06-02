import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLdScript } from "@/components/JsonLdScript";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { RelatedPages } from "@/components/seo/RelatedPages";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { SeoFaq } from "@/components/seo/SeoFaq";
import {
  niluferAuthorityHero,
  niluferClinicalApproach,
  niluferEeatSection,
  niluferFaqs,
  niluferMapSection,
  niluferPricingSection,
  niluferProcessSection,
  niluferRelatedLinks,
  niluferServiceBlocks,
  niluferWhyNiluferSection,
} from "@/lib/lokasyon/nilufer-psikolog-authority";
import { buildNiluferAuthorityJsonLd } from "@/lib/page-structured-data";
import { siteConfig } from "@/lib/site-config";

const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Lokasyonlar", href: "/lokasyon" },
  { label: niluferAuthorityHero.h1 },
];

export function NiluferPsikologPage() {
  return (
    <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
      <JsonLdScript data={buildNiluferAuthorityJsonLd()} />

      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <SeoBreadcrumb items={breadcrumbItems} className="mb-8 sm:mb-10" />

        <header>
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">
            {niluferAuthorityHero.eyebrow}
          </p>
          <h1 className="heading-section max-w-4xl">
            {niluferAuthorityHero.h1}
          </h1>
          <h2 className="mt-6 max-w-3xl font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-xl">
            {niluferAuthorityHero.h2}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {niluferAuthorityHero.sentences.map((sentence) => (
              <p
                key={sentence.slice(0, 48)}
                className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]"
              >
                {sentence}
              </p>
            ))}
          </div>
          <div className="mt-8 max-w-xl sm:mt-10">
            <CtaBlock variant="inline" />
          </div>
        </header>

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28 lg:mt-28 lg:space-y-32">
          <SeoContentSection
            heading={niluferClinicalApproach.heading}
            paragraphs={niluferClinicalApproach.paragraphs}
            delay={0}
          />

          <CtaBlock variant="banner" className="max-w-3xl" />

          <section className="max-w-3xl" aria-labelledby="nilufer-services-heading">
            <h2
              id="nilufer-services-heading"
              className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
            >
              Nilüfer Psikolog Hizmetleri
            </h2>
            <p className="mt-5 text-sm leading-[1.85] text-slate-body sm:mt-6 sm:text-[0.9375rem]">
              Bursa Nilüfer psikolog hizmetleri; bireysel, çift ve travma odaklı
              protokollerle yapılandırılır. Aşağıdaki alanlar için ayrıntılı
              sayfalara geçebilir veya randevu talebinde bulunabilirsiniz.
            </p>

            <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
              {niluferServiceBlocks.map((block) => (
                <article
                  key={block.id}
                  className="border-t border-ice-blue/60 pt-10 first:border-t-0 first:pt-0 sm:pt-12"
                >
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                    {block.title}
                  </h3>
                  <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                    {block.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]"
                      >
                        {renderInlineMarkup(paragraph)}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={block.href}
                    className="link-editorial mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    {block.linkLabel}
                    <ArrowUpRight
                      strokeWidth={1.25}
                      className="h-4 w-4"
                      aria-hidden
                    />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <SeoContentSection
            heading={niluferPricingSection.heading}
            paragraphs={niluferPricingSection.paragraphs}
          />

          <CtaBlock variant="inline" className="max-w-3xl" />

          <SeoContentSection
            heading={niluferWhyNiluferSection.heading}
            paragraphs={niluferWhyNiluferSection.paragraphs}
          />

          <SeoContentSection
            heading={niluferProcessSection.heading}
            paragraphs={niluferProcessSection.paragraphs}
          />

          <section
            className="max-w-3xl"
            aria-labelledby="nilufer-eeat-heading"
          >
            <h2
              id="nilufer-eeat-heading"
              className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
            >
              {niluferEeatSection.heading}
            </h2>
            <div className="mt-8 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-start lg:gap-12">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden border border-ice-blue bg-soft-sky sm:max-w-[260px] lg:mx-0">
                <Image
                  src={siteConfig.images.portraitClinical}
                  alt="nilüfer psikolog bursa klinik terapi"
                  width={520}
                  height={650}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 220px, 260px"
                />
              </div>
              <div className="space-y-4 sm:space-y-5">
                {niluferEeatSection.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]"
                  >
                    {renderInlineMarkup(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section
            className="max-w-3xl"
            aria-labelledby="nilufer-map-heading"
          >
            <h2
              id="nilufer-map-heading"
              className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
            >
              {niluferMapSection.heading}
            </h2>
            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {niluferMapSection.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-8 flex min-h-[220px] flex-col items-center justify-center border border-dashed border-ice-blue bg-white/80 p-8 text-center sm:min-h-[280px] sm:p-10"
              role="region"
              aria-label={niluferMapSection.mapEmbedLabel}
            >
              <MapPin
                strokeWidth={1.25}
                className="mb-4 h-10 w-10 text-neon-turquoise"
                aria-hidden
              />
              <p className="font-display text-sm font-semibold text-slate-charcoal sm:text-base">
                {niluferMapSection.mapEmbedLabel}
              </p>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-body sm:text-sm">
                {niluferMapSection.mapPlaceholderNote}
              </p>
              {siteConfig.googleMapsUrl ? (
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial mt-5 text-sm font-medium"
                >
                  Google Haritalar&apos;da aç
                </a>
              ) : null}
            </div>
          </section>

          <CtaBlock variant="banner" className="max-w-3xl" />

          <SeoFaq
            heading="Sık Sorulan Sorular"
            items={niluferFaqs}
          />

          <SeoCTA
            eyebrow="Nilüfer psikolog randevu"
            caption="Bursa Nilüfer'de bireysel terapi, çift terapisi ve EMDR için WhatsApp veya telefon ile aynı gün yanıt."
          />

          <RelatedPages
            heading="Nilüfer psikolog — ilgili sayfalar"
            items={niluferRelatedLinks}
          />
        </div>
      </div>
    </article>
  );
}
