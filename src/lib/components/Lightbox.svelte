<script>
	import '$lib/components/Card.scss';
	// TODO use type
	// import { MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
	/**
	 * @type string
	 */
	export let imgpath;
	/**
	 * @type string
	 */
	export let imgtitle;
</script>

<div class="card">
	<img width="500" src={imgpath} alt={imgtitle} />
</div>
