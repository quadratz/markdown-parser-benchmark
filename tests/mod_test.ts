import { join } from "node:path";
import { assertEquals } from "@std/assert";
import { marked } from "../src/markdown_parser/marked.ts";
import { markdownIt } from "../src/markdown_parser/markdown_it.ts";
import { markdownExit } from "../src/markdown_parser/markdown_exit.ts";
import { remarkRehype } from "../src/markdown_parser/remark_rehype.ts";
import mdContent from "../src/fixture.md" with { type: "text" };

const snapshotDir = join(Deno.cwd(), "tests", "snapshots");

Deno.test("Should output the correct HTML", async ({ step }) => {
  await step("markdown-exit with plugin", async () => {
    const snapshotFile = join(snapshotDir, "markdown_exit_with_plugin.snapshot.html");
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await markdownExit(mdContent, { withPlugin: true });

    assertEquals(html, snapshotContent);
  });

  await step("markdown-exit without plugin", async () => {
    const snapshotFile = join(snapshotDir, "markdown_exit_without_plugin.snapshot.html");
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await markdownExit(mdContent, { withPlugin: false });

    assertEquals(html, snapshotContent);
  });

  await step("markdown-it with plugin", () => {
    const snapshotFile = join(snapshotDir, "markdown_it_with_plugin.snapshot.html");
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = markdownIt(mdContent, { withPlugin: true });

    assertEquals(html, snapshotContent);
  });

  await step("markdown-it without plugin", () => {
    const snapshotFile = join(
      snapshotDir,
      "markdown_it_without_plugin.snapshot.html",
    );
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = markdownIt(mdContent, { withPlugin: false });

    assertEquals(html, snapshotContent);
  });

  await step("marked with plugin", async () => {
    const snapshotFile = join(
      snapshotDir,
      "marked_with_plugin.snapshot.html",
    );
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await marked(mdContent, { withPlugin: true });

    assertEquals(html, snapshotContent);
  });

  await step("marked without plugin", async () => {
    const snapshotFile = join(
      snapshotDir,
      "marked_without_plugin.snapshot.html",
    );
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await marked(mdContent, { withPlugin: false });

    assertEquals(html, snapshotContent);
  });

  await step("remark-rehype with plugin", async () => {
    const snapshotFile = join(
      snapshotDir,
      "remark_rehype_with_plugin.snapshot.html",
    );
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await remarkRehype(mdContent, { withPlugin: true });

    assertEquals(html, snapshotContent);
  });

  await step("remark-rehype without plugin", async () => {
    const snapshotFile = join(
      snapshotDir,
      "remark_rehype_without_plugin.snapshot.html",
    );
    const snapshotContent = Deno.readTextFileSync(snapshotFile);
    const html = await remarkRehype(mdContent, { withPlugin: false });

    assertEquals(html, snapshotContent);
  });
});
