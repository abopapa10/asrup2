const STAR_PATH =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

type StarRatingProps = {
  count?: number;
  /** Görüntülenen puan (varsayılan: 5) */
  rating?: number;
};

export function StarRating({ count = 5, rating = 5 }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`${rating} üzerinden ${count} yıldız`}
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
          focusable="false"
        >
          <path fill="#FBBC04" d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
