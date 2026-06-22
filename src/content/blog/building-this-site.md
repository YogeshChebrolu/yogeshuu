---
title: 'Building this site with Astro'
description: 'A quick tour of the stack: Astro content collections, Tailwind, and zero JavaScript by default.'
pubDate: 2026-06-20
tags: ['astro', 'web']
---

A short walkthrough of how this site is put together.

## The stack

- **Astro** for the framework — ships zero JavaScript by default, so pages are
  basically static HTML.
- **Content collections** for the blog — type-safe Markdown with a schema.
- **Tailwind CSS** for styling, via the Vite plugin.

## Adding a post

There's no CMS and no database. A post is a file:

```bash
# create a new post
touch src/content/blog/my-new-post.md
```

Fill in the frontmatter, write Markdown below it, and it's live on the next build.

## Why this is nice

The content *is* the source of truth, version-controlled in git. No lock-in, no
monthly bill, and it loads instantly.
