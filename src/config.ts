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
  { label: 'github', href: 'https://github.com/yourusername' },
  { label: 'x', href: 'https://x.com/yourusername' },
  { label: 'email', href: 'mailto:you@example.com' },
];

/** Top navigation links. */
export const NAV: { label: string; href: string }[] = [
  { label: 'posts', href: '/' },
  { label: 'about', href: '/about' },
];
