import Link from "next/link";
import { CredentialList } from "@/components/CredentialList";
import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
import { siteConfig } from "@/lib/site-config";

const workPrinciples = [
  {
    title: "Bilimsel çerçeve",
    body: "Yazılarımda ve kamuoyuna açık anlatılarımda kanıta dayalı psikoloji dilini esas alırım.",
  },
  {
    title: "Açık ve ölçülü anlatım",
    body: "Konuları sadeleştirirken abartıdan ve kesin vaatlerden kaçınırım.",
  },
  {
    title: "Etik ve gizlilik",
    body: "Mesleki etik ilkeler ve mahremiyet, psikoloji alanında duruşumun temelidir.",
  },
] as const;

function WorkPrinciplesCard() {
  return (
    <div className="editorial-card mt-8 p-6 sm:mt-10 sm:p-8">
      <h3 className="text-lg font-semibold tracking-tight text-deep-navy sm:text-xl">
        Yaklaşımım
      </h3>
      <ul className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
        {workPrinciples.map((item) => (
          <li key={item.title}>
            <p className="font-medium text-deep-navy">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-blue/85 sm:text-[0.9375rem]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Hakkımda</p>
              <h2 id="about-heading" className="heading-section">
                Psikolog A. Alparslan Sancar
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

            <CredentialList />

            <FadeIn delay={0.2} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Psikolog A. Alparslan Sancar, Hacettepe Üniversitesi
                Psikoloji Bölümü mezunudur. Üniversite dönemi bilişsel-davranışçı
                çerçevede şekillendi; ardından birey odaklı psikoterapi
                alanında uzmanlaştı. Ofis Bursa Nilüfer, Time Özlüce&apos;dedir.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Bursa psikolog olarak kaygı, ilişki dinamikleri ve bireysel
                süreçler üzerine çalışırım. Kuramsal birikim, analitik bakış ve
                ölçülü dil temel duruşumdur; kesin vaat yoktur.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Yazmak veya yüz yüze görüşmek için{" "}
                <Link
                  href="/#iletisim"
                  className="font-medium text-cta underline decoration-cta/30 underline-offset-4 transition-colors hover:text-cta-hover hover:decoration-cta/60"
                >
                  iletişim
                </Link>{" "}
                yeterli. WhatsApp veya telefon — aynı gün içinde dönüş.
              </p>
            </FadeIn>

            <div className="lg:hidden">
              <WorkPrinciplesCard />
            </div>
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
            <WorkPrinciplesCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
