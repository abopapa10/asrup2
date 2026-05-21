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
import type { Article } from "@/lib/article-types";

export type { Article, ArticleBlock } from "@/lib/article-types";

export const articles: readonly Article[] = [
  {
    slug: "bursa-deprem-anksiyetesi",
    image: "/images/deprem.webp",
    date: "24 Mart 2026",
    dateISO: "2026-03-24",
    category: "Anksiyete & Travma",
    title: "Bursa'da Deprem Anksiyetesi ve Psikolojik Etkileri",
    metaTitle: depremArticleMetaTitle,
    metaDescription: depremArticleMetaDescription,
    excerpt:
      "Deprem kaygısı, hipervijilans ve afet sonrası stres: Bursa'da travma psikolojisi, EMDR ve terapi süreçleri üzerine klinik bir rehber.",
    content: depremArticleBlocks,
  },
  {
    slug: "bursa-guclu-gorunmek",
    image: "/images/guclu olmak.webp",
    date: "28 Mart 2026",
    dateISO: "2026-03-28",
    category: "Özdeğer & Duygusal Yorgunluk",
    title: "Sürekli Güçlü Görünmek Zorunda Hissetmek",
    metaTitle: gucluGorunmekMetaTitle,
    metaDescription: gucluGorunmekMetaDescription,
    excerpt:
      "Güçlü görünme baskısı, koşullu kabul ve performans odaklı öz-değer: Rogers, şema terapi ve BDT ile klinik bir değerlendirme.",
    content: gucluGorunmekBlocks,
  },
  {
    slug: "bursa-beyaz-yaka-tukenmislik",
    image: "/images/stres.webp",
    date: "25 Mart 2026",
    dateISO: "2026-03-25",
    category: "Tükenmişlik & Stres",
    title: "Bursa'da Beyaz Yakalılarda Tükenmişlik Sendromu",
    metaTitle: tukenmislikArticleMetaTitle,
    metaDescription: tukenmislikArticleMetaDescription,
    excerpt:
      "Beyaz yakalı tükenmişlik, Maslach modeli ve kronik iş stresi: Bursa'da performans baskısı ve psikolojik destek süreçleri.",
    content: tukenmislikArticleBlocks,
  },
  {
    slug: "bursa-psikolog-secerken",
    image: "/images/Bursa Psikolog.webp",
    date: "27 Mart 2026",
    dateISO: "2026-03-27",
    category: "Bursa Psikolog Rehberi",
    title: "Bursa'da Psikolog Seçerken Nelere Dikkat Edilmeli?",
    metaTitle: psikologSecerkenMetaTitle,
    metaDescription: psikologSecerkenMetaDescription,
    excerpt:
      "Bursa'da psikolog seçimi: uzmanlık, terapi ekolleri, ilk seans beklentisi ve yüz yüze ya da online terapi karşılaştırması.",
    content: psikologSecerkenBlocks,
  },
  {
    slug: "bursa-sosyal-yalnizlik",
    image: "/images/yalnizlik.webp",
    date: "26 Mart 2026",
    dateISO: "2026-03-26",
    category: "İlişkiler & Yalnızlık",
    title: "Bursa'da Sosyal Yalnızlık ve Psikolojik Etkileri",
    metaTitle: yalnizlikArticleMetaTitle,
    metaDescription: yalnizlikArticleMetaDescription,
    excerpt:
      "Sosyal yalnızlık, bağlanma kuramı ve büyükşehir yaşamı: Bursa'da yalnız hissetmek, sosyal anksiyete ve terapi süreçleri üzerine klinik bir rehber.",
    content: yalnizlikArticleBlocks,
  },
] as const;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
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
