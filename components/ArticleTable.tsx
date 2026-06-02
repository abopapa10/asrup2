import { renderInlineMarkup } from "@/components/InlineMarkup";

type ArticleTableProps = {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

/** Makale içi karşılaştırma / veri tabloları — site border ve tipografi ile uyumlu */
export function ArticleTable({ caption, headers, rows }: ArticleTableProps) {
  return (
    <figure className="mt-8 sm:mt-10">
      <div className="overflow-x-auto border border-ice-blue bg-white">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ice-blue bg-soft-sky/30">
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-4 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-slate-charcoal sm:px-5 sm:py-4 sm:text-sm sm:normal-case sm:tracking-[-0.02em]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className="border-b border-ice-blue/60 last:border-b-0 odd:bg-white even:bg-soft-sky/10"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className="px-4 py-3.5 align-top leading-[1.75] text-slate-body sm:px-5 sm:py-4 sm:leading-[1.85]"
                  >
                    {renderInlineMarkup(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-slate-body/80 sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
