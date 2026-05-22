import { articles } from "@/lib/articles";
import { schemaImageObject } from "@/lib/schema-images";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const homePortrait = schemaImageObject(siteConfig.images.portraitClinical, {
  caption: "Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı",
  width: 960,
  height: 1200,
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.seo.siteName,
  url: siteConfig.url,
  logo: schemaImageObject(siteConfig.seo.logoPath, {
    caption: "Site amblemi",
  }),
  image: homePortrait,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.seo.siteName,
  url: siteConfig.url,
  description: siteConfig.seo.defaultDescription,
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  inLanguage: "tr-TR",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#psychologist` },
  primaryImageOfPage: homePortrait,
  image: homePortrait,
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteConfig.url}/#medicalbusiness`,
  name: "Bursa Psikolog Ahmet Alparslan Sancar — Klinik Psikoloji",
  url: siteConfig.url,
  image: homePortrait,
  description: siteConfig.seo.defaultDescription,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "City", name: "Bursa" },
  medicalSpecialty: "Psychiatric",
  employee: { "@id": `${siteConfig.url}/#psychologist` },
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
};

export const psychologistSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "@id": `${siteConfig.url}/#psychologist`,
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.url,
  image: homePortrait,
  description:
    "Bursa psikolog — yetişkin bireysel terapi, çift terapisi ve online terapi. Klinik değerlendirme, danışan gizliliği ve etik ilkeler.",
  jobTitle: "Uzman Klinik Psikolog",
  worksFor: { "@id": `${siteConfig.url}/#medicalbusiness` },
  knowsAbout: [
    "Bursa Psikolog",
    "Bireysel Terapi",
    "Çift Terapisi",
    "Online Terapi",
    "Klinik değerlendirme",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Bursa psikolog seans ücretleri ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seans ücretleri mesleki standartlar çerçevesinde belirlenir. WhatsApp veya telefon ile bilgi alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Bir psikoterapi seansı ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart seans süresi genellikle 50 dakikadır. İlk görüşmede klinik değerlendirme yapılır.",
      },
    },
    {
      "@type": "Question",
      name: "Çift terapisine tek başıma başvurabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, tek başınıza çift terapisine başvurabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Randevu süreci nasıl yürütülüyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp veya telefon ile asistanımıza ulaşarak randevu talebi oluşturabilirsiniz.",
      },
    },
  ],
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#articles`,
  name: "Uzman Makaleleri & Blog",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/makale/${article.slug}`),
      datePublished: article.dateISO,
      image: schemaImageObject(article.image, {
        caption: `${article.title} — kapak görseli`,
        width: 1200,
        height: 675,
      }),
      author: { "@id": `${siteConfig.url}/#psychologist` },
    },
  })),
};

export const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    homeWebPageSchema,
    medicalBusinessSchema,
    psychologistSchema,
    faqSchema,
    blogSchema,
  ],
};
