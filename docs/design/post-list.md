---
title: Post List Design
brief: The home-page list of blog posts under an "ls ./posts" prompt, each rendered as a PostCard.
status: built
tokens:
  font:
    mono: "JetBrains Mono, Fira Code, ui-monospace, monospace"
  color:
    fg: "#c9d1d9"
    fg-dim: "#7d8590"
    accent: "#3fb950"
    accent-2: "#d29922"
    line: "#1f2630"
---

# Post List Design

## Overview

Below the hero on the home page, published posts are listed like the output of
`ls ./posts`: a dim prompt-line header followed by a stack of `PostCard` rows
separated by hairline rules. Sorted newest-first; drafts are excluded. Reuses the
**prompt line** pattern for the header and keeps cards flat (no window chrome) so
the hero stays the visual anchor.

## Layout

- `<section class="mt-12">` — larger top gap than other sections to separate it
  from the hero.
- Header: `<h2 class="text-sm text-fg-dim">` with a `text-accent` `$` +
  `ls ./posts`.
- Cards stack directly; each `PostCard` is `py-5 border-b border-line` with
  `last:border-b-0` so there's no trailing rule.

```
$ ls ./posts
> Post title                                  Jun 20, 2026
  one-line description (fg-dim)
  #tag #tag
────────────────────────────────────────────────────────
> Another post                                Jun 12, 2026
  ...
```

## Components

- **Post list section** → inline in `src/pages/index.astro` — header + maps
  sorted posts to `PostCard`. Empty state: `No posts yet. Check back soon.` in
  `text-fg-dim text-sm py-6`.
- **`PostCard`** → `src/components/PostCard.astro` — one row, fully clickable
  (`<article class="group">` wrapping an `<a>`). Title `text-lg font-bold text-fg`
  prefixed with a `text-accent-2` `>`; on hover the title goes `text-accent`
  (`group-hover`). Date is `text-xs text-fg-dim tabular-nums`, right-aligned and
  `shrink-0`. Description `text-sm text-fg-dim`. Tags `text-xs text-accent`
  prefixed with `#`. Props: `title`, `description`, `pubDate`, `tags`, `href`.

## States & interactions

- Card hover: title `text-fg → text-accent` via `group-hover` + `transition-colors`.
- Whole card is one link target (`<a class="block">`); date/tags share the hover.
- Empty state when no non-draft posts exist.

## Accessibility checklist

- [x] Title uses `fg` on `bg`; `fg-dim` only for date/description (secondary).
- [x] `accent` tag text — small, so verify ≥4.5:1 on `bg`; bump if borderline.
- [x] Each item is an `<article>`; title is an `<h2>` (correct order under the page).
- [ ] **Gap:** the card link has no `focus-visible` outline — keyboard focus is
      invisible. Add `focus-visible:outline focus-visible:outline-accent` on the `<a>`.
- [x] Hover is color-only (`transition-colors`); no reduced-motion concern.
- [x] `>` and `#` glyphs are decorative; title, date, tags are real text.

## Implementation notes

Already built:

1. `src/components/PostCard.astro` — the row component.
2. `src/pages/index.astro` — `getCollection('blog')`, filter drafts, sort, map.
3. `src/content.config.ts` — `blog` collection schema (`title`, `description`,
   `pubDate`, `updatedDate?`, `tags`, `draft`).

No new tokens. Follow-up: add the `focus-visible` outline to the card link.
