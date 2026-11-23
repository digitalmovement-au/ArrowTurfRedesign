import type { Faq } from "./faqs";

/** Body copy is lightweight markdown: paragraphs separated by blank lines, [links](/path), **bold**, "- " bullets. */
export type Md = string;

export type Section =
  | { kind: "split"; id?: string; eyebrow?: string; heading: string; body: Md; image?: string; imageAlt?: string; reverse?: boolean; cta?: boolean }
  | { kind: "prose"; id?: string; eyebrow?: string; heading: string; body: Md; cta?: boolean }
  | { kind: "features"; id?: string; eyebrow?: string; heading: string; intro?: Md; items: { title: string; body: Md; icon?: string }[]; image?: string }
  | { kind: "specs"; id?: string; eyebrow?: string; heading: string; groups: { title: string; rows: [string, string][] }[]; suitability?: [string, string][]; note?: Md; image?: string; imageAlt?: string }
  | { kind: "varieties"; id?: string; eyebrow?: string; heading: string; intro?: Md; exclude?: string; only?: string[] }
  | { kind: "areas"; id?: string; eyebrow?: string; heading: string; intro?: Md; areas: string[]; outro?: Md }
  | { kind: "steps"; id?: string; eyebrow?: string; heading: string; intro?: Md; items: { title: string; body: Md }[]; image?: string }
  | { kind: "gallery"; id?: string; eyebrow?: string; heading: string; intro?: Md; images: { src: string; alt: string }[] }
  | { kind: "services"; id?: string; eyebrow?: string; heading: string; intro?: Md; exclude?: string }
  | { kind: "table"; id?: string; eyebrow?: string; heading: string; intro?: Md; columns: [string, string]; rows: [string, string][]; outro?: Md; image?: string; cta?: string }
  | { kind: "video"; id?: string; eyebrow?: string; heading: string; src: string; poster?: string; caption?: Md }
  | { kind: "journey"; id?: string }
  | { kind: "calculator"; id?: string }
  | { kind: "compare"; id?: string; eyebrow?: string; heading: string; intro?: Md };

export type Page = {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  breadcrumb?: { name: string; path: string }[];
  hero: { eyebrow?: string; h1: string; lead: string; image?: string };
  sections: Section[];
  faqs?: Faq[];
};
