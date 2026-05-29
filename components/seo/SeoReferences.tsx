import { FadeIn } from "@/components/FadeIn";

type SeoReferencesProps = {
  heading?: string;
  items: readonly string[];
  delay?: number;
};

export function SeoReferences({
  heading = "Kaynakça",
  items,
  delay = 0,
}: SeoReferencesProps) {
  return (
    <FadeIn delay={delay} as="section" className="max-w-3xl">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-[1.85] text-slate-body sm:mt-6 sm:space-y-4 sm:text-[0.9375rem] sm:leading-[1.9]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </FadeIn>
  );
}
