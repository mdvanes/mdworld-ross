---
title: 'Site Rebuild with Svelte'
cover: ''
date: '19-05-2023'
category: 'webdevelopment'
tags:
  - webdevelopment
---

<script>
import Lightbox from '$lib/components/Lightbox/Lightbox.svelte'
</script>

I wanted to update the previous version of the blog (<a
    href="https://github.com/mdvanes/mdworld-jackson">mdworld-jackson</a>) built on SSG (Static Site Generation) with Gatsby.
It was several majors of Gatsby behind and contained several workarounds that would take a lot of time to figure out, so I took it as an opportunity to move to a new stack. SSG with SvelteKit. Shying away from runtime component libraries or CSS sets, the target is to make a package that is a small as possible.

Recently I built [codestar-website-next](https://github.com/code-star/codestar-website-next), a
blog-like site built on SSG with NextJS. This was such a breeze, that I wanted to look at a
similar SSG driven stack for this new theme. I wanted to look into Svelte for some time, so after
experimenting for a couple of hours I landed on a new stack with Svelte, SvelteKit and Vite.

An important requirement to keep from the previous theme, is to support code in Markdown. In Gatsby it is possible to use React in Markdown with `MDX`, and Svelte supports a similar way of working with `MDsveX`:

```mdsvex
# This is a markdown heading

This is markdown text

<script>
import Lightbox from '$lib/components/Lightbox.svelte'
</script>

<Lightbox imgpath="/lightbox/mfe/module-federation.svg" imgtitle="Module Federation" />
```

Which is rendered as a clickable image:

<Lightbox imgpath="/lightbox/mfe/module-federation.svg" imgtitle="Module Federation" />

See the code for the `Lightbox` component in the [mdworld-ross repo](https://github.com/mdvanes/mdworld-ross/blob/main/src/lib/components/Lightbox.svelte).

The only missing technology from my wishlist was Deno, because of my preference for TypeScript. My
first SSG attempt [deno-ssg-blog](https://github.com/mdvanes/deno-ssg-blog) used a library that
was still experimental, but now there is [Deno Fresh](https://fresh.deno.dev/). It was too much
time to figure that out now when combining it with Svelte, so I will keep that for another
experiment.

For more information about the current stack, see the [about page](../about).

# Old themes

Static versions of the 2 last themes still run [here (2013-2018)](https://mdvanes.github.io/mdworld-ingram)
and [here (2010-2013)](https://mdvanes.github.io/mdworld-simon).

**Theme 2018-2023**

<simple-light-box img-path="/lightbox/theme-ingram.jpg" img-title="Theme 2013-2018"></simple-light-box>

**Theme 2013-2018**

<simple-light-box img-path="/lightbox/theme-ingram.jpg" img-title="Theme 2013-2018"></simple-light-box>

**Theme 2010-2013**

<simple-light-box img-path="/lightbox/theme-simon.jpg" img-title="Theme 2010-2013"></simple-light-box>

**Theme until 2010**

<Lightbox imgpath="https://mdvanes.github.io/mdworld-simon/sites/default/files/images/vorig_design.jpg" imgtitle="Theme until 2010" />
