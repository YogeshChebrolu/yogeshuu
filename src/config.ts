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
  bio: ['Developer. I build things and write about them.'],
} as const;

/** Social links shown in the hero. Remove any you don't want. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'github', href: 'https://github.com/YogeshChebrolu' },
  { label: 'x', href: 'https://x.com/yogesh_chebrolu' },
  { label: 'linkedin', href: 'https://linkedin.com/in/yogesh-chebrolu/' },
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
    name: 'Alpha Brain',
    description:
      'Agentic AI second brain — captures ideas via Telegram, parses them into structured entries with Claude + Inngest, and persists to Supabase.',
    tags: ['claude', 'inngest', 'next.js', 'supabase'],
    demo: 'https://alpha-brain-five.vercel.app/login',
  },
  {
    name: 'InTrust',
    description:
      'AI insurance recommendation engine — RAG pipeline over 300+ IRDAI policies (Pinecone + Qwen3) with a chat-first, citation-verified interface.',
    tags: ['llm', 'rag', 'pinecone'],
    demo: 'https://in-trust-web.vercel.app',
  },
  {
    name: 'YouTube Multi-Modal RAG',
    description:
      'Chrome extension to chat with YouTube videos — custom multi-modal RAG combining transcripts with frame-synced visual retrieval, plus cross-video notes.',
    tags: ['rag', 'multimodal', 'chrome-extension'],
    repo: 'https://github.com/YogeshChebrolu/yt_rag_frontend',
  },
  {
    name: 'EN→IT Transformer',
    description:
      'English-to-Italian translator built from scratch in PyTorch — custom multi-head attention, positional encoding, and an end-to-end training pipeline.',
    tags: ['pytorch', 'transformers', 'nlp'],
    repo: 'https://github.com/YogeshChebrolu/Transformers-Implementation-in-PyTorch',
  },
  {
    name: 'restrict-me',
    description:
      'A small Windows desktop app that blocks distracting sites and keywords for 6, 12, or 24 hours via the hosts file.',
    tags: ['powershell', 'windows', 'desktop'],
    repo: 'https://github.com/YogeshChebrolu/restrict-me',
  },
];

/** Top navigation links. */
export const NAV: { label: string; href: string }[] = [
  { label: 'projects', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'resume', href: '/resume.pdf' },
];
