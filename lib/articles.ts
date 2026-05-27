import {
  trafikStresiBlocks,
  trafikStresiFaq,
  trafikStresiMetaDescription,
  trafikStresiMetaTitle,
} from "@/lib/article-content/bursa-trafik-stresi";
import {
  gucluGorunmekBlocks,
  gucluGorunmekMetaDescription,
  gucluGorunmekMetaTitle,
} from "@/lib/article-content/bursa-guclu-gorunmek";
import {
  psikologSecerkenBlocks,
  psikologSecerkenMetaDescription,
  psikologSecerkenMetaTitle,
} from "@/lib/article-content/bursa-psikolog-secerken";
import {
  yalnizlikArticleBlocks,
  yalnizlikArticleMetaDescription,
  yalnizlikArticleMetaTitle,
} from "@/lib/article-content/bursa-sosyal-yalnizlik";
import {
  tukenmislikArticleBlocks,
  tukenmislikArticleMetaDescription,
  tukenmislikArticleMetaTitle,
} from "@/lib/article-content/bursa-beyaz-yaka-tukenmislik";
import {
  depremArticleBlocks,
  depremArticleMetaDescription,
  depremArticleMetaTitle,
} from "@/lib/article-content/bursa-deprem-anksiyetesi";

import {
  panikAtakBelirtileriBlocks,
  panikAtakBelirtileriExcerpt,
  panikAtakBelirtileriFaq,
  panikAtakBelirtileriMetaDescription,
  panikAtakBelirtileriMetaTitle,
} from "@/lib/article-content/panik-atak-belirtileri";
import {
  kaygiBozukluguBelirtileriBlocks,
  kaygiBozukluguBelirtileriExcerpt,
  kaygiBozukluguBelirtileriFaq,
  kaygiBozukluguBelirtileriMetaDescription,
  kaygiBozukluguBelirtileriMetaTitle,
} from "@/lib/article-content/kaygi-bozuklugu-belirtileri";
import {
  ilkTerapiSeansiBlocks,
  ilkTerapiSeansiExcerpt,
  ilkTerapiSeansiFaq,
  ilkTerapiSeansiMetaDescription,
  ilkTerapiSeansiMetaTitle,
} from "@/lib/article-content/ilk-terapi-seansi-nasil-gecer";
import {
  onlineTerapiBlocks,
  onlineTerapiExcerpt,
  onlineTerapiFaq,
  onlineTerapiMetaDescription,
  onlineTerapiMetaTitle,
} from "@/lib/article-content/online-terapi-ise-yariyor-mu";
import {
  duygusalTukenmislikBlocks,
  duygusalTukenmislikExcerpt,
  duygusalTukenmislikFaq,
  duygusalTukenmislikMetaDescription,
  duygusalTukenmislikMetaTitle,
} from "@/lib/article-content/duygusal-tukenmislik-belirtileri";
import {
  asiriDusunmeBlocks,
  asiriDusunmeExcerpt,
  asiriDusunmeFaq,
  asiriDusunmeMetaDescription,
  asiriDusunmeMetaTitle,
} from "@/lib/article-content/asiri-dusunme-ile-bas-etme";
import {
  iliskilerdeGuvenBlocks,
  iliskilerdeGuvenExcerpt,
  iliskilerdeGuvenFaq,
  iliskilerdeGuvenMetaDescription,
  iliskilerdeGuvenMetaTitle,
} from "@/lib/article-content/iliskilerde-guven-problemleri";
import {
  bursaPsikologFiyatlariBlocks,
  bursaPsikologFiyatlariExcerpt,
  bursaPsikologFiyatlariFaq,
  bursaPsikologFiyatlariMetaDescription,
  bursaPsikologFiyatlariMetaTitle,
} from "@/lib/article-content/bursa-psikolog-fiyatlari";

import type { Article } from "@/lib/article-types";
import type { ArticleCategory } from "@/lib/article-categories";

