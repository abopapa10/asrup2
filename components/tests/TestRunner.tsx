"use client";

import dynamic from "next/dynamic";
import type { PsychologicalTestSlug } from "@/lib/psychological-tests";

const MbtiTestEmbedded = dynamic(
  () =>
    import("@/components/PersonalityTest").then((m) => ({
      default: m.PersonalityTest,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="editorial-card min-h-[14rem] animate-pulse p-6"
        aria-hidden
      />
    ),
  }
);

type TestRunnerProps = {
  slug: PsychologicalTestSlug;
};

export function TestRunner({ slug }: TestRunnerProps) {
  switch (slug) {
    case "mbti-kisilik-analizi":
      return <MbtiTestEmbedded variant="embedded" />;
    case "bes-faktor-big-five":
      return null;
    case "iliskilerde-sinir-ve-baglanma":
      return null;
    default:
      return null;
  }
}
