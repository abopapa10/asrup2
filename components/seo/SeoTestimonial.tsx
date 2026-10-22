import { FadeIn } from "@/components/FadeIn";
import { GoogleLogo } from "@/components/GoogleLogo";
import { StarRating } from "@/components/StarRating";
import {
  DEFAULT_REVIEW_RATING,
  getGoogleReview,
  getGoogleReviews,
} from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

type SeoTestimonialProps = {
  heading?: string;
  subheading?: string;
  intro?: string;
  featuredId: string;
  supportingIds?: readonly string[];
  /** Google etiketi, başlık ve giriş cümlesini gizler; yalnızca alıntılar kalır. */
  hideHeader?: boolean;
  /** Destek yorumlarını mobilde yan yana kaydırmalı gösterir. */
  supportingCarousel?: boolean;
};

function getInitial(name: string) {
  return name.trim().charAt(0).toLocaleUpperCase("tr-TR");
}

/**
 * Konuya özel danışan deneyimi bloğu.
 * Tek büyük alıntı (konuyla birebir ilgili) + 2–3 kısa destek alıntısı.
 * Yorumlar Google İşletme Profili'nden; metinler değiştirilmez.
 */
export function SeoTestimonial({
  heading,
  subheading,
  intro,
  featuredId,
  supportingIds = [],
  hideHeader = false,
  supportingCarousel = false,
}: SeoTestimonialProps) {
  const featured = getGoogleReview(featuredId);
  const supporting = getGoogleReviews(supportingIds).filter(
    (review) => review.id !== featuredId
  );

  if (!featured) return null;

  const reviewsHref =
    siteConfig.social.googleBusinessProfile || siteConfig.googleMapsUrl;

  return (
    <FadeIn as="section">
      {hideHeader ? null : (
        <>
          <div className="flex items-center gap-2">
            <GoogleLogo className="h-4 w-4" />
            <span className="text-xs font-medium text-[#5F6368]">
              Google yorumu
            </span>
          </div>
          {heading ? (
            <h2
              id="seo-testimonial-heading"
              className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl"
            >
              {heading}
            </h2>
          ) : null}
          {subheading ? (
            <p className="mt-3 max-w-2xl text-base font-medium leading-snug tracking-[-0.02em] text-slate-charcoal sm:mt-4 sm:text-lg">
              {subheading}
            </p>
          ) : null}
          {intro ? (
            <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-slate-body sm:mt-5 sm:text-[0.9375rem]">
              {intro}
            </p>
          ) : null}
        </>
      )}

      <figure className={`${hideHeader ? "mt-0" : "mt-8 sm:mt-10"} border border-ice-blue bg-white p-6 sm:p-8 lg:p-10`}>
        <div className="flex items-center justify-between gap-4">
          <StarRating rating={featured.rating ?? DEFAULT_REVIEW_RATING} />
          <GoogleLogo className="h-5 w-5 shrink-0" />
        </div>
        <blockquote className="blockquote-accent mt-6">
          “{featured.text}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 sm:mt-8">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A73E8] text-sm font-semibold text-white"
            aria-hidden
          >
            {getInitial(featured.name)}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-slate-charcoal">
              {featured.name}
            </span>
            <span className="block text-xs text-slate-body">
              {featured.date} · Google İşletme Profili
            </span>
          </span>
        </figcaption>
      </figure>

      {supporting.length > 0 ? (
        <ul
          className={
            supportingCarousel
              ? "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 sm:gap-5 [&::-webkit-scrollbar]:hidden md:grid md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2"
              : `mt-6 grid gap-4 sm:mt-8 sm:gap-5 ${
                  supporting.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`
          }
        >
          {supporting.map((review) => (
            <li
              key={review.id}
              className={`flex h-full flex-col border-t-2 border-t-neon-turquoise/60 pt-5 ${
                supportingCarousel
                  ? "w-[min(78vw,18.5rem)] shrink-0 snap-start md:w-auto md:shrink"
                  : ""
              }`}
            >
              <StarRating rating={review.rating ?? DEFAULT_REVIEW_RATING} />
              <p className="mt-3 flex-1 text-sm leading-[1.8] text-slate-body">
                “{review.text}”
              </p>
              <p className="mt-3 text-xs font-medium text-slate-charcoal">
                {review.name}
                <span className="font-normal text-slate-body">
                  {" "}
                  · {review.date}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-slate-body sm:mt-8">
        Yorumlar Google İşletme Profili’nden alınmıştır; her danışanın deneyimi
        ve süreci farklıdır.{" "}
        <a
          href={reviewsHref}
          target={reviewsHref.startsWith("/") ? undefined : "_blank"}
          rel={reviewsHref.startsWith("/") ? undefined : "noopener noreferrer"}
          className="link-editorial font-medium"
        >
          Tüm Google yorumlarını görün
        </a>
      </p>
    </FadeIn>
  );
}
