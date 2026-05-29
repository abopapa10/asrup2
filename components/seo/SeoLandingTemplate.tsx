import { JsonLdScript } from "@/components/JsonLdScript";
import { RelatedPages } from "@/components/seo/RelatedPages";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { SeoHero } from "@/components/seo/SeoHero";
import { SeoSymptomList } from "@/components/seo/SeoSymptomList";
import { SeoReferences } from "@/components/seo/SeoReferences";
import { SeoTrustPillars } from "@/components/seo/SeoTrustPillars";
import { buildSeoLandingJsonLd } from "@/lib/page-structured-data";
import type { SeoLandingPage, SeoSection } from "@/lib/seo-pages";

type SeoLandingTemplateProps = {
  page: SeoLandingPage;
};

function renderSection(section: SeoSection, index: number) {
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

  return (
    <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
      <JsonLdScript data={buildSeoLandingJsonLd(page)} />

      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <SeoBreadcrumb items={breadcrumbItems} className="mb-8 sm:mb-10" />

        <SeoHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.h1}
          lead={page.hero.lead}
          intro={page.hero.intro}
          showCta={page.hero.showCta}
        />

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28 lg:mt-28 lg:space-y-32">
          {page.sections.map((section, index) => renderSection(section, index))}

          {page.faqs.length > 0 ? <SeoFaq items={page.faqs} /> : null}

          <SeoCTA
            eyebrow={page.cta?.eyebrow}
            caption={page.cta?.caption}
          />

          {page.related.length > 0 ? (
            <RelatedPages
              heading={
                page.group === "hizmetler"
                  ? "İlgili Çalışma Alanları"
                  : "İlgili Hizmet ve Sayfalar"
              }
              items={page.related}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
