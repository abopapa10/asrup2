import { SeoTestimonial } from "@/components/seo/SeoTestimonial";
import { homeReviews } from "@/lib/home-seo-content";

export function HomeReviewsSection() {
  return (
    <section
      id="yorumlar"
      aria-labelledby="seo-testimonial-heading"
      className="border-t border-ice-blue/40 bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <SeoTestimonial
          heading={homeReviews.heading}
          intro={homeReviews.intro}
          featuredId={homeReviews.featuredId}
          supportingIds={homeReviews.supportingIds}
          supportingCarousel
        />
      </div>
    </section>
  );
}
