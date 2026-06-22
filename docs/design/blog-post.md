---
title: Blog Post Design
brief: The single blog-post page — a back link, a titled/dated/tagged header, and the markdown body as prose.
status: built
tokens:
  font:
    mono: "JetBrains Mono, Fira Code, ui-monospace, monospace"
  color:
    bg-soft: "#11161f"
    fg: "#c9d1d9"
    fg-dim: "#7d8590"
    accent: "#3fb950"
    accent-2: "#d29922"
    line: "#1f2630"
---

# Blog Post Design

## Overview

The reading view for one post (`/blog/<slug>/`). A `cd ..` back link returns home,
then an `<article>` with a header (title, publish/updated date, tags) over a
hairline rule, followed by the rendered markdown body in the shared **prose**
style. The thin-page route just feeds frontmatter + `<Content />` into the layout;
all presentation lives in `PostLayout`.

## Layout

- Renders inside `BaseLayout` (inherits the `max-w-3xl` column + chrome).
- `cd ..` link at the top (`text-sm text-fg-dim`).
- `<article class="mt-6">`:
  - `<header class="pb-6 mb-6 border-b border-line">` — `<h1>` title
    (`text-2xl sm:text-3xl font-bold`), then a `text-xs text-fg-dim` meta row:
    `<time>` · optional `updated …` · `#tag`s in `text-accent`.
  - `<div class="prose">` body.

```
cd ..

Post Title (2xl/3xl bold)
Jun 20, 2026 · updated Jun 22, 2026   #tag #tag
────────────────────────────────────────────────
## Heading (accent-prefixed)
prose paragraphs, `code`, > quotes, lists, pre blocks…
```

## Components

- **`PostLayout`** → `src/layouts/PostLayout.astro` — props `title`,
  `description`, `pubDate`, `updatedDate?`, `tags`. Formats dates as
  `MMM DD, YYYY`; renders back link, header, and `<slot />` inside `.prose`.
- **Route** → `src/pages/blog/[...slug].astro` — `getStaticPaths` from the `blog`
  collection (drafts excluded), `render(post)` → `<Content />` into `PostLayout`.
- **Prose** — the `.prose` rules in `global.css` (shared with the about page):
  `## `/`### ` accent heading prefixes, `accent-2` underlined links, `code`/`pre`
  on `bg-soft` + `line` border, accent `- ` bullets, accent left-border quotes,
  dashed `hr`.

## States & interactions

- `cd ..` link: `text-fg-dim → hover text-accent` (`transition-colors`).
- Prose links: `text-accent-2` underlined → hover `opacity: 0.8`.
- Static content — no other interactive state.

## Accessibility checklist

- [x] Body/title use `fg` on `bg`; `fg-dim` only for the back link + meta row.
- [x] `accent` tag text is small — verify ≥4.5:1 on `bg`; bump weight if borderline.
- [x] Semantic: `<article>` + `<header>`, `<h1>` title, `<time datetime>` machine-readable.
- [ ] **Gap:** `cd ..` link and prose links lack a `focus-visible` outline — add one.
- [x] No animation here; no reduced-motion concern.
- [x] `#` tag and `cd ..` text are real/meaningful (not glyph-only).

## Implementation notes

Already built:

1. `src/layouts/PostLayout.astro` — header + prose wrapper.
2. `src/pages/blog/[...slug].astro` — static paths + content render.
3. `src/styles/global.css` — `.prose` rules (shared with about page).
4. `src/content.config.ts` — `blog` schema providing the frontmatter fields.

No new tokens. Follow-up: add `focus-visible` styling to `.prose a` and the
`cd ..` link.
