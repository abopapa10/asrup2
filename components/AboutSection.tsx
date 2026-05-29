import Link from "next/link";
import { CredentialList } from "@/components/CredentialList";
import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
import { siteConfig } from "@/lib/site-config";

const workPrinciples = [
  {
    title: "Samimiyet ve dürüstlük",
    body: "Terapi ilişkisini güvene dayalı, açık ve insani bir çerçevede kurarım.",
  },
  {
    title: "Şeffaf süreç",
    body: "Neyi neden yaptığımızı ve şu anki durumu birlikte netleştiririz.",
  },
  {
    title: "Etik ve gizlilik",
    body: "Danışan gizliliği ve mesleki etik ilkeler süreçte değişmez temeldir.",
  },
] as const;

function WorkPrinciplesCard() {
  return (
    <div className="editorial-card mt-8 p-6 sm:mt-10 sm:p-8">
      <h3 className="text-lg font-semibold tracking-tight text-deep-navy sm:text-xl">
        Çalışma prensipleri
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
            <FadeIn>
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Hakkımda</p>
              <h2 id="about-heading" className="heading-section">
                Psikolog Ahmet Alparslan Sancar
              </h2>
            </FadeIn>

            <div className="mx-auto mt-8 w-full max-w-[20rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
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
                BTSO Bursa Sosyal Bilimler Lisesi&apos;nde lise eğitimimi
                tamamladıktan sonra Hacettepe Üniversitesi Psikoloji
                Bölümü&apos;nü kazandım. Üniversitedeki eğitimim ağırlıklı
                olarak Bilişsel Davranışçı ekol çerçevesindeydi; mezuniyetimden
                sonra İnsancıl ekol çerçevesindeki Birey Odaklı Psikoterapi
                tekniğinde uzmanlaştım.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Bursa Nilüfer&apos;de ilk kliniğimi açarak burada psikoterapi
                hizmeti vermeye başladım. İlerleyen yıllarda İstanbul
                Beşiktaş&apos;ta bir ofis açtım; şu anda da Beşiktaş&apos;ta
                yüz yüze ve online seanslarla hizmet vermekteyim. Yakın
                zamanda Bursa&apos;da da psikoterapi hizmeti sunmaya
                başlayacağım.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Bir psikolog olarak en güçlü yanlarımın kuramsal birikimim,
                analitik bakışım ve problemlere yapılandırılmış müdahale
                üretebilmem olduğunu düşünüyorum. Psikoterapi seanslarını
                samimiyet ve dürüstlük ilkeleriyle yürütmeye özen gösteriyorum;
                süreci şeffaf biçimde yöneterek neyi neden yaptığımızı ve şu
                anki durumu birlikte netleştiriyoruz. Terapi süreciyle ilgili
                bilgi almak istediğiniz konularda{" "}
                <Link
                  href="/iletisim"
                  className="font-medium text-cta underline decoration-cta/30 underline-offset-4 transition-colors hover:text-cta-hover hover:decoration-cta/60"
                >
                  iletişime geçebilirsiniz
                </Link>
                .
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
              src={siteConfig.images.portraitClinical}
              alt="Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı"
              priority
              variant="clinical"
              align="right"
            />
            <WorkPrinciplesCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
