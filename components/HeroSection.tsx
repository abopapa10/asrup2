import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contactCopy } from "@/lib/contact-copy";
import { siteConfig } from "@/lib/site-config";

/**
 * Sunucu bileşeni — hero metni ve CTA ilk HTML yanıtında görünür (LCP için).
 * Giriş animasyonu kullanılmaz; opacity:0 gecikmesi Lighthouse NO_LCP üretir.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-x-hidden border-b border-ice-blue/40 bg-hero-mesh"
    >
      <div
        className="pointer-events-none absolute left-0 top-20 hidden h-px w-24 bg-neon-turquoise/70 lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-32 hidden h-32 w-px bg-gradient-to-b from-neon-turquoise/50 to-transparent lg:block"
        aria-hidden
      />

      <div className="mx-auto max-w-editorial px-5 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32 xl:py-36">
        <article className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-5 sm:mb-7">Bursa · Nilüfer · Psikolog</p>

          <h1
            id="hero-heading"
            className="heading-display text-[2rem] leading-[1.08] sm:text-[2.65rem] lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Bursa Psikolog A. Alparslan Sancar
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium leading-snug tracking-[-0.02em] text-slate-body sm:mt-6 sm:text-xl lg:text-[1.5rem] lg:leading-[1.45]">
            Hacettepe Üniversitesi Psikoloji mezunu; bilimsel ekoller ve
            insani iletişim üzerine yazılar, notlar ve kişisel iletişim.
          </p>

          <p className="body-lead mt-5 max-w-xl sm:mt-6">
            Bu site, psikoloji alanındaki eğitimim, yaklaşımım ve kamuya açık
            bilgilendirme içeriklerim için bir başvuru noktasıdır. Bana
            ulaşmak isterseniz iletişim kanallarını kullanabilirsiniz.
          </p>
        </article>

        <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp sm:flex-1"
          >
            <WhatsAppIcon />
            {contactCopy.whatsappLabel}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="btn-phone sm:flex-1"
          >
            <Phone strokeWidth={1.25} className="h-5 w-5 shrink-0" />
            {contactCopy.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
