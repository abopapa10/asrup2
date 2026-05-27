import Image from "next/image";
import Link from "next/link";
import { ArticleFaqList } from "@/components/ArticleFaqList";
import { ArticleRelatedArticles } from "@/components/ArticleRelatedArticles";
import { ArticleRelatedServices } from "@/components/ArticleRelatedServices";
import { ArticleTOC } from "@/components/ArticleTOC";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import {
  computeReadingMinutes,
  getRelatedArticles,
  slugifyHeading,
} from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import type { Article, ArticleBlock } from "@/lib/article-types";

type ArticlePageContentProps = {
  article: Article;
};

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    const id = slugifyHeading(block.text);
    return (
      <h2
        id={id}
        className="heading-section mt-14 scroll-mt-24 text-2xl first:mt-0 sm:mt-16 sm:text-[1.75rem]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="mt-8 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:mt-10 sm:text-xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-2 flex flex-col gap-2.5 pl-1 sm:gap-3">
        {block.items.map((item, idx) => (
          <li
            key={`li-${idx}`}
            className="flex gap-3 text-sm leading-[1.85] text-slate-body sm:gap-4 sm:text-base sm:leading-[1.92]"
          >
            <span
              aria-hidden
              className="mt-[0.65em] inline-block h-1 w-3 shrink-0 bg-neon-turquoise/70"
            />
            <span>{renderInlineMarkup(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="mt-6 border-l-2 border-neon-turquoise/60 bg-soft-sky/15 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-sm leading-[1.85] text-slate-charcoal sm:text-[0.9375rem]">
          {renderInlineMarkup(block.text)}
        </p>
      </aside>
    );
  }

  return (
    <p className="text-sm leading-[1.9] text-slate-body sm:text-base sm:leading-[1.92]">
      {renderInlineMarkup(block.text)}
    </p>
  );
}

function authorInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

function ArticleByline({
  readingMinutes,
  date,
  dateISO,
}: {
  readingMinutes: number;
  date: string;
  dateISO: string;
}) {
  const initials = authorInitials(siteConfig.legalName);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-ice-blue py-5 sm:mt-10 sm:gap-x-6 sm:py-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center border border-ice-blue bg-white font-display text-xs font-semibold tracking-wide text-slate-charcoal sm:h-11 sm:w-11 sm:text-sm"
        >
          {initials}
        </span>
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold text-slate-charcoal sm:text-[0.9375rem]">
            {siteConfig.name}
          </p>
          <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-slate-body/80 sm:text-xs">
            {siteConfig.professional.jobTitle}
          </p>
        </div>
      </div>

      <span aria-hidden className="hidden h-5 w-px bg-ice-blue sm:block" />

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.6875rem] uppercase tracking-[0.18em] text-slate-body/80 sm:text-xs">
        <time dateTime={dateISO} className="font-semibold">
          {date}
        </time>
        <span aria-hidden className="text-slate-body/50">
          •
        </span>
        <span className="font-semibold">{readingMinutes} dk okuma</span>
      </div>
    </div>
  );
}

export function ArticlePageContent({ article }: ArticlePageContentProps) {
  const readingMinutes = computeReadingMinutes(article);
  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <article className="border-t border-ice-blue/40 bg-mesh-blue py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:max-w-3xl lg:px-12">
        <FadeIn>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-slate-body sm:mb-8"
          >
            <Link href="/" className="link-editorial">
              Ana Sayfa
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <Link href="/blog" className="link-editorial">
              Blog
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <span className="text-slate-charcoal">{article.category}</span>
          </nav>

          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-slate-body/90 sm:text-xs">
            {article.category}
          </p>
          <h1 className="heading-section mt-4">{article.title}</h1>
          <p className="body-lead mt-6 max-w-2xl">{article.excerpt}</p>

          <ArticleByline
            readingMinutes={readingMinutes}
            date={article.date}
            dateISO={article.dateISO}
          />
        </FadeIn>

        {article.image ? (
          <FadeIn>
            <div className="mt-10 overflow-hidden border border-ice-blue sm:mt-12">
              <Image
                src={article.image}
                alt={`${article.title} — ${article.category} makale kapak görseli`}
                width={960}
                height={540}
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="aspect-video w-full object-cover"
              />
            </div>
          </FadeIn>
        ) : null}

        <FadeIn>
          <div className="mt-10 sm:mt-12">
            <ArticleTOC content={article.content} />
          </div>
        </FadeIn>

        <div className="prose-custom mt-12 space-y-6 sm:mt-16">
          {article.content.map((block, index) => (
            <ArticleBlockView
              key={`${article.slug}-${index}`}
              block={block}
            />
          ))}
        </div>

        {article.faq && article.faq.length > 0 ? (
          <ArticleFaqList items={article.faq} />
        ) : null}

        {article.relatedServices && article.relatedServices.length > 0 ? (
          <ArticleRelatedServices services={article.relatedServices} />
        ) : null}

        {relatedArticles.length > 0 ? (
          <ArticleRelatedArticles articles={relatedArticles} />
        ) : null}

        <FadeIn className="mt-16 sm:mt-20">
          <CtaBlock variant="banner" />
        </FadeIn>

        <div className="mt-12 border-t border-ice-blue pt-8 sm:mt-16">
          <Link href="/blog" className="link-editorial">
            ← Tüm makalelere dön
          </Link>
        </div>
      </div>
    </article>
  );
}
