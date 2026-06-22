# Portfolio Design Docs

The whole portfolio expressed as `DESIGN.md` specs. Each file is one feature or
page, written against the canonical terminal design system and using only the
tokens registered in [`src/styles/global.css`](../../src/styles/global.css)'s
`@theme` block.

- **Source of truth for tokens & patterns:**
  [`.claude/skills/design-md/DESIGN_SYSTEM.md`](../../.claude/skills/design-md/DESIGN_SYSTEM.md)
- **Tokens** (dark default / `.light`): `bg`, `bg-soft`, `fg`, `fg-dim`,
  `accent` (green), `accent-2` (amber), `line`; one font family, `font-mono`.
- **Signature patterns:** terminal window · prompt line (`user@host:~$ cmd`) ·
  blinking cursor · prose (rendered markdown).

## Specs

| Doc | Covers | Status |
|-----|--------|--------|
| [site-chrome.md](site-chrome.md) | Global shell: `BaseLayout`, `Header`, `Footer`, theme toggle | built |
| [terminal-hero.md](terminal-hero.md) | `TerminalHero` + reusable `TerminalWindow` | built |
| [projects-grid.md](projects-grid.md) | `Projects` + `ProjectCard` — home-page projects grid | built |
| [post-list.md](post-list.md) | Home `ls ./posts` section + `PostCard` | built |
| [about-page.md](about-page.md) | `about.astro` — prompt header + prose | built |
| [blog-post.md](blog-post.md) | `PostLayout` + `.prose` markdown rendering | built |

## How to use this

- Adding a page/section/component? Run the `design-md` skill, write a new spec
  here first, get it to `status: approved`, then build it.
- Changing an existing one? Update its spec in the same change so the doc and
  the code never drift.
- Never hardcode hex in components when a token utility exists (`text-accent`,
  not `text-[#3fb950]`). The only sanctioned raw hex are the traffic-light dots.

## Known accessibility debt (surfaced by these specs)

These existing gaps are recorded in the per-doc checklists so they don't get
lost:

1. **No `focus-visible` styles.** Links/buttons rely on the UA default outline.
   Add an explicit `focus-visible:outline focus-visible:outline-accent` pattern.
2. **Cursor blink isn't reduced-motion-safe.** The `.cursor::after` `blink`
   keyframe in `global.css` runs regardless of `prefers-reduced-motion: reduce`.
