import { ArticlesSection } from "@/components/ArticlesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { ExpertiseAreasSection } from "@/components/ExpertiseAreasSection";
import { TherapyProcessSection } from "@/components/TherapyProcessSection";
import { DeferredFloatingWhatsApp } from "@/components/DeferredFloatingWhatsApp";
import { FaqAccordionLazy } from "@/components/FaqAccordionLazy";
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
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <ContactLocationSection />
        <TherapyProcessSection />
        <ExpertiseAreasSection />
        <AuthoritySection />
        <PersonalityTestLazy />
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
