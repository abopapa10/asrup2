import { AnnouncementBar } from "@/components/AnnouncementBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
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
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
