import { Marked } from "marked";

const marked = new Marked({ gfm: true, breaks: false, async: false });
marked.use({
  renderer: {
    link({ href, text }) {
      const ext = /^https?:\/\//.test(href) && !href.includes("arrowturf.com.au");
      return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${text}</a>`;
    },
  },
});

/** Block markdown → HTML (paragraphs, lists, links, bold). */
export const md = (s = "") => marked.parse(s) as string;
/** Inline-only markdown → HTML. */
export const mdi = (s = "") => marked.parseInline(s) as string;
/** Strip markdown for plain-text contexts such as JSON-LD. */
export const plain = (s = "") => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*|__|_/g, "").replace(/^- /gm, "").replace(/\n{2,}/g, " ").trim();
