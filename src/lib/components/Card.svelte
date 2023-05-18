<script lang="ts">
  import '$lib/components/Card.scss';
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';

  export let post: MarkdownPost;
</script>

<div class="card">
  <h2>
    <a data-sveltekit-reload href={post.path}>
      {post.metadata.title}
    </a>
  </h2>
  <!-- TODO restyle, add category -->
  Published {post.metadata.date}
  <a href="/" class="pill">{post.metadata.category}</a>
  <a data-sveltekit-reload class="preview" href={post.path}>
    {@html post.metadata.sanitizedPreviewHtml}
  </a>
</div>
