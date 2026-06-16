import Slugger from "github-slugger";
import { nameToEmoji } from "gemoji";
import { defineHastPlugin, defineMdastPlugin, markdownToHtml } from "satteri";
import type { HastPluginDefinition } from "satteri";

interface Options {
  withPlugin: boolean;
}

const emojiNames = new Map(Object.entries(nameToEmoji));
const emojiRegex = /:(\+1|[-\w]+):/g;

const gemoji = defineMdastPlugin({
  name: "gemoji",
  text(node, ctx) {
    const newValue = node.value.replaceAll(
      emojiRegex,
      (match, name) => emojiNames.has(name) ? emojiNames.get(name)! : match,
    );

    if (node.value === newValue) return;

    ctx.setProperty(node, "value", newValue);
  },
});

function headingSlug(): HastPluginDefinition {
  const slugger = new Slugger();

  return defineHastPlugin({
    name: "heading-slug",
    element: {
      filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
      visit(node, ctx) {
        if (node.properties.id) return;

        const text = ctx.textContent(node);
        const slug = slugger.slug(text);
        ctx.setProperty(node, "id", slug);
      },
    },
  });
}

async function satteri(content: string, opt: Options): Promise<string> {
  const { withPlugin } = opt;

  const { html } = withPlugin
    ? await markdownToHtml(content, {
      features: { smartPunctuation: true, frontmatter: false },
      mdastPlugins: [gemoji],
      hastPlugins: [headingSlug()],
    })
    : markdownToHtml(content, { features: { gfm: false, frontmatter: false } });

  return html;
}

export { satteri };
