<script>
  import { MetaTags } from 'svelte-meta-tags';

  export let data;
</script>

<MetaTags title="Example Title" description="Example Description." />

<article>
  <!-- TODO add header image -->
  <h1>{data.title}</h1>
  <p class="meta">
    <span>Published: {data.date}</span> <a href="/" class="pill">{data.category}</a>
  </p>
  <svelte:component this={data.content} />
</article>
