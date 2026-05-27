import type { ArticleCategory } from "@/lib/article-categories";

/**
 * ArticleBlock — makale içeriğini oluşturan atomik bloklar.
 *
 * `p` paragrafları içinde `[Etiket](/yol)` markdown-tarzı tokenları
 * `link-editorial` stiliyle render edilir (bkz. `components/inline-markup.tsx`).
 */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "callout"; text: string };

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

/** İlgili hizmet — makaleye contextual bağ kurulan SEO landing/hizmet sayfası. */
export type ArticleRelatedService = {
  label: string;
  href: string;
  description?: string;
};

export type Article = {
  slug: string;
  /** Hero/kart görseli — bırakılırsa premium typography fallback kullanılır. */
  image?: string;
  /** İnsani format — örn. "12 Mayıs 2026" */
  date: string;
  /** ISO format — schema & sıralama için */
  dateISO: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  faq?: readonly ArticleFaqItem[];
  /**
   * İlgili hizmet/SEO landing sayfaları — makalenin altında
   * "İlgili Hizmetler" bloğunda gösterilir.
   * Tanımlı değilse render edilmez.
   */
  relatedServices?: readonly ArticleRelatedService[];
  /**
   * İlgili diğer makalelerin slug'ları — manuel seçim.
   * Tanımlı değilse aynı kategoriden otomatik 2 makale önerilir.
   */
  relatedArticleSlugs?: readonly string[];
  content: readonly ArticleBlock[];
};

export function paragraphs(...texts: string[]): ArticleBlock[] {
  return texts.map((text) => ({ type: "p", text }));
}
