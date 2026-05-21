import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/components/ArticlePageContent";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { articles, getArticleBySlug } from "@/lib/articles";
import { buildArticleJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Makale Bulunamadı", robots: { index: false, follow: false } };
  }

  return createPageMetadata({
    title: article.metaTitle ?? `${article.title} | Bursa Psikolog Blog`,
    description: article.metaDescription ?? article.excerpt,
    path: `/makale/${article.slug}`,
    absoluteTitle: Boolean(article.metaTitle),
    ogImage: article.image,
    ogImageAlt: `${article.title} — ${article.category}`,
    ogType: "article",
    publishedTime: `${article.dateISO}T09:00:00+03:00`,
  });
}

export default async function MakalePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <PageShell>
      <JsonLdScript data={buildArticleJsonLd(article)} />
      <ArticlePageContent article={article} />
    </PageShell>
  );
}
