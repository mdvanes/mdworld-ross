<script>
  import { MetaTags } from 'svelte-meta-tags';

  export let data;
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
  <!-- TODO extract -->
  <p class="meta">
    <span>Published: {data.metadata.date}</span>
    <a href="/" class="pill">{data.metadata.category}</a>
  </p>
  <svelte:component this={data.default} />
</article>
