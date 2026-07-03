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

  /** Hero block. */
  name: 'Yogesh',
  /** Small eyebrow label above the hero heading. */
  role: 'AI Engineer',
  /** Big hero heading — the one-liner that defines you. */
  headline: 'I build multi-modal AI systems and agentic workflows.',
  /** Supporting sentence under the heading. */
  tagline:
    "I'm Yogesh, an AI engineer. I mostly automate my own life with the things I build.",

  /** Kept for legacy references; no longer shown. */
  user: 'yogesh',
  host: 'localhost',
  bio: ['Developer. I build things and write about them.'],
} as const;

/** Social links shown in the hero. Remove any you don't want. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'github', href: 'https://github.com/YogeshChebrolu' },
  { label: 'x', href: 'https://x.com/yogesh_chebrolu' },
  { label: 'linkedin', href: 'https://linkedin.com/in/yogesh-chebrolu/' },
  { label: 'email', href: 'mailto:chebroluyogesh25@gmail.com' },
];

/** Selected projects, shown as large preview cards on the home page. Edit/remove freely. */
export const PROJECTS: {
  name: string;
  description: string;
  image: string;
  tags: string[];
  repo?: string;
  demo?: string;
}[] = [
  {
    name: 'Alpha Brain',
    description:
      'Agentic AI second brain — captures ideas via Telegram, parses them into structured entries with Claude + Inngest, and persists to Supabase.',
    image: '/works/alpha-brain.png',
    tags: ['claude', 'inngest', 'next.js', 'supabase'],
    demo: 'https://alpha-brain-five.vercel.app/login',
  },
  {
    name: 'InTrust',
    description:
      'AI insurance recommendation engine — RAG pipeline over 300+ IRDAI policies (Pinecone + Qwen3) with a chat-first, citation-verified interface.',
    image: '/works/intrust.png',
    tags: ['llm', 'rag', 'pinecone'],
    demo: 'https://in-trust-web.vercel.app',
  },
  {
    name: 'YouTube Multi-Modal RAG',
    description:
      'Chrome extension to chat with YouTube videos — custom multi-modal RAG combining transcripts with frame-synced visual retrieval, plus cross-video notes.',
    image: '/works/yt-rag.png',
    tags: ['rag', 'multimodal', 'chrome-extension'],
    repo: 'https://github.com/YogeshChebrolu/yt_rag_frontend',
  },
  {
    name: 'EN→IT Transformer',
    description:
      'English-to-Italian translator built from scratch in PyTorch — custom multi-head attention, positional encoding, and an end-to-end training pipeline.',
    image: '/works/transformer.png',
    tags: ['pytorch', 'transformers', 'nlp'],
    repo: 'https://github.com/YogeshChebrolu/Transformers-Implementation-in-PyTorch',
  },
  {
    name: 'restrict-me',
    description:
      'A small Windows desktop app that blocks distracting sites and keywords for 6, 12, or 24 hours via the hosts file.',
    image: '/works/restrict-me.png',
    tags: ['powershell', 'windows', 'desktop'],
    repo: 'https://github.com/YogeshChebrolu/restrict-me',
  },
];

/** Work experience, shown as a timeline in the home page Experience section. */
export const EXPERIENCE: {
  role: string;
  org: string;
  orgHref?: string;
  period: string;
  type?: string;
  current?: boolean;
  summary?: string;
  points?: string[];
  stack: string[];
}[] = [
  {
    role: 'AI Engineering Intern',
    org: 'Kairos Computer',
    orgHref: 'https://kairos.computer',
    period: 'Jul 2025 – Mar 2026',
    type: 'Internship',
    points: [
      'Built Sandbox Agents — agents that control a browser and take autonomous actions to automate repetitive tasks.',
      'Worked on agent evals & benchmarking and an Email Agent.',
    ],
    stack: ['TypeScript', 'Python', 'FastAPI', 'Postgres'],
  },
  {
    role: 'AI Research Intern',
    org: 'Stealth Startup (Educational AI)',
    period: 'Mar 2025 – Jun 2025',
    type: 'Internship',
    points: [
      'Built MCP clients for Claude Desktop.',
      'Built a video pipeline to process YouTube videos.',
    ],
    stack: ['LangGraph', 'LangChain', 'FastMCP', 'Pydantic', 'RAG'],
  },
];

/** Short intro shown at the top of the home page About section. */
export const ABOUT_INTRO =
  "Hi, I'm Yogesh 👋 — an AI Engineer building multi-modal AI systems and agentic workflows. I mostly automate my own life with them.";

/**
 * Tools/technologies shown as icons in the About section.
 * `slug` maps to a Simple Icons name (served via cdn.simpleicons.org).
 */
export const TOOLS: { name: string; slug: string; color?: string }[] = [
  { name: 'Python', slug: 'python' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'fafafa' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'Hono', slug: 'hono' },
  { name: 'Convex', slug: 'convex' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'LangChain', slug: 'langchain' },
  { name: 'LangGraph', slug: 'langgraph', color: 'fafafa' },
  { name: 'Pydantic AI', slug: 'pydantic' },
  { name: 'CrewAI', slug: 'crewai' },
  { name: 'PyTorch', slug: 'pytorch' },
  { name: 'Anthropic', slug: 'anthropic', color: 'fafafa' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github', color: 'fafafa' },
];

/** Skill areas without a brand icon — shown as plain text beneath the tools grid. */
export const FOCUS_AREAS = [
  'AI SDK',
  'MCP',
  'RAG',
  'NLP',
  'Deep Learning',
  'Prompt Engineering',
  'AWS',
  'CI/CD',
];

/** Sidebar navigation. Hash links jump to sections on the home page. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Works', href: '/#works' },
  { label: 'About', href: '/#about' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Resume', href: '/resume.pdf' },
];
