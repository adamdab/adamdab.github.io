# adamdab.github.io

A small static site published with GitHub Pages. Each chapter has its own page:

- Chapter 1: `/chapter-1/` (the root URL redirects here)
- Chapter 2: `/chapter-2/` (a click counter and a show/hide note)
- Chapter 3: `/chapter-3/` (a calendar that opens to the current month)

## Starter presets

All JavaScript is kept in [`_lib`](./_lib/README.md). Chapters 2 and 3 load their scripts from there.

## Preview locally

Run a local server from this directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Press `Ctrl+C` to stop the server.
