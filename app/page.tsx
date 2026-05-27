import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { ExpertiseAreasSection } from "@/components/ExpertiseAreasSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GoogleReviewsCarousel } from "@/components/GoogleReviewsCarousel";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLdScript } from "@/components/JsonLdScript";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildHomeGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={buildHomeGraph()} />
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <GoogleReviewsCarousel />
        <ExpertiseAreasSection />
        <AuthoritySection />
        <ArticlesSection />
        <FaqAccordion />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
