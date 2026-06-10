import { AnnouncementBar } from "@/components/AnnouncementBar";
import { DeferredFloatingWhatsApp } from "@/components/DeferredFloatingWhatsApp";
import { FooterSeoAccordion } from "@/components/FooterSeoAccordion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>{children}</main>
      <FooterSeoAccordion />
      <SiteFooter />
      <DeferredFloatingWhatsApp />
    </>
  );
}
