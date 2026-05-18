import anchorPlugin from "markdown-it-anchor";
import footnotePlugin from "markdown-it-footnote";
import { MarkdownExit } from "markdown-exit";
import { slug as slugify } from "github-slugger";
import { full as emojiPlugin } from "markdown-it-emoji";

const processorWithoutPlugin = new MarkdownExit("commonmark");

const processorWithPlugin = new MarkdownExit({ html: true, typographer: true, linkify: true })
  // @ts-expect-error markdown-it types incompatible.
  // See https://github.com/serkodev/markdown-exit/issues/30
  .use(footnotePlugin).use(emojiPlugin).use(anchorPlugin, { slugify });

interface Options {
  withPlugin: boolean;
}

export async function markdownExit(content: string, opt: Options): Promise<string> {
  const { withPlugin } = opt;

  const html = withPlugin
    ? await processorWithPlugin.renderAsync(content)
    : await processorWithoutPlugin.renderAsync(content);

  return html;
}
