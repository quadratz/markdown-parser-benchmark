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
[Tuesday, 19 May 2026](https://github.com/quadratz/markdown-parser-benchmark/actions/runs/26067082958/job/76640184769).

```
    CPU | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
Runtime | Deno 2.7.14 (x86_64-unknown-linux-gnu)

file:///home/runner/work/markdown-parser-benchmark/markdown-parser-benchmark/src/mod_bench.ts

| benchmark       | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| --------------- | --------------- | ------------- | --------------------- | -------- | -------- | -------- |

group Without Plugin
| markdown-it     |        313.4 µs |         3,191 | (239.7 µs …   2.6 ms) | 290.4 µs | 890.8 µs |   1.2 ms |
| markdown-exit   |        402.9 µs |         2,482 | (290.7 µs …   7.2 ms) | 373.6 µs |   1.1 ms |   1.4 ms |
| comark          |          1.2 ms |         858.6 | (930.5 µs …   4.1 ms) |   1.2 ms |   2.3 ms |   3.0 ms |
| marked          |        422.2 µs |         2,369 | (373.5 µs …   1.3 ms) | 412.2 µs | 869.5 µs | 908.7 µs |
| remark-rehype   |          5.5 ms |         181.8 | (  3.8 ms …  11.7 ms) |   6.3 ms |  10.5 ms |  11.7 ms |

summary
  markdown-it
     1.29x faster than markdown-exit
     1.35x faster than marked
     3.72x faster than comark
    17.55x faster than remark-rehype

group With Plugin
| markdown-it     |        553.8 µs |         1,806 | (453.7 µs …   3.0 ms) | 529.9 µs |   1.1 ms |   1.3 ms |
| markdown-exit   |        632.3 µs |         1,582 | (545.2 µs …   1.7 ms) | 613.5 µs |   1.1 ms |   1.2 ms |
| comark          |          1.3 ms |         777.6 | (  1.1 ms …   2.7 ms) |   1.2 ms |   2.2 ms |   2.3 ms |
| marked          |          2.4 ms |         425.2 | (  2.1 ms …   5.0 ms) |   2.3 ms |   4.5 ms |   4.8 ms |
| remark-rehype   |         15.8 ms |          63.3 | ( 12.1 ms …  26.1 ms) |  17.1 ms |  26.1 ms |  26.1 ms |

summary
  markdown-it
     1.14x faster than markdown-exit
     2.32x faster than comark
     4.25x faster than marked
    28.52x faster than remark-rehype
```

## Benchmark History

The full benchmark history is documented in the
[Releases Section](https://github.com/quadratz/markdown-parser-benchmark/releases).

- **2026.05.19** —
  [bench-2026.05.19-1](https://github.com/quadratz/markdown-parser-benchmark/releases/tag/bench-2026.05.19-1)

[deno]: https://docs.deno.com/runtime/getting_started/installation/
