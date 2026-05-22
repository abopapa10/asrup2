import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { graphSchema } from "@/lib/structured-data";
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
});

export const metadata: Metadata = {
  ...rootMetadataExtras(),
  ...homeMetadata,
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  keywords: [
    "Bursa psikolog",
    "Nilüfer psikolog",
    "Bursa terapi",
    "Bireysel terapi",
    "Çift terapisi",
    "Online terapi",
    "Bursa psikolojik destek",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "TR-16",
    "geo.placename": "Bursa",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
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