export type {
  Article,
  ArticleBlock,
  ArticleFaqItem,
  ArticleRelatedService,
} from "@/lib/article-types";

export type { ArticleCategory } from "@/lib/article-categories";

export const articles: readonly Article[] = [
  // ────────────────────────────────────────────────────────────────
  // YENİ — 2026 SEO blog içerikleri
  // ────────────────────────────────────────────────────────────────
  {
    slug: "bursa-psikolog-fiyatlari",
    date: "27 Mayıs 2026",
    dateISO: "2026-05-27",
    category: "Terapi Süreci",
    title: "Bursa Psikolog Fiyatları 2026: Seans Ücreti Nasıl Belirlenir?",
    metaTitle: bursaPsikologFiyatlariMetaTitle,
    metaDescription: bursaPsikologFiyatlariMetaDescription,
    excerpt: bursaPsikologFiyatlariExcerpt,
    faq: bursaPsikologFiyatlariFaq,
    content: bursaPsikologFiyatlariBlocks,
    relatedServices: [
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "Yetişkin bireysel psikoterapi sürecinin klinik çerçevesi.",
      },
      {
        label: "Online Terapi Bursa",
        href: "/hizmetler/online-terapi-bursa",
        description: "Yüz yüze erişimi kısıtlı danışanlar için sürdürülebilir format.",
      },
    ],
    relatedArticleSlugs: [
      "bursa-psikolog-secerken",
      "ilk-terapi-seansi-nasil-gecer",
    ],
  },
  {
    slug: "iliskilerde-guven-problemleri",
    date: "21 Mayıs 2026",
    dateISO: "2026-05-21",
    category: "İlişkiler",
    title: "İlişkilerde Güven Problemleri",
    metaTitle: iliskilerdeGuvenMetaTitle,
    metaDescription: iliskilerdeGuvenMetaDescription,
    excerpt: iliskilerdeGuvenExcerpt,
    faq: iliskilerdeGuvenFaq,
    content: iliskilerdeGuvenBlocks,
    relatedServices: [
      {
        label: "Çift Terapisi",
        href: "/cift-terapisi",
        description: "İletişim, sınırlar ve güven temelinde yapılandırılmış çift terapi süreci.",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "Geçmiş ilişkilerin izlerini ve içsel örüntüleri ele almak için bireysel çerçeve.",
      },
    ],
    relatedArticleSlugs: ["bursa-sosyal-yalnizlik"],
  },
  {
    slug: "asiri-dusunme-ile-bas-etme",
    date: "15 Mayıs 2026",
    dateISO: "2026-05-15",
    category: "Kaygı",
    title: "Aşırı Düşünme ile Baş Etmek",
    metaTitle: asiriDusunmeMetaTitle,
    metaDescription: asiriDusunmeMetaDescription,
    excerpt: asiriDusunmeExcerpt,
    faq: asiriDusunmeFaq,
    content: asiriDusunmeBlocks,
    relatedServices: [
      {
        label: "Anksiyete Terapisi (Bursa)",
        href: "/hizmetler/anksiyete-terapisi-bursa",
        description: "Yaygın kaygı, sosyal kaygı ve aşırı düşünme örüntülerinde klinik destek.",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "Düşünce-duygu örüntülerinin yapılandırılmış biçimde ele alındığı süreç.",
      },
    ],
  },
  {
    slug: "duygusal-tukenmislik-belirtileri",
    date: "9 Mayıs 2026",
    dateISO: "2026-05-09",
    category: "Depresyon",
    title: "Duygusal Tükenmişlik Belirtileri",
    metaTitle: duygusalTukenmislikMetaTitle,
    metaDescription: duygusalTukenmislikMetaDescription,
    excerpt: duygusalTukenmislikExcerpt,
    faq: duygusalTukenmislikFaq,
    content: duygusalTukenmislikBlocks,
    relatedServices: [
      {
        label: "Depresyon Terapisi (Bursa)",
        href: "/hizmetler/depresyon-terapisi-bursa",
        description: "Süreklilik kazanmış duygudurum tabloları için yapılandırılmış terapi süreci.",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "Tükenmişlik tablolarının altındaki yaşam ritmi ve örüntü çalışması.",
      },
    ],
  },
  {
    slug: "online-terapi-ise-yariyor-mu",
    date: "3 Mayıs 2026",
    dateISO: "2026-05-03",
    category: "Terapi Süreci",
    title: "Online Terapi İşe Yarıyor Mu?",
    metaTitle: onlineTerapiMetaTitle,
    metaDescription: onlineTerapiMetaDescription,
    excerpt: onlineTerapiExcerpt,
    faq: onlineTerapiFaq,
    content: onlineTerapiBlocks,
    relatedServices: [
      {
        label: "Online Terapi",
        href: "/online-terapi",
        description: "Türkiye ve yurt dışından danışanlar için yapılandırılmış online psikoterapi.",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "Yüz yüze ve online formatlarda yürütülen bireysel psikoterapi süreci.",
      },
    ],
  },
  {
    slug: "ilk-terapi-seansi-nasil-gecer",
    date: "28 Nisan 2026",
    dateISO: "2026-04-28",
    category: "Terapi Süreci",
    title: "İlk Terapi Seansı Nasıl Geçer?",
    metaTitle: ilkTerapiSeansiMetaTitle,
    metaDescription: ilkTerapiSeansiMetaDescription,
    excerpt: ilkTerapiSeansiExcerpt,
    faq: ilkTerapiSeansiFaq,
    content: ilkTerapiSeansiBlocks,
    relatedServices: [
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
        description: "İlk görüşmeden itibaren yapılandırılmış bireysel terapi süreci.",
      },
      {
        label: "Online Terapi",
        href: "/online-terapi",
        description: "İlk seansını online yapmak isteyen danışanlar için seçenek.",
      },
    ],
  },
  {
    slug: "kaygi-bozuklugu-belirtileri",
    date: "22 Nisan 2026",
    dateISO: "2026-04-22",
    category: "Kaygı",
    title: "Kaygı Bozukluğu Belirtileri: Nasıl Tanınır?",
    metaTitle: kaygiBozukluguBelirtileriMetaTitle,
    metaDescription: kaygiBozukluguBelirtileriMetaDescription,
    excerpt: kaygiBozukluguBelirtileriExcerpt,
    faq: kaygiBozukluguBelirtileriFaq,
    content: kaygiBozukluguBelirtileriBlocks,
    relatedServices: [
      {
        label: "Anksiyete Terapisi (Bursa)",
        href: "/hizmetler/anksiyete-terapisi-bursa",
        description: "Yaygın kaygı, sosyal kaygı ve sağlık kaygısı tabloları için klinik destek.",
      },
      {
        label: "Panik Atak Terapisi (Bursa)",
        href: "/hizmetler/panik-atak-terapisi-bursa",
        description: "Tekrarlayan panik atak ve kaçınma örüntüleri için yapılandırılmış süreç.",
      },
    ],
  },
  {
    slug: "panik-atak-belirtileri",
    date: "15 Nisan 2026",
    dateISO: "2026-04-15",
    category: "Panik Atak",
    title: "Panik Atak Belirtileri: Neye Bakmalı?",
    metaTitle: panikAtakBelirtileriMetaTitle,
    metaDescription: panikAtakBelirtileriMetaDescription,
    excerpt: panikAtakBelirtileriExcerpt,
    faq: panikAtakBelirtileriFaq,
    content: panikAtakBelirtileriBlocks,
    relatedServices: [
      {
        label: "Panik Atak Terapisi (Bursa)",
        href: "/hizmetler/panik-atak-terapisi-bursa",
        description: "Tekrarlayan panik atak ve kaçınma örüntülerinde klinik değerlendirme.",
      },
      {
        label: "Anksiyete Terapisi (Bursa)",
        href: "/hizmetler/anksiyete-terapisi-bursa",
        description: "Panik atağı besleyen kaygı zemininin yapılandırılmış biçimde ele alınması.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // MEVCUT — kategori sistemi yeni kapalı listeye taşındı
  // ────────────────────────────────────────────────────────────────
  {
    slug: "bursa-trafik-stresi",
    image: "/images/bursa trafik.webp",
    date: "2 Nisan 2026",
    dateISO: "2026-04-02",
    category: "Kaygı",
    title: "Bursa'da Yoğun Trafik Sorunu ve Psikolojik Etkileri",
    metaTitle: trafikStresiMetaTitle,
    metaDescription: trafikStresiMetaDescription,
    excerpt:
      "Bursa trafik stresi, anksiyete ve tükenmişlik: FSM, Mudanya Yolu ve işe gidiş yorgunluğunun psikolojik etkileri ve stres yönetimi.",
    faq: trafikStresiFaq,
    content: trafikStresiBlocks,
    relatedServices: [
      {
        label: "Anksiyete Terapisi (Bursa)",
        href: "/hizmetler/anksiyete-terapisi-bursa",
      },
      {
        label: "Online Terapi",
        href: "/online-terapi",
      },
    ],
  },
  {
    slug: "bursa-deprem-anksiyetesi",
    image: "/images/deprem.webp",
    date: "24 Mart 2026",
    dateISO: "2026-03-24",
    category: "EMDR",
    title: "Bursa'da Deprem Anksiyetesi ve Psikolojik Etkileri",
    metaTitle: depremArticleMetaTitle,
    metaDescription: depremArticleMetaDescription,
    excerpt:
      "Deprem kaygısı, hipervijilans ve afet sonrası stres: Bursa'da travma psikolojisi, EMDR ve terapi süreçleri üzerine klinik bir rehber.",
    content: depremArticleBlocks,
    relatedServices: [
      {
        label: "Anksiyete Terapisi (Bursa)",
        href: "/hizmetler/anksiyete-terapisi-bursa",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
      },
    ],
  },
  {
    slug: "bursa-guclu-gorunmek",
    image: "/images/guclu olmak.webp",
    date: "28 Mart 2026",
    dateISO: "2026-03-28",
    category: "Terapi Süreci",
    title: "Sürekli Güçlü Görünmek Zorunda Hissetmek",
    metaTitle: gucluGorunmekMetaTitle,
    metaDescription: gucluGorunmekMetaDescription,
    excerpt:
      "Güçlü görünme baskısı, koşullu kabul ve performans odaklı öz-değer: Rogers, şema terapi ve BDT ile klinik bir değerlendirme.",
    content: gucluGorunmekBlocks,
    relatedServices: [
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
      },
    ],
  },
  {
    slug: "bursa-beyaz-yaka-tukenmislik",
    image: "/images/stres.webp",
    date: "25 Mart 2026",
    dateISO: "2026-03-25",
    category: "Depresyon",
    title: "Bursa'da Beyaz Yakalılarda Tükenmişlik Sendromu",
    metaTitle: tukenmislikArticleMetaTitle,
    metaDescription: tukenmislikArticleMetaDescription,
    excerpt:
      "Beyaz yakalı tükenmişlik, Maslach modeli ve kronik iş stresi: Bursa'da performans baskısı ve psikolojik destek süreçleri.",
    content: tukenmislikArticleBlocks,
    relatedServices: [
      {
        label: "Depresyon Terapisi (Bursa)",
        href: "/hizmetler/depresyon-terapisi-bursa",
      },
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
      },
    ],
  },
  {
    slug: "bursa-psikolog-secerken",
    image: "/images/Bursa Psikolog.webp",
    date: "27 Mart 2026",
    dateISO: "2026-03-27",
    category: "Terapi Süreci",
    title: "Bursa'da Psikolog Seçerken Nelere Dikkat Edilmeli?",
    metaTitle: psikologSecerkenMetaTitle,
    metaDescription: psikologSecerkenMetaDescription,
    excerpt:
      "Bursa'da psikolog seçimi: uzmanlık, terapi ekolleri, ilk seans beklentisi ve yüz yüze ya da online terapi karşılaştırması.",
    content: psikologSecerkenBlocks,
    relatedServices: [
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
      },
      {
        label: "Online Terapi",
        href: "/online-terapi",
      },
    ],
  },
  {
    slug: "bursa-sosyal-yalnizlik",
    image: "/images/yalnizlik.webp",
    date: "26 Mart 2026",
    dateISO: "2026-03-26",
    category: "İlişkiler",
    title: "Bursa'da Sosyal Yalnızlık ve Psikolojik Etkileri",
    metaTitle: yalnizlikArticleMetaTitle,
    metaDescription: yalnizlikArticleMetaDescription,
    excerpt:
      "Sosyal yalnızlık, bağlanma kuramı ve büyükşehir yaşamı: Bursa'da yalnız hissetmek, sosyal anksiyete ve terapi süreçleri üzerine klinik bir rehber.",
    content: yalnizlikArticleBlocks,
    relatedServices: [
      {
        label: "Bireysel Terapi",
        href: "/bireysel-terapi",
      },
    ],
  },
] as const;

