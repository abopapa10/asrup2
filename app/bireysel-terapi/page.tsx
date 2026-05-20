import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("bireysel-terapi");

export const metadata: Metadata = {
  title: `${service?.title ?? "Bireysel Terapi"} | Bursa Psikolog`,
  description: service?.metaDescription,
  alternates: {
    canonical: "https://bursapsikologsancar.com/bireysel-terapi",
  },
};

export default function BireyselTerapiPage() {
  if (!service) notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} />
    </PageShell>
  );
}
