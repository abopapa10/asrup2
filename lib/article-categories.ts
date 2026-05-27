/**
 * Article Categories — minimal & closed list.
 *
 * Yeni kategori eklemek için yalnızca bu dosya güncellenir.
 * Tüm makaleler bu listedeki bir kategoriye ait olmak zorundadır
 * (TypeScript zorlar).
 */

export const ARTICLE_CATEGORIES = [
  "Kaygı",
  "Panik Atak",
  "Depresyon",
  "İlişkiler",
  "Çift Terapisi",
  "EMDR",
  "Terapi Süreci",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

const CATEGORY_SLUG_MAP: Record<ArticleCategory, string> = {
  Kaygı: "kaygi",
  "Panik Atak": "panik-atak",
  Depresyon: "depresyon",
  İlişkiler: "iliskiler",
  "Çift Terapisi": "cift-terapisi",
  EMDR: "emdr",
  "Terapi Süreci": "terapi-sureci",
};

export function categorySlug(category: ArticleCategory): string {
  return CATEGORY_SLUG_MAP[category];
}

/** Kategori başına kısa, görünür açıklama (filtre/etiket altyazısı için). */
export const CATEGORY_DESCRIPTIONS: Record<ArticleCategory, string> = {
  Kaygı: "Yaygın kaygı, sosyal kaygı ve aşırı düşünme.",
  "Panik Atak": "Panik tepkileri, kaçınma ve atak sonrası süreçler.",
  Depresyon: "Duygudurum, motivasyon ve duygusal tükenmişlik.",
  İlişkiler: "Bağlanma, güven, çatışma ve ilişkisel dinamikler.",
  "Çift Terapisi": "İletişim, sınırlar ve birlikte iyileşme.",
  EMDR: "Travma, hipervijilans ve EMDR yaklaşımları.",
  "Terapi Süreci": "İlk seans, terapi formatı ve psikolog seçimi.",
};
