import Link from "next/link";

type TestComingSoonProps = {
  title: string;
  description: string;
};

export function TestComingSoon({ title, description }: TestComingSoonProps) {
  return (
    <div className="editorial-card p-6 text-center sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-body/70">
        Yakında
      </p>
      <h2 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-body">{description}</p>
      <Link
        href="/testler/mbti-kisilik-analizi"
        className="link-editorial mt-6 inline-flex text-sm font-semibold"
      >
        MBTI testine geç
      </Link>
    </div>
  );
}
