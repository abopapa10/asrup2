import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { createPageMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("cift-terapisi");

export const metadata: Metadata = service
  ? createPageMetadata({
      title: `${service.title} | Bursa Psikolog`,
      description: service.metaDescription,
      path: "/cift-terapisi",
      absoluteTitle: true,
    })
  : { title: "Çift Terapisi" };

export default function CiftTerapisiPage() {
  if (!service) notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} />
    </PageShell>
  );
}
