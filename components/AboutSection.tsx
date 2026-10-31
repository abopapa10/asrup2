import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { PortraitFrame } from "@/components/PortraitFrame";
import { homeAbout } from "@/lib/home-seo-content";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section
      id="hakkimda"
      aria-labelledby="about-heading"
      className="border-b border-ice-blue/40 bg-white"
    >
      <div className="mx-auto max-w-editorial px-5 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <div>
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">
                {homeAbout.eyebrow}
              </p>
              <h2 id="about-heading" className="heading-section">
                {homeAbout.heading}
              </h2>
            </div>

            <div className="mx-auto mt-8 w-full max-w-[20rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
              <PortraitFrame
                src={siteConfig.images.portraitAbout}
                alt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
                variant="clinical"
                align="left"
                imageClassName="object-cover object-[50%_18%]"
              />
            </div>

            <FadeIn delay={0.2} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {homeAbout.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm leading-[1.9] text-slate-body sm:text-base"
                >
                  {renderInlineMarkup(paragraph)}
                </p>
              ))}
            </FadeIn>
          </div>

          <FadeIn
            delay={0.08}
            className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:block lg:max-w-none lg:sticky lg:top-28"
          >
            <PortraitFrame
              src={siteConfig.images.portraitAbout}
              alt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
              variant="clinical"
              align="right"
              imageClassName="object-cover object-[50%_18%]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
