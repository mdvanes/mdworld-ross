<script>
  import Card from '$lib/components/Card/Card.svelte';
  export let data;
</script>

<h1>MDWORLD</h1>
<h2>a webdevelopment blog, since 2003</h2>

<div class="columns">
  <div class="post-list">
    {#each data.posts as post}
      <Card {post} />
    {/each}
    <p>
      Looking for even older posts? <a href="https://mdvanes.github.io/mdworld-simon">Go here</a>.
    </p>
  </div>
  <aside>Add something here</aside>
</div>

<style>
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 9.5vw;
    line-height: 1em;
    margin: 0;
  }

  h2 {
    margin-top: 0;
    margin-left: 0.5rem;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  .columns .post-list {
    flex: 1;
  }

  .columns aside {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 300px;
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
