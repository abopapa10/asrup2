export const siteConfig = {
  name: "Psikolog A. Alparslan Sancar",
  legalName: "Ahmet Alparslan Sancar",
  phone: "+905518490236",
  phoneDisplay: "0551 849 02 36",
  whatsapp: "https://wa.me/905518490236",
  email: "iletisim@bursapsikologsancar.com",
  url: "https://bursapsikologsancar.com",
  address: {
    locality: "Nilüfer",
    region: "Bursa",
    country: "TR",
  },
  images: {
    /** Hero — klinik portre */
    portraitClinical: "/images/portre.webp",
    /** Hakkımda — tam profil */
    portraitFull: "/images/profil.webp",
  },
  seo: {
    siteName: "Psikolog A. Alparslan Sancar — Bursa",
    shortName: "Bursa Psikolog",
    locale: "tr_TR",
    defaultTitle:
      "Bursa Psikolog | Uzman Klinik Psikolog Ahmet Alparslan Sancar — Nilüfer",
    defaultDescription:
      "Bursa Nilüfer'de bireysel terapi, çift terapisi ve online terapi. Uzman Klinik Psikolog Ahmet Alparslan Sancar — klinik değerlendirme, danışan gizliliği ve etik ilkeler.",
    /** Ana sayfada ilk görünen klinik portre — OG ve zengin sonuçlar */
    defaultOgImage: "/images/portre.webp",
    defaultOgImageAlt:
      "Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı",
    titleTemplate: "%s | Psikolog A. Alparslan Sancar",
    logoPath: "/favicon.svg",
  },
} as const;
