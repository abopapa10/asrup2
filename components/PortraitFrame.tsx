import Image from "next/image";

type PortraitFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  variant?: "clinical" | "full" | "compact";
  align?: "left" | "right";
  className?: string;
};

export function PortraitFrame({
  src,
  alt,
  priority = false,
  variant = "clinical",
  align = "right",
  className = "",
}: PortraitFrameProps) {
  const aspect =
    variant === "full"
      ? "aspect-[3/4] max-h-[640px] sm:max-h-[680px]"
      : variant === "compact"
        ? "aspect-[4/5] max-h-[340px] sm:max-h-[400px] lg:max-h-[440px]"
        : "aspect-[4/5] max-h-[480px] sm:max-h-[540px]";

  const framePosition =
    align === "left"
      ? "relative mr-auto w-full max-w-full"
      : "relative ml-auto w-[94%] sm:w-[90%] lg:w-[88%]";

  const matPosition =
    align === "left"
      ? "absolute -left-2 top-5 hidden h-[88%] w-[72%] border border-ice-blue/50 bg-white sm:-left-3 lg:block"
      : "absolute -right-2 top-5 hidden h-[88%] w-[72%] border border-ice-blue/50 bg-white sm:-right-3 lg:block";

  return (
    <figure className={`relative w-full ${className}`}>
      <div className={matPosition} aria-hidden />
      <div className={`${framePosition} ${aspect}`}>
        <div className="absolute -inset-2 border border-ice-blue bg-white sm:-inset-3" />
        <div className="relative h-full w-full overflow-hidden bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={
              variant === "full"
                ? "(max-width: 1024px) 90vw, 42vw"
                : variant === "compact"
                  ? "(max-width: 1024px) 72vw, 360px"
                  : "(max-width: 1024px) 90vw, 40vw"
            }
            quality={priority ? 85 : 75}
            className="object-cover object-center"
          />
        </div>
      </div>
    </figure>
  );
}
