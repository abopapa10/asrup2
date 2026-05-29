/**
 * SEO Landing Page Registry
 *
 * Tek bir veri kaynağından kullanılan; hem `/hizmetler/[slug]` hem
 * `/lokasyon/[slug]` route'larını besleyen, scalable landing page
 * data layer.
 *
 * Sayfaların gerçek içeriği `lib/seo-content/` altındaki dosyalardadır;
 * bu dosya yalnızca registry'yi (tipler + agregasyon + sorgular) tutar.
 */

import { anksiyeteTerapisiBursa } from "@/lib/seo-content/anksiyete-terapisi-bursa";
import { bireyOdakliPsikoterapiBursa } from "@/lib/seo-content/birey-odakli-psikoterapi-bursa";
import { bilisselDavranisciTerapiBursa } from "@/lib/seo-content/bilissel-davranisci-terapi-bursa";
import { balatPsikolog } from "@/lib/seo-content/balat-psikolog";
import { ciftTerapisiBursaSeo } from "@/lib/seo-content/cift-terapisi-bursa-seo";
import { depresyonTerapisiBursa } from "@/lib/seo-content/depresyon-terapisi-bursa";
import { emdrTerapisiBursa } from "@/lib/seo-content/emdr-terapisi-bursa";
import { goruklePsikolog } from "@/lib/seo-content/gorukle-psikolog";
import { mudanyaPsikolog } from "@/lib/seo-content/mudanya-psikolog";
import { niluferPsikolog } from "@/lib/seo-content/nilufer-psikolog";
import { okbTerapisiBursa } from "@/lib/seo-content/okb-terapisi-bursa";
import { onlineTerapiBursaSeo } from "@/lib/seo-content/online-terapi-bursa-seo";
import { osmangaziPsikolog } from "@/lib/seo-content/osmangazi-psikolog";
import { panikAtakTerapisiBursa } from "@/lib/seo-content/panik-atak-terapisi-bursa";
import { regresyonTerapisiBursa } from "@/lib/seo-content/regresyon-terapisi-bursa";
import { travmaTerapisiBursa } from "@/lib/seo-content/travma-terapisi-bursa";

export type SeoCrumbLink = {
  label: string;
  href?: string;
};

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export type SeoRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

/** Düz anlatım — 2-4 paragraf. */
export type SeoNarrativeSection = {
  kind: "narrative";
  heading: string;
  /**
   * Paragraf içinde `[Etiket](/yol)` markdown-tarzı tokenları
   * `link-editorial` stiliyle render edilir.
   */
  paragraphs: readonly string[];
};

/** "Kimler destek alabilir / Hangi belirtiler için başvurulur?" */
export type SeoSymptomsSection = {
  kind: "symptoms";
  heading: string;
  intro?: string;
  groups: readonly { title: string; items: readonly string[] }[];
};

/** Klinik yaklaşım & güven pillars. */
export type SeoTrustSection = {
  kind: "trust";
  heading: string;
  intro?: string;
  pillars: readonly { label: string; title: string; body: string }[];
};

/** Akademik kaynakça — uzun form uzmanlık sayfaları için. */
export type SeoReferencesSection = {
  kind: "references";
  heading?: string;
  items: readonly string[];
};

export type SeoSection =
  | SeoNarrativeSection
  | SeoSymptomsSection
  | SeoTrustSection
  | SeoReferencesSection;

export type SeoLandingPage = {
  slug: string;
  group: "hizmetler" | "lokasyon";
  parent: SeoCrumbLink;

  meta: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImage?: string;
    ogImageAlt?: string;
    /** Sayfaya ait semantik anahtar kelimeler — meta keywords ve schema knowsAbout için */
    keywords?: readonly string[];
  };

  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    intro?: string;
    /** Hero altında sakin bir CTA çifti gösterilsin mi? */
    showCta?: boolean;
  };

  /**
   * Section'lar `kind` discriminator'ı ile farklı görsel bileşenlere
   * yönlenir; sıralama burada tanımlanır.
   */
  sections: readonly SeoSection[];

  faqs: readonly SeoFaqItem[];

  /** Alt CTA bloğu için isteğe bağlı özel metinler. */
  cta?: {
    eyebrow?: string;
    caption?: string;
  };

  related: readonly SeoRelatedLink[];
};

const pages: readonly SeoLandingPage[] = [
  anksiyeteTerapisiBursa,
  panikAtakTerapisiBursa,
  depresyonTerapisiBursa,
  emdrTerapisiBursa,
  okbTerapisiBursa,
  ciftTerapisiBursaSeo,
  onlineTerapiBursaSeo,
  travmaTerapisiBursa,
  bireyOdakliPsikoterapiBursa,
  bilisselDavranisciTerapiBursa,
  regresyonTerapisiBursa,
  niluferPsikolog,
  osmangaziPsikolog,
  mudanyaPsikolog,
  goruklePsikolog,
  balatPsikolog,
];

export const seoLandingPages = pages;

export function getSeoPagesByGroup(
  group: SeoLandingPage["group"]
): readonly SeoLandingPage[] {
  return pages.filter((p) => p.group === group);
}

export function getSeoPage(
  group: SeoLandingPage["group"],
  slug: string
): SeoLandingPage | undefined {
  return pages.find((p) => p.group === group && p.slug === slug);
}

export function getAllSeoPagePaths(): readonly string[] {
  return pages.map((p) => p.meta.canonicalPath);
}
