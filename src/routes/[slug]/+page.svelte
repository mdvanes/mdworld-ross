<script>
  import { MetaTags } from 'svelte-meta-tags';

  export let data;
</script>

<MetaTags
  title="Example Title"
  description="Example Description."
  openGraph={{
    url: 'https://mdworld.nl', // TODO
    title: data.title,
    description: 'Open Graph Description', // TODO
    images: [
      {
        url: 'https://mdworld.nl/mdworld-ross/logos/logo-1024.png',
        width: 1024,
        height: 1024,
        alt: 'MDWorld Logo'
      }
    ],
    site_name: 'https://mdworld.nl'
  }}
/>

<article>
  <!-- TODO add header image1 . -->
  <h1>{data.title}</h1>
  <p class="meta">
    <span>Published: {data.date}</span> <a href="/" class="pill">{data.category}</a>
  </p>
  <svelte:component this={data.content} />
</article>
