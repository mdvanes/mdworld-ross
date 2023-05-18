<script lang="ts">
  import '$lib/styles/style.scss';
  import '$lib/styles/prism-duotone-sea.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { fade } from 'svelte/transition';

  export let data;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />

{#key data.currentRoute}
  <main class="main-column" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<Footer />
