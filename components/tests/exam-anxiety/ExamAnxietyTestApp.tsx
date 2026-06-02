"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import {
  calculateExamAnxietyResult,
  createEmptyExamAnxietyAnswers,
  EXAM_ANXIETY_LIKERT,
  EXAM_ANXIETY_LEVEL_META,
  EXAM_ANXIETY_QUESTIONS,
  getExamAnxietyExpertCommentary,
  type ExamAnxietyLikert,
} from "@/lib/sinav-kaygisi-test";

type Phase = "intro" | "question" | "result";

const TOTAL = EXAM_ANXIETY_QUESTIONS.length;
const ARTICLE_HREF = "/makale/sinav-kaygisi-nedir";

const relatedTests = [
  {
    href: "/testler/stres-ve-tukenmislik-analizi",
    label: "Stres ve Tükenmişlik",
    description: "Algılanan stres ve burnout profili",
  },
  {
    href: "/testler/duygusal-zeka-eq",
    label: "Duygusal Zeka (EQ)",
    description: "Duygu düzenleme ve başa çıkma becerileri",
  },
] as const;

export function ExamAnxietyTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyExamAnxietyAnswers);
  const [transitioning, setTransitioning] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof calculateExamAnxietyResult
  >>(null);

  const question = EXAM_ANXIETY_QUESTIONS[index];
  const progress =
    phase === "question"
      ? ((index + 1) / TOTAL) * 100
      : phase === "result"
        ? 100
        : 0;

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setAnswers(createEmptyExamAnxietyAnswers());
    setTransitioning(false);
    setResult(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setAnswers(createEmptyExamAnxietyAnswers());
    setResult(null);
  }, []);

  const selectAnswer = useCallback(
    (value: ExamAnxietyLikert) => {
      if (transitioning || phase !== "question") return;

      const next = [...answers];
      next[index] = value;
      setAnswers(next);
      setTransitioning(true);

      window.setTimeout(() => {
        if (index + 1 >= TOTAL) {
          setResult(calculateExamAnxietyResult(next));
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

  const levelMeta = result ? EXAM_ANXIETY_LEVEL_META[result.level] : null;

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          Online Sınav Kaygısı Testi
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          Spielberger / Liebert–Morris Esinli Öz-Değerlendirme
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          {TOTAL} madde · 5&apos;li Likert · Tarayıcıda hesaplanır · Tanı aracı değildir
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-body">
          Detaylı bilgi için{" "}
          <Link href={ARTICLE_HREF} className="link-editorial font-semibold">
            sınav kaygısı rehberini
          </Link>{" "}
          okuyabilirsiniz.
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
        aria-label="Sınav kaygısı testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              Son bir ay içindeki sınav deneyimlerinizi düşünerek yanıtlayın.
              Spielberger Sınav Kaygısı Envanteri (TAI) ve Liebert–Morris ölçek
              konseptlerine dayalı öz-bildirim formudur.
            </p>
            <Link
              href={ARTICLE_HREF}
              className="link-editorial mt-4 inline-block text-sm font-semibold"
            >
              Sınav kaygısı belirtileri ve başa çıkma yolları →
            </Link>
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
              Sınav bağlamında…
            </p>
            <p className="mt-2 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
              {question.text}
            </p>

            <div
              className="mt-5 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2"
              role="group"
              aria-label="Sıklık seçenekleri"
            >
              {EXAM_ANXIETY_LIKERT.map((opt) => (
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
              {EXAM_ANXIETY_LIKERT.map((opt) => (
                <li key={opt.value}>{opt.label}</li>
              ))}
            </ul>
          </div>
        )}

        {phase === "result" && result && levelMeta && (
          <div className="space-y-6">
            <div className="rounded-xl border border-ice-blue/80 bg-soft-sky/20 p-4 text-center sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Sınav kaygısı düzeyi
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
              <p className="mt-1 text-xs text-slate-body/70">Bileşik kaygı skoru</p>
            </div>

            <div>
              <div className="flex items-end justify-between gap-2">
                <p className="font-medium text-slate-charcoal">Genel profil</p>
                <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                  %{result.compositePct}
                </p>
              </div>
              <div
                className="mt-2 h-2.5 overflow-hidden rounded-full bg-ice-blue/70"
                role="progressbar"
                aria-valuenow={result.compositePct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${levelMeta.barClass} transition-[width] duration-700 ease-out`}
                  style={{ width: `${result.compositePct}%` }}
                />
              </div>
            </div>

            <div className="border-t border-ice-blue/60 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Uzman yorumu
              </p>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                {renderInlineMarkup(getExamAnxietyExpertCommentary(result))}
              </p>
            </div>

            <Link
              href={ARTICLE_HREF}
              className="btn-whatsapp flex w-full items-center justify-center no-underline"
            >
              Sınav kaygısı rehberini oku
            </Link>

            {result.level === "high" ? (
              <aside className="rounded-lg border border-rose-200/80 bg-rose-50/50 px-4 py-3 text-xs leading-relaxed text-slate-charcoal">
                Kaygı günlük işlevselliğinizi ciddi düşürüyorsa bir klinik psikolog
                veya psikiyatristle görüşün. Acil risk durumunda 112 veya 182 (İntihar
                Önleme Hattı).
              </aside>
            ) : null}

            <p className="text-xs leading-relaxed text-slate-body/80">
              Bu özet eğitim amaçlıdır; TAI veya Liebert–Morris klinik formlarının
              yerini tutmaz.
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
