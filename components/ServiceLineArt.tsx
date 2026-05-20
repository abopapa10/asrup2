type ServiceLineArtProps = {
  variant: "bireysel" | "cift" | "emdr";
  className?: string;
};

export function ServiceLineArt({ variant, className = "" }: ServiceLineArtProps) {
  if (variant === "bireysel") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="72" stroke="#BFEBF2" strokeWidth="1" />
        <path
          d="M100 40 L100 160 M40 100 L160 100"
          stroke="#FFFBE5"
          strokeWidth="1"
        />
        <ellipse cx="100" cy="100" rx="28" ry="48" stroke="#BFEBF2" strokeWidth="1" />
      </svg>
    );
  }

  if (variant === "cift") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="72" cy="100" r="48" stroke="#BFEBF2" strokeWidth="1" />
        <circle cx="128" cy="100" r="48" stroke="#FFFBE5" strokeWidth="1" />
        <path
          d="M72 100 Q100 60 128 100 Q100 140 72 100"
          stroke="#BFEBF2"
          strokeWidth="1"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path
        d="M40 140 Q100 40 160 140 Q100 100 40 140"
        stroke="#BFEBF2"
        strokeWidth="1"
      />
      <path
        d="M60 120 Q100 80 140 120"
        stroke="#FFFBE5"
        strokeWidth="1"
      />
      <circle cx="100" cy="100" r="24" stroke="#BFEBF2" strokeWidth="1" />
      <path
        d="M100 76 L100 124 M76 100 L124 100"
        stroke="#C9F7FF"
        strokeWidth="1"
        strokeDasharray="3 6"
      />
    </svg>
  );
}
