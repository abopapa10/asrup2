import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Tam başlık — layout title şablonunu atlar */
  absoluteTitle?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function createPageMetadata(input: PageSeoInput): Metadata {
  const {
    title,
    description,
    path,
    absoluteTitle = false,
    ogImage = siteConfig.seo.defaultOgImage,
    ogImageAlt,
    ogType = "website",
    publishedTime,
    modifiedTime,
    noIndex = false,
  } = input;

  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);
  const imageAlt = ogImageAlt ?? title;

  const ogImages = [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: imageAlt,
    },
  ];

  const openGraph: Metadata["openGraph"] =
    ogType === "article"
      ? {
          title,
          description,
          url,
          siteName: siteConfig.seo.siteName,
          locale: siteConfig.seo.locale,
          type: "article",
          images: ogImages,
          publishedTime,
          modifiedTime: modifiedTime ?? publishedTime,
          authors: [siteConfig.name],
        }
      : {
          title,
          description,
          url,
          siteName: siteConfig.seo.siteName,
          locale: siteConfig.seo.locale,
          type: "website",
          images: ogImages,
        };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.seo.siteName,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    category: "health",
  };
}

export function rootMetadataExtras(): Pick<
  Metadata,
  "metadataBase" | "icons" | "manifest" | "verification" | "applicationName"
> {
  const googleVerification =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.seo.shortName,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.svg"],
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}
