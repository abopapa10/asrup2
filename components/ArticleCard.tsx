import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/makale/${article.slug}`} className="flex h-full flex-col">
        <div className="overflow-hidden border border-ice-blue border-t-2 border-t-transparent bg-white transition-colors group-hover:border-t-neon-turquoise">
          <Image
            src={article.image}
            alt={`${article.title} — ${article.category}`}
            width={640}
            height={360}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="article-image"
          />
        </div>
        <div className="flex flex-1 flex-col border border-t-0 border-ice-blue bg-white px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <time
            dateTime={article.dateISO}
            className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-slate-body/80 sm:text-[0.6875rem]"
          >
            {article.date}
          </time>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-body/80">
            {article.category}
          </p>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal transition-colors group-hover:text-slate-body sm:mt-4 sm:text-xl lg:text-[1.35rem]">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-[1.8] text-slate-body sm:mt-3">
            {article.excerpt}
          </p>
          <span className="link-editorial mt-5 sm:mt-6">Devamını Oku</span>
        </div>
      </Link>
    </article>
  );
}
