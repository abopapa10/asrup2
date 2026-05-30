"use client";

import Link from "next/link";
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

const relatedTests = [
  {
    href: "/testler/bes-faktor-big-five",
    label: "Beş Faktör (Big Five)",
    description: "OCEAN boyutlarında öz-değerlendirme",
  },
  {
    href: "/testler/iliskilerde-sinir-ve-baglanma",
    label: "Sınır ve Bağlanma Stilleri",
    description: "İlişki ve bağlanma eğilimleri",
  },
] as const;

export function MbtiTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<MbtiScores>(createEmptyScores);
  const [transitioning, setTransitioning] = useState(false);
  const [resultType, setResultType] = useState<MbtiType | null>(null);

  const question = MBTI_QUESTIONS[index];
  const progress = phase === "question" ? ((index + 1) / TOTAL) * 100 : phase === "result" ? 100 : 0;

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
      }, 240);
    },
    [index, phase, scores, transitioning]
  );

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          Kişilik Analizi Testi
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          MBTI Testi
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          16 soru · E/I, S/N, T/F, J/P · Sonuçlar yalnızca tarayıcınızda hesaplanır.
        </p>
      </header>

      {(phase === "question" || phase === "result") && (
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
            <span>
              {phase === "result" ? "Tamamlandı" : `Soru ${index + 1} / ${TOTAL}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div
            className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-ice-blue/80"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-soft-sky via-neon-turquoise to-neon-turquoise/80 transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div
        className="editorial-card mt-6 p-5 hover:translate-y-0 sm:mt-7 sm:p-6 lg:p-7"
        role="region"
        aria-live="polite"
        aria-busy={transitioning}
        aria-label="MBTI kişilik analizi testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              Her adımda tek bir soru görürsünüz. Seçiminizden sonra kısa bir geçişle
              bir sonraki soruya ilerlersiniz; yaklaşık{" "}
              <span className="font-medium text-slate-charcoal">3–4 dakika</span> sürer.
            </p>
            <button type="button" onClick={start} className="btn-whatsapp mt-5 w-full sm:mt-6">
              Teste Başla
            </button>
          </div>
        )}

        {phase === "question" && question && (
          <div
            key={question.id}
            className={`transition-all duration-200 ease-out ${
              transitioning
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100"
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
                  className="rounded-lg border border-ice-blue bg-white px-3.5 py-2.5 text-left text-sm leading-snug text-slate-body transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-4 sm:py-3"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "result" && resultType && profile && (
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-body/70">
              Önerilen tip profili
            </p>
            <p
              className="mt-2 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-charcoal sm:text-5xl"
              aria-label={`MBTI tipi ${resultType}`}
            >
              {resultType}
            </p>
            <p className="mt-1.5 text-sm font-medium text-neon-turquoise sm:text-base">
              {profile.title}
            </p>
            <p className="mt-5 text-left text-sm leading-[1.8] text-slate-body sm:text-[0.9375rem]">
              {profile.summary}
            </p>
            <p className="mt-4 border-t border-ice-blue/60 pt-4 text-left text-xs leading-relaxed text-slate-body/80">
              Bu sonuç eğitim amaçlı bir öz-yansıtmadır; psikiyatrik veya psikolojik
              tanı yerine geçmez.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 w-full rounded-lg border border-ice-blue bg-white px-4 py-2.5 text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/50 hover:bg-soft-sky/25"
            >
              Testi yeniden yap
            </button>

            <div className="mt-8 border-t border-ice-blue/50 pt-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Diğer ölçekler
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                {relatedTests.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-ice-blue bg-white px-4 py-3 transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/20"
                  >
                    <span className="block font-medium text-slate-charcoal group-hover:text-slate-body">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-body/75">
                      {item.description}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/testler"
                  className="link-editorial mt-1 inline-flex text-sm font-semibold"
                >
                  Tüm testler merkezine dön
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
