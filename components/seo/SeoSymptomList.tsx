import { FadeIn } from "@/components/FadeIn";

export type SeoSymptomListProps = {
  heading: string;
  intro?: string;
  groups: readonly { title: string; items: readonly string[] }[];
};

/**
 * "Kimler destek alabilir / Hangi belirtiler için başvurulur?" bölümü.
 * Editorial kart tasarımıyla, semptomları okunabilir küçük gruplar halinde sunar.
 */
export function SeoSymptomList({ heading, intro, groups }: SeoSymptomListProps) {
  if (groups.length === 0) return null;

  return (
    <FadeIn as="section">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-slate-body sm:mt-6 sm:text-[0.9375rem] sm:leading-[1.9]">
          {intro}
        </p>
      ) : null}

      <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
        {groups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.05} as="article">
            <div className="editorial-card h-full">
              <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-[1.7] text-slate-body sm:text-[0.9375rem] sm:leading-[1.75]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-neon-turquoise"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
