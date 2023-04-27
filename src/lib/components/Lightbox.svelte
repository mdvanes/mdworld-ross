<script lang="ts">
	import '$lib/components/Lightbox.scss';
	export let imgpath: string;
	export let imgtitle: string;

	const handleClick = () => {
		alert('NYI');
	};
</script>

<button class="lightbox" on:click={handleClick}>
	<img width="500" src={imgpath} alt={imgtitle} />
</button>
