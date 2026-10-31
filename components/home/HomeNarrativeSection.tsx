import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { PortraitFrame } from "@/components/PortraitFrame";

type HomeNarrativeImage = {
  src: string;
  alt: string;
  /** Masaüstünde görselin durduğu sütun. */
  align?: "left" | "right";
  frame?: "portrait" | "wide";
};

type HomeNarrativeSectionProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  headingId: string;
  paragraphs: readonly string[];
  tone?: "white" | "mesh";
  image?: HomeNarrativeImage;
};

function NarrativePhoto({
  src,
  alt,
  frame,
}: {
  src: string;
  alt: string;
  frame: "portrait" | "wide";
}) {
  if (frame === "portrait") {
    return (
      <PortraitFrame
        src={src}
        alt={alt}
        variant="clinical"
        align="right"
        imageClassName="object-cover object-[50%_20%]"
      />
    );
  }

  return (
    <figure className="relative w-full">
      <div
        className="absolute -inset-2 border border-ice-blue bg-white sm:-inset-3"
        aria-hidden
      />
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover"
        />
      </div>
    </figure>
  );
}

export function HomeNarrativeSection({
  id,
  eyebrow,
  heading,
  headingId,
  paragraphs,
  tone = "white",
  image,
}: HomeNarrativeSectionProps) {
  const toneClass = tone === "mesh" ? "bg-mesh-sky" : "bg-white";
  const imageOnLeft = image?.align === "left";

  const copy = (
    <>
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 id={headingId} className="heading-section">
        {heading}
      </h2>
      <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-sm leading-[1.9] text-slate-body sm:text-base"
          >
            {renderInlineMarkup(paragraph)}
          </p>
        ))}
      </div>
    </>
  );

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-ice-blue/40 ${toneClass} py-16 sm:py-24 lg:py-28`}
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        {image ? (
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <FadeIn className={imageOnLeft ? "lg:col-start-2" : undefined}>
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
              <h2 id={headingId} className="heading-section">
                {heading}
              </h2>
            </FadeIn>
            <FadeIn
              delay={0.06}
              className={`mx-auto w-full lg:sticky lg:top-28 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none ${
                image.frame === "portrait"
                  ? "max-w-[20rem] sm:max-w-[22rem]"
                  : "max-w-xl"
              } ${imageOnLeft ? "lg:col-start-1" : "lg:col-start-2"}`}
            >
              <NarrativePhoto
                src={image.src}
                alt={image.alt}
                frame={image.frame ?? "wide"}
              />
            </FadeIn>
            <FadeIn
              delay={0.04}
              className={imageOnLeft ? "lg:col-start-2" : "lg:col-start-1"}
            >
              <div className="space-y-5 sm:space-y-6">
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-sm leading-[1.9] text-slate-body sm:text-base"
                  >
                    {renderInlineMarkup(paragraph)}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        ) : (
          <FadeIn className="max-w-3xl">{copy}</FadeIn>
        )}
      </div>
    </section>
  );
}
