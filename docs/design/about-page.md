---
title: About Page Design
brief: The /about page — a "cat about.md" prompt header above a prose bio with social links.
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

# About Page Design

## Overview

A single static page at `/about`. A dim prompt-line header (`$ cat about.md`)
frames the content as a file being printed, and the body uses the shared
**prose** styling so it reads like rendered markdown — even though it's authored
as HTML in the `.astro` file. Bio text pulls from config; "Elsewhere" lists the
same `SOCIALS` as the hero/footer.

## Layout

- Renders inside `BaseLayout` (so it inherits the `max-w-3xl` column + chrome).
- Header: `<h1 class="text-sm text-fg-dim mb-6">` with a `text-accent` `$` +
  `cat about.md`.
- Body: a single `<div class="prose">` — paragraphs, `## ` sub-headings, inline
  `<code>`, and an unordered list of links.

```
$ cat about.md

Hi, I'm Name. <bio joined into one paragraph>

## What I do
... (prose paragraph, inline `code`)

## Elsewhere
- github
- x
- email
```

## Components

- **`about` page** → `src/pages/about.astro` — sets `BaseLayout title="about"`,
  renders the prompt header + `.prose` body. The intro joins `SITE.bio`; the
  Elsewhere list maps `SOCIALS`.
- **Prose** — not a component; the `.prose` rules in `global.css` style headings
  (`## `/`### ` accent prefixes), links (`accent-2`, underlined), `code`/`pre`
  (on `bg-soft` with a `line` border), lists (`- ` accent bullets), etc.

## States & interactions

- Prose links: `text-accent-2` underlined → hover `opacity: 0.8`.
- External social links open in a new tab (`target="_blank" rel="me noopener"`).
- Static page — no other interactive state.

## Accessibility checklist

- [x] Prose body uses `fg` on `bg`; `fg-dim` not used for primary content here.
- [x] Prose links are `accent-2` + underline (not color-only signalling).
- [x] Semantic structure: `<h1>` header, `<h2>` sub-sections, real `<ul>`/`<li>`.
- [ ] **Gap:** prose links have no `focus-visible` outline — add one to `.prose a`.
- [x] No animation on this page; no reduced-motion concern.
- [x] `$` and `## ` glyphs are decorative; heading/link text is real.

## Implementation notes

Already built:

1. `src/pages/about.astro` — the page.
2. `src/styles/global.css` — `.prose` rules (shared with blog posts).
3. `src/config.ts` — `SITE.name`, `SITE.bio`, `SOCIALS`.

No new tokens. Follow-up: add `focus-visible` styling to `.prose a` (shared with
the blog-post spec).
