import type { Metadata } from "next";
import { AuthorityLinkGrid } from "@/components/AuthorityLinkGrid";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { coreServiceLinks, therapyApproachLinks } from "@/lib/authority-links";
import { buildHubPageJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hizmetler | Bursa Psikolog Çalışma Alanları",
  description:
    "Bursa'da anksiyete, panik atak, OKB, EMDR, depresyon, çift terapisi ve online terapi çalışma alanlarını tek merkezden inceleyin.",
  path: "/hizmetler",
  keywords: [
    "Bursa psikolog hizmetler",
    "anksiyete terapisi Bursa",
    "panik atak terapisi Bursa",
    "OKB terapisi Bursa",
    "EMDR terapisi Bursa",
    "depresyon terapisi Bursa",
    "çift terapisi Bursa",
    "online terapi Bursa",
    "birey odaklı psikoterapi Bursa",
    "BDT Bursa",
    "regresyon terapisi Bursa",
  ],
});

export default function HizmetlerHubPage() {
  return (
    <PageShell>
      <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
        <JsonLdScript
          data={buildHubPageJsonLd({
            path: "/hizmetler",
            title: "Hizmetler",
            description:
              "Bursa psikoterapi çalışma alanlarının toplandığı hizmetler hub sayfası.",
          })}
        />
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <AuthorityLinkGrid
            eyebrow="Hizmetler Hub"
            title="Bursa'da Çalıştığımız Terapi Alanları"
            lead="Her hizmet sayfası kendi klinik bağlamı, süreç açıklığı ve ilgili çalışma alanlarıyla birlikte hazırlanmıştır. İhtiyacınıza en yakın başlıktan başlayabilirsiniz."
            items={coreServiceLinks}
            compact
            badgeLabel="Hizmet"
          />
          <div className="mt-20 border-t border-ice-blue/50 pt-16 sm:mt-24 sm:pt-20">
            <AuthorityLinkGrid
              eyebrow="Terapi Yaklaşımları"
              title="Uzmanlık Ekolleri ve Yöntemler"
              lead="Birey odaklı psikoterapi, BDT ve regresyon terapisi hakkında akademik düzeyde, okunabilir uzmanlık sayfaları."
              items={therapyApproachLinks}
              compact
              badgeLabel="Uzmanlık"
            />
          </div>
        </div>
      </article>
    </PageShell>
  );
}
