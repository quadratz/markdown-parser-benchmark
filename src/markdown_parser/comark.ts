import footnotes from "comark/plugins/footnotes";
import { createRender } from "@comark/html";
import emoji from "comark/plugins/emoji";
import punctuation from "comark/plugins/punctuation";
import taskList from "comark/plugins/task-list";

const processorWithoutPlugin = createRender();

const processorWithPlugin = createRender({
  plugins: [footnotes(), emoji(), punctuation(), taskList()],
});

interface Options {
  withPlugin: boolean;
}

export async function comark(content: string, opt: Options): Promise<string> {
  const { withPlugin } = opt;

  const html = withPlugin
    ? await processorWithPlugin(content)
    : await processorWithoutPlugin(content);

  return html;
}
