"use client";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile randevu talebi gönder"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon-turquoise text-slate-charcoal shadow-[0_4px_24px_rgba(66,255,214,0.55)] transition-transform duration-300 hover:scale-105 active:scale-95 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
