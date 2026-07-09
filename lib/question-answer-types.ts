import type { ArticleFaqItem } from "@/lib/article-types";

export type QuestionAnswerBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "callout"; text: string };

export type QuestionAnswerItem = {
  slug: string;
  question: string;
  directAnswer: string;
  excerpt: string;
  date: string;
  dateISO: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  content: readonly QuestionAnswerBlock[];
  faq: readonly ArticleFaqItem[];
};
