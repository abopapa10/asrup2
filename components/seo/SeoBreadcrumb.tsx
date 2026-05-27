import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SeoBreadcrumbProps = {
  items: readonly BreadcrumbItem[];
  className?: string;
};

/**
 * Görsel breadcrumb. JSON-LD breadcrumb şeması ayrıca
 * `lib/page-structured-data.ts` içindeki helper ile sayfaya enjekte edilir.
 */
export function SeoBreadcrumb({ items, className = "" }: SeoBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-slate-body ${className}`.trim()}
    >
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} className="link-editorial">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "text-slate-charcoal"
                      : "text-slate-body"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="mx-2 text-ice-blue" aria-hidden>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
