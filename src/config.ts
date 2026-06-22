/*
 * ┌──────────────────────────────────────────────────────────────┐
 * │  EDIT ME — this is the one file you change to make the site    │
 * │  yours. Name, bio, terminal prompt, and social links.          │
 * └──────────────────────────────────────────────────────────────┘
 */
export const SITE = {
  /** Shown in the browser tab and used for SEO / RSS. */
  title: 'yogesh',
  /** Used by RSS + sitemap. Update to your real domain. */
  url: 'https://example.com',
  description: 'Notes on building software.',

  /** Hero block (the terminal). */
  name: 'Yogesh',
  /** The username shown after the prompt, e.g. user@host. */
  user: 'yogesh',
  host: 'localhost',
  /** Lines "printed" by the fake `whoami` command in the hero. */
  bio: [
    'Developer. I build things and write about them.',
    'Currently exploring AI tooling and the web.',
  ],
} as const;

/** Social links shown in the hero. Remove any you don't want. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'github', href: 'https://github.com/YogeshChebrolu' },
  { label: 'x', href: 'https://x.com/yogesh_chebrolu' },
  { label: 'email', href: 'mailto:chebroluyogesh25@gmail.com' },
];

/** Selected projects, shown as a grid on the home page. Edit/remove freely. */
export const PROJECTS: {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
}[] = [
  {
    name: 'yogeshuu',
    description: 'This terminal-themed portfolio — Astro 7 + Tailwind v4.',
    tags: ['astro', 'tailwind'],
    repo: 'https://github.com/YogeshChebrolu/yogeshuu',
  },
  {
    name: 'project-two',
    description: 'Short one-line description. Edit me in src/config.ts.',
    tags: ['typescript'],
    repo: 'https://github.com/yourusername/project-two',
  },
  {
    name: 'project-three',
    description: 'Another thing you built — add a repo and/or demo link.',
    tags: ['node', 'cli'],
    demo: 'https://example.com',
  },
];

/** Top navigation links. */
export const NAV: { label: string; href: string }[] = [
  { label: 'posts', href: '/' },
  { label: 'about', href: '/about' },
];
