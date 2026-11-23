# adamdab.github.io

A small static site published with GitHub Pages. Each chapter has its own page:

- Chapter 1: `/chapter-1/` (the root URL redirects here)
- Chapter 2: `/chapter-2/` (a click counter and a show/hide note)
- Chapter 3: `/chapter-3/` (a calendar that opens to the current month)
- Chapter 4: `/chapter-4/` (current weather in Warsaw)

## Starter presets

All JavaScript is kept in [`_lib`](./_lib/README.md). Chapters 2–4 load their scripts from there.

## Preview locally

Run Jekyll from the repository root:

```sh
jekyll serve
```

Then visit <http://localhost:4000>. Press `Ctrl+C` to stop the server. `_config.yml` includes `_lib` so Jekyll serves the JavaScript presets.
