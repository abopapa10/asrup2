import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { createPageMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("bireysel-terapi");

export const metadata: Metadata = service
  ? createPageMetadata({
      title: `${service.title} | Bursa Psikolog`,
      description: service.metaDescription,
      path: "/bireysel-terapi",
      absoluteTitle: true,
    })
  : { title: "Bireysel Terapi" };

export default function BireyselTerapiPage() {
  if (!service) notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} />
    </PageShell>
  );
}
