import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { graphSchema } from "@/lib/structured-data";
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
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "Bursa Psikolog | Uzman Klinik Psikolog Ahmet Alparslan Sancar — Nilüfer",
  description:
    "Bursa Nilüfer'de bireysel terapi, çift terapisi ve online terapi. Uzman Klinik Psikolog Ahmet Alparslan Sancar — klinik değerlendirme, danışan gizliliği ve etik ilkeler.",
  keywords: [
    "Bursa psikolog",
    "Bursa Psikolog",
    "Nilüfer psikolog",
    "Bireysel Terapi",
    "Çift Terapisi",
    "Online Terapi",
    "Bursa psikolog tavsiye",
  ],
  openGraph: {
    title: "Bursa Nilüfer'de Yetişkin ve Çift Terapisi Desteği",
    description:
      "Uzman yaklaşımı ve bilimsel ekollerle ruh sağlığınızda yeni bir dönem.",
    url: "https://bursapsikologsancar.com",
    siteName: "Bursa Psikolog Ahmet Alparslan Sancar",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bursapsikologsancar.com" },
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
