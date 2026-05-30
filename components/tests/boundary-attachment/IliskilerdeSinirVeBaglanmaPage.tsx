import { FadeIn } from "@/components/FadeIn";
import { BoundaryAttachmentTestApp } from "@/components/tests/boundary-attachment/BoundaryAttachmentTestApp";
import { TestArticleContent } from "@/components/tests/TestArticleContent";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { iliskilerdeSinirVeBaglanmaArticleBlocks } from "@/lib/test-articles/iliskilerde-sinir-ve-baglanma-article";

export function IliskilerdeSinirVeBaglanmaPage() {
  return (
    <>
      <section
        id="boundary-attachment-test"
        aria-label="Sınır ve bağlanma testi bölümü"
        className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestPageBreadcrumb testTitle="Sınır ve Bağlanma Stilleri" />
          <FadeIn>
            <BoundaryAttachmentTestApp />
          </FadeIn>
        </div>
      </section>

      <article className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestArticleContent
            blocks={iliskilerdeSinirVeBaglanmaArticleBlocks}
            semanticSections
          />
        </div>
      </article>
    </>
  );
}
