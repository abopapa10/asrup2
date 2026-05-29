import Link from "next/link";
import { AuthorityLinkCarousel } from "@/components/AuthorityLinkCarousel";
import { FadeIn } from "@/components/FadeIn";
import { coreServiceLinks, therapyApproachLinks } from "@/lib/authority-links";

export function ExpertiseAreasSection() {
  return (
    <section className="border-t border-ice-blue/50 bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <AuthorityLinkCarousel
          eyebrow="Çalışma Alanları"
          title="Uzmanlık Alanları"
          lead="Kartları yatay kaydırarak tüm uzmanlık alanlarını inceleyebilirsiniz."
          items={[...coreServiceLinks, ...therapyApproachLinks]}
          badgeLabel="Uzmanlık"
        />
        <FadeIn className="mt-8 flex justify-center sm:mt-10">
          <Link href="/hizmetler" className="link-editorial text-base font-semibold">
            Tüm hizmetler hub sayfasına git
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
