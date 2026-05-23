export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string };

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  image: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  faq?: readonly ArticleFaqItem[];
  content: readonly ArticleBlock[];
};

export function paragraphs(...texts: string[]): ArticleBlock[] {
  return texts.map((text) => ({ type: "p", text }));
}
