import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { PsychologicalTestEntry } from "@/lib/psychological-tests";

type TestHubCardProps = {
  test: PsychologicalTestEntry;
};

export function TestHubCard({ test }: TestHubCardProps) {
  const isLive = test.status === "live";

  const inner = (
    <>
      <div className="mb-5 flex items-start justify-between gap-3 sm:mb-6">
        <span className="eyebrow text-[0.65rem]">Psikolojik test</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] ${
            isLive
              ? "bg-soft-sky/80 text-slate-charcoal"
              : "border border-ice-blue bg-white text-slate-body/80"
          }`}
        >
          {isLive ? "Aktif" : "Yakında"}
        </span>
      </div>

      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal transition-colors duration-300 group-hover:text-slate-body sm:text-2xl">
        {test.title}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-[1.75] text-slate-body">
        {test.cardLead}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {test.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ice-blue/80 bg-white/80 px-2.5 py-0.5 text-xs font-medium text-slate-charcoal"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 flex items-center justify-between text-xs font-medium uppercase tracking-[0.12em] text-slate-body/70">
        <span>
          {test.questionCount} soru · {test.durationLabel}
        </span>
        <ArrowUpRight
          strokeWidth={1.25}
          className="h-4 w-4 shrink-0 text-ice-blue transition-transform duration-500 ease-gallery group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
          aria-hidden
        />
      </p>
    </>
  );

  const className =
    "test-hub-card editorial-card group flex h-full flex-col no-underline transition-all duration-500 ease-gallery hover:-translate-y-1 hover:border-t-neon-turquoise hover:shadow-editorial-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal";

  if (!isLive) {
    return (
      <article className={`${className} cursor-default opacity-90`} aria-disabled>
        {inner}
      </article>
    );
  }

  return (
    <Link href={test.href} className={className}>
      {inner}
    </Link>
  );
}
