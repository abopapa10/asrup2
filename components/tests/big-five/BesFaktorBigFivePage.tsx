import { FadeIn } from "@/components/FadeIn";
import { BigFiveTestApp } from "@/components/tests/big-five/BigFiveTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { besFaktorBigFiveArticleBlocks } from "@/lib/test-articles/bes-faktor-big-five-article";

export function BesFaktorBigFivePage() {
  return (
    <>
      <section
        id="big-five-test"
        aria-label="Big Five kişilik testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Beş Faktör (Big Five)" />
          <FadeIn>
            <BigFiveTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={besFaktorBigFiveArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
