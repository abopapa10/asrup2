import { FadeIn } from "@/components/FadeIn";
import { TestArticlePlaceholder } from "@/components/tests/TestArticlePlaceholder";
import { TestPageBreadcrumb } from "@/components/tests/TestPageBreadcrumb";
import { TestRunner } from "@/components/tests/TestRunner";
import type { PsychologicalTestEntry } from "@/lib/psychological-tests";

type TestPageTemplateProps = {
  test: PsychologicalTestEntry;
};

export function TestPageTemplate({ test }: TestPageTemplateProps) {
  return (
    <article className="border-t border-ice-blue/40 bg-mesh-sky py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <TestPageBreadcrumb testTitle={test.title} />

        <FadeIn className="mx-auto max-w-xl text-center">
          <p className="eyebrow eyebrow-cta mb-4 inline-block sm:mb-5">
            Psikolojik test
          </p>
          <h1 className="heading-section">{test.title}</h1>
          <p className="body-lead mx-auto mt-4 max-w-lg sm:mt-5">
            {test.cardLead}
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-body/70">
            {test.questionCount} soru · {test.durationLabel} · Tarayıcıda hesaplanır
          </p>
        </FadeIn>

        <div className="mx-auto mt-8 max-w-xl sm:mt-10">
          <TestRunner slug={test.slug} />
        </div>

        <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
          <TestArticlePlaceholder testTitle={test.title} />
        </div>
      </div>
    </article>
  );
}
