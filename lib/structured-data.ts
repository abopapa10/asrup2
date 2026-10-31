/**
 * Structured Data Graph
 *
 * Schema.org JSON-LD'lerin tek üretildiği yer.
 *
 * Mimari:
 * - `siteEntitiesGraph` — Organization, WebSite, MedicalBusiness, Psychologist.
 *   Layout düzeyinde her sayfaya enjekte edilir; dolayısıyla `@id`
 *   referansları (örn. `#psychologist`) tüm sayfalarda çözümlenir.
 * - `buildHomeGraph()` — yalnızca ana sayfaya özel grafikler:
 *   WebPage, FAQPage ve ItemList (blog).
 * - Per-route graph builder'lar `lib/page-structured-data.ts` içinde.
 *
 * Bu sayede ana sayfa SSS/Reviews iç sayfalara sızmaz; iç sayfalar
 * kendi konularına ait FAQ/Service/Article schema'larını enjekte eder.
 */

import { articles } from "@/lib/articles";
import { homeFaq } from "@/lib/home-faq";
import { homePageMeta } from "@/lib/home-seo-content";
import { schemaImageObject } from "@/lib/schema-images";
import { absoluteUrl } from "@/lib/seo";
import { getSocialProfileUrls, siteConfig } from "@/lib/site-config";

// ─────────────────────────────────────────────────────────────────
// Yardımcılar
// ─────────────────────────────────────────────────────────────────

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const MEDICAL_BUSINESS_ID = `${siteConfig.url}/#medicalbusiness`;
const PSYCHOLOGIST_ID = `${siteConfig.url}/#psychologist`;

const homePortrait = schemaImageObject(siteConfig.images.portraitClinical, {
  caption: "Bursa Psikolog A. Alparslan Sancar — klinik portre fotoğrafı",
  width: 960,
  height: 1200,
});

const fullPortrait = schemaImageObject(siteConfig.images.portraitFull, {
  caption: "Bursa Psikolog A. Alparslan Sancar — tam profil portre",
  width: 960,
  height: 1200,
});

function buildPostalAddress() {
  const { address } = siteConfig;
  const streetAddress = [address.street, address.neighborhood]
    .filter((part) => part.trim().length > 0)
    .join(", ");
  return {
    "@type": "PostalAddress" as const,
    ...(streetAddress ? { streetAddress } : {}),
    addressLocality: address.locality,
    addressRegion: address.region,
    ...(address.postalCode ? { postalCode: address.postalCode } : {}),
    addressCountry: address.country,
  };
}

function buildOpeningHours() {
  return siteConfig.openingHours.map((spec) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: spec.days.map((d) => `https://schema.org/${d}`),
    opens: spec.opens,
    closes: spec.closes,
  }));
}

function buildAreaServed() {
  return siteConfig.serviceAreas.map((name) => ({
    "@type": "AdministrativeArea" as const,
    name,
  }));
}

function buildContactPoint() {
  return {
    "@type": "ContactPoint" as const,
    contactType: "customer service",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    availableLanguage: siteConfig.languages.map((l) => l.name),
    areaServed: "TR",
  };
}

// ─────────────────────────────────────────────────────────────────
// Site-wide entities (her sayfada enjekte edilir)
// ─────────────────────────────────────────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: siteConfig.seo.siteName,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: schemaImageObject(siteConfig.seo.logoPath, {
    caption: "Bursa Psikolog A. Alparslan Sancar site amblemi",
  }),
  image: homePortrait,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: buildPostalAddress(),
  contactPoint: [buildContactPoint()],
  founder: { "@id": PSYCHOLOGIST_ID },
  ...(getSocialProfileUrls().length > 0
    ? { sameAs: getSocialProfileUrls() }
    : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: siteConfig.seo.siteName,
  alternateName: siteConfig.seo.shortName,
  url: siteConfig.url,
  description: siteConfig.seo.defaultDescription,
  inLanguage: "tr-TR",
  publisher: { "@id": ORG_ID },
};

