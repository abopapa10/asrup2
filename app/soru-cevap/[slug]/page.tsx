import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { QuestionAnswerPageContent } from "@/components/QuestionAnswerPageContent";
import {
  getQuestionAnswerBySlug,
  questionAnswers,
} from "@/lib/question-answers";
import { buildQuestionAnswerJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return questionAnswers.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getQuestionAnswerBySlug(slug);

  if (!item) {
    return {
      title: "Soru - Cevap Bulunamadi",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/soru-cevap/${item.slug}`,
    absoluteTitle: true,
    ogType: "article",
    publishedTime: `${item.dateISO}T09:00:00+03:00`,
    articleSection: "Soru - Cevap",
    author: "Psikolog A. Alparslan Sancar",
    keywords: item.keywords,
  });
}

export default async function SoruCevapDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getQuestionAnswerBySlug(slug);

  if (!item) notFound();

  return (
    <PageShell>
      <JsonLdScript data={buildQuestionAnswerJsonLd(item)} />
      <QuestionAnswerPageContent item={item} />
    </PageShell>
  );
}
