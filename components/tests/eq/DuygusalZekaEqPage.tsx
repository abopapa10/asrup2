import { FadeIn } from "@/components/FadeIn";
import { EqTestApp } from "@/components/tests/eq/EqTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { duygusalZekaEqArticleBlocks } from "@/lib/test-articles/duygusal-zeka-eq-article";

export function DuygusalZekaEqPage() {
  return (
    <>
      <section
        id="eq-test"
        aria-label="Duygusal zeka testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Duygusal Zeka (EQ)" />
          <FadeIn>
            <EqTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={duygusalZekaEqArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
