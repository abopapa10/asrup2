import { siteConfig } from "@/lib/site-config";

/** Ana navigasyon — header server + mobil menü client ortak kaynak */
export const siteNavLinks = [
  { href: "/hizmetler", label: "Konular" },
  { href: "/lokasyon", label: "Lokasyonlar" },
  {
    href: siteConfig.social.googleBusinessProfile,
    label: "Yorumlar",
  },
  { href: "/testler", label: "Testler" },
  { href: "/soru-cevap", label: "Soru-Cevap" },
  { href: "/blog", label: "Makaleler" },
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#iletisim", label: "İletişim" },
] as const;
