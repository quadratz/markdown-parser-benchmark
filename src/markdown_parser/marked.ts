import markedFootnote from "marked-footnote";
import { Marked } from "marked";
import { markedEmoji } from "marked-emoji";
import { nameToEmoji } from "gemoji";
import { markedSmartypants } from "marked-smartypants";
import { gfmHeadingId } from "marked-gfm-heading-id";

const processorWithoutPlugin = new Marked({ gfm: false });
const processorWithPlugin = new Marked({ gfm: true })
  .use(markedEmoji({ emojis: nameToEmoji, renderer: ({ emoji }) => emoji }))
  .use(markedSmartypants())
  .use(gfmHeadingId())
  .use(markedFootnote());

interface Options {
  withPlugin: boolean;
}

export async function marked(content: string, opt: Options): Promise<string> {
  const { withPlugin } = opt;

  const html = withPlugin
    ? await processorWithPlugin.parse(content)
    : await processorWithoutPlugin.parse(content);

  return html;
}
