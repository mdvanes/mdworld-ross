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
  Published {post.meta.date}
</div>
