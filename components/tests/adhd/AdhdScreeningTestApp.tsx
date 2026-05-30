"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ADHD_LEVEL_META,
  ADHD_SCREENING_QUESTIONS,
  ASRS_LIKERT,
  calculateAdhdScreeningResult,
  createEmptyAdhdAnswers,
  getAdhdExpertCommentary,
  shouldShowClinicalCta,
  type AsrsLikertValue,
} from "@/lib/adhd-screening-test";

type Phase = "intro" | "question" | "result";

const TOTAL = ADHD_SCREENING_QUESTIONS.length;

const relatedTests = [
  {
    href: "/testler/stres-ve-tukenmislik-analizi",
    label: "Stres ve Tükenmişlik",
    description: "Algılanan stres ve burnout taraması",
  },
  {
    href: "/testler/duygusal-zeka-eq",
    label: "Duygusal Zeka (EQ)",
    description: "Özdenetim ve duygusal farkındalık",
  },
] as const;

export function AdhdScreeningTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyAdhdAnswers);
  const [transitioning, setTransitioning] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof calculateAdhdScreeningResult
  >>(null);

  const question = ADHD_SCREENING_QUESTIONS[index];
  const progress =
    phase === "question"
      ? ((index + 1) / TOTAL) * 100
      : phase === "result"
        ? 100
        : 0;

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setAnswers(createEmptyAdhdAnswers());
    setTransitioning(false);
    setResult(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setAnswers(createEmptyAdhdAnswers());
    setResult(null);
  }, []);

  const selectAnswer = useCallback(
    (value: AsrsLikertValue) => {
      if (transitioning || phase !== "question") return;

      const next = [...answers];
      next[index] = value;
      setAnswers(next);
      setTransitioning(true);

      window.setTimeout(() => {
        if (index + 1 >= TOTAL) {
          setResult(calculateAdhdScreeningResult(next));
          setPhase("result");
          setTransitioning(false);
          return;
        }
        setIndex((i) => i + 1);
        setTransitioning(false);
      }, 280);
    },
    [answers, index, phase, transitioning]
  );

  const levelMeta = result ? ADHD_LEVEL_META[result.level] : null;
  const showCta = result ? shouldShowClinicalCta(result.level) : false;

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          Yetişkinler İçin Dikkat Eksikliği (DEHB) Testi
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          ASRS Ölçeği Tabanlı Klinik Farkındalık ve Tarama Testi
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          12 madde · WHO ASRS v1.1 Part A + ek tarama · Tarayıcıda hesaplanır
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
              className="h-full rounded-full bg-gradient-to-r from-soft-sky via-neon-turquoise to-neon-turquoise/80 transition-[width] duration-500 ease-out"
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
        aria-label="Yetişkin DEHB tarama testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              Bu ölçek, WHO Adult ADHD Self-Report Scale (ASRS) v1.1 Part A
              algoritmasına dayalı bir farkındalık ve ön tarama aracıdır. Son
              altı ayı düşünerek yanıtlayın. Tanı koymaz.
            </p>
            <button type="button" onClick={start} className="btn-whatsapp mt-5 w-full sm:mt-6">
              Teste Başla
            </button>
          </div>
        )}

        {phase === "question" && question && (
          <div
            key={question.id}
            className={`transition-all duration-300 ease-out ${
              transitioning
                ? "translate-y-2 opacity-0 scale-[0.99]"
                : "translate-y-0 opacity-100 scale-100"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-body/65">
              Son altı ay içinde…
              {question.isPartA ? (
                <span className="ml-1 text-neon-turquoise/90">· ASRS Part A</span>
              ) : null}
            </p>
            <p className="mt-2 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
              {question.text}
            </p>

            <div
              className="mt-5 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2"
              role="group"
              aria-label="Sıklık seçenekleri"
            >
              {ASRS_LIKERT.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={transitioning}
                  onClick={() => selectAnswer(opt.value)}
                  title={opt.label}
                  className="flex flex-col items-center rounded-lg border border-ice-blue bg-white px-0.5 py-2.5 text-center transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/25 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-1.5 sm:py-3"
                >
                  <span className="font-display text-sm font-semibold text-slate-charcoal">
                    {opt.short}
                  </span>
                </button>
              ))}
            </div>
            <ul className="mt-3 hidden gap-2 text-[0.6rem] leading-tight text-slate-body/70 sm:grid sm:grid-cols-5 sm:text-center">
              {ASRS_LIKERT.map((opt) => (
                <li key={opt.value}>{opt.label}</li>
              ))}
            </ul>
          </div>
        )}

        {phase === "result" && result && levelMeta && (
          <div className="space-y-6">
            <div className="rounded-xl border border-ice-blue/80 bg-soft-sky/20 p-4 text-center sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Tarama sonucu
              </p>
              <p
                className={`mt-3 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ring-inset ${levelMeta.badgeClass}`}
              >
                {levelMeta.title}
              </p>
              <p className="mt-2 text-sm text-slate-body">{levelMeta.subtitle}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-white/80 px-2 py-2">
                  <p className="text-slate-body/70">ASRS Part A pozitif</p>
                  <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                    {result.partAPositiveCount}/6
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 px-2 py-2">
                  <p className="text-slate-body/70">Ek maddeler pozitif</p>
                  <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                    {result.supplementaryPositiveCount}/6
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-lg border border-amber-200/70 bg-amber-50/40 px-4 py-3 text-xs leading-relaxed text-slate-charcoal">
              <strong className="font-semibold">Önemli:</strong> Bu test tanı aracı
              değildir; yalnızca farkındalık ve ön tarama amaçlıdır. Kesin tanı için
              klinik psikolog veya psikiyatrist değerlendirmesi gerekir.
            </aside>

            <div className="border-t border-ice-blue/60 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Uzman yorumu
              </p>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                {getAdhdExpertCommentary(result)}
              </p>
            </div>

            {showCta ? (
              <div className="rounded-xl border border-neon-turquoise/30 bg-soft-sky/30 p-4 sm:p-5">
                <p className="text-sm font-medium text-slate-charcoal">
                  Profesyonel değerlendirme önerilir
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-body">
                  Yetişkin DEHB tanısı öykü, işlevsellik ölçümü ve ayırıcı tanı
                  gerektirir. Klinik psikolog ile psikoterapi ve gerekirse psikiyatrik
                  konsültasyon planlanabilir.
                </p>
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/bireysel-terapi"
                    className="btn-whatsapp inline-flex flex-1 items-center justify-center px-4 py-2.5 text-center text-sm"
                  >
                    Bireysel terapi randevusu
                  </Link>
                  <Link
                    href="/hizmetler/bilissel-davranisci-terapi-bursa"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-ice-blue bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/50 hover:bg-soft-sky/25"
                  >
                    BDT hizmeti
                  </Link>
                </div>
              </div>
            ) : null}

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
