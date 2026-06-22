# Design System — Terminal aesthetic

Canonical reference for the portfolio. Source of truth lives in
`src/styles/global.css` (`@theme` block). Keep this file in sync if those change.

Stack: **Astro 7**, **Tailwind CSS v4** (CSS-first `@theme`, no config file),
`@astrojs/rss`, `@astrojs/sitemap`. Everything is monospace, dark-by-default,
styled to look like a terminal.

## Tokens

Registered in `@theme`, so each is available as a Tailwind utility.

| Token | Dark (default) | Light (`.light`) | Utilities |
|-------|----------------|------------------|-----------|
| `--color-bg` | `#0a0e14` | `#f6f8fa` | `bg-bg`, `text-bg` |
| `--color-bg-soft` | `#11161f` | `#ffffff` | `bg-bg-soft` |
| `--color-fg` | `#c9d1d9` | `#1f2328` | `text-fg`, `bg-fg` |
| `--color-fg-dim` | `#7d8590` | `#57606a` | `text-fg-dim` |
| `--color-accent` (green) | `#3fb950` | `#1a7f37` | `text-accent`, `bg-accent`, `border-accent` |
| `--color-accent-2` (amber) | `#d29922` | `#9a6700` | `text-accent-2` |
| `--color-line` | `#1f2630` | `#d0d7de` | `border-line` |

Font: `--font-mono` → `font-mono`
(`JetBrains Mono, Fira Code, ui-monospace, 'SF Mono', Menlo, Consolas, monospace`).
There is **no** sans/serif family — everything is mono on purpose.

Theme switch: light mode is opt-in by adding `.light` to `<html>`; the choice is
persisted in `localStorage` and applied before paint (see `BaseLayout.astro`).

## Scale & layout

- Page container: `w-full max-w-3xl mx-auto px-5 sm:px-6` (≈48rem reading column).
- Main vertical rhythm: `py-10` on `<main>`; sections start with `mt-8`.
- Radius: cards `rounded-lg` (8px), inline code 4px, dots `rounded-full`.
- Borders: 1px `border-line`. Cards add `shadow-sm`.
- Body text `text-sm`/`leading-relaxed` in chrome; prose uses `line-height: 1.75`.

## Signature patterns

**Terminal window** — the hero card. Title bar with three traffic-light dots
(`#ff5f56` / `#ffbd2e` / `#27c93f` — the only sanctioned raw hex) + a dim label,
then a bordered body. Reusable wrapper: `snippets/TerminalWindow.astro`.

**Prompt line** — `user@host:~$ command` where `user@host` is `text-accent`, the
`~` is `text-accent-2`, `$` and chrome are `text-fg-dim`, and the typed command is
`text-fg`. The prompt string comes from `SITE.user` + `SITE.host` in `src/config.ts`.

```astro
<p class="text-fg-dim">
  <span class="text-accent">{prompt}</span>:<span class="text-accent-2">~</span>$
  <span class="text-fg">whoami</span>
</p>
```

**Blinking cursor** — `<span class="cursor"></span>` (the `.cursor::after`
keyframe in `global.css`). Use sparingly, at the end of a prompt.

**Prose** (rendered markdown) — headings are prefixed with `## ` / `### ` in
`text-accent`; list bullets render as `- ` in accent; links are `text-accent-2`
underlined; blockquotes have an accent left border; `code`/`pre` sit on `bg-soft`
with a `line` border. Defined under `.prose` in `global.css`.

## Content & code conventions

- Site copy (name, bio, prompt, socials, nav) is **config-driven** in
  `src/config.ts`. New repeated/listy content should follow that pattern.
- Components are `.astro` in `src/components/`; pages in `src/pages/`; blog posts
  are markdown in `src/content/blog/` via Astro content collections.
- Prefer token utilities (`text-accent`) over arbitrary values (`text-[#3fb950]`).
- Keep components small and presentational; pass data via props or config.

## Accessibility baseline

- `fg` on `bg` is high-contrast (good for body). **`fg-dim` is for secondary text
  only** — don't use it for primary content or small critical labels.
- Verify any new `accent`/`accent-2`-on-`bg` text meets WCAG AA (≥4.5:1 for normal,
  ≥3:1 for large/bold). Green/amber on the dark bg are borderline at small sizes.
- Provide `focus-visible` styles for interactive elements (the default outline is
  removed implicitly by some resets — make focus obvious, e.g. `outline-accent`).
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, headings in order).
- Any animation (cursor blink, transitions) must respect
  `@media (prefers-reduced-motion: reduce)`.
- Decorative glyphs (traffic-light dots, `▋` cursor, `## ` prefixes) must not be the
  only carrier of meaning; keep real text/aria for screen readers.
