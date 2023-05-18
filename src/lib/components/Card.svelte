<script lang="ts">
  import '$lib/components/Card.scss';
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
  export let post: MarkdownPost;
</script>

<div class="card">
  <h2>
    <a data-sveltekit-reload href={post.path}>
      {post.meta.title}
    </a>
  </h2>
  <!-- TODO restyle, add category -->
  Published {post.meta.date}
  <a href="/" class="pill">{post.meta.category}</a>
  <a data-sveltekit-reload href={post.path}>
    {post.meta.previewHtml}
  </a>
</div>
