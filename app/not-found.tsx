import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya veya blog bölümüne dönebilirsiniz.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <PageShell>
      <section className="border-t border-ice-blue/40 bg-mesh-blue py-24 sm:py-32">
        <div className="mx-auto max-w-editorial px-5 text-center sm:px-6 lg:px-12">
          <p className="eyebrow eyebrow-cta mb-4">404</p>
          <h1 className="heading-section">Sayfa bulunamadı</h1>
          <p className="body-lead mx-auto mt-6 max-w-lg">
            Bağlantı güncellenmiş veya kaldırılmış olabilir.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Ana sayfa
            </Link>
            <Link href="/blog" className="link-editorial">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
