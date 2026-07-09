import Link from "next/link";
import { pickDailyQuestionAnswers } from "@/lib/question-answers";

export function QuestionAnswerSection() {
  const featured = pickDailyQuestionAnswers(6);

  return (
    <section
      id="soru-cevap"
      aria-labelledby="qa-home-heading"
      className="border-t border-ice-blue/60 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Soru - Cevap</p>
        <h2 id="qa-home-heading" className="heading-section max-w-3xl">
          Her Gun Guncellenen Klinik Soru - Cevap Seckisi
        </h2>
        <p className="body-lead mt-4 max-w-2xl sm:mt-6">
          Panik atak ve kaygiya dair en sik sorulan sorular, gunluk rastgele secilen
          iceriklerle hizli bir referans alani sunar.
        </p>

        <ul className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
          {featured.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/soru-cevap/${item.slug}`}
                className="group block rounded border border-ice-blue/60 bg-mesh-blue/50 px-5 py-4 transition-colors hover:border-neon-turquoise/60 hover:bg-soft-sky/20 sm:px-6"
              >
                <p className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                  {item.question}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-body">{item.excerpt}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-cta group-hover:text-cta-hover">
                  Cevabi oku →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 sm:mt-12">
          <Link href="/soru-cevap" className="link-editorial text-base font-semibold">
            Daha fazla Soru-Cevap
          </Link>
        </div>
      </div>
    </section>
  );
}
