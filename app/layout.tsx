import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { siteEntitiesGraph } from "@/lib/structured-data";
import { createPageMetadata, rootMetadataExtras } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600"],
  preload: true,
  adjustFontFallback: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const homeMetadata = createPageMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  path: "/",
  absoluteTitle: true,
  ogImage: siteConfig.images.portraitClinical,
  ogImageAlt: siteConfig.seo.defaultOgImageAlt,
  keywords: [
    "Bursa psikolog",
    "Nilüfer psikolog",
    "Bursa terapi",
    "Bireysel terapi",
    "Çift terapisi",
    "Online terapi",
    "Anksiyete terapisi Bursa",
    "Panik atak terapisi Bursa",
    "Depresyon terapisi Bursa",
    "Klinik psikolog Bursa",
  ],
});

export const metadata: Metadata = {
  ...rootMetadataExtras(),
  ...homeMetadata,
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  other: {
    "geo.region": "TR-16",
    "geo.placename": "Bursa",
    ...(siteConfig.geo
      ? {
          "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
          ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
        }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${sora.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteEntitiesGraph),
          }}
        />
      </head>
      <body
        className={`${jakarta.className} min-h-screen bg-white font-sans text-slate-body antialiased`}
        style={{ backgroundColor: "#ffffff", color: "#1E293B" }}
      >
        {children}
      </body>
    </html>
  );
}
