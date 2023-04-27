<script>
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.posts as post}
	<div>
		<h2>
			<a href={post.path}>
				{post.meta.title}
			</a>
		</h2>
		Published {post.meta.date}
	</div>
{/each}
