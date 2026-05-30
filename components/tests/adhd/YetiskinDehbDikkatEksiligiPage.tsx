import { FadeIn } from "@/components/FadeIn";
import { AdhdScreeningTestApp } from "@/components/tests/adhd/AdhdScreeningTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { yetiskinDehbDikkatEksiligiArticleBlocks } from "@/lib/test-articles/yetiskin-dehb-dikkat-eksiligi-article";

export function YetiskinDehbDikkatEksiligiPage() {
  return (
    <>
      <section
        id="adhd-screening-test"
        aria-label="Yetişkin DEHB tarama testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Yetişkin DEHB Tarama" />
          <FadeIn>
            <AdhdScreeningTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={yetiskinDehbDikkatEksiligiArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
