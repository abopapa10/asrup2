import { FadeIn } from "@/components/FadeIn";
import { StressBurnoutTestApp } from "@/components/tests/stress-burnout/StressBurnoutTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { stresVeTukenmislikAnaliziArticleBlocks } from "@/lib/test-articles/stres-ve-tukenmislik-analizi-article";

export function StresVeTukenmislikAnaliziPage() {
  return (
    <>
      <section
        id="stress-burnout-test"
        aria-label="Stres ve tükenmişlik testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Stres ve Tükenmişlik" />
          <FadeIn>
            <StressBurnoutTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={stresVeTukenmislikAnaliziArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
