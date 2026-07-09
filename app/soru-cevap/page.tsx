import type { Metadata } from "next";
import Link from "next/link";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { questionAnswers } from "@/lib/question-answers";
import { buildQuestionAnswerHubJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Soru - Cevap | Panik Atak ve Kaygi Rehberi",
  description:
    "Soru - Cevap hub: panik atak, kaygi, bedensel belirtiler ve terapi sureci hakkinda net, klinik ve AI motorlarina uygun yanitlar.",
  path: "/soru-cevap",
  keywords: [
    "soru cevap psikoloji",
    "panik atak soru cevap",
    "kaygi bozuklugu soru cevap",
    "bursa psikolog soru cevap",
  ],
});

export default function SoruCevapHubPage() {
  const sorted = [...questionAnswers].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  return (
    <PageShell>
      <JsonLdScript data={buildQuestionAnswerHubJsonLd()} />
      <section className="border-t border-ice-blue/40 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:max-w-3xl lg:px-12">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Soru - Cevap</p>
          <h1 id="hero-heading" className="heading-section max-w-3xl">
            Soru - Cevap
          </h1>
          <p className="body-lead mt-4 max-w-2xl sm:mt-6">
            Panik atak ve kaygi ekseninde en cok sorulan sorulara kisa, bilimsel ve
            klinik aciklamalar.
          </p>

          <ul className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
            {sorted.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/soru-cevap/${item.slug}`}
                  className="block rounded border border-ice-blue/60 bg-mesh-blue/45 px-5 py-4 transition-colors hover:border-neon-turquoise/60 hover:bg-soft-sky/20 sm:px-6"
                >
                  <p className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {item.question}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-body">
                    {item.excerpt}
                  </p>
                  <span className="mt-2 inline-block text-sm font-semibold text-cta">
                    Detayi gor →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
