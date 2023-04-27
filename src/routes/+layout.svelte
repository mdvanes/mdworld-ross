<script>
	import '$lib/style.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
