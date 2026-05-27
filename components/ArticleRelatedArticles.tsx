import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Article } from "@/lib/article-types";

type ArticleRelatedArticlesProps = {
  articles: readonly Article[];
  heading?: string;
};

/**
 * Makalenin altında okumaya devam edebilecek 2-3 ilgili makaleyi
 * gösteren premium minimal liste.
 *
 * Görsel olarak ana ArticleCard'tan daha sade tutulmuştur:
 * uzun bir blog kartı yığını yerine; tek satır kompakt link grubu.
 */
export function ArticleRelatedArticles({
  articles,
  heading = "Okumaya devam et",
}: ArticleRelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <FadeIn
      as="section"
      aria-labelledby="article-related-articles-heading"
      className="mt-16 sm:mt-20"
    >
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">İlgili Makaleler</p>
      <h2
        id="article-related-articles-heading"
        className="heading-section text-left"
      >
        {heading}
      </h2>

      <ul className="mt-10 divide-y divide-ice-blue border-y border-ice-blue sm:mt-12">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/makale/${article.slug}`}
              className="group flex flex-col gap-2 px-1 py-6 transition-colors hover:bg-soft-sky/15 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-3 sm:py-7"
            >
              <div className="flex-1">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-slate-body/80 sm:text-[0.6875rem]">
                  {article.category}
                </p>
                <p className="mt-2 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal transition-colors group-hover:text-slate-body sm:mt-3 sm:text-lg">
                  {article.title}
                </p>
              </div>
              <span
                aria-hidden
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-body/70 transition-transform duration-500 ease-gallery group-hover:translate-x-1 sm:text-[0.6875rem]"
              >
                Oku →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
