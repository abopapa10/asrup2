import Link from "next/link";
import { AuthorityLinkGrid } from "@/components/AuthorityLinkGrid";
import { FadeIn } from "@/components/FadeIn";
import { coreServiceLinks } from "@/lib/authority-links";

export function ExpertiseAreasSection() {
  return (
    <section className="border-t border-ice-blue/50 bg-white py-20 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <AuthorityLinkGrid
          eyebrow="Çalışma Alanları"
          title="Uzmanlık Alanları"
          lead="Anksiyete, panik atak, OKB, travma ve ilişki dinamiklerinde klinik çalışma alanlarımızı tek bakışta inceleyebilirsiniz."
          items={coreServiceLinks}
          compact
          badgeLabel="Uzmanlık"
        />
        <FadeIn className="mt-10 flex justify-center sm:mt-12">
          <Link href="/hizmetler" className="link-editorial text-base font-semibold">
            Tüm hizmetler hub sayfasına git
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
