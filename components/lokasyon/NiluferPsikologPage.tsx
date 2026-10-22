import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLdScript } from "@/components/JsonLdScript";
import { LandingHero } from "@/components/LandingHero";
import { PortraitFrame } from "@/components/PortraitFrame";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { RelatedPages } from "@/components/seo/RelatedPages";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { SeoTestimonial } from "@/components/seo/SeoTestimonial";
import {
  niluferAuthorityHero,
  niluferClinicalApproach,
  niluferEeatSection,
  niluferFaqs,
  niluferFeaturedTestimonial,
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

const [heroLead, ...heroExtra] = niluferAuthorityHero.sentences;

export function NiluferPsikologPage() {
  return (
    <>
      <JsonLdScript data={buildNiluferAuthorityJsonLd()} />

      <LandingHero
        size="page"
        eyebrow={niluferAuthorityHero.eyebrow}
        title={niluferAuthorityHero.h1}
        subtitle={niluferAuthorityHero.h2}
        lead={heroLead}
        proofPoints={niluferAuthorityHero.proofPoints}
        whatsappSource="nilufer-hero"
        portraitSrc={siteConfig.images.portraitHeroBand}
        portraitAlt="Nilüfer psikolog A. Alparslan Sancar — Özlüce ofisinde"
        topSlot={<SeoBreadcrumb items={breadcrumbItems} />}
      />

      <article className="border-b border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <div className="space-y-20 sm:space-y-28 lg:space-y-32">
            <SeoTestimonial
              heading={niluferFeaturedTestimonial.heading}
              intro={niluferFeaturedTestimonial.intro}
              featuredId={niluferFeaturedTestimonial.featuredId}
              supportingIds={niluferFeaturedTestimonial.supportingIds}
            />

            <SeoContentSection
              heading={niluferClinicalApproach.heading}
              paragraphs={[...heroExtra, ...niluferClinicalApproach.paragraphs]}
              delay={0}
            />

            <CtaBlock variant="banner" className="max-w-3xl" />

            <section className="max-w-3xl" aria-labelledby="nilufer-services-heading">
              <h2
                id="nilufer-services-heading"
                className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
              >
                Nilüfer ve psikoloji konuları
              </h2>
              <p className="mt-5 text-sm leading-[1.85] text-slate-body sm:mt-6 sm:text-[0.9375rem]">
                Aşağıdaki başlıklar kaygı, ilişkiler ve travma literatürü üzerine
                bilgilendirici yazılara gider.
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
              className="max-w-editorial"
              aria-labelledby="nilufer-eeat-heading"
            >
              <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                <div>
                  <h2
                    id="nilufer-eeat-heading"
                    className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
                  >
                    {niluferEeatSection.heading}
                  </h2>
                  <div className="mx-auto mt-8 w-full max-w-[20rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
                    <PortraitFrame
                      src={siteConfig.images.portraitAbout}
                      alt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
                      variant="clinical"
                      align="left"
                      imageClassName="object-cover object-[50%_18%]"
                    />
                  </div>
                  <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
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
                <div className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:sticky lg:top-28 lg:block lg:max-w-none">
                  <PortraitFrame
                    src={siteConfig.images.portraitAbout}
                    alt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
                    variant="clinical"
                    align="right"
                    imageClassName="object-cover object-[50%_18%]"
                  />
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
                className="mt-8 overflow-hidden border border-ice-blue bg-white"
                role="region"
                aria-label={niluferMapSection.mapEmbedLabel}
              >
                {siteConfig.googleMapsEmbedUrl ? (
                  <iframe
                    title={niluferMapSection.mapEmbedLabel}
                    src={siteConfig.googleMapsEmbedUrl}
                    className="h-[220px] w-full border-0 sm:h-[280px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex min-h-[220px] flex-col items-center justify-center p-8 text-center sm:min-h-[280px] sm:p-10">
                    <MapPin
                      strokeWidth={1.25}
                      className="mb-4 h-10 w-10 text-neon-turquoise"
                      aria-hidden
                    />
                    <p className="font-display text-sm font-semibold text-slate-charcoal sm:text-base">
                      {niluferMapSection.mapEmbedLabel}
                    </p>
                  </div>
                )}
                <div className="border-t border-ice-blue/60 px-5 py-4 sm:px-6">
                  <p className="text-sm font-medium text-slate-charcoal">
                    {niluferMapSection.mapPlaceholderNote}
                  </p>
                  {siteConfig.googleMapsUrl ? (
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial mt-3 inline-block text-sm font-medium"
                    >
                      Google Haritalar&apos;da aç
                    </a>
                  ) : null}
                </div>
              </div>
            </section>

            <CtaBlock variant="banner" className="max-w-3xl" />

            <SeoFaq heading="Sık Sorulan Sorular" items={niluferFaqs} />

            <SeoCTA
              eyebrow="Nilüfer Özlüce"
              heading="Nilüfer psikolog için yazın"
              caption="Adres, gün-saat ve yüz yüze / online tercihi WhatsApp veya telefonla netleşir. Aynı gün içinde dönüş."
              whatsappSource="nilufer-landing-cta"
            />

            <RelatedPages
              heading="Nilüfer psikolog — ilgili sayfalar"
              items={niluferRelatedLinks}
            />
          </div>
        </div>
      </article>
    </>
  );
}
