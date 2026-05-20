import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("online-terapi");

export const metadata: Metadata = {
  title: `${service?.title ?? "Online Terapi"} | Bursa Psikolog`,
  description: service?.metaDescription,
  alternates: {
    canonical: "https://bursapsikologsancar.com/online-terapi",
  },
};

export default function OnlineTerapiPage() {
  if (!service) notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} />
    </PageShell>
  );
}
