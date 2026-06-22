<!--
  DESIGN.md template. Copy this, fill EVERY section, delete the comments,
  and save to docs/design/<slug>.md. Keep only the tokens you actually use
  in the frontmatter. Tokens come from DESIGN_SYSTEM.md — don't invent new
  ones unless the brief requires it (and note new ones under "Implementation").
-->
---
title: <Feature> Design
brief: <the one-line plain-language brief, verbatim>
status: draft # draft | approved | built
tokens:
  font:
    mono: "JetBrains Mono, Fira Code, ui-monospace, monospace"
  color: # include only what this feature uses
    bg: "#0a0e14"
    bg-soft: "#11161f"
    fg: "#c9d1d9"
    fg-dim: "#7d8590"
    accent: "#3fb950"
    accent-2: "#d29922"
    line: "#1f2630"
  radius:
    md: "8px"   # rounded-lg
    sm: "4px"
  layout:
    container: "max-w-3xl"
    section-gap: "mt-8"
---

# <Feature> Design

## Overview

<2–4 sentences: what this is, who/what it's for, how it fits the terminal aesthetic.>

## Layout

<Structure & responsive behavior. Reference the container (`max-w-3xl mx-auto`),
spacing, and where it sits on the page. A small ASCII sketch is welcome.>

```
┌ terminal-window ───────────────┐
│ ● ● ●  user@host: ~/...         │
├────────────────────────────────┤
│  ...                            │
└────────────────────────────────┘
```

## Components

<Break into components. For each: name, the file it'll live in, the tokens/utilities
it uses, and which signature pattern it reuses (terminal window / prompt line / prose).>

- **`<Name>`** → `src/components/<Name>.astro` — <role>. Uses `bg-bg-soft`,
  `border-line`, `text-fg`; wraps content in `TerminalWindow`.

## States & interactions

<Hover, focus, active, empty, loading, error — whichever apply. Name the token for each.
e.g. links: `text-accent-2` → hover `text-accent` (`transition-colors`).>

## Accessibility checklist

- [ ] Contrast: body text uses `fg` on `bg`; any `accent`/`accent-2` text meets AA.
- [ ] `fg-dim` used only for secondary text, not primary content.
- [ ] Interactive elements have a visible `focus-visible` state.
- [ ] Semantic HTML + correct heading order; landmarks where relevant.
- [ ] Animations gated behind `prefers-reduced-motion: reduce`.
- [ ] Decorative glyphs aren't the sole carrier of meaning (real text / aria present).

## Implementation notes

<Files to add or change, in order. Flag any NEW token added to `global.css`'s `@theme`
and justify it. Note config additions to `src/config.ts` if content is data-driven.>

1. `src/styles/global.css` — <new tokens, if any>
2. `src/components/<Name>.astro` — <new component>
3. `src/config.ts` — <data, if applicable>
4. `src/pages/<page>.astro` — <wire it in>
