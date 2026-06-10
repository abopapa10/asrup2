"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { siteNavLinks } from "@/lib/site-nav";

/** Yalnızca mobil menü etkileşimi — desktop nav sunucuda render edilir */
export function SiteHeaderMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobil menü"
          className="border-t border-ice-blue/50 bg-white px-5 pb-6 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-3 pt-5">
            {siteNavLinks.map((link) => (
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
      ) : null}
    </>
  );
}
