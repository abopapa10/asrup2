/**
 * Above-the-fold critical CSS — Tailwind yüklenmeden önce LCP (hero H1) görünür kalır.
 * Görsel değişiklik yok; yalnızca ilk boyama zamanlaması optimize edilir.
 */
export const CRITICAL_CSS = `
html{scroll-behavior:smooth}
body{margin:0;min-height:100vh;background:#fff;color:#1E293B;font-family:var(--font-jakarta),system-ui,sans-serif;-webkit-font-smoothing:antialiased}
#hero-heading,.heading-display{font-family:var(--font-sora),system-ui,sans-serif;font-weight:600;color:#0F172A;letter-spacing:-0.03em;line-height:1.08;font-size:2rem;max-width:100%}
@media(min-width:640px){#hero-heading,.heading-display{font-size:2.65rem}}
@media(min-width:1024px){#hero-heading,.heading-display{font-size:3.25rem}}
.heading-section{font-family:var(--font-sora),system-ui,sans-serif;font-weight:600;color:#0F172A;letter-spacing:-0.03em;line-height:1.15;font-size:1.65rem}
.eyebrow{font-size:0.625rem;font-weight:600;text-transform:uppercase;letter-spacing:0.26em;color:rgba(30,41,59,0.9)}
.body-lead{font-size:0.9375rem;line-height:1.8;color:#1E293B}
.bg-hero-mesh{background:radial-gradient(ellipse 88% 42% at 0% 70%,#C9F7FF 0%,#E8FAFE 11%,#FFFFFF 20%),#FFFFFF}
.btn-whatsapp{display:inline-flex;align-items:center;justify-content:center;gap:0.625rem;width:100%;border-radius:0.75rem;background:#42FFD6;color:#0F172A;padding:0.875rem 1.25rem;font-size:0.875rem;font-weight:600;text-decoration:none}
.btn-phone{display:inline-flex;align-items:center;justify-content:center;gap:0.625rem;width:100%;border-radius:0.75rem;border:1px solid #BFEBF2;background:rgba(255,255,255,0.8);color:#0F172A;padding:0.875rem 1.25rem;font-size:0.875rem;font-weight:600;text-decoration:none}
header[data-site-header]{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.9);backdrop-filter:blur(12px);border-bottom:1px solid rgba(191,235,242,0.5)}
`.replace(/\s+/g, " ").trim();
