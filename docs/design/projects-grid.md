---
title: Projects Grid Design
brief: A projects grid section for the home page.
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
  radius:
    md: "8px"
  layout:
    container: "max-w-3xl"
    section-gap: "mt-12"
---

# Projects Grid Design

## Overview

A section on the home page (between `TerminalHero` and the post list) showing
selected projects as a responsive grid of cards. It reads like `ls ./projects`
output: a prompt-line header over terminal-flavored tiles, each with a title,
one-line description, `#tags`, and repo/demo links. Content is config-driven, so
adding a project never touches markup.

## Layout

- Sits inside the existing `max-w-3xl` column, opened with `mt-12` to match the
  sibling post-list section's rhythm.
- Header is a full prompt line: `user@host:~$ ls ./projects`.
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
  prompt-line header and maps `PROJECTS` from config into the grid. `<section
  aria-label="Projects">`.
- **`ProjectCard`** → `src/components/ProjectCard.astro` — one tile. Uses
  `bg-bg-soft`, `border border-line`, `rounded-lg`, `p-4`. Title `text-fg` bold;
  description `text-fg-dim`; tags `text-accent` prefixed with `#`; links
  `text-accent-2`. Props: `name`, `description`, `tags`, `repo?`, `demo?`.

## States & interactions

- Card hover: `border-line → border-accent` (`transition-colors`); subtle, no lift.
- Links: `text-accent-2` → hover `text-accent`; each has a visible
  `focus-visible:outline focus-visible:outline-accent`.
- Empty state: if `PROJECTS` is empty, print `# no projects yet` in `text-fg-dim`.

## Accessibility checklist

- [x] Title/description use `fg`/`fg-dim` on `bg-soft` — AA for `fg`; `fg-dim`
      is secondary only.
- [x] Tag/link `accent`/`accent-2` text on `bg-soft` — small, so verify ≥4.5:1.
- [x] Each card is an `<article>`; section is `<section aria-label="Projects">`;
      title is an `<h3>` (under the page `<h2>` listings).
- [x] Links get a visible `focus-visible:outline focus-visible:outline-accent`
      (this is the new pattern the older specs flag as missing site-wide).
- [x] Hover is color-only (`transition-colors`); no reduced-motion concern.
- [x] `#` tags and `→` glyphs are decorative; tag text is real, links are labeled.

## Implementation notes

Built:

1. `src/config.ts` — `PROJECTS: { name; description; tags: string[]; repo?; demo? }[]`.
2. `src/components/ProjectCard.astro` — card component (props from one project).
3. `src/components/Projects.astro` — section; imports config + `ProjectCard`.
4. `src/pages/index.astro` — renders `<Projects />` under `<TerminalHero />`.
   No new `@theme` tokens — fully covered by the existing palette.
