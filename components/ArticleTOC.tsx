import type { ArticleBlock } from "@/lib/article-types";
import { slugifyHeading } from "@/lib/articles";

type ArticleTOCProps = {
  content: readonly ArticleBlock[];
};

/**
 * Article'ın H2 bloklarını okuyup; numaralı, anchor link
 * üreten minimal Table of Contents bileşeni.
 *
 * Server-rendered, client JS yoktur. Smooth-scroll için
 * `scroll-behavior: smooth` zaten `globals.css` içinde tanımlı
 * (html, body üzerinde tarayıcı default'una saygılı).
 */
export function ArticleTOC({ content }: ArticleTOCProps) {
  const headings = content
    .filter((block): block is { type: "h2"; text: string } => block.type === "h2")
    .map((block) => ({
      text: block.text,
      id: slugifyHeading(block.text),
    }));

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="İçindekiler"
      className="border border-ice-blue bg-white px-5 py-6 sm:px-7 sm:py-7"
    >
      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-slate-body/90 sm:text-[0.6875rem]">
        Bu Yazıda
      </p>
      <ol className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-3.5">
        {headings.map((h, index) => (
          <li key={h.id} className="flex items-baseline gap-3 text-sm sm:gap-4">
            <span
              aria-hidden
              className="font-display text-xs font-semibold tabular-nums text-neon-turquoise sm:text-sm"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${h.id}`}
              className="link-editorial leading-snug text-slate-charcoal sm:text-[0.9375rem]"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
