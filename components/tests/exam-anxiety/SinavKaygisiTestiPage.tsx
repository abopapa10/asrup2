import { ExamAnxietyTestApp } from "@/components/tests/exam-anxiety/ExamAnxietyTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { sinavKaygisiTestiArticleBlocks } from "@/lib/test-articles/sinav-kaygisi-testi-article";

export function SinavKaygisiTestiPage() {
  return (
    <>
      <section
        id="exam-anxiety-test"
        aria-label="Sınav kaygısı testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Sınav Kaygısı Testi" />
          <ExamAnxietyTestApp />
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={sinavKaygisiTestiArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
