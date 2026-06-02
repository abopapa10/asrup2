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
function renderBoldSegments(text: string, keyPrefix: string): ReactNode[] {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let k = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    parts.push(
      <strong key={`${keyPrefix}-b-${k++}`} className="font-semibold text-slate-charcoal">
        {match[1]}
      </strong>
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length === 0 ? [text] : parts;
}

export function renderInlineMarkup(text: string): ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...renderBoldSegments(text.slice(lastIndex, match.index), `t-${key}`));
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
    nodes.push(...renderBoldSegments(text.slice(lastIndex), `t-${key}`));
  }

  return nodes.length === 0 ? text : nodes;
}