export const psychologistSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "@id": PSYCHOLOGIST_ID,
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.url,
  image: [homePortrait, fullPortrait],
  jobTitle: siteConfig.professional.jobTitle,
  description:
    "Bursa Nilüfer'de psikoloji alanında eğitim, yazı ve kişisel iletişim. Bursa Psikolog A. Alparslan Sancar — Hacettepe Üniversitesi Psikoloji Bölümü.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: buildPostalAddress(),
  worksFor: { "@id": MEDICAL_BUSINESS_ID },
  /** Akademik geçmiş */
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: siteConfig.professional.alumniOf.name,
    department: siteConfig.professional.alumniOf.department,
    url: siteConfig.professional.alumniOf.url,
  },
  /** Mesleki yeterlilik */
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Lisans Diploması",
      educationalLevel: "Lisans",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.professional.alumniOf.name,
      },
    },
  ],
  /** Klinik uzmanlık alanları */
  knowsAbout: [...siteConfig.professional.expertiseAreas],
  /** Kullanılan terapi yaklaşımları */
  knowsLanguage: siteConfig.languages.map((l) => l.name),
  /** Hizmet verilen alanlar */
  areaServed: buildAreaServed(),
  /** Sosyal profiller varsa */
  ...(getSocialProfileUrls().length > 0
    ? { sameAs: getSocialProfileUrls() }
    : {}),
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  /**
   * MedicalBusiness, LocalBusiness'i extend ettiği için tüm
   * LocalBusiness alanları (priceRange, openingHours, geo, hasMap)
   * burada da geçerlidir.
   */
  "@type": ["Person", "Psychologist"],
  "@id": MEDICAL_BUSINESS_ID,
  name: siteConfig.name,
  alternateName: [
    siteConfig.seo.shortName,
    siteConfig.legalName,
  ],
  url: siteConfig.url,
  image: homePortrait,
  logo: schemaImageObject(siteConfig.seo.logoPath, {
    caption: "Site amblemi",
  }),
  description:
    "Bursa Nilüfer Özlüce'de psikoloji yazıları ve kişisel iletişim: Bursa Psikolog A. Alparslan Sancar.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: buildPostalAddress(),
  ...(siteConfig.geo
    ? {
        geo: {
          "@type": "GeoCoordinates" as const,
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
      }
    : {}),
  ...(siteConfig.googleMapsUrl ? { hasMap: siteConfig.googleMapsUrl } : {}),
  areaServed: buildAreaServed(),
  openingHoursSpecification: buildOpeningHours(),
  availableLanguage: siteConfig.languages.map((l) => l.name),
  contactPoint: [buildContactPoint()],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: siteConfig.professional.alumniOf.name,
  },
  jobTitle: siteConfig.professional.jobTitle,
  ...(getSocialProfileUrls().length > 0
    ? { sameAs: getSocialProfileUrls() }
    : {}),
};

/**
 * Layout düzeyinde her sayfaya enjekte edilen, sitenin
 * temel kimlik graph'ı. `@id` referansları sayesinde inner
 * sayfalardaki diğer schema'lar bu varlıklara bağlanabilir.
 */
export const siteEntitiesGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    medicalBusinessSchema,
    psychologistSchema,
  ],
};

// ─────────────────────────────────────────────────────────────────
// Ana sayfa — yalnızca / route'unda enjekte edilir
// ─────────────────────────────────────────────────────────────────

const homeUrl = siteConfig.url;
const HOME_WEBPAGE_ID = `${homeUrl}/#webpage`;
const HOME_FAQ_ID = `${homeUrl}/#faq`;

const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": HOME_WEBPAGE_ID,
  url: homeUrl,
  name: homePageMeta.title,
  description: homePageMeta.description,
  inLanguage: "tr-TR",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PSYCHOLOGIST_ID },
  mainEntity: { "@id": PSYCHOLOGIST_ID },
  primaryImageOfPage: homePortrait,
  image: homePortrait,
  breadcrumb: { "@id": `${homeUrl}/#breadcrumb` },
};

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${homeUrl}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: homeUrl,
    },
  ],
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": HOME_FAQ_ID,
  isPartOf: { "@id": HOME_WEBPAGE_ID },
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  })),
};

const blogItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#articles`,
  name: "Uzman Makaleleri & Blog",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Article" as const,
      headline: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/makale/${article.slug}`),
      datePublished: article.dateISO,
      image: schemaImageObject(
        article.image ?? siteConfig.seo.defaultOgImage,
        {
          caption: `${article.title} — kapak görseli`,
          width: 1200,
          height: 675,
        }
      ),
      author: { "@id": PSYCHOLOGIST_ID },
    },
  })),
};

/**
 * Ana sayfa için graph — yalnızca `/` route'unda enjekte edilir.
 * `siteEntitiesGraph` zaten layout'tan geldiği için burada
 * yalnızca sayfa-spesifik şemalar yer alır.
 */
export function buildHomeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      homeWebPageSchema,
      homeBreadcrumbSchema,
      homeFaqSchema,
      blogItemListSchema,
    ],
  };
}

/**
 * @deprecated Eski kullanım — geriye dönük uyumluluk için bırakıldı.
 * Yeni kodda `siteEntitiesGraph` ve `buildHomeGraph()` ayrı kullanılmalı.
 */
export const graphSchema = siteEntitiesGraph;
