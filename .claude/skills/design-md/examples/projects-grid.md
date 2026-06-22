<!-- Worked example output for the brief: "a projects grid section for the home page". -->
---
title: Projects Grid Design
brief: A projects grid section for the home page.
status: draft
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
  radius:
    md: "8px"
  layout:
    container: "max-w-3xl"
    section-gap: "mt-8"
---

# Projects Grid Design

## Overview

A section on the home page (below `TerminalHero`) listing selected projects as a
responsive grid of cards. It reads like `ls ./projects` output: each card is a small
terminal-flavored tile with a title, one-line description, tech tags, and links.
Content is config-driven so adding a project never touches markup.

## Layout

- Sits inside the existing `max-w-3xl` column, opened with `mt-8` like other sections.
- Header is a prompt line (`whoami`-style): `user@host:~$ ls ./projects`.
- Grid: 1 column on mobile, 2 from `sm` up — `grid gap-4 sm:grid-cols-2`.

```
user@host:~$ ls ./projects
┌ card ──────────┐  ┌ card ──────────┐
│ name           │  │ name           │
│ desc (fg-dim)  │  │ desc (fg-dim)  │
│ #tag #tag      │  │ #tag #tag      │
│ repo · demo →  │  │ repo · demo →  │
└────────────────┘  └────────────────┘
```

## Components

- **`Projects`** → `src/components/Projects.astro` — section wrapper: renders the
  prompt-line header and maps `PROJECTS` from config into the grid.
- **`ProjectCard`** → `src/components/ProjectCard.astro` — one tile. Uses
  `bg-bg-soft`, `border border-line`, `rounded-lg`, `p-4`. Title `text-fg` bold;
  description `text-fg-dim`; tags `text-accent` prefixed with `#`; links `text-accent-2`.

## States & interactions

- Card hover: `border-accent` + subtle lift (`transition-colors`). Keep motion small.
- Links: `text-accent-2` → hover `text-accent`.
- Empty state: if `PROJECTS` is empty, print `# no projects yet` in `text-fg-dim`.

## Accessibility checklist

- [x] Card title/description use `fg`/`fg-dim` on `bg-soft` — AA for `fg`; `fg-dim`
      is secondary only.
- [x] Tag/link `accent` text checked ≥4.5:1 on `bg-soft`; bump size/weight if not.
- [x] Each card is an `<article>`; section is `<section aria-label="Projects">`.
- [x] Links get a visible `focus-visible:outline focus-visible:outline-accent`.
- [x] Hover transition wrapped in `motion-safe:` (respects reduced motion).
- [x] `#` tags and `→` glyphs are decorative; tag text is real, links have labels.

## Implementation notes

1. `src/config.ts` — add `PROJECTS: { name; description; tags: string[]; repo?; demo? }[]`.
2. `src/components/ProjectCard.astro` — new card component (props from one project).
3. `src/components/Projects.astro` — new section, imports config + `ProjectCard`.
4. `src/pages/index.astro` — render `<Projects />` under `<TerminalHero />`.
   No new `@theme` tokens required — fully covered by the existing palette.
