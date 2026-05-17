# Markdown Parser Benchmark

This is a personal benchmark to evaluate the performance of various Markdown parsers as of the
current date, as I felt that existing benchmarks were quite outdated.

This benchmark may not be perfectly accurate. Therefore, any suggestions to improve it are highly
welcome.

## Description

The benchmark is divided into two groups: without plugins and with plugins.

For the tests without plugins, we kept the configuration as minimal as possible to remain as close
to CommonMark compliance as possible.

For the tests with plugins, we added the following extensions to all parsers:

- A plugin for GitHub Flavored Markdown (GFM).
- A plugin for Emojis (converting gemoji shortcodes like `:+1:` into Unicode emojis like 👍).
- A plugin for Smartypants.
- A plugin for adding IDs to headings.

To run the benchmark yourself, you must have [Deno][Deno] installed. Simply clone this repository
and run `deno task bench`.

## Benchmark Result

This benchmark was generated on
[Sunday, 17 May 2026](https://github.com/quadratz/markdown-parser-benchmark/tree/bench-2026.05.17-1).

```
| benchmark       | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| --------------- | --------------- | ------------- | --------------------- | -------- | -------- | -------- |

group Without Plugin
| remark-rehype   |         15.5 ms |          64.3 | (  8.8 ms …  30.2 ms) |  18.3 ms |  30.2 ms |  30.2 ms |
| markdown-it     |        926.9 µs |         1,079 | (583.4 µs …   7.8 ms) | 926.5 µs |   3.6 ms |   5.1 ms |
| markdown-exit   |        819.1 µs |         1,221 | (537.0 µs …   4.4 ms) | 841.4 µs |   3.1 ms |   3.4 ms |
| marked          |          1.1 ms |         890.5 | (873.6 µs …   3.5 ms) |   1.1 ms |   2.5 ms |   2.9 ms |

summary
  markdown-exit
     1.13x faster than markdown-it
     1.37x faster than marked
    18.98x faster than remark-rehype

group With Plugin
| remark-rehype   |         37.6 ms |          26.6 | ( 27.1 ms …  54.4 ms) |  41.3 ms |  54.4 ms |  54.4 ms |
| markdown-it     |          1.4 ms |         692.6 | (970.9 µs …  11.7 ms) |   1.5 ms |   4.2 ms |   5.1 ms |
| markdown-exit   |          1.3 ms |         788.1 | (895.2 µs …   8.0 ms) |   1.4 ms |   3.6 ms |   4.0 ms |
| marked          |          5.6 ms |         180.0 | (  4.1 ms …  11.9 ms) |   5.9 ms |  11.1 ms |  11.9 ms |

summary
  markdown-exit
     1.14x faster than markdown-it
     4.38x faster than marked
    29.61x faster than remark-rehype
```

[deno]: https://docs.deno.com/runtime/getting_started/installation/
