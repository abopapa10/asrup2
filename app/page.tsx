import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { ExpertiseAreasSection } from "@/components/ExpertiseAreasSection";
import { TherapyProcessSection } from "@/components/TherapyProcessSection";
import { DeferredFloatingWhatsApp } from "@/components/DeferredFloatingWhatsApp";
import { FaqAccordionLazy } from "@/components/FaqAccordionLazy";
import { GoogleReviewsCarouselLazy } from "@/components/GoogleReviewsCarouselLazy";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { PersonalityTestLazy } from "@/components/PersonalityTestLazy";
import { JsonLdScript } from "@/components/JsonLdScript";
import { QuestionAnswerSection } from "@/components/QuestionAnswerSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FooterSeoAccordion } from "@/components/FooterSeoAccordion";
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
        <GoogleReviewsCarouselLazy />
        <ServicesGrid />
        <PersonalityTestLazy />
        <div
          className="h-10 bg-white sm:h-14 lg:h-20"
          aria-hidden
        />
        <TherapyProcessSection />
        <ExpertiseAreasSection />
        <AuthoritySection />
        <ArticlesSection />
        <QuestionAnswerSection />
        <FaqAccordionLazy />
      </main>
      <FooterSeoAccordion />
      <SiteFooter />
      <DeferredFloatingWhatsApp />
    </>
  );
}
