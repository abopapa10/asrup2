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
import { paragraphs, type Article } from "@/lib/article-types";

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
    slug: "bursa-evlilik-danismanligi",
    image: "/images/articles/makale-evlilik.webp",
    date: "12 Mart 2026",
    dateISO: "2026-03-12",
    category: "Çift Terapisi",
    title: "Bursa'da Evlilik Danışmanlığı Süreci Nasıl İşler?",
    excerpt:
      "Evlilik danışmanlığı ve çift terapisi: ilk görüşme, seans yapısı ve Bursa'da sürece dair beklentiler.",
    content: paragraphs(
      "Evlilik danışmanlığı; çiftin ortak hedeflerini, iletişim kalıplarını ve çatışma çözüm becerilerini güçlendirmeyi amaçlar. Süreç, her iki tarafın gönüllü katılımı ve gizlilik ilkeleri üzerine kurulur.",
      "İlk seanslarda ilişki öyküsü, tetikleyici konular ve güvenli sınır alanları değerlendirilir. Ardından çiftin ihtiyacına göre seans sıklığı ve çalışma planı oluşturulur.",
      "Bursa Nilüfer'deki kliniğimizde yüz yüze çift terapisi; online seçeneklerle birlikte hibrit olarak da planlanabilir."
    ),
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
    slug: "bursa-psikolog-seans-ucreti",
    image: "/images/articles/makale-ucret.png",
    date: "28 Şubat 2026",
    dateISO: "2026-02-28",
    category: "Randevu & Süreç",
    title: "Bursa Psikolog Seans Ücretleri ve Süreç Rehberi",
    excerpt:
      "Bursa'da psikolog seans ücretleri, seans süresi ve randevu sürecine dair şeffaf bilgilendirme.",
    content: paragraphs(
      "Psikoterapi seans ücretleri; uzmanlık alanı, seans süresi ve terapi formatına (yüz yüze / online) göre mesleki standartlar çerçevesinde belirlenir.",
      "Standart seans süresi genellikle 50 dakikadır. İlk görüşmede klinik değerlendirme yapılır; süreç ve sıklık birlikte planlanır.",
      "Güncel ücret ve randevu bilgisi için WhatsApp veya telefon ile asistanımıza ulaşabilirsiniz."
    ),
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
