import Link from "next/link";
import { CredentialList } from "@/components/CredentialList";
import { LandingHero } from "@/components/LandingHero";
import { homeHero } from "@/lib/home-seo-content";
import { siteConfig } from "@/lib/site-config";

/**
 * Sunucu bileşeni — hero metni ve CTA ilk HTML yanıtında görünür (LCP için).
 * Giriş animasyonu kullanılmaz; opacity:0 gecikmesi Lighthouse NO_LCP üretir.
 */
export function HeroSection() {
  return (
    <LandingHero
      size="home"
      eyebrow={homeHero.eyebrow}
      title={homeHero.h1}
      subtitle={homeHero.subtitle}
      lead={homeHero.lead}
      extraParagraphs={homeHero.extraParagraphs}
      whatsappSource="hero"
      portraitSrc={siteConfig.images.portraitHeroBand}
      portraitAlt={homeHero.portraitAlt}
      leadAfter={
        <>
          <CredentialList className="mt-6 sm:mt-7" />
          <p className="mt-5 text-sm leading-relaxed text-slate-body sm:text-[0.9375rem]">
            Ofis:{" "}
            <Link href="/#iletisim" className="link-editorial">
              Nilüfer Özlüce
            </Link>
            {" · "}
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
            >
              Google Haritalar
            </a>
          </p>
        </>
      }
    />
  );
}
