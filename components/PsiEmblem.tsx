type PsiEmblemProps = {
  className?: string;
};

/** Psikoloji (Ψ) amblemi — CTA neon turkuaz (#42FFD6) */
export function PsiEmblem({ className = "h-9 w-9 shrink-0 text-neon-turquoise" }: PsiEmblemProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 5v22"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M16 5C10.5 5 6 9.8 6 15c0 3.2 1.6 6 4 7.8"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5c5.5 0 10 4.8 10 10 0 3.2-1.6 6-4 7.8"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
