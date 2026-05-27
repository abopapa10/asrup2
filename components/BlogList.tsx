"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
import {
  ARTICLE_CATEGORIES,
  type ArticleCategory,
} from "@/lib/article-categories";
import type { Article } from "@/lib/article-types";

type BlogListProps = {
  articles: readonly Article[];
};

type Filter = "all" | ArticleCategory;

/**
 * /blog sayfası için minimal kategori filtre çip sistemi + makale grid'i.
 *
 * Tasarım amacı: dikkat dağıtmadan kategori değişimine alan açmak.
 * Yalnızca aktif makalesi olan kategoriler chip olarak görünür;
 * boş kategoriler kendiliğinden gizlenir.
 */
export function BlogList({ articles }: BlogListProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleCategories = useMemo(() => {
    const active = new Set(articles.map((a) => a.category));
    return ARTICLE_CATEGORIES.filter((c) => active.has(c));
  }, [articles]);

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((a) => a.category === filter);
  }, [articles, filter]);

  return (
    <>
      <FadeIn className="mt-10 sm:mt-14">
        <div
          role="tablist"
          aria-label="Kategoriye göre filtrele"
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          <FilterChip
            label="Tümü"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          {visibleCategories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </div>
      </FadeIn>

      {filtered.length === 0 ? (
        <FadeIn className="mt-12 sm:mt-16">
          <p className="text-sm leading-[1.85] text-slate-body sm:text-base">
            Bu kategoride henüz yayınlanmış makale yok.
          </p>
        </FadeIn>
      ) : (
        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {filtered.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.04}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={[
        "border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-[0.6875rem]",
        active
          ? "border-neon-turquoise bg-neon-turquoise/15 text-slate-charcoal"
          : "border-ice-blue bg-white text-slate-body hover:border-neon-turquoise/50 hover:text-slate-charcoal",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
