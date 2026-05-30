"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  BIG_FIVE_LIKERT_LABELS,
  BIG_FIVE_QUESTIONS,
  BIG_FIVE_TRAIT_META,
  calculateBigFivePercentiles,
  createEmptyAnswers,
  getTraitInterpretation,
  type LikertValue,
} from "@/lib/big-five-test";

type Phase = "intro" | "question" | "result";

const TOTAL = BIG_FIVE_QUESTIONS.length;
const TRAIT_ORDER = ["O", "C", "E", "A", "N"] as const;

const relatedTests = [
  {
    href: "/testler/mbti-kisilik-analizi",
    label: "MBTI Kişilik Analizi",
    description: "Dört tercih boyutunda tip profili",
  },
  {
    href: "/testler/iliskilerde-sinir-ve-baglanma",
    label: "Sınır ve Bağlanma Stilleri",
    description: "İlişki ve bağlanma öz-değerlendirmesi",
  },
] as const;

export function BigFiveTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyAnswers);
  const [transitioning, setTransitioning] = useState(false);
  const [percentiles, setPercentiles] = useState<ReturnType<
    typeof calculateBigFivePercentiles
  >>(null);

  const question = BIG_FIVE_QUESTIONS[index];
  const progress =
    phase === "question"
      ? ((index + 1) / TOTAL) * 100
      : phase === "result"
        ? 100
        : 0;

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setAnswers(createEmptyAnswers());
    setTransitioning(false);
    setPercentiles(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setAnswers(createEmptyAnswers());
    setPercentiles(null);
  }, []);

  const selectAnswer = useCallback(
    (value: LikertValue) => {
      if (transitioning || phase !== "question") return;

      const next = [...answers];
      next[index] = value;
      setAnswers(next);
      setTransitioning(true);

      window.setTimeout(() => {
        if (index + 1 >= TOTAL) {
          setPercentiles(calculateBigFivePercentiles(next));
          setPhase("result");
          setTransitioning(false);
          return;
        }
        setIndex((i) => i + 1);
        setTransitioning(false);
      }, 260);
    },
    [answers, index, phase, transitioning]
  );

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          Beş Faktör Kişilik Envanteri
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          Big Five Kişilik Testi
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          15 madde · Likert ölçeği · OCEAN boyutları · Tarayıcıda hesaplanır
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
        aria-label="Big Five kişilik testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              BFI yapısına benzer 15 maddelik öz-bildirim ölçeğidir. Her soruda 1–5
              arası seçim yapın; sonuçlar beş boyutta yüzdelik profil olarak
              gösterilir. Klinik tanı aracı değildir.
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
            <p className="mt-2 text-xs text-slate-body/70">
              {BIG_FIVE_TRAIT_META[question.trait].name} ·{" "}
              {BIG_FIVE_TRAIT_META[question.trait].english}
            </p>

            <div
              className="mt-5 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2"
              role="group"
              aria-label="Likert seçenekleri"
            >
              {BIG_FIVE_LIKERT_LABELS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={transitioning}
                  onClick={() => selectAnswer(opt.value)}
                  title={opt.label}
                  className="flex flex-col items-center rounded-lg border border-ice-blue bg-white px-1 py-2.5 text-center transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-2 sm:py-3"
                >
                  <span className="font-display text-sm font-semibold text-slate-charcoal sm:text-base">
                    {opt.short}
                  </span>
                </button>
              ))}
            </div>
            <ul className="mt-3 hidden gap-2 text-[0.65rem] leading-tight text-slate-body/70 sm:grid sm:grid-cols-5 sm:text-center">
              {BIG_FIVE_LIKERT_LABELS.map((opt) => (
                <li key={opt.value}>{opt.label}</li>
              ))}
            </ul>
            <p className="mt-3 text-center text-xs text-slate-body/65 sm:hidden">
              1: Kesinlikle katılmıyorum · 5: Kesinlikle katılıyorum
            </p>
          </div>
        )}

        {phase === "result" && percentiles && (
          <div className="space-y-6">
            <p className="text-center text-sm leading-relaxed text-slate-body">
              Profiliniz beş boyutta 0–100 arası normalize edilmiştir. Yüksek
              nevrotisizm skoru duygusal reaktiviteyi; düşük skor ise duygusal
              istikrarı işaret eder.
            </p>

            {TRAIT_ORDER.map((trait) => {
              const pct = percentiles[trait];
              const meta = BIG_FIVE_TRAIT_META[trait];
              return (
                <div key={trait} className="text-left">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="font-medium text-slate-charcoal">{meta.name}</p>
                      <p className="text-xs text-slate-body/70">{meta.english}</p>
                    </div>
                    <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                      %{pct}
                    </p>
                  </div>
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-ice-blue/70"
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${meta.name} yüzde ${pct}`}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${meta.colorClass} transition-[width] duration-700 ease-out`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="mt-2.5 text-sm leading-[1.75] text-slate-body">
                    {getTraitInterpretation(trait, pct)}
                  </p>
                </div>
              );
            })}

            <p className="border-t border-ice-blue/60 pt-4 text-xs leading-relaxed text-slate-body/80">
              Bu özet eğitim amaçlıdır; NEO-PI-R veya klinik görüşme yerine geçmez.
            </p>

            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-ice-blue bg-white px-4 py-2.5 text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/50 hover:bg-soft-sky/25"
            >
              Testi yeniden yap
            </button>

            <div className="border-t border-ice-blue/50 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Diğer testler
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                {relatedTests.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-ice-blue bg-white px-4 py-3 transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/20"
                  >
                    <span className="block font-medium text-slate-charcoal">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-body/75">
                      {item.description}
                    </span>
                  </Link>
                ))}
                <Link href="/testler" className="link-editorial mt-1 text-sm font-semibold">
                  Testler merkezine dön
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
