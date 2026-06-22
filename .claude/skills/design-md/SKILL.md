---
name: design-md
description: Turn a plain-language brief into a structured DESIGN.md spec — YAML design tokens plus markdown guidance for layout, components, and accessibility — tailored to this portfolio's terminal aesthetic, then scaffold matching Astro components and CSS tokens. Use when the user wants to design or plan a new page, section, or UI component for this site, asks for a "DESIGN.md", a design spec, design tokens, or wants UI scaffolded in the terminal style.
---

# DESIGN.md Generator

Transforms a plain-language product brief into a structured `DESIGN.md` for **this**
portfolio (Astro 7 + Tailwind v4, terminal aesthetic), then optionally scaffolds the
real code (CSS tokens + Astro components) that matches the spec.

This skill is **tailored** — it does not invent a design system. The canonical tokens,
patterns, and conventions live in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Reuse them;
only add a new token when the brief truly needs one, and flag it when you do.

## Quick start

User: *"Design a projects grid section for the home page."*

1. Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the canonical tokens & patterns.
2. Fill [TEMPLATE.md](TEMPLATE.md) → write to `docs/design/<slug>.md`.
3. If asked to build it, scaffold using the snippets in [snippets/](snippets/).

A complete worked output lives in [examples/projects-grid.md](examples/projects-grid.md).

## Workflow

1. **Get the brief.** Use what the user gave. If vague, ask at most 3 questions:
   *What is it (page / section / component)? What's its purpose? Key content or states?*
2. **Load the system.** Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Map the brief onto
   existing tokens (`bg`, `fg`, `fg-dim`, `accent`, `accent-2`, `line`) and patterns
   (terminal window, prompt line, blinking cursor, prose). Do **not** introduce new
   colors/fonts unless unavoidable.
3. **Write DESIGN.md.** Copy [TEMPLATE.md](TEMPLATE.md), fill every section, and save to
   `docs/design/<slug>.md` (create the folder if missing). Confirm the path if unsure.
4. **Scaffold (only if asked / approved).**
   - New tokens → add to the `@theme` block in `src/styles/global.css` (see
     [snippets/theme-tokens.css](snippets/theme-tokens.css) for the exact format).
   - Components → create in `src/components/` using existing utilities and the
     [snippets/TerminalWindow.astro](snippets/TerminalWindow.astro) wrapper. Keep
     content config-driven via `src/config.ts` where it fits the existing pattern.
5. **Accessibility pass.** Run the checklist in the template against what you produced
   (contrast, focus-visible, semantic HTML, `prefers-reduced-motion` for any animation).

## DESIGN.md output shape

- **YAML frontmatter** — meta (`title`, `brief`, `status`) + the `tokens` actually used.
- **Markdown body** — Overview · Layout · Components · States & interactions ·
  Accessibility checklist · Implementation notes (files to add/change).

## Rules

- One DESIGN.md = one feature/component. Keep it skimmable.
- Reference real files with paths (`src/components/Foo.astro`), not vague descriptions.
- Never hardcode hex values in components when a token utility exists (`text-accent`,
  not `text-[#3fb950]`). The only sanctioned raw hex are the traffic-light dots.
- Tailwind here is **v4 / CSS-first** — tokens are registered with `@theme`, there is
  no `tailwind.config.js`. Don't create one.
