import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { YetiskinDehbDikkatEksiligiPage } from "@/components/tests/adhd/YetiskinDehbDikkatEksiligiPage";
import { BesFaktorBigFivePage } from "@/components/tests/big-five/BesFaktorBigFivePage";
import { IliskilerdeSinirVeBaglanmaPage } from "@/components/tests/boundary-attachment/IliskilerdeSinirVeBaglanmaPage";
import { DuygusalZekaEqPage } from "@/components/tests/eq/DuygusalZekaEqPage";
import { MbtiKisilikAnaliziPage } from "@/components/tests/mbti/MbtiKisilikAnaliziPage";
import { StresVeTukenmislikAnaliziPage } from "@/components/tests/stress-burnout/StresVeTukenmislikAnaliziPage";
import { TestPageTemplate } from "@/components/tests/TestPageTemplate";
import { buildTestPageJsonLd } from "@/lib/page-structured-data";
import {
  getAllPsychologicalTestSlugs,
  getPsychologicalTest,
} from "@/lib/psychological-tests";
import { createPageMetadata } from "@/lib/seo";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return getAllPsychologicalTestSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getPsychologicalTest(slug);

  if (!test) {
    return { title: "Test bulunamadı" };
  }

  return createPageMetadata({
    title: test.metaTitle,
    description: test.metaDescription,
    path: test.href,
    absoluteTitle: true,
    keywords: [...test.tags, "psikolojik test", "öz değerlendirme"],
  });
}

export default async function TestSlugPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const test = getPsychologicalTest(slug);

  if (!test) {
    notFound();
  }

  if (slug === "mbti-kisilik-analizi") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <MbtiKisilikAnaliziPage />
      </PageShell>
    );
  }

  if (slug === "bes-faktor-big-five") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <BesFaktorBigFivePage />
      </PageShell>
    );
  }

  if (slug === "iliskilerde-sinir-ve-baglanma") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <IliskilerdeSinirVeBaglanmaPage />
      </PageShell>
    );
  }

  if (slug === "duygusal-zeka-eq") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <DuygusalZekaEqPage />
      </PageShell>
    );
  }

  if (slug === "stres-ve-tukenmislik-analizi") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <StresVeTukenmislikAnaliziPage />
      </PageShell>
    );
  }

  if (slug === "yetiskin-dehb-dikkat-eksiligi") {
    return (
      <PageShell>
        <JsonLdScript data={buildTestPageJsonLd(test)} />
        <YetiskinDehbDikkatEksiligiPage />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <JsonLdScript data={buildTestPageJsonLd(test)} />
      <TestPageTemplate test={test} />
    </PageShell>
  );
}
