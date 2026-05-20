import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://bursapsikologsancar.com/#medicalbusiness",
  name: "Bursa Psikolog Ahmet Alparslan Sancar — Klinik Psikoloji",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.images.portraitClinical}`,
  description:
    "Bursa Nilüfer'de yetişkin bireysel terapi, çift terapisi ve online terapi sunan premium psikoloji kliniği.",
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "City", name: "Bursa" },
  medicalSpecialty: "Psychiatric",
  employee: { "@id": "https://bursapsikologsancar.com/#psychologist" },
};

export const psychologistSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "@id": "https://bursapsikologsancar.com/#psychologist",
  name: siteConfig.name,
  alternateName: "Ahmet Alparslan Sancar",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.images.portraitClinical}`,
  description:
    "Bursa psikolog — yetişkin bireysel terapi, çift terapisi ve online terapi. Klinik değerlendirme, danışan gizliliği ve etik ilkeler.",
  jobTitle: "Uzman Klinik Psikolog",
  worksFor: { "@id": "https://bursapsikologsancar.com/#medicalbusiness" },
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
  "@id": "https://bursapsikologsancar.com/#faq",
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
  "@id": "https://bursapsikologsancar.com/#articles",
  name: "Uzman Makaleleri & Blog",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/makale/${article.slug}`,
      author: { "@id": "https://bursapsikologsancar.com/#psychologist" },
    },
  })),
};

export const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusinessSchema,
    psychologistSchema,
    faqSchema,
    blogSchema,
  ],
};
