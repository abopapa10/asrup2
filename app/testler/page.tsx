import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { TestHubCard } from "@/components/tests/TestHubCard";
import { TestHubHero } from "@/components/tests/TestHubHero";
import { buildHubPageJsonLd } from "@/lib/page-structured-data";
import {
  PSYCHOLOGICAL_TESTS_HUB,
  psychologicalTests,
} from "@/lib/psychological-tests";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: PSYCHOLOGICAL_TESTS_HUB.metaTitle,
  description: PSYCHOLOGICAL_TESTS_HUB.metaDescription,
  path: PSYCHOLOGICAL_TESTS_HUB.path,
  keywords: [
    "MBTI testi",
    "kişilik analizi testi",
    "Big Five testi",
    "bağlanma stili testi",
    "psikolojik testler",
    "Bursa psikolog",
  ],
});

export default function TestlerHubPage() {
  return (
    <PageShell>
      <article className="border-t border-ice-blue/40 bg-white py-14 sm:py-20 lg:py-28">
        <JsonLdScript
          data={buildHubPageJsonLd({
            path: "/testler",
            title: PSYCHOLOGICAL_TESTS_HUB.title,
            description: PSYCHOLOGICAL_TESTS_HUB.metaDescription,
          })}
        />

        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <TestHubHero />

          <FadeIn className="mt-12 sm:mt-16 lg:mt-20">
            <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {psychologicalTests.map((test) => (
                <li key={test.slug} className="flex">
                  <TestHubCard test={test} />
                </li>
              ))}
            </ul>
          </FadeIn>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate-body/85 sm:mt-16">
            Test sonuçları yalnızca cihazınızda üretilir; sunucuya gönderilmez.
            Klinik tanı veya tedavi kararı için uzman değerlendirmesi gerekir.
          </p>
        </div>
      </article>
    </PageShell>
  );
}
