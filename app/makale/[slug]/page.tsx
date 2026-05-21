import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/components/ArticlePageContent";
import { PageShell } from "@/components/PageShell";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

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
    return { title: "Makale Bulunamadı" };
  }

  return {
    title: article.metaTitle ?? `${article.title} | Bursa Psikolog Blog`,
    description: article.metaDescription ?? article.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/makale/${article.slug}`,
    },
  };
}

export default async function MakalePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <PageShell>
      <ArticlePageContent article={article} />
    </PageShell>
  );
}