// ────────────────────────────────────────────────────────────────
// Lookups & yardımcılar
// ────────────────────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Aynı kategoriden, kendisi hariç, tarihçe yeniden eskiye sıralı. */
export function getRelatedArticles(
  slug: string,
  count = 2,
  fallbackToOthers = true
): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  // Manuel önerilen slug'lar varsa onları öne al
  const manual = (current.relatedArticleSlugs ?? [])
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a) && a!.slug !== slug);

  const remaining = count - manual.length;
  if (remaining <= 0) return manual.slice(0, count);

  const sameCategory = articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .filter((a) => !manual.some((m) => m.slug === a.slug))
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

  let merged = [...manual, ...sameCategory.slice(0, remaining)];

  if (fallbackToOthers && merged.length < count) {
    const others = articles
      .filter((a) => a.slug !== slug)
      .filter((a) => !merged.some((m) => m.slug === a.slug))
      .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
    merged = [...merged, ...others.slice(0, count - merged.length)];
  }

  return merged.slice(0, count);
}

/** Kategori bazlı filtreleme — /blog filtre çipleri için. */
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

/** Türkçe karakterleri ASCII'ye dönüştüren slugify (TOC anchor için). */
export function slugifyHeading(text: string): string {
  const turkishMap: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };

  return text
    .split("")
    .map((ch) => turkishMap[ch] ?? ch)
    .join("")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // diğer aksanlar
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Makaledeki kelime sayısına göre yaklaşık okuma süresi (dakika).
 *
 * 180 kelime/dk hızı baz alınır — Türkçe morfolojik olarak daha yoğun
 * olduğundan İngilizce için kullanılan 200 wpm yerine bu değer tercih
 * edilir; klinik/akademik içerik için gerçekçi bir okuma hızıdır.
 *
 * Minimum 3 dk gösterilir (kısa makalelerde dürüst bir alt sınır).
 */
export function computeReadingMinutes(article: Article): number {
  const wordsPerMinute = 180;
  const text = article.content
    .map((block) => {
      if (block.type === "p" || block.type === "callout") return block.text;
      if (block.type === "h2" || block.type === "h3") return block.text;
      if (block.type === "ul") return block.items.join(" ");
      return "";
    })
    .join(" ");

  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / wordsPerMinute));
}

/** Günlük sabit seed — sunucu/istemci hydration uyumu için Math.random kullanılmaz */
export function pickFeaturedArticles<T>(
  items: readonly T[],
  count: number,
  seed = new Date().toISOString().slice(0, 10)
): T[] {
  const pool = [...items];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  for (let i = pool.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) >>> 0;
    const j = hash % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}
