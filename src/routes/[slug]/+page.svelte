<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="meta">
		<span>Published: {data.date}</span> <a href="/" class="pill">{data.category}</a>
	</p>
	<svelte:component this={data.content} />
</article>
