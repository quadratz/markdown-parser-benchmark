import mdContent from "./fixture.md" with { type: "text" };
import { comark } from "./markdown_parser/comark.ts";
import { marked } from "./markdown_parser/marked.ts";
import { markdownIt } from "./markdown_parser/markdown_it.ts";
import { markdownExit } from "./markdown_parser/markdown_exit.ts";
import { remarkRehype } from "./markdown_parser/remark_rehype.ts";

const benchList = [
  // Without plugin
  ["markdown-it", () => markdownIt(mdContent, { withPlugin: false })],
  ["markdown-exit", () => markdownExit(mdContent, { withPlugin: false })],
  ["comark", () => comark(mdContent, { withPlugin: false })],
  ["marked", () => marked(mdContent, { withPlugin: false })],
  ["remark-rehype", () => remarkRehype(mdContent, { withPlugin: false })],

  // With plugin
  ["markdown-it", () => markdownIt(mdContent, { withPlugin: true })],
  ["markdown-exit", () => markdownExit(mdContent, { withPlugin: true })],
  ["comark", () => comark(mdContent, { withPlugin: true })],
  ["marked", () => marked(mdContent, { withPlugin: true })],
  ["remark-rehype", () => remarkRehype(mdContent, { withPlugin: true })],
] as const;

const total = benchList.length;
const half = total / 2;

for (let i = 0; i < total; i++) {
  const [name, callback] = benchList[i];
  const group = i < half ? "Without Plugin" : "With Plugin";

  Deno.bench(name, { group }, async () => {
    await callback();
  });
}
