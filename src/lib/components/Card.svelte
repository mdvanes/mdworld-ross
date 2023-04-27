<script>
    import '$lib/components/Card.scss';
    // TODO use type
	// import { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
	/**
	 * @type {{ path: any; meta: { title: any; date: any; }; }}
	 */
	export let post;
</script>

<div class="card">
	<h2>
		<a href={post.path}>
			{post.meta.title}
		</a>
	</h2>
	Published {post.meta.date}
</div>
