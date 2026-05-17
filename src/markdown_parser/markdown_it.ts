import MarkdownIt from "markdown-it";
import anchorPlugin from "markdown-it-anchor";
import footnotePlugin from "markdown-it-footnote";
import { slug as slugify } from "github-slugger";
import { full as emojiPlugin } from "markdown-it-emoji";

const processorWithoutPlugin = new MarkdownIt("commonmark");

const processorWithPlugin = new MarkdownIt({ typographer: true, linkify: true, html: true })
  .use(footnotePlugin)
  .use(emojiPlugin)
  .use(anchorPlugin, { slugify });

interface Options {
  withPlugin: boolean;
}

export function markdownIt(content: string, opt: Options): string {
  const { withPlugin } = opt;

  const html = withPlugin
    ? processorWithPlugin.render(content)
    : processorWithoutPlugin.render(content);

  return html;
}
