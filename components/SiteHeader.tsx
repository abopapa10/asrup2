"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PsiEmblem } from "@/components/PsiEmblem";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const navLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/lokasyon", label: "Lokasyonlar" },
  { href: "/#yorumlar", label: "Yorumlar" },
  { href: "/blog", label: "Makaleler" },
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ice-blue/50 bg-white/90 backdrop-blur-md">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neon-turquoise/70 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:px-12">
        <Link
          href="/"
          className="flex max-w-[calc(100%-3rem)] items-center gap-2.5 font-display text-sm font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal sm:max-w-xs sm:gap-3 sm:text-base lg:max-w-md lg:text-lg"
        >
          <PsiEmblem className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span>Psikolog A. Alparslan Sancar</span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-body transition-colors hover:text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#randevu"
            className="rounded-lg border border-ice-blue px-4 py-2.5 text-xs font-semibold tracking-wide text-slate-charcoal transition-colors hover:border-neon-turquoise/60 hover:bg-soft-sky/10"
          >
            Randevu Al
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 text-slate-charcoal lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X strokeWidth={1.25} className="h-6 w-6" aria-hidden />
          ) : (
            <Menu strokeWidth={1.25} className="h-6 w-6" aria-hidden />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobil menü"
          className="border-t border-ice-blue/50 bg-white px-5 pb-6 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-3 pt-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-base font-medium text-slate-body"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#randevu"
                className="btn-whatsapp"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon />
                Randevu Al
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
