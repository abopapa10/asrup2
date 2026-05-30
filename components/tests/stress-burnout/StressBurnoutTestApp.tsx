"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import {
  calculateStressBurnoutResult,
  createEmptyStressAnswers,
  getStressExpertCommentary,
  STRESS_BURNOUT_LIKERT,
  STRESS_BURNOUT_QUESTIONS,
  STRESS_LEVEL_META,
  type LikertValue,
} from "@/lib/stress-burnout-test";

type Phase = "intro" | "question" | "result";

const TOTAL = STRESS_BURNOUT_QUESTIONS.length;

const relatedTests = [
  {
    href: "/testler/duygusal-zeka-eq",
    label: "Duygusal Zeka (EQ)",
    description: "Goleman modeli duygusal beceri profili",
  },
  {
    href: "/testler/bes-faktor-big-five",
    label: "Beş Faktör (Big Five)",
    description: "Nevrotisizm ve kişilik boyutları",
  },
] as const;

export function StressBurnoutTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyStressAnswers);
  const [transitioning, setTransitioning] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof calculateStressBurnoutResult
  >>(null);

  const question = STRESS_BURNOUT_QUESTIONS[index];
  const progress =
    phase === "question"
      ? ((index + 1) / TOTAL) * 100
      : phase === "result"
        ? 100
        : 0;

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setAnswers(createEmptyStressAnswers());
    setTransitioning(false);
    setResult(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setAnswers(createEmptyStressAnswers());
    setResult(null);
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
          setResult(calculateStressBurnoutResult(next));
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

  const levelMeta = result ? STRESS_LEVEL_META[result.level] : null;

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          Stres ve Tükenmişlik Ölçeği
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          Algılanan Stres ve Burnout Seviyesi Analizi
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          {TOTAL} madde · PSS / Maslach esinli · Son bir ay · Tarayıcıda hesaplanır
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
        aria-label="Stres ve tükenmişlik testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              Algılanan Stres Ölçeği (PSS) ve Maslach tükenmişlik envanteri
              konseptlerine dayalı öz-bildirim ölçeğidir. Son bir ayı düşünerek
              yanıtlayın. Tanı aracı değildir.
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
              Son bir ay içinde…
            </p>
            <p className="mt-2 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
              {question.text}
            </p>

            <div
              className="mt-5 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2"
              role="group"
              aria-label="Sıklık seçenekleri"
            >
              {STRESS_BURNOUT_LIKERT.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={transitioning}
                  onClick={() => selectAnswer(opt.value)}
                  title={opt.label}
                  className="flex flex-col items-center rounded-lg border border-ice-blue bg-white px-1 py-2.5 text-center transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/25 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-2 sm:py-3"
                >
                  <span className="font-display text-sm font-semibold text-slate-charcoal sm:text-base">
                    {opt.short}
                  </span>
                </button>
              ))}
            </div>
            <ul className="mt-3 hidden gap-2 text-[0.65rem] leading-tight text-slate-body/70 sm:grid sm:grid-cols-5 sm:text-center">
              {STRESS_BURNOUT_LIKERT.map((opt) => (
                <li key={opt.value}>{opt.label}</li>
              ))}
            </ul>
          </div>
        )}

        {phase === "result" && result && levelMeta && (
          <div className="space-y-6">
            <div className="rounded-xl border border-ice-blue/80 bg-soft-sky/20 p-4 text-center sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Genel değerlendirme
              </p>
              <p
                className={`mt-3 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ring-inset ${levelMeta.badgeClass}`}
              >
                {levelMeta.title}
              </p>
              <p className="mt-2 text-sm text-slate-body">{levelMeta.subtitle}</p>
              <p className="mt-3 font-display text-3xl font-semibold tabular-nums text-slate-charcoal">
                %{result.compositePct}
              </p>
              <p className="mt-1 text-xs text-slate-body/70">Bileşik yük skoru</p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Algılanan stres", pct: result.stressPct },
                { label: "Tükenmişlik", pct: result.burnoutPct },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-end justify-between gap-2">
                    <p className="font-medium text-slate-charcoal">{row.label}</p>
                    <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                      %{row.pct}
                    </p>
                  </div>
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-ice-blue/70"
                    role="progressbar"
                    aria-valuenow={row.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${levelMeta.barClass} transition-[width] duration-700 ease-out`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ice-blue/60 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Uzman yorumu
              </p>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                {renderInlineMarkup(getStressExpertCommentary(result))}
              </p>
            </div>

            {result.level === "high" ? (
              <aside className="rounded-lg border border-rose-200/80 bg-rose-50/50 px-4 py-3 text-xs leading-relaxed text-slate-charcoal">
                Acil risk: Kendinize veya başkalarına zarar verme düşünceniz varsa
                derhal 112 veya en yakın acil servise başvurun. Türkiye&apos;de
                psikolojik destek hattı: 182 (İntihar Önleme Hattı).
              </aside>
            ) : null}

            <p className="text-xs leading-relaxed text-slate-body/80">
              Bu özet eğitim amaçlıdır; PSS-10 veya MBI klinik formlarının yerini
              tutmaz.
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
