/**
 * Per-page JSON-LD builders.
 *
 * Layout düzeyinde enjekte edilen `siteEntitiesGraph` zaten
 * Organization / WebSite / MedicalBusiness / Psychologist
 * varlıklarını sağlar. Bu builder'lar yalnızca o sayfaya özel
 * `WebPage`, `BreadcrumbList`, `Service`, `BlogPosting`, `FAQPage`
 * gibi schema'ları üretir ve mevcut varlıklara `@id` ile referans verir.
 */

import type { Article } from "@/lib/article-types";
import type { SeoLandingPage } from "@/lib/seo-pages";
import type { Service } from "@/lib/services";
import { schemaImageObject } from "@/lib/schema-images";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const ORG_REF = { "@id": `${siteConfig.url}/#organization` } as const;
const WEBSITE_REF = { "@id": `${siteConfig.url}/#website` } as const;
const MEDICAL_BUSINESS_REF = {
  "@id": `${siteConfig.url}/#medicalbusiness`,
} as const;
const PSYCHOLOGIST_REF = {
  "@id": `${siteConfig.url}/#psychologist`,
} as const;

// ─────────────────────────────────────────────────────────────────
// Article (BlogPosting + Breadcrumb + FAQPage opsiyonel)
// ─────────────────────────────────────────────────────────────────

export function buildArticleJsonLd(article: Article) {
  const pageUrl = absoluteUrl(`/makale/${article.slug}`);
  const coverImage = schemaImageObject(
    article.image ?? siteConfig.seo.defaultOgImage,
    {
      caption: `${article.title} — ${article.category} kapak görseli`,
      width: 1200,
      height: 675,
    }
  );

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: article.title,
      description: article.excerpt,
      image: coverImage,
      thumbnailUrl: coverImage.url,
      datePublished: article.dateISO,
      dateModified: article.dateISO,
      inLanguage: "tr-TR",
      author: PSYCHOLOGIST_REF,
      publisher: ORG_REF,
      isPartOf: WEBSITE_REF,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: article.title,
        primaryImageOfPage: coverImage,
      },
      articleSection: article.category,
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: pageUrl,
        },
      ],
    },
  ];

  if (article.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

// ─────────────────────────────────────────────────────────────────
// Service (mevcut /bireysel-terapi, /cift-terapisi, /online-terapi)
// ─────────────────────────────────────────────────────────────────

export function buildServiceJsonLd(service: Service) {
  const pageUrl = absoluteUrl(`/${service.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.title,
      description: service.metaDescription,
      inLanguage: "tr-TR",
      isPartOf: WEBSITE_REF,
      about: PSYCHOLOGIST_REF,
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.title,
      description: service.metaDescription,
      url: pageUrl,
      serviceType: service.title,
      areaServed: { "@type": "City", name: "Bursa" },
      provider: PSYCHOLOGIST_REF,
      brand: MEDICAL_BUSINESS_REF,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: service.title,
          item: pageUrl,
        },
      ],
    },
  ];
}

// ─────────────────────────────────────────────────────────────────
// SEO Landing Pages (hizmetler/* ve lokasyon/*)
// ─────────────────────────────────────────────────────────────────

export function buildSeoLandingJsonLd(page: SeoLandingPage) {
  const pageUrl = absoluteUrl(page.meta.canonicalPath);

  const breadcrumbItems: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: siteConfig.url,
    },
  ];

  if (page.parent.href) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: page.parent.label,
      item: absoluteUrl(page.parent.href),
    });
  }

  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name: page.hero.h1,
    item: pageUrl,
  });

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.meta.title,
      description: page.meta.description,
      inLanguage: "tr-TR",
      isPartOf: WEBSITE_REF,
      about: PSYCHOLOGIST_REF,
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      ...(page.group === "hizmetler"
        ? { mainEntity: { "@id": `${pageUrl}#service` } }
        : { mainEntity: MEDICAL_BUSINESS_REF }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (page.group === "hizmetler") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "@id": `${pageUrl}#service`,
      name: page.hero.h1,
      description: page.meta.description,
      url: pageUrl,
      relevantSpecialty: "Psychiatric",
      areaServed: { "@type": "City", name: "Bursa" },
      provider: PSYCHOLOGIST_REF,
      brand: MEDICAL_BUSINESS_REF,
    });
  } else {
    /**
     * Lokasyon sayfaları — `Place` schema, MedicalBusiness'a referans verir.
     * Asıl LocalBusiness varlığı layout'tan gelir.
     */
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": `${pageUrl}#place`,
      name: page.hero.h1,
      description: page.meta.description,
      url: pageUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: page.slug.includes("nilufer") ? "Nilüfer" : "Bursa",
        addressRegion: "Bursa",
        addressCountry: "TR",
      },
      containsPlace: MEDICAL_BUSINESS_REF,
    });
  }

  if (page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

// ─────────────────────────────────────────────────────────────────
// Blog listing (/blog)
// ─────────────────────────────────────────────────────────────────

export function buildBlogListingJsonLd() {
  const pageUrl = absoluteUrl("/blog");

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      name: "Uzman Makaleleri & Blog",
      description:
        "Bursa psikolog blog: bireysel terapi, çift terapisi, online terapi ve ruh sağlığı makaleleri.",
      url: pageUrl,
      inLanguage: "tr-TR",
      isPartOf: WEBSITE_REF,
      about: PSYCHOLOGIST_REF,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: pageUrl,
        },
      ],
    },
  ];
}
