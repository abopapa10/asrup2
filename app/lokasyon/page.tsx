import type { Metadata } from "next";
import { AuthorityLinkGrid } from "@/components/AuthorityLinkGrid";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { coreLocationLinks } from "@/lib/authority-links";
import { buildHubPageJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Lokasyonlar | Bursa Hizmet Bölgeleri",
  description:
    "Nilüfer, Osmangazi, Mudanya, Görükle ve Balat çevresinden başvuran danışanlar için lokasyon bazlı psikoterapi sayfaları.",
  path: "/lokasyon",
  keywords: [
    "Nilüfer psikolog",
    "Osmangazi psikolog",
    "Mudanya psikolog",
    "Görükle psikolog",
    "Balat psikolog",
    "Bursa psikolog",
  ],
});

export default function LokasyonHubPage() {
  return (
    <PageShell>
      <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
        <JsonLdScript
          data={buildHubPageJsonLd({
            path: "/lokasyon",
            title: "Lokasyonlar",
            description:
              "Bursa'da lokasyon odaklı psikoterapi erişim ve başvuru sayfaları.",
          })}
        />
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <AuthorityLinkGrid
            eyebrow="Lokasyonlar"
            title="Bursa Hizmet Bölgeleri"
            lead="Lokasyon sayfaları, ilgili hizmet alanlarına doğal geçiş sağlayacak şekilde kurgulanmıştır. Size en yakın bağlamdan başlayabilirsiniz."
            items={coreLocationLinks}
            compact
            badgeLabel="Bölge"
          />
        </div>
      </article>
    </PageShell>
  );
}
