<script lang="ts">
  import ArticleMeta from '$lib/components/ArticleMeta/ArticleMeta.svelte';
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
  import { MetaTags } from 'svelte-meta-tags';

  export let data: MarkdownPost;
</script>

<MetaTags
  title={data.metadata.title}
  description={data.metadata.preview}
  openGraph={{
    url: `https://mdworld.nl/${data.currentRoute}`,
    title: data.metadata.title,
    description: data.metadata.preview,
    images: [
      {
        url: 'https://mdworld.nl/mdworld-ross/logos/logo-48.png',
        width: 48,
        height: 48,
        alt: 'MDWorld Logo'
      }
    ],
    site_name: 'https://mdworld.nl'
  }}
/>

<article>
  <h1>{data.metadata.title}</h1>
  <ArticleMeta metadata={data.metadata} />
  <svelte:component this={data.default} />
</article>
