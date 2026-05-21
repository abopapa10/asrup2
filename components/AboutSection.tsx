import { CredentialList } from "@/components/CredentialList";
import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
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
            <FadeIn>
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Hakkımda</p>
              <h2 id="about-heading" className="heading-section">
                Psk. A. Alparslan Sancar
              </h2>
            </FadeIn>

            <div className="mx-auto my-8 w-full max-w-[20rem] sm:max-w-[22rem] lg:hidden">
              <PortraitFrame
                src={siteConfig.images.portraitClinical}
                alt="Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı"
                variant="clinical"
                align="left"
              />
            </div>

            <CredentialList />

            <FadeIn delay={0.2} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Ben Psikolog A. Alparslan Sancar; Bursa BTSO Sosyal Bilimler
                Lisesi&apos;nde eğitimimi tamamladıktan sonra Hacettepe
                Üniversitesi Psikoloji Bölümünü kazandım. Burada BDT (Bilişsel
                Davranışçı) ağırlıklı bir eğitim aldım. Sonraki yıllarda
                Psikodinamik kuram açısından kendimi geliştirdim.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Mezuniyetimden sonra eğitimlerimle birlikte Bursa
                Nilüfer&apos;deki kliniğimde psikoterapi hizmeti vermeye
                başladım. Bu süreçte uzmanlığımı yetişkinler üzerine
                yoğunlaştırdım; Birey Odaklı Psikoterapi Tekniğinde
                profesyonelleştim ve şu anda da bu ekolü temsil etmekteyim.
                İstanbul Beşiktaş&apos;taki ofisimde psikoterapi hizmeti
                vermekteyim; yakında Bursa&apos;da da hizmet vermeye
                başlayacağım.
              </p>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.08}
            className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:block lg:max-w-none"
          >
            <PortraitFrame
              src={siteConfig.images.portraitClinical}
              alt="Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı"
              priority
              variant="clinical"
              align="right"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
