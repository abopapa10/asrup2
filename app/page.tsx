import type { Metadata } from "next";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { TherapyProcessSection } from "@/components/TherapyProcessSection";
import { DeferredFloatingWhatsApp } from "@/components/DeferredFloatingWhatsApp";
import { FaqAccordionLazy } from "@/components/FaqAccordionLazy";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { HomeNarrativeSection } from "@/components/home/HomeNarrativeSection";
import { HomeReviewsSection } from "@/components/home/HomeReviewsSection";
import { HomeWorkAreasSection } from "@/components/home/HomeWorkAreasSection";
import { PersonalityTestLazy } from "@/components/PersonalityTestLazy";
import { JsonLdScript } from "@/components/JsonLdScript";
import { QuestionAnswerSection } from "@/components/QuestionAnswerSection";
import { FooterSeoAccordion } from "@/components/FooterSeoAccordion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  homeChoosing,
  homeContact,
  homeCouple,
  homeLocation,
  homePageMeta,
  homeSupport,
} from "@/lib/home-seo-content";
import { createPageMetadata } from "@/lib/seo";
import { buildHomeGraph } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: homePageMeta.title,
  description: homePageMeta.description,
  path: "/",
  absoluteTitle: true,
  ogImage: siteConfig.images.portraitClinical,
  ogImageAlt: siteConfig.seo.defaultOgImageAlt,
  keywords: homePageMeta.keywords,
});

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={buildHomeGraph()} />
      <SiteHeader />
      <main>
        <HeroSection />
        <HomeReviewsSection />
        <ContactLocationSection
          heading={homeContact.heading}
          intro={homeContact.intro}
          eyebrow={homeContact.eyebrow}
          tone="mesh"
        />
        <AboutSection />
        <HomeNarrativeSection
          id="psikolojik-destek"
          eyebrow={homeSupport.eyebrow}
          heading={homeSupport.heading}
          headingId="home-support-heading"
          paragraphs={homeSupport.paragraphs}
          tone="mesh"
          image={{
            src: "/images/stres.webp",
            alt: "Yoğun düşünce ve bedensel gerginlik — psikolojik destek bağlamı",
            align: "right",
            frame: "wide",
          }}
        />
        <HomeWorkAreasSection />
        <AuthoritySection />
        <HomeNarrativeSection
          id="cift-terapisi"
          eyebrow={homeCouple.eyebrow}
          heading={homeCouple.heading}
          headingId="home-couple-heading"
          paragraphs={homeCouple.paragraphs}
          image={{
            src: "/images/cift-terapisi-3.jpg",
            alt: "Yakın ilişkide mesafe ve dayanışma",
            align: "left",
            frame: "portrait",
          }}
        />
        <HomeNarrativeSection
          id="ofis"
          eyebrow={homeLocation.eyebrow}
          heading={homeLocation.heading}
          headingId="home-location-heading"
          paragraphs={homeLocation.paragraphs}
          tone="mesh"
          image={{
            src: "/images/bursa.webp",
            alt: "Bursa kent görünümü",
            align: "right",
            frame: "wide",
          }}
        />
        <HomeNarrativeSection
          id="psikolog-secimi"
          eyebrow={homeChoosing.eyebrow}
          heading={homeChoosing.heading}
          headingId="home-choosing-heading"
          paragraphs={homeChoosing.paragraphs}
          image={{
            src: siteConfig.images.portraitClinical,
            alt: "Bursa Psikolog A. Alparslan Sancar — klinik portre",
            align: "left",
            frame: "portrait",
          }}
        />
        <TherapyProcessSection />
        <FaqAccordionLazy />
        <PersonalityTestLazy />
        <ArticlesSection />
        <QuestionAnswerSection />
      </main>
      <FooterSeoAccordion />
      <SiteFooter />
      <DeferredFloatingWhatsApp />
    </>
  );
}
