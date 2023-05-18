<script>
  import { MetaTags } from 'svelte-meta-tags';

  export let data;
</script>

<MetaTags
  title={data.title}
  description={data.preview}
  openGraph={{
    url: `https://mdworld.nl/${data.currentRoute}`,
    title: data.title,
    description: data.preview,
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
  <!-- TODO add header image1 .. -->
  <h1>{data.title}</h1>
  <p class="meta">
    <span>Published: {data.date}</span> <a href="/" class="pill">{data.category}</a>
  </p>
  <svelte:component this={data.content} />
</article>
