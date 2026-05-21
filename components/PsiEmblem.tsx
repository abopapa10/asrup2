import { PSI_EMBLEM_PATHS, PSI_EMBLEM_VIEWBOX } from "@/lib/psi-emblem-svg";

type PsiEmblemProps = {
  className?: string;
};

/** Psikoloji (Ψ) amblemi — CTA neon turkuaz (#42FFD6) */
export function PsiEmblem({ className = "h-9 w-9 shrink-0 text-neon-turquoise" }: PsiEmblemProps) {
  return (
    <svg
      className={className}
      viewBox={PSI_EMBLEM_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {PSI_EMBLEM_PATHS.map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
