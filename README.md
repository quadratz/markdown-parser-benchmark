# Markdown Parser Benchmark

This is a personal benchmark to evaluate the performance of various JavaScript Markdown parsers as
of the current date, as I felt that existing benchmarks were quite outdated.

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

To run the benchmark yourself, you must have [Deno installed][Deno]. Simply clone this repository
and run `deno task bench`.

## Installation

1. Ensure you have [Deno installed][deno].
2. Clone this repository: `git clone https://github.com/quadratz/markdown-parser-benchmark.git`.
3. Navigate to the project directory: `cd markdown-parser-benchmark`.
4. Run the benchmark: `deno task bench`.
5. The benchmark results will be displayed in the terminal.

## Benchmark Result

This benchmark was generated on
[Tuesday, 16 June 2026](https://github.com/quadratz/markdown-parser-benchmark/actions/runs/27591188025/job/81572044040).

```
    CPU | AMD EPYC 9V74 80-Core Processor
Runtime | Deno 2.8.3 (x86_64-unknown-linux-gnu)

file:///home/runner/work/markdown-parser-benchmark/markdown-parser-benchmark/src/mod_bench.ts

| benchmark       | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| --------------- | --------------- | ------------- | --------------------- | -------- | -------- | -------- |

group Without Plugin
| markdown-it     |        307.5 µs |         3,252 | (235.0 µs …   2.0 ms) | 284.1 µs | 852.2 µs |   1.3 ms |
| markdown-exit   |        371.3 µs |         2,693 | (278.7 µs …   5.8 ms) | 353.8 µs | 901.8 µs |   1.0 ms |
| comark          |          1.2 ms |         865.2 | (877.2 µs …   4.9 ms) |   1.2 ms |   2.3 ms |   2.3 ms |
| marked          |        392.4 µs |         2,548 | (336.3 µs …   1.1 ms) | 379.7 µs | 810.4 µs | 854.9 µs |
| satteri         |         75.8 µs |        13,190 | ( 67.7 µs …  22.4 ms) |  71.6 µs |  98.5 µs | 118.2 µs |
| remark-rehype   |          5.0 ms |         198.6 | (  3.5 ms …  10.7 ms) |   5.8 ms |   8.3 ms |  10.7 ms |

summary
  satteri
     4.06x faster than markdown-it
     4.90x faster than markdown-exit
     5.18x faster than marked
    15.25x faster than comark
    66.43x faster than remark-rehype

group With Plugin
| markdown-it     |        558.2 µs |         1,792 | (413.7 µs …   1.7 ms) | 560.1 µs |   1.1 ms |   1.4 ms |
| markdown-exit   |        613.4 µs |         1,630 | (500.3 µs …   1.5 ms) | 587.4 µs |   1.2 ms |   1.3 ms |
| comark          |          1.3 ms |         779.0 | (  1.0 ms …   2.5 ms) |   1.4 ms |   2.2 ms |   2.2 ms |
| marked          |          2.3 ms |         436.4 | (  1.9 ms …   4.4 ms) |   2.3 ms |   4.2 ms |   4.3 ms |
| satteri         |        412.9 µs |         2,422 | (312.0 µs …   4.4 ms) | 402.4 µs |   1.2 ms |   2.3 ms |
| remark-rehype   |         13.8 ms |          72.5 | ( 11.4 ms …  22.7 ms) |  15.1 ms |  22.7 ms |  22.7 ms |

summary
  satteri
     1.35x faster than markdown-it
     1.49x faster than markdown-exit
     3.11x faster than comark
     5.55x faster than marked
    33.41x faster than remark-rehype
```

## Benchmark History

The full benchmark history is documented in the
[Releases Section](https://github.com/quadratz/markdown-parser-benchmark/releases).

- **16 Jun 2026** —
  [bench-2026.06.16-1](https://github.com/quadratz/markdown-parser-benchmark/releases/tag/bench-2026.06.16-1)

- **19 May 2026** —
  [bench-2026.05.19-1](https://github.com/quadratz/markdown-parser-benchmark/releases/tag/bench-2026.05.19-1)

[deno]: https://docs.deno.com/runtime/getting_started/installation/
