import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkGemoji from "remark-gemoji";
import remarkToRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkSmartypants from "remark-smartypants";
import { unified } from "unified";

const processorWithoutPlugin = unified()
  .use(remarkParse)
  .use(remarkToRehype)
  .use(rehypeStringify)
  .freeze();

const processorWithPlugin = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkGemoji)
  .use(remarkSmartypants, { dashes: "oldschool" })
  .use(remarkToRehype)
  .use(rehypeSlug)
  .use(rehypeStringify)
  .freeze();

interface Options {
  withPlugin: boolean;
}

export async function remarkRehype(
  content: string,
  opt: Options,
): Promise<string> {
  const { withPlugin } = opt;

  const vFile = withPlugin
    ? await processorWithPlugin.process(content)
    : await processorWithoutPlugin.process(content);

  const html = vFile.toString();

  return html;
}
