---
title: 'Hello, world'
description: 'The first post — why this blog exists and what to expect.'
pubDate: 2026-06-22
tags: ['meta']
---

This is the first post on my new blog. I built it with [Astro](https://astro.build),
and the whole thing is just Markdown files in a folder.

## Why I'm writing

I think better when I write things down. This is the place where I'll do that —
notes on what I'm building, things I learned the hard way, and the occasional
opinion.

## How posts work

Each post is a single Markdown file in `src/content/blog/`. The frontmatter at the
top sets the title, date, and tags:

```yaml
---
title: 'Hello, world'
description: 'The first post.'
pubDate: 2026-06-22
tags: ['meta']
---
```

To publish a new post, drop a new `.md` file in that folder and it shows up
automatically. To hide a draft, add `draft: true` to the frontmatter.

> Write it. Ship it. Iterate.

That's the whole system.
