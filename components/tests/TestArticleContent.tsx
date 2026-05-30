import { ArticleTOC } from "@/components/ArticleTOC";
import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { slugifyHeading } from "@/lib/articles";
import type { ArticleBlock } from "@/lib/article-types";

function TestArticleBlock({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    const id = slugifyHeading(block.text);
    return (
      <h2
        id={id}
        className="heading-section mt-14 scroll-mt-28 text-2xl first:mt-0 sm:mt-16 sm:text-[1.75rem]"
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
      <ul className="mt-4 flex flex-col gap-2.5 pl-1 sm:gap-3">
        {block.items.map((item, idx) => (
          <li
            key={`li-${idx}`}
            className="flex gap-3 text-sm leading-[1.85] text-slate-body sm:text-base sm:leading-[1.92]"
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

type TestArticleContentProps = {
  blocks: readonly ArticleBlock[];
  showToc?: boolean;
  /** Her h2 bloğunu <section> içinde gruplar (semantic SEO) */
  semanticSections?: boolean;
};

function groupBlocksIntoSections(blocks: readonly ArticleBlock[]) {
  const preamble: ArticleBlock[] = [];
  const sections: { heading: ArticleBlock; body: ArticleBlock[] }[] = [];
  let currentH2: ArticleBlock | null = null;
  let currentBody: ArticleBlock[] = [];

  for (const block of blocks) {
    if (block.type === "h2") {
      if (currentH2) {
        sections.push({ heading: currentH2, body: currentBody });
      } else if (currentBody.length > 0) {
        preamble.push(...currentBody);
      }
      currentH2 = block;
      currentBody = [];
      continue;
    }
    if (!currentH2) {
      preamble.push(block);
    } else {
      currentBody.push(block);
    }
  }

  if (currentH2) {
    sections.push({ heading: currentH2, body: currentBody });
  }

  return { preamble, sections };
}

export function TestArticleContent({
  blocks,
  showToc = true,
  semanticSections = false,
}: TestArticleContentProps) {
  const { preamble, sections } = semanticSections
    ? groupBlocksIntoSections(blocks)
    : { preamble: [], sections: [] };

  return (
    <div className="mx-auto max-w-3xl">
      <FadeIn>
        <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Bilimsel rehber</p>
        <p className="body-lead">
          Bu metin eğitim ve öz-farkındalık amaçlıdır; klinik tanı veya tedavi planı
          yerine geçmez.
        </p>
      </FadeIn>

      {showToc ? (
        <div className="mt-10 sm:mt-12">
          <ArticleTOC content={blocks} />
        </div>
      ) : null}

      {semanticSections ? (
        <div className="mt-10 flex flex-col gap-12 sm:mt-12 sm:gap-16">
          {preamble.length > 0 ? (
            <div className="flex flex-col gap-5 sm:gap-6">
              {preamble.map((block, index) => (
                <TestArticleBlock key={`pre-${index}`} block={block} />
              ))}
            </div>
          ) : null}
          {sections.map((section, sIndex) => {
            const id =
              section.heading.type === "h2"
                ? slugifyHeading(section.heading.text)
                : `section-${sIndex}`;
            return (
              <section
                key={id}
                aria-labelledby={id}
                className="flex flex-col gap-5 sm:gap-6"
              >
                <TestArticleBlock block={section.heading} />
                {section.body.map((block, index) => (
                  <TestArticleBlock key={`${id}-${index}`} block={block} />
                ))}
              </section>
            );
          })}
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:gap-6">
          {blocks.map((block, index) => (
            <TestArticleBlock key={`${block.type}-${index}`} block={block} />
          ))}
        </div>
      )}
    </div>
  );
}
