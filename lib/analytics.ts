/**
 * Google Ads / gtag yardımcıları.
 * Etiketler yalnızca NEXT_PUBLIC_GOOGLE_ADS_ID tanımlıysa yüklenir.
 */

export const GOOGLE_ADS_ID =
  typeof process.env.NEXT_PUBLIC_GOOGLE_ADS_ID === "string"
    ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ID.trim()
    : "";

/** Örn. AW-123456789/AbCdEfGhIjKlMnOp */
export const GOOGLE_ADS_WA_SEND_TO =
  typeof process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_SEND_TO === "string"
    ? process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_SEND_TO.trim()
    : "";

export function isGoogleAdsConfigured(): boolean {
  return GOOGLE_ADS_ID.length > 0;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** WhatsApp tıklamasını Ads dönüşümü + dataLayer olarak bildirir. */
export function trackWhatsAppClick(source?: string): void {
  if (typeof window === "undefined") return;

  const detail = {
    event: "whatsapp_click",
    link_url: "https://wa.me/905518490236",
    ...(source ? { click_source: source } : {}),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(detail);

  if (typeof window.gtag !== "function") return;

  if (GOOGLE_ADS_WA_SEND_TO) {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_WA_SEND_TO,
      event_category: "contact",
      event_label: source ?? "whatsapp",
    });
  }

  window.gtag("event", "whatsapp_click", {
    event_category: "contact",
    event_label: source ?? "whatsapp",
  });
}
