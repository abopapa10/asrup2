import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { PortraitFrame } from "@/components/PortraitFrame";
import { homeApproaches } from "@/lib/home-seo-content";
import { siteConfig } from "@/lib/site-config";

export function AuthoritySection() {
  return (
    <section
      id="psikoterapi-yaklasimlari"
      aria-labelledby="authority-heading"
      className="border-t border-ice-blue/50 bg-mesh-sky py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-editorial items-start gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <FadeIn as="article">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">
            {homeApproaches.eyebrow}
          </p>
          <h2 id="authority-heading" className="heading-section">
            {homeApproaches.heading}
          </h2>
          <p className="body-lead mt-6 sm:mt-8">{homeApproaches.intro}</p>

          <ul className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {homeApproaches.items.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ice-blue pt-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:pt-10"
              >
                <span className="font-display text-xl font-semibold tracking-[-0.02em] text-neon-turquoise sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.85] text-slate-body">
                    {renderInlineMarkup(item.body)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:sticky lg:top-28 lg:max-w-none"
          as="article"
        >
          <PortraitFrame
            src={siteConfig.images.portraitFull}
            alt="Bursa Psikolog A. Alparslan Sancar — tam profil portre"
            variant="full"
          />
        </FadeIn>
      </div>
    </section>
  );
}
