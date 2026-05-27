/**
 * Site Configuration — NAP, professional credentials, business hours,
 * social profiles ve SEO defaults için tek kaynak.
 *
 * Schema.org markup ve metadata üretimi bu dosyaya bağlıdır.
 * Yapısal değişiklikler tüm SEO çıktılarını etkiler; ölçülü düzenlenmelidir.
 */

export const siteConfig = {
  name: "Psikolog A. Alparslan Sancar",
  legalName: "Ahmet Alparslan Sancar",
  phone: "+905518490236",
  phoneDisplay: "0551 849 02 36",
  whatsapp: "https://wa.me/905518490236",
  email: "iletisim@bursapsikologsancar.com",
  url: "https://bursapsikologsancar.com",

  /**
   * Klinik konum bilgisi (NAP).
   * Sokak adı eklendiğinde `street` alanı güncellenmelidir.
   */
  address: {
    street: "" as string,
    locality: "Nilüfer",
    region: "Bursa",
    postalCode: "" as string,
    country: "TR",
  },

  /**
   * Coğrafi koordinatlar — schema.org `GeoCoordinates` için.
   * Doğrulanmış koordinatlar girilene kadar `null` bırakılır.
   */
  geo: null as null | { latitude: number; longitude: number },

  /** Google Haritalar konum bağlantısı (varsa). */
  googleMapsUrl: "" as string,

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
      "Bireysel Psikoterapi",
      "Çift ve Evlilik Terapisi",
      "Online Psikoterapi",
      "Anksiyete Bozuklukları",
      "Panik Bozukluğu",
      "Depresyon",
      "Tükenmişlik ve Mesleki Yorgunluk",
      "Yaşam Geçişleri ve Yas",
    ] as const,
    /** Kullanılan terapi yaklaşımları */
    approaches: [
      "Birey Odaklı Psikoterapi",
      "Bilişsel-Davranışçı Terapi",
      "Psikodinamik Yaklaşım",
    ] as const,
    /** Etik ve mesleki ilkeler */
    ethicsStatement:
      "Tüm seanslar mesleki etik ilkeler ve danışan gizliliği çerçevesinde yürütülür.",
  },

  /**
   * Sosyal medya / dış bağlantılar — schema `sameAs` için.
   * Boş stringler emit edilmez; doldurulduğunda otomatik aktif olur.
   */
  social: {
    instagram: "" as string,
    linkedin: "" as string,
    youtube: "" as string,
    googleBusinessProfile: "" as string,
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
    /** Twitter handle (varsa) */
    twitterSite: "" as string,
    twitterCreator: "" as string,
  },
} as const;

/** Sosyal profillerin doldurulmuş olanlarını dizi olarak döner. */
export function getSocialProfileUrls(): string[] {
  return Object.values(siteConfig.social).filter(
    (url): url is string => typeof url === "string" && url.trim().length > 0
  );
}
