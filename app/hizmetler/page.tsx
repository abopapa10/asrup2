import type { Metadata } from "next";
import { AuthorityLinkGrid } from "@/components/AuthorityLinkGrid";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { coreServiceLinks, therapyApproachLinks } from "@/lib/authority-links";
import { buildHubPageJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Psikoloji Konuları | Bursa Psikolog A. Alparslan Sancar",
  description:
    "Kaygı, ilişkiler, travma ve terapi yaklaşımları üzerine bilgilendirici yazılar — Bursa Psikolog A. Alparslan Sancar.",
  path: "/hizmetler",
  keywords: [
    "Bursa psikolog konular",
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
            title: "Psikoloji konuları",
            description:
              "Kaygı, ilişkiler ve terapi yaklaşımları üzerine bilgilendirici yazıların toplandığı sayfa.",
          })}
        />
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <AuthorityLinkGrid
            eyebrow="Konular"
            title="Psikolojiye dair başlıklar"
            lead="Her sayfa bir konuyu, kavramsal çerçeveyi ve okuma yollarını özetler. Tanıtım veya satış metni değildir."
            items={coreServiceLinks}
            compact
            badgeLabel="Konu"
          />
          <div className="mt-20 border-t border-ice-blue/50 pt-16 sm:mt-24 sm:pt-20">
            <AuthorityLinkGrid
              eyebrow="Terapi Yaklaşımları"
              title="Uzmanlık Ekolleri ve Yöntemler"
              lead="Birey odaklı psikoterapi, BDT ve ilgili yaklaşımlar üzerine okunabilir uzmanlık notları."
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
