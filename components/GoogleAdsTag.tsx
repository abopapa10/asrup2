import Script from "next/script";
import { GOOGLE_ADS_ID, isGoogleAdsConfigured } from "@/lib/analytics";

/**
 * Google Ads gtag — yalnızca NEXT_PUBLIC_GOOGLE_ADS_ID varsa yüklenir.
 * Dönüşüm etiketleri WhatsAppLink / trackWhatsAppClick ile tetiklenir.
 */
export function GoogleAdsTag() {
  if (!isGoogleAdsConfigured()) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
        `.trim()}
      </Script>
    </>
  );
}
