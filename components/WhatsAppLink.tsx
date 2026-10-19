"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

type WhatsAppLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "onClick" | "target" | "rel"
> & {
  children: ReactNode;
  /** Ads / analitik için tıklama kaynağı (hero, floating, cta-banner …) */
  source?: string;
  href?: string;
};

/**
 * WhatsApp iletişim linki — tıklamada Ads dönüşümü (yapılandırılmışsa) tetiklenir.
 */
export function WhatsAppLink({
  children,
  source = "whatsapp",
  className,
  href = siteConfig.whatsapp,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick(source)}
      {...rest}
    >
      {children}
    </a>
  );
}
