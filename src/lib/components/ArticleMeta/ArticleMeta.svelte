<script lang="ts">
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';

  export let metadata: MarkdownPost['metadata'];
</script>

<p class="meta">
  <span>Published: {metadata.date}</span>
  <a href="/" class="pill">{metadata.category}</a>
</p>

<style lang="scss">
  .meta {
    font-family: 'Roboto';
    font-size: 0.9rem;
    display: flex;
    gap: 50px;

    .pill {
      background-color: white;
      color: green;
      display: inline-block;
      padding: 0 1rem;
      text-decoration: none;
    }
  }
</style>
