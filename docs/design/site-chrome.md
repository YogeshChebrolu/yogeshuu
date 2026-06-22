---
title: Site Chrome Design
brief: The global shell wrapping every page — layout container, header (brand + nav + theme toggle), and footer.
status: built
tokens:
  font:
    mono: "JetBrains Mono, Fira Code, ui-monospace, monospace"
  color:
    bg: "#0a0e14"
    fg: "#c9d1d9"
    fg-dim: "#7d8590"
    accent: "#3fb950"
    line: "#1f2630"
  layout:
    container: "max-w-3xl"
---

# Site Chrome Design

## Overview

The persistent shell every page renders inside: a centered monospace reading
column with a top `Header` (prompt-style brand, nav with an active marker, and a
light/dark toggle) and a bottom `Footer` (byline + social/RSS links). It sets the
terminal mood before any page content loads and keeps navigation identical
across the site. Implemented by `BaseLayout.astro`, which also owns `<head>` /
SEO and the pre-paint theme bootstrap.

## Layout

- Outer column: `w-full max-w-3xl mx-auto px-5 sm:px-6` inside a
  `min-h-screen flex flex-col` body so the footer sticks to the bottom.
- `<main>` gets `flex-1 py-10`; `Header` and `Footer` bookend it.
- `Header` is `flex items-center justify-between py-6 border-b border-line`.
- `Footer` is `py-8 border-t border-line` with a wrapping flex row.

```
┌ max-w-3xl column ──────────────────────────────┐
│ $ user@host                 posts ./about  ☾    │  Header (border-b line)
├─────────────────────────────────────────────────┤
│                                                 │
│   <main> page slot (py-10)                      │
│                                                 │
├─────────────────────────────────────────────────┤
│ # name · 2026            github  x  email  rss  │  Footer (border-t line)
└─────────────────────────────────────────────────┘
```

## Components

- **`BaseLayout`** → `src/layouts/BaseLayout.astro` — html/head, SEO + OG tags,
  RSS `<link>`, the inline pre-paint theme script, and the column wrapper. Props:
  `title?`, `description?`. Body is `bg`/`fg`/`font-mono` via `global.css`.
- **`Header`** → `src/components/Header.astro` — brand is a prompt line: a
  `text-accent` `$` + bold `{SITE.user}@{SITE.host}`. Nav maps `NAV` from config;
  the active link is `text-accent` with a `./` prefix, inactive is `text-fg-dim`.
  Reuses the **prompt line** pattern.
- **`Footer`** → `src/components/Footer.astro` — `text-xs text-fg-dim`; byline
  prefixed with a `text-accent` `#`; maps `SOCIALS` + a static `rss` link.
- **Theme toggle** — a `<button id="theme-toggle" aria-label="Toggle theme">`
  showing `☾`/`☀`; an inline script toggles `.light` on `<html>` and persists to
  `localStorage`. Pairs with the bootstrap script in `BaseLayout` (applies the
  saved theme before paint to avoid a flash).

## States & interactions

- Nav / brand / footer links: `text-fg-dim` (or `text-fg`) → hover `text-accent`
  via `transition-colors`.
- Active nav item: `text-accent` + leading `./` marker (route match in `Header`).
- Theme toggle: click flips `.light`, swaps the glyph, writes `localStorage.theme`.

## Accessibility checklist

- [x] Body text uses `fg` on `bg` (high contrast); `fg-dim` only for the footer /
      inactive nav (secondary text).
- [x] Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>` all present.
- [x] Theme toggle is a real `<button>` with `aria-label="Toggle theme"`.
- [ ] **Gap:** no explicit `focus-visible` style on links/brand/toggle — add
      `focus-visible:outline focus-visible:outline-accent`.
- [x] Hover uses `transition-colors` only (no motion); no reduced-motion concern here.
- [x] Brand/active glyphs (`$`, `./`, `#`) are decorative; link text is real.

## Implementation notes

Already built — files are the source of truth:

1. `src/layouts/BaseLayout.astro` — column, head/SEO, pre-paint theme script.
2. `src/components/Header.astro` — brand, nav, theme toggle + its inline script.
3. `src/components/Footer.astro` — byline + links.
4. `src/config.ts` — `SITE`, `NAV`, `SOCIALS` drive all chrome copy.

No new `@theme` tokens. To close the a11y gap, add a shared `focus-visible`
utility pattern to interactive elements (no token change needed).
