/**
 * Site Configuration — NAP, professional credentials, business hours,
 * social profiles ve SEO defaults için tek kaynak.
 *
 * Schema.org markup ve metadata üretimi bu dosyaya bağlıdır.
 * Yapısal değişiklikler tüm SEO çıktılarını etkiler; ölçülü düzenlenmelidir.
 */

/**
 * Tek kaynak canonical origin — Google Search Console non-www mülkü.
 * Tüm canonical, sitemap, JSON-LD ve OG URL'leri buradan türetilir.
 */
export const CANONICAL_SITE_ORIGIN = "https://bursapsikologsancar.com" as const;

export const siteConfig = {
  name: "Bursa Psikolog A. Alparslan Sancar",
  legalName: "Ahmet Alparslan Sancar",
  phone: "+905518490236",
  phoneDisplay: "0551 849 02 36",
  whatsapp: "https://wa.me/905518490236",
  email: "iletisim@bursapsikologsancar.com",
  url: CANONICAL_SITE_ORIGIN,

  /**
   * Klinik konum bilgisi (NAP).
   * Google Business Profile ile birebir aynı yazılmalıdır.
   */
  address: {
    street: "Ahmet Taner Kışlalı Bulvarı No:27, Time Özlüce",
    neighborhood: "Ertuğrul",
    locality: "Nilüfer",
    region: "Bursa",
    postalCode: "16120",
    country: "TR",
  },

  /**
   * Coğrafi koordinatlar — schema.org `GeoCoordinates` için.
   * Google Business Profile (Time Özlüce) pin’inden.
   */
  geo: {
    latitude: 40.22514708474198,
    longitude: 28.914509179363968,
  },

  /**
   * Google Maps Place ID — GBP doğrulandıktan sonra sabitlenir.
   * Harita linkleri ve ilerideki Places API çağrıları için tek kaynak.
   */
  placeId: "ChIJl7rIFgYVyhQRqzE9cQzf2SU",

  /**
   * Google Business Profile işletme adı — NAP tutarlılığı için.
   * Profil paylaşım bağlantısı `social.googleBusinessProfile` alanına eklenir.
   */
  googleBusinessName: "Bursa Psikolog A. Alparslan Sancar",

  /** Google Haritalar — Place ID ile kalıcı işletme sayfası / yol tarifi. */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bursa+Psikolog+A.+Alparslan+Sancar&query_place_id=ChIJl7rIFgYVyhQRqzE9cQzf2SU",

  /** Google Haritalar iframe — doğrulanmış pin koordinatları. */
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?hl=tr&z=16&output=embed&q=40.22514708474198,28.914509179363968",

  /**
   * Çalışma saatleri.
   * Schema.org `OpeningHoursSpecification` ile birebir eşleşecek
   * şekilde tutulur. Hafta sonları kontenjan ile sınırlı tutulduğu
   * için sadece hafta içi saatleri tanımlanmıştır.
   */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
      opens: "10:00",
      closes: "19:00",
    },
  ] as const,

  /**
   * İşletme finansal & lojistik detayları.
   * Schema.org LocalBusiness için kullanılır.
   */
  business: {
    /** Schema price range gösterimi (₺ — ₺₺ — ₺₺₺) */
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"] as const,
    /** Schema.org standardı için yıl */
    foundingYear: 2018,
  },

  /**
   * Hizmet verilen yönetim alanları (LocalBusiness `areaServed`).
   * Bursa merkez ve çevre ilçeler.
   */
  serviceAreas: [
    "Bursa",
    "Nilüfer",
    "Osmangazi",
    "Yıldırım",
    "Mudanya",
    "Gemlik",
  ] as const,

  /** Klinik dil desteği. */
  languages: [
    { code: "tr", name: "Turkish" },
    { code: "en", name: "English" },
  ] as const,

  /**
   * Mesleki bilgiler — `Psychologist` / `Person` schema için.
   */
  professional: {
    jobTitle: "Uzman Klinik Psikolog",
    /** Eğitim aldığı kurum */
    alumniOf: {
      name: "Hacettepe Üniversitesi",
      department: "Psikoloji Bölümü",
      url: "https://www.hacettepe.edu.tr/",
    },
    /** Klinik uzmanlık alanları */
    expertiseAreas: [
      "Kaygı ve duygudurum",
      "İlişki dinamikleri",
      "Stres ve tükenmişlik",
      "Travma literatürü",
      "Kişilik ve bağlanma",
      "Yaşam geçişleri",
    ] as const,
    /** Kullanılan terapi yaklaşımları */
    approaches: [
      "Birey Odaklı Psikoterapi",
      "Bilişsel-Davranışçı Terapi",
      "Psikodinamik Yaklaşım",
    ] as const,
    /** Etik ve mesleki ilkeler */
    ethicsStatement:
      "Mesleki etik ilkeler ve gizlilik, psikoloji alanındaki duruşun temelidir.",
  },

  /**
   * Sosyal medya / dış bağlantılar — schema `sameAs` için.
   * Boş stringler emit edilmez; doldurulduğunda otomatik aktif olur.
   */
  social: {
    instagram: "" as string,
    linkedin: "" as string,
    youtube: "" as string,
    googleBusinessProfile: "https://share.google/Y1uZqhXsneWEW9qHI",
  },

  images: {
    /** Hero — klinik portre */
    portraitClinical: "/images/portre.webp",
    /** Hakkımda — tam profil */
    portraitFull: "/images/profil.webp",
  },

  seo: {
    siteName: "Bursa Psikolog A. Alparslan Sancar",
    shortName: "Bursa Psikolog",
    locale: "tr_TR",
    defaultTitle:
      "Bursa Psikolog A. Alparslan Sancar | Nilüfer",
    defaultDescription:
      "Bursa Psikolog A. Alparslan Sancar — Hacettepe Üniversitesi Psikoloji mezunu. Nilüfer Özlüce; psikoloji yazıları, yaklaşım ve WhatsApp ile kişisel iletişim.",
    /** Ana sayfada ilk görünen klinik portre — OG ve zengin sonuçlar */
    defaultOgImage: "/images/portre.webp",
    defaultOgImageAlt:
      "Bursa Psikolog A. Alparslan Sancar — klinik portre fotoğrafı",
    titleTemplate: "%s | Bursa Psikolog A. Alparslan Sancar",
    logoPath: "/favicon.svg",
    /** Twitter handle (varsa) */
    twitterSite: "" as string,
    twitterCreator: "" as string,
  },
} as const;

/** Footer, şema ve görünür NAP için iki satırlık adres. */
export function formatAddressLines(): readonly [string, string] {
  const { street, neighborhood, postalCode, locality, region } =
    siteConfig.address;
  return [
    street,
    `${neighborhood}, ${postalCode} ${locality}/${region}`,
  ];
}

/** Sosyal profillerin doldurulmuş olanlarını dizi olarak döner. */
export function getSocialProfileUrls(): string[] {
  return Object.values(siteConfig.social).filter(
    (url): url is string => typeof url === "string" && url.trim().length > 0
  );
}
