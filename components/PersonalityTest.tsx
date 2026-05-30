"use client";

import { useCallback, useMemo, useState } from "react";
import {
  calculateMbtiType,
  createEmptyScores,
  MBTI_QUESTIONS,
  MBTI_TYPE_PROFILES,
  type MbtiPole,
  type MbtiScores,
  type MbtiType,
} from "@/lib/mbti-test";

type Phase = "intro" | "question" | "result";

const TOTAL = MBTI_QUESTIONS.length;

type PersonalityTestProps = {
  /** Ana sayfa bölümü veya `/testler` alt sayfası gövdesi */
  variant?: "standalone" | "embedded";
};

export function PersonalityTest({ variant = "standalone" }: PersonalityTestProps) {
  const isEmbedded = variant === "embedded";
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<MbtiScores>(createEmptyScores);
  const [transitioning, setTransitioning] = useState(false);
  const [resultType, setResultType] = useState<MbtiType | null>(null);

  const question = MBTI_QUESTIONS[index];
  const progress = phase === "question" ? ((index + 1) / TOTAL) * 100 : 0;

  const profile = useMemo(
    () => (resultType ? MBTI_TYPE_PROFILES[resultType] : null),
    [resultType]
  );

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setScores(createEmptyScores());
    setTransitioning(false);
    setResultType(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setScores(createEmptyScores());
    setResultType(null);
  }, []);

  const answer = useCallback(
    (pole: MbtiPole) => {
      if (transitioning || phase !== "question") return;

      const nextScores = { ...scores, [pole]: scores[pole] + 1 };
      setScores(nextScores);
      setTransitioning(true);

      window.setTimeout(() => {
        if (index + 1 >= TOTAL) {
          setResultType(calculateMbtiType(nextScores));
          setPhase("result");
          setTransitioning(false);
          return;
        }
        setIndex((i) => i + 1);
        setTransitioning(false);
      }, 220);
    },
    [index, phase, scores, transitioning]
  );

  const card = (
    <div
      className={`editorial-card p-5 hover:translate-y-0 sm:p-6 lg:p-6 lg:pb-7 ${isEmbedded ? "" : "mx-auto mt-6 sm:mt-7"}`}
      role="region"
      aria-live="polite"
      aria-busy={transitioning}
      aria-label="MBTI kişilik analizi testi"
    >
            {phase === "intro" && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                  Her adımda yalnızca bir soru görürsünüz; seçiminizden sonra
                  otomatik olarak sonraki soruya geçilir. Yaklaşık{" "}
                  <span className="font-medium text-slate-charcoal">3–4 dakika</span>{" "}
                  sürer.
                </p>
                <button
                  type="button"
                  onClick={start}
                  className="btn-whatsapp mt-5 w-full max-w-xs sm:mt-6"
                >
                  Teste Başla
                </button>
              </div>
            )}

            {phase === "question" && question && (
              <>
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-slate-body/75">
                    <span>
                      Soru {index + 1} / {TOTAL}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div
                    className="mt-2 h-1 overflow-hidden rounded-full bg-ice-blue/70"
                    role="progressbar"
                    aria-valuenow={index + 1}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL}
                  >
                    <div
                      className="h-full rounded-full bg-neon-turquoise transition-[width] duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div
                  key={question.id}
                  className={`transition-opacity duration-200 ease-out ${
                    transitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <p className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {question.text}
                  </p>
                  <div className="mt-4 flex flex-col gap-2.5 sm:mt-5">
                    {question.options.map((option) => (
                      <button
                        key={option.pole}
                        type="button"
                        disabled={transitioning}
                        onClick={() => answer(option.pole)}
                        className="rounded-lg border border-ice-blue bg-white px-3.5 py-2.5 text-left text-sm leading-snug text-slate-body transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-4 sm:py-3"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {phase === "result" && resultType && profile && (
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-body/70">
                  Önerilen tip profili
                </p>
                <p
                  className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-charcoal sm:text-4xl"
                  aria-label={`MBTI tipi ${resultType}`}
                >
                  {resultType}
                </p>
                <p className="mt-1 text-sm font-medium text-neon-turquoise sm:text-base">
                  {profile.title}
                </p>
                <p className="mt-4 text-left text-sm leading-[1.75] text-slate-body">
                  {profile.summary}
                </p>
                <p className="mt-4 border-t border-ice-blue/60 pt-3.5 text-left text-xs leading-relaxed text-slate-body/80">
                  Bu sonuç Myers–Briggs Tip Göstergesi çerçevesinde eğitim amaçlı
                  bir öz-yansıtmadır; psikiyatrik veya psikolojik tanı yerine
                  geçmez. Klinik değerlendirme için uzman görüşü önerilir.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 w-full rounded-lg border border-ice-blue bg-white px-4 py-2.5 text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/50 hover:bg-soft-sky/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
                >
                  Testi yeniden yap
                </button>
              </div>
            )}
    </div>
  );

  if (isEmbedded) {
    return card;
  }

  return (
    <section
      id="kisilik-testi"
      aria-labelledby="personality-test-heading"
      className="mb-16 border-t border-b border-ice-blue/50 bg-mesh-sky py-10 pb-16 sm:mb-24 sm:py-14 sm:pb-20 lg:mb-32 lg:py-16 lg:pb-24"
    >
      <div className="mx-auto flex max-w-editorial justify-center px-5 sm:px-6 lg:px-12">
        <div className="w-full max-w-xl">
          <header className="text-center">
            <p className="eyebrow eyebrow-cta mb-4 inline-block sm:mb-5">
              Kısa Değerlendirme
            </p>
            <h2
              id="personality-test-heading"
              className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]"
            >
              Kişilik Analizi Testi
            </h2>
            <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
              MBTI Testi
            </p>
            <p className="body-lead mx-auto mt-3 max-w-md sm:mt-4">
              16 soru · dört boyut · tarayıcıda hesaplanır · klinik tanı değildir.
            </p>
          </header>
          {card}
        </div>
      </div>
    </section>
  );
}
