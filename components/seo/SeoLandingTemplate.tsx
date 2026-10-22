import { ContactLocationSection } from "@/components/ContactLocationSection";
import { JsonLdScript } from "@/components/JsonLdScript";
import { LandingHero } from "@/components/LandingHero";
import { RelatedPages } from "@/components/seo/RelatedPages";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { SeoHero } from "@/components/seo/SeoHero";
import { SeoSymptomList } from "@/components/seo/SeoSymptomList";
import { SeoReferences } from "@/components/seo/SeoReferences";
import { SeoTestimonial } from "@/components/seo/SeoTestimonial";
import { SeoTrustPillars } from "@/components/seo/SeoTrustPillars";
import { buildSeoLandingJsonLd } from "@/lib/page-structured-data";
import type { SeoLandingPage, SeoSection } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-config";

type SeoLandingTemplateProps = {
  page: SeoLandingPage;
};

function renderSection(
  section: SeoSection,
  index: number,
  homeLikeLayout: boolean
) {
  switch (section.kind) {
    case "narrative":
      return (
        <SeoContentSection
          key={`section-${index}`}
          heading={section.heading}
          paragraphs={section.paragraphs}
        />
      );
    case "symptoms":
      return (
        <SeoSymptomList
          key={`section-${index}`}
          heading={section.heading}
          intro={section.intro}
          groups={section.groups}
        />
      );
    case "trust":
      return (
        <SeoTrustPillars
          key={`section-${index}`}
          heading={section.heading}
          intro={section.intro}
          pillars={section.pillars}
          portraitSrc={
            homeLikeLayout ? siteConfig.images.portraitAbout : undefined
          }
          portraitAlt={
            homeLikeLayout
              ? "Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
              : undefined
          }
        />
      );
    case "references":
      return (
        <SeoReferences
          key={`section-${index}`}
          heading={section.heading}
          items={section.items}
        />
      );
    case "testimonial":
      return (
        <SeoTestimonial
          key={`section-${index}`}
          heading={section.heading}
          intro={section.intro}
          featuredId={section.featuredId}
          supportingIds={section.supportingIds}
        />
      );
  }
}

/**
 * SEO landing page template.
 * `lib/seo-pages.ts` içindeki bir entry'yi alır ve premium tasarım
 * diline uygun, scalable bir landing sayfası render eder.
 *
 * Section sıralaması veri tarafından kontrol edilir; her sayfa kendi
 * içerik akışını esnek biçimde tanımlar.
 */
export function SeoLandingTemplate({ page }: SeoLandingTemplateProps) {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    page.parent,
    { label: page.hero.h1 },
  ];
  const homeLike = Boolean(page.homeLikeLayout);
  const portraitAlt = `${page.hero.h1} — Psikolog A. Alparslan Sancar, Nilüfer Özlüce`;

  return (
    <>
      <JsonLdScript data={buildSeoLandingJsonLd(page)} />

      {homeLike ? (
        <LandingHero
          size="page"
          eyebrow={page.hero.eyebrow}
          title={page.hero.h1}
          subtitle={
            page.hero.subtitle ??
            "Psikolog A. Alparslan Sancar · Hacettepe · Nilüfer Özlüce"
          }
          lead={page.hero.lead}
          extraParagraphs={page.hero.intro ? [page.hero.intro] : undefined}
          proofPoints={page.hero.proofPoints}
          showCta={page.hero.showCta}
          whatsappSource={`${page.slug}-hero`}
          portraitSrc={siteConfig.images.portraitHeroBand}
          portraitAlt={portraitAlt}
          topSlot={
            <SeoBreadcrumb items={breadcrumbItems} className="mb-0" />
          }
        />
      ) : null}

      <article
        className={`border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32 ${
          homeLike ? "border-b" : "border-t"
        }`}
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          {homeLike ? null : (
            <>
              <SeoBreadcrumb
                items={breadcrumbItems}
                className="mb-8 sm:mb-10"
              />
              <SeoHero
                eyebrow={page.hero.eyebrow}
                title={page.hero.h1}
                lead={page.hero.lead}
                intro={page.hero.intro}
                showCta={page.hero.showCta}
                proofPoints={page.hero.proofPoints}
                whatsappSource={`${page.slug}-hero`}
              />
            </>
          )}

          <div
            className={
              homeLike
                ? "space-y-20 sm:space-y-28 lg:space-y-32"
                : "mt-16 space-y-20 sm:mt-24 sm:space-y-28 lg:mt-28 lg:space-y-32"
            }
          >
            {page.sections.map((section, index) =>
              renderSection(section, index, homeLike)
            )}

            {page.faqs.length > 0 ? <SeoFaq items={page.faqs} /> : null}

            <SeoCTA
              eyebrow={page.cta?.eyebrow}
              heading={page.cta?.heading}
              caption={page.cta?.caption}
              whatsappSource={page.cta?.whatsappSource ?? `${page.slug}-cta`}
            />

            {page.related.length > 0 ? (
              <RelatedPages
                heading={
                  page.group === "hizmetler"
                    ? "İlgili konular"
                    : "İlgili sayfalar"
                }
                items={page.related}
              />
            ) : null}
          </div>
        </div>
      </article>

      {homeLike ? <ContactLocationSection /> : null}
    </>
  );
}
