import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";

type CtaBlockProps = {
  variant?: "inline" | "banner";
  className?: string;
};

export function CtaBlock({ variant = "inline", className = "" }: CtaBlockProps) {
  if (variant === "banner") {
    return (
      <div
        className={`cta-banner relative overflow-hidden border border-ice-blue bg-white p-6 sm:p-8 ${className}`}
      >
        <div className="cta-accent-line mb-6" aria-hidden />
        <p className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
          Randevu ve bilgilendirme için hemen ulaşın
        </p>
        <p className="mt-2 text-sm text-slate-body">
          Bursa psikolog randevu talepleriniz aynı gün içinde yanıtlanır.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp sm:flex-1"
          >
            <WhatsAppIcon />
            WhatsApp Randevu
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="btn-phone sm:flex-1"
          >
            <Phone strokeWidth={1.25} className="h-5 w-5 shrink-0" />
            Telefon
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp sm:flex-1"
      >
        <WhatsAppIcon />
        WhatsApp ile Randevu
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className="btn-phone sm:flex-1"
      >
        <Phone strokeWidth={1.25} className="h-5 w-5 shrink-0" />
        Ara
      </a>
    </div>
  );
}
