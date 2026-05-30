import Link from "next/link";

type TestPageBreadcrumbProps = {
  testTitle: string;
};

export function TestPageBreadcrumb({ testTitle }: TestPageBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm sm:mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-slate-body/80">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
          >
            Ana Sayfa
          </Link>
        </li>
        <li aria-hidden className="text-ice-blue">
          /
        </li>
        <li>
          <Link
            href="/testler"
            className="transition-colors hover:text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
          >
            Testler
          </Link>
        </li>
        <li aria-hidden className="text-ice-blue">
          /
        </li>
        <li className="font-medium text-slate-charcoal" aria-current="page">
          {testTitle}
        </li>
      </ol>
    </nav>
  );
}
