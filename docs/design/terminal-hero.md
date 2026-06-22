---
title: Terminal Hero Design
brief: The home-page hero — a terminal window that "runs" whoami, cat bio.txt, and ls ./links.
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
---

# Terminal Hero Design

## Overview

The first thing on the home page: a terminal-window card that simulates a short
session — printing the owner's name (`whoami`), bio lines (`cat bio.txt`), social
links (`ls ./links`), and a final live prompt with a blinking cursor. It's the
site's signature element and the canonical instance of the **terminal window**
and **prompt line** patterns. All copy is config-driven, so it's edited without
touching markup.

## Layout

- A `<section class="mt-8">` holding one terminal-window card
  (`rounded-lg border border-line bg-bg-soft overflow-hidden shadow-sm`).
- Title bar: three traffic-light dots + a dim `{prompt}: ~` label
  (`flex items-center gap-2 px-4 py-2.5 border-b border-line`).
- Body: `px-5 py-5 text-sm leading-relaxed`, a stack of prompt lines each
  followed by its "output". Command groups separated by `mt-4`.

```
┌ terminal ───────────────────────────────┐
│ ● ● ●  user@host: ~                       │
├───────────────────────────────────────────┤
│ user@host:~$ whoami                        │
│ Name (xl, bold, fg)                        │
│ user@host:~$ cat bio.txt                   │
│ bio line 1 / bio line 2 (fg)               │
│ user@host:~$ ls ./links                    │
│ github   x   email        (accent-2 links) │
│ user@host:~$ ▋                             │
└───────────────────────────────────────────┘
```

## Components

- **`TerminalHero`** → `src/components/TerminalHero.astro` — the whole section.
  `prompt = ${SITE.user}@${SITE.host}`. Prompt line: `user@host` in `text-accent`,
  `~` in `text-accent-2`, `:`/`$` chrome in `text-fg-dim`, the command in
  `text-fg`. Name is `text-xl sm:text-2xl font-bold text-fg`; bio lines `text-fg`;
  links `text-accent-2 → hover text-accent`. Ends with `<span class="cursor">`.
- **`TerminalWindow`** → `src/components/TerminalWindow.astro` — the reusable
  window chrome (title bar with traffic-light dots + a dim `label` prop, over a
  `px-5 py-5 text-sm leading-relaxed` bordered body slot). `TerminalHero` now
  wraps its content in `<TerminalWindow label={`${prompt}: ~`}>` instead of
  hand-rolling the card, so the **terminal window** pattern lives in one place.
- Traffic-light dots use the only sanctioned raw hex
  (`#ff5f56` / `#ffbd2e` / `#27c93f`), defined once in `TerminalWindow`.

## States & interactions

- Social links: `text-accent-2` → hover `text-accent` (`transition-colors`),
  `target="_blank" rel="me noopener"`.
- Blinking cursor: `.cursor::after` `blink` keyframe (1.1s step-end infinite).
- No hover/focus state on the card itself (it's presentational).

## Accessibility checklist

- [x] Name / bio use `fg` on `bg-soft` (high contrast); `fg-dim` only for prompt chrome.
- [x] `accent-2` link text on `bg-soft` — verify ≥4.5:1; bump weight if borderline.
- [ ] **Gap:** social links have no `focus-visible` outline — add
      `focus-visible:outline focus-visible:outline-accent`.
- [ ] **Gap:** the `blink` cursor animation is **not** gated behind
      `@media (prefers-reduced-motion: reduce)` in `global.css` — add a guard.
- [x] Traffic-light dots and `▋` cursor are decorative; name/bio/links are real text.
- [ ] Consider marking the simulated `$`/prompt glyphs `aria-hidden` so screen
      readers read the content, not the shell punctuation.

## Implementation notes

Already built:

1. `src/components/TerminalWindow.astro` — reusable window chrome (`label` prop +
   default slot). Now the single home of the terminal-window pattern.
2. `src/components/TerminalHero.astro` — the hero section; wraps its body in
   `TerminalWindow`.
3. `src/config.ts` — `SITE.name`, `SITE.user`, `SITE.host`, `SITE.bio`, `SOCIALS`.
4. `src/pages/index.astro` — renders `<TerminalHero />` at the top of `<main>`.

No new tokens. Remaining follow-up: gate the cursor animation behind
`prefers-reduced-motion` (see the accessibility checklist).
