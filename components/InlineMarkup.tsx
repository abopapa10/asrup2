import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Düz metin içindeki `[Etiket](/yol)` veya `[Etiket](https://...)`
 * markdown-tarzı tokenları parse eder ve premium link stiliyle
 * (`link-editorial`) render eder.
 *
 * Hem SEO landing hem makale paragraflarında kullanılan ortak
 * yardımcıdır; veri katmanı saf string olarak kalır.
 */
export function renderInlineMarkup(text: string): ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = /^https?:\/\//.test(href);

    nodes.push(
      isExternal ? (
        <a
          key={`l-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-editorial"
        >
          {label}
        </a>
      ) : (
        <Link key={`l-${key++}`} href={href} className="link-editorial">
          {label}
        </Link>
      )
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length === 0 ? text : nodes;
}
