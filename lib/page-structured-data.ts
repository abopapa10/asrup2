import type { Article } from "@/lib/article-types";
import type { Service } from "@/lib/services";
import { schemaImageObject } from "@/lib/schema-images";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const publisher = {
  "@type": "Organization" as const,
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.seo.siteName,
  url: siteConfig.url,
  logo: schemaImageObject(siteConfig.seo.logoPath, {
    caption: "Psikolog A. Alparslan Sancar site amblemi",
  }),
};

const authorPerson = {
  "@type": "Person" as const,
  "@id": `${siteConfig.url}/#psychologist`,
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Uzman Klinik Psikolog",
  image: schemaImageObject(siteConfig.images.portraitClinical, {
    caption: "Psikolog A. Alparslan Sancar — Bursa klinik portre",
    width: 960,
    height: 1200,
  }),
};

export function buildArticleJsonLd(article: Article) {
  const pageUrl = absoluteUrl(`/makale/${article.slug}`);
  const coverImage = schemaImageObject(article.image, {
    caption: `${article.title} — ${article.category} kapak görseli`,
    width: 1200,
    height: 675,
  });

  return [
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
      author: authorPerson,
      publisher,
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
}

export function buildServiceJsonLd(service: Service) {
  const pageUrl = absoluteUrl(`/${service.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.title,
      description: service.metaDescription,
      url: pageUrl,
      serviceType: service.title,
      areaServed: {
        "@type": "City",
        name: "Bursa",
      },
      provider: {
        "@type": "Psychologist",
        "@id": `${siteConfig.url}/#psychologist`,
        name: siteConfig.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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

export function buildBlogListingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/blog")}#collection`,
    name: "Uzman Makaleleri & Blog",
    description:
      "Bursa psikolog blog: bireysel terapi, çift terapisi, online terapi ve ruh sağlığı makaleleri.",
    url: absoluteUrl("/blog"),
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}
