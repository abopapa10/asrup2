import { DeferredFloatingWhatsApp } from "@/components/DeferredFloatingWhatsApp";
import { FooterSeoAccordion } from "@/components/FooterSeoAccordion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  children: React.ReactNode;
  showFooterSeo?: boolean;
};

export function PageShell({
  children,
  showFooterSeo = true,
}: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      {showFooterSeo ? <FooterSeoAccordion /> : null}
      <SiteFooter />
      <DeferredFloatingWhatsApp />
    </>
  );
}
