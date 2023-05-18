<script lang="ts">
  import '$lib/components/Card.scss';
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
  import ArticleMeta from './ArticleMeta/ArticleMeta.svelte';

  export let post: MarkdownPost;
</script>

<div class="card">
  <h2>
    <a data-sveltekit-reload href={post.path}>
      {post.metadata.title}
    </a>
  </h2>
  <ArticleMeta metadata={post.metadata} />
  <a data-sveltekit-reload class="preview" href={post.path}>
    {@html post.metadata.sanitizedPreviewHtml}
  </a>
</div>
