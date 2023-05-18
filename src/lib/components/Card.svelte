<script lang="ts">
  // import { JSDOM } from 'jsdom';
  // import DOMPurify from 'dompurify';
  import '$lib/components/Card.scss';
  import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';

  export let post: MarkdownPost;

  // const window = new JSDOM('').window;
  // const purify = DOMPurify(window);
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
  <!-- TODO safe decode -->
  <a data-sveltekit-reload href={post.path}>
    <!-- {@html purify.sanitize(post.meta.previewHtml ?? '')} -->
    {@html post.metadata.sanitizedPreviewHtml}
  </a>
</div>
