import { Star } from "lucide-react";

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} yıldız`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          strokeWidth={0}
          className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]"
          aria-hidden
        />
      ))}
    </div>
  );
}
