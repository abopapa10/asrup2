import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { FadeIn } from "@/components/FadeIn";
import { formatAddressLines, siteConfig } from "@/lib/site-config";

const weekdayLabel =
  "Pazartesi – Cuma " +
  `${siteConfig.openingHours[0].opens} – ${siteConfig.openingHours[0].closes}`;

export function ContactLocationSection() {
  const [streetLine, cityLine] = formatAddressLines();
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <section
      id="iletisim"
      aria-labelledby="contact-location-heading"
      className="border-t border-ice-blue/50 bg-mesh-sky py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">İletişim · Konum</p>
          <h2 id="contact-location-heading" className="heading-section">
            Bursa Psikolog İletişim Konum
          </h2>
          <p className="body-lead mt-4 sm:mt-6">
            Nilüfer Özlüce&apos;deki kliniğimizde yüz yüze seans; WhatsApp veya
            telefon ile aynı gün yanıt.
          </p>
        </FadeIn>

        <div className="mt-10 grid items-start gap-8 sm:mt-12 lg:grid-cols-12 lg:gap-12">
          <FadeIn
            as="div"
            className="space-y-8 lg:col-span-5"
            delay={0.04}
          >
            <div>
              <p className="eyebrow mb-3">Adres</p>
              <div className="flex gap-3">
                <MapPin
                  strokeWidth={1.25}
                  className="mt-0.5 h-5 w-5 shrink-0 text-neon-turquoise"
                  aria-hidden
                />
                <address className="not-italic">
                  <p className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {siteConfig.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body sm:text-[0.9375rem]">
                    {streetLine}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-body sm:text-[0.9375rem]">
                    {cityLine}
                  </p>
                </address>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3">Telefon</p>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 text-sm font-medium text-slate-charcoal transition-colors hover:text-slate-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal sm:text-base"
              >
                <Phone
                  strokeWidth={1.25}
                  className="h-5 w-5 shrink-0 text-neon-turquoise"
                  aria-hidden
                />
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">Çalışma saatleri</p>
              <p className="inline-flex items-start gap-3 text-sm leading-relaxed text-slate-body sm:text-[0.9375rem]">
                <Clock
                  strokeWidth={1.25}
                  className="mt-0.5 h-5 w-5 shrink-0 text-neon-turquoise"
                  aria-hidden
                />
                <span>
                  {weekdayLabel}
                  <span className="mt-1 block text-slate-body/80">
                    Cumartesi–Pazar: randevu ile
                  </span>
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp sm:min-w-[12rem] sm:flex-1"
              >
                <WhatsAppIcon />
                WhatsApp Randevu
              </a>
              <a href={phoneHref} className="btn-phone sm:min-w-[10rem] sm:flex-1">
                <Phone strokeWidth={1.25} className="h-5 w-5 shrink-0" />
                Ara
              </a>
              {siteConfig.googleMapsUrl ? (
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-ice-blue bg-white px-5 py-3 text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/60 hover:bg-soft-sky/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal sm:min-w-[12rem] sm:flex-1"
                >
                  <Navigation strokeWidth={1.25} className="h-5 w-5 shrink-0" />
                  Yol tarifi
                </a>
              ) : null}
            </div>
          </FadeIn>

          <FadeIn as="div" className="lg:col-span-7" delay={0.08}>
            <div
              className="overflow-hidden border border-ice-blue bg-white"
              role="region"
              aria-label="Klinik konum haritası"
            >
              {siteConfig.googleMapsEmbedUrl ? (
                <iframe
                  title="Bursa Nilüfer Özlüce klinik haritası"
                  src={siteConfig.googleMapsEmbedUrl}
                  className="h-[260px] w-full border-0 sm:h-[340px] lg:h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-[260px] items-center justify-center sm:h-[340px]">
                  <MapPin
                    strokeWidth={1.25}
                    className="h-10 w-10 text-neon-turquoise"
                    aria-hidden
                  />
                </div>
              )}
              <div className="border-t border-ice-blue/60 px-5 py-4 sm:px-6">
                <p className="text-sm text-slate-body">
                  {streetLine}, {cityLine}
                </p>
                {siteConfig.googleMapsUrl ? (
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial mt-2 inline-block text-sm font-medium"
                  >
                    Google Haritalar&apos;da aç
                  </a>
                ) : null}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
