import { FadeIn } from "@/components/FadeIn";
import { MbtiTestApp } from "@/components/tests/mbti/MbtiTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { mbtiKisilikAnaliziArticleBlocks } from "@/lib/test-articles/mbti-kisilik-analizi-article";

export function MbtiKisilikAnaliziPage() {
  return (
    <>
      <section
        id="mbti-test"
        aria-label="MBTI kişilik analizi test bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="MBTI Kişilik Analizi" />
          <FadeIn>
            <MbtiTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent blocks={mbtiKisilikAnaliziArticleBlocks} />
        </div>
      </article>
    </>
  );
}
