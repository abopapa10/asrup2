import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("cift-terapisi");

export const metadata: Metadata = {
  title: `${service?.title ?? "Çift Terapisi"} | Bursa Psikolog`,
  description: service?.metaDescription,
  alternates: {
    canonical: "https://bursapsikologsancar.com/cift-terapisi",
  },
};

export default function CiftTerapisiPage() {
  if (!service) notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} />
    </PageShell>
  );
}
