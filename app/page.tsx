import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GoogleReviewsCarousel } from "@/components/GoogleReviewsCarousel";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <GoogleReviewsCarousel />
        <AuthoritySection />
        <ArticlesSection />
        <FaqAccordion />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
